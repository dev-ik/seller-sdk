import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../request-options.js";
import { getOzonLogisticsInfoResponseSchema } from "./contract.js";
import type { GetOzonLogisticsInfoResponse } from "./types.js";

export const GET_OZON_LOGISTICS_INFO_OPERATION_ID =
  "SellerAPI_SellerOzonLogisticsInfo";

/** @internal */
export async function executeGetOzonLogisticsInfo(
  transport: Transport,
  options: OzonRequestOptions = {},
): Promise<GetOzonLogisticsInfoResponse> {
  const response = await transport.request({
    operationId: GET_OZON_LOGISTICS_INFO_OPERATION_ID,
    method: "POST",
    path: "/v1/seller/ozon-logistics/info",
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    getOzonLogisticsInfoResponseSchema,
    response.body,
    GET_OZON_LOGISTICS_INFO_OPERATION_ID,
  );
}
