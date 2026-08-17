// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV1AcquiringListResponse } from "./contract.js";
import type {
  PostV1AcquiringListInput,
  PostV1AcquiringListResponse,
} from "./types.js";

export const POST_V1_ACQUIRING_LIST_OPERATION_ID = "postV1AcquiringList";

const definition: WbOperationDefinition<PostV1AcquiringListResponse> = {
  operationId: POST_V1_ACQUIRING_LIST_OPERATION_ID,
  method: "POST",
  path: "/api/finance/v1/acquiring/list",
  productionOrigin: "https://finance-api.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV1AcquiringListResponse,
  source: "https://dev.wildberries.ru/docs/openapi/finances",
  verifiedAt: "2026-08-17",
};

export function executePostV1AcquiringList(
  execute: WbOperationExecutor,
  input: PostV1AcquiringListInput,
  options: WbRequestOptions = {},
): Promise<PostV1AcquiringListResponse> {
  return execute(definition, input, options);
}
