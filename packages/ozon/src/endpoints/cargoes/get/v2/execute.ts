import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { getCargoesV2ResponseSchema } from "./contract.js";
import type { GetCargoesV2Request, GetCargoesV2Response } from "./types.js";
export const GET_CARGOES_V2_OPERATION_ID = "CargoesGetV2";
export async function executeGetCargoesV2(
  transport: Transport,
  input: GetCargoesV2Request,
  options: OzonRequestOptions = {},
): Promise<GetCargoesV2Response> {
  const response = await transport.request({
    operationId: GET_CARGOES_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/cargoes/get",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getCargoesV2ResponseSchema,
    response.body,
    GET_CARGOES_V2_OPERATION_ID,
  );
}
