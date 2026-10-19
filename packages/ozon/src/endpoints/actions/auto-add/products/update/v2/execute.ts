import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { updateAutoAddProductsV2ResponseSchema } from "./contract.js";
import type {
  UpdateAutoAddProductsV2Request,
  UpdateAutoAddProductsV2Response,
} from "./types.js";
export const UPDATE_AUTO_ADD_PRODUCTS_V2_OPERATION_ID =
  "ActionsAutoAddProductsUpdateV2";
export async function executeUpdateAutoAddProductsV2(
  transport: Transport,
  input: UpdateAutoAddProductsV2Request,
  options: OzonRequestOptions = {},
): Promise<UpdateAutoAddProductsV2Response> {
  const response = await transport.request({
    operationId: UPDATE_AUTO_ADD_PRODUCTS_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/actions/auto-add/products/update",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    updateAutoAddProductsV2ResponseSchema,
    response.body,
    UPDATE_AUTO_ADD_PRODUCTS_V2_OPERATION_ID,
  );
}
