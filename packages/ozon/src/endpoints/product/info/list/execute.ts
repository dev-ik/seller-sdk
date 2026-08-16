import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { getProductInfoListResponseSchema } from "./contract.js";
import type {
  GetProductInfoListRequest,
  GetProductInfoListResponse,
} from "./types.js";

export const GET_PRODUCT_INFO_LIST_OPERATION_ID =
  "ProductAPI_GetProductInfoList";

export async function executeGetProductInfoList(
  transport: Transport,
  input: GetProductInfoListRequest,
  options: OzonRequestOptions = {},
): Promise<GetProductInfoListResponse> {
  const response = await transport.request({
    operationId: GET_PRODUCT_INFO_LIST_OPERATION_ID,
    method: "POST",
    path: "/v3/product/info/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    getProductInfoListResponseSchema,
    response.body,
    GET_PRODUCT_INFO_LIST_OPERATION_ID,
  );
}
