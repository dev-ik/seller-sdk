import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { getEtgbDeclarationsV1ResponseSchema } from "./contract.js";
import type {
  GetEtgbDeclarationsV1Request,
  GetEtgbDeclarationsV1Response,
} from "./types.js";
export const GET_ETGB_DECLARATIONS_V1_OPERATION_ID = "PostingAPI_GetEtgb";
export async function executeGetEtgbDeclarationsV1(
  transport: Transport,
  input: GetEtgbDeclarationsV1Request,
  options: OzonRequestOptions = {},
): Promise<GetEtgbDeclarationsV1Response> {
  const response = await transport.request({
    operationId: GET_ETGB_DECLARATIONS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/posting/global/etgb",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getEtgbDeclarationsV1ResponseSchema,
    response.body,
    GET_ETGB_DECLARATIONS_V1_OPERATION_ID,
  );
}
