import { readFile, writeFile } from "node:fs/promises";
import { format } from "prettier";

const projectDirectory = new URL("../", import.meta.url);
const endpointsUrl = new URL("docs/ozon/endpoints.json", projectDirectory);
const catalogUrl = new URL("docs/ozon/catalog.json", projectDirectory);
const specificationUrl = new URL("docs/ozon/swagger.json", projectDirectory);
const operationsUrl = new URL(
  "packages/ozon/src/operations.ts",
  projectDirectory,
);
const methodsOutputUrl = new URL(
  "packages/ozon/src/domain-methods.ts",
  projectDirectory,
);
const apiOutputUrl = new URL(
  "packages/ozon/src/domain-api.generated.ts",
  projectDirectory,
);
const referenceOutputUrl = new URL(
  "docs/ozon/API-REFERENCE.md",
  projectDirectory,
);
const checkOnly = process.argv.includes("--check");

const domainNames = {
  actions: "actions",
  analytics: "analytics",
  barcode: "barcodes",
  brand: "brands",
  cancellation: "cancellations",
  cancelReason: "cancellations",
  cargoes: "cargoes",
  carriage: "carriages",
  chat: "chats",
  delivery: "deliveries",
  deliveryMethod: "deliveryMethods",
  descriptionCategory: "categories",
  digital: "digital",
  fbp: "fbp",
  finance: "finance",
  invoice: "invoices",
  notification: "notifications",
  order: "orders",
  pass: "passes",
  polygon: "polygons",
  posting: "postings",
  "pricing-strategy": "pricingStrategies",
  product: "products",
  promotion: "promotions",
  question: "questions",
  rating: "ratings",
  receipt: "receipts",
  removal: "removals",
  report: "reports",
  returns: "returns",
  review: "reviews",
  roles: "access",
  searchQueries: "searchQueries",
  seller: "seller",
  sellerAction: "sellerActions",
  supplier: "suppliers",
  "supply-order": "supplyOrders",
  supplyDraft: "supplyDrafts",
  supplyOrder: "supplyOrders",
  warehouse: "warehouses",
};

const endpointManifest = JSON.parse(await readFile(endpointsUrl, "utf8"));
const catalog = JSON.parse(await readFile(catalogUrl, "utf8"));
const specification = JSON.parse(await readFile(specificationUrl, "utf8"));
const operationsSource = await readFile(operationsUrl, "utf8");
const catalogByOperationId = new Map(
  catalog.operations.map((operation) => [operation.operationId, operation]),
);
const specificationByOperationId =
  collectSpecificationOperations(specification);
const sdkOperationByPath = createSdkOperationByPath(
  endpointManifest.operations,
);
const groupedMethods = new Map();
const allMethods = new Set();

for (const operation of endpointManifest.operations) {
  const sourceDomain = operation.id.split(".")[1];
  const domainName = domainNames[sourceDomain];
  if (domainName === undefined) {
    throw new Error(`No public domain name for Ozon domain: ${sourceDomain}`);
  }
  if (allMethods.has(operation.sdkMethod)) {
    throw new Error(`Duplicate Ozon SDK method: ${operation.sdkMethod}`);
  }
  if (!new RegExp(`^  ${operation.sdkMethod}\\(`, "m").test(operationsSource)) {
    throw new Error(
      `OzonOperations does not implement manifest method: ${operation.sdkMethod}`,
    );
  }

  const catalogOperation = catalogByOperationId.get(operation.operationId);
  const specificationOperation = specificationByOperationId.get(
    operation.operationId,
  );
  if (catalogOperation === undefined || specificationOperation === undefined) {
    throw new Error(
      `Missing verified OpenAPI operation: ${operation.operationId}`,
    );
  }

  allMethods.add(operation.sdkMethod);
  const methods = groupedMethods.get(domainName) ?? [];
  methods.push({
    domainName,
    manifest: operation,
    catalog: catalogOperation,
    specification: specificationOperation,
  });
  groupedMethods.set(domainName, methods);
}

const groupedAliases = collectVersionlessAliases(groupedMethods);

const methodsSource = await format(
  renderDomainMethods(groupedMethods, groupedAliases),
  {
    parser: "typescript",
  },
);
const apiSource = await format(
  renderDomainApi(groupedMethods, groupedAliases),
  {
    parser: "typescript",
  },
);
const referenceSource = renderApiReference(groupedMethods, groupedAliases);

if (checkOnly) {
  const [currentMethodsSource, currentApiSource, currentReferenceSource] =
    await Promise.all([
      readFile(methodsOutputUrl, "utf8"),
      readFile(apiOutputUrl, "utf8"),
      readFile(referenceOutputUrl, "utf8"),
    ]);
  if (currentMethodsSource !== methodsSource) {
    throw new Error(
      "packages/ozon/src/domain-methods.ts is stale. Run pnpm update:domains.",
    );
  }
  if (currentApiSource !== apiSource) {
    throw new Error(
      "packages/ozon/src/domain-api.generated.ts is stale. Run pnpm update:domains.",
    );
  }
  if (currentReferenceSource !== referenceSource) {
    throw new Error(
      "docs/ozon/API-REFERENCE.md is stale. Run pnpm update:domains.",
    );
  }
} else {
  await Promise.all([
    writeFile(methodsOutputUrl, methodsSource, "utf8"),
    writeFile(apiOutputUrl, apiSource, "utf8"),
    writeFile(referenceOutputUrl, referenceSource, "utf8"),
  ]);
  console.log(
    `Generated ${allMethods.size} documented Ozon methods across ${groupedMethods.size} domains.`,
  );
}

function renderApiReference(groups, aliases) {
  const lines = [
    "# Справочник Ozon SDK",
    "",
    "> Файл генерируется из проверенного Ozon endpoint manifest и официальной OpenAPI-спецификации. Не редактируйте его вручную.",
    "",
    "Все методы доступны на `OzonClient` через перечисленные ниже области. Наведите курсор на метод или поле запроса в TypeScript-редакторе, чтобы увидеть описание, ограничения, пример и предупреждение об устаревании.",
    "",
    `Покрытие: ${allMethods.size} методов в ${groups.size} областях.`,
    "",
  ];

  for (const [domainName, methods] of sortedGroups(groups)) {
    lines.push(`## \`${domainName}\``, "");
    const domainAliases = aliases.get(domainName) ?? [];
    if (domainAliases.length > 0) {
      lines.push("Рекомендуемые алиасы без версии:", "");
      for (const { alias, operation } of domainAliases) {
        const deprecation = getDeprecation(operation);
        lines.push(
          `- \`${alias}\` → \`${operation.manifest.sdkMethod}\`${deprecation ? ` — устарел: ${deprecation}` : ""}`,
        );
      }
      lines.push("");
    }
    for (const operation of sortedMethods(methods)) {
      const { manifest, catalog: catalogOperation, specification } = operation;
      const summary = cleanText(catalogOperation.summary) || manifest.sdkMethod;
      const requiredFields = manifest.request?.required ?? [];
      const deprecation = getDeprecation(operation);
      const hasRequestBody = specification.requestBody != null;

      lines.push(
        `### \`${manifest.sdkMethod}\``,
        "",
        summary,
        "",
        `\`${manifest.method} ${manifest.path}\``,
        "",
        `\`await ozon.${domainName}.${manifest.sdkMethod}(${hasRequestBody ? "input" : ""})\``,
        "",
      );
      if (requiredFields.length > 0) {
        lines.push(
          `Обязательные поля запроса: ${requiredFields.map((field) => `\`${field}\``).join(", ")}.`,
          "",
        );
      }
      if (deprecation) {
        lines.push(`> Устарел: ${deprecation}`, "");
      }
      lines.push(
        `[Официальная документация Ozon](${manifest.documentation})`,
        "",
      );
    }
  }

  return `${lines.join("\n").trimEnd()}\n`;
}

function renderDomainMethods(groups, aliases) {
  const lines = [
    "// This file is generated by scripts/build-ozon-domains.mjs.",
    "// Do not edit it manually; update docs/ozon/endpoints.json and regenerate.",
    "",
    "export const ozonDomainMethods = {",
  ];

  for (const [domainName, methods] of sortedGroups(groups)) {
    lines.push(`  ${domainName}: [`);
    for (const { manifest } of sortedMethods(methods)) {
      lines.push(`    ${JSON.stringify(manifest.sdkMethod)},`);
    }
    lines.push("  ],");
  }

  lines.push("} as const;", "", "export const ozonDomainAliases = {");
  for (const [domainName] of sortedGroups(groups)) {
    lines.push(`  ${domainName}: {`);
    for (const { alias, operation } of aliases.get(domainName) ?? []) {
      lines.push(
        `    ${JSON.stringify(alias)}: ${JSON.stringify(operation.manifest.sdkMethod)},`,
      );
    }
    lines.push("  },");
  }
  lines.push(
    "} as const;",
    "",
    "export type OzonDomainName = keyof typeof ozonDomainMethods;",
    "",
  );
  return lines.join("\n");
}

function renderDomainApi(groups, aliases) {
  const lines = [
    "// This file is generated by scripts/build-ozon-domains.mjs.",
    "// Do not edit it manually; update the verified Ozon metadata and regenerate.",
    "",
    'import type { OzonOperations } from "./operations.js";',
    "",
    "type BoundOperationMethod<MethodName extends keyof OzonOperations> =",
    "  OzonOperations[MethodName] extends (...args: infer Arguments) => infer Result",
    "    ? (...args: Arguments) => Result",
    "    : never;",
    "",
    "export interface GeneratedOzonDomainApi {",
  ];

  for (const [domainName, methods] of sortedGroups(groups)) {
    lines.push(`  readonly ${domainName}: {`);
    for (const operation of sortedMethods(methods)) {
      lines.push(...renderMethodDocumentation(operation, "    "));
      lines.push(
        `    readonly ${operation.manifest.sdkMethod}: BoundOperationMethod<${JSON.stringify(operation.manifest.sdkMethod)}>;`,
      );
    }
    for (const { alias, operation } of aliases.get(domainName) ?? []) {
      const deprecation = getDeprecation(operation);
      lines.push(
        "    /**",
        `     * Рекомендуемый метод без версии; использует \`${operation.manifest.sdkMethod}\` (${operation.manifest.method} ${operation.manifest.path}).`,
        "     *",
        ...(deprecation === undefined
          ? []
          : [...wrapDocText(`@deprecated ${deprecation}`, "    "), "     *"]),
        `     * @see [Ozon Seller API](${operation.manifest.documentation})`,
        "     */",
        `    readonly ${alias}: BoundOperationMethod<${JSON.stringify(operation.manifest.sdkMethod)}>;`,
      );
    }
    lines.push("  };");
  }

  lines.push("}", "");
  return lines.join("\n");
}

function collectVersionlessAliases(groups) {
  const aliases = new Map();
  for (const [domainName, methods] of groups) {
    const existingNames = new Set(
      methods.map(({ manifest }) => manifest.sdkMethod),
    );
    const candidatesByAlias = new Map();
    for (const operation of methods) {
      const match = operation.manifest.sdkMethod.match(/^(.*)V(\d+)$/);
      if (match === null) continue;
      const [, alias, versionText] = match;
      if (!alias || existingNames.has(alias)) continue;
      const candidates = candidatesByAlias.get(alias) ?? [];
      candidates.push({ operation, version: Number(versionText) });
      candidatesByAlias.set(alias, candidates);
    }

    const domainAliases = [];
    for (const [alias, candidates] of candidatesByAlias) {
      const current = candidates.filter(
        ({ operation }) => getDeprecation(operation) === undefined,
      );
      const preferred = [...(current.length > 0 ? current : candidates)].sort(
        (left, right) => right.version - left.version,
      )[0];
      if (preferred !== undefined) {
        domainAliases.push({ alias, operation: preferred.operation });
      }
    }
    domainAliases.sort((left, right) => left.alias.localeCompare(right.alias));
    aliases.set(domainName, domainAliases);
  }
  return aliases;
}

function renderMethodDocumentation(operation, indentation) {
  const {
    manifest,
    catalog: catalogOperation,
    specification: openApiOperation,
  } = operation;
  const summary = cleanText(catalogOperation.summary) || manifest.sdkMethod;
  const details = summarizeDescription(catalogOperation.description);
  const requiredFields = manifest.request?.required ?? [];
  const deprecation = getDeprecation(operation);
  const requestExample =
    openApiOperation.requestBody?.content?.["application/json"]?.example;
  const lines = [`${indentation}/**`, `${indentation} * ${summary}`];

  if (details && details !== summary) {
    lines.push(`${indentation} *`, ...wrapDocText(details, indentation));
  }
  if (requiredFields.length > 0) {
    lines.push(
      `${indentation} *`,
      `${indentation} * Обязательные поля запроса: ${requiredFields.map((field) => `\`${field}\``).join(", ")}.`,
    );
  }
  if (requestExample !== undefined) {
    const serializedExample = JSON.stringify(requestExample, null, 2);
    if (serializedExample.length <= 2_000) {
      lines.push(
        `${indentation} *`,
        `${indentation} * @example`,
        `${indentation} * \`\`\`ts`,
        ...`await ozon.${operation.domainName}.${manifest.sdkMethod}(${serializedExample});`
          .split("\n")
          .map((line) => `${indentation} * ${escapeComment(line)}`),
        `${indentation} * \`\`\``,
      );
    }
  } else if (openApiOperation.requestBody == null) {
    lines.push(
      `${indentation} *`,
      `${indentation} * @example`,
      `${indentation} * \`\`\`ts`,
      `${indentation} * await ozon.${operation.domainName}.${manifest.sdkMethod}();`,
      `${indentation} * \`\`\``,
    );
  }
  if (deprecation) {
    lines.push(
      `${indentation} *`,
      ...wrapDocText(`@deprecated ${deprecation}`, indentation),
    );
  }
  lines.push(
    `${indentation} *`,
    `${indentation} * @see [Ozon Seller API](${manifest.documentation})`,
    `${indentation} */`,
  );
  return lines;
}

function getDeprecation(operation) {
  const notice = getOfficialDeprecation(operation);
  if (notice === undefined) return undefined;

  const replacementPaths = [
    ...new Set(
      [...notice.matchAll(/\/v\d+\/[a-z0-9_{}-]+(?:\/[a-z0-9_{}-]+)*/gi)].map(
        (match) => match[0],
      ),
    ),
  ];
  if (replacementPaths.length === 0) {
    throw new Error(
      `Deprecated Ozon method ${operation.manifest.sdkMethod} has no documented replacement path.`,
    );
  }

  const replacements = replacementPaths.map((path) => {
    const replacement = sdkOperationByPath.get(path);
    if (replacement === undefined) {
      throw new Error(
        `Replacement ${path} for deprecated Ozon method ${operation.manifest.sdkMethod} is not implemented in the SDK.`,
      );
    }
    return replacement;
  });
  const sdkLabel = replacements.length === 1 ? "Замена в SDK" : "Замены в SDK";
  const sdkMethods = replacements
    .map(
      ({ domainName, manifest }) =>
        `\`ozon.${domainName}.${manifest.sdkMethod}(...)\` для \`${manifest.method} ${manifest.path}\``,
    )
    .join("; ");
  return `${notice} ${sdkLabel}: ${sdkMethods}.`;
}

function getOfficialDeprecation({ catalog: catalogOperation, specification }) {
  const warningMatch = String(catalogOperation.description ?? "").match(
    /<aside[^>]*class=["']warning["'][^>]*>([\s\S]*?)<\/aside>/i,
  );
  const warning = warningMatch ? cleanText(warningMatch[1]) : "";
  if (warning && /(устар|отключ|deprecated|shut down)/i.test(warning)) {
    return warning;
  }

  if (
    specification.deprecated === true ||
    catalogOperation.deprecated === true
  ) {
    return "Ozon пометил метод как устаревший.";
  }
  return undefined;
}

function summarizeDescription(value) {
  const withoutAsides = String(value ?? "").replace(
    /<aside[\s\S]*?<\/aside>/gi,
    " ",
  );
  return truncate(cleanText(withoutAsides), 500);
}

function cleanText(value) {
  return escapeComment(
    String(value ?? "")
      .replace(/<br\s*\/?\s*>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/&nbsp;/g, " ")
      .replace(/&quot;/g, '"')
      .replace(/&amp;/g, "&")
      .replace(/\s+/g, " ")
      .replace(/\s+([.,;:!?])/g, "$1")
      .trim(),
  );
}

function createSdkOperationByPath(manifestOperations) {
  const result = new Map();
  for (const manifest of manifestOperations) {
    const sourceDomain = manifest.id.split(".")[1];
    const domainName = domainNames[sourceDomain];
    if (domainName === undefined) {
      throw new Error(`No public domain name for Ozon domain: ${sourceDomain}`);
    }
    if (result.has(manifest.path)) {
      throw new Error(`Duplicate Ozon operation path: ${manifest.path}`);
    }
    result.set(manifest.path, { domainName, manifest });
  }
  return result;
}

function wrapDocText(value, indentation) {
  const words = value.split(" ");
  const lines = [];
  let current = `${indentation} *`;
  for (const word of words) {
    if (`${current} ${word}`.length > 100 && current !== `${indentation} *`) {
      lines.push(current);
      current = `${indentation} * ${word}`;
    } else {
      current += ` ${word}`;
    }
  }
  if (current !== `${indentation} *`) lines.push(current);
  return lines;
}

function truncate(value, maximumLength) {
  if (value.length <= maximumLength) return value;
  const candidate = value.slice(0, maximumLength - 1);
  const boundary = candidate.lastIndexOf(" ");
  return `${candidate.slice(0, boundary > 0 ? boundary : undefined)}…`;
}

function escapeComment(value) {
  return String(value).replaceAll("*/", "*\\/");
}

function collectSpecificationOperations(document) {
  const operations = new Map();
  for (const pathItem of Object.values(document.paths ?? {})) {
    for (const [method, operation] of Object.entries(pathItem)) {
      if (!["get", "post", "put", "patch", "delete"].includes(method)) {
        continue;
      }
      operations.set(operation.operationId, operation);
    }
  }
  return operations;
}

function sortedGroups(groups) {
  return [...groups].sort(([left], [right]) => left.localeCompare(right));
}

function sortedMethods(methods) {
  return [...methods].sort((left, right) =>
    left.manifest.sdkMethod.localeCompare(right.manifest.sdkMethod),
  );
}
