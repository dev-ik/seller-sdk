export type OzonProductListVisibility =
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

interface ListProductsFilterBase {
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
  readonly visibility?: OzonProductListVisibility;
}

export type ListProductsFilter = ListProductsFilterBase &
  (
    | {
        /**
         * Фильтр по параметру `offer_id`. Вы можете передавать список значений.
         *
         * Минимум элементов: `1`. Максимум элементов: `1000`.
         *
         * <!-- seller-sdk:ozon-openapi -->
         */
        readonly offer_id?: readonly string[];
        readonly product_id?: never;
        readonly skus?: never;
      }
    | {
        readonly offer_id?: never;

        /**
         * Фильтр по параметру `product_id`. Вы можете передавать список значений.
         *
         * Минимум элементов: `1`. Максимум элементов: `1000`.
         *
         * <!-- seller-sdk:ozon-openapi -->
         */
        readonly product_id?: readonly string[];
        readonly skus?: never;
      }
    | {
        readonly offer_id?: never;
        readonly product_id?: never;

        /**
         * Фильтр по параметру `sku`. Вы можете передавать список значений.
         *
         * Минимум элементов: `1`. Максимум элементов: `1000`.
         *
         * <!-- seller-sdk:ozon-openapi -->
         */
        readonly skus?: readonly string[];
      }
  );

export interface ListProductsRequest {
  /**
   * Фильтр по товарам.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly filter: ListProductsFilter;
  /** Cursor из предыдущего ответа; при первом запросе можно не передавать. */
  readonly last_id?: string;
  /** От 1 до 1000 товаров. */
  readonly limit: number;
}

export interface OzonProductListQuant {
  readonly quant_code?: string;
  readonly quant_size?: number;
}

export interface OzonProductListItem {
  readonly archived?: boolean;
  readonly has_fbo_stocks?: boolean;
  readonly has_fbs_stocks?: boolean;
  readonly is_discounted?: boolean;
  readonly offer_id?: string;
  readonly product_id?: number;
  readonly quants?: readonly OzonProductListQuant[];
  readonly sku?: number;
}

export interface OzonProductListResult {
  readonly items?: readonly OzonProductListItem[];
  readonly last_id?: string;
  readonly total?: number;
}

export interface ListProductsResponse {
  readonly result?: OzonProductListResult;
}
