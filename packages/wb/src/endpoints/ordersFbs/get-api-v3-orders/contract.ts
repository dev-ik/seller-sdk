// Generated runtime response contract for this Wildberries endpoint.
import { ordersFbsComponents } from "../../../contracts/ordersFbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetApiV3OrdersResponse } from "./types.js";

const getApiV3OrdersResponse200Schema = createWbSchema<GetApiV3OrdersResponse>(
  {
    kind: "object",
    properties: {
      next: { kind: "ref", name: "Next" },
      orders: { kind: "array", items: { kind: "ref", name: "Order" } },
    },
    required: [],
  },
  ordersFbsComponents,
);

export function parseGetApiV3OrdersResponse(
  status: number,
  input: unknown,
): GetApiV3OrdersResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getApiV3OrdersResponse200Schema,
        input,
        "GET /api/v3/orders",
      );
    default:
      return unexpectedWbSuccessStatus("GET /api/v3/orders", status);
  }
}
