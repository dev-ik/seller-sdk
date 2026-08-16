import {
  array,
  boolean,
  number,
  object,
  string,
  type Schema,
} from "@safe-shape/core";
import { rfc3339DateTimeSchema } from "../../../contracts/rfc3339-date-time.js";
import type { ListPromotionsResponse } from "./types.js";

const promotion = object({
  id: number().optional(),
  title: string().optional(),
  action_type: string().optional(),
  description: string().optional(),
  date_start: string().optional(),
  date_end: string().optional(),
  auto_add_dates: array(rfc3339DateTimeSchema).optional(),
  freeze_date: string().optional(),
  potential_products_count: number().optional(),
  participating_products_count: number().optional(),
  is_participating: boolean().optional(),
  is_voucher_action: boolean().optional(),
  banned_products_count: number().optional(),
  with_targeting: boolean().optional(),
  order_amount: number().optional(),
  discount_type: string().optional(),
  discount_value: number().optional(),
});

export const listPromotionsResponseSchema: Schema<ListPromotionsResponse> =
  object({
    result: array(promotion).optional(),
  });
