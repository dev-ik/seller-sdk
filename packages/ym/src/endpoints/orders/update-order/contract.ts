// Generated runtime response contract for this Yandex Market endpoint.
import { ordersComponents } from "../../../contracts/orders.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { UpdateOrderResponse } from "./types.js";

const updateOrderResponse200Schema = createYmSchema<UpdateOrderResponse>(
  { kind: "ref", name: "UpdateOrderResponse" },
  ordersComponents,
);

export function parseUpdateOrderResponse(
  status: number,
  input: unknown,
): UpdateOrderResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        updateOrderResponse200Schema,
        input,
        "updateOrder",
      );
    default:
      return unexpectedYmSuccessStatus("updateOrder", status);
  }
}
