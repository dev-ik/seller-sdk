import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { createRealizationPostingReportV1ResponseSchema } from "./contract.js";
import type {
  CreateRealizationPostingReportV1Request,
  CreateRealizationPostingReportV1Response,
} from "./types.js";

export const CREATE_REALIZATION_POSTING_REPORT_V1_OPERATION_ID =
  "CreateCompanyFinanceRealizationPostingReport";

export async function executeCreateRealizationPostingReportV1(
  transport: Transport,
  input: CreateRealizationPostingReportV1Request,
  options: OzonRequestOptions = {},
): Promise<CreateRealizationPostingReportV1Response> {
  const response = await transport.request({
    operationId: CREATE_REALIZATION_POSTING_REPORT_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/report/realization/posting/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    createRealizationPostingReportV1ResponseSchema,
    response.body,
    CREATE_REALIZATION_POSTING_REPORT_V1_OPERATION_ID,
  );
}
