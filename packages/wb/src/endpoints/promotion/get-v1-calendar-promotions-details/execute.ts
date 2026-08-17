// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1CalendarPromotionsDetailsResponse } from "./contract.js";
import type {
  GetV1CalendarPromotionsDetailsInput,
  GetV1CalendarPromotionsDetailsResponse,
} from "./types.js";

export const GET_V1_CALENDAR_PROMOTIONS_DETAILS_OPERATION_ID =
  "getV1CalendarPromotionsDetails";

const definition: WbOperationDefinition<GetV1CalendarPromotionsDetailsResponse> =
  {
    operationId: GET_V1_CALENDAR_PROMOTIONS_DETAILS_OPERATION_ID,
    method: "GET",
    path: "/api/v1/calendar/promotions/details",
    productionOrigin: "https://dp-calendar-api.wildberries.ru",
    parameters: [
      { name: "promotionIDs", location: "query", required: true, array: true },
    ],
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseGetV1CalendarPromotionsDetailsResponse,
    source: "https://dev.wildberries.ru/docs/openapi/promotion",
    verifiedAt: "2026-08-17",
  };

export function executeGetV1CalendarPromotionsDetails(
  execute: WbOperationExecutor,
  input: GetV1CalendarPromotionsDetailsInput,
  options: WbRequestOptions = {},
): Promise<GetV1CalendarPromotionsDetailsResponse> {
  return execute(definition, input, options);
}
