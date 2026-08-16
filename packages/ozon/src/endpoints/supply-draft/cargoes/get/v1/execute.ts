import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { getSupplyCargoesResponseSchema } from "./contract.js";
import type {
  GetSupplyCargoesRequest,
  GetSupplyCargoesResponse,
} from "./types.js";
export const GET_SUPPLY_CARGOES_OPERATION_ID = "CargoesGet";
export async function executeGetSupplyCargoes(
  transport: Transport,
  input: GetSupplyCargoesRequest,
  options: OzonRequestOptions = {},
): Promise<GetSupplyCargoesResponse> {
  const response = await transport.request({
    operationId: GET_SUPPLY_CARGOES_OPERATION_ID,
    method: "POST",
    path: "/v1/cargoes/get",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getSupplyCargoesResponseSchema,
    response.body,
    GET_SUPPLY_CARGOES_OPERATION_ID,
  );
}
