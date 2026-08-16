export interface GetFinanceProductsBuyoutV1Request {
  /**
   * Дата, с которой будут данные в отчёте.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly date_from: string;

  /**
   * Дата, по которую будут данные в отчёте. Максимальный период — 31 день.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly date_to: string;
}

export interface OzonFinanceBuyoutProductV1 {
  readonly amount?: number;
  readonly buyout_price?: number;
  readonly deduction_by_category_percent?: number;
  readonly name?: string;
  readonly offer_id?: string;
  readonly posting_number?: string;
  readonly quantity?: number;
  readonly seller_price_per_instance?: number;
  readonly sku?: number;
  readonly vat_percent?: number;
}

export interface GetFinanceProductsBuyoutV1Response {
  readonly products?: readonly OzonFinanceBuyoutProductV1[];
}
