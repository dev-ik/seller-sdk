// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1WarehouseRemainsResponse } from "./contract.js";
import type {
  GetV1WarehouseRemainsInput,
  GetV1WarehouseRemainsResponse,
} from "./types.js";

export const GET_V1_WAREHOUSE_REMAINS_OPERATION_ID = "getV1WarehouseRemains";

const definition: WbOperationDefinition<GetV1WarehouseRemainsResponse> = {
  operationId: GET_V1_WAREHOUSE_REMAINS_OPERATION_ID,
  method: "GET",
  path: "/api/v1/warehouse_remains",
  productionOrigin: "https://seller-analytics-api.wildberries.ru",
  parameters: [
    { name: "locale", location: "query", required: false, array: false },
    { name: "groupByBrand", location: "query", required: false, array: false },
    {
      name: "groupBySubject",
      location: "query",
      required: false,
      array: false,
    },
    { name: "groupBySa", location: "query", required: false, array: false },
    { name: "groupByNm", location: "query", required: false, array: false },
    {
      name: "groupByBarcode",
      location: "query",
      required: false,
      array: false,
    },
    { name: "groupBySize", location: "query", required: false, array: false },
    { name: "filterPics", location: "query", required: false, array: false },
    { name: "filterVolume", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1WarehouseRemainsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/reports",
  verifiedAt: "2026-08-17",
};

export function executeGetV1WarehouseRemains(
  execute: WbOperationExecutor,
  input?: GetV1WarehouseRemainsInput,
  options: WbRequestOptions = {},
): Promise<GetV1WarehouseRemainsResponse> {
  return execute(definition, input ?? {}, options);
}
