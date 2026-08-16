export interface DeleteReviewCommentV1Request {
  /**
   * Идентификатор комментария.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly comment_id: string;
}

export type DeleteReviewCommentV1Response = Readonly<Record<string, never>>;
