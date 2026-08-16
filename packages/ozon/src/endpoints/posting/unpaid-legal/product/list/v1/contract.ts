import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import type { ListUnpaidLegalProductsV1Response } from "./types.js";
export const listUnpaidLegalProductsV1ResponseSchema: Schema<ListUnpaidLegalProductsV1Response> =
  object({
    cursor: string().optional(),
    products: array(
      object({
        image_url: string().optional(),
        name: string().optional(),
        offer_id: string().optional(),
        product_id: integerSchema.optional(),
        quantity: integerSchema.optional(),
      }),
    ).optional(),
  });
