// Generated runtime response contract for this Yandex Market endpoint.
import { unexpectedYmSuccessStatus } from "../../../parse-response.js";
import type { UpdateOrderItemsResponse } from "./types.js";

export function parseUpdateOrderItemsResponse(
  status: number,
  input: unknown,
): UpdateOrderItemsResponse {
  void input;
  switch (status) {
    case 200:
      return undefined;
    default:
      return unexpectedYmSuccessStatus("updateOrderItems", status);
  }
}
