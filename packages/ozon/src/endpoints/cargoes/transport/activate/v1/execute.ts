import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { cargoOperationResponseSchema } from "../../../shared/v1/contract.js";
import type {
  ActivateTransportCargoesV1Request,
  ActivateTransportCargoesV1Response,
} from "./types.js";
export const ACTIVATE_TRANSPORT_CARGOES_V1_OPERATION_ID =
  "CargoesTransportActivate";
export async function executeActivateTransportCargoesV1(
  transport: Transport,
  input: ActivateTransportCargoesV1Request,
  options: OzonRequestOptions = {},
): Promise<ActivateTransportCargoesV1Response> {
  const response = await transport.request({
    operationId: ACTIVATE_TRANSPORT_CARGOES_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/cargoes/transport/activate",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    cargoOperationResponseSchema,
    response.body,
    ACTIVATE_TRANSPORT_CARGOES_V1_OPERATION_ID,
  );
}
