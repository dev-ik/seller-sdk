import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";
import { describe, expect, it } from "vitest";
import YAML from "yaml";
import {
  ozonDomainAliases,
  ozonDomainMethods,
} from "../../packages/ozon/src/domain-methods.js";

const projectDirectory = fileURLToPath(new URL("../..", import.meta.url));
const HTTP_METHODS = new Set(["get", "post", "put", "patch", "delete"]);

interface ManifestOperation {
  readonly id: string;
  readonly operationId: string;
  readonly sdkMethod: string;
  readonly method: string;
  readonly path: string;
  readonly status?: string;
  readonly domain?: string;
  readonly methodName?: string;
}

interface OpenApiOperation {
  readonly operationId?: string;
  readonly deprecated?: boolean;
  readonly description?: string;
}

interface OpenApiDocument {
  readonly paths?: Readonly<
    Record<string, Readonly<Record<string, OpenApiOperation>>>
  >;
}

describe("marketplace method deprecations", () => {
  it("maps every deprecated Ozon operation to official and SDK replacements", async () => {
    const [specification, manifest, domainApi] = await Promise.all([
      readJson<OpenApiDocument>("docs/ozon/swagger.json"),
      readJson<{ operations: readonly ManifestOperation[] }>(
        "docs/ozon/endpoints.json",
      ),
      readFile(
        path.join(
          projectDirectory,
          "packages/ozon/src/domain-api.generated.ts",
        ),
        "utf8",
      ),
    ]);
    const manifestByOperationId = new Map(
      manifest.operations.map((operation) => [
        operation.operationId,
        operation,
      ]),
    );
    const manifestByPath = new Map(
      manifest.operations.map((operation) => [operation.path, operation]),
    );
    const deprecated = collectDeprecatedOzonOperations(specification).map(
      ({ operationId, notice }) => {
        const operation = manifestByOperationId.get(operationId);
        expect(operation, operationId).toBeDefined();
        const replacementPaths = extractVersionedPaths(notice);
        expect(replacementPaths, operationId).not.toHaveLength(0);
        return { operation: operation!, replacementPaths };
      },
    );
    const deprecatedByMethod = new Map(
      deprecated.map((entry) => [entry.operation.sdkMethod, entry]),
    );
    const generatedTags = readOzonDomainDeprecatedTags(domainApi);

    expect(deprecated).toHaveLength(27);
    for (const operation of manifest.operations) {
      const domainName = findOzonDomain(operation.sdkMethod);
      const tag = generatedTags.get(`${domainName}.${operation.sdkMethod}`);
      const deprecation = deprecatedByMethod.get(operation.sdkMethod);

      if (deprecation === undefined) {
        expect(tag, operation.sdkMethod).toBeUndefined();
        continue;
      }

      expect(tag, operation.sdkMethod).toBeDefined();
      for (const replacementPath of deprecation.replacementPaths) {
        const replacement = manifestByPath.get(replacementPath);
        expect(replacement, replacementPath).toBeDefined();
        const replacementDomain = findOzonDomain(replacement!.sdkMethod);
        expect(tag).toContain(replacementPath);
        expect(tag).toContain(
          `ozon.${replacementDomain}.${replacement!.sdkMethod}(...)`,
        );
      }
    }

    let deprecatedAliasCount = 0;
    for (const [domainName, aliases] of Object.entries(ozonDomainAliases)) {
      for (const [alias, target] of Object.entries(aliases)) {
        const tag = generatedTags.get(`${domainName}.${alias}`);
        if (deprecatedByMethod.has(target)) {
          deprecatedAliasCount += 1;
          expect(tag, `${domainName}.${alias}`).toContain("Замен");
        } else {
          expect(tag, `${domainName}.${alias}`).toBeUndefined();
        }
      }
    }

    expect(generatedTags.size).toBe(deprecated.length + deprecatedAliasCount);
  });

  it("does not infer WB method deprecations from nested schemas", async () => {
    const [manifest, generatedApi] = await Promise.all([
      readJson<{ operations: readonly ManifestOperation[] }>(
        "docs/wb/endpoints.json",
      ),
      readFile(
        path.join(projectDirectory, "packages/wb/src/api.generated.ts"),
        "utf8",
      ),
    ]);
    const swaggerDirectory = path.join(projectDirectory, "docs/wb/swagger");
    const swaggerFiles = (await readdir(swaggerDirectory))
      .filter((fileName) => fileName.endsWith(".yaml"))
      .sort();
    const specifications = await Promise.all(
      swaggerFiles.map(async (fileName) =>
        YAML.parse(
          await readFile(path.join(swaggerDirectory, fileName), "utf8"),
        ),
      ),
    );
    const sourceDeprecatedCount = specifications.reduce(
      (total, specification: OpenApiDocument) =>
        total + collectDeprecatedWbOperations(specification).length,
      0,
    );
    const manifestDeprecated = manifest.operations.filter(
      (operation) => operation.status === "deprecated",
    );
    const generatedTags = readAllDeprecatedPropertyTags(
      generatedApi,
      "packages/wb/src/api.generated.ts",
    );

    expect(sourceDeprecatedCount).toBe(0);
    expect(manifestDeprecated).toHaveLength(sourceDeprecatedCount);
    expect(generatedTags.size).toBe(manifestDeprecated.length);
    for (const operation of manifest.operations) {
      const tag = generatedTags.get(operation.methodName!);
      if (operation.status === "deprecated") {
        expect(tag, operation.methodName).toContain("Замен");
        expect(tag, operation.methodName).toContain("wb.");
      } else {
        expect(tag, operation.methodName).toBeUndefined();
      }
    }
  });
});

async function readJson<T>(relativePath: string): Promise<T> {
  return JSON.parse(
    await readFile(path.join(projectDirectory, relativePath), "utf8"),
  ) as T;
}

function collectDeprecatedOzonOperations(specification: OpenApiDocument) {
  return Object.entries(specification.paths ?? {}).flatMap(([, pathItem]) =>
    Object.entries(pathItem).flatMap(([method, operation]) => {
      if (!HTTP_METHODS.has(method)) return [];
      const warning = readWarning(operation.description);
      if (
        operation.deprecated !== true &&
        !/(устар|отключ|deprecated|shut down)/i.test(warning)
      ) {
        return [];
      }
      expect(operation.operationId).toBeTypeOf("string");
      return [{ operationId: operation.operationId!, notice: warning }];
    }),
  );
}

function collectDeprecatedWbOperations(specification: OpenApiDocument) {
  return Object.entries(specification.paths ?? {}).flatMap(([, pathItem]) =>
    Object.entries(pathItem).filter(
      ([method, operation]) =>
        HTTP_METHODS.has(method) &&
        (operation.deprecated === true ||
          isMethodDeprecationDescription(operation.description)),
    ),
  );
}

function isMethodDeprecationDescription(value: string | undefined): boolean {
  const description = String(value ?? "");
  const subject = "(?:метод|method|endpoint|operation)";
  const lifecycle =
    "(?:deprecated|obsolete|устар(?:ел|евает|евший)?|отключ(?:ён|ен|им|ат|ится)?)";
  return (
    new RegExp(`${subject}.{0,160}${lifecycle}`, "iu").test(description) ||
    new RegExp(`${lifecycle}.{0,160}${subject}`, "iu").test(description)
  );
}

function readWarning(description: string | undefined): string {
  const match = String(description ?? "").match(
    /<aside[^>]*class=["']warning["'][^>]*>([\s\S]*?)<\/aside>/i,
  );
  return String(match?.[1] ?? "")
    .replace(/<br\s*\/?\s*>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractVersionedPaths(value: string): readonly string[] {
  return [
    ...new Set(
      [...value.matchAll(/\/v\d+\/[a-z0-9_{}-]+(?:\/[a-z0-9_{}-]+)*/gi)].map(
        (match) => match[0],
      ),
    ),
  ];
}

function findOzonDomain(methodName: string): string {
  const entry = Object.entries(ozonDomainMethods).find(([, methods]) =>
    (methods as readonly string[]).includes(methodName),
  );
  if (entry === undefined) throw new Error(`No Ozon domain for ${methodName}.`);
  return entry[0];
}

function readOzonDomainDeprecatedTags(source: string): Map<string, string> {
  const sourceFile = ts.createSourceFile(
    "packages/ozon/src/domain-api.generated.ts",
    source,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  );
  const result = new Map<string, string>();

  const visit = (node: ts.Node): void => {
    if (
      ts.isInterfaceDeclaration(node) &&
      node.name.text === "GeneratedOzonDomainApi"
    ) {
      for (const domain of node.members) {
        if (!ts.isPropertySignature(domain) || !domain.type) continue;
        if (!ts.isTypeLiteralNode(domain.type)) continue;
        const domainName = domain.name.getText(sourceFile);
        for (const method of domain.type.members) {
          if (!ts.isPropertySignature(method)) continue;
          const tag = ts.getJSDocDeprecatedTag(method);
          if (tag !== undefined) {
            result.set(
              `${domainName}.${method.name.getText(sourceFile)}`,
              tag.getText(sourceFile),
            );
          }
        }
      }
    }
    ts.forEachChild(node, visit);
  };
  visit(sourceFile);
  return result;
}

function readAllDeprecatedPropertyTags(
  source: string,
  fileName: string,
): Map<string, string> {
  const sourceFile = ts.createSourceFile(
    fileName,
    source,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  );
  const result = new Map<string, string>();
  const visit = (node: ts.Node): void => {
    if (ts.isPropertySignature(node)) {
      const tag = ts.getJSDocDeprecatedTag(node);
      if (tag !== undefined) {
        result.set(node.name.getText(sourceFile), tag.getText(sourceFile));
      }
    }
    ts.forEachChild(node, visit);
  };
  visit(sourceFile);
  return result;
}
