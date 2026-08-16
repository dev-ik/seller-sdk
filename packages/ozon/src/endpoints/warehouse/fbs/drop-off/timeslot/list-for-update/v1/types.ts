import type { OzonWarehouseTimeslotsResponse } from "../../../../shared/v1/types.js";

export interface ListDropOffTimeslotsForWarehouseUpdateV1Request {
  /**
   * Идентификатор drop-off пункта.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly drop_off_point_id: number;

  /**
   * Идентификатор склада.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly warehouse_id: number;
}

export type ListDropOffTimeslotsForWarehouseUpdateV1Response =
  OzonWarehouseTimeslotsResponse;
