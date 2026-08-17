// Generated runtime response contract for this Wildberries endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1SupplierOrdersResponse } from "./types.js";

const getV1SupplierOrdersResponse200Schema =
  createWbSchema<GetV1SupplierOrdersResponse>(
    { kind: "array", items: { kind: "ref", name: "OrdersItem" } },
    reportsComponents,
  );

export function parseGetV1SupplierOrdersResponse(
  status: number,
  input: unknown,
): GetV1SupplierOrdersResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1SupplierOrdersResponse200Schema,
        input,
        "getV1SupplierOrders",
      );
    default:
      return unexpectedWbSuccessStatus("getV1SupplierOrders", status);
  }
}
