// Generated runtime response contract for this Wildberries endpoint.
import { promotionComponents } from "../../../contracts/promotion.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV1CalendarPromotionsUploadResponse } from "./types.js";

const postV1CalendarPromotionsUploadResponse200Schema =
  createWbSchema<PostV1CalendarPromotionsUploadResponse>(
    {
      kind: "object",
      properties: {
        data: {
          kind: "object",
          properties: {
            alreadyExists: { kind: "boolean" },
            uploadID: { kind: "number", integer: true },
          },
          required: [],
        },
      },
      required: [],
    },
    promotionComponents,
  );

export function parsePostV1CalendarPromotionsUploadResponse(
  status: number,
  input: unknown,
): PostV1CalendarPromotionsUploadResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV1CalendarPromotionsUploadResponse200Schema,
        input,
        "postV1CalendarPromotionsUpload",
      );
    default:
      return unexpectedWbSuccessStatus(
        "postV1CalendarPromotionsUpload",
        status,
      );
  }
}
