// Generated runtime response contract for this Wildberries endpoint.
import { dbsComponents } from "../../../contracts/dbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3DbsOrdersStatusCancelResponse } from "./types.js";

const postV3DbsOrdersStatusCancelResponse200Schema =
  createWbSchema<PostV3DbsOrdersStatusCancelResponse>(
    { kind: "ref", name: "api.StatusSetResponses" },
    dbsComponents,
  );

export function parsePostV3DbsOrdersStatusCancelResponse(
  status: number,
  input: unknown,
): PostV3DbsOrdersStatusCancelResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3DbsOrdersStatusCancelResponse200Schema,
        input,
        "postV3DbsOrdersStatusCancel",
      );
    default:
      return unexpectedWbSuccessStatus("postV3DbsOrdersStatusCancel", status);
  }
}
