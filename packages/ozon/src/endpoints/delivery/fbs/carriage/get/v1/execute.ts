import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { getFbsCarriageResponseSchema } from "./contract.js";
import type { GetFbsCarriageRequest, GetFbsCarriageResponse } from "./types.js";
export const GET_FBS_CARRIAGE_OPERATION_ID = "CarriageGet";
export async function executeGetFbsCarriage(
  transport: Transport,
  input: GetFbsCarriageRequest,
  options: OzonRequestOptions = {},
): Promise<GetFbsCarriageResponse> {
  const response = await transport.request({
    operationId: GET_FBS_CARRIAGE_OPERATION_ID,
    method: "POST",
    path: "/v1/carriage/get",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getFbsCarriageResponseSchema,
    response.body,
    GET_FBS_CARRIAGE_OPERATION_ID,
  );
}
