// Generated runtime response contract for this Wildberries endpoint.
import { ordersFbsComponents } from "../../../contracts/ordersFbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostApiV3PassesResponse } from "./types.js";

const postApiV3PassesResponse201Schema =
  createWbSchema<PostApiV3PassesResponse>(
    {
      kind: "object",
      properties: { id: { kind: "number", integer: true } },
      required: [],
    },
    ordersFbsComponents,
  );

export function parsePostApiV3PassesResponse(
  status: number,
  input: unknown,
): PostApiV3PassesResponse {
  switch (status) {
    case 201:
      return parseWbResponse(
        postApiV3PassesResponse201Schema,
        input,
        "POST /api/v3/passes",
      );
    default:
      return unexpectedWbSuccessStatus("POST /api/v3/passes", status);
  }
}
