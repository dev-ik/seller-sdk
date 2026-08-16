import type { OzonFbpDraftDeleteResponse } from "../../../shared/v1/types.js";
export interface DeleteFbpDropOffDraftV1Request {
  /**
   * Идентификатор заявки на поставку.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly supply_id: string;
}
export type DeleteFbpDropOffDraftV1Response = OzonFbpDraftDeleteResponse;
