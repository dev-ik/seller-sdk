import {
  array,
  boolean,
  literal,
  number,
  object,
  string,
  union,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import type {
  OzonSellerActionCreatedResponse,
  OzonSellerActionProduct,
  OzonSellerActionProductsPage,
  OzonSellerActionQuantType,
} from "./types.js";

export const sellerActionCreatedResponseSchema: Schema<OzonSellerActionCreatedResponse> =
  object({ action_id: integerSchema.optional() });

const sellerActionQuantTypeSchema: Schema<OzonSellerActionQuantType> = union([
  literal("UNSPECIFIED"),
  literal("BOX"),
  literal("PALLET"),
  literal("GENERAL"),
]);

export const sellerActionProductSchema: Schema<OzonSellerActionProduct> =
  object({
    action_price: number().optional(),
    base_price: number().optional(),
    currency: string().optional(),
    discount_percent: number().optional(),
    is_active: boolean().optional(),
    min_seller_price: number().optional(),
    name: string().optional(),
    offer_id: string().optional(),
    price: number().optional(),
    product_id: integerSchema.optional(),
    quant_size: integerSchema.optional(),
    quant_type: sellerActionQuantTypeSchema.optional(),
    sku: array(string()).optional(),
  });

export const sellerActionProductsPageSchema: Schema<OzonSellerActionProductsPage> =
  object({
    cursor: integerSchema.optional(),
    has_next: boolean().optional(),
    products: array(sellerActionProductSchema).optional(),
  });
