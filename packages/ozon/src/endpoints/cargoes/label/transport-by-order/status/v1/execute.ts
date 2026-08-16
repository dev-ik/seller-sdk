import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { getTransportLabelsByOrderStatusV1ResponseSchema } from "./contract.js";
import type {
  GetTransportLabelsByOrderStatusV1Request,
  GetTransportLabelsByOrderStatusV1Response,
} from "./types.js";
export const GET_TRANSPORT_LABELS_BY_ORDER_STATUS_V1_OPERATION_ID =
  "CargoesLabelTransportByOrderStatus";
export async function executeGetTransportLabelsByOrderStatusV1(
  transport: Transport,
  input: GetTransportLabelsByOrderStatusV1Request,
  options: OzonRequestOptions = {},
): Promise<GetTransportLabelsByOrderStatusV1Response> {
  const response = await transport.request({
    operationId: GET_TRANSPORT_LABELS_BY_ORDER_STATUS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/cargoes/label/transport-by-order/status",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getTransportLabelsByOrderStatusV1ResponseSchema,
    response.body,
    GET_TRANSPORT_LABELS_BY_ORDER_STATUS_V1_OPERATION_ID,
  );
}
