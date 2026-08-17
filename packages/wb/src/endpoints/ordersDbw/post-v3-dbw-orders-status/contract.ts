// Generated runtime response contract for this Wildberries endpoint.
import { ordersDbwComponents } from "../../../contracts/ordersDbw.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3DbwOrdersStatusResponse } from "./types.js";

const postV3DbwOrdersStatusResponse200Schema =
  createWbSchema<PostV3DbwOrdersStatusResponse>(
    {
      kind: "object",
      properties: {
        orders: {
          kind: "array",
          items: {
            kind: "object",
            properties: {
              id: { kind: "number", integer: true },
              supplierStatus: { kind: "string" },
              wbStatus: { kind: "string" },
            },
            required: [],
          },
        },
      },
      required: [],
    },
    ordersDbwComponents,
  );

export function parsePostV3DbwOrdersStatusResponse(
  status: number,
  input: unknown,
): PostV3DbwOrdersStatusResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3DbwOrdersStatusResponse200Schema,
        input,
        "postV3DbwOrdersStatus",
      );
    default:
      return unexpectedWbSuccessStatus("postV3DbwOrdersStatus", status);
  }
}
