export interface GetFbsCarriageDiscrepancyActRequest {
  /**
   * Идентификатор отгрузки.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly carriage_id: number;
}
export interface GetFbsCarriageDiscrepancyActResponse {
  readonly content?: string;
  readonly name?: string;
  readonly type?: string;
}
