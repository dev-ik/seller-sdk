import { literal, object, string, union, type Schema } from "@safe-shape/core";
import type { GetSupplyOrderActAcceptanceStatusResponse } from "./types.js";
const status = union([
  literal("SUCCESS"),
  literal("IN_PROGRESS"),
  literal("FAILED"),
]);
export const getSupplyOrderActAcceptanceStatusResponseSchema: Schema<GetSupplyOrderActAcceptanceStatusResponse> =
  object({ status: status.optional(), error_message: string().optional() });
