import type { OzonGiveoutArticleV1, OzonGiveoutV1 } from "./types.js";
import { boolean, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../../contracts/rfc3339-date-time.js";
export const giveoutSchema: Schema<OzonGiveoutV1> = object({
  approved_articles_count: integerSchema.optional(),
  created_at: rfc3339DateTimeSchema.optional(),
  giveout_id: integerSchema.optional(),
  giveout_status: string().optional(),
  total_articles_count: integerSchema.optional(),
  warehouse_address: string().optional(),
  warehouse_id: integerSchema.optional(),
  warehouse_name: string().optional(),
});
export const giveoutArticleSchema: Schema<OzonGiveoutArticleV1> = object({
  approved: boolean().optional(),
  delivery_schema: string().optional(),
  name: string().optional(),
  seller_id: integerSchema.optional(),
});
