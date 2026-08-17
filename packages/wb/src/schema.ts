import {
  array,
  boolean,
  literal,
  number,
  object,
  record,
  string,
  union,
  type Schema,
} from "@safe-shape/core";

export type WbSchemaLiteral = string | number | boolean | null;

export type WbSchemaNode =
  | {
      readonly kind: "string";
      readonly enum?: readonly WbSchemaLiteral[];
      readonly minLength?: number;
      readonly maxLength?: number;
      readonly nullable?: boolean;
    }
  | {
      readonly kind: "number";
      readonly integer?: boolean;
      readonly minimum?: number;
      readonly maximum?: number;
      readonly enum?: readonly WbSchemaLiteral[];
      readonly nullable?: boolean;
    }
  | { readonly kind: "boolean"; readonly nullable?: boolean }
  | {
      readonly kind: "literal";
      readonly value: WbSchemaLiteral;
      readonly nullable?: boolean;
    }
  | {
      readonly kind: "array";
      readonly items: WbSchemaNode;
      readonly nullable?: boolean;
    }
  | {
      readonly kind: "object";
      readonly properties: Readonly<Record<string, WbSchemaNode>>;
      readonly required: readonly string[];
      readonly additionalProperties?: false | WbSchemaNode;
      readonly nullable?: boolean;
    }
  | {
      readonly kind: "union";
      readonly choices: readonly WbSchemaNode[];
      readonly nullable?: boolean;
    }
  | { readonly kind: "ref"; readonly name: string; readonly nullable?: boolean }
  | { readonly kind: "unknown"; readonly nullable?: boolean };

export type WbSchemaComponents = Readonly<Record<string, WbSchemaNode>>;

export type WbJsonArray = readonly WbJsonValue[];

export interface WbJsonObject {
  readonly [key: string]: WbJsonValue;
}

export type WbJsonValue =
  | string
  | number
  | boolean
  | null
  | WbJsonArray
  | WbJsonObject;

const jsonValueSchema = createJsonValueSchema(12);

/** @internal */
export function createWbSchema<T>(
  node: WbSchemaNode,
  components: WbSchemaComponents,
): Schema<T> {
  const componentCache = new Map<string, Schema<unknown>>();
  return buildSchema(node, components, componentCache) as Schema<T>;
}

function buildSchema(
  node: WbSchemaNode,
  components: WbSchemaComponents,
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
          `Unknown generated WB schema reference: ${node.name}.`,
        );
      }
      result = buildSchema(component, components, componentCache);
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
  node: Extract<WbSchemaNode, { readonly kind: "string" }>,
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
  node: Extract<WbSchemaNode, { readonly kind: "number" }>,
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
  node: Extract<WbSchemaNode, { readonly kind: "object" }>,
  components: WbSchemaComponents,
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
  node: Extract<WbSchemaNode, { readonly kind: "union" }>,
  components: WbSchemaComponents,
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
  values: readonly WbSchemaLiteral[],
): Schema<unknown> {
  const schemas = values.map((value) => literal(value));
  if (schemas.length === 1) return schemas[0]!;
  return union([schemas[0]!, ...schemas.slice(1)]);
}

function createJsonValueSchema(depth: number): Schema<WbJsonValue> {
  let result = union([
    string(),
    number(),
    boolean(),
    literal(null),
  ]) as Schema<WbJsonValue>;

  for (let index = 0; index < depth; index += 1) {
    result = union([
      string(),
      number(),
      boolean(),
      literal(null),
      array(result),
      record(result),
    ]) as Schema<WbJsonValue>;
  }
  return result;
}
