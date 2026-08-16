import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { listReturnPointsForWarehouseCreateV1ResponseSchema } from "./contract.js";
import type {
  ListReturnPointsForWarehouseCreateV1Request,
  ListReturnPointsForWarehouseCreateV1Response,
} from "./types.js";

export const LIST_RETURN_POINTS_FOR_WAREHOUSE_CREATE_V1_OPERATION_ID =
  "WarehouseFBSCreateReturnPointList";

export async function executeListReturnPointsForWarehouseCreateV1(
  transport: Transport,
  input: ListReturnPointsForWarehouseCreateV1Request,
  options: OzonRequestOptions = {},
): Promise<ListReturnPointsForWarehouseCreateV1Response> {
  const response = await transport.request({
    operationId: LIST_RETURN_POINTS_FOR_WAREHOUSE_CREATE_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/warehouse/fbs/create/return-point/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listReturnPointsForWarehouseCreateV1ResponseSchema,
    response.body,
    LIST_RETURN_POINTS_FOR_WAREHOUSE_CREATE_V1_OPERATION_ID,
  );
}
