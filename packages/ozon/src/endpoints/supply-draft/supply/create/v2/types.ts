import type {
  OzonDraftSupplyCreateError,
  OzonDraftSupplySelectedWarehouse,
  OzonDraftSupplyType,
} from "../../shared/types.js";
export interface CreateSupplyOrderFromDraftRequest {
  /**
   * Идентификатор черновика из метода [/v2/draft/create/info](#operation/DraftCreateInfo).
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly draft_id: number;

  /**
   * Информация о кластере и складах в нём. Можно передать один кластер для кросс-докинговой и прямой
   * поставки или список всех кластеров для поставки в несколько кластеров.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly selected_cluster_warehouses: readonly OzonDraftSupplySelectedWarehouse[];

  /**
   * Тип поставки: - `CROSSDOCK` — кросс-докинг; - `DIRECT` — прямая; - `MULTI_CLUSTER` — для
   * нескольких кластеров.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly supply_type: OzonDraftSupplyType;

  /**
   * Таймслот поставки.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly timeslot?: {
    /**
     * Начало таймслота.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly from_in_timezone?: string;

    /**
     * Конец таймслота.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly to_in_timezone?: string;
  };
}
export interface CreateSupplyOrderFromDraftResponse {
  readonly draft_id?: number;
  readonly error_reasons?: readonly OzonDraftSupplyCreateError[];
}
