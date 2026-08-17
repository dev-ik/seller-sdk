// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostApiV2UploadTaskClubDiscountResponse } from "./types.js";

const postApiV2UploadTaskClubDiscountResponse200Schema =
  createWbSchema<PostApiV2UploadTaskClubDiscountResponse>(
    { kind: "ref", name: "TaskCreated" },
    itemsComponents,
  );
const postApiV2UploadTaskClubDiscountResponse208Schema =
  createWbSchema<PostApiV2UploadTaskClubDiscountResponse>(
    { kind: "ref", name: "RequestAlreadyExistsError" },
    itemsComponents,
  );

export function parsePostApiV2UploadTaskClubDiscountResponse(
  status: number,
  input: unknown,
): PostApiV2UploadTaskClubDiscountResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postApiV2UploadTaskClubDiscountResponse200Schema,
        input,
        "POST /api/v2/upload/task/club-discount",
      );
    case 208:
      return parseWbResponse(
        postApiV2UploadTaskClubDiscountResponse208Schema,
        input,
        "POST /api/v2/upload/task/club-discount",
      );
    default:
      return unexpectedWbSuccessStatus(
        "POST /api/v2/upload/task/club-discount",
        status,
      );
  }
}
