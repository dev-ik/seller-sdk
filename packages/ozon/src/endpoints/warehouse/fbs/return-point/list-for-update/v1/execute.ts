import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { listReturnPointsForWarehouseUpdateV1ResponseSchema } from "./contract.js";
import type {
  ListReturnPointsForWarehouseUpdateV1Request,
  ListReturnPointsForWarehouseUpdateV1Response,
} from "./types.js";

export const LIST_RETURN_POINTS_FOR_WAREHOUSE_UPDATE_V1_OPERATION_ID =
  "WarehouseFBSUpdateReturnPointList";

export async function executeListReturnPointsForWarehouseUpdateV1(
  transport: Transport,
  input: ListReturnPointsForWarehouseUpdateV1Request,
  options: OzonRequestOptions = {},
): Promise<ListReturnPointsForWarehouseUpdateV1Response> {
  const response = await transport.request({
    operationId: LIST_RETURN_POINTS_FOR_WAREHOUSE_UPDATE_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/warehouse/fbs/update/return-point/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listReturnPointsForWarehouseUpdateV1ResponseSchema,
    response.body,
    LIST_RETURN_POINTS_FOR_WAREHOUSE_UPDATE_V1_OPERATION_ID,
  );
}
