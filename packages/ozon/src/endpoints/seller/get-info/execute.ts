import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../request-options.js";
import { getSellerInfoResponseSchema } from "./contract.js";
import type { GetSellerInfoResponse } from "./types.js";

export const GET_SELLER_INFO_OPERATION_ID = "SellerAPI_SellerInfo";

/** @internal */
export async function executeGetSellerInfo(
  transport: Transport,
  options: OzonRequestOptions = {},
): Promise<GetSellerInfoResponse> {
  const response = await transport.request({
    operationId: GET_SELLER_INFO_OPERATION_ID,
    method: "POST",
    path: "/v1/seller/info",
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    getSellerInfoResponseSchema,
    response.body,
    GET_SELLER_INFO_OPERATION_ID,
  );
}
