// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetApiMarketplaceV3FbsOrdersArchiveResponse } from "./contract.js";
import type {
  GetApiMarketplaceV3FbsOrdersArchiveInput,
  GetApiMarketplaceV3FbsOrdersArchiveResponse,
} from "./types.js";

export const GET_API_MARKETPLACE_V3_FBS_ORDERS_ARCHIVE_OPERATION_ID =
  "GET /api/marketplace/v3/fbs/orders/archive";

const definition: WbOperationDefinition<GetApiMarketplaceV3FbsOrdersArchiveResponse> =
  {
    operationId: GET_API_MARKETPLACE_V3_FBS_ORDERS_ARCHIVE_OPERATION_ID,
    method: "GET",
    path: "/api/marketplace/v3/fbs/orders/archive",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    parameters: [
      { name: "year", location: "query", required: true, array: false },
      { name: "month", location: "query", required: true, array: false },
      { name: "next", location: "query", required: true, array: false },
      { name: "limit", location: "query", required: true, array: false },
    ],
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseGetApiMarketplaceV3FbsOrdersArchiveResponse,
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  };

export function executeGetApiMarketplaceV3FbsOrdersArchive(
  execute: WbOperationExecutor,
  input: GetApiMarketplaceV3FbsOrdersArchiveInput,
  options: WbRequestOptions = {},
): Promise<GetApiMarketplaceV3FbsOrdersArchiveResponse> {
  return execute(definition, input, options);
}
