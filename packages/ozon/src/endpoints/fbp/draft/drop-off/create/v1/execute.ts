import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { fbpDraftCreatedResponseSchema } from "../../../shared/v1/contract.js";
import type {
  CreateFbpDropOffDraftV1Request,
  CreateFbpDropOffDraftV1Response,
} from "./types.js";
export const CREATE_FBP_DROP_OFF_DRAFT_V1_OPERATION_ID =
  "FbpDraftDropOffCreate";
export async function executeCreateFbpDropOffDraftV1(
  transport: Transport,
  input: CreateFbpDropOffDraftV1Request,
  options: OzonRequestOptions = {},
): Promise<CreateFbpDropOffDraftV1Response> {
  const response = await transport.request({
    operationId: CREATE_FBP_DROP_OFF_DRAFT_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/draft/drop-off/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    fbpDraftCreatedResponseSchema,
    response.body,
    CREATE_FBP_DROP_OFF_DRAFT_V1_OPERATION_ID,
  );
}
