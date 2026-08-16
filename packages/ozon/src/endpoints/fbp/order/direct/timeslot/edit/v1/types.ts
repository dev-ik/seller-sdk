export type OzonFbpOrderTimeslotReserveFailure =
  | "RESERVE_FAILURE_TYPE_UNSPECIFIED"
  | "REQUEST_VALIDATION"
  | "INVALID_RESERVE"
  | "LOGISTICS_REASON"
  | "SCHEDULE_REASON";

export interface EditFbpDirectOrderTimeslotV1Request {
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

export interface EditFbpDirectOrderTimeslotV1Response {
  readonly error_reasons?: readonly OzonFbpOrderTimeslotReserveFailure[];
  readonly row_version?: number;
}
