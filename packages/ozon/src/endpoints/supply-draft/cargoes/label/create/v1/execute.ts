import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { createSupplyCargoLabelsResponseSchema } from "./contract.js";
import type {
  CreateSupplyCargoLabelsRequest,
  CreateSupplyCargoLabelsResponse,
} from "./types.js";
export const CREATE_SUPPLY_CARGO_LABELS_OPERATION_ID =
  "CargoesAPI_CargoesLabelCreate";
export async function executeCreateSupplyCargoLabels(
  transport: Transport,
  input: CreateSupplyCargoLabelsRequest,
  options: OzonRequestOptions = {},
): Promise<CreateSupplyCargoLabelsResponse> {
  const response = await transport.request({
    operationId: CREATE_SUPPLY_CARGO_LABELS_OPERATION_ID,
    method: "POST",
    path: "/v1/cargoes-label/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    createSupplyCargoLabelsResponseSchema,
    response.body,
    CREATE_SUPPLY_CARGO_LABELS_OPERATION_ID,
  );
}
