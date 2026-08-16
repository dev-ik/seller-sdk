import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../../request-options.js";
import { listDropOffPointsForWarehouseCreateV1ResponseSchema } from "./contract.js";
import type {
  ListDropOffPointsForWarehouseCreateV1Request,
  ListDropOffPointsForWarehouseCreateV1Response,
} from "./types.js";

export const LIST_DROP_OFF_POINTS_FOR_WAREHOUSE_CREATE_V1_OPERATION_ID =
  "WarehouseAPI_ListDropOffPointsForCreateFBSWarehouse";

export async function executeListDropOffPointsForWarehouseCreateV1(
  transport: Transport,
  input: ListDropOffPointsForWarehouseCreateV1Request,
  options: OzonRequestOptions = {},
): Promise<ListDropOffPointsForWarehouseCreateV1Response> {
  const response = await transport.request({
    operationId: LIST_DROP_OFF_POINTS_FOR_WAREHOUSE_CREATE_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/warehouse/fbs/create/drop-off/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listDropOffPointsForWarehouseCreateV1ResponseSchema,
    response.body,
    LIST_DROP_OFF_POINTS_FOR_WAREHOUSE_CREATE_V1_OPERATION_ID,
  );
}
