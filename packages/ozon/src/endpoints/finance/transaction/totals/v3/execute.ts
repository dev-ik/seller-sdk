import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { getFinanceTransactionTotalsV3ResponseSchema } from "./contract.js";
import type {
  GetFinanceTransactionTotalsV3Request,
  GetFinanceTransactionTotalsV3Response,
} from "./types.js";

export const GET_FINANCE_TRANSACTION_TOTALS_V3_OPERATION_ID =
  "FinanceAPI_FinanceTransactionTotalV3";

export async function executeGetFinanceTransactionTotalsV3(
  transport: Transport,
  input: GetFinanceTransactionTotalsV3Request,
  options: OzonRequestOptions = {},
): Promise<GetFinanceTransactionTotalsV3Response> {
  const response = await transport.request({
    operationId: GET_FINANCE_TRANSACTION_TOTALS_V3_OPERATION_ID,
    method: "POST",
    path: "/v3/finance/transaction/totals",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getFinanceTransactionTotalsV3ResponseSchema,
    response.body,
    GET_FINANCE_TRANSACTION_TOTALS_V3_OPERATION_ID,
  );
}
