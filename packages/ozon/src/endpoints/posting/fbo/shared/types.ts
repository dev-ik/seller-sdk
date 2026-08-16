export interface OzonFboPostingWith {
  /**
   * Передайте `true`, чтобы добавить в ответ данные аналитики.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly analytics_data?: boolean;

  /**
   * Передайте `true`, чтобы добавить в ответ финансовые данные.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly financial_data?: boolean;

  /**
   * Передайте `true`, чтобы добавить в ответ юридическую информацию.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly legal_info?: boolean;
}
export interface OzonFboPostingAdditionalData {
  readonly key?: string;
  readonly value?: string;
}
export interface OzonFboPostingAnalyticsData {
  readonly city?: string;
  readonly delivery_type?: string;
  readonly is_legal?: boolean;
  readonly is_premium?: boolean;
  readonly payment_type_group_name?: string;
  readonly warehouse_id?: number;
  readonly warehouse_name?: string;
  readonly client_delivery_date_begin?: string;
  readonly client_delivery_date_end?: string;
}
export interface OzonFboPostingLegalInfo {
  readonly company_name?: string;
  readonly inn?: string;
  readonly kpp?: string;
}
export interface OzonFboPostingProductV2 {
  readonly digital_codes?: readonly string[];
  readonly name?: string;
  readonly offer_id?: string;
  readonly currency_code?: string;
  readonly price?: string;
  readonly is_marketplace_buyout?: boolean;
  readonly quantity?: number;
  readonly sku?: number;
}
export interface OzonFboPostingFinancialProductV2 {
  readonly actions?: readonly string[];
  readonly currency_code?: string;
  readonly commission_amount?: number;
  readonly commission_percent?: number;
  readonly commissions_currency_code?: string;
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
export interface OzonFboPostingFinancialDataV2 {
  readonly cluster_from?: string;
  readonly cluster_to?: string;
  readonly products?: readonly OzonFboPostingFinancialProductV2[];
}
export interface OzonFboPostingExternalOrder {
  readonly is_external?: boolean;
  readonly platform_name?: string;
}
export interface OzonFboPostingV2 {
  readonly additional_data?: readonly OzonFboPostingAdditionalData[];
  readonly analytics_data?: OzonFboPostingAnalyticsData;
  readonly cancel_reason_id?: number;
  readonly created_at?: string;
  readonly external_order?: OzonFboPostingExternalOrder;
  readonly fact_delivery_date?: string;
  readonly financial_data?: OzonFboPostingFinancialDataV2;
  readonly in_process_at?: string;
  readonly legal_info?: OzonFboPostingLegalInfo;
  readonly order_id?: number;
  readonly order_number?: string;
  readonly posting_number?: string;
  readonly products?: readonly OzonFboPostingProductV2[];
  readonly status?: string;
  readonly substatus?: string;
}
