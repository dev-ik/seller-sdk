import type {
  AnalyticsProductQueriesPeriod,
  AnalyticsProductQueriesSortBy,
  AnalyticsProductQueriesSortDirection,
} from "../../shared/v1/types.js";

export interface ListAnalyticsProductQueriesV1Request {
  /**
   * Дата начала формирования аналитики.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly date_from: string;

  /**
   * Дата окончания формирования аналитики.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly date_to?: string;

  /**
   * Индекс страницы, которую возвращает запрос.
   *
   * Формат: `int32`. Минимум: `0`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly page?: number;

  /**
   * Количество элементов на странице.
   *
   * Формат: `int32`. Максимум: `1000`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly page_size: number;

  /**
   * Список SKU, идентификаторов товара в системе Ozon. По ним вернётся аналитика по запросам.
   * Максимум — 1000 SKU.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly skus: readonly string[];

  /**
   * Параметр, по которому товары будут отсортированы. Возможные значения: - `BY_SEARCHES` — по
   * количеству запросов; - `BY_VIEWS` — по количеству просмотров; - `BY_POSITION` — по средней
   * позиции товара; - `BY_CONVERSION` — по значению конверсии; - `BY_GMV` — по объёму продаж по
   * запросам.
   *
   * Пример: `BY_SEARCHES`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly sort_by?: AnalyticsProductQueriesSortBy;

  /**
   * Направление сортировки: - `DESCENDING` — по убыванию; - `ASCENDING` — по возрастанию.
   *
   * Пример: `DESCENDING`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly sort_dir?: AnalyticsProductQueriesSortDirection;
}

export interface OzonAnalyticsProductQueryItem {
  readonly category?: string;
  readonly currency?: string;
  readonly gmv?: number;
  readonly name?: string;
  readonly offer_id?: string;
  readonly position?: number;
  readonly sku?: number;
  readonly unique_search_users?: number;
  readonly unique_view_users?: number;
  readonly view_conversion?: number;
}

export interface ListAnalyticsProductQueriesV1Response {
  readonly analytics_period?: AnalyticsProductQueriesPeriod;
  readonly items?: readonly OzonAnalyticsProductQueryItem[];
  readonly page_count?: number;
  readonly total?: number;
}
