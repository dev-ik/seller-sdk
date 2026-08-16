import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { createDecompensationReportV1ResponseSchema } from "./contract.js";
import type {
  CreateDecompensationReportV1Request,
  CreateDecompensationReportV1Response,
} from "./types.js";

export const CREATE_DECOMPENSATION_REPORT_V1_OPERATION_ID =
  "ReportAPI_GetDecompensationReport";

export async function executeCreateDecompensationReportV1(
  transport: Transport,
  input: CreateDecompensationReportV1Request,
  options: OzonRequestOptions = {},
): Promise<CreateDecompensationReportV1Response> {
  const response = await transport.request({
    operationId: CREATE_DECOMPENSATION_REPORT_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/finance/decompensation",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    createDecompensationReportV1ResponseSchema,
    response.body,
    CREATE_DECOMPENSATION_REPORT_V1_OPERATION_ID,
  );
}
