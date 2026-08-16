import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { createReportResponseSchema } from "../../../shared/contract.js";
import type {
  CreateProductsReportV1Request,
  CreateProductsReportV1Response,
} from "./types.js";
export const CREATE_PRODUCTS_REPORT_V1_OPERATION_ID =
  "ReportAPI_CreateCompanyProductsReport";
export async function executeCreateProductsReportV1(
  transport: Transport,
  input: CreateProductsReportV1Request,
  options: OzonRequestOptions = {},
): Promise<CreateProductsReportV1Response> {
  const response = await transport.request({
    operationId: CREATE_PRODUCTS_REPORT_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/report/products/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    createReportResponseSchema,
    response.body,
    CREATE_PRODUCTS_REPORT_V1_OPERATION_ID,
  );
}
