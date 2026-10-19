import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { createFbsPackageLabelBatchV3ResponseSchema } from "./contract.js";
import type {
  CreateFbsPackageLabelBatchV3Request,
  CreateFbsPackageLabelBatchV3Response,
} from "./types.js";
export const CREATE_FBS_PACKAGE_LABEL_BATCH_V3_OPERATION_ID =
  "PostingFbsPackageLabelCreate";
export async function executeCreateFbsPackageLabelBatchV3(
  transport: Transport,
  input: CreateFbsPackageLabelBatchV3Request,
  options: OzonRequestOptions = {},
): Promise<CreateFbsPackageLabelBatchV3Response> {
  const response = await transport.request({
    operationId: CREATE_FBS_PACKAGE_LABEL_BATCH_V3_OPERATION_ID,
    method: "POST",
    path: "/v3/posting/fbs/package-label/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    createFbsPackageLabelBatchV3ResponseSchema,
    response.body,
    CREATE_FBS_PACKAGE_LABEL_BATCH_V3_OPERATION_ID,
  );
}
