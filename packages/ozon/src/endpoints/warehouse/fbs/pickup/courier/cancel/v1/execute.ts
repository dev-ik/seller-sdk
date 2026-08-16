import type { Transport } from "#internal-core";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../../request-options.js";
import type {
  CancelFbsPickupCourierCallV1Request,
  CancelFbsPickupCourierCallV1Response,
} from "./types.js";

export const CANCEL_FBS_PICKUP_COURIER_CALL_V1_OPERATION_ID =
  "WarehouseFbsPickUpCourierCancel";

export async function executeCancelFbsPickupCourierCallV1(
  transport: Transport,
  input: CancelFbsPickupCourierCallV1Request,
  options: OzonRequestOptions = {},
): Promise<CancelFbsPickupCourierCallV1Response> {
  await transport.request({
    operationId: CANCEL_FBS_PICKUP_COURIER_CALL_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/warehouse/fbs/pickup/courier/cancel",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
}
