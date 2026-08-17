// Generated runtime response contract for this Wildberries endpoint.
import { inStorePickupComponents } from "../../../contracts/inStorePickup.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV3ClickCollectOrdersNewResponse } from "./types.js";

const getV3ClickCollectOrdersNewResponse200Schema =
  createWbSchema<GetV3ClickCollectOrdersNewResponse>(
    { kind: "ref", name: "api.NewOrders" },
    inStorePickupComponents,
  );

export function parseGetV3ClickCollectOrdersNewResponse(
  status: number,
  input: unknown,
): GetV3ClickCollectOrdersNewResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV3ClickCollectOrdersNewResponse200Schema,
        input,
        "getV3ClickCollectOrdersNew",
      );
    default:
      return unexpectedWbSuccessStatus("getV3ClickCollectOrdersNew", status);
  }
}
