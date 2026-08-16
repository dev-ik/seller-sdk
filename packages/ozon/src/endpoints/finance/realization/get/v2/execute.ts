import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { getRealizationReportV2ResponseSchema } from "./contract.js";
import type {
  GetRealizationReportV2Request,
  GetRealizationReportV2Response,
} from "./types.js";

export const GET_REALIZATION_REPORT_V2_OPERATION_ID =
  "FinanceAPI_GetRealizationReportV2";

export async function executeGetRealizationReportV2(
  transport: Transport,
  input: GetRealizationReportV2Request,
  options: OzonRequestOptions = {},
): Promise<GetRealizationReportV2Response> {
  const response = await transport.request({
    operationId: GET_REALIZATION_REPORT_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/finance/realization",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getRealizationReportV2ResponseSchema,
    response.body,
    GET_REALIZATION_REPORT_V2_OPERATION_ID,
  );
}
