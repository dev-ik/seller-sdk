import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";

const projectDirectory = new URL("../", import.meta.url);
const specificationUrl = new URL("docs/ozon/swagger.json", projectDirectory);
const metadataUrl = new URL("docs/ozon/swagger.meta.json", projectDirectory);
const catalogUrl = new URL("docs/ozon/catalog.json", projectDirectory);
const checkOnly = process.argv.includes("--check");
const httpMethods = new Set(["get", "post", "put", "patch", "delete"]);

const specificationText = await readFile(specificationUrl, "utf8");
const specification = JSON.parse(specificationText);
const metadata = JSON.parse(await readFile(metadataUrl, "utf8"));
const actualSha256 = createHash("sha256")
  .update(specificationText)
  .digest("hex");

if (actualSha256 !== metadata.sha256) {
  throw new Error(
    `Ozon OpenAPI SHA-256 mismatch: expected ${metadata.sha256}, received ${actualSha256}. Update swagger.meta.json after verifying the new official snapshot.`,
  );
}

const operations = [];

for (const [path, pathItem] of Object.entries(specification.paths ?? {})) {
  for (const [method, operation] of Object.entries(pathItem)) {
    if (!httpMethods.has(method)) continue;

    operations.push({
      operationId: operation.operationId,
      method: method.toUpperCase(),
      path,
      tags: operation.tags ?? [],
      summary: operation.summary ?? "",
      ...(operation.description === undefined
        ? {}
        : { description: operation.description }),
      deprecated: operation.deprecated === true,
      parameters: (operation.parameters ?? []).map((parameter) =>
        summarizeParameter(specification, parameter),
      ),
      requestBody: summarizeRequestBody(operation.requestBody),
      responses: Object.fromEntries(
        Object.entries(operation.responses ?? {}).map(([status, response]) => [
          status,
          summarizeResponse(response),
        ]),
      ),
    });
  }
}

const catalog = {
  schemaVersion: 1,
  marketplace: "ozon",
  source: {
    file: "swagger.json",
    url: metadata.source,
    retrievedAt: metadata.retrievedAt,
    sha256: metadata.sha256,
    openapiVersion: specification.openapi,
    documentVersion: String(specification.info?.version ?? ""),
  },
  operationCount: operations.length,
  operations,
};
const catalogText = `${JSON.stringify(catalog, null, 2)}\n`;

if (checkOnly) {
  const currentCatalog = await readFile(catalogUrl, "utf8");
  if (currentCatalog !== catalogText) {
    throw new Error(
      "docs/ozon/catalog.json is stale. Run pnpm update:endpoints.",
    );
  }
} else {
  await writeFile(catalogUrl, catalogText, "utf8");
  console.log(`Generated ${operations.length} Ozon endpoint records.`);
}

function resolveReference(document, reference) {
  if (!reference.startsWith("#/")) return undefined;
  return reference
    .slice(2)
    .split("/")
    .reduce(
      (value, segment) =>
        value?.[segment.replaceAll("~1", "/").replaceAll("~0", "~")],
      document,
    );
}

function summarizeParameter(document, parameter) {
  const reference = parameter.$ref;
  const resolved = reference
    ? resolveReference(document, reference)
    : parameter;

  return {
    ...(reference === undefined ? {} : { reference }),
    name: resolved?.name ?? "",
    in: resolved?.in ?? "",
    required: resolved?.required === true,
    ...(resolved?.description === undefined
      ? {}
      : { description: resolved.description }),
    schemaReferences: collectReferences(resolved?.schema),
  };
}

function summarizeRequestBody(requestBody) {
  if (requestBody == null) return null;
  return {
    required: requestBody.required === true,
    content: summarizeContent(requestBody.content),
  };
}

function summarizeResponse(response) {
  return {
    description: response.description ?? "",
    content: summarizeContent(response.content),
  };
}

function summarizeContent(content = {}) {
  return Object.fromEntries(
    Object.entries(content).map(([contentType, mediaType]) => [
      contentType,
      {
        schemaReferences: collectReferences(mediaType.schema),
      },
    ]),
  );
}

function collectReferences(value) {
  const references = new Set();
  visit(value);
  return [...references].sort();

  function visit(current) {
    if (Array.isArray(current)) {
      for (const item of current) visit(item);
      return;
    }
    if (current === null || typeof current !== "object") return;
    if (typeof current.$ref === "string") references.add(current.$ref);
    for (const child of Object.values(current)) visit(child);
  }
}
