import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { deleteAutoAddProductsV2ResponseSchema } from "./contract.js";
import type {
  DeleteAutoAddProductsV2Request,
  DeleteAutoAddProductsV2Response,
} from "./types.js";
export const DELETE_AUTO_ADD_PRODUCTS_V2_OPERATION_ID =
  "ActionsAutoAddProductsDeleteV2";
export async function executeDeleteAutoAddProductsV2(
  transport: Transport,
  input: DeleteAutoAddProductsV2Request,
  options: OzonRequestOptions = {},
): Promise<DeleteAutoAddProductsV2Response> {
  const response = await transport.request({
    operationId: DELETE_AUTO_ADD_PRODUCTS_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/actions/auto-add/products/delete",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    deleteAutoAddProductsV2ResponseSchema,
    response.body,
    DELETE_AUTO_ADD_PRODUCTS_V2_OPERATION_ID,
  );
}
