// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV2SeacatSaveAdResponse } from "./contract.js";
import type {
  PostV2SeacatSaveAdInput,
  PostV2SeacatSaveAdResponse,
} from "./types.js";

export const POST_V2_SEACAT_SAVE_AD_OPERATION_ID = "postV2SeacatSaveAd";

const definition: WbOperationDefinition<PostV2SeacatSaveAdResponse> = {
  operationId: POST_V2_SEACAT_SAVE_AD_OPERATION_ID,
  method: "POST",
  path: "/adv/v2/seacat/save-ad",
  productionOrigin: "https://advert-api.wildberries.ru",
  sandboxOrigin: "https://advert-api-sandbox.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV2SeacatSaveAdResponse,
  source: "https://dev.wildberries.ru/docs/openapi/promotion",
  verifiedAt: "2026-08-17",
};

export function executePostV2SeacatSaveAd(
  execute: WbOperationExecutor,
  input?: PostV2SeacatSaveAdInput,
  options: WbRequestOptions = {},
): Promise<PostV2SeacatSaveAdResponse> {
  return execute(definition, input ?? {}, options);
}
