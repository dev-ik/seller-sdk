// Generated runtime response contract for this Yandex Market endpoint.
import { pricesComponents } from "../../../contracts/prices.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetPricesByOfferIdsResponse } from "./types.js";

const getPricesByOfferIdsResponse200Schema =
  createYmSchema<GetPricesByOfferIdsResponse>(
    { kind: "ref", name: "GetPricesByOfferIdsResponse" },
    pricesComponents,
  );

export function parseGetPricesByOfferIdsResponse(
  status: number,
  input: unknown,
): GetPricesByOfferIdsResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getPricesByOfferIdsResponse200Schema,
        input,
        "getPricesByOfferIds",
      );
    default:
      return unexpectedYmSuccessStatus("getPricesByOfferIds", status);
  }
}
