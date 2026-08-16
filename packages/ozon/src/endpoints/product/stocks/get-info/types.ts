export type OzonProductStockVisibility =
  | "ALL"
  | "VISIBLE"
  | "INVISIBLE"
  | "EMPTY_STOCK"
  | "NOT_MODERATED"
  | "MODERATED"
  | "DISABLED"
  | "STATE_FAILED"
  | "READY_TO_SUPPLY"
  | "VALIDATION_STATE_PENDING"
  | "VALIDATION_STATE_FAIL"
  | "VALIDATION_STATE_SUCCESS"
  | "TO_SUPPLY"
  | "IN_SALE"
  | "REMOVED_FROM_SALE"
  | "BANNED"
  | "OVERPRICED"
  | "CRITICALLY_OVERPRICED"
  | "EMPTY_BARCODE"
  | "BARCODE_EXISTS"
  | "QUARANTINE"
  | "ARCHIVED"
  | "OVERPRICED_WITH_STOCK"
  | "PARTIAL_APPROVED"
  | "AUTO_ARCHIVED"
  | "MANUAL_ARCHIVED"
  | "SEASONAL_AUTO_ARCHIVED"
  | "VISIBLE_WITH_FBO_STOCK";

export interface OzonProductStocksWithQuantFilter {
  /**
   * Активные эконом-товары.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly created?: boolean;

  /**
   * Эконом-товары во всех статусах.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly exists?: boolean;
}

export interface GetProductStocksFilter {
  /**
   * Фильтр по параметру `offer_id`. Можно передавать список значений.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly offer_id?: readonly string[];

  /**
   * Фильтр по параметру `product_id`. Можно передавать список значений.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly product_id?: readonly string[];

  /**
   * Фильтр по видимости товара: - `ALL` — все товары, кроме архивных; - `VISIBLE` — товары, которые
   * видны покупателям; - `INVISIBLE` — товары, которые не видны покупателям; - `EMPTY_STOCK` —
   * товары, у которых не указано наличие; - `NOT_MODERATED` — товары, которые не прошли модерацию; -
   * `MODERATED` — товары, которые прошли модерацию; - `DISABLED` — товары, которые видны
   * покупателям, но недоступны к покупке; - `STATE_FAILED` — товары, создание которых завершилось
   * ошибкой; - `READY_TO_SUPPLY` — товары, готовые к поставке; - `VALIDATION_STATE_PENDING` —
   * товары, которые проходят проверку валидатором на премодерации; - `VALIDATION_STATE_FAIL` —
   * товары, которые не прошли проверку валидатором на…
   *
   * Пример: `ALL`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly visibility?: OzonProductStockVisibility;

  /**
   * Товары по тарифу «Эконом».
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly with_quant?: OzonProductStocksWithQuantFilter;
}

export interface GetProductStocksRequest {
  /** Cursor из предыдущего ответа; для первой страницы можно не передавать. */
  readonly cursor?: string;

  /**
   * Фильтр по товарам.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly filter: GetProductStocksFilter;
  /** Количество товаров на странице, от 1 до 1000. */
  readonly limit: number;
}

export type OzonProductStockShipmentType =
  | "SHIPMENT_TYPE_GENERAL"
  | "SHIPMENT_TYPE_BOX"
  | "SHIPMENT_TYPE_PALLET";

export interface OzonProductStock {
  readonly present?: number;
  readonly reserved?: number;
  readonly shipment_type?: OzonProductStockShipmentType;
  readonly sku?: number;
  readonly type?: string;
  /** @deprecated Ozon пометил список идентификаторов складов устаревшим. */
  readonly warehouse_ids?: readonly number[];
}

export interface OzonProductStocksItem {
  readonly offer_id?: string;
  readonly product_id?: number;
  readonly stocks?: readonly OzonProductStock[];
}

export interface GetProductStocksResponse {
  readonly cursor?: string;
  readonly items?: readonly OzonProductStocksItem[];
  readonly total?: number;
}
