// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostApiV2UploadTaskClubDiscountResponse } from "./contract.js";
import type {
  PostApiV2UploadTaskClubDiscountInput,
  PostApiV2UploadTaskClubDiscountResponse,
} from "./types.js";

export const POST_API_V2_UPLOAD_TASK_CLUB_DISCOUNT_OPERATION_ID =
  "POST /api/v2/upload/task/club-discount";

const definition: WbOperationDefinition<PostApiV2UploadTaskClubDiscountResponse> =
  {
    operationId: POST_API_V2_UPLOAD_TASK_CLUB_DISCOUNT_OPERATION_ID,
    method: "POST",
    path: "/api/v2/upload/task/club-discount",
    productionOrigin: "https://discounts-prices-api.wildberries.ru",
    sandboxOrigin: "https://discounts-prices-api-sandbox.wildberries.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePostApiV2UploadTaskClubDiscountResponse,
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  };

export function executePostApiV2UploadTaskClubDiscount(
  execute: WbOperationExecutor,
  input: PostApiV2UploadTaskClubDiscountInput,
  options: WbRequestOptions = {},
): Promise<PostApiV2UploadTaskClubDiscountResponse> {
  return execute(definition, input, options);
}
