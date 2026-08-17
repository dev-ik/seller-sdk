// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1SuppliesIdPackageResponse } from "./contract.js";
import type {
  GetV1SuppliesIdPackageInput,
  GetV1SuppliesIdPackageResponse,
} from "./types.js";

export const GET_V1_SUPPLIES_ID_PACKAGE_OPERATION_ID = "getV1SuppliesIdPackage";

const definition: WbOperationDefinition<GetV1SuppliesIdPackageResponse> = {
  operationId: GET_V1_SUPPLIES_ID_PACKAGE_OPERATION_ID,
  method: "GET",
  path: "/api/v1/supplies/{ID}/package",
  productionOrigin: "https://supplies-api.wildberries.ru",
  parameters: [{ name: "ID", location: "path", required: true, array: false }],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1SuppliesIdPackageResponse,
  source: "https://dev.wildberries.ru/docs/openapi/orders-fbw",
  verifiedAt: "2026-08-17",
};

export function executeGetV1SuppliesIdPackage(
  execute: WbOperationExecutor,
  input: GetV1SuppliesIdPackageInput,
  options: WbRequestOptions = {},
): Promise<GetV1SuppliesIdPackageResponse> {
  return execute(definition, input, options);
}
