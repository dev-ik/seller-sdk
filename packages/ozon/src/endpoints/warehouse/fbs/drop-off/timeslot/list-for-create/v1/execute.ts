import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../../request-options.js";
import { listDropOffTimeslotsForWarehouseCreateV1ResponseSchema } from "./contract.js";
import type {
  ListDropOffTimeslotsForWarehouseCreateV1Request,
  ListDropOffTimeslotsForWarehouseCreateV1Response,
} from "./types.js";

export const LIST_DROP_OFF_TIMESLOTS_FOR_WAREHOUSE_CREATE_V1_OPERATION_ID =
  "WarehouseFbsCreateDropOffTimeslotList";

export async function executeListDropOffTimeslotsForWarehouseCreateV1(
  transport: Transport,
  input: ListDropOffTimeslotsForWarehouseCreateV1Request,
  options: OzonRequestOptions = {},
): Promise<ListDropOffTimeslotsForWarehouseCreateV1Response> {
  const response = await transport.request({
    operationId: LIST_DROP_OFF_TIMESLOTS_FOR_WAREHOUSE_CREATE_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/warehouse/fbs/create/drop-off/timeslot/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listDropOffTimeslotsForWarehouseCreateV1ResponseSchema,
    response.body,
    LIST_DROP_OFF_TIMESLOTS_FOR_WAREHOUSE_CREATE_V1_OPERATION_ID,
  );
}
