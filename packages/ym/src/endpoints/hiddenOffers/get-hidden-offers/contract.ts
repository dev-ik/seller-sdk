// Generated runtime response contract for this Yandex Market endpoint.
import { hiddenOffersComponents } from "../../../contracts/hiddenOffers.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetHiddenOffersResponse } from "./types.js";

const getHiddenOffersResponse200Schema =
  createYmSchema<GetHiddenOffersResponse>(
    { kind: "ref", name: "GetHiddenOffersResponse" },
    hiddenOffersComponents,
  );

export function parseGetHiddenOffersResponse(
  status: number,
  input: unknown,
): GetHiddenOffersResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getHiddenOffersResponse200Schema,
        input,
        "getHiddenOffers",
      );
    default:
      return unexpectedYmSuccessStatus("getHiddenOffers", status);
  }
}
