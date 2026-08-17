// Generated runtime response contract for this Wildberries endpoint.
import { financesComponents } from "../../../contracts/finances.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1DocumentsDownloadResponse } from "./types.js";

const getV1DocumentsDownloadResponse200Schema =
  createWbSchema<GetV1DocumentsDownloadResponse>(
    { kind: "ref", name: "GetDoc" },
    financesComponents,
  );

export function parseGetV1DocumentsDownloadResponse(
  status: number,
  input: unknown,
): GetV1DocumentsDownloadResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1DocumentsDownloadResponse200Schema,
        input,
        "getV1DocumentsDownload",
      );
    default:
      return unexpectedWbSuccessStatus("getV1DocumentsDownload", status);
  }
}
