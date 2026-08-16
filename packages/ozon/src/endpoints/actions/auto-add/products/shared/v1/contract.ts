import { array, number, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import type {
  OzonAutoAddProduct,
  OzonAutoAddProductsPageResponse,
} from "./types.js";
export const ozonAutoAddProductSchema: Schema<OzonAutoAddProduct> = object({
  action_price_to_auto_add: number().optional(),
  add_mode: string().optional(),
  base_price: number().optional(),
  currency: string().optional(),
  marketplace_seller_price: number().optional(),
  max_discount_price: number().optional(),
  min_action_quantity: integerSchema.optional(),
  min_seller_price: number().optional(),
  name: string().optional(),
  offer_id: string().optional(),
  price: number().optional(),
  product_id: integerSchema.optional(),
  quantity_to_auto_add: integerSchema.optional(),
  sku: integerSchema.optional(),
});
export const ozonAutoAddProductsPageSchema: Schema<OzonAutoAddProductsPageResponse> =
  object({
    products: array(ozonAutoAddProductSchema).optional(),
    total: integerSchema.optional(),
  });
