export type OzonFbpEmptyTimeslotsReason =
  | "EMPTY_TIMESLOTS_REASON_UNSPECIFIED"
  | "LOGISTICS_UNKNOWN"
  | "NO_ROUTE"
  | "NO_ROUTE_SCHEDULES"
  | "NO_LOGISTICS_CAPACITY"
  | "SCHEDULE_UNKNOWN"
  | "NOT_ENOUGH_CAPACITY"
  | "NOT_ENOUGH_TRUCKS"
  | "LIMITS_NOT_AVAILABLE"
  | "CROSS_DOCK_RESERVE_MISSING"
  | "SCHEDULE_RESERVE_MISSING";
export interface GetFbpDirectTimeslotsV1Request {
  /**
   * Идентификатор провалидированного списка товаров.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly bundle_id: string;

  /**
   * Дата окончания нужного периода доступных таймслотов.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly interval_end: string;

  /**
   * Дата начала нужного периода доступных таймслотов.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly interval_start: string;

  /**
   * Идентификатор склада продавца.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly warehouse_id: number;
}
export interface GetFbpDirectTimeslotsV1Response {
  readonly reasons?: readonly OzonFbpEmptyTimeslotsReason[];
  readonly timeslots?: readonly {
    readonly timeslot_end?: string;
    readonly timeslot_start?: string;
  }[];
  readonly warehouse_timezone_name?: string;
}
