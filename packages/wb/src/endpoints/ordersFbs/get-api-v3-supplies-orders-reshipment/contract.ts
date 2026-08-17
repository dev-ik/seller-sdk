// Generated runtime response contract for this Wildberries endpoint.
import { ordersFbsComponents } from "../../../contracts/ordersFbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetApiV3SuppliesOrdersReshipmentResponse } from "./types.js";

const getApiV3SuppliesOrdersReshipmentResponse200Schema =
  createWbSchema<GetApiV3SuppliesOrdersReshipmentResponse>(
    {
      kind: "object",
      properties: {
        orders: {
          kind: "array",
          items: {
            kind: "object",
            properties: {
              supplyID: { kind: "unknown" },
              orderID: { kind: "unknown" },
            },
            required: [],
          },
        },
      },
      required: [],
    },
    ordersFbsComponents,
  );

export function parseGetApiV3SuppliesOrdersReshipmentResponse(
  status: number,
  input: unknown,
): GetApiV3SuppliesOrdersReshipmentResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getApiV3SuppliesOrdersReshipmentResponse200Schema,
        input,
        "GET /api/v3/supplies/orders/reshipment",
      );
    default:
      return unexpectedWbSuccessStatus(
        "GET /api/v3/supplies/orders/reshipment",
        status,
      );
  }
}
