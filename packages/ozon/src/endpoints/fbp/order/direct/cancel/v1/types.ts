import type { OzonFbpOrderMutationResponse } from "../../../shared/v1/types.js";

export interface CancelFbpDirectOrderV1Request {
  /**
   * Идентификатор заявки на поставку.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly supply_id: string;
}

export type CancelFbpDirectOrderV1Response = OzonFbpOrderMutationResponse;
