// Generated runtime response contract for this Yandex Market endpoint.
import { categoriesComponents } from "../../../contracts/categories.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetCategoriesTreeResponse } from "./types.js";

const getCategoriesTreeResponse200Schema =
  createYmSchema<GetCategoriesTreeResponse>(
    { kind: "ref", name: "GetCategoriesResponse" },
    categoriesComponents,
  );

export function parseGetCategoriesTreeResponse(
  status: number,
  input: unknown,
): GetCategoriesTreeResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getCategoriesTreeResponse200Schema,
        input,
        "getCategoriesTree",
      );
    default:
      return unexpectedYmSuccessStatus("getCategoriesTree", status);
  }
}
