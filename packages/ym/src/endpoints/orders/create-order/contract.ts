// Generated runtime response contract for this Yandex Market endpoint.
import { ordersComponents } from "../../../contracts/orders.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { CreateOrderResponse } from "./types.js";

const createOrderResponse200Schema = createYmSchema<CreateOrderResponse>(
  { kind: "ref", name: "CreateOrderResponse" },
  ordersComponents,
);

export function parseCreateOrderResponse(
  status: number,
  input: unknown,
): CreateOrderResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        createOrderResponse200Schema,
        input,
        "createOrder",
      );
    default:
      return unexpectedYmSuccessStatus("createOrder", status);
  }
}
