import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { listAutoAddProductCandidatesV2ResponseSchema } from "./contract.js";
import type {
  ListAutoAddProductCandidatesV2Request,
  ListAutoAddProductCandidatesV2Response,
} from "./types.js";
export const LIST_AUTO_ADD_PRODUCT_CANDIDATES_V2_OPERATION_ID =
  "ActionsAutoAddProductsCandidatesV2";
export async function executeListAutoAddProductCandidatesV2(
  transport: Transport,
  input: ListAutoAddProductCandidatesV2Request,
  options: OzonRequestOptions = {},
): Promise<ListAutoAddProductCandidatesV2Response> {
  const response = await transport.request({
    operationId: LIST_AUTO_ADD_PRODUCT_CANDIDATES_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/actions/auto-add/products/candidates",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listAutoAddProductCandidatesV2ResponseSchema,
    response.body,
    LIST_AUTO_ADD_PRODUCT_CANDIDATES_V2_OPERATION_ID,
  );
}
