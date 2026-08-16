import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { getFinanceAccrualPostingsV1ResponseSchema } from "./contract.js";
import type {
  GetFinanceAccrualPostingsV1Request,
  GetFinanceAccrualPostingsV1Response,
} from "./types.js";

export const GET_FINANCE_ACCRUAL_POSTINGS_V1_OPERATION_ID =
  "GetFinanceAccrualPostings";

export async function executeGetFinanceAccrualPostingsV1(
  transport: Transport,
  input: GetFinanceAccrualPostingsV1Request,
  options: OzonRequestOptions = {},
): Promise<GetFinanceAccrualPostingsV1Response> {
  const response = await transport.request({
    operationId: GET_FINANCE_ACCRUAL_POSTINGS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/finance/accrual/postings",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getFinanceAccrualPostingsV1ResponseSchema,
    response.body,
    GET_FINANCE_ACCRUAL_POSTINGS_V1_OPERATION_ID,
  );
}
