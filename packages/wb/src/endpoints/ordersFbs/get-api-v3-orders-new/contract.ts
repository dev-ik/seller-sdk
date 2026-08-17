// Generated runtime response contract for this Wildberries endpoint.
import { ordersFbsComponents } from "../../../contracts/ordersFbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetApiV3OrdersNewResponse } from "./types.js";

const getApiV3OrdersNewResponse200Schema =
  createWbSchema<GetApiV3OrdersNewResponse>(
    {
      kind: "object",
      properties: {
        orders: { kind: "array", items: { kind: "ref", name: "OrderNew" } },
      },
      required: [],
    },
    ordersFbsComponents,
  );

export function parseGetApiV3OrdersNewResponse(
  status: number,
  input: unknown,
): GetApiV3OrdersNewResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getApiV3OrdersNewResponse200Schema,
        input,
        "GET /api/v3/orders/new",
      );
    default:
      return unexpectedWbSuccessStatus("GET /api/v3/orders/new", status);
  }
}
