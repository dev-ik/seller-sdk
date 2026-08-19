// Generated runtime response contract for this Yandex Market endpoint.
import { ordersComponents } from "../../../contracts/orders.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetBusinessOrdersResponse } from "./types.js";

const getBusinessOrdersResponse200Schema =
  createYmSchema<GetBusinessOrdersResponse>(
    { kind: "ref", name: "GetBusinessOrdersResponse" },
    ordersComponents,
  );

export function parseGetBusinessOrdersResponse(
  status: number,
  input: unknown,
): GetBusinessOrdersResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getBusinessOrdersResponse200Schema,
        input,
        "getBusinessOrders",
      );
    default:
      return unexpectedYmSuccessStatus("getBusinessOrders", status);
  }
}
