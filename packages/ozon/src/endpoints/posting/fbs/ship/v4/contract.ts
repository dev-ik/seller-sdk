import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import type { ShipFbsPostingV4Response } from "./types.js";
const product = object({
  mandatory_mark: array(string()).optional(),
  name: string().optional(),
  offer_id: string().optional(),
  price: string().optional(),
  quantity: integerSchema.optional(),
  sku: integerSchema.optional(),
  currency_code: string().optional(),
});
export const shipFbsPostingV4ResponseSchema: Schema<ShipFbsPostingV4Response> =
  object({
    additional_data: array(
      object({
        posting_number: string().optional(),
        products: array(product).optional(),
      }),
    ).optional(),
    result: array(string()).optional(),
  });
