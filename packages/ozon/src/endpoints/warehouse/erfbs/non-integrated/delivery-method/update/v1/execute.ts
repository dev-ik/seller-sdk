import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../../request-options.js";
import { updateErfbsNonIntegratedDeliveryMethodV1ResponseSchema } from "./contract.js";
import type {
  UpdateErfbsNonIntegratedDeliveryMethodV1Request,
  UpdateErfbsNonIntegratedDeliveryMethodV1Response,
} from "./types.js";

export const UPDATE_ERFBS_NON_INTEGRATED_DELIVERY_METHOD_V1_OPERATION_ID =
  "WarehouseERFBSNonIntegratedDeliveryMethodUpdate";

export async function executeUpdateErfbsNonIntegratedDeliveryMethodV1(
  transport: Transport,
  input: UpdateErfbsNonIntegratedDeliveryMethodV1Request,
  options: OzonRequestOptions = {},
): Promise<UpdateErfbsNonIntegratedDeliveryMethodV1Response> {
  const response = await transport.request({
    operationId: UPDATE_ERFBS_NON_INTEGRATED_DELIVERY_METHOD_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/warehouse/erfbs/non-integrated/delivery-method/update",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    updateErfbsNonIntegratedDeliveryMethodV1ResponseSchema,
    response.body,
    UPDATE_ERFBS_NON_INTEGRATED_DELIVERY_METHOD_V1_OPERATION_ID,
  );
}
