import type {
  OzonSupplyOrderTimeslot,
  OzonSupplyOrderTimeslotUpdateError,
} from "../../../shared/types.js";

export interface UpdateSupplyOrderTimeslotRequest {
  /**
   * Идентификатор заявки на поставку.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly supply_order_id: number;

  /**
   * Время интервала поставки.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly timeslot: Required<OzonSupplyOrderTimeslot>;
}
export interface UpdateSupplyOrderTimeslotResponse {
  readonly errors?: readonly OzonSupplyOrderTimeslotUpdateError[];
  readonly operation_id?: string;
}
