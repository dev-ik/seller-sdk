import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { listFinanceCashFlowV1ResponseSchema } from "./contract.js";
import type {
  ListFinanceCashFlowV1Request,
  ListFinanceCashFlowV1Response,
} from "./types.js";
export const LIST_FINANCE_CASH_FLOW_V1_OPERATION_ID =
  "FinanceAPI_FinanceCashFlowStatementList";
export async function executeListFinanceCashFlowV1(
  transport: Transport,
  input: ListFinanceCashFlowV1Request,
  options: OzonRequestOptions = {},
): Promise<ListFinanceCashFlowV1Response> {
  const response = await transport.request({
    operationId: LIST_FINANCE_CASH_FLOW_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/finance/cash-flow-statement/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listFinanceCashFlowV1ResponseSchema,
    response.body,
    LIST_FINANCE_CASH_FLOW_V1_OPERATION_ID,
  );
}
