export interface OzonFbpMoney {
  readonly amount?: string;
  readonly currency?: string;
}

export interface OzonFbpPostingProductAction {
  readonly action_id?: number;
  readonly action_type?: string;
  readonly date_from?: string;
  readonly date_to?: string;
  readonly description?: string;
  readonly discount_percent?: number;
  readonly discount_value?: number;
}

export interface OzonFbpCommission {
  readonly amount?: number;
  readonly payout?: number;
  readonly percent?: number;
}

export interface OzonFbpFinancialProduct {
  readonly actions?: readonly OzonFbpPostingProductAction[];
  readonly commissions_price?: OzonFbpMoney;
  readonly customer_price?: OzonFbpMoney;
  readonly old_price?: number;
  readonly posting_commission?: OzonFbpCommission;
  readonly quantity?: number;
  readonly return_commission?: OzonFbpCommission;
  readonly seller_price?: OzonFbpMoney;
  readonly sku?: number;
  readonly total_discount_percent?: number;
  readonly total_discount_value?: number;
}

export interface OzonFbpPostingProduct {
  readonly has_imei?: boolean;
  readonly marketplace_seller_price?: OzonFbpMoney;
  readonly name?: string;
  readonly offer_id?: string;
  readonly quantity?: number;
  readonly sku?: number;
  readonly weight_max?: number;
}

export interface OzonFbpPosting {
  readonly analytics_data?: {
    readonly city?: string;
    readonly delivery_date_begin?: string;
    readonly delivery_date_end?: string;
    readonly delivery_type?: string;
    readonly region?: string;
    readonly warehouse_id?: number;
  };
  readonly cancellation?: {
    readonly cancel_reason?: string;
    readonly cancel_reason_id?: number;
    readonly cancellation_initiator?: string;
    readonly cancellation_type?: string;
  };
  readonly financial_data?: {
    readonly cluster_from?: string;
    readonly cluster_to?: string;
    readonly delivery_amount?: number;
    readonly products?: readonly OzonFbpFinancialProduct[];
  };
  readonly in_process_at?: string;
  readonly order_date?: string;
  readonly order_id?: number;
  readonly order_number?: string;
  readonly posting_number?: string;
  readonly products?: readonly OzonFbpPostingProduct[];
  readonly status?: number;
  readonly substatus?: string;
  readonly tpl_provider_id?: number;
}

export interface GetFbpPostingV1Request {
  /**
   * Идентификатор отправления.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly posting_number: string;
}

export interface GetFbpPostingV1Response {
  readonly posting?: OzonFbpPosting;
}
