import type { OzonReviewDetails } from "../../shared/types.js";

export interface GetReviewInfoV2Request {
  /**
   * Идентификатор отзыва.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly review_id: string;
}

export interface GetReviewInfoV2Response extends OzonReviewDetails {
  readonly order_status?: "DELIVERED" | "CANCELLED";
  readonly status?: "NEW" | "VIEWED" | "PROCESSED";
}
