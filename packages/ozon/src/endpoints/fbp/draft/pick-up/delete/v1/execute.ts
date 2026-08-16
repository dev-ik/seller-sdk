import type { Transport } from "#internal-core";
import { fbpDraftDeleteResponseSchema } from "../../../shared/v1/contract.js";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import type {
  DeleteFbpPickupDraftV1Request,
  DeleteFbpPickupDraftV1Response,
} from "./types.js";

export const DELETE_FBP_PICKUP_DRAFT_V1_OPERATION_ID =
  "FbpAPI_FbpDraftPickUpDelete";

export async function executeDeleteFbpPickupDraftV1(
  transport: Transport,
  input: DeleteFbpPickupDraftV1Request,
  options: OzonRequestOptions = {},
): Promise<DeleteFbpPickupDraftV1Response> {
  const response = await transport.request({
    operationId: DELETE_FBP_PICKUP_DRAFT_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/draft/pick-up/delete",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    fbpDraftDeleteResponseSchema,
    response.body,
    DELETE_FBP_PICKUP_DRAFT_V1_OPERATION_ID,
  );
}
