import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { createB2BSalesReportV1ResponseSchema } from "./contract.js";
import type {
  CreateB2BSalesReportV1Request,
  CreateB2BSalesReportV1Response,
} from "./types.js";

export const CREATE_B2B_SALES_REPORT_V1_OPERATION_ID =
  "ReportAPI_CreateDocumentB2BSalesReport";

export async function executeCreateB2BSalesReportV1(
  transport: Transport,
  input: CreateB2BSalesReportV1Request,
  options: OzonRequestOptions = {},
): Promise<CreateB2BSalesReportV1Response> {
  const response = await transport.request({
    operationId: CREATE_B2B_SALES_REPORT_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/finance/document-b2b-sales",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    createB2BSalesReportV1ResponseSchema,
    response.body,
    CREATE_B2B_SALES_REPORT_V1_OPERATION_ID,
  );
}
