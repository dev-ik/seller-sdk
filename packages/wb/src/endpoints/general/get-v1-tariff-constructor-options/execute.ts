// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1TariffConstructorOptionsResponse } from "./contract.js";
import type {
  GetV1TariffConstructorOptionsInput,
  GetV1TariffConstructorOptionsResponse,
} from "./types.js";

export const GET_V1_TARIFF_CONSTRUCTOR_OPTIONS_OPERATION_ID =
  "getV1TariffConstructorOptions";

const definition: WbOperationDefinition<GetV1TariffConstructorOptionsResponse> =
  {
    operationId: GET_V1_TARIFF_CONSTRUCTOR_OPTIONS_OPERATION_ID,
    method: "GET",
    path: "/api/common/v1/tariff-constructor/options",
    productionOrigin: "https://common-api.wildberries.ru",
    parameters: [
      { name: "locale", location: "query", required: false, array: false },
    ],
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseGetV1TariffConstructorOptionsResponse,
    source: "https://dev.wildberries.ru/docs/openapi/api-information",
    verifiedAt: "2026-08-17",
  };

export function executeGetV1TariffConstructorOptions(
  execute: WbOperationExecutor,
  input?: GetV1TariffConstructorOptionsInput,
  options: WbRequestOptions = {},
): Promise<GetV1TariffConstructorOptionsResponse> {
  return execute(definition, input ?? {}, options);
}
