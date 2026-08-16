import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { listFinanceTransactionsV3ResponseSchema } from "./contract.js";
import type {
  ListFinanceTransactionsV3Request,
  ListFinanceTransactionsV3Response,
} from "./types.js";

export const LIST_FINANCE_TRANSACTIONS_V3_OPERATION_ID =
  "FinanceAPI_FinanceTransactionListV3";

export async function executeListFinanceTransactionsV3(
  transport: Transport,
  input: ListFinanceTransactionsV3Request,
  options: OzonRequestOptions = {},
): Promise<ListFinanceTransactionsV3Response> {
  const response = await transport.request({
    operationId: LIST_FINANCE_TRANSACTIONS_V3_OPERATION_ID,
    method: "POST",
    path: "/v3/finance/transaction/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listFinanceTransactionsV3ResponseSchema,
    response.body,
    LIST_FINANCE_TRANSACTIONS_V3_OPERATION_ID,
  );
}
