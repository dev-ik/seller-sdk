import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { updateProductMinPriceTimerResponseSchema } from "./contract.js";
import type { UpdateProductMinPriceTimerRequest } from "./types.js";

export const UPDATE_PRODUCT_MIN_PRICE_TIMER_OPERATION_ID =
  "ProductAPI_ActionTimerUpdate";

export async function executeUpdateProductMinPriceTimer(
  transport: Transport,
  input: UpdateProductMinPriceTimerRequest,
  options: OzonRequestOptions = {},
): Promise<void> {
  const response = await transport.request({
    operationId: UPDATE_PRODUCT_MIN_PRICE_TIMER_OPERATION_ID,
    method: "POST",
    path: "/v1/product/action/timer/update",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  parseOzonResponse(
    updateProductMinPriceTimerResponseSchema,
    response.body,
    UPDATE_PRODUCT_MIN_PRICE_TIMER_OPERATION_ID,
  );
}
