// Generated runtime response contract for this Wildberries endpoint.
import { financesComponents } from "../../../contracts/finances.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV1SalesReportsDetailedReportIdResponse } from "./types.js";

const postV1SalesReportsDetailedReportIdResponse200Schema =
  createWbSchema<PostV1SalesReportsDetailedReportIdResponse>(
    { kind: "array", items: { kind: "ref", name: "SalesReportsDetailedRes" } },
    financesComponents,
  );

export function parsePostV1SalesReportsDetailedReportIdResponse(
  status: number,
  input: unknown,
): PostV1SalesReportsDetailedReportIdResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV1SalesReportsDetailedReportIdResponse200Schema,
        input,
        "postV1SalesReportsDetailedReportId",
      );
    case 204:
      return undefined;
    default:
      return unexpectedWbSuccessStatus(
        "postV1SalesReportsDetailedReportId",
        status,
      );
  }
}
