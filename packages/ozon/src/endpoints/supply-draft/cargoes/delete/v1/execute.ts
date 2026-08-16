import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { deleteSupplyCargoesResponseSchema } from "./contract.js";
import type {
  DeleteSupplyCargoesRequest,
  DeleteSupplyCargoesResponse,
} from "./types.js";
export const DELETE_SUPPLY_CARGOES_OPERATION_ID = "CargoesAPI_CargoesDelete";
export async function executeDeleteSupplyCargoes(
  transport: Transport,
  input: DeleteSupplyCargoesRequest,
  options: OzonRequestOptions = {},
): Promise<DeleteSupplyCargoesResponse> {
  const response = await transport.request({
    operationId: DELETE_SUPPLY_CARGOES_OPERATION_ID,
    method: "POST",
    path: "/v1/cargoes/delete",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    deleteSupplyCargoesResponseSchema,
    response.body,
    DELETE_SUPPLY_CARGOES_OPERATION_ID,
  );
}
