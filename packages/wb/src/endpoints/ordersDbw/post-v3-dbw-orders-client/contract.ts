// Generated runtime response contract for this Wildberries endpoint.
import { ordersDbwComponents } from "../../../contracts/ordersDbw.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3DbwOrdersClientResponse } from "./types.js";

const postV3DbwOrdersClientResponse200Schema =
  createWbSchema<PostV3DbwOrdersClientResponse>(
    { kind: "ref", name: "ClientInfoResp" },
    ordersDbwComponents,
  );

export function parsePostV3DbwOrdersClientResponse(
  status: number,
  input: unknown,
): PostV3DbwOrdersClientResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3DbwOrdersClientResponse200Schema,
        input,
        "postV3DbwOrdersClient",
      );
    default:
      return unexpectedWbSuccessStatus("postV3DbwOrdersClient", status);
  }
}
