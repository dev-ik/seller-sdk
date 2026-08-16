export interface GetProductPriceDetailsV1Request {
  /**
   * Список SKU.
   *
   * Минимум элементов: `1`. Максимум элементов: `1000`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly skus: readonly string[];
}

export interface OzonProductPriceDetailsMoney {
  readonly amount?: string;
  readonly currency?: string;
}

export interface OzonProductPriceIndexDataDetails {
  readonly min_price?: OzonProductPriceDetailsMoney;
  readonly price_index?: number;
  readonly url?: string;
}

export interface OzonProductPriceIndexDetails {
  readonly external_index_data?: OzonProductPriceIndexDataDetails;
  readonly self_index_data?: OzonProductPriceIndexDataDetails;
}

export interface OzonProductPriceDetails {
  readonly customer_price?: OzonProductPriceDetailsMoney;
  /** @deprecated Ozon marks this field as deprecated. */
  readonly discount_percent?: number;
  readonly offer_id?: string;
  readonly price?: OzonProductPriceDetailsMoney;
  readonly price_indexes?: readonly OzonProductPriceIndexDetails[];
  readonly sku?: number;
}

export interface GetProductPriceDetailsV1Response {
  readonly prices?: readonly OzonProductPriceDetails[];
}
