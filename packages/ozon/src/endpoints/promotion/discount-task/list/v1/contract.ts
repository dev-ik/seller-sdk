import {
  array,
  boolean,
  number,
  object,
  string,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../../../contracts/rfc3339-date-time.js";
import type { ListDiscountTasksResponse } from "./types.js";

const task = object({
  id: integerSchema.optional(),
  created_at: rfc3339DateTimeSchema.optional(),
  end_at: rfc3339DateTimeSchema.optional(),
  edited_till: rfc3339DateTimeSchema.optional(),
  status: string().optional(),
  customer_name: string().optional(),
  sku: integerSchema.optional(),
  user_comment: string().optional(),
  seller_comment: string().optional(),
  requested_price: number().optional(),
  approved_price: number().optional(),
  original_price: number().optional(),
  discount: number().optional(),
  discount_percent: number().optional(),
  base_price: number().optional(),
  min_auto_price: number().optional(),
  prev_task_id: integerSchema.optional(),
  is_damaged: boolean().optional(),
  moderated_at: rfc3339DateTimeSchema.optional(),
  approved_discount: number().optional(),
  approved_discount_percent: number().optional(),
  is_purchased: boolean().optional(),
  is_auto_moderated: boolean().optional(),
  offer_id: string().optional(),
  email: string().optional(),
  last_name: string().optional(),
  first_name: string().optional(),
  patronymic: string().optional(),
  approved_quantity_min: integerSchema.optional(),
  approved_quantity_max: integerSchema.optional(),
  requested_quantity_min: integerSchema.optional(),
  requested_quantity_max: integerSchema.optional(),
  requested_price_with_fee: number().optional(),
  approved_price_with_fee: number().optional(),
  approved_price_fee_percent: number().optional(),
});

export const listDiscountTasksResponseSchema: Schema<ListDiscountTasksResponse> =
  object({
    result: array(task).optional(),
  });
