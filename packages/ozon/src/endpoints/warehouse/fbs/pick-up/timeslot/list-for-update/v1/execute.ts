import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../../request-options.js";
import { listPickUpTimeslotsForWarehouseUpdateV1ResponseSchema } from "./contract.js";
import type {
  ListPickUpTimeslotsForWarehouseUpdateV1Request,
  ListPickUpTimeslotsForWarehouseUpdateV1Response,
} from "./types.js";

export const LIST_PICK_UP_TIMESLOTS_FOR_WAREHOUSE_UPDATE_V1_OPERATION_ID =
  "WarehouseFbsUpdatePickUpTimeslotList";

export async function executeListPickUpTimeslotsForWarehouseUpdateV1(
  transport: Transport,
  input: ListPickUpTimeslotsForWarehouseUpdateV1Request,
  options: OzonRequestOptions = {},
): Promise<ListPickUpTimeslotsForWarehouseUpdateV1Response> {
  const response = await transport.request({
    operationId: LIST_PICK_UP_TIMESLOTS_FOR_WAREHOUSE_UPDATE_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/warehouse/fbs/update/pick-up/timeslot/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listPickUpTimeslotsForWarehouseUpdateV1ResponseSchema,
    response.body,
    LIST_PICK_UP_TIMESLOTS_FOR_WAREHOUSE_UPDATE_V1_OPERATION_ID,
  );
}
