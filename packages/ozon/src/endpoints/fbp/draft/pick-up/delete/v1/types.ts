import type { OzonFbpDraftDeleteResponse } from "../../../shared/v1/types.js";

export interface DeleteFbpPickupDraftV1Request {
  /**
   * Идентификатор поставки.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly supply_id: string;
}

export type DeleteFbpPickupDraftV1Response = OzonFbpDraftDeleteResponse;
