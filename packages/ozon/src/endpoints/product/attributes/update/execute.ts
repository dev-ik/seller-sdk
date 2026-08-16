import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { updateProductAttributesResponseSchema } from "./contract.js";
import type {
  UpdateProductAttributesRequest,
  UpdateProductAttributesResponse,
} from "./types.js";

export const UPDATE_PRODUCT_ATTRIBUTES_OPERATION_ID =
  "ProductAPI_ProductUpdateAttributes";

export async function executeUpdateProductAttributes(
  transport: Transport,
  input: UpdateProductAttributesRequest,
  options: OzonRequestOptions = {},
): Promise<UpdateProductAttributesResponse> {
  const response = await transport.request({
    operationId: UPDATE_PRODUCT_ATTRIBUTES_OPERATION_ID,
    method: "POST",
    path: "/v1/product/attributes/update",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    updateProductAttributesResponseSchema,
    response.body,
    UPDATE_PRODUCT_ATTRIBUTES_OPERATION_ID,
  );
}
