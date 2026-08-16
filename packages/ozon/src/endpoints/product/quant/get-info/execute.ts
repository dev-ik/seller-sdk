import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { getQuantProductsInfoResponseSchema } from "./contract.js";
import type {
  GetQuantProductsInfoRequest,
  GetQuantProductsInfoResponse,
} from "./types.js";

export const GET_QUANT_PRODUCTS_INFO_OPERATION_ID = "QuantGetInfo";

/** @internal */
export async function executeGetQuantProductsInfo(
  transport: Transport,
  input: GetQuantProductsInfoRequest,
  options: OzonRequestOptions = {},
): Promise<GetQuantProductsInfoResponse> {
  const response = await transport.request({
    operationId: GET_QUANT_PRODUCTS_INFO_OPERATION_ID,
    method: "POST",
    path: "/v1/product/quant/info",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    getQuantProductsInfoResponseSchema,
    response.body,
    GET_QUANT_PRODUCTS_INFO_OPERATION_ID,
  );
}
