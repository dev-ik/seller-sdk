// Generated runtime response contract for this Yandex Market endpoint.
import { priceQuarantineComponents } from "../../../contracts/priceQuarantine.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetBusinessQuarantineOffersResponse } from "./types.js";

const getBusinessQuarantineOffersResponse200Schema =
  createYmSchema<GetBusinessQuarantineOffersResponse>(
    { kind: "ref", name: "GetQuarantineOffersResponse" },
    priceQuarantineComponents,
  );

export function parseGetBusinessQuarantineOffersResponse(
  status: number,
  input: unknown,
): GetBusinessQuarantineOffersResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getBusinessQuarantineOffersResponse200Schema,
        input,
        "getBusinessQuarantineOffers",
      );
    default:
      return unexpectedYmSuccessStatus("getBusinessQuarantineOffers", status);
  }
}
