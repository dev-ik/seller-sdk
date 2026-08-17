// Generated runtime response contract for this Wildberries endpoint.
import { ordersDbwComponents } from "../../../contracts/ordersDbw.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3DbwOrdersMetaDeleteResponse } from "./types.js";

const postV3DbwOrdersMetaDeleteResponse200Schema =
  createWbSchema<PostV3DbwOrdersMetaDeleteResponse>(
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
                  required: ["code", "detail"],
                },
              },
              isError: { kind: "boolean" },
              orderId: { kind: "number", integer: true },
            },
            required: ["isError", "orderId"],
          },
        },
      },
      required: ["results"],
    },
    ordersDbwComponents,
  );

export function parsePostV3DbwOrdersMetaDeleteResponse(
  status: number,
  input: unknown,
): PostV3DbwOrdersMetaDeleteResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3DbwOrdersMetaDeleteResponse200Schema,
        input,
        "postV3DbwOrdersMetaDelete",
      );
    default:
      return unexpectedWbSuccessStatus("postV3DbwOrdersMetaDelete", status);
  }
}
