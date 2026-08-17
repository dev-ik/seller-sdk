// Generated runtime response contract for this Wildberries endpoint.
import { dbsComponents } from "../../../contracts/dbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3DbsOrdersStatusRejectResponse } from "./types.js";

const postV3DbsOrdersStatusRejectResponse200Schema =
  createWbSchema<PostV3DbsOrdersStatusRejectResponse>(
    { kind: "ref", name: "api.StatusSetResponses" },
    dbsComponents,
  );

export function parsePostV3DbsOrdersStatusRejectResponse(
  status: number,
  input: unknown,
): PostV3DbsOrdersStatusRejectResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3DbsOrdersStatusRejectResponse200Schema,
        input,
        "postV3DbsOrdersStatusReject",
      );
    default:
      return unexpectedWbSuccessStatus("postV3DbsOrdersStatusReject", status);
  }
}
