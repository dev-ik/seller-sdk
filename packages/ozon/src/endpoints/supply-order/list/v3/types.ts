import type { OzonSupplyOrderState } from "../../shared/types.js";

export type OzonSupplyOrderListSortBy =
  | "ORDER_CREATION"
  | "ORDER_STATE_UPDATED_AT"
  | "TIMESLOT_FROM_UTC"
  | "TIMESLOT_FROM_LOCAL";
export type OzonSupplyOrderListSortDirection = "ASC" | "DESC";
export type OzonSupplyOrderTimeslotFilterType = "BY_LOCAL_TIME" | "BY_UTC_TIME";
export interface OzonSupplyOrderTimeslotRange {
  /**
   * Дата начала.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly from?: string;

  /**
   * Дата окончания.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly to?: string;

  /**
   * Тип даты таймслота: - `BY_LOCAL_TIME` — по локальному времени пункта отгрузки; - `BY_UTC_TIME` —
   * по времени в UTC.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly timeslot_filter_type?: OzonSupplyOrderTimeslotFilterType;
}
export interface OzonSupplyOrderListFilter {
  /**
   * Статус поставки: - `DATA_FILLING` — заполнение данных; - `READY_TO_SUPPLY` — готова к отгрузке;
   * - `ACCEPTED_AT_SUPPLY_WAREHOUSE` — принята на точке отгрузки; - `IN_TRANSIT` — в пути; -
   * `ACCEPTANCE_AT_STORAGE_WAREHOUSE` — приёмка на складе; - `REPORTS_CONFIRMATION_AWAITING` —
   * согласование актов; - `REPORT_REJECTED` — спор; - `COMPLETED` — завершена; -
   * `REJECTED_AT_SUPPLY_WAREHOUSE` — отказано в приёмке; - `CANCELLED` — отменена; - `OVERDUE` —
   * просрочена.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly states: readonly Exclude<OzonSupplyOrderState, "UNSPECIFIED">[];

  /**
   * Идентификаторы пунктов отгрузки.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly dropoff_warehouse_ids?: readonly string[];

  /**
   * Номер заявки на поставку.
   *
   * Минимальная длина: `3`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly order_number_search?: string;

  /**
   * Фильтр по таймслоту.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly timeslot_from_range?: OzonSupplyOrderTimeslotRange;
}
export interface ListSupplyOrdersV3Request {
  /**
   * Фильтр.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly filter: OzonSupplyOrderListFilter;

  /**
   * Количество значений на странице.
   *
   * Формат: `int32`. Минимум: `1`. Максимум: `100`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit: number;

  /**
   * Параметр, по которому заявки на поставку будут отсортированы: - `ORDER_CREATION` — по дате
   * создания заявки; - `ORDER_STATE_UPDATED_AT` — по обновлению статуса заявки; -
   * `TIMESLOT_FROM_UTC` — по таймслоту в UTC; - `TIMESLOT_FROM_LOCAL` — по таймслоту в локальном
   * времени.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly sort_by: OzonSupplyOrderListSortBy;

  /**
   * Идентификатор последнего значения на странице. При первом запросе оставьте это поле пустым.
   * Чтобы получить следующие значения, укажите `last_id` из ответа предыдущего запроса.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly last_id?: string;

  /**
   * Направление сортировки: - `ASC` — по возрастанию; - `DESC` — по убыванию.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly sort_dir?: OzonSupplyOrderListSortDirection;
}
export interface ListSupplyOrdersV3Response {
  readonly last_id?: string;
  readonly order_ids?: readonly string[];
}
