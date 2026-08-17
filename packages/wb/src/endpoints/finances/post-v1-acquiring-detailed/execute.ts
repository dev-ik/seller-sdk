// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV1AcquiringDetailedResponse } from "./contract.js";
import type {
  PostV1AcquiringDetailedInput,
  PostV1AcquiringDetailedResponse,
} from "./types.js";

export const POST_V1_ACQUIRING_DETAILED_OPERATION_ID =
  "postV1AcquiringDetailed";

const definition: WbOperationDefinition<PostV1AcquiringDetailedResponse> = {
  operationId: POST_V1_ACQUIRING_DETAILED_OPERATION_ID,
  method: "POST",
  path: "/api/finance/v1/acquiring/detailed",
  productionOrigin: "https://finance-api.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV1AcquiringDetailedResponse,
  source: "https://dev.wildberries.ru/docs/openapi/finances",
  verifiedAt: "2026-08-17",
};

export function executePostV1AcquiringDetailed(
  execute: WbOperationExecutor,
  input: PostV1AcquiringDetailedInput,
  options: WbRequestOptions = {},
): Promise<PostV1AcquiringDetailedResponse> {
  return execute(definition, input, options);
}
