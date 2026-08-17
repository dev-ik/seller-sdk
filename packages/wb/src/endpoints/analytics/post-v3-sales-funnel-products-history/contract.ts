// Generated runtime response contract for this Wildberries endpoint.
import { analyticsComponents } from "../../../contracts/analytics.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3SalesFunnelProductsHistoryResponse } from "./types.js";

const postV3SalesFunnelProductsHistoryResponse200Schema =
  createWbSchema<PostV3SalesFunnelProductsHistoryResponse>(
    { kind: "ref", name: "ItemHistoryResponse" },
    analyticsComponents,
  );

export function parsePostV3SalesFunnelProductsHistoryResponse(
  status: number,
  input: unknown,
): PostV3SalesFunnelProductsHistoryResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3SalesFunnelProductsHistoryResponse200Schema,
        input,
        "postV3SalesFunnelProductsHistory",
      );
    default:
      return unexpectedWbSuccessStatus(
        "postV3SalesFunnelProductsHistory",
        status,
      );
  }
}
