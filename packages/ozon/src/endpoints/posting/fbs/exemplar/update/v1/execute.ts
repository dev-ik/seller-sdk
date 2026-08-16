import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { updateFbsPostingProductExemplarsResponseSchema } from "./contract.js";
import type { UpdateFbsPostingProductExemplarsRequest } from "./types.js";

export const UPDATE_FBS_POSTING_PRODUCT_EXEMPLARS_OPERATION_ID =
  "PostingAPI_FbsPostingProductExemplarUpdate";

export async function executeUpdateFbsPostingProductExemplars(
  transport: Transport,
  input: UpdateFbsPostingProductExemplarsRequest,
  options: OzonRequestOptions = {},
): Promise<void> {
  const response = await transport.request({
    operationId: UPDATE_FBS_POSTING_PRODUCT_EXEMPLARS_OPERATION_ID,
    method: "POST",
    path: "/v1/fbs/posting/product/exemplar/update",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  parseOzonResponse(
    updateFbsPostingProductExemplarsResponseSchema,
    response.body,
    UPDATE_FBS_POSTING_PRODUCT_EXEMPLARS_OPERATION_ID,
  );
}
