// Generated runtime response contract for this Wildberries endpoint.
import { promotionComponents } from "../../../contracts/promotion.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1PaymentsResponse } from "./types.js";

const getV1PaymentsResponse200Schema = createWbSchema<GetV1PaymentsResponse>(
  {
    kind: "array",
    items: {
      kind: "object",
      properties: {
        id: { kind: "number", integer: true },
        date: { kind: "string" },
        sum: { kind: "number", integer: true },
        type: { kind: "number", integer: true },
        statusId: { kind: "number", integer: true },
        cardStatus: { kind: "string" },
        currency: { kind: "string" },
      },
      required: [],
    },
  },
  promotionComponents,
);

export function parseGetV1PaymentsResponse(
  status: number,
  input: unknown,
): GetV1PaymentsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1PaymentsResponse200Schema,
        input,
        "getV1Payments",
      );
    case 204:
      return undefined;
    default:
      return unexpectedWbSuccessStatus("getV1Payments", status);
  }
}
