import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { checkoutDeliveryV2ResponseSchema } from "./contract.js";
import type {
  CheckoutDeliveryV2Request,
  CheckoutDeliveryV2Response,
} from "./types.js";

export const CHECKOUT_DELIVERY_V2_OPERATION_ID = "DeliveryCheckout";

export async function executeCheckoutDeliveryV2(
  transport: Transport,
  input: CheckoutDeliveryV2Request,
  options: OzonRequestOptions = {},
): Promise<CheckoutDeliveryV2Response> {
  const response = await transport.request({
    operationId: CHECKOUT_DELIVERY_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/delivery/checkout",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    checkoutDeliveryV2ResponseSchema,
    response.body,
    CHECKOUT_DELIVERY_V2_OPERATION_ID,
  );
}
