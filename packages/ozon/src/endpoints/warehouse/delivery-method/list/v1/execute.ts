import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { listDeliveryMethodsV1ResponseSchema } from "./contract.js";
import type {
  ListDeliveryMethodsV1Request,
  ListDeliveryMethodsV1Response,
} from "./types.js";

export const LIST_DELIVERY_METHODS_V1_OPERATION_ID =
  "WarehouseAPI_DeliveryMethodList";

/** @deprecated Ozon announced shutdown of this API version on 7 April 2026. */
export async function executeListDeliveryMethodsV1(
  transport: Transport,
  input: ListDeliveryMethodsV1Request,
  options: OzonRequestOptions = {},
): Promise<ListDeliveryMethodsV1Response> {
  const response = await transport.request({
    operationId: LIST_DELIVERY_METHODS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/delivery-method/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listDeliveryMethodsV1ResponseSchema,
    response.body,
    LIST_DELIVERY_METHODS_V1_OPERATION_ID,
  );
}
