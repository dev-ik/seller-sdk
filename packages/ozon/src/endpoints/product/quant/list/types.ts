/** Фильтр видимости эконом-товаров. */
export type OzonQuantProductVisibility =
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
  | "PARTIAL_APPROVED";

/** Параметры получения эконом-товаров. */
export interface ListQuantProductsRequest {
  /** Курсор следующей страницы. */
  readonly cursor?: string;
  /** Максимальное количество элементов. */
  readonly limit: number;
  /** Фильтр по видимости товара. */
  readonly visibility?: OzonQuantProductVisibility;
}

/** Квант товара в кратком списке. */
export interface OzonQuantProductSummaryQuant {
  /** Идентификатор кванта. */
  readonly quant_code?: string;
  /** Размер кванта. */
  readonly quant_size?: number;
}

/** Эконом-товар в кратком списке. */
export interface OzonQuantProductSummary {
  /** Артикул продавца. */
  readonly offer_id?: string;
  /** Идентификатор товара Ozon. */
  readonly product_id?: number;
  /** Кванты товара. */
  readonly quants?: readonly OzonQuantProductSummaryQuant[];
}

/** Ответ со списком эконом-товаров. */
export interface ListQuantProductsResponse {
  /** Курсор следующей страницы. */
  readonly cursor?: string;
  /** Эконом-товары. */
  readonly products?: readonly OzonQuantProductSummary[];
  /** Общее количество элементов по описанию поля Swagger. */
  readonly total_items?: number;
}
