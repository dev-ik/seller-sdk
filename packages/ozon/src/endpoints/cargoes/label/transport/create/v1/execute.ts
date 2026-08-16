import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { createTransportLabelsV1ResponseSchema } from "./contract.js";
import type {
  CreateTransportLabelsV1Request,
  CreateTransportLabelsV1Response,
} from "./types.js";
export const CREATE_TRANSPORT_LABELS_V1_OPERATION_ID =
  "CargoesLabelTransportCreate";
export async function executeCreateTransportLabelsV1(
  transport: Transport,
  input: CreateTransportLabelsV1Request,
  options: OzonRequestOptions = {},
): Promise<CreateTransportLabelsV1Response> {
  const response = await transport.request({
    operationId: CREATE_TRANSPORT_LABELS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/cargoes/label/transport/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    createTransportLabelsV1ResponseSchema,
    response.body,
    CREATE_TRANSPORT_LABELS_V1_OPERATION_ID,
  );
}
