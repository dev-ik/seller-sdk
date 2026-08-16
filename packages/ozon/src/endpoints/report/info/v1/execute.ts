import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { getReportInfoV1ResponseSchema } from "./contract.js";
import type {
  GetReportInfoV1Request,
  GetReportInfoV1Response,
} from "./types.js";
export const GET_REPORT_INFO_V1_OPERATION_ID = "ReportAPI_ReportInfo";
export async function executeGetReportInfoV1(
  transport: Transport,
  input: GetReportInfoV1Request,
  options: OzonRequestOptions = {},
): Promise<GetReportInfoV1Response> {
  const response = await transport.request({
    operationId: GET_REPORT_INFO_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/report/info",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getReportInfoV1ResponseSchema,
    response.body,
    GET_REPORT_INFO_V1_OPERATION_ID,
  );
}
