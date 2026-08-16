import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { getSupplyCargoesDeleteStatusResponseSchema } from "./contract.js";
import type {
  GetSupplyCargoesDeleteStatusRequest,
  GetSupplyCargoesDeleteStatusResponse,
} from "./types.js";
export const GET_SUPPLY_CARGOES_DELETE_STATUS_OPERATION_ID =
  "CargoesAPI_CargoesDeleteStatus";
export async function executeGetSupplyCargoesDeleteStatus(
  transport: Transport,
  input: GetSupplyCargoesDeleteStatusRequest,
  options: OzonRequestOptions = {},
): Promise<GetSupplyCargoesDeleteStatusResponse> {
  const response = await transport.request({
    operationId: GET_SUPPLY_CARGOES_DELETE_STATUS_OPERATION_ID,
    method: "POST",
    path: "/v1/cargoes/delete/status",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getSupplyCargoesDeleteStatusResponseSchema,
    response.body,
    GET_SUPPLY_CARGOES_DELETE_STATUS_OPERATION_ID,
  );
}
