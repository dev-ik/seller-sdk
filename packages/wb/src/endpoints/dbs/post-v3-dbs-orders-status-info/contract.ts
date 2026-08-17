// Generated runtime response contract for this Wildberries endpoint.
import { dbsComponents } from "../../../contracts/dbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3DbsOrdersStatusInfoResponse } from "./types.js";

const postV3DbsOrdersStatusInfoResponse200Schema =
  createWbSchema<PostV3DbsOrdersStatusInfoResponse>(
    { kind: "ref", name: "api.OrderStatusesV2" },
    dbsComponents,
  );

export function parsePostV3DbsOrdersStatusInfoResponse(
  status: number,
  input: unknown,
): PostV3DbsOrdersStatusInfoResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3DbsOrdersStatusInfoResponse200Schema,
        input,
        "postV3DbsOrdersStatusInfo",
      );
    default:
      return unexpectedWbSuccessStatus("postV3DbsOrdersStatusInfo", status);
  }
}
