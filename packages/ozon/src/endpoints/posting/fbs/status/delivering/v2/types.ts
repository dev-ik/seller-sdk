import type { OzonFbsPostingMoveStatusResponse } from "../../shared/types.js";

export interface SetFbsPostingsDeliveringRequest {
  /**
   * Идентификатор отправления.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly posting_number: readonly string[];
}

export type SetFbsPostingsDeliveringResponse = OzonFbsPostingMoveStatusResponse;
