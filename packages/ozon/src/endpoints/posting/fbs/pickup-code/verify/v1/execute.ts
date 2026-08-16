import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { verifyFbsPickupCodeV1ResponseSchema } from "./contract.js";
import type {
  VerifyFbsPickupCodeV1Request,
  VerifyFbsPickupCodeV1Response,
} from "./types.js";
export const VERIFY_FBS_PICKUP_CODE_V1_OPERATION_ID =
  "PostingAPI_PostingFBSPickupCodeVerify";
export async function executeVerifyFbsPickupCodeV1(
  transport: Transport,
  input: VerifyFbsPickupCodeV1Request,
  options: OzonRequestOptions = {},
): Promise<VerifyFbsPickupCodeV1Response> {
  const response = await transport.request({
    operationId: VERIFY_FBS_PICKUP_CODE_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/posting/fbs/pick-up-code/verify",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    verifyFbsPickupCodeV1ResponseSchema,
    response.body,
    VERIFY_FBS_PICKUP_CODE_V1_OPERATION_ID,
  );
}
