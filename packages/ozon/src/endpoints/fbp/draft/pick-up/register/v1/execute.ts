import type { Transport } from "#internal-core";
import { fbpDraftRegistrationResponseSchema } from "../../../shared/v1/contract.js";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import type {
  RegisterFbpPickupDraftV1Request,
  RegisterFbpPickupDraftV1Response,
} from "./types.js";

export const REGISTER_FBP_PICKUP_DRAFT_V1_OPERATION_ID =
  "FbpDraftPickUpRegistrate";

export async function executeRegisterFbpPickupDraftV1(
  transport: Transport,
  input: RegisterFbpPickupDraftV1Request,
  options: OzonRequestOptions = {},
): Promise<RegisterFbpPickupDraftV1Response> {
  const response = await transport.request({
    operationId: REGISTER_FBP_PICKUP_DRAFT_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/draft/pick-up/registrate",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    fbpDraftRegistrationResponseSchema,
    response.body,
    REGISTER_FBP_PICKUP_DRAFT_V1_OPERATION_ID,
  );
}
