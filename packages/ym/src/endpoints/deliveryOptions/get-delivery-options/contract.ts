// Generated runtime response contract for this Yandex Market endpoint.
import { deliveryOptionsComponents } from "../../../contracts/deliveryOptions.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetDeliveryOptionsResponse } from "./types.js";

const getDeliveryOptionsResponse200Schema =
  createYmSchema<GetDeliveryOptionsResponse>(
    { kind: "ref", name: "GetDeliveryOptionsResponse" },
    deliveryOptionsComponents,
  );

export function parseGetDeliveryOptionsResponse(
  status: number,
  input: unknown,
): GetDeliveryOptionsResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getDeliveryOptionsResponse200Schema,
        input,
        "getDeliveryOptions",
      );
    default:
      return unexpectedYmSuccessStatus("getDeliveryOptions", status);
  }
}
