export interface OzonInvoiceHsCode {
  /**
   * HS-код товара.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly code?: string;

  /**
   * Идентификатор товара в системе Ozon — SKU.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly sku?: string;
}
