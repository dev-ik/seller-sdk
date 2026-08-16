import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { deleteAutoAddProductsV1ResponseSchema } from "./contract.js";
import type {
  DeleteAutoAddProductsV1Request,
  DeleteAutoAddProductsV1Response,
} from "./types.js";
export const DELETE_AUTO_ADD_PRODUCTS_V1_OPERATION_ID =
  "ActionsAutoAddProductsDelete";
export async function executeDeleteAutoAddProductsV1(
  transport: Transport,
  input: DeleteAutoAddProductsV1Request,
  options: OzonRequestOptions = {},
): Promise<DeleteAutoAddProductsV1Response> {
  const response = await transport.request({
    operationId: DELETE_AUTO_ADD_PRODUCTS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/actions/auto-add/products/delete",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    deleteAutoAddProductsV1ResponseSchema,
    response.body,
    DELETE_AUTO_ADD_PRODUCTS_V1_OPERATION_ID,
  );
}
