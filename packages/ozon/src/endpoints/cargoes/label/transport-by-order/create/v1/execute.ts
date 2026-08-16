import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { createTransportLabelsByOrderV1ResponseSchema } from "./contract.js";
import type {
  CreateTransportLabelsByOrderV1Request,
  CreateTransportLabelsByOrderV1Response,
} from "./types.js";
export const CREATE_TRANSPORT_LABELS_BY_ORDER_V1_OPERATION_ID =
  "CargoesLabelTransportByOrderCreate";
export async function executeCreateTransportLabelsByOrderV1(
  transport: Transport,
  input: CreateTransportLabelsByOrderV1Request,
  options: OzonRequestOptions = {},
): Promise<CreateTransportLabelsByOrderV1Response> {
  const response = await transport.request({
    operationId: CREATE_TRANSPORT_LABELS_BY_ORDER_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/cargoes/label/transport-by-order/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    createTransportLabelsByOrderV1ResponseSchema,
    response.body,
    CREATE_TRANSPORT_LABELS_BY_ORDER_V1_OPERATION_ID,
  );
}
