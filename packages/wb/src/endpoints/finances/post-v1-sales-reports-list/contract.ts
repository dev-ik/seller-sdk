// Generated runtime response contract for this Wildberries endpoint.
import { financesComponents } from "../../../contracts/finances.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV1SalesReportsListResponse } from "./types.js";

const postV1SalesReportsListResponse200Schema =
  createWbSchema<PostV1SalesReportsListResponse>(
    { kind: "array", items: { kind: "ref", name: "SalesReportListRes" } },
    financesComponents,
  );

export function parsePostV1SalesReportsListResponse(
  status: number,
  input: unknown,
): PostV1SalesReportsListResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV1SalesReportsListResponse200Schema,
        input,
        "postV1SalesReportsList",
      );
    case 204:
      return undefined;
    default:
      return unexpectedWbSuccessStatus("postV1SalesReportsList", status);
  }
}
