import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { createTransportCargoesV1ResponseSchema } from "./contract.js";
import type {
  CreateTransportCargoesV1Request,
  CreateTransportCargoesV1Response,
} from "./types.js";
export const CREATE_TRANSPORT_CARGOES_V1_OPERATION_ID =
  "CargoesTransportCreate";
export async function executeCreateTransportCargoesV1(
  transport: Transport,
  input: CreateTransportCargoesV1Request,
  options: OzonRequestOptions = {},
): Promise<CreateTransportCargoesV1Response> {
  const response = await transport.request({
    operationId: CREATE_TRANSPORT_CARGOES_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/cargoes/transport/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    createTransportCargoesV1ResponseSchema,
    response.body,
    CREATE_TRANSPORT_CARGOES_V1_OPERATION_ID,
  );
}
