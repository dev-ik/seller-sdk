import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../../request-options.js";
import { listDropOffTimeslotsForWarehouseUpdateV1ResponseSchema } from "./contract.js";
import type {
  ListDropOffTimeslotsForWarehouseUpdateV1Request,
  ListDropOffTimeslotsForWarehouseUpdateV1Response,
} from "./types.js";

export const LIST_DROP_OFF_TIMESLOTS_FOR_WAREHOUSE_UPDATE_V1_OPERATION_ID =
  "WarehouseFbsUpdateDropOffTimeslotList";

export async function executeListDropOffTimeslotsForWarehouseUpdateV1(
  transport: Transport,
  input: ListDropOffTimeslotsForWarehouseUpdateV1Request,
  options: OzonRequestOptions = {},
): Promise<ListDropOffTimeslotsForWarehouseUpdateV1Response> {
  const response = await transport.request({
    operationId: LIST_DROP_OFF_TIMESLOTS_FOR_WAREHOUSE_UPDATE_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/warehouse/fbs/update/drop-off/timeslot/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listDropOffTimeslotsForWarehouseUpdateV1ResponseSchema,
    response.body,
    LIST_DROP_OFF_TIMESLOTS_FOR_WAREHOUSE_UPDATE_V1_OPERATION_ID,
  );
}
