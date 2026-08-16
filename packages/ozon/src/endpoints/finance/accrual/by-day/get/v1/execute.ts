import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { getFinanceAccrualByDayV1ResponseSchema } from "./contract.js";
import type {
  GetFinanceAccrualByDayV1Request,
  GetFinanceAccrualByDayV1Response,
} from "./types.js";

export const GET_FINANCE_ACCRUAL_BY_DAY_V1_OPERATION_ID =
  "GetFinanceAccrualByDay";

export async function executeGetFinanceAccrualByDayV1(
  transport: Transport,
  input: GetFinanceAccrualByDayV1Request,
  options: OzonRequestOptions = {},
): Promise<GetFinanceAccrualByDayV1Response> {
  const response = await transport.request({
    operationId: GET_FINANCE_ACCRUAL_BY_DAY_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/finance/accrual/by-day",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getFinanceAccrualByDayV1ResponseSchema,
    response.body,
    GET_FINANCE_ACCRUAL_BY_DAY_V1_OPERATION_ID,
  );
}
