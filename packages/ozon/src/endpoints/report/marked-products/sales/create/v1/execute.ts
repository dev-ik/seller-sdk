import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { createMarkedProductsSalesReportV1ResponseSchema } from "./contract.js";
import type {
  CreateMarkedProductsSalesReportV1Request,
  CreateMarkedProductsSalesReportV1Response,
} from "./types.js";

export const CREATE_MARKED_PRODUCTS_SALES_REPORT_V1_OPERATION_ID =
  "CreateCompanyMarkedProductsSalesReport";

export async function executeCreateMarkedProductsSalesReportV1(
  transport: Transport,
  input: CreateMarkedProductsSalesReportV1Request,
  options: OzonRequestOptions = {},
): Promise<CreateMarkedProductsSalesReportV1Response> {
  const response = await transport.request({
    operationId: CREATE_MARKED_PRODUCTS_SALES_REPORT_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/report/marked-products-sales/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    createMarkedProductsSalesReportV1ResponseSchema,
    response.body,
    CREATE_MARKED_PRODUCTS_SALES_REPORT_V1_OPERATION_ID,
  );
}
