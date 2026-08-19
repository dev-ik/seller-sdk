// Generated runtime response contract for this Yandex Market endpoint.
import { ordersComponents } from "../../../contracts/orders.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetOrderResponse } from "./types.js";

const getOrderResponse200Schema = createYmSchema<GetOrderResponse>(
  { kind: "ref", name: "GetOrderResponse" },
  ordersComponents,
);

export function parseGetOrderResponse(
  status: number,
  input: unknown,
): GetOrderResponse {
  switch (status) {
    case 200:
      return parseYmResponse(getOrderResponse200Schema, input, "getOrder");
    default:
      return unexpectedYmSuccessStatus("getOrder", status);
  }
}
