import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { setFbsCarriagePostingsResponseSchema } from "./contract.js";
import type {
  SetFbsCarriagePostingsRequest,
  SetFbsCarriagePostingsResponse,
} from "./types.js";

export const SET_FBS_CARRIAGE_POSTINGS_OPERATION_ID = "CarriageAPI_SetPostings";

export async function executeSetFbsCarriagePostings(
  transport: Transport,
  input: SetFbsCarriagePostingsRequest,
  options: OzonRequestOptions = {},
): Promise<SetFbsCarriagePostingsResponse> {
  const response = await transport.request({
    operationId: SET_FBS_CARRIAGE_POSTINGS_OPERATION_ID,
    method: "POST",
    path: "/v1/carriage/set-postings",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    setFbsCarriagePostingsResponseSchema,
    response.body,
    SET_FBS_CARRIAGE_POSTINGS_OPERATION_ID,
  );
}
