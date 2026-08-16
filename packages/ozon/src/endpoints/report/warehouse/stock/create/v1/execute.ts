import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { createReportResponseSchema } from "../../../../shared/contract.js";
import type {
  CreateWarehouseStockReportV1Request,
  CreateWarehouseStockReportV1Response,
} from "./types.js";
export const CREATE_WAREHOUSE_STOCK_REPORT_V1_OPERATION_ID =
  "ReportAPI_CreateStockByWarehouseReport";
export async function executeCreateWarehouseStockReportV1(
  transport: Transport,
  input: CreateWarehouseStockReportV1Request,
  options: OzonRequestOptions = {},
): Promise<CreateWarehouseStockReportV1Response> {
  const response = await transport.request({
    operationId: CREATE_WAREHOUSE_STOCK_REPORT_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/report/warehouse/stock",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    createReportResponseSchema,
    response.body,
    CREATE_WAREHOUSE_STOCK_REPORT_V1_OPERATION_ID,
  );
}
