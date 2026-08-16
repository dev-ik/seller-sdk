import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { format } from "prettier";
import ts from "typescript";

const projectDirectory = fileURLToPath(new URL("../", import.meta.url));
const tsconfigPath = path.join(projectDirectory, "tsconfig.json");
const specificationPath = path.join(projectDirectory, "docs/ozon/swagger.json");
const outputPath = path.join(projectDirectory, "packages/ozon/src/values.ts");
const checkOnly = process.argv.includes("--check");

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

const program = ts.createProgram(parsedConfig.fileNames, parsedConfig.options);
const checker = program.getTypeChecker();
const specification = JSON.parse(await readFile(specificationPath, "utf8"));
const enumDescriptions = collectEnumDescriptions(specification);
const valueSets = applyEnumDescriptions(
  collectValueSets(program, checker),
  enumDescriptions,
);
const generatedText = await format(renderValues(valueSets), {
  parser: "typescript",
});

if (checkOnly) {
  const currentText = await readFile(outputPath, "utf8");
  if (currentText !== generatedText) {
    throw new Error(
      "packages/ozon/src/values.ts is stale. Run pnpm update:values.",
    );
  }
} else {
  await writeFile(outputPath, generatedText, "utf8");
  const documentedValueCount = valueSets.reduce(
    (total, valueSet) =>
      total +
      valueSet.properties.filter(({ description }) => description).length,
    0,
  );
  console.log(
    `Generated ${valueSets.length} Ozon value sets with ${documentedValueCount} documented values.`,
  );
}

function collectEnumDescriptions(root) {
  const candidatesBySet = new Map();

  visit(root);

  const resolvedBySet = new Map();
  for (const [key, candidates] of candidatesBySet) {
    const values = key.split("\u0000");
    const resolved = new Map();

    for (const value of values) {
      const descriptions = new Set(
        candidates.map((candidate) => candidate.get(value)).filter(Boolean),
      );
      if (descriptions.size === 1) {
        resolved.set(value, descriptions.values().next().value);
      }
    }

    if (resolved.size > 0) resolvedBySet.set(key, resolved);
  }

  return resolvedBySet;

  function visit(value) {
    if (!value || typeof value !== "object") return;

    if (
      Array.isArray(value.enum) &&
      value.enum.length >= 2 &&
      value.enum.every((enumValue) => typeof enumValue === "string") &&
      typeof value.description === "string"
    ) {
      const descriptions = extractEnumValueDescriptions(
        value.description,
        value.enum,
      );
      if (descriptions.size > 0) {
        const key = setKey(value.enum);
        candidatesBySet.set(key, [
          ...(candidatesBySet.get(key) ?? []),
          descriptions,
        ]);
      }
    }

    if (Array.isArray(value)) {
      for (const item of value) visit(item);
      return;
    }

    for (const child of Object.values(value)) visit(child);
  }
}

function extractEnumValueDescriptions(description, values) {
  const occurrences = [];

  for (const value of values) {
    const token = `\`${value}\``;
    let searchFrom = 0;
    while (searchFrom < description.length) {
      const index = description.indexOf(token, searchFrom);
      if (index === -1) break;
      const suffix = description.slice(index + token.length);
      if (/^\s*(?:—|–|-)\s*/u.test(suffix)) {
        occurrences.push({ index, token, value });
        break;
      }
      searchFrom = index + token.length;
    }
  }

  occurrences.sort((left, right) => left.index - right.index);
  const output = new Map();

  for (const [index, occurrence] of occurrences.entries()) {
    const next = occurrences[index + 1];
    let text = description.slice(
      occurrence.index + occurrence.token.length,
      next?.index ?? description.length,
    );
    text = text.split(/\n\s*\n/u, 1)[0];
    text = text
      .replace(/^\s*(?:—|–|-)\s*/u, "")
      .replace(/\s+/gu, " ")
      .replace(/[,;.]?\s*[-*]\s*$/u, "")
      .replace(/[,;]\s*$/u, "")
      .trim();

    if (!text || text.length > 300 || /<\/?[a-z][^>]*>/iu.test(text)) {
      continue;
    }

    text = capitalize(text).replaceAll("*/", "* /");
    if (!/[.!?)]$/u.test(text)) text += ".";
    output.set(occurrence.value, text);
  }

  return output;
}

function capitalize(value) {
  const [first, ...rest] = [...value];
  return first ? first.toLocaleUpperCase("ru-RU") + rest.join("") : value;
}

function applyEnumDescriptions(valueSets, descriptionsBySet) {
  return valueSets.map((valueSet) => {
    const descriptions = descriptionsBySet.get(
      setKey(valueSet.properties.map(({ value }) => value)),
    );
    return {
      ...valueSet,
      properties: valueSet.properties.map((property) => ({
        ...property,
        description: descriptions?.get(property.value),
      })),
    };
  });
}

function collectValueSets(currentProgram, currentChecker) {
  const records = [];
  const endpointTypesSegment = `${path.sep}packages${path.sep}ozon${path.sep}src${path.sep}endpoints${path.sep}`;

  for (const sourceFile of currentProgram.getSourceFiles()) {
    if (
      !sourceFile.fileName.includes(endpointTypesSegment) ||
      !sourceFile.fileName.endsWith(`${path.sep}types.ts`)
    ) {
      continue;
    }

    for (const statement of sourceFile.statements) {
      if (
        !ts.isTypeAliasDeclaration(statement) ||
        !statement.modifiers?.some(
          ({ kind }) => kind === ts.SyntaxKind.ExportKeyword,
        )
      ) {
        continue;
      }

      const type = currentChecker.getTypeAtLocation(statement.name);
      const members = type.isUnion() ? type.types : [type];
      if (
        members.length < 2 ||
        !members.every(
          (member) => (member.flags & ts.TypeFlags.StringLiteral) !== 0,
        )
      ) {
        continue;
      }

      records.push({
        typeName: statement.name.text,
        nameWithoutPrefix: statement.name.text.replace(/^Ozon/, ""),
        values: members.map(({ value }) => value),
      });
    }
  }

  const groups = groupBy(records, ({ nameWithoutPrefix }) =>
    nameWithoutPrefix.replace(/V\d+$/, ""),
  );
  const output = [];

  for (const [simpleName, group] of groups) {
    const distinctSets = new Set(group.map(({ values }) => setKey(values)));

    if (distinctSets.size === 1) {
      output.push(mergeRecords(simpleName, group));
      continue;
    }

    const versionedGroups = groupBy(
      group,
      ({ nameWithoutPrefix }) => nameWithoutPrefix,
    );
    for (const [versionedName, versionedGroup] of versionedGroups) {
      const versionedSets = new Set(
        versionedGroup.map(({ values }) => setKey(values)),
      );
      if (versionedSets.size !== 1) {
        throw new Error(
          `Cannot generate OzonValues.${versionedName}: the same public type name has incompatible values.`,
        );
      }
      output.push(mergeRecords(versionedName, versionedGroup));
    }
  }

  return output.sort((left, right) => left.name.localeCompare(right.name));
}

function mergeRecords(name, records) {
  const values = [];
  for (const { values: recordValues } of records) {
    for (const value of recordValues) {
      if (!values.includes(value)) values.push(value);
    }
  }

  const properties = values.map((value) => ({
    name: toPropertyName(value),
    value,
  }));
  const propertyNames = new Set(properties.map(({ name: key }) => key));
  if (propertyNames.size !== properties.length) {
    throw new Error(`Generated value names collide in OzonValues.${name}.`);
  }

  return {
    name,
    typeNames: [...new Set(records.map(({ typeName }) => typeName))].sort(),
    properties,
  };
}

function renderValues(valueSets) {
  const lines = [
    "/**",
    " * Сгенерировано из закрытых строковых union-типов контрактов Ozon.",
    " * После изменения контрактов выполните `pnpm update:values`.",
    " */",
    "export const OzonValues = {",
  ];

  for (const { name, typeNames, properties } of valueSets) {
    lines.push(
      `  /** Значения для ${typeNames.map((typeName) => `\`${typeName}\``).join(", ")}. */`,
    );
    lines.push(`  ${name}: {`);
    for (const property of properties) {
      if (property.description) {
        lines.push(`    /** ${property.description} */`);
      }
      lines.push(`    ${property.name}: ${JSON.stringify(property.value)},`);
    }
    lines.push("  },");
  }

  lines.push("} as const;", "");
  return lines.join("\n");
}

function toPropertyName(value) {
  if (/^[A-Z][A-Z0-9_]*$/.test(value)) {
    return value
      .toLowerCase()
      .split("_")
      .filter(Boolean)
      .map((part) => part[0].toUpperCase() + part.slice(1))
      .join("");
  }

  if (value.includes("_")) {
    return value
      .split("_")
      .filter(Boolean)
      .map((part) => part[0].toUpperCase() + part.slice(1))
      .join("");
  }

  return value[0].toUpperCase() + value.slice(1);
}

function groupBy(values, getKey) {
  const groups = new Map();
  for (const value of values) {
    const key = getKey(value);
    groups.set(key, [...(groups.get(key) ?? []), value]);
  }
  return groups;
}

function setKey(values) {
  return [...new Set(values)].sort().join("\u0000");
}

function formatDiagnostic(diagnostic) {
  return ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n");
}
