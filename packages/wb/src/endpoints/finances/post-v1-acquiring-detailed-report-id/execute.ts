// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV1AcquiringDetailedReportIdResponse } from "./contract.js";
import type {
  PostV1AcquiringDetailedReportIdInput,
  PostV1AcquiringDetailedReportIdResponse,
} from "./types.js";

export const POST_V1_ACQUIRING_DETAILED_REPORT_ID_OPERATION_ID =
  "postV1AcquiringDetailedReportId";

const definition: WbOperationDefinition<PostV1AcquiringDetailedReportIdResponse> =
  {
    operationId: POST_V1_ACQUIRING_DETAILED_REPORT_ID_OPERATION_ID,
    method: "POST",
    path: "/api/finance/v1/acquiring/detailed/{reportId}",
    productionOrigin: "https://finance-api.wildberries.ru",
    parameters: [
      { name: "reportId", location: "path", required: true, array: false },
    ],
    requestContentType: "application/json",
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePostV1AcquiringDetailedReportIdResponse,
    source: "https://dev.wildberries.ru/docs/openapi/finances",
    verifiedAt: "2026-08-17",
  };

export function executePostV1AcquiringDetailedReportId(
  execute: WbOperationExecutor,
  input: PostV1AcquiringDetailedReportIdInput,
  options: WbRequestOptions = {},
): Promise<PostV1AcquiringDetailedReportIdResponse> {
  return execute(definition, input, options);
}
