import type { OzonSupplyOrderTimezone } from "../../../shared/types.js";

export interface ListSupplyOrderTimeslotsV1Request {
  /**
   * Идентификатор заявки на поставку.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly supply_order_id: number;
}
export interface OzonSupplyOrderTimeslotV1 {
  readonly from: string;
  readonly to: string;
}
export interface ListSupplyOrderTimeslotsV1Response {
  readonly timeslots?: readonly OzonSupplyOrderTimeslotV1[];
  readonly timezone?: readonly OzonSupplyOrderTimezone[];
}
