// Generated runtime response contract for this Yandex Market endpoint.
import { hiddenOffersComponents } from "../../../contracts/hiddenOffers.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { AddHiddenOffersResponse } from "./types.js";

const addHiddenOffersResponse200Schema =
  createYmSchema<AddHiddenOffersResponse>(
    { kind: "ref", name: "EmptyApiResponse" },
    hiddenOffersComponents,
  );

export function parseAddHiddenOffersResponse(
  status: number,
  input: unknown,
): AddHiddenOffersResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        addHiddenOffersResponse200Schema,
        input,
        "addHiddenOffers",
      );
    default:
      return unexpectedYmSuccessStatus("addHiddenOffers", status);
  }
}
