// Generated runtime response contract for this Wildberries endpoint.
import { dbsComponents } from "../../../contracts/dbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3DbsOrdersMetaGtinResponse } from "./types.js";

const postV3DbsOrdersMetaGtinResponse200Schema =
  createWbSchema<PostV3DbsOrdersMetaGtinResponse>(
    { kind: "ref", name: "api.StatusSetResponses" },
    dbsComponents,
  );

export function parsePostV3DbsOrdersMetaGtinResponse(
  status: number,
  input: unknown,
): PostV3DbsOrdersMetaGtinResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3DbsOrdersMetaGtinResponse200Schema,
        input,
        "postV3DbsOrdersMetaGtin",
      );
    default:
      return unexpectedWbSuccessStatus("postV3DbsOrdersMetaGtin", status);
  }
}
