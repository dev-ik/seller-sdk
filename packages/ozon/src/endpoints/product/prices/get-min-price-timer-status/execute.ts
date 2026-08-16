import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { getProductMinPriceTimerStatusResponseSchema } from "./contract.js";
import type {
  GetProductMinPriceTimerStatusRequest,
  GetProductMinPriceTimerStatusResponse,
} from "./types.js";

export const GET_PRODUCT_MIN_PRICE_TIMER_STATUS_OPERATION_ID =
  "ProductAPI_ActionTimerStatus";

export async function executeGetProductMinPriceTimerStatus(
  transport: Transport,
  input: GetProductMinPriceTimerStatusRequest,
  options: OzonRequestOptions = {},
): Promise<GetProductMinPriceTimerStatusResponse> {
  const response = await transport.request({
    operationId: GET_PRODUCT_MIN_PRICE_TIMER_STATUS_OPERATION_ID,
    method: "POST",
    path: "/v1/product/action/timer/status",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    getProductMinPriceTimerStatusResponseSchema,
    response.body,
    GET_PRODUCT_MIN_PRICE_TIMER_STATUS_OPERATION_ID,
  );
}
