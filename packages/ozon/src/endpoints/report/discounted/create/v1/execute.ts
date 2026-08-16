import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { createDiscountedReportV1ResponseSchema } from "./contract.js";
import type {
  CreateDiscountedReportV1Request,
  CreateDiscountedReportV1Response,
} from "./types.js";
export const CREATE_DISCOUNTED_REPORT_V1_OPERATION_ID =
  "ReportAPI_CreateDiscountedReport";
export async function executeCreateDiscountedReportV1(
  transport: Transport,
  input: CreateDiscountedReportV1Request = {},
  options: OzonRequestOptions = {},
): Promise<CreateDiscountedReportV1Response> {
  const response = await transport.request({
    operationId: CREATE_DISCOUNTED_REPORT_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/report/discounted/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    createDiscountedReportV1ResponseSchema,
    response.body,
    CREATE_DISCOUNTED_REPORT_V1_OPERATION_ID,
  );
}
