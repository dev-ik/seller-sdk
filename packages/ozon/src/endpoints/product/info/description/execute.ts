import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { getProductDescriptionResponseSchema } from "./contract.js";
import type {
  GetProductDescriptionRequest,
  GetProductDescriptionResponse,
} from "./types.js";

export const GET_PRODUCT_DESCRIPTION_OPERATION_ID =
  "ProductAPI_GetProductInfoDescription";

export async function executeGetProductDescription(
  transport: Transport,
  input: GetProductDescriptionRequest,
  options: OzonRequestOptions = {},
): Promise<GetProductDescriptionResponse> {
  const response = await transport.request({
    operationId: GET_PRODUCT_DESCRIPTION_OPERATION_ID,
    method: "POST",
    path: "/v1/product/info/description",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    getProductDescriptionResponseSchema,
    response.body,
    GET_PRODUCT_DESCRIPTION_OPERATION_ID,
  );
}
