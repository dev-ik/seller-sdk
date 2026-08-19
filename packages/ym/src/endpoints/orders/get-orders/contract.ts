// Generated runtime response contract for this Yandex Market endpoint.
import { ordersComponents } from "../../../contracts/orders.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetOrdersResponse } from "./types.js";

const getOrdersResponse200Schema = createYmSchema<GetOrdersResponse>(
  { kind: "ref", name: "GetOrdersResponse" },
  ordersComponents,
);

export function parseGetOrdersResponse(
  status: number,
  input: unknown,
): GetOrdersResponse {
  switch (status) {
    case 200:
      return parseYmResponse(getOrdersResponse200Schema, input, "getOrders");
    default:
      return unexpectedYmSuccessStatus("getOrders", status);
  }
}
