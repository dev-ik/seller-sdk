import { array, boolean, number, object, string } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../../contracts/rfc3339-date-time.js";
export const returnMoneyV1Schema = object({
  currency_code: string().optional(),
  price: number().optional(),
});
const returnPlaceSchema = object({
  address: string().optional(),
  id: integerSchema.optional(),
  name: string().optional(),
});
const returnStatusSchema = object({
  display_name: string().optional(),
  id: integerSchema.optional(),
  sys_name: string().optional(),
});
export const returnV1Schema = object({
  additional_info: object({
    is_opened: boolean().optional(),
    is_super_econom: boolean().optional(),
  }).optional(),
  clearing_id: integerSchema.optional(),
  company_id: integerSchema.optional(),
  compensation_status: object({
    change_moment: rfc3339DateTimeSchema.optional(),
    status: returnStatusSchema.optional(),
  }).optional(),
  exemplars: array(object({ id: integerSchema.optional() })).optional(),
  id: integerSchema.optional(),
  logistic: object({
    barcode: string().optional(),
    cancelled_with_compensation_moment: rfc3339DateTimeSchema.optional(),
    final_moment: rfc3339DateTimeSchema.optional(),
    return_date: rfc3339DateTimeSchema.optional(),
    technical_return_moment: rfc3339DateTimeSchema.optional(),
  }).optional(),
  order_id: integerSchema.optional(),
  order_number: string().optional(),
  place: returnPlaceSchema.optional(),
  posting_number: string().optional(),
  product: object({
    commission: returnMoneyV1Schema.optional(),
    commission_percent: number().optional(),
    name: string().optional(),
    offer_id: string().optional(),
    price: returnMoneyV1Schema.optional(),
    price_without_commission: returnMoneyV1Schema.optional(),
    quantity: integerSchema.optional(),
    sku: integerSchema.optional(),
  }).optional(),
  return_clearing_id: integerSchema.optional(),
  return_reason_name: string().optional(),
  schema: string().optional(),
  source_id: integerSchema.optional(),
  storage: object({
    arrived_moment: rfc3339DateTimeSchema.optional(),
    days: integerSchema.optional(),
    sum: returnMoneyV1Schema.optional(),
    tariffication_first_date: rfc3339DateTimeSchema.optional(),
    tariffication_start_date: rfc3339DateTimeSchema.optional(),
    utilization_forecast_date: string().optional(),
    utilization_sum: returnMoneyV1Schema.optional(),
  }).optional(),
  target_place: returnPlaceSchema.optional(),
  type: string().optional(),
  visual: object({
    change_moment: rfc3339DateTimeSchema.optional(),
    status: returnStatusSchema.optional(),
  }).optional(),
});
