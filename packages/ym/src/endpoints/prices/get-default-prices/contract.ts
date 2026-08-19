// Generated runtime response contract for this Yandex Market endpoint.
import { pricesComponents } from "../../../contracts/prices.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetDefaultPricesResponse } from "./types.js";

const getDefaultPricesResponse200Schema =
  createYmSchema<GetDefaultPricesResponse>(
    { kind: "ref", name: "GetDefaultPricesResponse" },
    pricesComponents,
  );

export function parseGetDefaultPricesResponse(
  status: number,
  input: unknown,
): GetDefaultPricesResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getDefaultPricesResponse200Schema,
        input,
        "getDefaultPrices",
      );
    default:
      return unexpectedYmSuccessStatus("getDefaultPrices", status);
  }
}
