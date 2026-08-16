import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { updateProductOfferIdsResponseSchema } from "./contract.js";
import type {
  UpdateProductOfferIdsRequest,
  UpdateProductOfferIdsResponse,
} from "./types.js";

export const UPDATE_PRODUCT_OFFER_IDS_OPERATION_ID =
  "ProductAPI_ProductUpdateOfferID";

export async function executeUpdateProductOfferIds(
  transport: Transport,
  input: UpdateProductOfferIdsRequest,
  options: OzonRequestOptions = {},
): Promise<UpdateProductOfferIdsResponse> {
  const response = await transport.request({
    operationId: UPDATE_PRODUCT_OFFER_IDS_OPERATION_ID,
    method: "POST",
    path: "/v1/product/update/offer-id",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    updateProductOfferIdsResponseSchema,
    response.body,
    UPDATE_PRODUCT_OFFER_IDS_OPERATION_ID,
  );
}
