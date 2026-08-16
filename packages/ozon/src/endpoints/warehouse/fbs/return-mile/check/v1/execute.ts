import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { checkFbsWarehouseReturnMileV1ResponseSchema } from "./contract.js";
import type {
  CheckFbsWarehouseReturnMileV1Request,
  CheckFbsWarehouseReturnMileV1Response,
} from "./types.js";

export const CHECK_FBS_WAREHOUSE_RETURN_MILE_V1_OPERATION_ID =
  "WarehouseFbsReturnMileCheck";

export async function executeCheckFbsWarehouseReturnMileV1(
  transport: Transport,
  input: CheckFbsWarehouseReturnMileV1Request,
  options: OzonRequestOptions = {},
): Promise<CheckFbsWarehouseReturnMileV1Response> {
  const response = await transport.request({
    operationId: CHECK_FBS_WAREHOUSE_RETURN_MILE_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/warehouse/fbs/return-mile/check",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    checkFbsWarehouseReturnMileV1ResponseSchema,
    response.body,
    CHECK_FBS_WAREHOUSE_RETURN_MILE_V1_OPERATION_ID,
  );
}
