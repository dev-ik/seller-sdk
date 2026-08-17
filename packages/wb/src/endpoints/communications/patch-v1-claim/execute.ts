// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePatchV1ClaimResponse } from "./contract.js";
import type { PatchV1ClaimInput, PatchV1ClaimResponse } from "./types.js";

export const PATCH_V1_CLAIM_OPERATION_ID = "patchV1Claim";

const definition: WbOperationDefinition<PatchV1ClaimResponse> = {
  operationId: PATCH_V1_CLAIM_OPERATION_ID,
  method: "PATCH",
  path: "/api/v1/claim",
  productionOrigin: "https://returns-api.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePatchV1ClaimResponse,
  source: "https://dev.wildberries.ru/docs/openapi/communications",
  verifiedAt: "2026-08-17",
};

export function executePatchV1Claim(
  execute: WbOperationExecutor,
  input: PatchV1ClaimInput,
  options: WbRequestOptions = {},
): Promise<PatchV1ClaimResponse> {
  return execute(definition, input, options);
}
