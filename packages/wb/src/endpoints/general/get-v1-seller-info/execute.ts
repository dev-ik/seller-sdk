// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1SellerInfoResponse } from "./contract.js";
import type { GetV1SellerInfoResponse } from "./types.js";

export const GET_V1_SELLER_INFO_OPERATION_ID = "getV1SellerInfo";

const definition: WbOperationDefinition<GetV1SellerInfoResponse> = {
  operationId: GET_V1_SELLER_INFO_OPERATION_ID,
  method: "GET",
  path: "/api/v1/seller-info",
  productionOrigin: "https://common-api.wildberries.ru",
  parameters: [],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1SellerInfoResponse,
  source: "https://dev.wildberries.ru/docs/openapi/api-information",
  verifiedAt: "2026-08-17",
};

export function executeGetV1SellerInfo(
  execute: WbOperationExecutor,
  options: WbRequestOptions = {},
): Promise<GetV1SellerInfoResponse> {
  return execute(definition, undefined, options);
}
