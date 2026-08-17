// Generated runtime response contract for this Wildberries endpoint.
import { analyticsComponents } from "../../../contracts/analytics.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV1StocksReportWbWarehousesResponse } from "./types.js";

const postV1StocksReportWbWarehousesResponse200Schema =
  createWbSchema<PostV1StocksReportWbWarehousesResponse>(
    {
      kind: "object",
      properties: { data: { kind: "ref", name: "InventoryWbResponse" } },
      required: ["data"],
    },
    analyticsComponents,
  );

export function parsePostV1StocksReportWbWarehousesResponse(
  status: number,
  input: unknown,
): PostV1StocksReportWbWarehousesResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV1StocksReportWbWarehousesResponse200Schema,
        input,
        "postV1StocksReportWbWarehouses",
      );
    default:
      return unexpectedWbSuccessStatus(
        "postV1StocksReportWbWarehouses",
        status,
      );
  }
}
