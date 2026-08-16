import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { updateAutoAddProductsV1ResponseSchema } from "./contract.js";
import type {
  UpdateAutoAddProductsV1Request,
  UpdateAutoAddProductsV1Response,
} from "./types.js";
export const UPDATE_AUTO_ADD_PRODUCTS_V1_OPERATION_ID =
  "ActionsAutoAddProductsUpdate";
export async function executeUpdateAutoAddProductsV1(
  transport: Transport,
  input: UpdateAutoAddProductsV1Request,
  options: OzonRequestOptions = {},
): Promise<UpdateAutoAddProductsV1Response> {
  const response = await transport.request({
    operationId: UPDATE_AUTO_ADD_PRODUCTS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/actions/auto-add/products/update",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    updateAutoAddProductsV1ResponseSchema,
    response.body,
    UPDATE_AUTO_ADD_PRODUCTS_V1_OPERATION_ID,
  );
}
