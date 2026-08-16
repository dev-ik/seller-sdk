import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { fbpDraftRegistrationResponseSchema } from "../../../shared/v1/contract.js";
import type {
  RegisterFbpDropOffDraftV1Request,
  RegisterFbpDropOffDraftV1Response,
} from "./types.js";
export const REGISTER_FBP_DROP_OFF_DRAFT_V1_OPERATION_ID =
  "FbpDraftDropOffRegistrate";
export async function executeRegisterFbpDropOffDraftV1(
  transport: Transport,
  input: RegisterFbpDropOffDraftV1Request,
  options: OzonRequestOptions = {},
): Promise<RegisterFbpDropOffDraftV1Response> {
  const response = await transport.request({
    operationId: REGISTER_FBP_DROP_OFF_DRAFT_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/draft/drop-off/registrate",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    fbpDraftRegistrationResponseSchema,
    response.body,
    REGISTER_FBP_DROP_OFF_DRAFT_V1_OPERATION_ID,
  );
}
