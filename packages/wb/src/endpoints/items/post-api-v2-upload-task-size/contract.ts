// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostApiV2UploadTaskSizeResponse } from "./types.js";

const postApiV2UploadTaskSizeResponse200Schema =
  createWbSchema<PostApiV2UploadTaskSizeResponse>(
    { kind: "ref", name: "TaskCreated" },
    itemsComponents,
  );
const postApiV2UploadTaskSizeResponse208Schema =
  createWbSchema<PostApiV2UploadTaskSizeResponse>(
    { kind: "ref", name: "RequestAlreadyExistsError" },
    itemsComponents,
  );

export function parsePostApiV2UploadTaskSizeResponse(
  status: number,
  input: unknown,
): PostApiV2UploadTaskSizeResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postApiV2UploadTaskSizeResponse200Schema,
        input,
        "POST /api/v2/upload/task/size",
      );
    case 208:
      return parseWbResponse(
        postApiV2UploadTaskSizeResponse208Schema,
        input,
        "POST /api/v2/upload/task/size",
      );
    default:
      return unexpectedWbSuccessStatus("POST /api/v2/upload/task/size", status);
  }
}
