import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { ozonAutoAddProductsPageSchema } from "../../shared/v1/contract.js";
import type {
  ListAutoAddProductCandidatesV1Request,
  ListAutoAddProductCandidatesV1Response,
} from "./types.js";
export const LIST_AUTO_ADD_PRODUCT_CANDIDATES_V1_OPERATION_ID =
  "ActionsAutoAddProductsCandidates";
export async function executeListAutoAddProductCandidatesV1(
  transport: Transport,
  input: ListAutoAddProductCandidatesV1Request,
  options: OzonRequestOptions = {},
): Promise<ListAutoAddProductCandidatesV1Response> {
  const response = await transport.request({
    operationId: LIST_AUTO_ADD_PRODUCT_CANDIDATES_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/actions/auto-add/products/candidates",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    ozonAutoAddProductsPageSchema,
    response.body,
    LIST_AUTO_ADD_PRODUCT_CANDIDATES_V1_OPERATION_ID,
  );
}
