// Generated runtime response contract for this Yandex Market endpoint.
import { priceQuarantineComponents } from "../../../contracts/priceQuarantine.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { ConfirmBusinessPricesResponse } from "./types.js";

const confirmBusinessPricesResponse200Schema =
  createYmSchema<ConfirmBusinessPricesResponse>(
    { kind: "ref", name: "EmptyApiResponse" },
    priceQuarantineComponents,
  );

export function parseConfirmBusinessPricesResponse(
  status: number,
  input: unknown,
): ConfirmBusinessPricesResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        confirmBusinessPricesResponse200Schema,
        input,
        "confirmBusinessPrices",
      );
    default:
      return unexpectedYmSuccessStatus("confirmBusinessPrices", status);
  }
}
