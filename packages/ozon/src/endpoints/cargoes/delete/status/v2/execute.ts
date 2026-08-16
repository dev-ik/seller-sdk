import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { getCargoesDeleteStatusV2ResponseSchema } from "./contract.js";
import type {
  GetCargoesDeleteStatusV2Request,
  GetCargoesDeleteStatusV2Response,
} from "./types.js";
export const GET_CARGOES_DELETE_STATUS_V2_OPERATION_ID =
  "CargoesDeleteStatusV2";
export async function executeGetCargoesDeleteStatusV2(
  transport: Transport,
  input: GetCargoesDeleteStatusV2Request,
  options: OzonRequestOptions = {},
): Promise<GetCargoesDeleteStatusV2Response> {
  const response = await transport.request({
    operationId: GET_CARGOES_DELETE_STATUS_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/cargoes/delete/status",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getCargoesDeleteStatusV2ResponseSchema,
    response.body,
    GET_CARGOES_DELETE_STATUS_V2_OPERATION_ID,
  );
}
