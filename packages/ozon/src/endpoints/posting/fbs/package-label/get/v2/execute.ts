import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { getFbsPackageLabelBatchV2ResponseSchema } from "./contract.js";
import type {
  GetFbsPackageLabelBatchV2Request,
  GetFbsPackageLabelBatchV2Response,
} from "./types.js";
export const GET_FBS_PACKAGE_LABEL_BATCH_V2_OPERATION_ID =
  "PostingFbsPackageLabelGet";
export async function executeGetFbsPackageLabelBatchV2(
  transport: Transport,
  input: GetFbsPackageLabelBatchV2Request,
  options: OzonRequestOptions = {},
): Promise<GetFbsPackageLabelBatchV2Response> {
  const response = await transport.request({
    operationId: GET_FBS_PACKAGE_LABEL_BATCH_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/posting/fbs/package-label/get",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getFbsPackageLabelBatchV2ResponseSchema,
    response.body,
    GET_FBS_PACKAGE_LABEL_BATCH_V2_OPERATION_ID,
  );
}
