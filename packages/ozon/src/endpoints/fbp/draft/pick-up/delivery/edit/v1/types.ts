import type { OzonFbpPickupDetails } from "../../../shared/v1/types.js";

export interface EditFbpPickupDraftDeliveryV1Request {
  /**
   * Детали доставки.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly pickup_details: OzonFbpPickupDetails;

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

export interface EditFbpPickupDraftDeliveryV1Response {
  readonly row_version?: number;
}
