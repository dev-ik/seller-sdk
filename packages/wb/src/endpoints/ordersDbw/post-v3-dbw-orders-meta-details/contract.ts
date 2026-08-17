// Generated runtime response contract for this Wildberries endpoint.
import { ordersDbwComponents } from "../../../contracts/ordersDbw.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3DbwOrdersMetaDetailsResponse } from "./types.js";

const postV3DbwOrdersMetaDetailsResponse200Schema =
  createWbSchema<PostV3DbwOrdersMetaDetailsResponse>(
    { kind: "ref", name: "api.OrdersMetaDetailsResponse" },
    ordersDbwComponents,
  );

export function parsePostV3DbwOrdersMetaDetailsResponse(
  status: number,
  input: unknown,
): PostV3DbwOrdersMetaDetailsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3DbwOrdersMetaDetailsResponse200Schema,
        input,
        "postV3DbwOrdersMetaDetails",
      );
    default:
      return unexpectedWbSuccessStatus("postV3DbwOrdersMetaDetails", status);
  }
}
