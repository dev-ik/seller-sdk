// Generated runtime response contract for this Yandex Market endpoint.
import { promosComponents } from "../../../contracts/promos.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { DeletePromoOffersResponse } from "./types.js";

const deletePromoOffersResponse200Schema =
  createYmSchema<DeletePromoOffersResponse>(
    { kind: "ref", name: "DeletePromoOffersResponse" },
    promosComponents,
  );

export function parseDeletePromoOffersResponse(
  status: number,
  input: unknown,
): DeletePromoOffersResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        deletePromoOffersResponse200Schema,
        input,
        "deletePromoOffers",
      );
    default:
      return unexpectedYmSuccessStatus("deletePromoOffers", status);
  }
}
