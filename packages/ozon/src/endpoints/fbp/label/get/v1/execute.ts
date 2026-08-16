import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { getFbpLabelsV1ResponseSchema } from "./contract.js";
import type { GetFbpLabelsV1Request, GetFbpLabelsV1Response } from "./types.js";

export const GET_FBP_LABELS_V1_OPERATION_ID = "FbpAPI_FbpGetLabel";

export async function executeGetFbpLabelsV1(
  transport: Transport,
  input: GetFbpLabelsV1Request,
  options: OzonRequestOptions = {},
): Promise<GetFbpLabelsV1Response> {
  const response = await transport.request({
    operationId: GET_FBP_LABELS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/label/get",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getFbpLabelsV1ResponseSchema,
    response.body,
    GET_FBP_LABELS_V1_OPERATION_ID,
  );
}
