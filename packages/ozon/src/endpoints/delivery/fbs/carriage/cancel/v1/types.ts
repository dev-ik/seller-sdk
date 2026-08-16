export interface CancelFbsCarriageRequest {
  /**
   * Идентификатор отгрузки.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly carriage_id: number;
}

export interface CancelFbsCarriageResponse {
  readonly carriage_status?: string;
  readonly error?: string;
}
