import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { createReportResponseSchema } from "../../../shared/contract.js";
import type {
  CreatePostingsReportV1Request,
  CreatePostingsReportV1Response,
} from "./types.js";
export const CREATE_POSTINGS_REPORT_V1_OPERATION_ID =
  "ReportAPI_CreateCompanyPostingsReport";
export async function executeCreatePostingsReportV1(
  transport: Transport,
  input: CreatePostingsReportV1Request,
  options: OzonRequestOptions = {},
): Promise<CreatePostingsReportV1Response> {
  const response = await transport.request({
    operationId: CREATE_POSTINGS_REPORT_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/report/postings/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    createReportResponseSchema,
    response.body,
    CREATE_POSTINGS_REPORT_V1_OPERATION_ID,
  );
}
