export type OzonProductPriceVisibility =
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

export interface GetProductPricesFilter {
  /**
   * Фильтр по параметру `offer_id`. Можно передавать до 1000 значений.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly offer_id?: readonly string[];

  /**
   * Фильтр по параметру `product_id`. Можно передавать до 1000 значений.
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
  readonly visibility?: OzonProductPriceVisibility;
}

export interface GetProductPricesRequest {
  /**
   * Указатель для выборки следующих данных.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly cursor?: string;

  /**
   * Фильтр по товарам.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly filter: GetProductPricesFilter;
  /** От 1 до 1000. */
  readonly limit: number;
}

export interface OzonProductPriceCommissions {
  readonly fbo_deliv_to_customer_amount?: number;
  readonly fbo_direct_flow_trans_max_amount?: number;
  readonly fbo_direct_flow_trans_min_amount?: number;
  readonly fbo_return_flow_amount?: number;
  readonly fbs_deliv_to_customer_amount?: number;
  readonly fbs_direct_flow_trans_max_amount?: number;
  readonly fbs_direct_flow_trans_min_amount?: number;
  readonly fbs_first_mile_max_amount?: number;
  readonly fbs_first_mile_min_amount?: number;
  readonly fbs_return_flow_amount?: number;
  readonly sales_percent_fbo?: number;
  readonly sales_percent_fbp?: number;
  readonly sales_percent_fbs?: number;
  readonly sales_percent_rfbs?: number;
}

export interface OzonProductMarketingAction {
  readonly date_from?: string;
  readonly date_to?: string;
  readonly title?: string;
  readonly value?: number;
}

export interface OzonProductMarketingActions {
  readonly actions?: readonly OzonProductMarketingAction[];
  readonly current_period_from?: string;
  readonly current_period_to?: string;
  readonly ozon_actions_exist?: boolean;
}

export interface OzonProductPrice {
  readonly auto_action_enabled?: boolean;
  readonly auto_add_to_ozon_actions_list_enabled?: boolean;
  readonly currency_code?: string;
  readonly marketing_seller_price?: number;
  readonly min_price?: number;
  readonly net_price?: number;
  readonly old_price?: number;
  readonly price?: number;
  readonly retail_price?: number;
  readonly vat?: number;
}

export type OzonProductPriceIndexColor =
  | "WITHOUT_INDEX"
  | "GREEN"
  | "YELLOW"
  | "RED"
  | "SUPER";

export interface OzonProductPriceIndexData {
  readonly min_price?: number;
  readonly min_price_currency?: string;
  readonly price_index_value?: number;
}

export interface OzonProductPriceIndexes {
  readonly color_index?: OzonProductPriceIndexColor;
  readonly external_index_data?: OzonProductPriceIndexData;
  readonly ozon_index_data?: OzonProductPriceIndexData;
  readonly self_marketplaces_index_data?: OzonProductPriceIndexData;
}

export interface OzonProductPriceInfo {
  readonly acquiring?: number;
  readonly commissions?: OzonProductPriceCommissions;
  readonly marketing_actions?: OzonProductMarketingActions;
  readonly offer_id?: string;
  readonly price?: OzonProductPrice;
  readonly price_indexes?: OzonProductPriceIndexes;
  readonly product_id?: number;
  readonly volume_weight?: number;
}

export interface GetProductPricesResponse {
  readonly cursor?: string;
  readonly items?: readonly OzonProductPriceInfo[];
  readonly total?: number;
}
