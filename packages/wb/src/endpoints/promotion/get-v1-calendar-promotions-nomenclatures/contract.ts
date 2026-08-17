// Generated runtime response contract for this Wildberries endpoint.
import { promotionComponents } from "../../../contracts/promotion.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1CalendarPromotionsNomenclaturesResponse } from "./types.js";

const getV1CalendarPromotionsNomenclaturesResponse200Schema =
  createWbSchema<GetV1CalendarPromotionsNomenclaturesResponse>(
    {
      kind: "object",
      properties: {
        data: {
          kind: "object",
          properties: {
            nomenclatures: {
              kind: "array",
              items: { kind: "ref", name: "PromoItemsList" },
            },
          },
          required: [],
        },
      },
      required: [],
    },
    promotionComponents,
  );

export function parseGetV1CalendarPromotionsNomenclaturesResponse(
  status: number,
  input: unknown,
): GetV1CalendarPromotionsNomenclaturesResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1CalendarPromotionsNomenclaturesResponse200Schema,
        input,
        "getV1CalendarPromotionsNomenclatures",
      );
    default:
      return unexpectedWbSuccessStatus(
        "getV1CalendarPromotionsNomenclatures",
        status,
      );
  }
}
