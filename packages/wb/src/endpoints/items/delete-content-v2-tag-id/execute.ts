// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseDeleteContentV2TagIdResponse } from "./contract.js";
import type {
  DeleteContentV2TagIdInput,
  DeleteContentV2TagIdResponse,
} from "./types.js";

export const DELETE_CONTENT_V2_TAG_ID_OPERATION_ID =
  "DELETE /content/v2/tag/{id}";

const definition: WbOperationDefinition<DeleteContentV2TagIdResponse> = {
  operationId: DELETE_CONTENT_V2_TAG_ID_OPERATION_ID,
  method: "DELETE",
  path: "/content/v2/tag/{id}",
  productionOrigin: "https://content-api.wildberries.ru",
  sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
  parameters: [{ name: "id", location: "path", required: true, array: false }],
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseDeleteContentV2TagIdResponse,
  source: "https://dev.wildberries.ru/docs/openapi/items",
  verifiedAt: "2026-08-17",
};

export function executeDeleteContentV2TagId(
  execute: WbOperationExecutor,
  input: DeleteContentV2TagIdInput,
  options: WbRequestOptions = {},
): Promise<DeleteContentV2TagIdResponse> {
  return execute(definition, input, options);
}
