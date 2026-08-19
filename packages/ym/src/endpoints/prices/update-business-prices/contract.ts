// Generated runtime response contract for this Yandex Market endpoint.
import { pricesComponents } from "../../../contracts/prices.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { UpdateBusinessPricesResponse } from "./types.js";

const updateBusinessPricesResponse200Schema =
  createYmSchema<UpdateBusinessPricesResponse>(
    { kind: "ref", name: "EmptyApiResponse" },
    pricesComponents,
  );

export function parseUpdateBusinessPricesResponse(
  status: number,
  input: unknown,
): UpdateBusinessPricesResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        updateBusinessPricesResponse200Schema,
        input,
        "updateBusinessPrices",
      );
    default:
      return unexpectedYmSuccessStatus("updateBusinessPrices", status);
  }
}
