import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { cargoBindStatusResponseSchema } from "../../../../shared/v1/contract.js";
import type {
  GetTransportCargoesBindStatusV1Request,
  GetTransportCargoesBindStatusV1Response,
} from "./types.js";
export const GET_TRANSPORT_CARGOES_BIND_STATUS_V1_OPERATION_ID =
  "CargoesTransportBindStatus";
export async function executeGetTransportCargoesBindStatusV1(
  transport: Transport,
  input: GetTransportCargoesBindStatusV1Request,
  options: OzonRequestOptions = {},
): Promise<GetTransportCargoesBindStatusV1Response> {
  const response = await transport.request({
    operationId: GET_TRANSPORT_CARGOES_BIND_STATUS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/cargoes/transport/bind/status",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    cargoBindStatusResponseSchema,
    response.body,
    GET_TRANSPORT_CARGOES_BIND_STATUS_V1_OPERATION_ID,
  );
}
