import type { OzonFbpOrderMutationResponse } from "../../../shared/v1/types.js";

export interface CancelFbpDropOffOrderV1Request {
  /**
   * Идентификатор поставки.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly supply_id: string;
}

export type CancelFbpDropOffOrderV1Response = OzonFbpOrderMutationResponse;
