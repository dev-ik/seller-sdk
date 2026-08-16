import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { bindTransportCargoesV1ResponseSchema } from "./contract.js";
import type {
  BindTransportCargoesV1Request,
  BindTransportCargoesV1Response,
} from "./types.js";
export const BIND_TRANSPORT_CARGOES_V1_OPERATION_ID = "CargoesTransportBind";
export async function executeBindTransportCargoesV1(
  transport: Transport,
  input: BindTransportCargoesV1Request,
  options: OzonRequestOptions = {},
): Promise<BindTransportCargoesV1Response> {
  const response = await transport.request({
    operationId: BIND_TRANSPORT_CARGOES_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/cargoes/transport/bind",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    bindTransportCargoesV1ResponseSchema,
    response.body,
    BIND_TRANSPORT_CARGOES_V1_OPERATION_ID,
  );
}
