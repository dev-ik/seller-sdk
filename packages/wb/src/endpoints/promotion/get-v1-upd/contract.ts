// Generated runtime response contract for this Wildberries endpoint.
import { promotionComponents } from "../../../contracts/promotion.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1UpdResponse } from "./types.js";

const getV1UpdResponse200Schema = createWbSchema<GetV1UpdResponse>(
  {
    kind: "array",
    items: {
      kind: "object",
      properties: {
        updNum: { kind: "number", integer: true },
        updTime: { kind: "string", nullable: true },
        updSum: { kind: "number", integer: true },
        advertId: { kind: "number", integer: true },
        campName: { kind: "string" },
        advertType: { kind: "number", integer: true },
        paymentType: { kind: "string" },
        advertStatus: { kind: "number", integer: true },
      },
      required: [],
    },
  },
  promotionComponents,
);

export function parseGetV1UpdResponse(
  status: number,
  input: unknown,
): GetV1UpdResponse {
  switch (status) {
    case 200:
      return parseWbResponse(getV1UpdResponse200Schema, input, "getV1Upd");
    default:
      return unexpectedWbSuccessStatus("getV1Upd", status);
  }
}
