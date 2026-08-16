import type { OzonFbpDraftRegistrationResponse } from "../../../shared/v1/types.js";
export interface RegisterFbpDirectDraftV1Request {
  /**
   * Идентификатор актуальной версии черновика.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly row_version: number;

  /**
   * Идентификатор поставки.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly supply_id: string;
}
export type RegisterFbpDirectDraftV1Response = OzonFbpDraftRegistrationResponse;
