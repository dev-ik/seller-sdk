import type {
  OzonFbsAddress,
  OzonFbsAnalyticsData,
  OzonFbsBarcodes,
  OzonFbsCancellation,
  OzonFbsContainer,
  OzonFbsDeliveryMethod,
  OzonFbsExternalOrder,
  OzonFbsLegalInfo,
  OzonFbsOptionalData,
  OzonFbsRequirements,
  OzonFbsSortingCenter,
  OzonFbsTarifficationStep,
} from "../common/types.js";

export interface OzonFbsPostingWithParamsV3 {
  /**
   * Добавить в ответ данные аналитики.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly analytics_data?: boolean;

  /**
   * Добавить в ответ штрихкоды отправления.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly barcodes?: boolean;

  /**
   * Добавить в ответ финансовые данные.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly financial_data?: boolean;

  /**
   * Добавить в ответ юридическую информацию.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly legal_info?: boolean;

  /**
   * Выполнить транслитерацию возвращаемых значений.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly translit?: boolean;
}

export interface OzonFbsPostingAddresseeV3 {
  readonly name?: string;
  readonly phone?: string;
}

export interface OzonFbsPostingCustomerV3 {
  readonly address?: OzonFbsAddress;
  readonly customer_email?: string;
  readonly customer_id?: number;
  readonly name?: string;
  readonly phone?: string;
}

export interface OzonFbsPostingFinancialProductV3 {
  readonly actions?: readonly string[];
  readonly commission_amount?: number;
  readonly commission_percent?: number;
  readonly commissions_currency_code?: string;
  readonly currency_code?: string;
  readonly customer_currency_code?: string;
  readonly customer_price?: number;
  readonly old_price?: number;
  readonly payout?: number;
  readonly price?: number;
  readonly product_id?: number;
  readonly quantity?: number;
  readonly total_discount_percent?: number;
  readonly total_discount_value?: number;
}

export interface OzonFbsPostingFinancialDataV3 {
  readonly cluster_from?: string;
  readonly cluster_to?: string;
  readonly products?: readonly OzonFbsPostingFinancialProductV3[];
}

export interface OzonFbsPostingProductV3 {
  readonly currency_code?: string;
  readonly imei?: readonly string[];
  readonly is_blr_traceable?: boolean;
  readonly is_marketplace_buyout?: boolean;
  readonly name?: string;
  readonly offer_id?: string;
  readonly price?: string;
  readonly quantity?: number;
  readonly sku?: number;
}

export interface OzonFbsPostingTarifficationV3 {
  readonly current_tariff_charge?: string;
  readonly current_tariff_charge_currency_code?: string;
  readonly current_tariff_rate?: number;
  readonly current_tariff_type?: string;
  readonly next_tariff_charge?: string;
  readonly next_tariff_charge_currency_code?: string;
  readonly next_tariff_rate?: number;
  readonly next_tariff_starts_at?: string;
  readonly next_tariff_type?: string;
}

export interface OzonFbsPostingV3 {
  readonly addressee?: OzonFbsPostingAddresseeV3;
  readonly analytics_data?: OzonFbsAnalyticsData;
  readonly available_actions?: readonly string[];
  readonly barcodes?: OzonFbsBarcodes;
  readonly cancellation?: OzonFbsCancellation;
  readonly container?: OzonFbsContainer;
  readonly container_sort_type?: string;
  readonly customer?: OzonFbsPostingCustomerV3;
  readonly delivering_date?: string;
  readonly delivery_method?: OzonFbsDeliveryMethod;
  readonly destination_place_id?: number;
  readonly destination_place_name?: string;
  readonly financial_data?: OzonFbsPostingFinancialDataV3;
  readonly in_process_at?: string;
  readonly integration_type_flow?: string;
  readonly is_express?: boolean;
  readonly is_multibox?: boolean;
  readonly is_presortable?: boolean;
  readonly legal_info?: OzonFbsLegalInfo;
  readonly multi_box_qty?: number;
  readonly optional?: OzonFbsOptionalData;
  readonly order_id?: number;
  readonly order_number?: string;
  readonly parent_posting_number?: string;
  readonly pickup_code_verified_at?: string;
  readonly posting_number?: string;
  readonly products?: readonly OzonFbsPostingProductV3[];
  readonly prr_option?: string;
  readonly quantum_id?: number;
  readonly require_blr_traceable_attrs?: boolean;
  readonly requirements?: OzonFbsRequirements;
  readonly shipment_date?: string;
  readonly shipment_date_without_delay?: string;
  readonly sorting_center?: OzonFbsSortingCenter;
  readonly status?: string;
  readonly substatus?: string;
  readonly tariffication?: OzonFbsPostingTarifficationV3;
  readonly tariffication_steps?: readonly OzonFbsTarifficationStep[];
  readonly tpl_integration_type?: string;
  readonly tracking_number?: string;
}

export interface OzonFbsPostingAdditionalDataV3 {
  readonly key?: string;
  readonly value?: string;
}

export interface OzonFbsPostingDetailAddresseeV3
  extends OzonFbsPostingAddresseeV3 {
  readonly pin?: string;
}

export interface OzonFbsPostingCourierV3 {
  readonly car_model?: string;
  readonly car_number?: string;
  readonly name?: string;
  readonly phone?: string;
}

export interface OzonFbsPostingProductDimensionsV3 {
  readonly height?: string;
  readonly length?: string;
  readonly weight?: string;
  readonly width?: string;
}

export interface OzonFbsPostingDetailProductV3 {
  readonly currency_code?: string;
  readonly dimensions?: OzonFbsPostingProductDimensionsV3;
  readonly has_imei?: boolean;
  readonly is_blr_traceable?: boolean;
  readonly is_marketplace_buyout?: boolean;
  readonly is_weight_needed?: boolean;
  readonly jw_uin?: readonly string[];
  readonly mandatory_mark?: readonly string[];
  readonly name?: string;
  readonly offer_id?: string;
  readonly price?: string;
  readonly quantity?: number;
  readonly sku?: number;
  readonly weight_max?: number;
  readonly weight_min?: number;
}

export interface OzonFbsPostingProductExemplarV3 {
  readonly exemplar_id?: number;
  readonly gtd?: string;
  readonly imei?: readonly string[];
  readonly is_gtd_absent?: boolean;
  readonly is_rnpt_absent?: boolean;
  readonly mandatory_mark?: string;
  readonly rnpt?: string;
  readonly weight?: number;
}

export interface OzonFbsPostingProductExemplarsItemV3 {
  readonly exemplars?: readonly OzonFbsPostingProductExemplarV3[];
  readonly sku?: number;
}

export interface OzonFbsPostingProductExemplarsV3 {
  readonly products?: readonly OzonFbsPostingProductExemplarsItemV3[];
}

export interface OzonFbsPostingPrrOptionV3 {
  readonly code?: string;
  readonly currency_code?: string;
  readonly floor?: string;
  readonly price?: string;
}

export interface OzonFbsPostingRelatedPostingsV3 {
  readonly related_posting_numbers?: readonly string[];
}

export interface OzonFbsPostingDetailV3
  extends Omit<OzonFbsPostingV3, "addressee" | "products" | "prr_option"> {
  readonly additional_data?: readonly OzonFbsPostingAdditionalDataV3[];
  readonly addressee?: OzonFbsPostingDetailAddresseeV3;
  readonly courier?: OzonFbsPostingCourierV3;
  readonly delivery_price?: string;
  readonly external_order?: OzonFbsExternalOrder;
  readonly fact_delivery_date?: string;
  readonly previous_substatus?: string;
  readonly product_exemplars?: OzonFbsPostingProductExemplarsV3;
  readonly products?: readonly OzonFbsPostingDetailProductV3[];
  readonly provider_status?: string;
  readonly prr_option?: OzonFbsPostingPrrOptionV3;
  readonly related_postings?: OzonFbsPostingRelatedPostingsV3;
  readonly related_weight_postings?: readonly string[];
}

export interface OzonFbsPostingGetWithParamsV3
  extends OzonFbsPostingWithParamsV3 {
  /**
   * Добавить в ответ данные о продуктах и их экземплярах.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly product_exemplars?: boolean;

  /**
   * Добавить в ответ номера связанных отправлений. Связанные отправления — те, на которое было
   * разделено родительское отправление при сборке.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly related_postings?: boolean;
}
