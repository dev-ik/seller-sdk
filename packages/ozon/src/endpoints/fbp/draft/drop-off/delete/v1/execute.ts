import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { fbpDraftDeleteResponseSchema } from "../../../shared/v1/contract.js";
import type {
  DeleteFbpDropOffDraftV1Request,
  DeleteFbpDropOffDraftV1Response,
} from "./types.js";
export const DELETE_FBP_DROP_OFF_DRAFT_V1_OPERATION_ID =
  "FbpDraftDropOffDelete";
export async function executeDeleteFbpDropOffDraftV1(
  transport: Transport,
  input: DeleteFbpDropOffDraftV1Request,
  options: OzonRequestOptions = {},
): Promise<DeleteFbpDropOffDraftV1Response> {
  const response = await transport.request({
    operationId: DELETE_FBP_DROP_OFF_DRAFT_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/draft/drop-off/delete",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    fbpDraftDeleteResponseSchema,
    response.body,
    DELETE_FBP_DROP_OFF_DRAFT_V1_OPERATION_ID,
  );
}
