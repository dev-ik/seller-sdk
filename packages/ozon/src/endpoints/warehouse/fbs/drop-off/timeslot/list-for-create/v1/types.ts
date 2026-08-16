import type { OzonWarehouseTimeslotsResponse } from "../../../../shared/v1/types.js";

export interface ListDropOffTimeslotsForWarehouseCreateV1Request {
  /**
   * Идентификатор drop-off пункта.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly drop_off_point_id: number;
}

export type ListDropOffTimeslotsForWarehouseCreateV1Response =
  OzonWarehouseTimeslotsResponse;
