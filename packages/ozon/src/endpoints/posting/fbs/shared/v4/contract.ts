import { array, boolean, number, object, string } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../../../contracts/rfc3339-date-time.js";
import {
  fbsAddressSchema,
  fbsAnalyticsDataSchema,
  fbsBarcodesSchema,
  fbsCancellationSchema,
  fbsContainerSchema,
  fbsDeliveryMethodSchema,
  fbsExternalOrderSchema,
  fbsLegalInfoSchema,
  fbsMoneySchema,
  fbsOptionalDataSchema,
  fbsRequirementsSchema,
  fbsSortingCenterSchema,
  fbsTarifficationStepSchema,
} from "../common/contract.js";

const commissionSchema = object({
  amount: number().nullable().optional(),
  currency: string().nullable().optional(),
  percent: number().nullable().optional(),
});

const financialProductSchema = object({
  actions: array(string()).nullable().optional(),
  commission: commissionSchema.nullable().optional(),
  customer_price: fbsMoneySchema.nullable().optional(),
  old_price: number().nullable().optional(),
  payout: number().nullable().optional(),
  price: number().nullable().optional(),
  product_id: integerSchema.nullable().optional(),
  quantity: integerSchema.nullable().optional(),
  total_discount_percent: number().nullable().optional(),
  total_discount_value: number().nullable().optional(),
});

const financialDataSchema = object({
  cluster_from: string().nullable().optional(),
  cluster_to: string().nullable().optional(),
  products: array(financialProductSchema).nullable().optional(),
});

const productSchema = object({
  imei: array(string()).nullable().optional(),
  is_blr_traceable: boolean().nullable().optional(),
  is_marketplace_buyout: boolean().nullable().optional(),
  name: string().nullable().optional(),
  offer_id: string().nullable().optional(),
  price: fbsMoneySchema.nullable().optional(),
  product_color: string().nullable().optional(),
  quantity: integerSchema.nullable().optional(),
  sku: integerSchema.nullable().optional(),
  weight: number().nullable().optional(),
});

const tarifficationSchema = object({
  current_tariff_charge: fbsMoneySchema.nullable().optional(),
  current_tariff_min_charge: fbsMoneySchema.nullable().optional(),
  current_tariff_rate: number().nullable().optional(),
  current_tariff_type: string().nullable().optional(),
  next_tariff_charge: fbsMoneySchema.nullable().optional(),
  next_tariff_min_charge: fbsMoneySchema.nullable().optional(),
  next_tariff_rate: number().nullable().optional(),
  next_tariff_starts_at: rfc3339DateTimeSchema.nullable().optional(),
  next_tariff_type: string().nullable().optional(),
});

export const fbsPostingV4Schema = object({
  addressee: object({ name: string().nullable().optional() })
    .nullable()
    .optional(),
  analytics_data: fbsAnalyticsDataSchema.nullable().optional(),
  available_actions: array(string()).nullable().optional(),
  barcodes: fbsBarcodesSchema.nullable().optional(),
  cancellation: fbsCancellationSchema.nullable().optional(),
  container: fbsContainerSchema.nullable().optional(),
  container_sort_type: string().nullable().optional(),
  customer: object({
    address: fbsAddressSchema.nullable().optional(),
    customer_email: string().nullable().optional(),
    customer_id: integerSchema.nullable().optional(),
    name: string().nullable().optional(),
    phone: string().nullable().optional(),
  })
    .nullable()
    .optional(),
  delivering_date: rfc3339DateTimeSchema.nullable().optional(),
  delivery_method: fbsDeliveryMethodSchema.nullable().optional(),
  delivery_schema: string().nullable().optional(),
  destination_place_id: integerSchema.nullable().optional(),
  destination_place_name: string().nullable().optional(),
  external_order: fbsExternalOrderSchema.nullable().optional(),
  financial_data: financialDataSchema.nullable().optional(),
  in_process_at: rfc3339DateTimeSchema.nullable().optional(),
  integration_type_flow: string().nullable().optional(),
  is_click_and_collect: boolean().nullable().optional(),
  is_express: boolean().nullable().optional(),
  is_multibox: boolean().nullable().optional(),
  is_presortable: boolean().nullable().optional(),
  legal_info: fbsLegalInfoSchema.nullable().optional(),
  multi_box_qty: integerSchema.nullable().optional(),
  optional: fbsOptionalDataSchema.nullable().optional(),
  order_id: integerSchema.nullable().optional(),
  order_number: string().nullable().optional(),
  parent_posting_number: string().nullable().optional(),
  pickup_code_verified_at: rfc3339DateTimeSchema.nullable().optional(),
  posting_number: string().nullable().optional(),
  products: array(productSchema).nullable().optional(),
  prr_option: string().nullable().optional(),
  quantum_id: integerSchema.nullable().optional(),
  received_at_sorting_center: rfc3339DateTimeSchema.nullable().optional(),
  require_blr_traceable_attrs: boolean().nullable().optional(),
  requirements: fbsRequirementsSchema.nullable().optional(),
  shipment_date: rfc3339DateTimeSchema.nullable().optional(),
  shipment_date_without_delay: rfc3339DateTimeSchema.nullable().optional(),
  sorting_center: fbsSortingCenterSchema.nullable().optional(),
  status: string().nullable().optional(),
  substatus: string().nullable().optional(),
  tariffication: tarifficationSchema.nullable().optional(),
  tariffication_steps: array(fbsTarifficationStepSchema).nullable().optional(),
  tpl_integration_type: string().nullable().optional(),
  tracking_number: string().nullable().optional(),
  volume_weight: number().nullable().optional(),
});
