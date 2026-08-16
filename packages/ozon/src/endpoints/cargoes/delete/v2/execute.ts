import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { deleteCargoesV2ResponseSchema } from "./contract.js";
import type {
  DeleteCargoesV2Request,
  DeleteCargoesV2Response,
} from "./types.js";
export const DELETE_CARGOES_V2_OPERATION_ID = "CargoesDeleteV2";
export async function executeDeleteCargoesV2(
  transport: Transport,
  input: DeleteCargoesV2Request,
  options: OzonRequestOptions = {},
): Promise<DeleteCargoesV2Response> {
  const response = await transport.request({
    operationId: DELETE_CARGOES_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/cargoes/delete",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    deleteCargoesV2ResponseSchema,
    response.body,
    DELETE_CARGOES_V2_OPERATION_ID,
  );
}
