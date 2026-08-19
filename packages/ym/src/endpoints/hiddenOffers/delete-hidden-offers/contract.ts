// Generated runtime response contract for this Yandex Market endpoint.
import { hiddenOffersComponents } from "../../../contracts/hiddenOffers.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { DeleteHiddenOffersResponse } from "./types.js";

const deleteHiddenOffersResponse200Schema =
  createYmSchema<DeleteHiddenOffersResponse>(
    { kind: "ref", name: "EmptyApiResponse" },
    hiddenOffersComponents,
  );

export function parseDeleteHiddenOffersResponse(
  status: number,
  input: unknown,
): DeleteHiddenOffersResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        deleteHiddenOffersResponse200Schema,
        input,
        "deleteHiddenOffers",
      );
    default:
      return unexpectedYmSuccessStatus("deleteHiddenOffers", status);
  }
}
