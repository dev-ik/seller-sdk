// Generated runtime response contract for this Wildberries endpoint.
import { promotionComponents } from "../../../contracts/promotion.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1CountResponse } from "./types.js";

const getV1CountResponse200Schema = createWbSchema<GetV1CountResponse>(
  {
    kind: "object",
    properties: {
      all: { kind: "number", integer: true },
      adverts: {
        kind: "object",
        properties: {
          type: { kind: "number", integer: true },
          status: { kind: "number", integer: true },
          count: { kind: "number", integer: true },
        },
        required: [],
        nullable: true,
      },
    },
    required: [],
  },
  promotionComponents,
);

export function parseGetV1CountResponse(
  status: number,
  input: unknown,
): GetV1CountResponse {
  switch (status) {
    case 200:
      return parseWbResponse(getV1CountResponse200Schema, input, "getV1Count");
    default:
      return unexpectedWbSuccessStatus("getV1Count", status);
  }
}
