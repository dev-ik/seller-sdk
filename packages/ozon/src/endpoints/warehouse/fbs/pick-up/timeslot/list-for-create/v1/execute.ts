import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../../request-options.js";
import { listPickUpTimeslotsForWarehouseCreateV1ResponseSchema } from "./contract.js";
import type {
  ListPickUpTimeslotsForWarehouseCreateV1Request,
  ListPickUpTimeslotsForWarehouseCreateV1Response,
} from "./types.js";

export const LIST_PICK_UP_TIMESLOTS_FOR_WAREHOUSE_CREATE_V1_OPERATION_ID =
  "WarehouseFbsCreatePickUpTimeslotList";

export async function executeListPickUpTimeslotsForWarehouseCreateV1(
  transport: Transport,
  input: ListPickUpTimeslotsForWarehouseCreateV1Request,
  options: OzonRequestOptions = {},
): Promise<ListPickUpTimeslotsForWarehouseCreateV1Response> {
  const response = await transport.request({
    operationId: LIST_PICK_UP_TIMESLOTS_FOR_WAREHOUSE_CREATE_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/warehouse/fbs/create/pick-up/timeslot/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listPickUpTimeslotsForWarehouseCreateV1ResponseSchema,
    response.body,
    LIST_PICK_UP_TIMESLOTS_FOR_WAREHOUSE_CREATE_V1_OPERATION_ID,
  );
}
