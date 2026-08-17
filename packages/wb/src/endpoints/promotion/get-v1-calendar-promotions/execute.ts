// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1CalendarPromotionsResponse } from "./contract.js";
import type {
  GetV1CalendarPromotionsInput,
  GetV1CalendarPromotionsResponse,
} from "./types.js";

export const GET_V1_CALENDAR_PROMOTIONS_OPERATION_ID =
  "getV1CalendarPromotions";

const definition: WbOperationDefinition<GetV1CalendarPromotionsResponse> = {
  operationId: GET_V1_CALENDAR_PROMOTIONS_OPERATION_ID,
  method: "GET",
  path: "/api/v1/calendar/promotions",
  productionOrigin: "https://dp-calendar-api.wildberries.ru",
  parameters: [
    { name: "startDateTime", location: "query", required: true, array: false },
    { name: "endDateTime", location: "query", required: true, array: false },
    { name: "allPromo", location: "query", required: true, array: false },
    { name: "limit", location: "query", required: false, array: false },
    { name: "offset", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1CalendarPromotionsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/promotion",
  verifiedAt: "2026-08-17",
};

export function executeGetV1CalendarPromotions(
  execute: WbOperationExecutor,
  input: GetV1CalendarPromotionsInput,
  options: WbRequestOptions = {},
): Promise<GetV1CalendarPromotionsResponse> {
  return execute(definition, input, options);
}
