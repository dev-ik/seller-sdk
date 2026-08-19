// Generated runtime response contract for this Yandex Market endpoint.
import { deliveryOptionsComponents } from "../../../contracts/deliveryOptions.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetReturnDeliveryOptionsResponse } from "./types.js";

const getReturnDeliveryOptionsResponse200Schema =
  createYmSchema<GetReturnDeliveryOptionsResponse>(
    { kind: "ref", name: "GetReturnDeliveryOptionsResponse" },
    deliveryOptionsComponents,
  );

export function parseGetReturnDeliveryOptionsResponse(
  status: number,
  input: unknown,
): GetReturnDeliveryOptionsResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getReturnDeliveryOptionsResponse200Schema,
        input,
        "getReturnDeliveryOptions",
      );
    default:
      return unexpectedYmSuccessStatus("getReturnDeliveryOptions", status);
  }
}
