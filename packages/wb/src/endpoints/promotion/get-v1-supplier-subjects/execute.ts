// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1SupplierSubjectsResponse } from "./contract.js";
import type {
  GetV1SupplierSubjectsInput,
  GetV1SupplierSubjectsResponse,
} from "./types.js";

export const GET_V1_SUPPLIER_SUBJECTS_OPERATION_ID = "getV1SupplierSubjects";

const definition: WbOperationDefinition<GetV1SupplierSubjectsResponse> = {
  operationId: GET_V1_SUPPLIER_SUBJECTS_OPERATION_ID,
  method: "GET",
  path: "/adv/v1/supplier/subjects",
  productionOrigin: "https://advert-api.wildberries.ru",
  sandboxOrigin: "https://advert-api-sandbox.wildberries.ru",
  parameters: [
    { name: "payment_type", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1SupplierSubjectsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/promotion",
  verifiedAt: "2026-08-17",
};

export function executeGetV1SupplierSubjects(
  execute: WbOperationExecutor,
  input?: GetV1SupplierSubjectsInput,
  options: WbRequestOptions = {},
): Promise<GetV1SupplierSubjectsResponse> {
  return execute(definition, input ?? {}, options);
}
