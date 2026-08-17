// Generated runtime response contract for this Wildberries endpoint.
import { promotionComponents } from "../../../contracts/promotion.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1AdvertResponse } from "./types.js";

const getV1AdvertResponse200Schema = createWbSchema<GetV1AdvertResponse>(
  {
    kind: "object",
    properties: {
      advertId: { kind: "number", integer: true },
      name: { kind: "string" },
      brand: { kind: "string" },
      type: { kind: "number", integer: true },
      status: { kind: "number", integer: true },
      createTime: { kind: "string" },
      extended: {
        kind: "object",
        properties: {
          reason: { kind: "string", nullable: true },
          expenses: { kind: "number", integer: true },
          from: { kind: "string" },
          to: { kind: "string" },
          updated_at: { kind: "string" },
          price: { kind: "number", integer: true },
          budget: { kind: "number", integer: true },
          operation: { kind: "number", integer: true },
          contract_id: { kind: "number", integer: true },
        },
        required: [],
      },
      items: {
        kind: "array",
        items: {
          kind: "object",
          properties: {
            id: { kind: "number", integer: true },
            name: { kind: "string" },
            status: { kind: "number", integer: true },
            place: { kind: "number", integer: true },
            budget: { kind: "number", integer: true },
            daily_limit: { kind: "number", integer: true },
            category_name: { kind: "string" },
            cpm: { kind: "number", integer: true },
            url: { kind: "string" },
            advert_type: { kind: "number", integer: true },
            created_at: { kind: "string" },
            updated_at: { kind: "string" },
            date_from: { kind: "string" },
            date_to: { kind: "string" },
            nms: { kind: "array", items: { kind: "number", integer: true } },
            bottomText1: { kind: "string" },
            bottomText2: { kind: "string" },
            message: { kind: "string" },
            additionalSettings: { kind: "number", integer: true },
            receiversCount: { kind: "number", integer: true },
            subject_id: { kind: "number", integer: true },
            subject_name: { kind: "string" },
            action_name: { kind: "string" },
            show_hours: {
              kind: "array",
              items: {
                kind: "object",
                properties: {
                  From: { kind: "number", integer: true },
                  To: { kind: "number", integer: true },
                },
                required: [],
              },
            },
            Erid: { kind: "string" },
          },
          required: [],
        },
      },
    },
    required: [],
  },
  promotionComponents,
);

export function parseGetV1AdvertResponse(
  status: number,
  input: unknown,
): GetV1AdvertResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1AdvertResponse200Schema,
        input,
        "getV1Advert",
      );
    case 204:
      return undefined;
    default:
      return unexpectedWbSuccessStatus("getV1Advert", status);
  }
}
