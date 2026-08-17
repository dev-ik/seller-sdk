// Generated runtime response contract for this Wildberries endpoint.
import { promotionComponents } from "../../../contracts/promotion.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1BalanceResponse } from "./types.js";

const getV1BalanceResponse200Schema = createWbSchema<GetV1BalanceResponse>(
  {
    kind: "object",
    properties: {
      balance: { kind: "number", integer: true },
      net: { kind: "number", integer: true },
      currency: { kind: "string" },
      bonus: { kind: "number", integer: true },
      cashbacks: {
        kind: "array",
        items: {
          kind: "object",
          properties: {
            sum: { kind: "number", integer: true },
            percent: { kind: "number", integer: true },
            expiration_date: { kind: "string" },
          },
          required: [],
        },
      },
    },
    required: [],
  },
  promotionComponents,
);

export function parseGetV1BalanceResponse(
  status: number,
  input: unknown,
): GetV1BalanceResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1BalanceResponse200Schema,
        input,
        "getV1Balance",
      );
    default:
      return unexpectedWbSuccessStatus("getV1Balance", status);
  }
}
