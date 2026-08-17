// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostContentV2BarcodesResponse } from "./contract.js";
import type {
  PostContentV2BarcodesInput,
  PostContentV2BarcodesResponse,
} from "./types.js";

export const POST_CONTENT_V2_BARCODES_OPERATION_ID =
  "POST /content/v2/barcodes";

const definition: WbOperationDefinition<PostContentV2BarcodesResponse> = {
  operationId: POST_CONTENT_V2_BARCODES_OPERATION_ID,
  method: "POST",
  path: "/content/v2/barcodes",
  productionOrigin: "https://content-api.wildberries.ru",
  sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostContentV2BarcodesResponse,
  source: "https://dev.wildberries.ru/docs/openapi/items",
  verifiedAt: "2026-08-17",
};

export function executePostContentV2Barcodes(
  execute: WbOperationExecutor,
  input: PostContentV2BarcodesInput,
  options: WbRequestOptions = {},
): Promise<PostContentV2BarcodesResponse> {
  return execute(definition, input, options);
}
