import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { getRelatedProductSkusResponseSchema } from "./contract.js";
import type {
  GetRelatedProductSkusRequest,
  GetRelatedProductSkusResponse,
} from "./types.js";

export const GET_RELATED_PRODUCT_SKUS_OPERATION_ID =
  "ProductAPI_ProductGetRelatedSKU";

export async function executeGetRelatedProductSkus(
  transport: Transport,
  input: GetRelatedProductSkusRequest,
  options: OzonRequestOptions = {},
): Promise<GetRelatedProductSkusResponse> {
  const response = await transport.request({
    operationId: GET_RELATED_PRODUCT_SKUS_OPERATION_ID,
    method: "POST",
    path: "/v1/product/related-sku/get",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    getRelatedProductSkusResponseSchema,
    response.body,
    GET_RELATED_PRODUCT_SKUS_OPERATION_ID,
  );
}
