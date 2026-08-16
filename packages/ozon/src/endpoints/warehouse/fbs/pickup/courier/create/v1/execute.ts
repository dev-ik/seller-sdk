import type { Transport } from "#internal-core";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../../request-options.js";
import type {
  CreateFbsPickupCourierCallV1Request,
  CreateFbsPickupCourierCallV1Response,
} from "./types.js";

export const CREATE_FBS_PICKUP_COURIER_CALL_V1_OPERATION_ID =
  "WarehouseFbsPickUpCourierCreate";

export async function executeCreateFbsPickupCourierCallV1(
  transport: Transport,
  input: CreateFbsPickupCourierCallV1Request,
  options: OzonRequestOptions = {},
): Promise<CreateFbsPickupCourierCallV1Response> {
  await transport.request({
    operationId: CREATE_FBS_PICKUP_COURIER_CALL_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/warehouse/fbs/pickup/courier/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
}
