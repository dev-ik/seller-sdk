export interface CreatePlacementReportRequest {
  /**
   * Дата начала отчётного периода в формате `YYYY-MM-DD`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly date_from: string;

  /**
   * Дата окончания отчётного периода в формате `YYYY-MM-DD`. Максимальный период — 31 день.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly date_to: string;
}

export interface CreatePlacementReportResponse {
  readonly code?: string;
}
