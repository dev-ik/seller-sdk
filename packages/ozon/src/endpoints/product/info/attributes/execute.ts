import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { getProductAttributesResponseSchema } from "./contract.js";
import type {
  GetProductAttributesRequest,
  GetProductAttributesResponse,
} from "./types.js";

export const GET_PRODUCT_ATTRIBUTES_OPERATION_ID =
  "ProductAPI_GetProductAttributesV4";

export async function executeGetProductAttributes(
  transport: Transport,
  input: GetProductAttributesRequest,
  options: OzonRequestOptions = {},
): Promise<GetProductAttributesResponse> {
  const response = await transport.request({
    operationId: GET_PRODUCT_ATTRIBUTES_OPERATION_ID,
    method: "POST",
    path: "/v4/product/info/attributes",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    getProductAttributesResponseSchema,
    response.body,
    GET_PRODUCT_ATTRIBUTES_OPERATION_ID,
  );
}
