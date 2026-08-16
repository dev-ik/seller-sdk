import type { OzonWarehouseOperationResponse } from "../../../operation/shared/types.js";

export interface PauseRfbsWarehouseV1Request {
  /**
   * Идентификатор склада.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly warehouse_id?: number;
}

export type PauseRfbsWarehouseV1Response = OzonWarehouseOperationResponse;
