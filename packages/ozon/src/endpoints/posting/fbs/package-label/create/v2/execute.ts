import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { createFbsPackageLabelBatchV2ResponseSchema } from "./contract.js";
import type {
  CreateFbsPackageLabelBatchV2Request,
  CreateFbsPackageLabelBatchV2Response,
} from "./types.js";
export const CREATE_FBS_PACKAGE_LABEL_BATCH_V2_OPERATION_ID =
  "PostingAPI_CreateLabelBatchV2";
export async function executeCreateFbsPackageLabelBatchV2(
  transport: Transport,
  input: CreateFbsPackageLabelBatchV2Request,
  options: OzonRequestOptions = {},
): Promise<CreateFbsPackageLabelBatchV2Response> {
  const response = await transport.request({
    operationId: CREATE_FBS_PACKAGE_LABEL_BATCH_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/posting/fbs/package-label/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    createFbsPackageLabelBatchV2ResponseSchema,
    response.body,
    CREATE_FBS_PACKAGE_LABEL_BATCH_V2_OPERATION_ID,
  );
}
