import {
  array,
  boolean,
  lazy,
  literal,
  number,
  object,
  record,
  string,
  union,
  unknown as unknownSchema,
  type Schema,
} from "@safe-shape/core";

export type YmSchemaLiteral = string | number | boolean | null;

export type YmSchemaNode =
  | {
      readonly kind: "string";
      readonly enum?: readonly YmSchemaLiteral[];
      readonly minLength?: number;
      readonly maxLength?: number;
      readonly nullable?: boolean;
    }
  | {
      readonly kind: "number";
      readonly integer?: boolean;
      readonly minimum?: number;
      readonly maximum?: number;
      readonly enum?: readonly YmSchemaLiteral[];
      readonly nullable?: boolean;
    }
  | { readonly kind: "boolean"; readonly nullable?: boolean }
  | {
      readonly kind: "literal";
      readonly value: YmSchemaLiteral;
      readonly nullable?: boolean;
    }
  | {
      readonly kind: "array";
      readonly items: YmSchemaNode;
      readonly nullable?: boolean;
    }
  | {
      readonly kind: "object";
      readonly properties: Readonly<Record<string, YmSchemaNode>>;
      readonly required: readonly string[];
      readonly additionalProperties?: false | YmSchemaNode;
      readonly nullable?: boolean;
    }
  | {
      readonly kind: "union";
      readonly choices: readonly YmSchemaNode[];
      readonly nullable?: boolean;
    }
  | { readonly kind: "ref"; readonly name: string; readonly nullable?: boolean }
  | { readonly kind: "unknown"; readonly nullable?: boolean };

export type YmSchemaComponents = Readonly<Record<string, YmSchemaNode>>;

export type YmJsonArray = readonly YmJsonValue[];

export interface YmJsonObject {
  readonly [key: string]: YmJsonValue;
}

export type YmJsonValue =
  | string
  | number
  | boolean
  | null
  | YmJsonArray
  | YmJsonObject;

const jsonValueSchema = unknownSchema() as Schema<YmJsonValue>;

/** @internal */
export function createYmSchema<T>(
  node: YmSchemaNode,
  components: YmSchemaComponents,
): Schema<T> {
  const componentCache = new Map<string, Schema<unknown>>();
  return buildSchema(node, components, componentCache) as Schema<T>;
}

function buildSchema(
  node: YmSchemaNode,
  components: YmSchemaComponents,
  componentCache: Map<string, Schema<unknown>>,
): Schema<unknown> {
  let result: Schema<unknown>;

  switch (node.kind) {
    case "string":
      result = buildStringSchema(node);
      break;
    case "number":
      result = buildNumberSchema(node);
      break;
    case "boolean":
      result = boolean();
      break;
    case "literal":
      result = literal(node.value);
      break;
    case "array":
      result = array(buildSchema(node.items, components, componentCache));
      break;
    case "object":
      result = buildObjectSchema(node, components, componentCache);
      break;
    case "union":
      result = buildUnionSchema(node, components, componentCache);
      break;
    case "ref": {
      const cached = componentCache.get(node.name);
      if (cached !== undefined) {
        result = cached;
        break;
      }
      const component = components[node.name];
      if (component === undefined) {
        throw new TypeError(
          `Unknown generated YM schema reference: ${node.name}.`,
        );
      }
      result = lazy(() => buildSchema(component, components, componentCache), {
        id: `ym-component/${node.name}`,
      });
      componentCache.set(node.name, result);
      break;
    }
    case "unknown":
      result = jsonValueSchema;
      break;
  }

  return node.nullable === true ? result.nullable() : result;
}

function buildStringSchema(
  node: Extract<YmSchemaNode, { readonly kind: "string" }>,
): Schema<unknown> {
  if (node.enum !== undefined && node.enum.length > 0) {
    return buildLiteralUnion(node.enum);
  }

  let result = string();
  if (node.minLength !== undefined) {
    result = result.refine((value) => value.length >= node.minLength!, {
      message: `Expected at least ${node.minLength} characters.`,
      expected: `string length >= ${node.minLength}`,
    });
  }
  if (node.maxLength !== undefined) {
    result = result.refine((value) => value.length <= node.maxLength!, {
      message: `Expected at most ${node.maxLength} characters.`,
      expected: `string length <= ${node.maxLength}`,
    });
  }
  return result;
}

function buildNumberSchema(
  node: Extract<YmSchemaNode, { readonly kind: "number" }>,
): Schema<unknown> {
  if (node.enum !== undefined && node.enum.length > 0) {
    return buildLiteralUnion(node.enum);
  }

  let result = number();
  if (node.integer === true) {
    result = result.refine(Number.isInteger, {
      message: "Expected an integer.",
      expected: "integer",
    });
  }
  if (node.minimum !== undefined) {
    result = result.refine((value) => value >= node.minimum!, {
      message: `Expected a number greater than or equal to ${node.minimum}.`,
      expected: `number >= ${node.minimum}`,
    });
  }
  if (node.maximum !== undefined) {
    result = result.refine((value) => value <= node.maximum!, {
      message: `Expected a number less than or equal to ${node.maximum}.`,
      expected: `number <= ${node.maximum}`,
    });
  }
  return result;
}

function buildObjectSchema(
  node: Extract<YmSchemaNode, { readonly kind: "object" }>,
  components: YmSchemaComponents,
  componentCache: Map<string, Schema<unknown>>,
): Schema<unknown> {
  const propertyNames = Object.keys(node.properties);
  if (
    propertyNames.length === 0 &&
    node.additionalProperties !== undefined &&
    node.additionalProperties !== false
  ) {
    return record(
      buildSchema(node.additionalProperties, components, componentCache),
    );
  }

  const required = new Set(node.required);
  const shape: Record<string, Schema<unknown>> = {};
  for (const [name, property] of Object.entries(node.properties)) {
    const propertySchema = buildSchema(property, components, componentCache);
    shape[name] = required.has(name)
      ? propertySchema
      : propertySchema.optional();
  }
  return object(shape);
}

function buildUnionSchema(
  node: Extract<YmSchemaNode, { readonly kind: "union" }>,
  components: YmSchemaComponents,
  componentCache: Map<string, Schema<unknown>>,
): Schema<unknown> {
  const choices = node.choices.map((choice) =>
    buildSchema(choice, components, componentCache),
  );
  if (choices.length === 0) return jsonValueSchema;
  if (choices.length === 1) return choices[0]!;
  return union([choices[0]!, ...choices.slice(1)]);
}

function buildLiteralUnion(
  values: readonly YmSchemaLiteral[],
): Schema<unknown> {
  const schemas = values.map((value) => literal(value));
  if (schemas.length === 1) return schemas[0]!;
  return union([schemas[0]!, ...schemas.slice(1)]);
}
