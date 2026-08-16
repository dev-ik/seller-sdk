import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../../request-options.js";
import { listDropOffPointsForWarehouseUpdateV1ResponseSchema } from "./contract.js";
import type {
  ListDropOffPointsForWarehouseUpdateV1Request,
  ListDropOffPointsForWarehouseUpdateV1Response,
} from "./types.js";

export const LIST_DROP_OFF_POINTS_FOR_WAREHOUSE_UPDATE_V1_OPERATION_ID =
  "WarehouseAPI_ListDropOffPointsForUpdateFBSWarehouse";

export async function executeListDropOffPointsForWarehouseUpdateV1(
  transport: Transport,
  input: ListDropOffPointsForWarehouseUpdateV1Request,
  options: OzonRequestOptions = {},
): Promise<ListDropOffPointsForWarehouseUpdateV1Response> {
  const response = await transport.request({
    operationId: LIST_DROP_OFF_POINTS_FOR_WAREHOUSE_UPDATE_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/warehouse/fbs/update/drop-off/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listDropOffPointsForWarehouseUpdateV1ResponseSchema,
    response.body,
    LIST_DROP_OFF_POINTS_FOR_WAREHOUSE_UPDATE_V1_OPERATION_ID,
  );
}
