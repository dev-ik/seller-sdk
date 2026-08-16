import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { createFbsPackageLabelBatchV1ResponseSchema } from "./contract.js";
import type {
  CreateFbsPackageLabelBatchV1Request,
  CreateFbsPackageLabelBatchV1Response,
} from "./types.js";
export const CREATE_FBS_PACKAGE_LABEL_BATCH_V1_OPERATION_ID =
  "PostingAPI_CreateLabelBatch";
export async function executeCreateFbsPackageLabelBatchV1(
  transport: Transport,
  input: CreateFbsPackageLabelBatchV1Request,
  options: OzonRequestOptions = {},
): Promise<CreateFbsPackageLabelBatchV1Response> {
  const response = await transport.request({
    operationId: CREATE_FBS_PACKAGE_LABEL_BATCH_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/posting/fbs/package-label/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    createFbsPackageLabelBatchV1ResponseSchema,
    response.body,
    CREATE_FBS_PACKAGE_LABEL_BATCH_V1_OPERATION_ID,
  );
}
