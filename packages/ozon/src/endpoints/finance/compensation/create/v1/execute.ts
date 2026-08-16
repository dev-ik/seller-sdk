import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { createCompensationReportV1ResponseSchema } from "./contract.js";
import type {
  CreateCompensationReportV1Request,
  CreateCompensationReportV1Response,
} from "./types.js";

export const CREATE_COMPENSATION_REPORT_V1_OPERATION_ID =
  "ReportAPI_GetCompensationReport";

export async function executeCreateCompensationReportV1(
  transport: Transport,
  input: CreateCompensationReportV1Request,
  options: OzonRequestOptions = {},
): Promise<CreateCompensationReportV1Response> {
  const response = await transport.request({
    operationId: CREATE_COMPENSATION_REPORT_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/finance/compensation",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    createCompensationReportV1ResponseSchema,
    response.body,
    CREATE_COMPENSATION_REPORT_V1_OPERATION_ID,
  );
}
