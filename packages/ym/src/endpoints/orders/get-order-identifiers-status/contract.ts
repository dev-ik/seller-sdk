// Generated runtime response contract for this Yandex Market endpoint.
import { ordersComponents } from "../../../contracts/orders.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetOrderIdentifiersStatusResponse } from "./types.js";

const getOrderIdentifiersStatusResponse200Schema =
  createYmSchema<GetOrderIdentifiersStatusResponse>(
    { kind: "ref", name: "GetOrderIdentifiersStatusResponse" },
    ordersComponents,
  );

export function parseGetOrderIdentifiersStatusResponse(
  status: number,
  input: unknown,
): GetOrderIdentifiersStatusResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getOrderIdentifiersStatusResponse200Schema,
        input,
        "getOrderIdentifiersStatus",
      );
    default:
      return unexpectedYmSuccessStatus("getOrderIdentifiersStatus", status);
  }
}
