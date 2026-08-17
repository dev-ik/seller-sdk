// Generated runtime response contract for this Wildberries endpoint.
import { promotionComponents } from "../../../contracts/promotion.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1CalendarPromotionsDetailsResponse } from "./types.js";

const getV1CalendarPromotionsDetailsResponse200Schema =
  createWbSchema<GetV1CalendarPromotionsDetailsResponse>(
    {
      kind: "object",
      properties: {
        data: {
          kind: "object",
          properties: {
            promotions: {
              kind: "array",
              items: {
                kind: "object",
                properties: {
                  id: { kind: "number", integer: true },
                  name: { kind: "string" },
                  description: { kind: "string" },
                  advantages: { kind: "array", items: { kind: "string" } },
                  startDateTime: { kind: "string" },
                  endDateTime: { kind: "string" },
                  inPromoActionLeftovers: { kind: "number", integer: true },
                  inPromoActionTotal: { kind: "number", integer: true },
                  notInPromoActionLeftovers: { kind: "number", integer: true },
                  notInPromoActionTotal: { kind: "number", integer: true },
                  participationPercentage: { kind: "number", integer: true },
                  type: { kind: "string", enum: ["regular", "auto"] },
                  exceptionProductsCount: { kind: "number", integer: true },
                  ranging: {
                    kind: "array",
                    items: {
                      kind: "object",
                      properties: {
                        condition: { kind: "string" },
                        participationRate: {
                          kind: "number",
                          integer: true,
                          minimum: 0,
                          maximum: 100,
                        },
                        boost: { kind: "number", integer: true },
                      },
                      required: [],
                    },
                  },
                },
                required: [],
              },
            },
          },
          required: [],
        },
      },
      required: [],
    },
    promotionComponents,
  );

export function parseGetV1CalendarPromotionsDetailsResponse(
  status: number,
  input: unknown,
): GetV1CalendarPromotionsDetailsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1CalendarPromotionsDetailsResponse200Schema,
        input,
        "getV1CalendarPromotionsDetails",
      );
    default:
      return unexpectedWbSuccessStatus(
        "getV1CalendarPromotionsDetails",
        status,
      );
  }
}
