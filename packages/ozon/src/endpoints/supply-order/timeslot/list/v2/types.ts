export type OzonSupplyOrderTimeslotChangeForbiddenReason =
  | "INVALID_ORDER_STATE"
  | "IS_VIRTUAL"
  | "SET_TIMESLOT_DEADLINE_EXCEED"
  | "ORDER_DOES_NOT_BELONG_TO_COMPANY";
export interface ListSupplyOrderTimeslotsV2Request {
  /**
   * Идентификатор заявки на поставку.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly order_id: number;
}
export interface OzonSupplyOrderTimeslotChangeLimitExceeded {
  readonly changes_limit?: number;
}
export interface OzonSupplyOrderTimeslotChangeForbidden {
  readonly error_reasons?: readonly OzonSupplyOrderTimeslotChangeForbiddenReason[];
}
export interface OzonSupplyOrderTimeslotChangeLimitations {
  readonly changes_count?: number;
  readonly changes_limit?: number;
}
export interface OzonSupplyOrderTimeslotV2 {
  readonly from?: string;
  readonly to?: string;
}
export interface OzonSupplyOrderTimezoneV2 {
  readonly iana_name?: string;
  readonly offset?: number;
}
export interface OzonSupplyOrderTimeslotsInfoV2 {
  readonly limitations?: OzonSupplyOrderTimeslotChangeLimitations;
  readonly timeslots?: readonly OzonSupplyOrderTimeslotV2[];
  readonly timezone?: OzonSupplyOrderTimezoneV2;
}
export interface ListSupplyOrderTimeslotsV2Response {
  readonly limit_exceeded?: OzonSupplyOrderTimeslotChangeLimitExceeded;
  readonly timeslot_change_forbidden?: OzonSupplyOrderTimeslotChangeForbidden;
  readonly timeslots_info?: OzonSupplyOrderTimeslotsInfoV2;
}
