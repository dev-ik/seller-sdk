import type { OzonReviewSummary } from "../../shared/types.js";

export interface ListReviewsV1Request {
  /**
   * Идентификатор последнего отзыва на странице.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly last_id?: string;

  /**
   * Количество отзывов в ответе. Минимум — 20, максимум — 100.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit: number;

  /**
   * Направление сортировки: - `ASC` — по возрастанию, - `DESC` — по убыванию.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly sort_dir?: "ASC" | "DESC";

  /**
   * Статусы отзывов: - `ALL` — все, - `UNPROCESSED` — необработанные, - `PROCESSED` — обработанные.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly status?: "ALL" | "UNPROCESSED" | "PROCESSED";
}

export interface ListReviewsV1Response {
  readonly has_next?: boolean;
  readonly last_id?: string;
  readonly reviews?: readonly OzonReviewSummary[];
}
