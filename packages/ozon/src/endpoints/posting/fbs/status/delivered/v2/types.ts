import type { OzonFbsPostingMoveStatusResponse } from "../../shared/types.js";

export interface SetFbsPostingsDeliveredRequest {
  /**
   * Идентификатор отправления.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly posting_number: readonly string[];
}

export type SetFbsPostingsDeliveredResponse = OzonFbsPostingMoveStatusResponse;
