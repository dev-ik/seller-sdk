import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { createFbpLabelsV1ResponseSchema } from "./contract.js";
import type {
  CreateFbpLabelsV1Request,
  CreateFbpLabelsV1Response,
} from "./types.js";

export const CREATE_FBP_LABELS_V1_OPERATION_ID = "FbpAPI_FbpCreateLabel";

export async function executeCreateFbpLabelsV1(
  transport: Transport,
  input: CreateFbpLabelsV1Request,
  options: OzonRequestOptions = {},
): Promise<CreateFbpLabelsV1Response> {
  const response = await transport.request({
    operationId: CREATE_FBP_LABELS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/label/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    createFbpLabelsV1ResponseSchema,
    response.body,
    CREATE_FBP_LABELS_V1_OPERATION_ID,
  );
}
