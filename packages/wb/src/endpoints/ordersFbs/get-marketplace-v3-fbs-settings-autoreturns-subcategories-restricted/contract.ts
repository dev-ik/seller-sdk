// Generated runtime response contract for this Wildberries endpoint.
import { ordersFbsComponents } from "../../../contracts/ordersFbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestrictedResponse } from "./types.js";

const getMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestrictedResponse200Schema =
  createWbSchema<GetMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestrictedResponse>(
    {
      kind: "object",
      properties: {
        next: { kind: "number", integer: true, nullable: true },
        data: {
          kind: "array",
          items: {
            kind: "object",
            properties: { subjectId: { kind: "number", integer: true } },
            required: ["subjectId"],
          },
        },
      },
      required: ["next", "data"],
    },
    ordersFbsComponents,
  );

export function parseGetMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestrictedResponse(
  status: number,
  input: unknown,
): GetMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestrictedResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestrictedResponse200Schema,
        input,
        "getMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestricted",
      );
    default:
      return unexpectedWbSuccessStatus(
        "getMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestricted",
        status,
      );
  }
}
