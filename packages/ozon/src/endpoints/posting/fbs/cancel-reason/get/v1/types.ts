import type { OzonFbsCancelReason } from "../../shared/types.js";
export interface GetFbsPostingCancelReasonsV1Request {
  /**
   * Номера отправлений.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly related_posting_numbers: readonly string[];
}
export interface OzonFbsPostingCancelReasonsV1 {
  readonly posting_number?: string;
  readonly reasons?: readonly OzonFbsCancelReason[];
}
export interface GetFbsPostingCancelReasonsV1Response {
  readonly result?: readonly OzonFbsPostingCancelReasonsV1[];
}
