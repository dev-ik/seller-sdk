import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { getProductPicturesResponseSchema } from "./contract.js";
import type {
  GetProductPicturesRequest,
  GetProductPicturesResponse,
} from "./types.js";

export const GET_PRODUCT_PICTURES_OPERATION_ID =
  "ProductAPI_ProductInfoPicturesV2";

export async function executeGetProductPictures(
  transport: Transport,
  input: GetProductPicturesRequest,
  options: OzonRequestOptions = {},
): Promise<GetProductPicturesResponse> {
  const response = await transport.request({
    operationId: GET_PRODUCT_PICTURES_OPERATION_ID,
    method: "POST",
    path: "/v2/product/pictures/info",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    getProductPicturesResponseSchema,
    response.body,
    GET_PRODUCT_PICTURES_OPERATION_ID,
  );
}
