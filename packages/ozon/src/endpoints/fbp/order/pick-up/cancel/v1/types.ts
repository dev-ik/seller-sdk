import type { OzonFbpOrderMutationResponse } from "../../../shared/v1/types.js";

export interface CancelFbpPickupOrderV1Request {
  /**
   * Идентификатор поставки.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly supply_id: string;
}

export type CancelFbpPickupOrderV1Response = OzonFbpOrderMutationResponse;
