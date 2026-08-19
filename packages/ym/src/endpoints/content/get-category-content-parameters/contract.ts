// Generated runtime response contract for this Yandex Market endpoint.
import { contentComponents } from "../../../contracts/content.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetCategoryContentParametersResponse } from "./types.js";

const getCategoryContentParametersResponse200Schema =
  createYmSchema<GetCategoryContentParametersResponse>(
    { kind: "ref", name: "GetCategoryContentParametersResponse" },
    contentComponents,
  );

export function parseGetCategoryContentParametersResponse(
  status: number,
  input: unknown,
): GetCategoryContentParametersResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getCategoryContentParametersResponse200Schema,
        input,
        "getCategoryContentParameters",
      );
    default:
      return unexpectedYmSuccessStatus("getCategoryContentParameters", status);
  }
}
