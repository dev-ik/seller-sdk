// Generated runtime response contract for this Wildberries endpoint.
import { ordersFbsComponents } from "../../../contracts/ordersFbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostApiV3OrdersStatusHistoryResponse } from "./types.js";

const postApiV3OrdersStatusHistoryResponse200Schema =
  createWbSchema<PostApiV3OrdersStatusHistoryResponse>(
    {
      kind: "object",
      properties: {
        orders: {
          kind: "array",
          items: {
            kind: "object",
            properties: {
              deliveryDate: { kind: "string" },
              statuses: {
                kind: "array",
                items: {
                  kind: "object",
                  properties: {
                    date: { kind: "string", nullable: true },
                    code: { kind: "string" },
                  },
                  required: [],
                },
              },
              orderID: { kind: "number", integer: true },
            },
            required: [],
          },
        },
      },
      required: [],
    },
    ordersFbsComponents,
  );

export function parsePostApiV3OrdersStatusHistoryResponse(
  status: number,
  input: unknown,
): PostApiV3OrdersStatusHistoryResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postApiV3OrdersStatusHistoryResponse200Schema,
        input,
        "POST /api/v3/orders/status/history",
      );
    default:
      return unexpectedWbSuccessStatus(
        "POST /api/v3/orders/status/history",
        status,
      );
  }
}
