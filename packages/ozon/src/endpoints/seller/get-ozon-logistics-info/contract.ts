import {
  array,
  boolean,
  literal,
  object,
  union,
  type Schema,
} from "@safe-shape/core";
import type { GetOzonLogisticsInfoResponse } from "./types.js";

const ozonLogisticsSchema = union([
  literal("UNKNOWN"),
  literal("FBO"),
  literal("FBS"),
]);

/** @internal */
export const getOzonLogisticsInfoResponseSchema: Schema<GetOzonLogisticsInfoResponse> =
  object({
    available_schemas: array(ozonLogisticsSchema).optional(),
    ozon_logistics_enabled: boolean().optional(),
  });
