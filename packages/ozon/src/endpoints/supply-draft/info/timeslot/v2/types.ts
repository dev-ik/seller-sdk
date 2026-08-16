import type { OzonSupplyDraftType } from "../../create/v2/types.js";
export interface OzonSupplyDraftSelectedWarehouse {
  /**
   * Идентификатор кластера размещения.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly macrolocal_cluster_id?: number;

  /**
   * Идентификатор склада хранения. Только для поставок с типом `DIRECT`.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly storage_warehouse_id?: number;
}
export interface GetSupplyDraftTimeslotsRequest {
  /**
   * Дата начала периода доступных таймслотов.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly date_from: string;

  /**
   * Дата окончания периода доступных таймслотов. Максимальный период — 28 дней с текущей даты.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly date_to: string;

  /**
   * Идентификатор черновика из метода [/v2/draft/create/info](#operation/DraftCreateInfo).
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly draft_id: number;

  /**
   * Тип поставки: - `CROSSDOCK` — кросс-докинг; - `DIRECT` — прямая; - `MULTI_CLUSTER` — для
   * нескольких кластеров.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly supply_type: OzonSupplyDraftType;

  /**
   * Информация о кластере и складах в нём. Можно передать один кластер для кросс-докинговой и прямой
   * поставки или список всех кластеров для поставки в несколько кластеров.
   *
   * Максимум элементов: `20`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly selected_cluster_warehouses: readonly OzonSupplyDraftSelectedWarehouse[];
}
export type OzonSupplyDraftTimeslotErrorReason =
  | "UNSPECIFIED"
  | "INVALID_CLUSTERS_COUNT"
  | "REQUESTED_PERIOD_MORE_THAN_MAX"
  | "UNDEFINED";
export interface OzonSupplyDraftTimeslot {
  readonly from_in_timezone?: string;
  readonly to_in_timezone?: string;
}
export interface OzonSupplyDraftTimeslotDay {
  readonly date_in_timezone?: string;
  readonly timeslots?: readonly OzonSupplyDraftTimeslot[];
}
export interface OzonSupplyDraftWarehouseTimeslots {
  readonly current_time_in_timezone?: string;
  readonly days?: readonly OzonSupplyDraftTimeslotDay[];
  readonly warehouse_timezone?: string;
}
export interface OzonSupplyDraftTimeslotResult {
  readonly drop_off_warehouse_timeslots?: OzonSupplyDraftWarehouseTimeslots;
  readonly requested_date_from?: string;
  readonly requested_date_to?: string;
}
export interface GetSupplyDraftTimeslotsResponse {
  readonly error_reason?: OzonSupplyDraftTimeslotErrorReason;
  readonly result?: OzonSupplyDraftTimeslotResult;
}
