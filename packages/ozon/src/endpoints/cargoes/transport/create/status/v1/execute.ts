import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { getTransportCargoesCreateStatusV1ResponseSchema } from "./contract.js";
import type {
  GetTransportCargoesCreateStatusV1Request,
  GetTransportCargoesCreateStatusV1Response,
} from "./types.js";
export const GET_TRANSPORT_CARGOES_CREATE_STATUS_V1_OPERATION_ID =
  "CargoesTransportCreateStatus";
export async function executeGetTransportCargoesCreateStatusV1(
  transport: Transport,
  input: GetTransportCargoesCreateStatusV1Request,
  options: OzonRequestOptions = {},
): Promise<GetTransportCargoesCreateStatusV1Response> {
  const response = await transport.request({
    operationId: GET_TRANSPORT_CARGOES_CREATE_STATUS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/cargoes/transport/create/status",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getTransportCargoesCreateStatusV1ResponseSchema,
    response.body,
    GET_TRANSPORT_CARGOES_CREATE_STATUS_V1_OPERATION_ID,
  );
}
