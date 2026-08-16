import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { getSupplyCargoesCreateInfoResponseSchema } from "./contract.js";
import type {
  GetSupplyCargoesCreateInfoRequest,
  GetSupplyCargoesCreateInfoResponse,
} from "./types.js";
export const GET_SUPPLY_CARGOES_CREATE_INFO_OPERATION_ID =
  "CargoesCreateInfoV2";
export async function executeGetSupplyCargoesCreateInfo(
  transport: Transport,
  input: GetSupplyCargoesCreateInfoRequest,
  options: OzonRequestOptions = {},
): Promise<GetSupplyCargoesCreateInfoResponse> {
  const response = await transport.request({
    operationId: GET_SUPPLY_CARGOES_CREATE_INFO_OPERATION_ID,
    method: "POST",
    path: "/v2/cargoes/create/info",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getSupplyCargoesCreateInfoResponseSchema,
    response.body,
    GET_SUPPLY_CARGOES_CREATE_INFO_OPERATION_ID,
  );
}
