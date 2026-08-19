// Generated runtime response contract for this Yandex Market endpoint.
import { promosComponents } from "../../../contracts/promos.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { UpdatePromoOffersResponse } from "./types.js";

const updatePromoOffersResponse200Schema =
  createYmSchema<UpdatePromoOffersResponse>(
    { kind: "ref", name: "UpdatePromoOffersResponse" },
    promosComponents,
  );

export function parseUpdatePromoOffersResponse(
  status: number,
  input: unknown,
): UpdatePromoOffersResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        updatePromoOffersResponse200Schema,
        input,
        "updatePromoOffers",
      );
    default:
      return unexpectedYmSuccessStatus("updatePromoOffers", status);
  }
}
