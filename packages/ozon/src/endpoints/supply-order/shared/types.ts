export type OzonSupplyOrderState =
  | "UNSPECIFIED"
  | "DATA_FILLING"
  | "READY_TO_SUPPLY"
  | "ACCEPTED_AT_SUPPLY_WAREHOUSE"
  | "IN_TRANSIT"
  | "ACCEPTANCE_AT_STORAGE_WAREHOUSE"
  | "REPORTS_CONFIRMATION_AWAITING"
  | "REPORT_REJECTED"
  | "COMPLETED"
  | "REJECTED_AT_SUPPLY_WAREHOUSE"
  | "CANCELLED"
  | "OVERDUE";

export interface OzonSupplyOrderTimeslot {
  /**
   * Начало интервала по местному времени.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly from?: string;

  /**
   * Конец интервала по местному времени.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly to?: string;
}

export interface OzonSupplyOrderTimezone {
  readonly iana_name?: string;
  readonly offset?: string;
}

export type OzonSupplyOrderTimeslotUpdateError =
  | "UPDATE_TIMESLOT_ERROR_UNSPECIFIED"
  | "UPDATE_TIMESLOT_ERROR_INVALID_ORDER_STATE"
  | "UPDATE_TIMESLOT_ERROR_INCOMPATIBLE_ORDER_FLOW"
  | "UPDATE_TIMESLOT_ERROR_SET_TIMESLOT_DEADLINE_EXCEED"
  | "UPDATE_TIMESLOT_ERROR_OUT_OF_ALLOWED_RANGE"
  | "UPDATE_TIMESLOT_ERROR_ORDER_NOT_BELONG_CONTRACTOR"
  | "UPDATE_TIMESLOT_ERROR_ORDER_NOT_BELONG_COMPANY"
  | "UPDATE_TIMESLOT_ERROR_PICKUP_ORDER_LIMIT_EXCEEDED"
  | "UPDATE_TIMESLOT_ERROR_LIMIT_OF_CHANGING_TIMESLOT_EXCEEDED";

export type OzonSupplyOrderPassError =
  | "SET_VEHICLE_ERROR_UNSPECIFIED"
  | "SET_VEHICLE_ERROR_INVALID_ORDER_STATE"
  | "SET_VEHICLE_ERROR_VEHICLE_NOT_REQUIRED"
  | "SET_VEHICLE_ERROR_ORDER_NOT_BELONG_CONTRACTOR"
  | "SET_VEHICLE_ERROR_ORDER_NOT_BELONG_COMPANY";
