// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1CalendarPromotionsNomenclaturesResponse } from "./contract.js";
import type {
  GetV1CalendarPromotionsNomenclaturesInput,
  GetV1CalendarPromotionsNomenclaturesResponse,
} from "./types.js";

export const GET_V1_CALENDAR_PROMOTIONS_NOMENCLATURES_OPERATION_ID =
  "getV1CalendarPromotionsNomenclatures";

const definition: WbOperationDefinition<GetV1CalendarPromotionsNomenclaturesResponse> =
  {
    operationId: GET_V1_CALENDAR_PROMOTIONS_NOMENCLATURES_OPERATION_ID,
    method: "GET",
    path: "/api/v1/calendar/promotions/nomenclatures",
    productionOrigin: "https://dp-calendar-api.wildberries.ru",
    parameters: [
      { name: "promotionID", location: "query", required: true, array: false },
      { name: "inAction", location: "query", required: true, array: false },
      { name: "limit", location: "query", required: false, array: false },
      { name: "offset", location: "query", required: false, array: false },
    ],
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseGetV1CalendarPromotionsNomenclaturesResponse,
    source: "https://dev.wildberries.ru/docs/openapi/promotion",
    verifiedAt: "2026-08-17",
  };

export function executeGetV1CalendarPromotionsNomenclatures(
  execute: WbOperationExecutor,
  input: GetV1CalendarPromotionsNomenclaturesInput,
  options: WbRequestOptions = {},
): Promise<GetV1CalendarPromotionsNomenclaturesResponse> {
  return execute(definition, input, options);
}
