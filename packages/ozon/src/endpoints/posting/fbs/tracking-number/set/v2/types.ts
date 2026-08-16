import type { OzonFbsPostingMoveStatusResponse } from "../../../status/shared/types.js";

export interface OzonFbsPostingTrackingNumber {
  /**
   * Идентификатор отправления.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly posting_number: string;

  /**
   * Трек-номер отправления.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly tracking_number: string;
}

export interface SetFbsPostingTrackingNumbersRequest {
  /**
   * Массив с парами идентификатор отправления — трек-номер.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly tracking_numbers: readonly OzonFbsPostingTrackingNumber[];
}

export type SetFbsPostingTrackingNumbersResponse =
  OzonFbsPostingMoveStatusResponse;
