// Generated runtime response contract for this Wildberries endpoint.
import { promotionComponents } from "../../../contracts/promotion.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV2SeacatSaveAdResponse } from "./types.js";

const postV2SeacatSaveAdResponse200Schema =
  createWbSchema<PostV2SeacatSaveAdResponse>(
    { kind: "number", integer: true },
    promotionComponents,
  );

export function parsePostV2SeacatSaveAdResponse(
  status: number,
  input: unknown,
): PostV2SeacatSaveAdResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV2SeacatSaveAdResponse200Schema,
        input,
        "postV2SeacatSaveAd",
      );
    default:
      return unexpectedWbSuccessStatus("postV2SeacatSaveAd", status);
  }
}
