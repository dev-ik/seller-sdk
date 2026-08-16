import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { fbpDraftDeleteResponseSchema } from "../../../shared/v1/contract.js";
import type {
  DeleteFbpDirectDraftV1Request,
  DeleteFbpDirectDraftV1Response,
} from "./types.js";
export const DELETE_FBP_DIRECT_DRAFT_V1_OPERATION_ID = "FbpDraftDirectDelete";
export async function executeDeleteFbpDirectDraftV1(
  transport: Transport,
  input: DeleteFbpDirectDraftV1Request,
  options: OzonRequestOptions = {},
): Promise<DeleteFbpDirectDraftV1Response> {
  const response = await transport.request({
    operationId: DELETE_FBP_DIRECT_DRAFT_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/draft/direct/delete",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    fbpDraftDeleteResponseSchema,
    response.body,
    DELETE_FBP_DIRECT_DRAFT_V1_OPERATION_ID,
  );
}
