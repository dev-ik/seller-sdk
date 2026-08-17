// Generated runtime response contract for this Wildberries endpoint.
import { dbsComponents } from "../../../contracts/dbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3DbsGroupsInfoResponse } from "./types.js";

const postV3DbsGroupsInfoResponse200Schema =
  createWbSchema<PostV3DbsGroupsInfoResponse>(
    { kind: "ref", name: "api.OrderGroup" },
    dbsComponents,
  );

export function parsePostV3DbsGroupsInfoResponse(
  status: number,
  input: unknown,
): PostV3DbsGroupsInfoResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3DbsGroupsInfoResponse200Schema,
        input,
        "postV3DbsGroupsInfo",
      );
    default:
      return unexpectedWbSuccessStatus("postV3DbsGroupsInfo", status);
  }
}
