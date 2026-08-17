// Generated runtime response contract for this Wildberries endpoint.
import { promotionComponents } from "../../../contracts/promotion.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV2SupplierNmsResponse } from "./types.js";

const postV2SupplierNmsResponse200Schema =
  createWbSchema<PostV2SupplierNmsResponse>(
    {
      kind: "array",
      items: {
        kind: "object",
        properties: {
          title: { kind: "string" },
          nm: { kind: "number", integer: true },
          subjectId: { kind: "number", integer: true },
        },
        required: [],
      },
      nullable: true,
    },
    promotionComponents,
  );

export function parsePostV2SupplierNmsResponse(
  status: number,
  input: unknown,
): PostV2SupplierNmsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV2SupplierNmsResponse200Schema,
        input,
        "postV2SupplierNms",
      );
    default:
      return unexpectedWbSuccessStatus("postV2SupplierNms", status);
  }
}
