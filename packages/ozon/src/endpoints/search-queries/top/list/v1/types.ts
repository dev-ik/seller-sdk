import type { OzonSearchQueriesResponse } from "../../../shared/v1/types.js";

export interface ListTopSearchQueriesV1Request {
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
   * Формат: `int64`. Максимум: `1000`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly offset: string;
}

export type ListTopSearchQueriesV1Response = OzonSearchQueriesResponse;
