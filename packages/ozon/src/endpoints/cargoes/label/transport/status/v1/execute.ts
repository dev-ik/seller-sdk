import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { getTransportLabelsStatusV1ResponseSchema } from "./contract.js";
import type {
  GetTransportLabelsStatusV1Request,
  GetTransportLabelsStatusV1Response,
} from "./types.js";
export const GET_TRANSPORT_LABELS_STATUS_V1_OPERATION_ID =
  "CargoesLabelTransportStatus";
export async function executeGetTransportLabelsStatusV1(
  transport: Transport,
  input: GetTransportLabelsStatusV1Request,
  options: OzonRequestOptions = {},
): Promise<GetTransportLabelsStatusV1Response> {
  const response = await transport.request({
    operationId: GET_TRANSPORT_LABELS_STATUS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/cargoes/label/transport/status",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getTransportLabelsStatusV1ResponseSchema,
    response.body,
    GET_TRANSPORT_LABELS_STATUS_V1_OPERATION_ID,
  );
}
