// Generated runtime response contract for this Wildberries endpoint.
import { inStorePickupComponents } from "../../../contracts/inStorePickup.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV3ClickCollectOrdersResponse } from "./types.js";

const getV3ClickCollectOrdersResponse200Schema =
  createWbSchema<GetV3ClickCollectOrdersResponse>(
    { kind: "ref", name: "api.Orders" },
    inStorePickupComponents,
  );

export function parseGetV3ClickCollectOrdersResponse(
  status: number,
  input: unknown,
): GetV3ClickCollectOrdersResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV3ClickCollectOrdersResponse200Schema,
        input,
        "getV3ClickCollectOrders",
      );
    default:
      return unexpectedWbSuccessStatus("getV3ClickCollectOrders", status);
  }
}
