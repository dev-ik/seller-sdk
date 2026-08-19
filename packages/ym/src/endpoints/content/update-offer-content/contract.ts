// Generated runtime response contract for this Yandex Market endpoint.
import { contentComponents } from "../../../contracts/content.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { UpdateOfferContentResponse } from "./types.js";

const updateOfferContentResponse200Schema =
  createYmSchema<UpdateOfferContentResponse>(
    { kind: "ref", name: "UpdateOfferContentResponse" },
    contentComponents,
  );

export function parseUpdateOfferContentResponse(
  status: number,
  input: unknown,
): UpdateOfferContentResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        updateOfferContentResponse200Schema,
        input,
        "updateOfferContent",
      );
    default:
      return unexpectedYmSuccessStatus("updateOfferContent", status);
  }
}
