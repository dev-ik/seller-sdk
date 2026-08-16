import {
  array,
  boolean,
  number,
  object,
  string,
  type Schema,
} from "@safe-shape/core";
import type {
  PromotionProductsChangeResponse,
  PromotionProductsPageResponse,
} from "./types.js";

const product = object({
  id: number().optional(),
  price: number().optional(),
  action_price: number().optional(),
  alert_max_action_price_failed: boolean().optional(),
  alert_max_action_price: number().optional(),
  max_action_price: number().optional(),
  add_mode: string().optional(),
  min_stock: number().optional(),
  stock: number().optional(),
  current_boost: number().optional(),
  price_min_elastic: number().optional(),
  price_max_elastic: number().optional(),
  min_boost: number().optional(),
  max_boost: number().optional(),
});

export const promotionProductsPageResponseSchema: Schema<PromotionProductsPageResponse> =
  object({
    result: object({
      products: array(product).optional(),
      total: number().optional(),
      last_id: number().optional(),
    }).optional(),
  });

const rejection = object({
  product_id: number().optional(),
  reason: string().optional(),
});

export const promotionProductsChangeResponseSchema: Schema<PromotionProductsChangeResponse> =
  object({
    result: object({
      product_ids: array(number()).optional(),
      rejected: array(rejection).optional(),
    }).optional(),
  });
