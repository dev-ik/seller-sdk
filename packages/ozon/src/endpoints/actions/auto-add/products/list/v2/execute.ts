import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { listAutoAddProductsV2ResponseSchema } from "./contract.js";
import type {
  ListAutoAddProductsV2Request,
  ListAutoAddProductsV2Response,
} from "./types.js";
export const LIST_AUTO_ADD_PRODUCTS_V2_OPERATION_ID =
  "ActionsAutoAddProductsListV2";
export async function executeListAutoAddProductsV2(
  transport: Transport,
  input: ListAutoAddProductsV2Request,
  options: OzonRequestOptions = {},
): Promise<ListAutoAddProductsV2Response> {
  const response = await transport.request({
    operationId: LIST_AUTO_ADD_PRODUCTS_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/actions/auto-add/products/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listAutoAddProductsV2ResponseSchema,
    response.body,
    LIST_AUTO_ADD_PRODUCTS_V2_OPERATION_ID,
  );
}
