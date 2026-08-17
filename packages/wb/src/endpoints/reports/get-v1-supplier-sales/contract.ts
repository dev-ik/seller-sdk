// Generated runtime response contract for this Wildberries endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1SupplierSalesResponse } from "./types.js";

const getV1SupplierSalesResponse200Schema =
  createWbSchema<GetV1SupplierSalesResponse>(
    { kind: "array", items: { kind: "ref", name: "SalesItem" } },
    reportsComponents,
  );

export function parseGetV1SupplierSalesResponse(
  status: number,
  input: unknown,
): GetV1SupplierSalesResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1SupplierSalesResponse200Schema,
        input,
        "getV1SupplierSales",
      );
    default:
      return unexpectedWbSuccessStatus("getV1SupplierSales", status);
  }
}
