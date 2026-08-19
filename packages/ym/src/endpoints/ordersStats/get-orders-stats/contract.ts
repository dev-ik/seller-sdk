// Generated runtime response contract for this Yandex Market endpoint.
import { ordersStatsComponents } from "../../../contracts/ordersStats.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetOrdersStatsResponse } from "./types.js";

const getOrdersStatsResponse200Schema = createYmSchema<GetOrdersStatsResponse>(
  { kind: "ref", name: "GetOrdersStatsResponse" },
  ordersStatsComponents,
);

export function parseGetOrdersStatsResponse(
  status: number,
  input: unknown,
): GetOrdersStatsResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getOrdersStatsResponse200Schema,
        input,
        "getOrdersStats",
      );
    default:
      return unexpectedYmSuccessStatus("getOrdersStats", status);
  }
}
