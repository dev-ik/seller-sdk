// Generated runtime response contract for this Wildberries endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1AnalyticsRegionSaleResponse } from "./types.js";

const getV1AnalyticsRegionSaleResponse200Schema =
  createWbSchema<GetV1AnalyticsRegionSaleResponse>(
    {
      kind: "object",
      properties: {
        report: {
          kind: "array",
          items: {
            kind: "object",
            properties: {
              cityName: { kind: "string" },
              countryName: { kind: "string" },
              foName: { kind: "string" },
              nmID: { kind: "number", integer: true },
              regionName: { kind: "string" },
              sa: { kind: "string" },
              saleInvoiceCostPrice: { kind: "number" },
              saleInvoiceCostPricePerc: { kind: "number" },
              saleItemInvoiceQty: { kind: "number", integer: true },
            },
            required: [],
          },
        },
      },
      required: [],
    },
    reportsComponents,
  );

export function parseGetV1AnalyticsRegionSaleResponse(
  status: number,
  input: unknown,
): GetV1AnalyticsRegionSaleResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1AnalyticsRegionSaleResponse200Schema,
        input,
        "getV1AnalyticsRegionSale",
      );
    default:
      return unexpectedWbSuccessStatus("getV1AnalyticsRegionSale", status);
  }
}
