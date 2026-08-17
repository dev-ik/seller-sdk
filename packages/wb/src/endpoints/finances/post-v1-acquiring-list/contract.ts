// Generated runtime response contract for this Wildberries endpoint.
import { financesComponents } from "../../../contracts/finances.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV1AcquiringListResponse } from "./types.js";

const postV1AcquiringListResponse200Schema =
  createWbSchema<PostV1AcquiringListResponse>(
    { kind: "array", items: { kind: "ref", name: "AcquiringReportListRes" } },
    financesComponents,
  );

export function parsePostV1AcquiringListResponse(
  status: number,
  input: unknown,
): PostV1AcquiringListResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV1AcquiringListResponse200Schema,
        input,
        "postV1AcquiringList",
      );
    case 204:
      return undefined;
    default:
      return unexpectedWbSuccessStatus("postV1AcquiringList", status);
  }
}
