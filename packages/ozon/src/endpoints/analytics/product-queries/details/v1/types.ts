import type {
  AnalyticsProductQueriesPeriod,
  AnalyticsProductQueriesSortBy,
  AnalyticsProductQueriesSortDirection,
} from "../../shared/v1/types.js";

export interface GetAnalyticsProductQueryDetailsV1Request {
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
   * Лимит числа запросов по одному SKU. Максимум — 15 запросов.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit_by_sku: number;

  /**
   * Номер страницы, возвращаемой в запросе. Минимум — 0.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly page?: number;

  /**
   * Количество элементов на странице. Максимум — 100.
   *
   * Формат: `int32`.
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
   * запросам. Сортировка по параметрам `BY_VIEWS`, `BY_POSITION` и `BY_CONVERSION` доступна только с
   * подпиской [Premium](https://seller-edu.ozon.ru/seller-rating/about-rating/premium-program) или
   * [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus).
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

export interface OzonAnalyticsProductQueryDetails {
  readonly currency?: string;
  readonly gmv?: number;
  readonly order_count?: number;
  readonly position?: number;
  readonly query?: string;
  readonly query_index?: number;
  readonly sku?: number;
  readonly unique_search_users?: number;
  readonly unique_view_users?: number;
  readonly view_conversion?: number;
}

export interface GetAnalyticsProductQueryDetailsV1Response {
  readonly analytics_period?: AnalyticsProductQueriesPeriod;
  readonly page_count?: number;
  readonly queries?: readonly OzonAnalyticsProductQueryDetails[];
  readonly total?: number;
}
