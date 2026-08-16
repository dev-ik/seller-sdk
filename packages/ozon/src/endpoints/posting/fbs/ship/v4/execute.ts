import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { shipFbsPostingV4ResponseSchema } from "./contract.js";
import type {
  ShipFbsPostingV4Request,
  ShipFbsPostingV4Response,
} from "./types.js";
export const SHIP_FBS_POSTING_V4_OPERATION_ID = "PostingAPI_ShipFbsPostingV4";
export async function executeShipFbsPostingV4(
  transport: Transport,
  input: ShipFbsPostingV4Request,
  options: OzonRequestOptions = {},
): Promise<ShipFbsPostingV4Response> {
  const response = await transport.request({
    operationId: SHIP_FBS_POSTING_V4_OPERATION_ID,
    method: "POST",
    path: "/v4/posting/fbs/ship",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    shipFbsPostingV4ResponseSchema,
    response.body,
    SHIP_FBS_POSTING_V4_OPERATION_ID,
  );
}
