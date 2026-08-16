import type { OzonFbpArchiveSupply } from "../../shared/v1/types.js";

export interface GetFbpArchiveSupplyV1Request {
  /**
   * Идентификатор поставки.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly supply_id: string;
}

export type GetFbpArchiveSupplyV1Response = OzonFbpArchiveSupply;
