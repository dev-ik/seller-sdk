import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../../../contracts/integer.js";
import type { ListFbsAssemblyCarriageProductsResponse } from "./types.js";

const productSchema = object({
  offer_id: string().optional(),
  picture_url: string().optional(),
  posting_numbers: array(string()).optional(),
  product_name: string().optional(),
  quantity: integerSchema.optional(),
  sku: integerSchema.optional(),
});

export const listFbsAssemblyCarriageProductsResponseSchema: Schema<ListFbsAssemblyCarriageProductsResponse> =
  object({
    cursor: string().optional(),
    products: array(productSchema).optional(),
  });
