// Generated runtime response contract for this Wildberries endpoint.
import { ordersDbwComponents } from "../../../contracts/ordersDbw.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3DbwOrdersMetaSgtinResponse } from "./types.js";

const postV3DbwOrdersMetaSgtinResponse200Schema =
  createWbSchema<PostV3DbwOrdersMetaSgtinResponse>(
    { kind: "ref", name: "api.StatusSetResponses" },
    ordersDbwComponents,
  );

export function parsePostV3DbwOrdersMetaSgtinResponse(
  status: number,
  input: unknown,
): PostV3DbwOrdersMetaSgtinResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3DbwOrdersMetaSgtinResponse200Schema,
        input,
        "postV3DbwOrdersMetaSgtin",
      );
    default:
      return unexpectedWbSuccessStatus("postV3DbwOrdersMetaSgtin", status);
  }
}
