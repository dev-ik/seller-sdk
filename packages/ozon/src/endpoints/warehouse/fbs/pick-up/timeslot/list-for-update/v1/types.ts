import type { OzonWarehouseTimeslotsResponse } from "../../../../shared/v1/types.js";

export interface ListPickUpTimeslotsForWarehouseUpdateV1Request {
  /**
   * Идентификатор склада.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly warehouse_id: number;
}

export type ListPickUpTimeslotsForWarehouseUpdateV1Response =
  OzonWarehouseTimeslotsResponse;
