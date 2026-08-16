import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { getFbsPackageLabelBatchV1ResponseSchema } from "./contract.js";
import type {
  GetFbsPackageLabelBatchV1Request,
  GetFbsPackageLabelBatchV1Response,
} from "./types.js";
export const GET_FBS_PACKAGE_LABEL_BATCH_V1_OPERATION_ID =
  "PostingAPI_GetLabelBatch";
export async function executeGetFbsPackageLabelBatchV1(
  transport: Transport,
  input: GetFbsPackageLabelBatchV1Request,
  options: OzonRequestOptions = {},
): Promise<GetFbsPackageLabelBatchV1Response> {
  const response = await transport.request({
    operationId: GET_FBS_PACKAGE_LABEL_BATCH_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/posting/fbs/package-label/get",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getFbsPackageLabelBatchV1ResponseSchema,
    response.body,
    GET_FBS_PACKAGE_LABEL_BATCH_V1_OPERATION_ID,
  );
}
