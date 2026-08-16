import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { fbsBooleanMutationResponseSchema } from "../../../shared/boolean-mutation/contract.js";
import type {
  OpenFbsPostingArbitrationV2Request,
  OpenFbsPostingArbitrationV2Response,
} from "./types.js";
export const OPEN_FBS_POSTING_ARBITRATION_V2_OPERATION_ID =
  "PostingAPI_MoveFbsPostingToArbitration";
export async function executeOpenFbsPostingArbitrationV2(
  transport: Transport,
  input: OpenFbsPostingArbitrationV2Request,
  options: OzonRequestOptions = {},
): Promise<OpenFbsPostingArbitrationV2Response> {
  const response = await transport.request({
    operationId: OPEN_FBS_POSTING_ARBITRATION_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/posting/fbs/arbitration",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    fbsBooleanMutationResponseSchema,
    response.body,
    OPEN_FBS_POSTING_ARBITRATION_V2_OPERATION_ID,
  );
}
