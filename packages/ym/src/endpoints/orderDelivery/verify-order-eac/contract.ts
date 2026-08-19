// Generated runtime response contract for this Yandex Market endpoint.
import { orderDeliveryComponents } from "../../../contracts/orderDelivery.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { VerifyOrderEacResponse } from "./types.js";

const verifyOrderEacResponse200Schema = createYmSchema<VerifyOrderEacResponse>(
  { kind: "ref", name: "VerifyOrderEacResponse" },
  orderDeliveryComponents,
);

export function parseVerifyOrderEacResponse(
  status: number,
  input: unknown,
): VerifyOrderEacResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        verifyOrderEacResponse200Schema,
        input,
        "verifyOrderEac",
      );
    default:
      return unexpectedYmSuccessStatus("verifyOrderEac", status);
  }
}
