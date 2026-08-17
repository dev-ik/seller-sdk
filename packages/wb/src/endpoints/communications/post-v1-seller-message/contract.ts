// Generated runtime response contract for this Wildberries endpoint.
import { communicationsComponents } from "../../../contracts/communications.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV1SellerMessageResponse } from "./types.js";

const postV1SellerMessageResponse200Schema =
  createWbSchema<PostV1SellerMessageResponse>(
    { kind: "ref", name: "MessageResponse" },
    communicationsComponents,
  );

export function parsePostV1SellerMessageResponse(
  status: number,
  input: unknown,
): PostV1SellerMessageResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV1SellerMessageResponse200Schema,
        input,
        "postV1SellerMessage",
      );
    default:
      return unexpectedWbSuccessStatus("postV1SellerMessage", status);
  }
}
