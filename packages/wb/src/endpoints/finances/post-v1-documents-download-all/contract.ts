// Generated runtime response contract for this Wildberries endpoint.
import { financesComponents } from "../../../contracts/finances.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV1DocumentsDownloadAllResponse } from "./types.js";

const postV1DocumentsDownloadAllResponse200Schema =
  createWbSchema<PostV1DocumentsDownloadAllResponse>(
    { kind: "ref", name: "GetDocs" },
    financesComponents,
  );

export function parsePostV1DocumentsDownloadAllResponse(
  status: number,
  input: unknown,
): PostV1DocumentsDownloadAllResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV1DocumentsDownloadAllResponse200Schema,
        input,
        "postV1DocumentsDownloadAll",
      );
    default:
      return unexpectedWbSuccessStatus("postV1DocumentsDownloadAll", status);
  }
}
