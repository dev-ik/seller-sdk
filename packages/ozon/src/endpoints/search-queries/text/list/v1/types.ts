import type { OzonSearchQueriesResponse } from "../../../shared/v1/types.js";

export type SearchQueriesTextSortBy =
  | "CLIENT_COUNT"
  | "ADD_TO_CART"
  | "CONVERSION_TO_CART"
  | "AVG_PRICE";

export type SearchQueriesSortDirection = "ASC" | "DESC";

export interface ListSearchQueriesByTextV1Request {
  /**
   * Количество значений на странице.
   *
   * Формат: `int64`. Максимум: `50`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit: string;

  /**
   * Количество элементов, которое будет пропущено в ответе.
   *
   * Формат: `int64`. Максимум: `50`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly offset: string;

  /**
   * Параметр, по которому сортируются поисковые запросы: - `CLIENT_COUNT` — популярность запроса; -
   * `ADD_TO_CART` — добавления в корзину; - `CONVERSION_TO_CART` — конверсия в корзине; -
   * `AVG_PRICE` — средняя цена.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly sort_by?: SearchQueriesTextSortBy;

  /**
   * Направление сортировки: - `ASC` — по возрастанию; - `DESC` — по убыванию.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly sort_dir?: SearchQueriesSortDirection;

  /**
   * Поиск по тексту.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly text: string;
}

export type ListSearchQueriesByTextV1Response = OzonSearchQueriesResponse;
