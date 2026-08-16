import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { createSupplyCargoesResponseSchema } from "./contract.js";
import type {
  CreateSupplyCargoesRequest,
  CreateSupplyCargoesResponse,
} from "./types.js";
export const CREATE_SUPPLY_CARGOES_OPERATION_ID = "CargoesAPI_CargoesCreate";
export async function executeCreateSupplyCargoes(
  transport: Transport,
  input: CreateSupplyCargoesRequest,
  options: OzonRequestOptions = {},
): Promise<CreateSupplyCargoesResponse> {
  const response = await transport.request({
    operationId: CREATE_SUPPLY_CARGOES_OPERATION_ID,
    method: "POST",
    path: "/v1/cargoes/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    createSupplyCargoesResponseSchema,
    response.body,
    CREATE_SUPPLY_CARGOES_OPERATION_ID,
  );
}
