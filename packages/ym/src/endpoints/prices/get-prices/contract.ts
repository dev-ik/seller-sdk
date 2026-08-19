// Generated runtime response contract for this Yandex Market endpoint.
import { pricesComponents } from "../../../contracts/prices.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetPricesResponse } from "./types.js";

const getPricesResponse200Schema = createYmSchema<GetPricesResponse>(
  { kind: "ref", name: "GetPricesResponse" },
  pricesComponents,
);

export function parseGetPricesResponse(
  status: number,
  input: unknown,
): GetPricesResponse {
  switch (status) {
    case 200:
      return parseYmResponse(getPricesResponse200Schema, input, "getPrices");
    default:
      return unexpectedYmSuccessStatus("getPrices", status);
  }
}
