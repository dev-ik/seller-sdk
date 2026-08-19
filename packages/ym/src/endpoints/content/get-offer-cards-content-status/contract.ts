// Generated runtime response contract for this Yandex Market endpoint.
import { contentComponents } from "../../../contracts/content.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetOfferCardsContentStatusResponse } from "./types.js";

const getOfferCardsContentStatusResponse200Schema =
  createYmSchema<GetOfferCardsContentStatusResponse>(
    { kind: "ref", name: "GetOfferCardsContentStatusResponse" },
    contentComponents,
  );

export function parseGetOfferCardsContentStatusResponse(
  status: number,
  input: unknown,
): GetOfferCardsContentStatusResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getOfferCardsContentStatusResponse200Schema,
        input,
        "getOfferCardsContentStatus",
      );
    default:
      return unexpectedYmSuccessStatus("getOfferCardsContentStatus", status);
  }
}
