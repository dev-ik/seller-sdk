// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePatchContentV2TagIdResponse } from "./contract.js";
import type {
  PatchContentV2TagIdInput,
  PatchContentV2TagIdResponse,
} from "./types.js";

export const PATCH_CONTENT_V2_TAG_ID_OPERATION_ID =
  "PATCH /content/v2/tag/{id}";

const definition: WbOperationDefinition<PatchContentV2TagIdResponse> = {
  operationId: PATCH_CONTENT_V2_TAG_ID_OPERATION_ID,
  method: "PATCH",
  path: "/content/v2/tag/{id}",
  productionOrigin: "https://content-api.wildberries.ru",
  sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
  parameters: [{ name: "id", location: "path", required: true, array: false }],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePatchContentV2TagIdResponse,
  source: "https://dev.wildberries.ru/docs/openapi/items",
  verifiedAt: "2026-08-17",
};

export function executePatchContentV2TagId(
  execute: WbOperationExecutor,
  input: PatchContentV2TagIdInput,
  options: WbRequestOptions = {},
): Promise<PatchContentV2TagIdResponse> {
  return execute(definition, input, options);
}
