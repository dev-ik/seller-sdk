// Generated runtime response contract for this Wildberries endpoint.
import { dbsComponents } from "../../../contracts/dbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3DbsOrdersStatusConfirmResponse } from "./types.js";

const postV3DbsOrdersStatusConfirmResponse200Schema =
  createWbSchema<PostV3DbsOrdersStatusConfirmResponse>(
    { kind: "ref", name: "api.StatusSetResponses" },
    dbsComponents,
  );

export function parsePostV3DbsOrdersStatusConfirmResponse(
  status: number,
  input: unknown,
): PostV3DbsOrdersStatusConfirmResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3DbsOrdersStatusConfirmResponse200Schema,
        input,
        "postV3DbsOrdersStatusConfirm",
      );
    default:
      return unexpectedWbSuccessStatus("postV3DbsOrdersStatusConfirm", status);
  }
}
