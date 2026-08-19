// Generated runtime response contract for this Yandex Market endpoint.
import { pricesComponents } from "../../../contracts/prices.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { UpdatePricesResponse } from "./types.js";

const updatePricesResponse200Schema = createYmSchema<UpdatePricesResponse>(
  { kind: "ref", name: "EmptyApiResponse" },
  pricesComponents,
);

export function parseUpdatePricesResponse(
  status: number,
  input: unknown,
): UpdatePricesResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        updatePricesResponse200Schema,
        input,
        "updatePrices",
      );
    default:
      return unexpectedYmSuccessStatus("updatePrices", status);
  }
}
