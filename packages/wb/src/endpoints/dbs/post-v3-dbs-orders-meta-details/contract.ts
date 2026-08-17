// Generated runtime response contract for this Wildberries endpoint.
import { dbsComponents } from "../../../contracts/dbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3DbsOrdersMetaDetailsResponse } from "./types.js";

const postV3DbsOrdersMetaDetailsResponse200Schema =
  createWbSchema<PostV3DbsOrdersMetaDetailsResponse>(
    { kind: "ref", name: "api.OrdersMetaDetailsResponse" },
    dbsComponents,
  );

export function parsePostV3DbsOrdersMetaDetailsResponse(
  status: number,
  input: unknown,
): PostV3DbsOrdersMetaDetailsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3DbsOrdersMetaDetailsResponse200Schema,
        input,
        "postV3DbsOrdersMetaDetails",
      );
    default:
      return unexpectedWbSuccessStatus("postV3DbsOrdersMetaDetails", status);
  }
}
