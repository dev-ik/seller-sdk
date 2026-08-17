// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetContentV2ObjectCharcsSubjectIdResponse } from "./contract.js";
import type {
  GetContentV2ObjectCharcsSubjectIdInput,
  GetContentV2ObjectCharcsSubjectIdResponse,
} from "./types.js";

export const GET_CONTENT_V2_OBJECT_CHARCS_SUBJECT_ID_OPERATION_ID =
  "GET /content/v2/object/charcs/{subjectId}";

const definition: WbOperationDefinition<GetContentV2ObjectCharcsSubjectIdResponse> =
  {
    operationId: GET_CONTENT_V2_OBJECT_CHARCS_SUBJECT_ID_OPERATION_ID,
    method: "GET",
    path: "/content/v2/object/charcs/{subjectId}",
    productionOrigin: "https://content-api.wildberries.ru",
    sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
    parameters: [
      { name: "subjectId", location: "path", required: true, array: false },
      { name: "locale", location: "query", required: false, array: false },
    ],
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseGetContentV2ObjectCharcsSubjectIdResponse,
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  };

export function executeGetContentV2ObjectCharcsSubjectId(
  execute: WbOperationExecutor,
  input: GetContentV2ObjectCharcsSubjectIdInput,
  options: WbRequestOptions = {},
): Promise<GetContentV2ObjectCharcsSubjectIdResponse> {
  return execute(definition, input, options);
}
