import type { OzonFbsPostingMoveStatusResponse } from "../../shared/types.js";

export interface SetFbsPostingsLastMileRequest {
  /**
   * Идентификатор отправления.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly posting_number: readonly string[];
}

export type SetFbsPostingsLastMileResponse = OzonFbsPostingMoveStatusResponse;
