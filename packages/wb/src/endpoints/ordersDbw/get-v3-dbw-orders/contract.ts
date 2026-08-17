// Generated runtime response contract for this Wildberries endpoint.
import { ordersDbwComponents } from "../../../contracts/ordersDbw.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV3DbwOrdersResponse } from "./types.js";

const getV3DbwOrdersResponse200Schema = createWbSchema<GetV3DbwOrdersResponse>(
  {
    kind: "object",
    properties: {
      next: { kind: "ref", name: "Next" },
      orders: { kind: "array", items: { kind: "ref", name: "Order" } },
    },
    required: [],
  },
  ordersDbwComponents,
);

export function parseGetV3DbwOrdersResponse(
  status: number,
  input: unknown,
): GetV3DbwOrdersResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV3DbwOrdersResponse200Schema,
        input,
        "getV3DbwOrders",
      );
    default:
      return unexpectedWbSuccessStatus("getV3DbwOrders", status);
  }
}
