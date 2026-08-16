/** Формальный уровень остатка или оборачиваемости товара. */
export type OzonAnalyticsStockGrade =
  | "GRADES_NONE"
  | "GRADES_NOSALES"
  | "GRADES_GREEN"
  | "GRADES_YELLOW"
  | "GRADES_RED"
  | "GRADES_CRITICAL";

/** Параметры аналитики оборачиваемости товаров. */
export interface GetAnalyticsStocksTurnoverRequest {
  /** Количество значений от 1 до 1000. */
  readonly limit?: number;
  /** Количество пропускаемых элементов. */
  readonly offset?: number;
  /** SKU товаров. При фильтрации по SKU limit и offset необязательны. */
  readonly sku?: readonly string[];
}

/** Аналитика оборачиваемости одного товара. */
export interface OzonAnalyticsStocksTurnoverItem {
  /** Среднесуточные продажи за последние 60 дней. */
  readonly ads?: number;
  /** Текущий остаток в штуках. */
  readonly current_stock?: number;
  /** Количество дней, на которое хватит остатка. */
  readonly idc?: number;
  /** Уровень остатка. */
  readonly idc_grade?: OzonAnalyticsStockGrade;
  /** Название товара. */
  readonly name?: string;
  /** Артикул продавца. */
  readonly offer_id?: string;
  /** SKU товара. */
  readonly sku?: number;
  /** Фактическая оборачиваемость в днях. */
  readonly turnover?: number;
  /** Уровень оборачиваемости. */
  readonly turnover_grade?: OzonAnalyticsStockGrade;
}

/** Ответ с аналитикой оборачиваемости товаров. */
export interface GetAnalyticsStocksTurnoverResponse {
  /** Товары. */
  readonly items?: readonly OzonAnalyticsStocksTurnoverItem[];
}
