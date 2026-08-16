import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { fbpDraftRegistrationResponseSchema } from "../../../shared/v1/contract.js";
import type {
  RegisterFbpDirectDraftV1Request,
  RegisterFbpDirectDraftV1Response,
} from "./types.js";
export const REGISTER_FBP_DIRECT_DRAFT_V1_OPERATION_ID =
  "FbpDraftDirectRegistrate";
export async function executeRegisterFbpDirectDraftV1(
  transport: Transport,
  input: RegisterFbpDirectDraftV1Request,
  options: OzonRequestOptions = {},
): Promise<RegisterFbpDirectDraftV1Response> {
  const response = await transport.request({
    operationId: REGISTER_FBP_DIRECT_DRAFT_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/draft/direct/registrate",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    fbpDraftRegistrationResponseSchema,
    response.body,
    REGISTER_FBP_DIRECT_DRAFT_V1_OPERATION_ID,
  );
}
