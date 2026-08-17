// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV2SearchReportTableGroupsResponse } from "./contract.js";
import type {
  PostV2SearchReportTableGroupsInput,
  PostV2SearchReportTableGroupsResponse,
} from "./types.js";

export const POST_V2_SEARCH_REPORT_TABLE_GROUPS_OPERATION_ID =
  "postV2SearchReportTableGroups";

const definition: WbOperationDefinition<PostV2SearchReportTableGroupsResponse> =
  {
    operationId: POST_V2_SEARCH_REPORT_TABLE_GROUPS_OPERATION_ID,
    method: "POST",
    path: "/api/v2/search-report/table/groups",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePostV2SearchReportTableGroupsResponse,
    source: "https://dev.wildberries.ru/docs/openapi/analytics",
    verifiedAt: "2026-08-17",
  };

export function executePostV2SearchReportTableGroups(
  execute: WbOperationExecutor,
  input: PostV2SearchReportTableGroupsInput,
  options: WbRequestOptions = {},
): Promise<PostV2SearchReportTableGroupsResponse> {
  return execute(definition, input, options);
}
