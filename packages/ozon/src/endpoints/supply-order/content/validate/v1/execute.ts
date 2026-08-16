import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { validateSupplyOrderContentResponseSchema } from "./contract.js";
import type {
  ValidateSupplyOrderContentRequest,
  ValidateSupplyOrderContentResponse,
} from "./types.js";
export const VALIDATE_SUPPLY_ORDER_CONTENT_OPERATION_ID =
  "SupplyOrderContentUpdateValidation";
export async function executeValidateSupplyOrderContent(
  transport: Transport,
  input: ValidateSupplyOrderContentRequest,
  options: OzonRequestOptions = {},
): Promise<ValidateSupplyOrderContentResponse> {
  const response = await transport.request({
    operationId: VALIDATE_SUPPLY_ORDER_CONTENT_OPERATION_ID,
    method: "POST",
    path: "/v1/supply-order/content/update/validation",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    validateSupplyOrderContentResponseSchema,
    response.body,
    VALIDATE_SUPPLY_ORDER_CONTENT_OPERATION_ID,
  );
}
