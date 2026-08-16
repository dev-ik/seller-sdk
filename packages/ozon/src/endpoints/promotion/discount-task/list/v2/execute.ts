import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { listDiscountTasksV2ResponseSchema } from "./contract.js";
import type {
  ListDiscountTasksV2Request,
  ListDiscountTasksV2Response,
} from "./types.js";

export const LIST_DISCOUNT_TASKS_V2_OPERATION_ID = "GetDiscountTaskListV2";

export async function executeListDiscountTasksV2(
  transport: Transport,
  input: ListDiscountTasksV2Request = {},
  options: OzonRequestOptions = {},
): Promise<ListDiscountTasksV2Response> {
  const response = await transport.request({
    operationId: LIST_DISCOUNT_TASKS_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/actions/discounts-task/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listDiscountTasksV2ResponseSchema,
    response.body,
    LIST_DISCOUNT_TASKS_V2_OPERATION_ID,
  );
}
