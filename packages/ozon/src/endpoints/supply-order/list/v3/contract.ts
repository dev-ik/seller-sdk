import { array, object, string, type Schema } from "@safe-shape/core";
import type { ListSupplyOrdersV3Response } from "./types.js";

export const listSupplyOrdersV3ResponseSchema: Schema<ListSupplyOrdersV3Response> =
  object({
    last_id: string().optional(),
    order_ids: array(string()).optional(),
  });
