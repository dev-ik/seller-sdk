// Generated runtime response contract for this Wildberries endpoint.
import { promotionComponents } from "../../../contracts/promotion.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1PromotionCountResponse } from "./types.js";

const getV1PromotionCountResponse200Schema =
  createWbSchema<GetV1PromotionCountResponse>(
    {
      kind: "object",
      properties: {
        adverts: {
          kind: "array",
          items: {
            kind: "object",
            properties: {
              type: { kind: "number", integer: true },
              status: { kind: "number", integer: true },
              count: { kind: "number", integer: true },
              advert_list: {
                kind: "array",
                items: {
                  kind: "object",
                  properties: {
                    advertId: { kind: "number", integer: true },
                    changeTime: { kind: "string" },
                  },
                  required: [],
                },
              },
            },
            required: [],
          },
          nullable: true,
        },
        all: { kind: "number", integer: true },
      },
      required: [],
    },
    promotionComponents,
  );

export function parseGetV1PromotionCountResponse(
  status: number,
  input: unknown,
): GetV1PromotionCountResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1PromotionCountResponse200Schema,
        input,
        "getV1PromotionCount",
      );
    default:
      return unexpectedWbSuccessStatus("getV1PromotionCount", status);
  }
}
