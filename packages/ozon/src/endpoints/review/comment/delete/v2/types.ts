export interface DeleteReviewCommentV2Request {
  /**
   * Идентификатор комментария.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly comment_id: string;

  /**
   * Идентификатор товара в системе Ozon — SKU.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly sku: number;
}

export type DeleteReviewCommentV2Response = void;
