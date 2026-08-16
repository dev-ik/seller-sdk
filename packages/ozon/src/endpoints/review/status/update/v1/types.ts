export interface UpdateReviewStatusV1Request {
  /**
   * Массив с идентификаторами отзывов от 1 до 100.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly review_ids: readonly string[];

  /**
   * Статус отзыва: - `PROCESSED` — обработанный, - `UNPROCESSED` — необработанный.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly status: "PROCESSED" | "UNPROCESSED";
}

export type UpdateReviewStatusV1Response = Readonly<Record<string, never>>;
