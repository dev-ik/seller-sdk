import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { getSupplyCargoesV1ResponseSchema } from "./contract.js";
import type {
  GetSupplyCargoesV1Request,
  GetSupplyCargoesV1Response,
} from "./types.js";
export const GET_SUPPLY_CARGOES_V1_OPERATION_ID = "CargoesSuppliesGet";
export async function executeGetSupplyCargoesV1(
  transport: Transport,
  input: GetSupplyCargoesV1Request,
  options: OzonRequestOptions = {},
): Promise<GetSupplyCargoesV1Response> {
  const response = await transport.request({
    operationId: GET_SUPPLY_CARGOES_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/cargoes/supplies/get",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getSupplyCargoesV1ResponseSchema,
    response.body,
    GET_SUPPLY_CARGOES_V1_OPERATION_ID,
  );
}
