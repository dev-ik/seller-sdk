import type { GetFbpDropOffPointTimetableV1Response } from "../../../../draft/drop-off/point/timetable/v1/types.js";

export interface GetFbpDropOffOrderTimetableV1Request {
  /**
   * Идентификатор drop-off пункта.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly drop_off_point_id: number;

  /**
   * Уникальный идентификатор провинции.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly province_uuid: string;

  /**
   * Идентификатор склада.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly warehouse_id: number;
}

export type GetFbpDropOffOrderTimetableV1Response =
  GetFbpDropOffPointTimetableV1Response;
