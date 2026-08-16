import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { getFbpAcceptanceActV1ResponseSchema } from "./contract.js";
import type {
  GetFbpAcceptanceActV1Request,
  GetFbpAcceptanceActV1Response,
} from "./types.js";

export const GET_FBP_ACCEPTANCE_ACT_V1_OPERATION_ID = "FbpAPI_FbpCheckActState";

export async function executeGetFbpAcceptanceActV1(
  transport: Transport,
  input: GetFbpAcceptanceActV1Request,
  options: OzonRequestOptions = {},
): Promise<GetFbpAcceptanceActV1Response> {
  const response = await transport.request({
    operationId: GET_FBP_ACCEPTANCE_ACT_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/act-from/get",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getFbpAcceptanceActV1ResponseSchema,
    response.body,
    GET_FBP_ACCEPTANCE_ACT_V1_OPERATION_ID,
  );
}
