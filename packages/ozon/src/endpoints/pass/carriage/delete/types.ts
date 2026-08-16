export interface DeleteCarriagePassesRequest {
  /**
   * Идентификаторы пропусков.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly arrival_pass_ids: readonly string[];

  /**
   * Идентификатор перевозки.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly carriage_id: number;
}
