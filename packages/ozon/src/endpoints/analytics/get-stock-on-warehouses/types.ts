/** Фильтр складов устаревающего отчёта по остаткам. */
export type OzonAnalyticsWarehouseType =
  | "ALL"
  | "EXPRESS_DARK_STORE"
  | "NOT_EXPRESS_DARK_STORE";

/** Параметры устаревающего отчёта по остаткам на складах Ozon. */
export interface GetAnalyticsStockOnWarehousesRequest {
  /** Количество строк на странице. */
  readonly limit: number;
  /** Количество пропускаемых строк. */
  readonly offset?: number;
  /** Фильтр по типу склада. */
  readonly warehouse_type?: OzonAnalyticsWarehouseType;
}

/** Строка устаревающего отчёта по остаткам на складе. */
export interface OzonAnalyticsStockOnWarehouseRow {
  /** Количество товара, доступное к продаже. */
  readonly free_to_sell_amount?: number;
  /** Артикул продавца. */
  readonly item_code?: string;
  /** Название товара. */
  readonly item_name?: string;
  /** Количество в подтверждённых будущих поставках. */
  readonly promised_amount?: number;
  /** Зарезервированное количество. */
  readonly reserved_amount?: number;
  /** Идентификатор товара Ozon — SKU. */
  readonly sku?: number;
  /** Название склада. */
  readonly warehouse_name?: string;
}

/** Результат устаревающего отчёта по остаткам. */
export interface OzonAnalyticsStockOnWarehousesResult {
  /** Товары и остатки по складам. */
  readonly rows?: readonly OzonAnalyticsStockOnWarehouseRow[];
}

/** Устаревающий отчёт по остаткам и товарам в перемещении. */
export interface GetAnalyticsStockOnWarehousesResponse {
  /** Результат отчёта. */
  readonly result?: OzonAnalyticsStockOnWarehousesResult;
}
