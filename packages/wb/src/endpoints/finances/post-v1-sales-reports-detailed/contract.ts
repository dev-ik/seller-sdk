// Generated runtime response contract for this Wildberries endpoint.
import { financesComponents } from "../../../contracts/finances.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV1SalesReportsDetailedResponse } from "./types.js";

const postV1SalesReportsDetailedResponse200Schema =
  createWbSchema<PostV1SalesReportsDetailedResponse>(
    { kind: "array", items: { kind: "ref", name: "SalesReportsDetailedRes" } },
    financesComponents,
  );

export function parsePostV1SalesReportsDetailedResponse(
  status: number,
  input: unknown,
): PostV1SalesReportsDetailedResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV1SalesReportsDetailedResponse200Schema,
        input,
        "postV1SalesReportsDetailed",
      );
    case 204:
      return undefined;
    default:
      return unexpectedWbSuccessStatus("postV1SalesReportsDetailed", status);
  }
}
