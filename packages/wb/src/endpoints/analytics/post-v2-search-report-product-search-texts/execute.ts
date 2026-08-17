// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV2SearchReportProductSearchTextsResponse } from "./contract.js";
import type {
  PostV2SearchReportProductSearchTextsInput,
  PostV2SearchReportProductSearchTextsResponse,
} from "./types.js";

export const POST_V2_SEARCH_REPORT_PRODUCT_SEARCH_TEXTS_OPERATION_ID =
  "postV2SearchReportProductSearchTexts";

const definition: WbOperationDefinition<PostV2SearchReportProductSearchTextsResponse> =
  {
    operationId: POST_V2_SEARCH_REPORT_PRODUCT_SEARCH_TEXTS_OPERATION_ID,
    method: "POST",
    path: "/api/v2/search-report/product/search-texts",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePostV2SearchReportProductSearchTextsResponse,
    source: "https://dev.wildberries.ru/docs/openapi/analytics",
    verifiedAt: "2026-08-17",
  };

export function executePostV2SearchReportProductSearchTexts(
  execute: WbOperationExecutor,
  input: PostV2SearchReportProductSearchTextsInput,
  options: WbRequestOptions = {},
): Promise<PostV2SearchReportProductSearchTextsResponse> {
  return execute(definition, input, options);
}
