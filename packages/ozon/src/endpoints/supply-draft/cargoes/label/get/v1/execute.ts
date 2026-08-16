import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { getSupplyCargoLabelsResponseSchema } from "./contract.js";
import type {
  GetSupplyCargoLabelsRequest,
  GetSupplyCargoLabelsResponse,
} from "./types.js";
export const GET_SUPPLY_CARGO_LABELS_OPERATION_ID =
  "CargoesAPI_CargoesLabelGet";
export async function executeGetSupplyCargoLabels(
  transport: Transport,
  input: GetSupplyCargoLabelsRequest,
  options: OzonRequestOptions = {},
): Promise<GetSupplyCargoLabelsResponse> {
  const response = await transport.request({
    operationId: GET_SUPPLY_CARGO_LABELS_OPERATION_ID,
    method: "POST",
    path: "/v1/cargoes-label/get",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getSupplyCargoLabelsResponseSchema,
    response.body,
    GET_SUPPLY_CARGO_LABELS_OPERATION_ID,
  );
}
