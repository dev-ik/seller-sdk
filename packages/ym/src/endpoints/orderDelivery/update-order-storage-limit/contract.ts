// Generated runtime response contract for this Yandex Market endpoint.
import { orderDeliveryComponents } from "../../../contracts/orderDelivery.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { UpdateOrderStorageLimitResponse } from "./types.js";

const updateOrderStorageLimitResponse200Schema =
  createYmSchema<UpdateOrderStorageLimitResponse>(
    { kind: "ref", name: "EmptyApiResponse" },
    orderDeliveryComponents,
  );

export function parseUpdateOrderStorageLimitResponse(
  status: number,
  input: unknown,
): UpdateOrderStorageLimitResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        updateOrderStorageLimitResponse200Schema,
        input,
        "updateOrderStorageLimit",
      );
    default:
      return unexpectedYmSuccessStatus("updateOrderStorageLimit", status);
  }
}
