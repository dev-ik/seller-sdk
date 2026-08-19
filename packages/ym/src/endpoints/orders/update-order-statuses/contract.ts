// Generated runtime response contract for this Yandex Market endpoint.
import { ordersComponents } from "../../../contracts/orders.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { UpdateOrderStatusesResponse } from "./types.js";

const updateOrderStatusesResponse200Schema =
  createYmSchema<UpdateOrderStatusesResponse>(
    { kind: "ref", name: "UpdateOrderStatusesResponse" },
    ordersComponents,
  );

export function parseUpdateOrderStatusesResponse(
  status: number,
  input: unknown,
): UpdateOrderStatusesResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        updateOrderStatusesResponse200Schema,
        input,
        "updateOrderStatuses",
      );
    default:
      return unexpectedYmSuccessStatus("updateOrderStatuses", status);
  }
}
