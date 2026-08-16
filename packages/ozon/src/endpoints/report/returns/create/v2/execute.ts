import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { createReportResponseSchema } from "../../../shared/contract.js";
import type {
  CreateReturnsReportV2Request,
  CreateReturnsReportV2Response,
} from "./types.js";
export const CREATE_RETURNS_REPORT_V2_OPERATION_ID =
  "ReportAPI_ReportReturnsCreate";
export async function executeCreateReturnsReportV2(
  transport: Transport,
  input: CreateReturnsReportV2Request,
  options: OzonRequestOptions = {},
): Promise<CreateReturnsReportV2Response> {
  const response = await transport.request({
    operationId: CREATE_RETURNS_REPORT_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/report/returns/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    createReportResponseSchema,
    response.body,
    CREATE_RETURNS_REPORT_V2_OPERATION_ID,
  );
}
