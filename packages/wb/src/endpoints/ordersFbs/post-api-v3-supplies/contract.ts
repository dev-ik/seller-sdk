// Generated runtime response contract for this Wildberries endpoint.
import { ordersFbsComponents } from "../../../contracts/ordersFbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostApiV3SuppliesResponse } from "./types.js";

const postApiV3SuppliesResponse201Schema =
  createWbSchema<PostApiV3SuppliesResponse>(
    { kind: "object", properties: { id: { kind: "string" } }, required: [] },
    ordersFbsComponents,
  );

export function parsePostApiV3SuppliesResponse(
  status: number,
  input: unknown,
): PostApiV3SuppliesResponse {
  switch (status) {
    case 201:
      return parseWbResponse(
        postApiV3SuppliesResponse201Schema,
        input,
        "POST /api/v3/supplies",
      );
    default:
      return unexpectedWbSuccessStatus("POST /api/v3/supplies", status);
  }
}
