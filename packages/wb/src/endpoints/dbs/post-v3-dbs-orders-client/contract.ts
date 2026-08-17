// Generated runtime response contract for this Wildberries endpoint.
import { dbsComponents } from "../../../contracts/dbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3DbsOrdersClientResponse } from "./types.js";

const postV3DbsOrdersClientResponse200Schema =
  createWbSchema<PostV3DbsOrdersClientResponse>(
    { kind: "ref", name: "DbsOnlyClientInfoResp" },
    dbsComponents,
  );

export function parsePostV3DbsOrdersClientResponse(
  status: number,
  input: unknown,
): PostV3DbsOrdersClientResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3DbsOrdersClientResponse200Schema,
        input,
        "postV3DbsOrdersClient",
      );
    default:
      return unexpectedWbSuccessStatus("postV3DbsOrdersClient", status);
  }
}
