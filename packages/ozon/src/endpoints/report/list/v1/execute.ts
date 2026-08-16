import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { listReportsV1ResponseSchema } from "./contract.js";
import type { ListReportsV1Request, ListReportsV1Response } from "./types.js";
export const LIST_REPORTS_V1_OPERATION_ID = "ReportAPI_ReportList";
export async function executeListReportsV1(
  transport: Transport,
  input: ListReportsV1Request,
  options: OzonRequestOptions = {},
): Promise<ListReportsV1Response> {
  const response = await transport.request({
    operationId: LIST_REPORTS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/report/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listReportsV1ResponseSchema,
    response.body,
    LIST_REPORTS_V1_OPERATION_ID,
  );
}
