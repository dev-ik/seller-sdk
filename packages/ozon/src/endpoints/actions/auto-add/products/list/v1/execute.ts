import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { ozonAutoAddProductsPageSchema } from "../../shared/v1/contract.js";
import type {
  ListAutoAddProductsV1Request,
  ListAutoAddProductsV1Response,
} from "./types.js";
export const LIST_AUTO_ADD_PRODUCTS_V1_OPERATION_ID =
  "ActionsAutoAddProductsList";
export async function executeListAutoAddProductsV1(
  transport: Transport,
  input: ListAutoAddProductsV1Request,
  options: OzonRequestOptions = {},
): Promise<ListAutoAddProductsV1Response> {
  const response = await transport.request({
    operationId: LIST_AUTO_ADD_PRODUCTS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/actions/auto-add/products/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    ozonAutoAddProductsPageSchema,
    response.body,
    LIST_AUTO_ADD_PRODUCTS_V1_OPERATION_ID,
  );
}
