import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../../request-options.js";
import { updateErfbsAggregatorDeliveryMethodV1ResponseSchema } from "./contract.js";
import type {
  UpdateErfbsAggregatorDeliveryMethodV1Request,
  UpdateErfbsAggregatorDeliveryMethodV1Response,
} from "./types.js";

export const UPDATE_ERFBS_AGGREGATOR_DELIVERY_METHOD_V1_OPERATION_ID =
  "WarehouseERFBSAggregatorDeliveryMethodUpdate";

export async function executeUpdateErfbsAggregatorDeliveryMethodV1(
  transport: Transport,
  input: UpdateErfbsAggregatorDeliveryMethodV1Request,
  options: OzonRequestOptions = {},
): Promise<UpdateErfbsAggregatorDeliveryMethodV1Response> {
  const response = await transport.request({
    operationId: UPDATE_ERFBS_AGGREGATOR_DELIVERY_METHOD_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/warehouse/erfbs/aggregator/delivery-method/update",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    updateErfbsAggregatorDeliveryMethodV1ResponseSchema,
    response.body,
    UPDATE_ERFBS_AGGREGATOR_DELIVERY_METHOD_V1_OPERATION_ID,
  );
}
