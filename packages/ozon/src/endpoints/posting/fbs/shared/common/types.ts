export interface OzonFbsAddress {
  readonly address_tail?: string;
  readonly city?: string;
  readonly comment?: string;
  readonly country?: string;
  readonly district?: string;
  readonly latitude?: number;
  readonly longitude?: number;
  readonly provider_pvz_code?: string;
  readonly pvz_code?: number;
  readonly region?: string;
  readonly zip_code?: string;
}

export interface OzonFbsAnalyticsData {
  readonly city?: string;
  readonly client_delivery_date_begin?: string;
  readonly client_delivery_date_end?: string;
  readonly delivery_date_begin?: string;
  readonly delivery_date_end?: string;
  readonly delivery_type?: string;
  readonly is_legal?: boolean;
  readonly is_premium?: boolean;
  readonly payment_type_group_name?: string;
  readonly region?: string;
  readonly tpl_provider?: string;
  readonly tpl_provider_id?: number;
  readonly warehouse?: string;
  readonly warehouse_id?: number;
}

export interface OzonFbsBarcodes {
  readonly lower_barcode?: string;
  readonly upper_barcode?: string;
}

export interface OzonFbsCancellation {
  readonly affect_cancellation_rating?: boolean;
  readonly cancel_reason?: string;
  readonly cancel_reason_id?: number;
  readonly cancellation_initiator?: string;
  readonly cancellation_type?: string;
  readonly cancelled_after_ship?: boolean;
}

export interface OzonFbsContainer {
  readonly cargo_type?: "BOX" | "PALLET";
  readonly container_date?: string;
  readonly container_id?: number;
  readonly container_number?: number;
}

export interface OzonFbsDeliveryMethod {
  readonly id?: number;
  readonly name?: string;
  readonly tpl_provider?: string;
  readonly tpl_provider_id?: number;
  readonly warehouse?: string;
  readonly warehouse_id?: number;
}

export interface OzonFbsExternalOrder {
  readonly is_external?: boolean;
  readonly platform_name?: string;
}

export interface OzonFbsLegalInfo {
  readonly company_name?: string;
  readonly inn?: string;
  readonly kpp?: string;
}

export interface OzonFbsMoney {
  readonly amount?: string;
  readonly currency?: string;
}

export interface OzonFbsOptionalData {
  readonly products_with_possible_mandatory_mark?: readonly string[];
}

export interface OzonFbsRequirements {
  readonly products_requiring_change_country?: readonly string[];
  readonly products_requiring_country?: readonly string[];
  readonly products_requiring_gtd?: readonly string[];
  readonly products_requiring_imei?: readonly string[];
  readonly products_requiring_jw_uin?: readonly string[];
  readonly products_requiring_mandatory_mark?: readonly string[];
  readonly products_requiring_rnpt?: readonly string[];
  readonly products_requiring_weight?: readonly string[];
}

export interface OzonFbsSortingCenter {
  readonly code?: string;
  readonly name?: string;
}

export interface OzonFbsTarifficationStep {
  readonly min_charge?: OzonFbsMoney;
  readonly tariff_charge?: OzonFbsMoney;
  readonly tariff_deadline_at?: string;
  readonly tariff_rate?: number;
  readonly tariff_type?: string;
}
