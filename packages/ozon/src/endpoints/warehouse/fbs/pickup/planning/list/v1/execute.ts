import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../../request-options.js";
import { listFbsPickupPlanningV1ResponseSchema } from "./contract.js";
import type { ListFbsPickupPlanningV1Response } from "./types.js";

export const LIST_FBS_PICKUP_PLANNING_V1_OPERATION_ID =
  "WarehouseFbsPickUpPlanningList";

export async function executeListFbsPickupPlanningV1(
  transport: Transport,
  options: OzonRequestOptions = {},
): Promise<ListFbsPickupPlanningV1Response> {
  const response = await transport.request({
    operationId: LIST_FBS_PICKUP_PLANNING_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/warehouse/fbs/pickup/planning/list",
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listFbsPickupPlanningV1ResponseSchema,
    response.body,
    LIST_FBS_PICKUP_PLANNING_V1_OPERATION_ID,
  );
}
