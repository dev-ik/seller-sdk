// Generated runtime response contract for this Wildberries endpoint.
import { financesComponents } from "../../../contracts/finances.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV1AcquiringDetailedReportIdResponse } from "./types.js";

const postV1AcquiringDetailedReportIdResponse200Schema =
  createWbSchema<PostV1AcquiringDetailedReportIdResponse>(
    {
      kind: "array",
      items: { kind: "ref", name: "AcquiringReportsDetailedRes" },
    },
    financesComponents,
  );

export function parsePostV1AcquiringDetailedReportIdResponse(
  status: number,
  input: unknown,
): PostV1AcquiringDetailedReportIdResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV1AcquiringDetailedReportIdResponse200Schema,
        input,
        "postV1AcquiringDetailedReportId",
      );
    case 204:
      return undefined;
    default:
      return unexpectedWbSuccessStatus(
        "postV1AcquiringDetailedReportId",
        status,
      );
  }
}
