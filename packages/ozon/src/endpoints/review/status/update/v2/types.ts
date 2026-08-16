export interface UpdateReviewStatusV2Request {
  /**
   * Список идентификаторов отзывов.
   *
   * Минимум элементов: `1`. Максимум элементов: `100`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly review_ids?: readonly string[];

  /**
   * Новый статус отзыва: - `NEW` — новый; - `VIEWED` — просмотренный; - `PROCESSED` — обработанный.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly status?: "NEW" | "VIEWED" | "PROCESSED";
}

export type UpdateReviewStatusV2Response = void;
