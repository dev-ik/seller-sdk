import type { OzonFbpDraftRegistrationResponse } from "../../../shared/v1/types.js";

export interface RegisterFbpPickupDraftV1Request {
  /**
   * Идентификатор актуальной версии черновика.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly row_version: number;

  /**
   * Идентификатор заявки на поставку.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly supply_id: string;
}

export type RegisterFbpPickupDraftV1Response = OzonFbpDraftRegistrationResponse;
