import {
  array,
  boolean,
  literal,
  number,
  object,
  string,
  union,
} from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../../../contracts/rfc3339-date-time.js";

export const fbsAddressSchema = object({
  address_tail: string().optional(),
  city: string().optional(),
  comment: string().optional(),
  country: string().optional(),
  district: string().optional(),
  latitude: number().optional(),
  longitude: number().optional(),
  provider_pvz_code: string().optional(),
  pvz_code: integerSchema.optional(),
  region: string().optional(),
  zip_code: string().optional(),
});

export const fbsAnalyticsDataSchema = object({
  city: string().optional(),
  client_delivery_date_begin: rfc3339DateTimeSchema.optional(),
  client_delivery_date_end: rfc3339DateTimeSchema.optional(),
  delivery_date_begin: rfc3339DateTimeSchema.optional(),
  delivery_date_end: rfc3339DateTimeSchema.optional(),
  delivery_type: string().optional(),
  is_legal: boolean().optional(),
  is_premium: boolean().optional(),
  payment_type_group_name: string().optional(),
  region: string().optional(),
  tpl_provider: string().optional(),
  tpl_provider_id: integerSchema.optional(),
  warehouse: string().optional(),
  warehouse_id: integerSchema.optional(),
});

export const fbsBarcodesSchema = object({
  lower_barcode: string().optional(),
  upper_barcode: string().optional(),
});

export const fbsCancellationSchema = object({
  affect_cancellation_rating: boolean().optional(),
  cancel_reason: string().optional(),
  cancel_reason_id: integerSchema.optional(),
  cancellation_initiator: string().optional(),
  cancellation_type: string().optional(),
  cancelled_after_ship: boolean().optional(),
});

export const fbsContainerSchema = object({
  cargo_type: union([literal("BOX"), literal("PALLET")]).optional(),
  container_date: rfc3339DateTimeSchema.optional(),
  container_id: integerSchema.optional(),
  container_number: integerSchema.optional(),
});

export const fbsDeliveryMethodSchema = object({
  id: integerSchema.optional(),
  name: string().optional(),
  tpl_provider: string().optional(),
  tpl_provider_id: integerSchema.optional(),
  warehouse: string().optional(),
  warehouse_id: integerSchema.optional(),
});

export const fbsExternalOrderSchema = object({
  is_external: boolean().optional(),
  platform_name: string().optional(),
});

export const fbsLegalInfoSchema = object({
  company_name: string().optional(),
  inn: string().optional(),
  kpp: string().optional(),
});

export const fbsMoneySchema = object({
  amount: string().optional(),
  currency: string().optional(),
});

export const fbsOptionalDataSchema = object({
  products_with_possible_mandatory_mark: array(string()).optional(),
});

export const fbsRequirementsSchema = object({
  products_requiring_change_country: array(string()).optional(),
  products_requiring_country: array(string()).optional(),
  products_requiring_gtd: array(string()).optional(),
  products_requiring_imei: array(string()).optional(),
  products_requiring_jw_uin: array(string()).optional(),
  products_requiring_mandatory_mark: array(string()).optional(),
  products_requiring_rnpt: array(string()).optional(),
  products_requiring_weight: array(string()).optional(),
});

export const fbsSortingCenterSchema = object({
  code: string().optional(),
  name: string().optional(),
});

export const fbsTarifficationStepSchema = object({
  min_charge: fbsMoneySchema.optional(),
  tariff_charge: fbsMoneySchema.optional(),
  tariff_deadline_at: rfc3339DateTimeSchema.optional(),
  tariff_rate: number().optional(),
  tariff_type: string().optional(),
});
