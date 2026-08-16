import type { OzonFbsBooleanMutationResponse } from "../../../shared/boolean-mutation/types.js";
export interface SetFbsPostingsAwaitingDeliveryV2Request {
  /**
   * Идентификатор отправления. Максимальное количество в одном запросе — 100.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly posting_number: readonly string[];
}
export type SetFbsPostingsAwaitingDeliveryV2Response =
  OzonFbsBooleanMutationResponse;
