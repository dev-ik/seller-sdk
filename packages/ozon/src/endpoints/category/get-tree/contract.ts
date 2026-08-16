import {
  boolean,
  failure,
  object,
  string,
  success,
  type Issue,
  type ParseResult,
} from "@safe-shape/core";
import { integerSchema } from "../../../contracts/integer.js";
import type {
  GetDescriptionCategoryTreeResponse,
  OzonDescriptionCategoryTreeItem,
} from "./types.js";

const treeItemFieldsSchema = object({
  description_category_id: integerSchema.optional(),
  category_name: string().optional(),
  disabled: boolean().optional(),
  type_id: integerSchema.optional(),
  type_name: string().optional(),
});

const treeItemFieldNames = new Set([
  "description_category_id",
  "category_name",
  "disabled",
  "type_id",
  "type_name",
]);

/** @internal */
export function safeParseDescriptionCategoryTreeResponse(
  input: unknown,
): ParseResult<GetDescriptionCategoryTreeResponse> {
  if (!isRecord(input)) {
    return failure([
      createIssue({
        code: "invalid_type",
        path: [],
        expected: "object",
        received: input,
        message: "Expected an object.",
      }),
    ]);
  }

  const issues: Issue[] = [];

  if (input["result"] === undefined || input["result"] === null) {
    return success({});
  }
  if (!Array.isArray(input["result"])) {
    issues.push(
      createIssue({
        code: "invalid_type",
        path: ["result"],
        expected: "array",
        received: input["result"],
        message: "Expected an array.",
      }),
    );
    return failure(issues);
  }

  const result: OzonDescriptionCategoryTreeItem[] = [];
  input["result"].forEach((item, index) => {
    const parsed = parseTreeItem(item, ["result", index], issues);
    if (parsed !== undefined) result.push(parsed);
  });

  return issues.length === 0
    ? success({ result: Object.freeze(result) })
    : failure(issues);
}

function parseTreeItem(
  input: unknown,
  path: readonly (string | number)[],
  issues: Issue[],
): OzonDescriptionCategoryTreeItem | undefined {
  if (!isRecord(input)) {
    issues.push(
      createIssue({
        code: "invalid_type",
        path,
        expected: "object",
        received: input,
        message: "Expected an object.",
      }),
    );
    return undefined;
  }

  const { children, ...rawFieldsInput } = input;
  const fieldsInput = Object.fromEntries(
    Object.entries(rawFieldsInput).filter(
      ([key, value]) => treeItemFieldNames.has(key) && value !== null,
    ),
  );
  const fieldsResult = treeItemFieldsSchema.safeParse(fieldsInput);
  if (!fieldsResult.success) {
    issues.push(...prefixIssues(fieldsResult.error.issues, path));
  }

  let parsedChildren: readonly OzonDescriptionCategoryTreeItem[] | undefined;
  if (children !== undefined && children !== null) {
    if (!Array.isArray(children)) {
      issues.push(
        createIssue({
          code: "invalid_type",
          path: [...path, "children"],
          expected: "array",
          received: children,
          message: "Expected an array.",
        }),
      );
    } else {
      const output: OzonDescriptionCategoryTreeItem[] = [];
      children.forEach((child, index) => {
        const parsed = parseTreeItem(
          child,
          [...path, "children", index],
          issues,
        );
        if (parsed !== undefined) output.push(parsed);
      });
      parsedChildren = Object.freeze(output);
    }
  }

  if (!fieldsResult.success) return undefined;
  return Object.freeze({
    ...fieldsResult.data,
    ...(parsedChildren === undefined ? {} : { children: parsedChildren }),
  });
}

function prefixIssues(
  issues: readonly Issue[],
  prefix: readonly (string | number)[],
): Issue[] {
  return issues.map((issue) => ({
    ...issue,
    path: [...prefix, ...issue.path],
  }));
}

function isRecord(input: unknown): input is Record<string, unknown> {
  return typeof input === "object" && input !== null && !Array.isArray(input);
}

function createIssue(
  input: Omit<Issue, "received"> & { readonly received: unknown },
): Issue {
  return Object.freeze({
    ...input,
    received: describeReceived(input.received),
  });
}

function describeReceived(input: unknown): string {
  if (input === null) return "null";
  if (Array.isArray(input)) return "array";
  return typeof input;
}
