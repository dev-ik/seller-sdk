// Generated runtime response contract for this Wildberries endpoint.
import { ordersFbsComponents } from "../../../contracts/ordersFbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostMarketplaceV3FbsSettingsAutoreturnsItemsResponse } from "./types.js";

const postMarketplaceV3FbsSettingsAutoreturnsItemsResponse200Schema =
  createWbSchema<PostMarketplaceV3FbsSettingsAutoreturnsItemsResponse>(
    {
      kind: "object",
      properties: {
        results: {
          kind: "array",
          items: {
            kind: "object",
            properties: {
              success: { kind: "boolean" },
              chrtId: { kind: "number", integer: true },
              type: {
                kind: "string",
                enum: ["auto", "byWarehouse", "byPickupPoint", "byCourier"],
              },
              changeable: { kind: "boolean" },
              error: {
                kind: "array",
                items: {
                  kind: "object",
                  properties: {
                    code: { kind: "number", integer: true },
                    detail: { kind: "string" },
                  },
                  required: ["code", "detail"],
                },
              },
            },
            required: ["chrtId"],
          },
        },
      },
      required: ["results"],
    },
    ordersFbsComponents,
  );

export function parsePostMarketplaceV3FbsSettingsAutoreturnsItemsResponse(
  status: number,
  input: unknown,
): PostMarketplaceV3FbsSettingsAutoreturnsItemsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postMarketplaceV3FbsSettingsAutoreturnsItemsResponse200Schema,
        input,
        "postMarketplaceV3FbsSettingsAutoreturnsItems",
      );
    default:
      return unexpectedWbSuccessStatus(
        "postMarketplaceV3FbsSettingsAutoreturnsItems",
        status,
      );
  }
}
