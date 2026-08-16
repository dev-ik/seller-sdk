import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { getFbsWarehouseReturnMileInfoV1ResponseSchema } from "./contract.js";
import type {
  GetFbsWarehouseReturnMileInfoV1Request,
  GetFbsWarehouseReturnMileInfoV1Response,
} from "./types.js";

export const GET_FBS_WAREHOUSE_RETURN_MILE_INFO_V1_OPERATION_ID =
  "WarehouseFBSReturnMileInfo";

export async function executeGetFbsWarehouseReturnMileInfoV1(
  transport: Transport,
  input: GetFbsWarehouseReturnMileInfoV1Request,
  options: OzonRequestOptions = {},
): Promise<GetFbsWarehouseReturnMileInfoV1Response> {
  const response = await transport.request({
    operationId: GET_FBS_WAREHOUSE_RETURN_MILE_INFO_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/warehouse/fbs/return-mile/info",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getFbsWarehouseReturnMileInfoV1ResponseSchema,
    response.body,
    GET_FBS_WAREHOUSE_RETURN_MILE_INFO_V1_OPERATION_ID,
  );
}
