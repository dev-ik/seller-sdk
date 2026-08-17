// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV1StocksReportWbWarehousesResponse } from "./contract.js";
import type {
  PostV1StocksReportWbWarehousesInput,
  PostV1StocksReportWbWarehousesResponse,
} from "./types.js";

export const POST_V1_STOCKS_REPORT_WB_WAREHOUSES_OPERATION_ID =
  "postV1StocksReportWbWarehouses";

const definition: WbOperationDefinition<PostV1StocksReportWbWarehousesResponse> =
  {
    operationId: POST_V1_STOCKS_REPORT_WB_WAREHOUSES_OPERATION_ID,
    method: "POST",
    path: "/api/analytics/v1/stocks-report/wb-warehouses",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePostV1StocksReportWbWarehousesResponse,
    source: "https://dev.wildberries.ru/docs/openapi/analytics",
    verifiedAt: "2026-08-17",
  };

export function executePostV1StocksReportWbWarehouses(
  execute: WbOperationExecutor,
  input: PostV1StocksReportWbWarehousesInput,
  options: WbRequestOptions = {},
): Promise<PostV1StocksReportWbWarehousesResponse> {
  return execute(definition, input, options);
}
