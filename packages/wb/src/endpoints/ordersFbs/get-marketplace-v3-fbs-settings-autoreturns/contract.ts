// Generated runtime response contract for this Wildberries endpoint.
import { ordersFbsComponents } from "../../../contracts/ordersFbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetMarketplaceV3FbsSettingsAutoreturnsResponse } from "./types.js";

const getMarketplaceV3FbsSettingsAutoreturnsResponse200Schema =
  createWbSchema<GetMarketplaceV3FbsSettingsAutoreturnsResponse>(
    {
      kind: "object",
      properties: {
        type: {
          kind: "string",
          enum: ["allToWarehouse", "allToPickupPoint", "manual"],
        },
      },
      required: ["type"],
    },
    ordersFbsComponents,
  );

export function parseGetMarketplaceV3FbsSettingsAutoreturnsResponse(
  status: number,
  input: unknown,
): GetMarketplaceV3FbsSettingsAutoreturnsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getMarketplaceV3FbsSettingsAutoreturnsResponse200Schema,
        input,
        "getMarketplaceV3FbsSettingsAutoreturns",
      );
    default:
      return unexpectedWbSuccessStatus(
        "getMarketplaceV3FbsSettingsAutoreturns",
        status,
      );
  }
}
