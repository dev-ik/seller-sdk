import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { getGiveoutInfoV1ResponseSchema } from "./contract.js";
import type {
  GetGiveoutInfoV1Request,
  GetGiveoutInfoV1Response,
} from "./types.js";
export const GET_GIVEOUT_INFO_V1_OPERATION_ID = "ReturnAPI_GiveoutInfo";
export async function executeGetGiveoutInfoV1(
  transport: Transport,
  input: GetGiveoutInfoV1Request,
  options: OzonRequestOptions = {},
): Promise<GetGiveoutInfoV1Response> {
  const response = await transport.request({
    operationId: GET_GIVEOUT_INFO_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/return/giveout/info",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getGiveoutInfoV1ResponseSchema,
    response.body,
    GET_GIVEOUT_INFO_V1_OPERATION_ID,
  );
}
