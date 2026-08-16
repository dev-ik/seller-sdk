import type { OzonReviewDetails } from "../../shared/types.js";

export interface GetReviewInfoV1Request {
  /**
   * Идентификатор отзыва.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly review_id: string;
}

export type GetReviewInfoV1Response = OzonReviewDetails;
