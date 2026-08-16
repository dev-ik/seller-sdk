import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { getRealizationPostingReportV1ResponseSchema } from "./contract.js";
import type {
  GetRealizationPostingReportV1Request,
  GetRealizationPostingReportV1Response,
} from "./types.js";

export const GET_REALIZATION_POSTING_REPORT_V1_OPERATION_ID =
  "FinanceAPI_GetRealizationReportV1";

export async function executeGetRealizationPostingReportV1(
  transport: Transport,
  input: GetRealizationPostingReportV1Request,
  options: OzonRequestOptions = {},
): Promise<GetRealizationPostingReportV1Response> {
  const response = await transport.request({
    operationId: GET_REALIZATION_POSTING_REPORT_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/finance/realization/posting",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getRealizationPostingReportV1ResponseSchema,
    response.body,
    GET_REALIZATION_POSTING_REPORT_V1_OPERATION_ID,
  );
}
