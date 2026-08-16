import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { setFbsPostingMultiboxQuantityV3ResponseSchema } from "./contract.js";
import type {
  SetFbsPostingMultiboxQuantityV3Request,
  SetFbsPostingMultiboxQuantityV3Response,
} from "./types.js";
export const SET_FBS_POSTING_MULTIBOX_QUANTITY_V3_OPERATION_ID =
  "PostingAPI_PostingMultiBoxQtySetV3";
export async function executeSetFbsPostingMultiboxQuantityV3(
  transport: Transport,
  input: SetFbsPostingMultiboxQuantityV3Request,
  options: OzonRequestOptions = {},
): Promise<SetFbsPostingMultiboxQuantityV3Response> {
  const response = await transport.request({
    operationId: SET_FBS_POSTING_MULTIBOX_QUANTITY_V3_OPERATION_ID,
    method: "POST",
    path: "/v3/posting/multiboxqty/set",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    setFbsPostingMultiboxQuantityV3ResponseSchema,
    response.body,
    SET_FBS_POSTING_MULTIBOX_QUANTITY_V3_OPERATION_ID,
  );
}
