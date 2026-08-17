// Generated runtime response contract for this Wildberries endpoint.
import { generalComponents } from "../../../contracts/general.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV2NewsResponse } from "./types.js";

const getV2NewsResponse200Schema = createWbSchema<GetV2NewsResponse>(
  {
    kind: "object",
    properties: {
      data: {
        kind: "array",
        items: {
          kind: "object",
          properties: {
            content: { kind: "string" },
            date: { kind: "string" },
            header: { kind: "string" },
            id: { kind: "number", integer: true },
            types: {
              kind: "array",
              items: {
                kind: "object",
                properties: {
                  id: { kind: "number", integer: true },
                  name: { kind: "string" },
                },
                required: [],
              },
            },
          },
          required: [],
        },
      },
    },
    required: [],
  },
  generalComponents,
);

export function parseGetV2NewsResponse(
  status: number,
  input: unknown,
): GetV2NewsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(getV2NewsResponse200Schema, input, "getV2News");
    default:
      return unexpectedWbSuccessStatus("getV2News", status);
  }
}
