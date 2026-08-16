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
  fbsOptionalDataSchema,
  fbsRequirementsSchema,
  fbsSortingCenterSchema,
  fbsTarifficationStepSchema,
} from "../common/contract.js";

const addresseeSchema = object({
  name: string().optional(),
  phone: string().optional(),
});

const customerSchema = object({
  address: fbsAddressSchema.optional(),
  customer_email: string().optional(),
  customer_id: integerSchema.optional(),
  name: string().optional(),
  phone: string().optional(),
});

const financialProductSchema = object({
  actions: array(string()).optional(),
  commission_amount: number().optional(),
  commission_percent: integerSchema.optional(),
  commissions_currency_code: string().optional(),
  currency_code: string().optional(),
  customer_currency_code: string().optional(),
  customer_price: number().optional(),
  old_price: number().optional(),
  payout: number().optional(),
  price: number().optional(),
  product_id: integerSchema.optional(),
  quantity: integerSchema.optional(),
  total_discount_percent: number().optional(),
  total_discount_value: number().optional(),
});

const financialDataSchema = object({
  cluster_from: string().optional(),
  cluster_to: string().optional(),
  products: array(financialProductSchema).optional(),
});

const productSchema = object({
  currency_code: string().optional(),
  imei: array(string()).optional(),
  is_blr_traceable: boolean().optional(),
  is_marketplace_buyout: boolean().optional(),
  name: string().optional(),
  offer_id: string().optional(),
  price: string().optional(),
  quantity: integerSchema.optional(),
  sku: integerSchema.optional(),
});

const tarifficationSchema = object({
  current_tariff_charge: string().optional(),
  current_tariff_charge_currency_code: string().optional(),
  current_tariff_rate: number().optional(),
  current_tariff_type: string().optional(),
  next_tariff_charge: string().optional(),
  next_tariff_charge_currency_code: string().optional(),
  next_tariff_rate: number().optional(),
  next_tariff_starts_at: rfc3339DateTimeSchema.optional(),
  next_tariff_type: string().optional(),
});

const fbsPostingV3Shape = {
  addressee: addresseeSchema.optional(),
  analytics_data: fbsAnalyticsDataSchema.optional(),
  available_actions: array(string()).optional(),
  barcodes: fbsBarcodesSchema.optional(),
  cancellation: fbsCancellationSchema.optional(),
  container: fbsContainerSchema.optional(),
  container_sort_type: string().optional(),
  customer: customerSchema.optional(),
  delivering_date: rfc3339DateTimeSchema.optional(),
  delivery_method: fbsDeliveryMethodSchema.optional(),
  destination_place_id: integerSchema.optional(),
  destination_place_name: string().optional(),
  financial_data: financialDataSchema.optional(),
  in_process_at: rfc3339DateTimeSchema.optional(),
  integration_type_flow: string().optional(),
  is_express: boolean().optional(),
  is_multibox: boolean().optional(),
  is_presortable: boolean().optional(),
  legal_info: fbsLegalInfoSchema.optional(),
  multi_box_qty: integerSchema.optional(),
  optional: fbsOptionalDataSchema.optional(),
  order_id: integerSchema.optional(),
  order_number: string().optional(),
  parent_posting_number: string().optional(),
  pickup_code_verified_at: rfc3339DateTimeSchema.optional(),
  posting_number: string().optional(),
  products: array(productSchema).optional(),
  prr_option: string().optional(),
  quantum_id: integerSchema.optional(),
  require_blr_traceable_attrs: boolean().optional(),
  requirements: fbsRequirementsSchema.optional(),
  shipment_date: rfc3339DateTimeSchema.optional(),
  shipment_date_without_delay: rfc3339DateTimeSchema.optional(),
  sorting_center: fbsSortingCenterSchema.optional(),
  status: string().optional(),
  substatus: string().optional(),
  tariffication: tarifficationSchema.optional(),
  tariffication_steps: array(fbsTarifficationStepSchema).optional(),
  tpl_integration_type: string().optional(),
  tracking_number: string().optional(),
};

export const fbsPostingV3Schema = object(fbsPostingV3Shape);

const detailProductSchema = object({
  currency_code: string().optional(),
  dimensions: object({
    height: string().optional(),
    length: string().optional(),
    weight: string().optional(),
    width: string().optional(),
  }).optional(),
  has_imei: boolean().optional(),
  is_blr_traceable: boolean().optional(),
  is_marketplace_buyout: boolean().optional(),
  is_weight_needed: boolean().optional(),
  jw_uin: array(string()).optional(),
  mandatory_mark: array(string()).optional(),
  name: string().optional(),
  offer_id: string().optional(),
  price: string().optional(),
  quantity: integerSchema.optional(),
  sku: integerSchema.optional(),
  weight_max: number().optional(),
  weight_min: number().optional(),
});

const productExemplarSchema = object({
  exemplar_id: integerSchema.optional(),
  gtd: string().optional(),
  imei: array(string()).optional(),
  is_gtd_absent: boolean().optional(),
  is_rnpt_absent: boolean().optional(),
  mandatory_mark: string().optional(),
  rnpt: string().optional(),
  weight: number().optional(),
});

export const fbsPostingDetailV3Schema = object({
  ...fbsPostingV3Shape,
  additional_data: array(
    object({ key: string().optional(), value: string().optional() }),
  ).optional(),
  addressee: object({
    name: string().optional(),
    phone: string().optional(),
    pin: string().optional(),
  }).optional(),
  courier: object({
    car_model: string().optional(),
    car_number: string().optional(),
    name: string().optional(),
    phone: string().optional(),
  }).optional(),
  delivery_price: string().optional(),
  external_order: fbsExternalOrderSchema.optional(),
  fact_delivery_date: rfc3339DateTimeSchema.optional(),
  previous_substatus: string().optional(),
  product_exemplars: object({
    products: array(
      object({
        exemplars: array(productExemplarSchema).optional(),
        sku: integerSchema.optional(),
      }),
    ).optional(),
  }).optional(),
  products: array(detailProductSchema).optional(),
  provider_status: string().optional(),
  prr_option: object({
    code: string().optional(),
    currency_code: string().optional(),
    floor: string().optional(),
    price: string().optional(),
  }).optional(),
  related_postings: object({
    related_posting_numbers: array(string()).optional(),
  }).optional(),
  related_weight_postings: array(string()).optional(),
});
