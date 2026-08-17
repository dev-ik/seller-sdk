// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePatchV1QuestionsResponse } from "./contract.js";
import type {
  PatchV1QuestionsInput,
  PatchV1QuestionsResponse,
} from "./types.js";

export const PATCH_V1_QUESTIONS_OPERATION_ID = "patchV1Questions";

const definition: WbOperationDefinition<PatchV1QuestionsResponse> = {
  operationId: PATCH_V1_QUESTIONS_OPERATION_ID,
  method: "PATCH",
  path: "/api/v1/questions",
  productionOrigin: "https://feedbacks-api.wildberries.ru",
  sandboxOrigin: "https://feedbacks-api-sandbox.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePatchV1QuestionsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/communications",
  verifiedAt: "2026-08-17",
};

export function executePatchV1Questions(
  execute: WbOperationExecutor,
  input?: PatchV1QuestionsInput,
  options: WbRequestOptions = {},
): Promise<PatchV1QuestionsResponse> {
  return execute(definition, input ?? {}, options);
}
