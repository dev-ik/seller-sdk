import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { getRealizationReportByDayV1ResponseSchema } from "./contract.js";
import type {
  GetRealizationReportByDayV1Request,
  GetRealizationReportByDayV1Response,
} from "./types.js";

export const GET_REALIZATION_REPORT_BY_DAY_V1_OPERATION_ID =
  "FinanceAPI_GetRealizationByDayReportV1";

export async function executeGetRealizationReportByDayV1(
  transport: Transport,
  input: GetRealizationReportByDayV1Request,
  options: OzonRequestOptions = {},
): Promise<GetRealizationReportByDayV1Response> {
  const response = await transport.request({
    operationId: GET_REALIZATION_REPORT_BY_DAY_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/finance/realization/by-day",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getRealizationReportByDayV1ResponseSchema,
    response.body,
    GET_REALIZATION_REPORT_BY_DAY_V1_OPERATION_ID,
  );
}
