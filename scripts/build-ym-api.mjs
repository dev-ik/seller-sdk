import { createHash } from "node:crypto";
import {
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { basename, dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { format } from "prettier";
import YAML from "yaml";

const projectDirectory = dirname(dirname(fileURLToPath(import.meta.url)));
const openapiDirectory = join(projectDirectory, "docs/ym/openapi");
const metadata = readJson("docs/ym/openapi.meta.json");
const ymSourceDirectory = join(projectDirectory, "packages/ym/src");
const outputPath = join(ymSourceDirectory, "api.generated.ts");
const endpointsDirectory = join(ymSourceDirectory, "endpoints");
const contractsDirectory = join(ymSourceDirectory, "contracts");
const manifestPath = join(projectDirectory, "docs/ym/endpoints.json");
const referencePath = join(projectDirectory, "docs/ym/API-REFERENCE.md");
const checkOnly = process.argv.includes("--check");
const HTTP_METHODS = new Set(["get", "post", "put", "patch", "delete"]);

const bundledDocument = loadBundledDocument();
const documents = createDomainEntries(bundledDocument);
for (const entry of documents) {
  entry.componentTypeNames = createComponentTypeNames(entry);
}

const operationNames = new Set();
const operations = documents.flatMap((entry) =>
  collectOperations(entry).map((operation) => {
    if (operationNames.has(operation.methodName)) {
      throw new Error(
        `Duplicate generated YM method: ${operation.methodName}.`,
      );
    }
    operationNames.add(operation.methodName);
    return operation;
  }),
);

if (operations.length !== 165) {
  throw new Error(`Expected 165 YM operations, found ${operations.length}.`);
}
for (const operation of operations) {
  operation.deprecation = createYmDeprecation(operation, operations);
}
const operationAliases = collectVersionlessAliases(operations);

const generatedFiles = new Map();
for (const [path, source] of renderGeneratedFiles(
  documents,
  operations,
  operationAliases,
)) {
  const formatted = await format(source, { parser: "typescript" });
  if (formatted.includes("{%") || formatted.includes("{{")) {
    throw new Error(
      `Unresolved Yandex documentation template directive in ${relative(projectDirectory, path)}.`,
    );
  }
  generatedFiles.set(path, formatted);
}
const manifestSource = await format(
  `${JSON.stringify(renderManifest(documents, operations, operationAliases), null, 2)}\n`,
  { parser: "json" },
);
const referenceSource = await format(
  renderReference(documents, operations, operationAliases),
  {
    parser: "markdown",
  },
);

if (checkOnly) {
  for (const [path, source] of generatedFiles) {
    checkFile(path, source, "pnpm update:ym");
  }
  checkGeneratedFileSet(generatedFiles);
  checkFile(manifestPath, manifestSource, "pnpm update:ym");
  checkFile(referencePath, referenceSource, "pnpm update:ym");
  console.log(`YM generated API is current (${operations.length} operations).`);
} else {
  rmSync(endpointsDirectory, { recursive: true, force: true });
  rmSync(contractsDirectory, { recursive: true, force: true });
  for (const [path, source] of generatedFiles) {
    mkdirSync(dirname(path), { recursive: true });
    writeFileSync(path, source);
  }
  writeFileSync(manifestPath, manifestSource);
  writeFileSync(referencePath, referenceSource);
  console.log(`Generated YM API for ${operations.length} operations.`);
}

function loadBundledDocument() {
  const root = readYaml("openapi.yaml");
  const components = {};
  for (const componentKind of ["parameters", "responses", "schemas"]) {
    const directory = join(openapiDirectory, "components", componentKind);
    components[componentKind] = Object.fromEntries(
      readdirSync(directory)
        .filter((file) => file.endsWith(".yaml"))
        .sort()
        .map((file) => [
          basename(file, ".yaml"),
          rewriteExternalRefs(
            readYaml(`components/${componentKind}/${file}`),
            `components/${componentKind}/${file}`,
          ),
        ]),
    );
  }

  const paths = Object.fromEntries(
    Object.entries(root.paths ?? {}).map(([path, pathReference]) => {
      const reference = pathReference?.$ref;
      if (typeof reference !== "string" || !reference.startsWith("paths/")) {
        throw new Error(`Expected an external YM path reference for ${path}.`);
      }
      return [path, rewriteExternalRefs(readYaml(reference), reference)];
    }),
  );

  return { ...root, paths, components };
}

function createDomainEntries(document) {
  const pathsByDomain = new Map();
  for (const [path, pathItem] of Object.entries(document.paths ?? {})) {
    for (const [method, operation] of Object.entries(pathItem)) {
      if (!HTTP_METHODS.has(method)) continue;
      const sourceTag = operation.tags?.[0];
      if (typeof sourceTag !== "string" || sourceTag.length === 0) {
        throw new Error(
          `Missing primary tag for YM ${method.toUpperCase()} ${path}.`,
        );
      }
      const domain = toCamelCase(sourceTag);
      const domainPaths = pathsByDomain.get(domain) ?? {};
      const domainPathItem = domainPaths[path] ?? {};
      domainPathItem[method] = operation;
      if (pathItem.parameters !== undefined) {
        domainPathItem.parameters = pathItem.parameters;
      }
      domainPaths[path] = domainPathItem;
      pathsByDomain.set(domain, domainPaths);
    }
  }

  return [...pathsByDomain.entries()]
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([domain, paths]) => {
      const schemas = collectReachableSchemas(paths, document.components);
      return {
        file: "openapi.yaml",
        source: metadata.source,
        document: {
          ...document,
          paths,
          components: { ...document.components, schemas },
        },
        sourceName: domain,
        domain,
        domainTitle: domain,
        documentation: "https://yandex.ru/dev/market/partner-api/doc/ru/",
      };
    });
}

function collectReachableSchemas(paths, components) {
  const schemaNames = new Set();
  const visitedReferences = new Set();

  const visit = (value) => {
    if (Array.isArray(value)) {
      value.forEach(visit);
      return;
    }
    if (typeof value !== "object" || value === null) return;
    if (typeof value.$ref === "string") {
      const reference = value.$ref;
      if (visitedReferences.has(reference)) return;
      visitedReferences.add(reference);
      for (const kind of ["schemas", "parameters", "responses"]) {
        const prefix = `#/components/${kind}/`;
        if (!reference.startsWith(prefix)) continue;
        const name = decodeURIComponent(reference.slice(prefix.length));
        if (kind === "schemas") schemaNames.add(name);
        const target = components[kind]?.[name];
        if (target === undefined) {
          throw new Error(`Unknown YM component reference: ${reference}.`);
        }
        visit(target);
        return;
      }
    }
    Object.values(value).forEach(visit);
  };

  visit(paths);
  return Object.fromEntries(
    [...schemaNames].sort().map((name) => [name, components.schemas[name]]),
  );
}

function rewriteExternalRefs(value, sourceFile) {
  if (Array.isArray(value)) {
    return value.map((item) => rewriteExternalRefs(item, sourceFile));
  }
  if (typeof value !== "object" || value === null) return value;

  const output = {};
  for (const [key, item] of Object.entries(value)) {
    if (key === "$ref" && typeof item === "string" && !item.startsWith("#")) {
      const absolute = resolve(openapiDirectory, dirname(sourceFile), item);
      const normalized = relative(openapiDirectory, absolute).replaceAll(
        "\\",
        "/",
      );
      const match =
        /^components\/(parameters|responses|schemas)\/(.+)\.yaml$/u.exec(
          normalized,
        );
      if (match === null) {
        throw new Error(
          `Unsupported external YM reference ${item} in ${sourceFile}.`,
        );
      }
      output[key] = `#/components/${match[1]}/${match[2]}`;
    } else {
      output[key] = rewriteExternalRefs(item, sourceFile);
    }
  }
  return output;
}

function readYaml(relativePath) {
  return YAML.parse(readFileSync(join(openapiDirectory, relativePath), "utf8"));
}

function collectOperations(entry) {
  const result = [];
  for (const [path, pathItem] of Object.entries(entry.document.paths ?? {})) {
    for (const [method, rawOperation] of Object.entries(pathItem)) {
      if (!HTTP_METHODS.has(method)) continue;
      const operationId =
        rawOperation.operationId ?? `${method.toUpperCase()} ${path}`;
      const methodName = toCamelCase(
        rawOperation.operationId ?? `${method}-${path}`,
      );
      const typeName = toPascalCase(methodName);
      const parameters = [
        ...(pathItem.parameters ?? []),
        ...(rawOperation.parameters ?? []),
      ]
        .map((parameter) => resolveObject(entry.document, parameter))
        .filter((parameter) => parameter.name !== "Authorization")
        .map((parameter) => {
          const schema = normalizeSchema(
            resolveObject(entry.document, parameter.schema ?? {}),
            entry.document,
          );
          return {
            name: parameter.name,
            location: parameter.in,
            required: parameter.in === "path" || parameter.required === true,
            array: schema.kind === "array",
            schema,
            description: cleanDocumentation(
              parameter.description ?? parameter.schema?.description ?? "",
            ),
            example: parameter.example ?? parameter.schema?.example,
          };
        });
      const requestBody = readRequestBody(rawOperation, entry.document);
      const responses = readSuccessResponses(rawOperation, entry.document);
      const servers =
        rawOperation.servers ??
        pathItem.servers ??
        entry.document.servers ??
        [];
      const productionOrigins = servers
        .map((server) => server.url)
        .filter((url) => !url.includes("-sandbox."));
      const sandboxOrigins = servers
        .map((server) => server.url)
        .filter((url) => url.includes("-sandbox."));
      if (productionOrigins.length !== 1 || sandboxOrigins.length > 1) {
        throw new Error(
          `Expected one production origin for ${entry.file} ${method} ${path}.`,
        );
      }

      const inputSections = buildInputSections(parameters, requestBody);
      const responseKinds = responses.map((response) => response.kind);
      const responseType = unique(
        responses.map((response) => renderResponseType(response, entry)),
      ).join(" | ");
      const description = cleanDocumentation(rawOperation.description ?? "");
      result.push({
        entry,
        path,
        method: method.toUpperCase(),
        operationId,
        officialOperationId: rawOperation.operationId,
        methodName,
        typeName,
        summary: cleanText(
          rawOperation.summary ?? rawOperation.description ?? operationId,
        ),
        description,
        tags: Array.isArray(rawOperation.tags) ? rawOperation.tags : [],
        deprecated:
          rawOperation.deprecated === true ||
          isMethodDeprecationDescription(description),
        deprecationConfig: rawOperation["x-deprecation-config"],
        resourceId: rawOperation["x-resource-id"],
        resourceLimit: rawOperation["x-resource-limit-config"],
        parameters,
        requestBody,
        inputSections,
        inputRequired: inputSections.some((section) => section.required),
        responses,
        responseType: responseType.length === 0 ? "undefined" : responseType,
        responseTypeMode:
          responseKinds.includes("binary") && responseKinds.includes("json")
            ? "auto"
            : responseKinds.includes("binary")
              ? "array-buffer"
              : "json",
        accept: responseKinds.includes("binary")
          ? unique(
              responses
                .filter((response) => response.kind !== "empty")
                .map((response) => response.contentType),
            ).join(", ")
          : "application/json",
        productionOrigin: productionOrigins[0],
        sandboxOrigin: sandboxOrigins[0],
        retrySafety:
          rawOperation["x-readonly-method"] === true || method === "get"
            ? "safe"
            : "unsafe",
      });
    }
  }
  return result;
}

function readRequestBody(operation, document) {
  if (operation.requestBody === undefined) return undefined;
  const body = resolveObject(document, operation.requestBody);
  const content = body.content ?? {};
  if (content["application/json"] !== undefined) {
    return {
      required: body.required === true,
      contentType: "application/json",
      description: cleanDocumentation(body.description ?? ""),
      type: renderSchemaType(
        normalizeSchema(content["application/json"].schema ?? {}, document),
        undefined,
      ),
      schema: normalizeSchema(
        content["application/json"].schema ?? {},
        document,
      ),
    };
  }
  if (content["multipart/form-data"] !== undefined) {
    return {
      required: body.required === true,
      contentType: "multipart/form-data",
      type: "FormData",
      description: cleanDocumentation(body.description ?? ""),
    };
  }
  throw new Error(
    `Unsupported YM request content type: ${Object.keys(content).join(", ")}.`,
  );
}

function readSuccessResponses(operation, document) {
  return Object.entries(operation.responses ?? {})
    .filter(([status]) => status.startsWith("2"))
    .map(([status, rawResponse]) => {
      const response = resolveObject(document, rawResponse);
      const content = response.content ?? {};
      const json = content["application/json"];
      if (json !== undefined) {
        return {
          status,
          kind: "json",
          contentType: "application/json",
          description: cleanDocumentation(response.description ?? ""),
          schema: normalizeSchema(json.schema ?? {}, document),
        };
      }
      const binaryType = Object.keys(content).find((contentType) =>
        [
          "application/pdf",
          "application/vnd.ms-excel",
          "application/zip",
          "image/jpeg",
          "image/png",
        ].includes(contentType),
      );
      if (binaryType !== undefined) {
        return {
          status,
          kind: "binary",
          contentType: binaryType,
          description: cleanDocumentation(response.description ?? ""),
        };
      }
      return {
        status,
        kind: "empty",
        description: cleanDocumentation(response.description ?? ""),
      };
    });
}

function buildInputSections(parameters, requestBody) {
  const sections = [];
  for (const [location, key] of [
    ["path", "path"],
    ["query", "query"],
    ["header", "headers"],
  ]) {
    const values = parameters.filter(
      (parameter) => parameter.location === location,
    );
    if (values.length === 0) continue;
    sections.push({
      key,
      required: values.some((parameter) => parameter.required),
      type: `{ ${values
        .map(
          (parameter) =>
            `readonly ${JSON.stringify(parameter.name)}${parameter.required ? "" : "?"}: ${renderSchemaType(parameter.schema)};`,
        )
        .join(" ")} }`,
    });
  }
  if (requestBody !== undefined) {
    sections.push({
      key: "body",
      required: requestBody.required,
      type: requestBody.type,
    });
  }
  return sections;
}

function renderGeneratedFiles(entries, allOperations, aliases) {
  const files = new Map([
    [outputPath, renderApiRegistry(entries, allOperations, aliases)],
    [
      join(ymSourceDirectory, "values.generated.ts"),
      renderYmValues(entries, allOperations),
    ],
  ]);

  for (const entry of entries) {
    files.set(
      join(contractsDirectory, `${entry.domain}.generated.ts`),
      renderComponentRegistry(entry),
    );
  }

  for (const operation of allOperations) {
    const directory = join(
      endpointsDirectory,
      operation.entry.domain,
      toKebabCase(operation.methodName),
    );
    files.set(join(directory, "types.ts"), renderEndpointTypes(operation));
    files.set(
      join(directory, "contract.ts"),
      renderEndpointContract(operation),
    );
    files.set(join(directory, "execute.ts"), renderEndpointExecute(operation));
  }

  return files;
}

function renderYmValues(entries, allOperations) {
  const valueSets = collectYmValueSets(entries, allOperations);
  const lines = [
    "/**",
    " * Сгенерировано из закрытых строковых enum/union-контрактов Yandex Market.",
    " * После обновления локального OpenAPI snapshot выполните `pnpm update:ym`.",
    " */",
    "export const YmValues = {",
  ];
  for (const valueSet of valueSets) {
    lines.push(
      `  ${renderJsDoc([valueSet.description || `Значения для \`${valueSet.name}\`.`])}`,
      `  ${valueSet.name}: {`,
    );
    const usedNames = new Set();
    const valueDescriptions = extractEnumValueDescriptions(
      valueSet.description,
      valueSet.values,
    );
    for (const value of valueSet.values) {
      let propertyName =
        value.length === 0 ? "Empty" : toValuePropertyName(value);
      if (propertyName.length === 0) propertyName = "Empty";
      let candidate = propertyName;
      let suffix = 2;
      while (usedNames.has(candidate)) candidate = `${propertyName}${suffix++}`;
      usedNames.add(candidate);
      const description = valueDescriptions.get(value);
      if (description !== undefined) {
        lines.push(`    ${renderJsDoc([description])}`);
      }
      lines.push(`    ${candidate}: ${JSON.stringify(value)},`);
    }
    lines.push("  },");
  }
  lines.push("} as const;", "");
  return lines.join("\n");
}

function collectYmValueSets(entries, allOperations) {
  const candidates = [];
  for (const entry of entries) {
    for (const [name, rawSchema] of Object.entries(
      entry.document.components?.schemas ?? {},
    )) {
      collectSchemaValueSets(
        normalizeSchema(rawSchema, entry.document),
        `${toPascalCase(entry.domain)}${toPascalCase(name)}`,
        candidates,
      );
    }
  }
  for (const operation of allOperations) {
    for (const parameter of operation.parameters) {
      collectSchemaValueSets(
        parameter.schema,
        `${operation.typeName}${toPascalCase(parameter.name)}`,
        candidates,
        parameter.description,
      );
    }
    if (operation.requestBody?.schema !== undefined) {
      collectSchemaValueSets(
        operation.requestBody.schema,
        `${operation.typeName}RequestBody`,
        candidates,
        operation.requestBody.description,
      );
    }
    for (const response of operation.responses) {
      if (response.schema === undefined) continue;
      collectSchemaValueSets(
        response.schema,
        `${operation.typeName}Response${sanitizeIdentifier(response.status)}`,
        candidates,
        response.description,
      );
    }
  }

  const result = [];
  const seen = new Set();
  const usedNames = new Set();
  for (const candidate of candidates) {
    const key = `${candidate.name}\u0000${JSON.stringify(candidate.values)}`;
    if (seen.has(key)) continue;
    seen.add(key);
    let name = candidate.name;
    let suffix = 2;
    while (usedNames.has(name)) name = `${candidate.name}${suffix++}`;
    usedNames.add(name);
    result.push({ ...candidate, name });
  }
  return result.sort((left, right) => left.name.localeCompare(right.name));
}

function collectSchemaValueSets(
  node,
  baseName,
  output,
  inheritedDescription = "",
) {
  const description = node.description || inheritedDescription;
  if (
    node.kind === "string" &&
    Array.isArray(node.enum) &&
    node.enum.length > 0 &&
    node.enum.every((value) => typeof value === "string")
  ) {
    output.push({ name: baseName, values: unique(node.enum), description });
  }
  if (node.kind === "array") {
    collectSchemaValueSets(node.items, `${baseName}Item`, output, description);
    return;
  }
  if (node.kind === "object") {
    for (const [name, property] of Object.entries(node.properties)) {
      collectSchemaValueSets(
        property,
        `${baseName}${toPascalCase(name)}`,
        output,
        description,
      );
    }
    if (
      node.additionalProperties !== undefined &&
      node.additionalProperties !== false
    ) {
      collectSchemaValueSets(
        node.additionalProperties,
        `${baseName}Value`,
        output,
        description,
      );
    }
    return;
  }
  if (node.kind === "union") {
    node.choices.forEach((choice, index) =>
      collectSchemaValueSets(
        choice,
        `${baseName}Variant${index + 1}`,
        output,
        description,
      ),
    );
  }
}

function extractEnumValueDescriptions(description, values) {
  const output = new Map();
  if (!description) return output;
  const occurrences = [];
  for (const value of values) {
    for (const token of [`\`${value}\``, `'${value}'`, `«${value}»`]) {
      const index = description.indexOf(token);
      if (index !== -1) {
        occurrences.push({ index, token, value });
        break;
      }
    }
  }
  occurrences.sort((left, right) => left.index - right.index);
  occurrences.forEach((occurrence, index) => {
    const next = occurrences[index + 1];
    const value = description
      .slice(
        occurrence.index + occurrence.token.length,
        next?.index ?? description.length,
      )
      .replace(/^\s*(?:—|–|-)\s*/u, "")
      .split(/\n\s*\n/u, 1)[0]
      .replace(/\s+/gu, " ")
      .replace(/[,;.]?\s*[-*]\s*$/u, "")
      .trim();
    if (value && value.length <= 400) output.set(occurrence.value, value);
  });
  return output;
}

function renderApiRegistry(entries, allOperations, aliases) {
  const origins = unique(
    allOperations.flatMap((operation) =>
      [operation.productionOrigin, operation.sandboxOrigin].filter(Boolean),
    ),
  ).sort();
  const productionOrigins = origins.filter(
    (origin) => !origin.includes("-sandbox."),
  );
  const hostEntries = productionOrigins.map((origin) => {
    return [
      origin === metadata.origin ? "Partner" : toPascalCase(origin),
      origin,
    ];
  });
  const lines = [
    "// This file is generated from docs/ym/openapi/**/*.yaml.",
    "// Run `pnpm update:ym` instead of editing it manually.",
    "",
    'import type { YmOperationExecutor } from "./operation.js";',
    'import type { YmRequestOptions } from "./request-options.js";',
  ];

  for (const operation of allOperations) {
    const relative = `./endpoints/${operation.entry.domain}/${toKebabCase(operation.methodName)}`;
    const importedTypes = [
      ...(operation.inputSections.length === 0
        ? []
        : [`${operation.typeName}Input`]),
      `${operation.typeName}Response`,
    ];
    lines.push(
      `import { execute${operation.typeName} } from ${JSON.stringify(`${relative}/execute.js`)};`,
      `import type { ${importedTypes.join(", ")} } from ${JSON.stringify(`${relative}/types.js`)};`,
      `export type { ${operation.typeName}Input, ${operation.typeName}Response } from ${JSON.stringify(`${relative}/types.js`)};`,
    );
  }

  lines.push(
    "",
    `export const YmApiHost = ${JSON.stringify(Object.fromEntries(hostEntries))} as const;`,
    "export type YmApiHost = (typeof YmApiHost)[keyof typeof YmApiHost];",
    `export const YM_API_ORIGINS = ${JSON.stringify(origins)} as const;`,
    "export type YmApiOrigin = (typeof YM_API_ORIGINS)[number];",
    "",
  );

  for (const entry of entries) {
    const domainOperations = allOperations.filter(
      (operation) => operation.entry === entry,
    );
    const domainAliases = aliases.filter(
      ({ operation }) => operation.entry === entry,
    );
    lines.push(`export interface Ym${toPascalCase(entry.domain)}Api {`);
    for (const operation of domainOperations) {
      lines.push(renderMethodDeclaration(operation));
    }
    for (const alias of domainAliases) {
      lines.push(renderAliasDeclaration(alias));
    }
    lines.push("}", "");
  }

  lines.push("export interface YmDomainApi {");
  for (const entry of entries) {
    lines.push(
      `  readonly ${entry.domain}: Ym${toPascalCase(entry.domain)}Api;`,
    );
  }
  lines.push(
    "}",
    "",
    "/** @internal */",
    "export function createYmDomainApi(execute: YmOperationExecutor): YmDomainApi {",
    "  return Object.freeze({",
  );
  for (const entry of entries) {
    const domainOperations = allOperations.filter(
      (operation) => operation.entry === entry,
    );
    const domainAliases = aliases.filter(
      ({ operation }) => operation.entry === entry,
    );
    lines.push(`    ${entry.domain}: Object.freeze({`);
    for (const operation of domainOperations) {
      lines.push(
        `      ${operation.methodName}: ${renderEndpointBinding(operation)},`,
      );
    }
    for (const { alias, operation } of domainAliases) {
      lines.push(`      ${alias}: ${renderEndpointBinding(operation)},`);
    }
    lines.push("    }),");
  }
  lines.push("  });", "}", "");

  const metadataRows = allOperations.map((operation) => ({
    domain: operation.entry.domain,
    methodName: operation.methodName,
    operationId: operation.operationId,
    method: operation.method,
    path: operation.path,
    productionOrigin: operation.productionOrigin,
    ...(operation.sandboxOrigin === undefined
      ? {}
      : { sandboxOrigin: operation.sandboxOrigin }),
    retrySafety: operation.retrySafety,
    ...(operation.resourceId === undefined
      ? {}
      : { resourceId: operation.resourceId }),
    ...(operation.resourceLimit === undefined
      ? {}
      : { resourceLimit: operation.resourceLimit }),
    ...(operation.deprecationConfig === undefined
      ? {}
      : { deprecation: operation.deprecationConfig }),
    source: operation.entry.documentation,
    verifiedAt: metadata.verifiedAt,
  }));
  lines.push(
    `export const YM_OPERATION_METADATA = ${JSON.stringify(metadataRows)} as const;`,
    "",
    `export const YM_OPERATION_ALIASES = ${JSON.stringify(
      Object.fromEntries(
        entries.map((entry) => [
          entry.domain,
          Object.fromEntries(
            aliases
              .filter(({ operation }) => operation.entry === entry)
              .map(({ alias, operation }) => [alias, operation.methodName]),
          ),
        ]),
      ),
    )} as const;`,
    "",
  );
  return `${lines.join("\n")}\n`;
}

function renderComponentRegistry(entry) {
  const components = Object.fromEntries(
    Object.entries(entry.document.components?.schemas ?? {}).map(
      ([name, schema]) => [
        name,
        runtimeSchemaNode(normalizeSchema(schema, entry.document)),
      ],
    ),
  );
  return [
    "// Generated runtime schemas for this Yandex Market API domain.",
    'import type { YmSchemaComponents } from "../schema.js";',
    "",
    `export const ${entry.domain}Components: YmSchemaComponents = ${JSON.stringify(components)};`,
    "",
  ].join("\n");
}

function renderEndpointTypes(operation) {
  const componentSchemas = operation.entry.document.components?.schemas ?? {};
  const componentDeclarations = collectOperationComponentNames(operation).map(
    (name) =>
      `type ${operation.entry.componentTypeNames.get(name)} = ${renderSchemaType(normalizeSchema(componentSchemas[name], operation.entry.document), operation.entry)};`,
  );
  const inputType = renderExpandedInputType(operation);
  const responseType = unique(
    operation.responses.map((response) =>
      response.kind === "empty"
        ? "undefined"
        : response.kind === "binary"
          ? "ArrayBuffer"
          : renderExpandedSchemaType(response.schema, operation.entry),
    ),
  ).join(" | ");
  const types = [
    ...componentDeclarations,
    inputType,
    responseType || "undefined",
  ];
  return [
    "// Generated public types for this Yandex Market endpoint.",
    ...(types.some((type) => type.includes("YmJsonValue"))
      ? ['import type { YmJsonValue } from "../../../schema.js";', ""]
      : []),
    ...componentDeclarations,
    ...(componentDeclarations.length === 0 ? [] : [""]),
    renderJsDoc([
      `Параметры метода «${operation.summary}».`,
      operation.description,
      `${operation.method} ${operation.path}`,
      `Источник: ${operation.entry.documentation}`,
    ]),
    `export type ${operation.typeName}Input = ${inputType};`,
    renderJsDoc([
      `Успешный ответ метода «${operation.summary}».`,
      ...operation.responses.map(
        (response) =>
          `${response.status}: ${ensureSentence(response.description || "успешный ответ")}`,
      ),
    ]),
    `export type ${operation.typeName}Response = ${responseType || "undefined"};`,
    "",
  ].join("\n");
}

function collectOperationComponentNames(operation) {
  const schemas = operation.entry.document.components?.schemas ?? {};
  const names = new Set();

  const visit = (node) => {
    if (node === undefined) return;
    if (node.kind === "ref") {
      if (names.has(node.name)) return;
      const schema = schemas[node.name];
      if (schema === undefined) {
        throw new Error(
          `Unknown YM component ${node.name} in ${operation.entry.file}.`,
        );
      }
      names.add(node.name);
      visit(normalizeSchema(schema, operation.entry.document));
      return;
    }
    if (node.kind === "array") {
      visit(node.items);
      return;
    }
    if (node.kind === "object") {
      Object.values(node.properties).forEach(visit);
      if (
        node.additionalProperties !== undefined &&
        node.additionalProperties !== false
      ) {
        visit(node.additionalProperties);
      }
      return;
    }
    if (node.kind === "union") node.choices.forEach(visit);
  };

  operation.parameters.forEach((parameter) => visit(parameter.schema));
  visit(operation.requestBody?.schema);
  operation.responses.forEach((response) => visit(response.schema));
  return [...names].sort();
}

function renderExpandedInputType(operation) {
  if (operation.inputSections.length === 0) return "undefined";
  const sections = [];
  for (const [location, key] of [
    ["path", "path"],
    ["query", "query"],
    ["header", "headers"],
  ]) {
    const parameters = operation.parameters.filter(
      (parameter) => parameter.location === location,
    );
    if (parameters.length === 0) continue;
    const required = parameters.some((parameter) => parameter.required);
    const properties = parameters.map(
      (parameter) =>
        `${renderJsDoc([
          parameter.description,
          ...schemaDocumentationLines(parameter.schema),
          parameter.example === undefined
            ? ""
            : `Пример: ${renderExample(parameter.example)}.`,
        ])}\nreadonly ${JSON.stringify(parameter.name)}${parameter.required ? "" : "?"}: ${renderExpandedSchemaType(parameter.schema, operation.entry)};`,
    );
    sections.push(
      `${renderJsDoc([sectionDescription(key)])}\nreadonly ${key}${required ? "" : "?"}: { ${properties.join("\n\n")} };`,
    );
  }
  if (operation.requestBody !== undefined) {
    const bodyType =
      operation.requestBody.contentType === "multipart/form-data"
        ? "FormData"
        : renderExpandedSchemaType(
            operation.requestBody.schema,
            operation.entry,
          );
    sections.push(
      `${renderJsDoc([
        operation.requestBody.description || "Тело запроса.",
        ...(operation.requestBody.schema === undefined
          ? []
          : schemaDocumentationLines(operation.requestBody.schema)),
      ])}\nreadonly body${operation.requestBody.required ? "" : "?"}: ${bodyType};`,
    );
  }
  return `{ ${sections.join(" ")} }`;
}

function renderExpandedSchemaType(node, entry, stack = []) {
  if (node.kind !== "ref") return renderExpandedSchemaNode(node, entry, stack);
  const typeName = entry.componentTypeNames.get(node.name);
  if (typeName === undefined) {
    throw new Error(`Unknown YM component ${node.name} in ${entry.file}.`);
  }
  return node.nullable === true ? `(${typeName}) | null` : typeName;
}

function renderExpandedSchemaNode(node, entry, stack) {
  let result;
  switch (node.kind) {
    case "string":
    case "number":
      result =
        node.enum !== undefined && node.enum.length > 0
          ? unique(node.enum.map((value) => JSON.stringify(value))).join(" | ")
          : node.kind;
      break;
    case "boolean":
      result = "boolean";
      break;
    case "literal":
      result = JSON.stringify(node.value);
      break;
    case "array":
      result = `readonly (${renderExpandedSchemaType(node.items, entry, stack)})[]`;
      break;
    case "object": {
      const required = new Set(node.required);
      const properties = Object.entries(node.properties).map(
        ([name, property]) =>
          `${renderJsDoc(schemaDocumentationLines(property))}\nreadonly ${JSON.stringify(name)}${required.has(name) ? "" : "?"}: ${renderExpandedSchemaType(property, entry, stack)};`,
      );
      if (
        properties.length === 0 &&
        node.additionalProperties !== undefined &&
        node.additionalProperties !== false
      ) {
        result = `Readonly<Record<string, ${renderExpandedSchemaType(node.additionalProperties, entry, stack)}>>`;
      } else if (properties.length === 0) {
        result = "Readonly<Record<string, never>>";
      } else {
        result = `{ ${properties.join("\n\n")} }`;
      }
      break;
    }
    case "union":
      result =
        node.choices.length === 0
          ? "YmJsonValue"
          : unique(
              node.choices.map((choice) =>
                renderExpandedSchemaType(choice, entry, stack),
              ),
            ).join(" | ");
      break;
    case "ref":
      return renderExpandedSchemaType(node, entry, stack);
    case "unknown":
      result = "YmJsonValue";
      break;
  }
  return node.nullable === true ? `(${result}) | null` : result;
}

function runtimeSchemaNode(node) {
  const nullable = node.nullable === true ? { nullable: true } : {};
  switch (node.kind) {
    case "array":
      return {
        kind: "array",
        items: runtimeSchemaNode(node.items),
        ...nullable,
      };
    case "object":
      return {
        kind: "object",
        properties: Object.fromEntries(
          Object.entries(node.properties).map(([name, property]) => [
            name,
            runtimeSchemaNode(property),
          ]),
        ),
        required: node.required,
        ...(node.additionalProperties === undefined
          ? {}
          : node.additionalProperties === false
            ? { additionalProperties: false }
            : {
                additionalProperties: runtimeSchemaNode(
                  node.additionalProperties,
                ),
              }),
        ...nullable,
      };
    case "union":
      return {
        kind: "union",
        choices: node.choices.map(runtimeSchemaNode),
        ...nullable,
      };
    case "ref":
      return { kind: "ref", name: node.name, ...nullable };
    case "string":
      return {
        kind: "string",
        ...(node.enum === undefined ? {} : { enum: node.enum }),
        ...(node.minLength === undefined ? {} : { minLength: node.minLength }),
        ...(node.maxLength === undefined ? {} : { maxLength: node.maxLength }),
        ...nullable,
      };
    case "number":
      return {
        kind: "number",
        ...(node.integer === true ? { integer: true } : {}),
        ...(node.minimum === undefined ? {} : { minimum: node.minimum }),
        ...(node.maximum === undefined ? {} : { maximum: node.maximum }),
        ...(node.enum === undefined ? {} : { enum: node.enum }),
        ...nullable,
      };
    case "boolean":
      return { kind: "boolean", ...nullable };
    case "literal":
      return { kind: "literal", value: node.value, ...nullable };
    case "unknown":
      return { kind: "unknown", ...nullable };
  }
}

function renderEndpointContract(operation) {
  const responseType = `${operation.typeName}Response`;
  const schemaNames = new Map();
  const hasJson = operation.responses.some(
    (response) => response.kind === "json",
  );
  const hasBinary = operation.responses.some(
    (response) => response.kind === "binary",
  );
  const hasDefaultResponse = operation.responses.some(
    (response) => response.status === "2XX",
  );
  const parserImports = [
    ...(hasBinary ? ["parseYmBinaryResponse"] : []),
    ...(hasJson ? ["parseYmResponse"] : []),
    ...(!hasDefaultResponse ? ["unexpectedYmSuccessStatus"] : []),
  ];
  const lines = [
    "// Generated runtime response contract for this Yandex Market endpoint.",
    ...(hasJson
      ? [
          `import { ${operation.entry.domain}Components } from ${JSON.stringify(`../../../contracts/${operation.entry.domain}.generated.js`)};`,
        ]
      : []),
    ...(parserImports.length === 0
      ? []
      : [
          `import { ${parserImports.join(", ")} } from "../../../parse-response.js";`,
        ]),
    ...(hasJson
      ? ['import { createYmSchema } from "../../../schema.js";']
      : []),
    `import type { ${responseType} } from "./types.js";`,
    "",
  ];
  for (const response of operation.responses) {
    if (response.kind !== "json") continue;
    const schemaName = `${operation.methodName}Response${sanitizeIdentifier(response.status)}Schema`;
    schemaNames.set(response.status, schemaName);
    lines.push(
      `const ${schemaName} = createYmSchema<${responseType}>(${JSON.stringify(runtimeSchemaNode(response.schema))}, ${operation.entry.domain}Components);`,
    );
  }
  lines.push(
    "",
    `export function parse${operation.typeName}Response(status: number, input: unknown): ${responseType} {`,
    ...(operation.responses.every((response) => response.kind === "empty")
      ? ["  void input;"]
      : []),
    "  switch (status) {",
  );
  const defaultResponse = operation.responses.find(
    (response) => response.status === "2XX",
  );
  for (const response of operation.responses.filter(
    (candidate) => candidate.status !== "2XX",
  )) {
    lines.push(
      `    case ${Number(response.status)}:`,
      `      ${renderResponseParser(operation, response, schemaNames)}`,
    );
  }
  lines.push(
    "    default:",
    `      ${
      defaultResponse === undefined
        ? `return unexpectedYmSuccessStatus(${JSON.stringify(operation.operationId)}, status);`
        : renderResponseParser(operation, defaultResponse, schemaNames)
    }`,
    "  }",
    "}",
    "",
  );
  return lines.join("\n");
}

function renderEndpointExecute(operation) {
  const lines = [
    "// Generated request mapping and execution for this Yandex Market endpoint.",
    'import type { YmOperationDefinition, YmOperationExecutor } from "../../../operation.js";',
    'import type { YmRequestOptions } from "../../../request-options.js";',
    `import { parse${operation.typeName}Response } from "./contract.js";`,
    `import type { ${[
      ...(operation.inputSections.length === 0
        ? []
        : [`${operation.typeName}Input`]),
      `${operation.typeName}Response`,
    ].join(", ")} } from "./types.js";`,
    "",
    `export const ${toScreamingSnakeCase(operation.methodName)}_OPERATION_ID = ${JSON.stringify(operation.operationId)};`,
    "",
    `const definition: YmOperationDefinition<${operation.typeName}Response> = {`,
    `  operationId: ${toScreamingSnakeCase(operation.methodName)}_OPERATION_ID,`,
    `  method: ${JSON.stringify(operation.method)},`,
    `  path: ${JSON.stringify(operation.path)},`,
    `  productionOrigin: ${JSON.stringify(operation.productionOrigin)},`,
    ...(operation.sandboxOrigin === undefined
      ? []
      : [`  sandboxOrigin: ${JSON.stringify(operation.sandboxOrigin)},`]),
    `  parameters: ${JSON.stringify(
      operation.parameters.map(({ name, location, required, array }) => ({
        name,
        location,
        required,
        array,
      })),
    )},`,
    ...(operation.requestBody === undefined
      ? []
      : [
          `  requestContentType: ${JSON.stringify(operation.requestBody.contentType)},`,
        ]),
    `  retrySafety: ${JSON.stringify(operation.retrySafety)},`,
    `  responseType: ${JSON.stringify(operation.responseTypeMode)},`,
    `  accept: ${JSON.stringify(operation.accept)},`,
    `  parseResponse: parse${operation.typeName}Response,`,
    `  source: ${JSON.stringify(operation.entry.documentation)},`,
    `  verifiedAt: ${JSON.stringify(metadata.verifiedAt)},`,
    "};",
    "",
    `export function execute${operation.typeName}(`,
    "  execute: YmOperationExecutor,",
  ];
  if (operation.inputSections.length === 0) {
    lines.push(
      "  options: YmRequestOptions = {},",
      `): Promise<${operation.typeName}Response> {`,
      "  return execute(definition, undefined, options);",
    );
  } else {
    lines.push(
      `  input${operation.inputRequired ? "" : "?"}: ${operation.typeName}Input,`,
      "  options: YmRequestOptions = {},",
      `): Promise<${operation.typeName}Response> {`,
      `  return execute(definition, ${operation.inputRequired ? "input" : "input ?? {}"}, options);`,
    );
  }
  lines.push("}", "");
  return lines.join("\n");
}

function renderEndpointBinding(operation) {
  if (operation.inputSections.length === 0) {
    return `(options: YmRequestOptions = {}) => execute${operation.typeName}(execute, options)`;
  }
  if (operation.inputRequired) {
    return `(input: ${operation.typeName}Input, options: YmRequestOptions = {}) => execute${operation.typeName}(execute, input, options)`;
  }
  return `(input?: ${operation.typeName}Input, options: YmRequestOptions = {}) => execute${operation.typeName}(execute, input, options)`;
}

function renderGeneratedSource(entries, allOperations) {
  const origins = unique(
    allOperations.flatMap((operation) =>
      [operation.productionOrigin, operation.sandboxOrigin].filter(Boolean),
    ),
  ).sort();
  const productionOrigins = origins.filter(
    (origin) => !origin.includes("-sandbox."),
  );
  const hostEntries = productionOrigins.map((origin) => {
    return [
      origin === metadata.origin ? "Partner" : toPascalCase(origin),
      origin,
    ];
  });
  const lines = [
    "/* eslint-disable @typescript-eslint/no-unused-vars */",
    "// This file is generated from docs/ym/openapi/**/*.yaml.",
    "// Run `pnpm update:ym` instead of editing it manually.",
    "",
    'import type { YmOperationDefinition, YmOperationExecutor } from "./operation.js";',
    'import { parseYmBinaryResponse, parseYmResponse, unexpectedYmSuccessStatus } from "./parse-response.js";',
    'import { createYmSchema, type YmJsonValue, type YmSchemaComponents } from "./schema.js";',
    'import type { YmRequestOptions } from "./request-options.js";',
    "",
    `export const YmApiHost = ${JSON.stringify(Object.fromEntries(hostEntries))} as const;`,
    "export type YmApiHost = (typeof YmApiHost)[keyof typeof YmApiHost];",
    `export const YM_API_ORIGINS = ${JSON.stringify(origins)} as const;`,
    "export type YmApiOrigin = (typeof YM_API_ORIGINS)[number];",
    "",
  ];

  for (const entry of entries) {
    const componentTypeNames = entry.componentTypeNames;
    for (const [name, schema] of Object.entries(
      entry.document.components?.schemas ?? {},
    )) {
      lines.push(
        `type ${componentTypeNames.get(name)} = ${renderSchemaType(
          normalizeSchema(schema, entry.document),
          entry,
        )};`,
      );
    }
    const components = Object.fromEntries(
      Object.entries(entry.document.components?.schemas ?? {}).map(
        ([name, schema]) => [name, normalizeSchema(schema, entry.document)],
      ),
    );
    lines.push(
      `const ${entry.domain}Components: YmSchemaComponents = ${JSON.stringify(components)};`,
      "",
    );
  }

  for (const operation of allOperations) {
    lines.push(
      renderOperationTypes(operation),
      renderOperationDefinition(operation),
    );
  }

  for (const entry of entries) {
    const domainOperations = allOperations.filter(
      (operation) => operation.entry === entry,
    );
    lines.push(`export interface Ym${toPascalCase(entry.domain)}Api {`);
    for (const operation of domainOperations) {
      lines.push(renderMethodDeclaration(operation));
    }
    lines.push("}", "");
  }

  lines.push("export interface YmDomainApi {");
  for (const entry of entries) {
    lines.push(
      `  readonly ${entry.domain}: Ym${toPascalCase(entry.domain)}Api;`,
    );
  }
  lines.push("}", "");
  lines.push(
    "/** @internal */",
    "export function createYmDomainApi(execute: YmOperationExecutor): YmDomainApi {",
    "  return Object.freeze({",
  );
  for (const entry of entries) {
    const domainOperations = allOperations.filter(
      (operation) => operation.entry === entry,
    );
    lines.push(`    ${entry.domain}: Object.freeze({`);
    for (const operation of domainOperations) {
      lines.push(
        `      ${operation.methodName}: ${renderMethodImplementation(operation)},`,
      );
    }
    lines.push("    }),");
  }
  lines.push("  });", "}", "");

  const metadataRows = allOperations.map((operation) => ({
    domain: operation.entry.domain,
    methodName: operation.methodName,
    operationId: operation.operationId,
    method: operation.method,
    path: operation.path,
    productionOrigin: operation.productionOrigin,
    ...(operation.sandboxOrigin === undefined
      ? {}
      : { sandboxOrigin: operation.sandboxOrigin }),
    retrySafety: operation.retrySafety,
    source: operation.entry.documentation,
    verifiedAt: metadata.verifiedAt,
  }));
  lines.push(
    `export const YM_OPERATION_METADATA = ${JSON.stringify(metadataRows)} as const;`,
    "",
  );
  return `${lines.join("\n")}\n`;
}

function renderOperationTypes(operation) {
  const inputType =
    operation.inputSections.length === 0
      ? "undefined"
      : `{ ${operation.inputSections
          .map(
            (section) =>
              `readonly ${section.key}${section.required ? "" : "?"}: ${renderOperationInputType(section.type, operation.entry)};`,
          )
          .join(" ")} }`;
  return [
    `export type ${operation.typeName}Input = ${inputType};`,
    `export type ${operation.typeName}Response = ${renderOperationResponseType(operation)};`,
    "",
  ].join("\n");
}

function renderOperationInputType(type, entry) {
  if (type === "FormData") return type;
  return replaceComponentPlaceholders(type, entry);
}

function renderOperationResponseType(operation) {
  return replaceComponentPlaceholders(operation.responseType, operation.entry);
}

function renderOperationDefinition(operation) {
  const responseType = `${operation.typeName}Response`;
  const schemaLines = [];
  const schemaNames = new Map();
  for (const response of operation.responses) {
    if (response.kind !== "json") continue;
    const schemaName = `${operation.methodName}Response${sanitizeIdentifier(response.status)}Schema`;
    schemaNames.set(response.status, schemaName);
    schemaLines.push(
      `const ${schemaName} = createYmSchema<${responseType}>(${JSON.stringify(response.schema)}, ${operation.entry.domain}Components);`,
    );
  }
  const definitionName = `${operation.methodName}Definition`;
  const lines = [
    ...schemaLines,
    `const ${definitionName}: YmOperationDefinition<${responseType}> = {`,
    `  operationId: ${JSON.stringify(operation.operationId)},`,
    `  method: ${JSON.stringify(operation.method)},`,
    `  path: ${JSON.stringify(operation.path)},`,
    `  productionOrigin: ${JSON.stringify(operation.productionOrigin)},`,
    ...(operation.sandboxOrigin === undefined
      ? []
      : [`  sandboxOrigin: ${JSON.stringify(operation.sandboxOrigin)},`]),
    `  parameters: ${JSON.stringify(
      operation.parameters.map(({ name, location, required, array }) => ({
        name,
        location,
        required,
        array,
      })),
    )},`,
    ...(operation.requestBody === undefined
      ? []
      : [
          `  requestContentType: ${JSON.stringify(operation.requestBody.contentType)},`,
        ]),
    `  retrySafety: ${JSON.stringify(operation.retrySafety)},`,
    `  responseType: ${JSON.stringify(operation.responseTypeMode)},`,
    `  accept: ${JSON.stringify(operation.accept)},`,
    "  parseResponse(status, input) {",
    "    switch (status) {",
  ];
  const defaultResponse = operation.responses.find(
    (response) => response.status === "2XX",
  );
  for (const response of operation.responses.filter(
    (candidate) => candidate.status !== "2XX",
  )) {
    lines.push(`      case ${Number(response.status)}:`);
    lines.push(
      `        ${renderResponseParser(operation, response, schemaNames)}`,
    );
  }
  lines.push("      default:");
  lines.push(
    `        ${
      defaultResponse === undefined
        ? `return unexpectedYmSuccessStatus(${JSON.stringify(operation.operationId)}, status);`
        : renderResponseParser(operation, defaultResponse, schemaNames)
    }`,
  );
  lines.push(
    "    }",
    "  },",
    `  source: ${JSON.stringify(operation.entry.documentation)},`,
    `  verifiedAt: ${JSON.stringify(metadata.verifiedAt)},`,
    "};",
    "",
  );
  return lines.join("\n");
}

function renderResponseParser(operation, response, schemaNames) {
  if (response.kind === "empty") return "return undefined;";
  if (response.kind === "binary") {
    return `return parseYmBinaryResponse(input, ${JSON.stringify(operation.operationId)});`;
  }
  return `return parseYmResponse(${schemaNames.get(response.status)}, input, ${JSON.stringify(operation.operationId)});`;
}

function renderMethodDeclaration(operation) {
  const documentation = renderJsDoc([
    operation.summary,
    operation.description,
    `${operation.method} ${operation.path}`,
    operation.tags.length === 0
      ? ""
      : `Разделы YM: ${operation.tags.join(", ")}.`,
    `@see ${operation.entry.documentation}`,
    operation.deprecation === undefined
      ? ""
      : `@deprecated ${operation.deprecation}`,
  ]);
  return `${documentation}\n  readonly ${operation.methodName}: ${renderMethodSignature(operation)};`;
}

function renderAliasDeclaration({ alias, operation }) {
  const documentation = renderJsDoc([
    `Рекомендуемый метод без версии; использует \`${operation.methodName}\`.`,
    `${operation.method} ${operation.path}`,
    operation.deprecation === undefined
      ? ""
      : `@deprecated ${operation.deprecation}`,
    `@see ${operation.entry.documentation}`,
  ]);
  return `${documentation}\n  readonly ${alias}: ${renderMethodSignature(operation)};`;
}

function renderMethodSignature(operation) {
  if (operation.inputSections.length === 0) {
    return `(options?: YmRequestOptions) => Promise<${operation.typeName}Response>`;
  }
  return `(input${operation.inputRequired ? "" : "?"}: ${operation.typeName}Input, options?: YmRequestOptions) => Promise<${operation.typeName}Response>`;
}

function renderMethodImplementation(operation) {
  const definition = `${operation.methodName}Definition`;
  if (operation.inputSections.length === 0) {
    return `(options: YmRequestOptions = {}) => execute(${definition}, undefined, options)`;
  }
  if (operation.inputRequired) {
    return `(input: ${operation.typeName}Input, options: YmRequestOptions = {}) => execute(${definition}, input, options)`;
  }
  return `(input: ${operation.typeName}Input = {}, options: YmRequestOptions = {}) => execute(${definition}, input, options)`;
}

function normalizeSchema(rawSchema, document) {
  const schema = expandAllOf(rawSchema ?? {}, document);
  const nullable = schema.nullable === true ? { nullable: true } : {};
  const documentation = schemaDocumentation(schema);
  if (typeof schema.$ref === "string") {
    return {
      kind: "ref",
      name: localRefName(schema.$ref),
      ...documentation,
      ...nullable,
    };
  }
  const alternatives = schema.oneOf ?? schema.anyOf;
  if (Array.isArray(alternatives)) {
    return {
      kind: "union",
      choices: alternatives.map((choice) => normalizeSchema(choice, document)),
      ...documentation,
      ...nullable,
    };
  }
  if (Array.isArray(schema.enum) && schema.enum.length > 0) {
    const inferredType =
      schema.type ??
      (schema.enum.every((value) => typeof value === "number")
        ? "number"
        : schema.enum.every((value) => typeof value === "boolean")
          ? "boolean"
          : "string");
    if (inferredType === "number" || inferredType === "integer") {
      return {
        kind: "number",
        integer: inferredType === "integer",
        enum: schema.enum,
        ...documentation,
        ...nullable,
      };
    }
    if (inferredType === "boolean") {
      return {
        kind: "union",
        choices: schema.enum.map((value) => literalSchemaNode(value)),
        ...documentation,
        ...nullable,
      };
    }
    return {
      kind: "string",
      enum: schema.enum,
      ...documentation,
      ...nullable,
    };
  }
  if (schema.type === "string") {
    return {
      kind: "string",
      ...(schema.minLength === undefined
        ? {}
        : { minLength: schema.minLength }),
      ...(schema.maxLength === undefined
        ? {}
        : { maxLength: schema.maxLength }),
      ...documentation,
      ...nullable,
    };
  }
  if (schema.type === "integer" || schema.type === "number") {
    return {
      kind: "number",
      ...(schema.type === "integer" ? { integer: true } : {}),
      ...(schema.minimum === undefined ? {} : { minimum: schema.minimum }),
      ...(schema.maximum === undefined ? {} : { maximum: schema.maximum }),
      ...documentation,
      ...nullable,
    };
  }
  if (schema.type === "boolean") {
    return { kind: "boolean", ...documentation, ...nullable };
  }
  if (schema.type === "array" || schema.items !== undefined) {
    return {
      kind: "array",
      items: normalizeSchema(schema.items ?? {}, document),
      ...(schema.minItems === undefined ? {} : { minItems: schema.minItems }),
      ...(schema.maxItems === undefined ? {} : { maxItems: schema.maxItems }),
      ...documentation,
      ...nullable,
    };
  }
  if (
    schema.type === "object" ||
    schema.properties !== undefined ||
    schema.additionalProperties !== undefined
  ) {
    return {
      kind: "object",
      properties: Object.fromEntries(
        Object.entries(schema.properties ?? {}).map(([name, property]) => [
          name,
          normalizeSchema(property, document),
        ]),
      ),
      required: Array.isArray(schema.required) ? schema.required : [],
      ...(schema.additionalProperties === false
        ? { additionalProperties: false }
        : schema.additionalProperties === true
          ? { additionalProperties: { kind: "unknown" } }
          : schema.additionalProperties === undefined
            ? {}
            : {
                additionalProperties: normalizeSchema(
                  schema.additionalProperties,
                  document,
                ),
              }),
      ...documentation,
      ...nullable,
    };
  }
  return { kind: "unknown", ...documentation, ...nullable };
}

function schemaDocumentation(schema) {
  return {
    ...(typeof schema.description === "string" && schema.description.trim()
      ? { description: cleanDocumentation(schema.description) }
      : {}),
    ...(schema.example === undefined ? {} : { example: schema.example }),
    ...(schema.default === undefined ? {} : { default: schema.default }),
    ...(typeof schema.format === "string" ? { format: schema.format } : {}),
  };
}

function literalSchemaNode(value) {
  return { kind: "literal", value };
}

function expandAllOf(rawSchema, document) {
  if (!Array.isArray(rawSchema?.allOf)) return rawSchema ?? {};
  const parts = rawSchema.allOf
    .map((part) => resolveObject(document, part))
    .map((part) => expandAllOf(part, document))
    .filter(hasSchemaStructure);
  if (parts.length === 0) return { ...rawSchema, allOf: undefined };
  if (parts.length === 1) {
    return {
      ...parts[0],
      ...(rawSchema.nullable === true ? { nullable: true } : {}),
    };
  }
  if (parts.every(isObjectSchema)) {
    return {
      type: "object",
      properties: Object.assign(
        {},
        ...parts.map((part) => part.properties ?? {}),
      ),
      required: unique(parts.flatMap((part) => part.required ?? [])),
      ...mergeAdditionalProperties(parts),
      ...(rawSchema.nullable === true ? { nullable: true } : {}),
    };
  }
  return {
    oneOf: parts,
    ...(rawSchema.nullable === true ? { nullable: true } : {}),
  };
}

function mergeAdditionalProperties(parts) {
  const values = parts
    .map((part) => part.additionalProperties)
    .filter((value) => value !== undefined);
  if (values.length === 0) return {};
  return { additionalProperties: values.at(-1) };
}

function hasSchemaStructure(schema) {
  return [
    "$ref",
    "type",
    "properties",
    "items",
    "enum",
    "oneOf",
    "anyOf",
    "allOf",
    "additionalProperties",
  ].some((key) => schema?.[key] !== undefined);
}

function isObjectSchema(schema) {
  return (
    schema?.type === "object" ||
    schema?.properties !== undefined ||
    schema?.additionalProperties !== undefined
  );
}

function renderSchemaType(node, entry) {
  let result;
  switch (node.kind) {
    case "string":
    case "number":
      result =
        node.enum !== undefined && node.enum.length > 0
          ? unique(node.enum.map((value) => JSON.stringify(value))).join(" | ")
          : node.kind;
      break;
    case "boolean":
      result = "boolean";
      break;
    case "literal":
      result = JSON.stringify(node.value);
      break;
    case "array":
      result = `readonly (${renderSchemaType(node.items, entry)})[]`;
      break;
    case "object": {
      const required = new Set(node.required);
      const properties = Object.entries(node.properties).map(
        ([name, property]) =>
          `readonly ${JSON.stringify(name)}${required.has(name) ? "" : "?"}: ${renderSchemaType(property, entry)};`,
      );
      if (
        properties.length === 0 &&
        node.additionalProperties !== undefined &&
        node.additionalProperties !== false
      ) {
        result = `Readonly<Record<string, ${renderSchemaType(node.additionalProperties, entry)}>>`;
      } else if (properties.length === 0) {
        result = "Readonly<Record<string, never>>";
      } else {
        result = `{ ${properties.join(" ")} }`;
      }
      break;
    }
    case "union":
      result =
        node.choices.length === 0
          ? "YmJsonValue"
          : unique(
              node.choices.map((choice) => renderSchemaType(choice, entry)),
            ).join(" | ");
      break;
    case "ref":
      result =
        entry === undefined
          ? `__YM_COMPONENT_${Buffer.from(node.name).toString("hex")}__`
          : entry.componentTypeNames.get(node.name);
      break;
    case "unknown":
      result = "YmJsonValue";
      break;
  }
  return node.nullable === true ? `(${result}) | null` : result;
}

function replaceComponentPlaceholders(type, entry) {
  return type.replace(
    /__YM_COMPONENT_([0-9a-f]+)__/g,
    (_match, encodedName) => {
      const name = Buffer.from(encodedName, "hex").toString("utf8");
      const typeName = entry.componentTypeNames.get(name);
      if (typeName === undefined) {
        throw new Error(`Unknown YM component type ${name} in ${entry.file}.`);
      }
      return typeName;
    },
  );
}

function renderResponseType(response, entry) {
  if (response.kind === "empty") return "undefined";
  if (response.kind === "binary") return "ArrayBuffer";
  return renderSchemaType(response.schema, entry);
}

function createComponentTypeNames(entry) {
  const result = new Map();
  const used = new Set();
  for (const name of Object.keys(entry.document.components?.schemas ?? {})) {
    const base = `${toPascalCase(entry.domain)}${toPascalCase(name)}`;
    let candidate = base;
    let suffix = 2;
    while (used.has(candidate)) candidate = `${base}${suffix++}`;
    used.add(candidate);
    result.set(name, candidate);
  }
  return result;
}

function renderManifest(entries, allOperations, aliases) {
  return {
    marketplace: "ym",
    package: "@seller-sdk/ym",
    source: metadata.source,
    verifiedAt: metadata.verifiedAt,
    operationCount: allOperations.length,
    aliasCount: aliases.length,
    specifications: [
      {
        directory: "openapi/",
        commit: metadata.commit,
        format: metadata.format,
        license: metadata.license,
        documentation: "https://yandex.ru/dev/market/partner-api/doc/ru/",
        sha256: createHash("sha256")
          .update(readFileSync(join(openapiDirectory, "openapi.yaml"), "utf8"))
          .digest("hex"),
        operationCount: allOperations.length,
      },
    ],
    operations: allOperations.map((operation) => ({
      domain: operation.entry.domain,
      methodName: operation.methodName,
      operationId: operation.operationId,
      ...(operation.officialOperationId === undefined
        ? { generatedOperationId: true }
        : {}),
      documentation: operation.entry.documentation,
      verifiedAt: metadata.verifiedAt,
      method: operation.method,
      path: operation.path,
      productionOrigin: operation.productionOrigin,
      ...(operation.sandboxOrigin === undefined
        ? {}
        : { sandboxOrigin: operation.sandboxOrigin }),
      retrySafety: operation.retrySafety,
      status: operation.deprecated ? "deprecated" : "implemented",
      ...(operation.resourceId === undefined
        ? {}
        : { resourceId: operation.resourceId }),
      ...(operation.resourceLimit === undefined
        ? {}
        : { resourceLimit: operation.resourceLimit }),
      ...(operation.deprecationConfig === undefined
        ? {}
        : { deprecation: operation.deprecationConfig }),
    })),
    aliases: aliases.map(({ alias, operation }) => ({
      domain: operation.entry.domain,
      alias,
      methodName: operation.methodName,
      method: operation.method,
      path: operation.path,
    })),
  };
}

function renderReference(entries, allOperations, aliases) {
  const lines = [
    "# Yandex Market API reference",
    "",
    `Сгенерировано из официального OpenAPI snapshot ${metadata.commit}. Проверено: ${metadata.verifiedAt}.`,
    "",
    `Всего операций: **${allOperations.length}**.`,
    "",
    aliases.length === 0
      ? "Все публичные методы используют официальные semantic operationId без суффиксов версии. Версии `/v1` и `/v2` остаются частью HTTP path, а не имени TypeScript-метода."
      : `Рекомендуемых алиасов без версии: **${aliases.length}**. Точные operationId также остаются доступны.`,
    "",
    "Закрытые значения импортируются из `YmValues`:",
    "",
    "```ts",
    'import { YmValues } from "@seller-sdk/ym";',
    "",
    "const statuses = [YmValues.OrdersOrderStatusType.Processing];",
    "```",
    "",
  ];
  for (const entry of entries) {
    const domainOperations = allOperations.filter(
      (operation) => operation.entry === entry,
    );
    const aliasByOperation = new Map(
      aliases
        .filter(({ operation }) => operation.entry === entry)
        .map(({ alias, operation }) => [operation, alias]),
    );
    lines.push(
      `## ${entry.domainTitle} — \`${entry.domain}\``,
      "",
      `Источник: ${entry.documentation}`,
      "",
      ...(aliases.length === 0
        ? [
            "| Публичный метод | Описание | HTTP | Path | Реализация |",
            "| --- | --- | --- | --- | --- |",
          ]
        : [
            "| Алиас без версии | Точный метод | Описание | HTTP | Path | Реализация |",
            "| --- | --- | --- | --- | --- | --- |",
          ]),
    );
    for (const operation of domainOperations) {
      const endpointDirectory = `${operation.entry.domain}/${toKebabCase(operation.methodName)}`;
      const alias = aliasByOperation.get(operation);
      const method = `\`ym.${operation.entry.domain}.${operation.methodName}(...)\``;
      const description = `${escapeMarkdownTable(operation.summary)}${operation.deprecation === undefined ? "" : `<br>**Устарел:** ${escapeMarkdownTable(operation.deprecation)}`}`;
      const implementation = `[execute.ts](../../packages/ym/src/endpoints/${endpointDirectory}/execute.ts), [types.ts](../../packages/ym/src/endpoints/${endpointDirectory}/types.ts), [contract.ts](../../packages/ym/src/endpoints/${endpointDirectory}/contract.ts)`;
      lines.push(
        aliases.length === 0
          ? `| ${method} | ${description} | ${operation.method} | \`${operation.path}\` | ${implementation} |`
          : `| ${alias === undefined ? "—" : `\`ym.${operation.entry.domain}.${alias}(...)\``} | ${method} | ${description} | ${operation.method} | \`${operation.path}\` | ${implementation} |`,
      );
    }
    lines.push("");
  }
  return `${lines.join("\n")}\n`;
}

function resolveObject(document, value) {
  if (typeof value?.$ref !== "string") return value;
  return resolveLocalRef(document, value.$ref);
}

function resolveLocalRef(document, ref) {
  if (!ref.startsWith("#/"))
    throw new Error(`Unsupported external ref: ${ref}.`);
  return ref
    .slice(2)
    .split("/")
    .map((segment) => segment.replaceAll("~1", "/").replaceAll("~0", "~"))
    .reduce((current, segment) => current?.[segment], document);
}

function localRefName(ref) {
  if (!ref.startsWith("#/components/schemas/")) {
    throw new Error(`Unsupported schema ref: ${ref}.`);
  }
  return ref
    .slice("#/components/schemas/".length)
    .replaceAll("~1", "/")
    .replaceAll("~0", "~");
}

function toCamelCase(value) {
  const pascal = toPascalCase(value);
  const result = `${pascal.charAt(0).toLowerCase()}${pascal.slice(1)}`;
  return /^\d/.test(result) ? `operation${result}` : result;
}

function toPascalCase(value) {
  const words = String(value)
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean);
  const result = words
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join("");
  return /^\d/.test(result) ? `Operation${result}` : result;
}

function toKebabCase(value) {
  return String(value)
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

function toScreamingSnakeCase(value) {
  return toKebabCase(value).replaceAll("-", "_").toUpperCase();
}

function sanitizeIdentifier(value) {
  return String(value).replace(/[^a-zA-Z0-9]/g, "_");
}

function cleanText(value) {
  return String(value)
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 240);
}

function ensureSentence(value) {
  const text = String(value).trim();
  return /[.!?…]$/u.test(text) ? text : `${text}.`;
}

function cleanDocumentation(value) {
  return String(value)
    .replace(
      /\{\{\s*limit(?:-truncate)?-param-description\s*\}\}/giu,
      "Количество элементов на странице.",
    )
    .replace(/\{%\s*note\s+\w+\s+["']([^"']+)["']\s*%\}/giu, "$1")
    .replace(/\{%\s*cut\s+["']([^"']+)["']\s*%\}/giu, "$1")
    .replace(/\{%[^%]*%\}/gu, "")
    .replace(/\{\{[^}]*\}\}/gu, "")
    .replace(/<br\s*\/?\s*>/giu, "\n")
    .replace(/<a\s+[^>]*href=["']([^"']+)["'][^>]*>(.*?)<\/a>/giu, "$2 ($1)")
    .replace(/<[^>]+>/g, "")
    .replaceAll("&nbsp;", " ")
    .replaceAll("&mdash;", "—")
    .replaceAll("&ndash;", "–")
    .replaceAll("&quot;", '"')
    .replaceAll("&amp;", "&")
    .replace(/[\u00a0\u1680\u2000-\u200b\u202f\u205f\u3000\ufeff]/gu, " ")
    .replace(/[\u2028\u2029]/gu, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/ *\n */g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function toValuePropertyName(value) {
  const source = String(value);
  const normalized =
    /[A-Z]/u.test(source) && source === source.toUpperCase()
      ? source.toLowerCase()
      : source;
  return toPascalCase(normalized);
}

function createYmDeprecation(operation, allOperations) {
  if (!operation.deprecated) return undefined;
  const config = operation.deprecationConfig ?? {};
  const replacementId = config["replacement-operation-id"];
  const dates = [
    config["degradation-start-date"] === undefined
      ? undefined
      : `деградация с ${config["degradation-start-date"]}`,
    config["shutdown-date"] === undefined
      ? undefined
      : `отключение ${config["shutdown-date"]}`,
  ].filter(Boolean);
  if (replacementId === undefined) {
    return `Метод помечен устаревшим в OpenAPI YM${dates.length === 0 ? "" : ` (${dates.join(", ")}`}; официальная замена не указана.`;
  }
  const replacement = allOperations.find(
    (candidate) => candidate.operationId === replacementId,
  );
  if (replacement === undefined) {
    throw new Error(
      `Deprecated YM method ${operation.methodName} references missing replacement ${replacementId}.`,
    );
  }
  return `Метод помечен устаревшим в OpenAPI YM${dates.length === 0 ? "" : ` (${dates.join(", ")}`}. Замена: \`ym.${replacement.entry.domain}.${replacement.methodName}(...)\` для \`${replacement.method} ${replacement.path}\`.`;
}

function collectVersionlessAliases(allOperations) {
  const existingNamesByDomain = new Map();
  for (const operation of allOperations) {
    const names =
      existingNamesByDomain.get(operation.entry.domain) ?? new Set();
    names.add(operation.methodName);
    existingNamesByDomain.set(operation.entry.domain, names);
  }

  const candidatesByAlias = new Map();
  for (const operation of allOperations) {
    const alias = operation.methodName.replace(/V\d+(?=[A-Z]|$)/g, "");
    if (alias === operation.methodName) continue;
    if (existingNamesByDomain.get(operation.entry.domain)?.has(alias)) continue;
    const key = `${operation.entry.domain}\u0000${alias}`;
    const candidates = candidatesByAlias.get(key) ?? [];
    candidates.push({ alias, operation });
    candidatesByAlias.set(key, candidates);
  }

  const aliases = [];
  for (const candidates of candidatesByAlias.values()) {
    const current = candidates.filter(({ operation }) => !operation.deprecated);
    const eligible = current.length > 0 ? current : candidates;
    const ranked = eligible
      .map((candidate) => ({
        ...candidate,
        version: readMethodVersion(candidate.operation.methodName),
      }))
      .sort((left, right) => right.version - left.version);
    if (ranked.length > 1 && ranked[0].version === ranked[1].version) {
      throw new Error(
        `Ambiguous YM versionless alias ${ranked[0].operation.entry.domain}.${ranked[0].alias}.`,
      );
    }
    aliases.push({ alias: ranked[0].alias, operation: ranked[0].operation });
  }
  return aliases;
}

function readMethodVersion(methodName) {
  const versions = [...methodName.matchAll(/V(\d+)(?=[A-Z]|$)/g)].map((match) =>
    Number(match[1]),
  );
  if (versions.length === 0) return -1;
  return Math.max(...versions);
}

function isMethodDeprecationDescription(value) {
  const subject = "(?:метод|method|endpoint|operation)";
  const lifecycle =
    "(?:deprecated|obsolete|устар(?:ел|евает|евший)?|отключ(?:ён|ен|им|ат|ится)?)";
  return (
    new RegExp(`${subject}.{0,160}${lifecycle}`, "iu").test(value) ||
    new RegExp(`${lifecycle}.{0,160}${subject}`, "iu").test(value)
  );
}

function renderJsDoc(parts) {
  const text = unique(
    parts
      .filter((part) => typeof part === "string" && part.trim().length > 0)
      .map((part) => part.trim()),
  )
    .join("\n\n")
    .replaceAll("*/", "* /");
  if (text.length === 0) return "/** Описание отсутствует в OpenAPI YM. */";
  return ["/**", ...text.split("\n").map((line) => ` * ${line}`), " */"].join(
    "\n",
  );
}

function schemaDocumentationLines(node) {
  return [
    node.description ?? "",
    node.format === undefined ? "" : `Формат: \`${node.format}\`.`,
    node.example === undefined ? "" : `Пример: ${renderExample(node.example)}.`,
    node.default === undefined
      ? ""
      : `Значение по умолчанию: ${renderExample(node.default)}.`,
    node.minimum === undefined ? "" : `Минимальное значение: ${node.minimum}.`,
    node.maximum === undefined ? "" : `Максимальное значение: ${node.maximum}.`,
    node.minLength === undefined ? "" : `Минимальная длина: ${node.minLength}.`,
    node.maxLength === undefined
      ? ""
      : `Максимальная длина: ${node.maxLength}.`,
    node.minItems === undefined
      ? ""
      : `Минимальное количество элементов: ${node.minItems}.`,
    node.maxItems === undefined
      ? ""
      : `Максимальное количество элементов: ${node.maxItems}.`,
  ];
}

function renderExample(value) {
  const rendered = JSON.stringify(value);
  return rendered === undefined ? String(value) : `\`${rendered}\``;
}

function sectionDescription(key) {
  switch (key) {
    case "path":
      return "Параметры пути.";
    case "query":
      return "Параметры строки запроса.";
    case "headers":
      return "Дополнительные HTTP-заголовки метода.";
  }
}

function escapeComment(value) {
  return value.replaceAll("*/", "* / ");
}

function escapeMarkdownTable(value) {
  return String(value).replaceAll("|", "\\|").replace(/\s+/gu, " ").trim();
}

function unique(values) {
  return [...new Set(values)];
}

function readJson(relativePath) {
  return JSON.parse(readFileSync(join(projectDirectory, relativePath), "utf8"));
}

function checkFile(path, expected, command) {
  let actual;
  try {
    actual = readFileSync(path, "utf8");
  } catch {
    throw new Error(`${path} is missing. Run ${command}.`);
  }
  if (actual !== expected) throw new Error(`${path} is stale. Run ${command}.`);
}

function checkGeneratedFileSet(expectedFiles) {
  const actualFiles = [endpointsDirectory, contractsDirectory].flatMap(
    (directory) => listFiles(directory),
  );
  const expected = new Set(
    [...expectedFiles.keys()].filter(
      (path) =>
        path.startsWith(`${endpointsDirectory}/`) ||
        path.startsWith(`${contractsDirectory}/`),
    ),
  );
  const extra = actualFiles.filter((path) => !expected.has(path));
  if (extra.length > 0) {
    throw new Error(`${extra[0]} is obsolete. Run pnpm update:ym.`);
  }
}

function listFiles(directory) {
  let entries;
  try {
    entries = readdirSync(directory, { withFileTypes: true });
  } catch {
    return [];
  }
  return entries.flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? listFiles(path) : [path];
  });
}
