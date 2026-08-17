// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1SellerDownloadIdResponse } from "./contract.js";
import type {
  GetV1SellerDownloadIdInput,
  GetV1SellerDownloadIdResponse,
} from "./types.js";

export const GET_V1_SELLER_DOWNLOAD_ID_OPERATION_ID = "getV1SellerDownloadId";

const definition: WbOperationDefinition<GetV1SellerDownloadIdResponse> = {
  operationId: GET_V1_SELLER_DOWNLOAD_ID_OPERATION_ID,
  method: "GET",
  path: "/api/v1/seller/download/{id}",
  productionOrigin: "https://buyer-chat-api.wildberries.ru",
  parameters: [{ name: "id", location: "path", required: true, array: false }],
  retrySafety: "safe",
  responseType: "auto",
  accept: "application/pdf, application/json",
  parseResponse: parseGetV1SellerDownloadIdResponse,
  source: "https://dev.wildberries.ru/docs/openapi/communications",
  verifiedAt: "2026-08-17",
};

export function executeGetV1SellerDownloadId(
  execute: WbOperationExecutor,
  input: GetV1SellerDownloadIdInput,
  options: WbRequestOptions = {},
): Promise<GetV1SellerDownloadIdResponse> {
  return execute(definition, input, options);
}
