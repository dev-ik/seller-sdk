// Generated runtime response contract for this Wildberries endpoint.
import { dbsComponents } from "../../../contracts/dbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3DbsOrdersMetaDeleteResponse } from "./types.js";

const postV3DbsOrdersMetaDeleteResponse200Schema =
  createWbSchema<PostV3DbsOrdersMetaDeleteResponse>(
    { kind: "ref", name: "api.StatusSetResponses" },
    dbsComponents,
  );

export function parsePostV3DbsOrdersMetaDeleteResponse(
  status: number,
  input: unknown,
): PostV3DbsOrdersMetaDeleteResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3DbsOrdersMetaDeleteResponse200Schema,
        input,
        "postV3DbsOrdersMetaDelete",
      );
    default:
      return unexpectedWbSuccessStatus("postV3DbsOrdersMetaDelete", status);
  }
}
