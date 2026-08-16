import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { cargoActivateStatusResponseSchema } from "../../../../shared/v1/contract.js";
import type {
  GetTransportCargoesActivationStatusV1Request,
  GetTransportCargoesActivationStatusV1Response,
} from "./types.js";
export const GET_TRANSPORT_CARGOES_ACTIVATION_STATUS_V1_OPERATION_ID =
  "CargoesTransportActivateStatus";
export async function executeGetTransportCargoesActivationStatusV1(
  transport: Transport,
  input: GetTransportCargoesActivationStatusV1Request,
  options: OzonRequestOptions = {},
): Promise<GetTransportCargoesActivationStatusV1Response> {
  const response = await transport.request({
    operationId: GET_TRANSPORT_CARGOES_ACTIVATION_STATUS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/cargoes/transport/activate/status",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    cargoActivateStatusResponseSchema,
    response.body,
    GET_TRANSPORT_CARGOES_ACTIVATION_STATUS_V1_OPERATION_ID,
  );
}
