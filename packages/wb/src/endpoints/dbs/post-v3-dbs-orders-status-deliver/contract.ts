// Generated runtime response contract for this Wildberries endpoint.
import { dbsComponents } from "../../../contracts/dbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3DbsOrdersStatusDeliverResponse } from "./types.js";

const postV3DbsOrdersStatusDeliverResponse200Schema =
  createWbSchema<PostV3DbsOrdersStatusDeliverResponse>(
    { kind: "ref", name: "api.StatusSetDeliverResponses" },
    dbsComponents,
  );

export function parsePostV3DbsOrdersStatusDeliverResponse(
  status: number,
  input: unknown,
): PostV3DbsOrdersStatusDeliverResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3DbsOrdersStatusDeliverResponse200Schema,
        input,
        "postV3DbsOrdersStatusDeliver",
      );
    default:
      return unexpectedWbSuccessStatus("postV3DbsOrdersStatusDeliver", status);
  }
}
