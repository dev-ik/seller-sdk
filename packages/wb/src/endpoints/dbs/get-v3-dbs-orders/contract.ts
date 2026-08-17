// Generated runtime response contract for this Wildberries endpoint.
import { dbsComponents } from "../../../contracts/dbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV3DbsOrdersResponse } from "./types.js";

const getV3DbsOrdersResponse200Schema = createWbSchema<GetV3DbsOrdersResponse>(
  {
    kind: "object",
    properties: {
      next: { kind: "ref", name: "Next" },
      orders: { kind: "array", items: { kind: "ref", name: "OrderDBS" } },
    },
    required: [],
  },
  dbsComponents,
);

export function parseGetV3DbsOrdersResponse(
  status: number,
  input: unknown,
): GetV3DbsOrdersResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV3DbsOrdersResponse200Schema,
        input,
        "getV3DbsOrders",
      );
    default:
      return unexpectedWbSuccessStatus("getV3DbsOrders", status);
  }
}
