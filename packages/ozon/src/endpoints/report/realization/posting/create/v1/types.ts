export interface CreateRealizationPostingReportV1Request {
  /**
   * Месяц.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly month: number;

  /**
   * Год.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly year: number;
}

export interface CreateRealizationPostingReportV1Response {
  readonly code?: string;
}
