// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostApiV2UploadTaskResponse } from "./types.js";

const postApiV2UploadTaskResponse200Schema =
  createWbSchema<PostApiV2UploadTaskResponse>(
    { kind: "ref", name: "TaskCreated" },
    itemsComponents,
  );
const postApiV2UploadTaskResponse208Schema =
  createWbSchema<PostApiV2UploadTaskResponse>(
    { kind: "ref", name: "RequestAlreadyExistsError" },
    itemsComponents,
  );

export function parsePostApiV2UploadTaskResponse(
  status: number,
  input: unknown,
): PostApiV2UploadTaskResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postApiV2UploadTaskResponse200Schema,
        input,
        "POST /api/v2/upload/task",
      );
    case 208:
      return parseWbResponse(
        postApiV2UploadTaskResponse208Schema,
        input,
        "POST /api/v2/upload/task",
      );
    default:
      return unexpectedWbSuccessStatus("POST /api/v2/upload/task", status);
  }
}
