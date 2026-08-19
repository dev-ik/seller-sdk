// Generated runtime response contract for this Yandex Market endpoint.
import { orderDeliveryComponents } from "../../../contracts/orderDelivery.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { SetOrderDeliveryDateResponse } from "./types.js";

const setOrderDeliveryDateResponse200Schema =
  createYmSchema<SetOrderDeliveryDateResponse>(
    { kind: "ref", name: "EmptyApiResponse" },
    orderDeliveryComponents,
  );

export function parseSetOrderDeliveryDateResponse(
  status: number,
  input: unknown,
): SetOrderDeliveryDateResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        setOrderDeliveryDateResponse200Schema,
        input,
        "setOrderDeliveryDate",
      );
    default:
      return unexpectedYmSuccessStatus("setOrderDeliveryDate", status);
  }
}
