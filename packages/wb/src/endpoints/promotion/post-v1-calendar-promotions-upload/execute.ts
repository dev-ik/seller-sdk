// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV1CalendarPromotionsUploadResponse } from "./contract.js";
import type {
  PostV1CalendarPromotionsUploadInput,
  PostV1CalendarPromotionsUploadResponse,
} from "./types.js";

export const POST_V1_CALENDAR_PROMOTIONS_UPLOAD_OPERATION_ID =
  "postV1CalendarPromotionsUpload";

const definition: WbOperationDefinition<PostV1CalendarPromotionsUploadResponse> =
  {
    operationId: POST_V1_CALENDAR_PROMOTIONS_UPLOAD_OPERATION_ID,
    method: "POST",
    path: "/api/v1/calendar/promotions/upload",
    productionOrigin: "https://dp-calendar-api.wildberries.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePostV1CalendarPromotionsUploadResponse,
    source: "https://dev.wildberries.ru/docs/openapi/promotion",
    verifiedAt: "2026-08-17",
  };

export function executePostV1CalendarPromotionsUpload(
  execute: WbOperationExecutor,
  input: PostV1CalendarPromotionsUploadInput,
  options: WbRequestOptions = {},
): Promise<PostV1CalendarPromotionsUploadResponse> {
  return execute(definition, input, options);
}
