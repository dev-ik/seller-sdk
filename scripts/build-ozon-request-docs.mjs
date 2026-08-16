import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { format } from "prettier";
import ts from "typescript";

const projectDirectory = fileURLToPath(new URL("../", import.meta.url));
const tsconfigPath = path.join(projectDirectory, "tsconfig.json");
const operationsPath = path.join(
  projectDirectory,
  "packages/ozon/src/operations.ts",
);
const manifestPath = path.join(projectDirectory, "docs/ozon/endpoints.json");
const specificationPath = path.join(projectDirectory, "docs/ozon/swagger.json");
const marker = "<!-- seller-sdk:ozon-openapi -->";
const generatedCommentPattern =
  /^[\t ]*\/\*\*(?:(?!\*\/)[\s\S])*?<!-- seller-sdk:ozon-openapi -->(?:(?!\*\/)[\s\S])*?\*\/\r?\n/gm;
const checkOnly = process.argv.includes("--check");

const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
const specification = JSON.parse(await readFile(specificationPath, "utf8"));
const operationSchemas = collectOperationSchemas(specification);
const sourceOverrides = new Map();

for (const fileName of ts.sys.readDirectory(
  path.join(projectDirectory, "packages/ozon/src"),
  [".ts"],
)) {
  const source = await readFile(fileName, "utf8");
  sourceOverrides.set(fileName, stripGeneratedComments(source));
}

const config = ts.readConfigFile(tsconfigPath, ts.sys.readFile);
if (config.error) throw new Error(formatDiagnostic(config.error));

const parsedConfig = ts.parseJsonConfigFileContent(
  config.config,
  ts.sys,
  projectDirectory,
);
if (parsedConfig.errors.length > 0) {
  throw new Error(parsedConfig.errors.map(formatDiagnostic).join("\n"));
}

const host = ts.createCompilerHost(parsedConfig.options);
const originalReadFile = host.readFile.bind(host);
host.readFile = (fileName) =>
  sourceOverrides.get(path.normalize(fileName)) ?? originalReadFile(fileName);
host.getSourceFile = (fileName, languageVersion) => {
  const source = host.readFile(fileName);
  return source === undefined
    ? undefined
    : ts.createSourceFile(fileName, source, languageVersion, true);
};

const program = ts.createProgram(
  parsedConfig.fileNames,
  parsedConfig.options,
  host,
);
const diagnostics = ts.getPreEmitDiagnostics(program);
if (diagnostics.length > 0) {
  throw new Error(diagnostics.map(formatDiagnostic).join("\n"));
}

const checker = program.getTypeChecker();
const operationsSourceFile = program.getSourceFile(operationsPath);
if (operationsSourceFile === undefined) {
  throw new Error("Could not load packages/ozon/src/operations.ts.");
}

const operationsClass = operationsSourceFile.statements.find(
  (statement) =>
    ts.isClassDeclaration(statement) &&
    statement.name?.text === "OzonOperations",
);
if (operationsClass === undefined || !ts.isClassDeclaration(operationsClass)) {
  throw new Error("Could not find OzonOperations.");
}

const methodsByName = new Map(
  operationsClass.members
    .filter(
      (member) =>
        ts.isMethodDeclaration(member) && ts.isIdentifier(member.name),
    )
    .map((member) => [member.name.text, member]),
);
const insertionsByFile = new Map();
const contractIssues = new Set();
let requestCount = 0;
let documentedPropertyCount = 0;

for (const operation of manifest.operations) {
  const requestContract = operationSchemas.get(operation.operationId);
  if (requestContract === undefined) continue;
  const { schema: requestSchema } = requestContract;

  const method = methodsByName.get(operation.sdkMethod);
  const input = method?.parameters[0];
  if (method === undefined || input === undefined) {
    throw new Error(`Missing request parameter for ${operation.sdkMethod}.`);
  }

  const requestProperties = collectObjectProperties(
    specification,
    requestSchema,
  );
  if (
    requestProperties.size === 0 &&
    ts.isIdentifier(input.name) &&
    input.name.text === "options"
  ) {
    continue;
  }

  const requestType = checker.getTypeAtLocation(input);
  requestCount += 1;
  documentObjectType({
    operation,
    methodName: operation.sdkMethod,
    schema: requestSchema,
    type: requestType,
    strict: true,
    seenTypes: new Set(),
    path: [],
  });
  auditManifestRequiredFields(operation, requestType);
}

if (contractIssues.size > 0) {
  throw new Error(
    `Ozon request contract audit failed with ${contractIssues.size} issue(s):\n${[...contractIssues].sort().join("\n")}`,
  );
}

const changedFiles = [];
for (const [fileName, insertions] of [...insertionsByFile].sort(
  ([left], [right]) => left.localeCompare(right),
)) {
  let source = sourceOverrides.get(fileName);
  if (source === undefined) throw new Error(`Missing source: ${fileName}`);

  for (const [position, insertion] of [...insertions].sort(
    ([left], [right]) => right - left,
  )) {
    source = `${source.slice(0, position)}${insertion.text}${source.slice(position)}`;
    documentedPropertyCount += 1;
  }

  const generated = await format(source, {
    parser: "typescript",
    filepath: fileName,
  });
  const current = await readFile(fileName, "utf8");
  if (generated === current) continue;

  changedFiles.push(fileName);
  if (!checkOnly) await writeFile(fileName, generated, "utf8");
}

if (checkOnly && changedFiles.length > 0) {
  const relativeFiles = changedFiles.map((fileName) =>
    path.relative(projectDirectory, fileName),
  );
  throw new Error(
    `Generated Ozon request documentation is stale in ${relativeFiles.length} file(s):\n${relativeFiles.join("\n")}\nRun pnpm update:request-docs.`,
  );
}

console.log(
  `${checkOnly ? "Verified" : "Generated"} ${requestCount} structured request contracts across ${manifest.operations.length} Ozon methods and ${documentedPropertyCount} TypeScript property descriptions.`,
);

function documentObjectType({
  operation,
  methodName,
  schema,
  type,
  strict,
  seenTypes,
  path: propertyPath,
}) {
  const normalizedTypes = normalizeTypes(type, schema);
  if (normalizedTypes.length === 0) return;
  const requestProperties = collectObjectProperties(specification, schema);
  const requiredProperties = collectRequiredProperties(specification, schema);
  const allTypeProperties = new Set(
    normalizedTypes.flatMap((normalizedType) =>
      checker.getPropertiesOfType(normalizedType).map(({ name }) => name),
    ),
  );

  for (const propertyName of requestProperties.keys()) {
    if (!allTypeProperties.has(propertyName)) {
      contractIssues.add(
        `${methodName}: OpenAPI field ${formatPath([...propertyPath, propertyName])} is missing in TypeScript.`,
      );
    }
  }

  for (const propertyName of requiredProperties) {
    const fullPath = formatPath([...propertyPath, propertyName]);
    if (
      operation.request?.openApiRequiredExceptions?.includes(fullPath) === true
    ) {
      continue;
    }
    const symbols = normalizedTypes
      .map((normalizedType) =>
        checker
          .getPropertiesOfType(normalizedType)
          .find(({ name }) => name === propertyName),
      )
      .filter((symbol) => symbol !== undefined);
    if (
      symbols.length > 0 &&
      !symbols.some((symbol) => !isOptionalSymbol(symbol))
    ) {
      contractIssues.add(
        `${methodName}: OpenAPI requires ${fullPath}, but TypeScript allows it to be omitted.`,
      );
    }
  }

  auditCompositionRequirements(
    methodName,
    schema,
    normalizedTypes,
    propertyPath,
  );

  for (const normalizedType of normalizedTypes) {
    if (seenTypes.has(normalizedType)) continue;
    seenTypes.add(normalizedType);

    const typeProperties = checker.getPropertiesOfType(normalizedType);
    if (!allowsAdditionalProperties(specification, schema)) {
      for (const symbol of typeProperties) {
        if (!requestProperties.has(symbol.name)) {
          const fullPath = formatPath([...propertyPath, symbol.name]);
          if (operation.request?.sdkExtraFields?.includes(fullPath) === true) {
            continue;
          }
          contractIssues.add(
            `${methodName}: TypeScript field ${fullPath} is absent from OpenAPI.`,
          );
        }
      }
      const indexType = checker.getIndexTypeOfType(
        normalizedType,
        ts.IndexKind.String,
      );
      if (
        indexType !== undefined &&
        (indexType.flags & ts.TypeFlags.Never) === 0
      ) {
        contractIssues.add(
          `${methodName}: ${formatPath(propertyPath)} accepts arbitrary string keys, but OpenAPI does not.`,
        );
      }
    }

    for (const [propertyName, propertySchema] of requestProperties) {
      const symbol = typeProperties.find(({ name }) => name === propertyName);
      if (symbol === undefined) {
        if (strict) {
          throw new Error(
            `${methodName}: request property ${propertyName} is missing in TypeScript.`,
          );
        }
        continue;
      }

      const declarations = (symbol.declarations ?? []).filter(
        (declaration) =>
          ts.isPropertySignature(declaration) &&
          isOzonSourceFile(declaration.getSourceFile().fileName),
      );
      if (declarations.length === 0) {
        if (strict) {
          throw new Error(
            `${methodName}: cannot locate TypeScript declaration for ${propertyName}.`,
          );
        }
        continue;
      }

      for (const declaration of declarations) {
        const declarationType = checker.getTypeAtLocation(declaration.type);
        if (
          hasManualDocumentation(declaration) ||
          (declarationType.flags & ts.TypeFlags.Never) !== 0
        ) {
          continue;
        }

        const sourceFile = declaration.getSourceFile();
        const insertion = getInsertionMap(
          insertionsByFile,
          sourceFile.fileName,
        );
        const position = getDeclarationPosition(declaration, sourceFile);
        const candidate = renderPropertyComment(
          propertyName,
          propertySchema,
          getIndent(sourceFile.text, position),
        );
        const current = insertion.get(position);
        if (current === undefined || candidate.score > current.score) {
          insertion.set(position, candidate);
        }
      }

      auditEnumValues(
        methodName,
        propertySchema,
        normalizedTypes,
        propertyName,
        [...propertyPath, propertyName],
      );

      if (hasObjectProperties(propertySchema)) {
        for (const containingType of normalizedTypes) {
          const nestedType = checker.getTypeOfPropertyOfType(
            containingType,
            propertyName,
          );
          if (
            nestedType === undefined ||
            (nestedType.flags & ts.TypeFlags.Never) !== 0
          ) {
            continue;
          }
          documentObjectType({
            operation,
            methodName,
            schema: propertySchema,
            type: nestedType,
            strict: false,
            seenTypes,
            path: [...propertyPath, propertyName],
          });
        }
      }
    }
  }
}

function auditManifestRequiredFields(operation, requestType) {
  const simpleRequiredFields = (operation.request?.required ?? []).filter(
    (field) => /^[A-Za-z_][A-Za-z0-9_]*$/.test(field),
  );
  for (const field of simpleRequiredFields) {
    const symbol = checker
      .getPropertiesOfType(requestType)
      .find(({ name }) => name === field);
    if (symbol === undefined) {
      contractIssues.add(
        `${operation.sdkMethod}: manifest-required field ${field} is missing in TypeScript.`,
      );
    } else if (isOptionalSymbol(symbol)) {
      contractIssues.add(
        `${operation.sdkMethod}: manifest requires ${field}, but TypeScript allows it to be omitted.`,
      );
    }
  }
}

function isOptionalSymbol(symbol) {
  return (symbol.flags & ts.SymbolFlags.Optional) !== 0;
}

function normalizeTypes(type, schema) {
  let types = type.isUnion() ? type.types : [type];
  types = types.filter(
    (candidate) =>
      (candidate.flags &
        (ts.TypeFlags.Undefined | ts.TypeFlags.Null | ts.TypeFlags.Never)) ===
      0,
  );

  const resolved = resolveSchema(specification, schema, new Set());
  if (resolved.type === "array" || resolved.items !== undefined) {
    types = types
      .map((candidate) =>
        checker.getIndexTypeOfType(candidate, ts.IndexKind.Number),
      )
      .filter((candidate) => candidate !== undefined);
  }
  return types.flatMap((candidate) =>
    candidate.isUnion() ? normalizeTypes(candidate, {}) : [candidate],
  );
}

function hasObjectProperties(schema) {
  return collectObjectProperties(specification, schema).size > 0;
}

function collectOperationSchemas(currentSpecification) {
  const operations = new Map();
  for (const pathItem of Object.values(currentSpecification.paths ?? {})) {
    for (const operation of Object.values(pathItem ?? {})) {
      if (
        typeof operation !== "object" ||
        operation === null ||
        typeof operation.operationId !== "string"
      ) {
        continue;
      }
      const content = operation.requestBody?.content;
      const media =
        content?.["application/json"] ?? content?.["multipart/form-data"];
      if (media?.schema !== undefined) {
        operations.set(operation.operationId, {
          mediaType:
            content?.["application/json"] === media
              ? "application/json"
              : "multipart/form-data",
          schema: media.schema,
        });
      }
    }
  }
  return operations;
}

function collectObjectProperties(
  currentSpecification,
  schema,
  seen = new Set(),
) {
  const resolved = resolveSchema(currentSpecification, schema, seen);
  if (resolved.type === "array" || resolved.items !== undefined) {
    return collectObjectProperties(
      currentSpecification,
      resolved.items ?? {},
      new Set(seen),
    );
  }
  const properties = new Map();

  for (const branch of [
    ...(resolved.allOf ?? []),
    ...(resolved.oneOf ?? []),
    ...(resolved.anyOf ?? []),
  ]) {
    for (const [name, property] of collectObjectProperties(
      currentSpecification,
      branch,
      new Set(seen),
    )) {
      properties.set(name, property);
    }
  }

  for (const [name, property] of Object.entries(resolved.properties ?? {})) {
    properties.set(
      name,
      resolveSchema(currentSpecification, property, new Set()),
    );
  }
  return properties;
}

function collectRequiredProperties(
  currentSpecification,
  schema,
  seen = new Set(),
) {
  const resolved = resolveSchema(currentSpecification, schema, seen);
  if (resolved.type === "array" || resolved.items !== undefined) {
    return collectRequiredProperties(
      currentSpecification,
      resolved.items ?? {},
      new Set(seen),
    );
  }

  const required = new Set(resolved.required ?? []);
  for (const branch of resolved.allOf ?? []) {
    for (const propertyName of collectRequiredProperties(
      currentSpecification,
      branch,
      new Set(seen),
    )) {
      required.add(propertyName);
    }
  }
  return required;
}

function auditCompositionRequirements(
  methodName,
  schema,
  normalizedTypes,
  propertyPath,
) {
  const resolved = resolveSchema(specification, schema, new Set());
  for (const [keyword, branches] of [
    ["oneOf", resolved.oneOf ?? []],
    ["anyOf", resolved.anyOf ?? []],
  ]) {
    const alternatives = branches
      .map((branch) => [...collectRequiredProperties(specification, branch)])
      .filter((required) => required.length > 0);
    if (alternatives.length === 0 || alternatives.length !== branches.length) {
      continue;
    }

    for (const normalizedType of normalizedTypes) {
      const satisfied = alternatives.filter((required) =>
        required.every((field) => {
          const symbol = checker
            .getPropertiesOfType(normalizedType)
            .find(({ name }) => name === field);
          return symbol !== undefined && !isOptionalSymbol(symbol);
        }),
      ).length;
      if (satisfied === 0 || (keyword === "oneOf" && satisfied !== 1)) {
        contractIssues.add(
          `${methodName}: TypeScript does not enforce OpenAPI ${keyword} at ${formatPath(propertyPath)} (${alternatives.map((fields) => fields.join(" + ")).join(" | ")}).`,
        );
      }
    }
  }
}

function auditEnumValues(
  methodName,
  schema,
  containingTypes,
  propertyName,
  propertyPath,
) {
  let resolved = resolveSchema(specification, schema, new Set());
  const propertyTypes = containingTypes
    .map((type) => checker.getTypeOfPropertyOfType(type, propertyName))
    .filter((type) => type !== undefined)
    .filter((type) => (type.flags & ts.TypeFlags.Never) === 0);

  if (resolved.type === "array" || resolved.items !== undefined) {
    const itemTypes = propertyTypes.flatMap((type) =>
      normalizeTypes(type, schema),
    );
    resolved = resolveSchema(specification, resolved.items ?? {}, new Set());
    propertyTypes.splice(0, propertyTypes.length, ...itemTypes);
  }

  if (!Array.isArray(resolved.enum) || resolved.enum.length === 0) return;
  const actual = collectLiteralValues(propertyTypes.filter(Boolean));
  if (actual === undefined) {
    contractIssues.add(
      `${methodName}: TypeScript field ${formatPath(propertyPath)} is broader than OpenAPI enum ${resolved.enum.map(String).join(" | ")}.`,
    );
    return;
  }

  const expected = new Set(resolved.enum.map(serializeLiteral));
  const extras = [...actual].filter((value) => !expected.has(value));
  const missing = [...expected].filter((value) => !actual.has(value));
  if (extras.length > 0 || missing.length > 0) {
    contractIssues.add(
      `${methodName}: enum mismatch at ${formatPath(propertyPath)}; extra in TypeScript: ${extras.join(", ") || "none"}; missing from TypeScript: ${missing.join(", ") || "none"}.`,
    );
  }
}

function collectLiteralValues(types) {
  const values = new Set();
  for (const initialType of types) {
    const candidates = initialType.isUnion()
      ? initialType.types
      : [initialType];
    for (const type of candidates) {
      if (
        (type.flags &
          (ts.TypeFlags.Undefined | ts.TypeFlags.Null | ts.TypeFlags.Never)) !==
        0
      ) {
        continue;
      }
      if (type.isStringLiteral() || type.isNumberLiteral()) {
        values.add(serializeLiteral(type.value));
        continue;
      }
      if (type.flags & ts.TypeFlags.BooleanLiteral) {
        values.add(serializeLiteral(type.intrinsicName === "true"));
        continue;
      }
      return undefined;
    }
  }
  return values;
}

function serializeLiteral(value) {
  return JSON.stringify(value);
}

function allowsAdditionalProperties(currentSpecification, schema) {
  const resolved = resolveSchema(currentSpecification, schema, new Set());
  if (resolved.type === "array" || resolved.items !== undefined) {
    return allowsAdditionalProperties(
      currentSpecification,
      resolved.items ?? {},
    );
  }
  if (resolved.additionalProperties !== undefined) {
    return resolved.additionalProperties !== false;
  }
  return [
    ...(resolved.allOf ?? []),
    ...(resolved.oneOf ?? []),
    ...(resolved.anyOf ?? []),
  ].some((branch) => allowsAdditionalProperties(currentSpecification, branch));
}

function formatPath(parts) {
  return parts.length === 0 ? "request" : parts.join(".");
}

function resolveSchema(currentSpecification, schema, seen) {
  if (schema?.$ref === undefined) return schema ?? {};
  if (seen.has(schema.$ref)) return {};
  seen.add(schema.$ref);

  const resolved = schema.$ref
    .replace(/^#\//, "")
    .split("/")
    .reduce(
      (value, part) =>
        value?.[part.replaceAll("~1", "/").replaceAll("~0", "~")],
      currentSpecification,
    );
  if (resolved === undefined)
    throw new Error(`Unresolved OpenAPI reference: ${schema.$ref}`);
  return resolveSchema(currentSpecification, resolved, seen);
}

function renderPropertyComment(propertyName, schema, indent) {
  const description = cleanText(schema.description ?? schema.title ?? "");
  const details = [];
  if (schema.format) details.push(`Формат: \`${schema.format}\`.`);
  if (schema.minimum !== undefined)
    details.push(`Минимум: \`${schema.minimum}\`.`);
  if (schema.maximum !== undefined)
    details.push(`Максимум: \`${schema.maximum}\`.`);
  if (schema.minLength !== undefined)
    details.push(`Минимальная длина: \`${schema.minLength}\`.`);
  if (schema.maxLength !== undefined)
    details.push(`Максимальная длина: \`${schema.maxLength}\`.`);
  if (schema.minItems !== undefined)
    details.push(`Минимум элементов: \`${schema.minItems}\`.`);
  if (schema.maxItems !== undefined)
    details.push(`Максимум элементов: \`${schema.maxItems}\`.`);
  const example = schema.example ?? schema.default;
  if (example !== undefined)
    details.push(`Пример: \`${formatExample(example)}\`.`);

  const paragraphs = [
    description || `Параметр \`${propertyName}\` запроса Ozon.`,
    details.join(" "),
  ].filter(Boolean);
  const lines = ["/**"];
  paragraphs.forEach((paragraph, index) => {
    if (index > 0) lines.push(" *");
    for (const line of wrapText(paragraph, 96)) lines.push(` * ${line}`);
  });
  lines.push(" *", ` * ${marker}`, " */");

  return {
    score: description.length * 10 + details.join(" ").length,
    text: `${lines.map((line) => `${indent}${line}`).join("\n")}\n`,
  };
}

function cleanText(value) {
  const text = String(value)
    .replace(/<aside[^>]*>[\s\S]*?<\/aside>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\*\//g, "*\\/");
  if (text.length <= 700) return text;
  const candidate = text.slice(0, 699);
  const boundary = candidate.lastIndexOf(" ");
  return `${candidate.slice(0, boundary > 0 ? boundary : undefined)}…`;
}

function formatExample(value) {
  const serialized = typeof value === "string" ? value : JSON.stringify(value);
  return serialized.replaceAll("`", "\\`").slice(0, 200);
}

function wrapText(value, width) {
  const words = value.split(/\s+/);
  const lines = [];
  let line = "";
  for (const word of words) {
    if (line.length > 0 && line.length + word.length + 1 > width) {
      lines.push(line);
      line = word;
    } else {
      line = line.length === 0 ? word : `${line} ${word}`;
    }
  }
  if (line.length > 0) lines.push(line);
  return lines;
}

function stripGeneratedComments(source) {
  return source.replace(generatedCommentPattern, "");
}

function hasManualDocumentation(declaration) {
  return ts.getJSDocCommentsAndTags(declaration).length > 0;
}

function getIndent(source, position) {
  const lineStart = source.lastIndexOf("\n", position - 1) + 1;
  return source.slice(lineStart, position).match(/^[\t ]*/)?.[0] ?? "";
}

function getDeclarationPosition(declaration, sourceFile) {
  const namePosition = declaration.name.getStart(sourceFile);
  const lineStart = sourceFile.text.lastIndexOf("\n", namePosition - 1) + 1;
  const prefix = sourceFile.text.slice(lineStart, namePosition);
  const indentation = prefix.match(/^[\t ]*/)?.[0] ?? "";
  if (!/^[\t ]*(?:readonly[\t ]+)?$/.test(prefix)) {
    throw new Error(
      `Cannot place generated documentation before ${declaration.name.getText(sourceFile)} in ${sourceFile.fileName}.`,
    );
  }
  return lineStart + indentation.length;
}

function getInsertionMap(collection, fileName) {
  const normalized = path.normalize(fileName);
  const current = collection.get(normalized) ?? new Map();
  collection.set(normalized, current);
  return current;
}

function isOzonSourceFile(fileName) {
  return path
    .normalize(fileName)
    .startsWith(path.join(projectDirectory, "packages/ozon/src") + path.sep);
}

function formatDiagnostic(diagnostic) {
  return ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n");
}
