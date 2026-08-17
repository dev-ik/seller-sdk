// Generated runtime response contract for this Wildberries endpoint.
import { dbsComponents } from "../../../contracts/dbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3DbsOrdersB2bInfoResponse } from "./types.js";

const postV3DbsOrdersB2bInfoResponse200Schema =
  createWbSchema<PostV3DbsOrdersB2bInfoResponse>(
    { kind: "ref", name: "api.B2bClientInfoResponses" },
    dbsComponents,
  );

export function parsePostV3DbsOrdersB2bInfoResponse(
  status: number,
  input: unknown,
): PostV3DbsOrdersB2bInfoResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3DbsOrdersB2bInfoResponse200Schema,
        input,
        "postV3DbsOrdersB2bInfo",
      );
    default:
      return unexpectedWbSuccessStatus("postV3DbsOrdersB2bInfo", status);
  }
}
