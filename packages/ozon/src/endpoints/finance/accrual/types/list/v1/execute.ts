import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { listFinanceAccrualTypesV1ResponseSchema } from "./contract.js";
import type { ListFinanceAccrualTypesV1Response } from "./types.js";

export const LIST_FINANCE_ACCRUAL_TYPES_V1_OPERATION_ID =
  "GetFinanceAccrualTypes";

export async function executeListFinanceAccrualTypesV1(
  transport: Transport,
  options: OzonRequestOptions = {},
): Promise<ListFinanceAccrualTypesV1Response> {
  const response = await transport.request({
    operationId: LIST_FINANCE_ACCRUAL_TYPES_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/finance/accrual/types",
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listFinanceAccrualTypesV1ResponseSchema,
    response.body,
    LIST_FINANCE_ACCRUAL_TYPES_V1_OPERATION_ID,
  );
}
