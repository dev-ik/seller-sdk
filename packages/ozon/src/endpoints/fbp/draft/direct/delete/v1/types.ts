import type { OzonFbpDraftDeleteResponse } from "../../../shared/v1/types.js";
export interface DeleteFbpDirectDraftV1Request {
  /**
   * Идентификатор поставки.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly supply_id: string;
}
export type DeleteFbpDirectDraftV1Response = OzonFbpDraftDeleteResponse;
