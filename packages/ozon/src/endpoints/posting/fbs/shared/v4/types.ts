import type {
  OzonFbsAddress,
  OzonFbsAnalyticsData,
  OzonFbsBarcodes,
  OzonFbsCancellation,
  OzonFbsContainer,
  OzonFbsDeliveryMethod,
  OzonFbsExternalOrder,
  OzonFbsLegalInfo,
  OzonFbsMoney,
  OzonFbsOptionalData,
  OzonFbsRequirements,
  OzonFbsSortingCenter,
  OzonFbsTarifficationStep,
} from "../common/types.js";

export type OzonFbsPostingSortDirectionV4 = "ASC" | "DESC";

export interface OzonFbsPostingWithParamsV4 {
  /**
   * `true`, чтобы добавить в ответ данные аналитики.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly analytics_data?: boolean;

  /**
   * `true`, чтобы добавить в ответ штрихкоды отправления.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly barcodes?: boolean;

  /**
   * `true`, чтобы добавить в ответ финансовые данные.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly financial_data?: boolean;

  /**
   * `true`, чтобы добавить в ответ юридическую информацию.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly legal_info?: boolean;
}

export interface OzonFbsPostingAddresseeV4 {
  readonly name?: string | null;
}

export interface OzonFbsPostingCustomerV4 {
  readonly address?: OzonFbsAddress | null;
  readonly customer_email?: string | null;
  readonly customer_id?: number | null;
  readonly name?: string | null;
  readonly phone?: string | null;
}

export interface OzonFbsPostingCommissionV4 {
  readonly amount?: number | null;
  readonly currency?: string | null;
  readonly percent?: number | null;
}

export interface OzonFbsPostingFinancialProductV4 {
  readonly actions?: readonly string[] | null;
  readonly commission?: OzonFbsPostingCommissionV4 | null;
  readonly customer_price?: OzonFbsMoney | null;
  readonly old_price?: number | null;
  readonly payout?: number | null;
  readonly price?: number | null;
  readonly product_id?: number | null;
  readonly quantity?: number | null;
  readonly total_discount_percent?: number | null;
  readonly total_discount_value?: number | null;
}

export interface OzonFbsPostingFinancialDataV4 {
  readonly cluster_from?: string | null;
  readonly cluster_to?: string | null;
  readonly products?: readonly OzonFbsPostingFinancialProductV4[] | null;
}

export interface OzonFbsPostingProductV4 {
  readonly imei?: readonly string[] | null;
  readonly is_blr_traceable?: boolean | null;
  readonly is_marketplace_buyout?: boolean | null;
  readonly name?: string | null;
  readonly offer_id?: string | null;
  readonly price?: OzonFbsMoney | null;
  readonly product_color?: string | null;
  readonly quantity?: number | null;
  readonly sku?: number | null;
  readonly weight?: number | null;
}

export interface OzonFbsPostingTarifficationV4 {
  readonly current_tariff_charge?: OzonFbsMoney | null;
  readonly current_tariff_min_charge?: OzonFbsMoney | null;
  readonly current_tariff_rate?: number | null;
  readonly current_tariff_type?: string | null;
  readonly next_tariff_charge?: OzonFbsMoney | null;
  readonly next_tariff_min_charge?: OzonFbsMoney | null;
  readonly next_tariff_rate?: number | null;
  readonly next_tariff_starts_at?: string | null;
  readonly next_tariff_type?: string | null;
}

export interface OzonFbsPostingV4 {
  readonly addressee?: OzonFbsPostingAddresseeV4 | null;
  readonly analytics_data?: OzonFbsAnalyticsData | null;
  readonly available_actions?: readonly string[] | null;
  readonly barcodes?: OzonFbsBarcodes | null;
  readonly cancellation?: OzonFbsCancellation | null;
  readonly container?: OzonFbsContainer | null;
  readonly container_sort_type?: string | null;
  readonly customer?: OzonFbsPostingCustomerV4 | null;
  readonly delivering_date?: string | null;
  readonly delivery_method?: OzonFbsDeliveryMethod | null;
  readonly delivery_schema?: string | null;
  readonly destination_place_id?: number | null;
  readonly destination_place_name?: string | null;
  readonly external_order?: OzonFbsExternalOrder | null;
  readonly financial_data?: OzonFbsPostingFinancialDataV4 | null;
  readonly in_process_at?: string | null;
  readonly integration_type_flow?: string | null;
  readonly is_click_and_collect?: boolean | null;
  readonly is_express?: boolean | null;
  readonly is_multibox?: boolean | null;
  readonly is_presortable?: boolean | null;
  readonly legal_info?: OzonFbsLegalInfo | null;
  readonly multi_box_qty?: number | null;
  readonly optional?: OzonFbsOptionalData | null;
  readonly order_id?: number | null;
  readonly order_number?: string | null;
  readonly parent_posting_number?: string | null;
  readonly pickup_code_verified_at?: string | null;
  readonly posting_number?: string | null;
  readonly products?: readonly OzonFbsPostingProductV4[] | null;
  readonly prr_option?: string | null;
  readonly quantum_id?: number | null;
  readonly received_at_sorting_center?: string | null;
  readonly require_blr_traceable_attrs?: boolean | null;
  readonly requirements?: OzonFbsRequirements | null;
  readonly shipment_date?: string | null;
  readonly shipment_date_without_delay?: string | null;
  readonly sorting_center?: OzonFbsSortingCenter | null;
  readonly status?: string | null;
  readonly substatus?: string | null;
  readonly tariffication?: OzonFbsPostingTarifficationV4 | null;
  readonly tariffication_steps?: readonly OzonFbsTarifficationStep[] | null;
  readonly tpl_integration_type?: string | null;
  readonly tracking_number?: string | null;
  readonly volume_weight?: number | null;
}
