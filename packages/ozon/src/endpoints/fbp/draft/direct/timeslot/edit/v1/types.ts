export type OzonFbpTimeslotReserveFailure =
  | "RESERVE_FAILURE_TYPE_UNSPECIFIED"
  | "REQUEST_VALIDATION"
  | "INVALID_RESERVE"
  | "LOGISTICS_REASON"
  | "SCHEDULE_REASON"
  | "NO_CAPACITY";
export interface EditFbpDirectTimeslotV1Request {
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

  /**
   * Начало таймслота.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly timeslot_start: string;
}
export interface EditFbpDirectTimeslotV1Response {
  readonly error_reasons?: readonly OzonFbpTimeslotReserveFailure[];
  readonly row_version?: number;
}
