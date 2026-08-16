import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { fbpArchiveSupplySchema } from "../../shared/v1/contract.js";
import type {
  GetFbpArchiveSupplyV1Request,
  GetFbpArchiveSupplyV1Response,
} from "./types.js";

export const GET_FBP_ARCHIVE_SUPPLY_V1_OPERATION_ID = "FbpAPI_FbpArchiveGet";

export async function executeGetFbpArchiveSupplyV1(
  transport: Transport,
  input: GetFbpArchiveSupplyV1Request,
  options: OzonRequestOptions = {},
): Promise<GetFbpArchiveSupplyV1Response> {
  const response = await transport.request({
    operationId: GET_FBP_ARCHIVE_SUPPLY_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/archive/get",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    fbpArchiveSupplySchema,
    response.body,
    GET_FBP_ARCHIVE_SUPPLY_V1_OPERATION_ID,
  );
}
