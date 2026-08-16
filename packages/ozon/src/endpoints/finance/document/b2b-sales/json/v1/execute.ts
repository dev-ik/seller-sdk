import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { getB2BSalesJsonReportV1ResponseSchema } from "./contract.js";
import type {
  GetB2BSalesJsonReportV1Request,
  GetB2BSalesJsonReportV1Response,
} from "./types.js";

export const GET_B2B_SALES_JSON_REPORT_V1_OPERATION_ID =
  "ReportAPI_CreateDocumentB2BSalesJSONReport";

export async function executeGetB2BSalesJsonReportV1(
  transport: Transport,
  input: GetB2BSalesJsonReportV1Request,
  options: OzonRequestOptions = {},
): Promise<GetB2BSalesJsonReportV1Response> {
  const response = await transport.request({
    operationId: GET_B2B_SALES_JSON_REPORT_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/finance/document-b2b-sales/json",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getB2BSalesJsonReportV1ResponseSchema,
    response.body,
    GET_B2B_SALES_JSON_REPORT_V1_OPERATION_ID,
  );
}
