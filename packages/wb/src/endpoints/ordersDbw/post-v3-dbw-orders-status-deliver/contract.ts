// Generated runtime response contract for this Wildberries endpoint.
import { ordersDbwComponents } from "../../../contracts/ordersDbw.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3DbwOrdersStatusDeliverResponse } from "./types.js";

const postV3DbwOrdersStatusDeliverResponse200Schema =
  createWbSchema<PostV3DbwOrdersStatusDeliverResponse>(
    { kind: "ref", name: "api.StatusSetResponses" },
    ordersDbwComponents,
  );

export function parsePostV3DbwOrdersStatusDeliverResponse(
  status: number,
  input: unknown,
): PostV3DbwOrdersStatusDeliverResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3DbwOrdersStatusDeliverResponse200Schema,
        input,
        "postV3DbwOrdersStatusDeliver",
      );
    default:
      return unexpectedWbSuccessStatus("postV3DbwOrdersStatusDeliver", status);
  }
}
