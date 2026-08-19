// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetReturnPhotoResponse } from "./contract.js";
import type { GetReturnPhotoInput, GetReturnPhotoResponse } from "./types.js";

export const GET_RETURN_PHOTO_OPERATION_ID = "getReturnPhoto";

const definition: YmOperationDefinition<GetReturnPhotoResponse> = {
  operationId: GET_RETURN_PHOTO_OPERATION_ID,
  method: "GET",
  path: "/v2/campaigns/{campaignId}/orders/{orderId}/returns/{returnId}/decision/{itemId}/image/{imageHash}",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
    { name: "orderId", location: "path", required: true, array: false },
    { name: "returnId", location: "path", required: true, array: false },
    { name: "itemId", location: "path", required: true, array: false },
    { name: "imageHash", location: "path", required: true, array: false },
  ],
  retrySafety: "safe",
  responseType: "array-buffer",
  accept: "image/jpeg",
  parseResponse: parseGetReturnPhotoResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetReturnPhoto(
  execute: YmOperationExecutor,
  input: GetReturnPhotoInput,
  options: YmRequestOptions = {},
): Promise<GetReturnPhotoResponse> {
  return execute(definition, input, options);
}
