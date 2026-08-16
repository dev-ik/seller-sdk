import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { createMutualSettlementReportV1ResponseSchema } from "./contract.js";
import type {
  CreateMutualSettlementReportV1Request,
  CreateMutualSettlementReportV1Response,
} from "./types.js";

export const CREATE_MUTUAL_SETTLEMENT_REPORT_V1_OPERATION_ID =
  "ReportAPI_CreateMutualSettlementReport";

export async function executeCreateMutualSettlementReportV1(
  transport: Transport,
  input: CreateMutualSettlementReportV1Request,
  options: OzonRequestOptions = {},
): Promise<CreateMutualSettlementReportV1Response> {
  const response = await transport.request({
    operationId: CREATE_MUTUAL_SETTLEMENT_REPORT_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/finance/mutual-settlement",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    createMutualSettlementReportV1ResponseSchema,
    response.body,
    CREATE_MUTUAL_SETTLEMENT_REPORT_V1_OPERATION_ID,
  );
}
