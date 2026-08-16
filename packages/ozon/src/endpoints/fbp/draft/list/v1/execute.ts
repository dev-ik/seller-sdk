import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { listFbpDraftsV1ResponseSchema } from "./contract.js";
import type {
  ListFbpDraftsV1Request,
  ListFbpDraftsV1Response,
} from "./types.js";

export const LIST_FBP_DRAFTS_V1_OPERATION_ID = "FbpAPI_FbpDraftList";

export async function executeListFbpDraftsV1(
  transport: Transport,
  input: ListFbpDraftsV1Request,
  options: OzonRequestOptions = {},
): Promise<ListFbpDraftsV1Response> {
  const response = await transport.request({
    operationId: LIST_FBP_DRAFTS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/draft/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listFbpDraftsV1ResponseSchema,
    response.body,
    LIST_FBP_DRAFTS_V1_OPERATION_ID,
  );
}
