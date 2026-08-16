import type { OzonFbpOrderDetails } from "../../shared/v1/types.js";

export interface GetFbpOrderV1Request {
  /**
   * Идентификатор поставки.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly supply_id: string;
}

export type GetFbpOrderV1Response = Omit<OzonFbpOrderDetails, "bundle_summary">;
