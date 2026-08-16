import type { Transport } from "#internal-core";
import { fbpDraftCreatedResponseSchema } from "../../../shared/v1/contract.js";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import type {
  CreateFbpPickupDraftV1Request,
  CreateFbpPickupDraftV1Response,
} from "./types.js";

export const CREATE_FBP_PICKUP_DRAFT_V1_OPERATION_ID =
  "FbpAPI_FbpDraftPickupCreate";

export async function executeCreateFbpPickupDraftV1(
  transport: Transport,
  input: CreateFbpPickupDraftV1Request,
  options: OzonRequestOptions = {},
): Promise<CreateFbpPickupDraftV1Response> {
  const response = await transport.request({
    operationId: CREATE_FBP_PICKUP_DRAFT_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/draft/pick-up/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    fbpDraftCreatedResponseSchema,
    response.body,
    CREATE_FBP_PICKUP_DRAFT_V1_OPERATION_ID,
  );
}
