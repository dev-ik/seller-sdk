// Generated runtime response contract for this Wildberries endpoint.
import { promotionComponents } from "../../../contracts/promotion.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1CalendarPromotionsResponse } from "./types.js";

const getV1CalendarPromotionsResponse200Schema =
  createWbSchema<GetV1CalendarPromotionsResponse>(
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
                  startDateTime: { kind: "string" },
                  endDateTime: { kind: "string" },
                  type: { kind: "string", enum: ["regular", "auto"] },
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

export function parseGetV1CalendarPromotionsResponse(
  status: number,
  input: unknown,
): GetV1CalendarPromotionsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1CalendarPromotionsResponse200Schema,
        input,
        "getV1CalendarPromotions",
      );
    default:
      return unexpectedWbSuccessStatus("getV1CalendarPromotions", status);
  }
}
