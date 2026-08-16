import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { listDeliveryMethodsV2ResponseSchema } from "./contract.js";
import type {
  ListDeliveryMethodsV2Request,
  ListDeliveryMethodsV2Response,
} from "./types.js";

export const LIST_DELIVERY_METHODS_V2_OPERATION_ID =
  "WarehouseAPI_DeliveryMethodListV2";

export async function executeListDeliveryMethodsV2(
  transport: Transport,
  input: ListDeliveryMethodsV2Request,
  options: OzonRequestOptions = {},
): Promise<ListDeliveryMethodsV2Response> {
  const response = await transport.request({
    operationId: LIST_DELIVERY_METHODS_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/delivery-method/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listDeliveryMethodsV2ResponseSchema,
    response.body,
    LIST_DELIVERY_METHODS_V2_OPERATION_ID,
  );
}
