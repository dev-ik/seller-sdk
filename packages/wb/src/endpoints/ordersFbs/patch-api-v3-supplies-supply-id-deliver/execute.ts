// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePatchApiV3SuppliesSupplyIdDeliverResponse } from "./contract.js";
import type {
  PatchApiV3SuppliesSupplyIdDeliverInput,
  PatchApiV3SuppliesSupplyIdDeliverResponse,
} from "./types.js";

export const PATCH_API_V3_SUPPLIES_SUPPLY_ID_DELIVER_OPERATION_ID =
  "PATCH /api/v3/supplies/{supplyId}/deliver";

const definition: WbOperationDefinition<PatchApiV3SuppliesSupplyIdDeliverResponse> =
  {
    operationId: PATCH_API_V3_SUPPLIES_SUPPLY_ID_DELIVER_OPERATION_ID,
    method: "PATCH",
    path: "/api/v3/supplies/{supplyId}/deliver",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    parameters: [
      { name: "supplyId", location: "path", required: true, array: false },
    ],
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePatchApiV3SuppliesSupplyIdDeliverResponse,
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  };

export function executePatchApiV3SuppliesSupplyIdDeliver(
  execute: WbOperationExecutor,
  input: PatchApiV3SuppliesSupplyIdDeliverInput,
  options: WbRequestOptions = {},
): Promise<PatchApiV3SuppliesSupplyIdDeliverResponse> {
  return execute(definition, input, options);
}
