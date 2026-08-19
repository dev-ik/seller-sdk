// Generated runtime response contract for this Yandex Market endpoint.
import { promosComponents } from "../../../contracts/promos.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetPromoOffersResponse } from "./types.js";

const getPromoOffersResponse200Schema = createYmSchema<GetPromoOffersResponse>(
  { kind: "ref", name: "GetPromoOffersResponse" },
  promosComponents,
);

export function parseGetPromoOffersResponse(
  status: number,
  input: unknown,
): GetPromoOffersResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getPromoOffersResponse200Schema,
        input,
        "getPromoOffers",
      );
    default:
      return unexpectedYmSuccessStatus("getPromoOffers", status);
  }
}
