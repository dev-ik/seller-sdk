export type OzonFbpDayOfWeek =
  | "DAY_OF_WEEK_UNSPECIFIED"
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
  | "SUNDAY";
export interface GetFbpDropOffPointTimetableV1Request {
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
export interface GetFbpDropOffPointTimetableV1Response {
  readonly calendar?: readonly {
    readonly calendar_item?: {
      readonly break_hours?: {
        readonly timeslot_end?: string;
        readonly timeslot_start?: string;
      };
      readonly is_holiday?: boolean;
      readonly opening_hours?: {
        readonly timeslot_end?: string;
        readonly timeslot_start?: string;
      };
    };
    readonly day_of_week?: OzonFbpDayOfWeek;
  }[];
}
