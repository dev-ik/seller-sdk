// Generated runtime response contract for this Wildberries endpoint.
import { dbsComponents } from "../../../contracts/dbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3DbsOrdersStatusReceiveResponse } from "./types.js";

const postV3DbsOrdersStatusReceiveResponse200Schema =
  createWbSchema<PostV3DbsOrdersStatusReceiveResponse>(
    {
      kind: "object",
      properties: {
        requestId: { kind: "string" },
        results: {
          kind: "array",
          items: {
            kind: "object",
            properties: {
              errors: {
                kind: "array",
                items: {
                  kind: "object",
                  properties: {
                    code: { kind: "number", integer: true },
                    detail: { kind: "string" },
                  },
                  required: [],
                },
              },
              isError: { kind: "boolean" },
              orderId: { kind: "number", integer: true },
            },
            required: [],
          },
        },
      },
      required: [],
    },
    dbsComponents,
  );

export function parsePostV3DbsOrdersStatusReceiveResponse(
  status: number,
  input: unknown,
): PostV3DbsOrdersStatusReceiveResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3DbsOrdersStatusReceiveResponse200Schema,
        input,
        "postV3DbsOrdersStatusReceive",
      );
    default:
      return unexpectedWbSuccessStatus("postV3DbsOrdersStatusReceive", status);
  }
}
