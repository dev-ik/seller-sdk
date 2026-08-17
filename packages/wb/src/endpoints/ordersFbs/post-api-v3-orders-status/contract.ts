// Generated runtime response contract for this Wildberries endpoint.
import { ordersFbsComponents } from "../../../contracts/ordersFbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostApiV3OrdersStatusResponse } from "./types.js";

const postApiV3OrdersStatusResponse200Schema =
  createWbSchema<PostApiV3OrdersStatusResponse>(
    {
      kind: "object",
      properties: {
        orders: {
          kind: "array",
          items: {
            kind: "object",
            properties: {
              id: { kind: "number", integer: true },
              isCancellable: { kind: "boolean" },
              supplierStatus: {
                kind: "string",
                enum: ["new", "confirm", "complete", "cancel"],
              },
              wbStatus: {
                kind: "string",
                enum: [
                  "waiting",
                  "sorted",
                  "sold",
                  "canceled",
                  "canceled_by_client",
                  "declined_by_client",
                  "defect",
                  "ready_for_pickup",
                  "postponed_delivery",
                  "accepted_by_carrier",
                  "sent_to_carrier",
                ],
              },
            },
            required: [],
          },
        },
      },
      required: [],
    },
    ordersFbsComponents,
  );

export function parsePostApiV3OrdersStatusResponse(
  status: number,
  input: unknown,
): PostApiV3OrdersStatusResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postApiV3OrdersStatusResponse200Schema,
        input,
        "POST /api/v3/orders/status",
      );
    default:
      return unexpectedWbSuccessStatus("POST /api/v3/orders/status", status);
  }
}
