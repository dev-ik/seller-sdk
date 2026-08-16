export interface CreateReviewCommentV1Request {
  /**
   * Обновление статуса у отзыва: - `true` — статус изменится на `Processed`. - `false` — статус не
   * изменится.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly mark_review_as_processed?: boolean;

  /**
   * Идентификатор родительского комментария, на который вы отвечаете.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly parent_comment_id?: string;

  /**
   * Идентификатор отзыва.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly review_id: string;

  /**
   * Текст комментария.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly text: string;
}

export interface CreateReviewCommentV1Response {
  readonly comment_id?: string;
}
