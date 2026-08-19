// Generated runtime response contract for this Yandex Market endpoint.
import { ordersComponents } from "../../../contracts/orders.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { UpdateOrderStatusResponse } from "./types.js";

const updateOrderStatusResponse200Schema =
  createYmSchema<UpdateOrderStatusResponse>(
    { kind: "ref", name: "UpdateOrderStatusResponse" },
    ordersComponents,
  );

export function parseUpdateOrderStatusResponse(
  status: number,
  input: unknown,
): UpdateOrderStatusResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        updateOrderStatusResponse200Schema,
        input,
        "updateOrderStatus",
      );
    default:
      return unexpectedYmSuccessStatus("updateOrderStatus", status);
  }
}
