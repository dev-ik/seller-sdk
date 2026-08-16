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
import { rfc3339DateTimeSchema } from "../../../../contracts/rfc3339-date-time.js";
import type { GetProductPricesResponse } from "./types.js";

const commissions = object({
  fbo_deliv_to_customer_amount: number().optional(),
  fbo_direct_flow_trans_max_amount: number().optional(),
  fbo_direct_flow_trans_min_amount: number().optional(),
  fbo_return_flow_amount: number().optional(),
  fbs_deliv_to_customer_amount: number().optional(),
  fbs_direct_flow_trans_max_amount: number().optional(),
  fbs_direct_flow_trans_min_amount: number().optional(),
  fbs_first_mile_max_amount: number().optional(),
  fbs_first_mile_min_amount: number().optional(),
  fbs_return_flow_amount: number().optional(),
  sales_percent_fbo: number().optional(),
  sales_percent_fbp: number().optional(),
  sales_percent_fbs: number().optional(),
  sales_percent_rfbs: number().optional(),
});
const marketingAction = object({
  date_from: rfc3339DateTimeSchema.optional(),
  date_to: rfc3339DateTimeSchema.optional(),
  title: string().optional(),
  value: integerSchema.optional(),
});
const marketingActions = object({
  actions: array(marketingAction).optional(),
  current_period_from: rfc3339DateTimeSchema.optional(),
  current_period_to: rfc3339DateTimeSchema.optional(),
  ozon_actions_exist: boolean().optional(),
});
const price = object({
  auto_action_enabled: boolean().optional(),
  auto_add_to_ozon_actions_list_enabled: boolean().optional(),
  currency_code: string().optional(),
  marketing_seller_price: number().optional(),
  min_price: number().optional(),
  net_price: number().optional(),
  old_price: number().optional(),
  price: number().optional(),
  retail_price: number().optional(),
  vat: number().optional(),
});
const priceIndexData = object({
  min_price: number().optional(),
  min_price_currency: string().optional(),
  price_index_value: number().optional(),
});
const colorIndex = union([
  literal("WITHOUT_INDEX"),
  literal("GREEN"),
  literal("YELLOW"),
  literal("RED"),
  literal("SUPER"),
]);
const priceIndexes = object({
  color_index: colorIndex.optional(),
  external_index_data: priceIndexData.optional(),
  ozon_index_data: priceIndexData.optional(),
  self_marketplaces_index_data: priceIndexData.optional(),
});
const item = object({
  acquiring: number().optional(),
  commissions: commissions.optional(),
  marketing_actions: marketingActions.optional(),
  offer_id: string().optional(),
  price: price.optional(),
  price_indexes: priceIndexes.optional(),
  product_id: integerSchema.optional(),
  volume_weight: number().optional(),
});

export const getProductPricesResponseSchema: Schema<GetProductPricesResponse> =
  object({
    cursor: string().optional(),
    items: array(item).optional(),
    total: integerSchema.optional(),
  });
