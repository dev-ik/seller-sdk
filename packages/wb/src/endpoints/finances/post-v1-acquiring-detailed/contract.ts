// Generated runtime response contract for this Wildberries endpoint.
import { financesComponents } from "../../../contracts/finances.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV1AcquiringDetailedResponse } from "./types.js";

const postV1AcquiringDetailedResponse200Schema =
  createWbSchema<PostV1AcquiringDetailedResponse>(
    {
      kind: "array",
      items: { kind: "ref", name: "AcquiringReportsDetailedRes" },
    },
    financesComponents,
  );

export function parsePostV1AcquiringDetailedResponse(
  status: number,
  input: unknown,
): PostV1AcquiringDetailedResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV1AcquiringDetailedResponse200Schema,
        input,
        "postV1AcquiringDetailed",
      );
    case 204:
      return undefined;
    default:
      return unexpectedWbSuccessStatus("postV1AcquiringDetailed", status);
  }
}
