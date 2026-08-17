// Generated runtime response contract for this Wildberries endpoint.
import { generalComponents } from "../../../contracts/general.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1SellerInfoResponse } from "./types.js";

const getV1SellerInfoResponse200Schema =
  createWbSchema<GetV1SellerInfoResponse>(
    {
      kind: "object",
      properties: {
        name: { kind: "string" },
        sid: { kind: "string" },
        tin: { kind: "string" },
        tradeMark: { kind: "string" },
      },
      required: [],
    },
    generalComponents,
  );

export function parseGetV1SellerInfoResponse(
  status: number,
  input: unknown,
): GetV1SellerInfoResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1SellerInfoResponse200Schema,
        input,
        "getV1SellerInfo",
      );
    default:
      return unexpectedWbSuccessStatus("getV1SellerInfo", status);
  }
}
