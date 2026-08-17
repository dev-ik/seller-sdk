// Generated runtime response contract for this Wildberries endpoint.
import { ordersFbwComponents } from "../../../contracts/ordersFbw.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV1SuppliesResponse } from "./types.js";

const postV1SuppliesResponse200Schema = createWbSchema<PostV1SuppliesResponse>(
  { kind: "array", items: { kind: "ref", name: "models.Supply" } },
  ordersFbwComponents,
);

export function parsePostV1SuppliesResponse(
  status: number,
  input: unknown,
): PostV1SuppliesResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV1SuppliesResponse200Schema,
        input,
        "postV1Supplies",
      );
    default:
      return unexpectedWbSuccessStatus("postV1Supplies", status);
  }
}
