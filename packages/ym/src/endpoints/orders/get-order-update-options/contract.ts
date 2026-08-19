// Generated runtime response contract for this Yandex Market endpoint.
import { ordersComponents } from "../../../contracts/orders.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetOrderUpdateOptionsResponse } from "./types.js";

const getOrderUpdateOptionsResponse200Schema =
  createYmSchema<GetOrderUpdateOptionsResponse>(
    { kind: "ref", name: "GetOrderUpdateOptionsResponse" },
    ordersComponents,
  );

export function parseGetOrderUpdateOptionsResponse(
  status: number,
  input: unknown,
): GetOrderUpdateOptionsResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getOrderUpdateOptionsResponse200Schema,
        input,
        "getOrderUpdateOptions",
      );
    default:
      return unexpectedYmSuccessStatus("getOrderUpdateOptions", status);
  }
}
