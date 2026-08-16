import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { getFinanceBalanceV1ResponseSchema } from "./contract.js";
import type {
  GetFinanceBalanceV1Request,
  GetFinanceBalanceV1Response,
} from "./types.js";

export const GET_FINANCE_BALANCE_V1_OPERATION_ID = "GetFinanceBalanceV1";

export async function executeGetFinanceBalanceV1(
  transport: Transport,
  input: GetFinanceBalanceV1Request,
  options: OzonRequestOptions = {},
): Promise<GetFinanceBalanceV1Response> {
  const response = await transport.request({
    operationId: GET_FINANCE_BALANCE_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/finance/balance",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getFinanceBalanceV1ResponseSchema,
    response.body,
    GET_FINANCE_BALANCE_V1_OPERATION_ID,
  );
}
