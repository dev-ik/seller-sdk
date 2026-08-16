import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { getProductVisibilityInfoV1ResponseSchema } from "./contract.js";
import type {
  GetProductVisibilityInfoV1Request,
  GetProductVisibilityInfoV1Response,
} from "./types.js";

export const GET_PRODUCT_VISIBILITY_INFO_V1_OPERATION_ID =
  "ProductVisibilityInfo";

export async function executeGetProductVisibilityInfoV1(
  transport: Transport,
  input: GetProductVisibilityInfoV1Request = {},
  options: OzonRequestOptions = {},
): Promise<GetProductVisibilityInfoV1Response> {
  const response = await transport.request({
    operationId: GET_PRODUCT_VISIBILITY_INFO_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/product/visibility/info",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getProductVisibilityInfoV1ResponseSchema,
    response.body,
    GET_PRODUCT_VISIBILITY_INFO_V1_OPERATION_ID,
  );
}
