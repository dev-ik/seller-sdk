// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1FeedbacksArchiveResponse } from "./contract.js";
import type {
  GetV1FeedbacksArchiveInput,
  GetV1FeedbacksArchiveResponse,
} from "./types.js";

export const GET_V1_FEEDBACKS_ARCHIVE_OPERATION_ID = "getV1FeedbacksArchive";

const definition: WbOperationDefinition<GetV1FeedbacksArchiveResponse> = {
  operationId: GET_V1_FEEDBACKS_ARCHIVE_OPERATION_ID,
  method: "GET",
  path: "/api/v1/feedbacks/archive",
  productionOrigin: "https://feedbacks-api.wildberries.ru",
  sandboxOrigin: "https://feedbacks-api-sandbox.wildberries.ru",
  parameters: [
    { name: "nmId", location: "query", required: false, array: false },
    { name: "take", location: "query", required: true, array: false },
    { name: "skip", location: "query", required: true, array: false },
    { name: "order", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1FeedbacksArchiveResponse,
  source: "https://dev.wildberries.ru/docs/openapi/communications",
  verifiedAt: "2026-08-17",
};

export function executeGetV1FeedbacksArchive(
  execute: WbOperationExecutor,
  input: GetV1FeedbacksArchiveInput,
  options: WbRequestOptions = {},
): Promise<GetV1FeedbacksArchiveResponse> {
  return execute(definition, input, options);
}
