// Generated runtime response contract for this Wildberries endpoint.
import { ordersFbsComponents } from "../../../contracts/ordersFbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PatchMarketplaceV3FbsSettingsAutoreturnsItemsResponse } from "./types.js";

const patchMarketplaceV3FbsSettingsAutoreturnsItemsResponse200Schema =
  createWbSchema<PatchMarketplaceV3FbsSettingsAutoreturnsItemsResponse>(
    {
      kind: "object",
      properties: {
        results: {
          kind: "array",
          items: {
            kind: "object",
            properties: {
              chrtId: { kind: "number", integer: true },
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
              success: { kind: "boolean" },
            },
            required: ["chrtId"],
          },
        },
      },
      required: ["results"],
    },
    ordersFbsComponents,
  );

export function parsePatchMarketplaceV3FbsSettingsAutoreturnsItemsResponse(
  status: number,
  input: unknown,
): PatchMarketplaceV3FbsSettingsAutoreturnsItemsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        patchMarketplaceV3FbsSettingsAutoreturnsItemsResponse200Schema,
        input,
        "patchMarketplaceV3FbsSettingsAutoreturnsItems",
      );
    default:
      return unexpectedWbSuccessStatus(
        "patchMarketplaceV3FbsSettingsAutoreturnsItems",
        status,
      );
  }
}
