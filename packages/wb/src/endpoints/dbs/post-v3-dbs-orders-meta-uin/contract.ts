// Generated runtime response contract for this Wildberries endpoint.
import { dbsComponents } from "../../../contracts/dbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3DbsOrdersMetaUinResponse } from "./types.js";

const postV3DbsOrdersMetaUinResponse200Schema =
  createWbSchema<PostV3DbsOrdersMetaUinResponse>(
    { kind: "ref", name: "api.StatusSetResponses" },
    dbsComponents,
  );

export function parsePostV3DbsOrdersMetaUinResponse(
  status: number,
  input: unknown,
): PostV3DbsOrdersMetaUinResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3DbsOrdersMetaUinResponse200Schema,
        input,
        "postV3DbsOrdersMetaUin",
      );
    default:
      return unexpectedWbSuccessStatus("postV3DbsOrdersMetaUin", status);
  }
}
