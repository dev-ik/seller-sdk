export type AnalyticsManageStockType =
  | "STOCK_TYPE_VALID"
  | "STOCK_TYPE_WAITING_DOCS"
  | "STOCK_TYPE_EXPIRING"
  | "STOCK_TYPE_DEFECT";

export interface GetAnalyticsManageStocksV1Filter {
  /**
   * Идентификаторы товаров в системе Ozon — SKU.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly skus?: readonly string[];

  /**
   * Тип оставшегося на складе товара: - `STOCK_TYPE_VALID` — валидный сток. Остаток товара,
   * доступного для продажи. - `STOCK_TYPE_WAITING_DOCS` — превалидный сток. Остаток товара, который
   * Ozon не может продавать, пока продавец не прислал в Ozon документы по обязательной маркировке.
   * Товар перейдёт в валидный сток, когда документы будут подписаны. - `STOCK_TYPE_EXPIRING` —
   * предпросрок. Остаток товара, который снят с полки, но срок годности формально не истёк. -
   * `STOCK_TYPE_DEFECT` — брак. Остаток товара, который находится на складах Ozon, но повреждён.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly stock_types?: readonly AnalyticsManageStockType[];

  /**
   * Идентификаторы складов.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly warehouse_ids?: readonly string[];
}

export interface GetAnalyticsManageStocksV1Request {
  /**
   * Фильтр.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly filter?: GetAnalyticsManageStocksV1Filter;

  /**
   * Количество значений в ответе.
   *
   * Формат: `int32`. Минимум: `1`. Максимум: `1000`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit?: number;

  /**
   * Количество элементов, которое будет пропущено в ответе. Например, если `offset = 10`, ответ
   * начнётся с 11-го найденного элемента.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly offset?: number;
}

export interface OzonAnalyticsManagedStock {
  readonly defect_stock_count?: number;
  readonly expiring_stock_count?: number;
  readonly name?: string;
  readonly offer_id?: string;
  readonly sku?: number;
  readonly valid_stock_count?: number;
  readonly waitingdocs_stock_count?: number;
  readonly warehouse_name?: string;
}

export interface GetAnalyticsManageStocksV1Response {
  readonly items?: readonly OzonAnalyticsManagedStock[];
}
