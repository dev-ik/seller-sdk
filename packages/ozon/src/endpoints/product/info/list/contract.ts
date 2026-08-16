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
import type { GetProductInfoListResponse } from "./types.js";

const errorLevel = union([
  literal("ERROR_LEVEL_UNSPECIFIED"),
  literal("ERROR_LEVEL_ERROR"),
  literal("ERROR_LEVEL_WARNING"),
  literal("ERROR_LEVEL_INTERNAL"),
]);

const priceIndexColor = union([
  literal("COLOR_INDEX_UNSPECIFIED"),
  literal("COLOR_INDEX_WITHOUT_INDEX"),
  literal("COLOR_INDEX_SUPER"),
  literal("COLOR_INDEX_GREEN"),
  literal("COLOR_INDEX_YELLOW"),
  literal("COLOR_INDEX_RED"),
]);

const promotionType = union([literal("UNSPECIFIED"), literal("REVIEWS_PROMO")]);

const shipmentType = union([
  literal("SHIPMENT_TYPE_UNSPECIFIED"),
  literal("SHIPMENT_TYPE_GENERAL"),
  literal("SHIPMENT_TYPE_BOX"),
  literal("SHIPMENT_TYPE_PALLET"),
]);

const availabilityReasonHumanText = object({ text: string().optional() });
const availabilityReason = object({
  human_text: availabilityReasonHumanText.optional(),
  id: integerSchema.optional(),
});
const availability = object({
  availability: string().optional(),
  reasons: array(availabilityReason).optional(),
  sku: integerSchema.optional(),
  source: string().optional(),
});
const commission = object({
  delivery_amount: number().optional(),
  percent: number().optional(),
  return_amount: number().optional(),
  sale_schema: string().optional(),
  value: number().optional(),
});
const errorTextParam = object({
  name: string().optional(),
  value: string().optional(),
});
const errorTexts = object({
  attribute_name: string().optional(),
  description: string().optional(),
  hint_code: string().optional(),
  message: string().optional(),
  params: array(errorTextParam).optional(),
  short_description: string().optional(),
});
const productError = object({
  attribute_id: integerSchema.optional(),
  code: string().optional(),
  field: string().optional(),
  level: errorLevel.optional(),
  state: string().optional(),
  texts: errorTexts.optional(),
});
const modelInfo = object({
  count: integerSchema.optional(),
  model_id: integerSchema.optional(),
});
const priceIndexData = object({
  minimal_price: string().optional(),
  minimal_price_currency: string().optional(),
  price_index_value: number().optional(),
});
const priceIndexes = object({
  color_index: priceIndexColor.optional(),
  external_index_data: priceIndexData.optional(),
  ozon_index_data: priceIndexData.optional(),
  self_marketplaces_index_data: priceIndexData.optional(),
});
const promotion = object({
  is_enabled: boolean().optional(),
  type: promotionType.optional(),
});
const source = object({
  created_at: rfc3339DateTimeSchema.optional(),
  quant_code: string().optional(),
  shipment_type: shipmentType.optional(),
  sku: integerSchema.optional(),
  source: string().optional(),
});
const statuses = object({
  is_created: boolean().optional(),
  moderate_status: string().optional(),
  status: string().optional(),
  status_description: string().optional(),
  status_failed: string().optional(),
  status_name: string().optional(),
  status_tooltip: string().optional(),
  status_updated_at: rfc3339DateTimeSchema.optional(),
  validation_status: string().optional(),
});
const stock = object({
  present: integerSchema.optional(),
  reserved: integerSchema.optional(),
  sku: integerSchema.optional(),
  source: string().optional(),
});
const stocks = object({
  has_stock: boolean().optional(),
  stocks: array(stock).optional(),
});
const visibilityDetails = object({
  has_price: boolean().optional(),
  has_stock: boolean().optional(),
});

const item = object({
  availabilities: array(availability).optional(),
  barcodes: array(string()).optional(),
  color_image: array(string()).optional(),
  commissions: array(commission).optional(),
  created_at: rfc3339DateTimeSchema.optional(),
  currency_code: string().optional(),
  description_category_id: integerSchema.optional(),
  discounted_fbo_stocks: integerSchema.optional(),
  errors: array(productError).optional(),
  has_discounted_fbo_item: boolean().optional(),
  id: integerSchema.optional(),
  images: array(string()).optional(),
  images360: array(string()).optional(),
  is_archived: boolean().optional(),
  is_autoarchived: boolean().optional(),
  is_discounted: boolean().optional(),
  is_kgt: boolean().optional(),
  is_prepayment_allowed: boolean().optional(),
  is_seasonal: boolean().optional(),
  is_super: boolean().optional(),
  min_price: string().optional(),
  model_info: modelInfo.optional(),
  name: string().optional(),
  offer_id: string().optional(),
  old_price: string().optional(),
  price: string().optional(),
  price_indexes: priceIndexes.optional(),
  primary_image: array(string()).optional(),
  promotions: array(promotion).optional(),
  sku: integerSchema.optional(),
  sources: array(source).optional(),
  statuses: statuses.optional(),
  stocks: stocks.optional(),
  type_id: integerSchema.optional(),
  updated_at: rfc3339DateTimeSchema.optional(),
  vat: string().optional(),
  visibility_details: visibilityDetails.optional(),
  volume_weight: number().optional(),
});

export const getProductInfoListResponseSchema: Schema<GetProductInfoListResponse> =
  object({
    items: array(item).optional(),
  });
