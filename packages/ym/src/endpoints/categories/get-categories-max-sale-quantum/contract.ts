// Generated runtime response contract for this Yandex Market endpoint.
import { categoriesComponents } from "../../../contracts/categories.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetCategoriesMaxSaleQuantumResponse } from "./types.js";

const getCategoriesMaxSaleQuantumResponse200Schema =
  createYmSchema<GetCategoriesMaxSaleQuantumResponse>(
    { kind: "ref", name: "GetCategoriesMaxSaleQuantumResponse" },
    categoriesComponents,
  );

export function parseGetCategoriesMaxSaleQuantumResponse(
  status: number,
  input: unknown,
): GetCategoriesMaxSaleQuantumResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getCategoriesMaxSaleQuantumResponse200Schema,
        input,
        "getCategoriesMaxSaleQuantum",
      );
    default:
      return unexpectedYmSuccessStatus("getCategoriesMaxSaleQuantum", status);
  }
}
