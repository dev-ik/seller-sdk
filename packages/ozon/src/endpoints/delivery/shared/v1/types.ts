export interface OzonDeliveryCoordinates {
  /**
   * Широта.
   *
   * Формат: `double`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly lat?: number;

  /**
   * Долгота.
   *
   * Формат: `double`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly long?: number;
}

export interface OzonDeliveryDateRange {
  readonly from?: string;
  readonly to?: string;
}
