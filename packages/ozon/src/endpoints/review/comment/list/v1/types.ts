import type { OzonReviewCommentV1 } from "../../shared/v1/types.js";

export interface OzonReviewCommentListFilterV1 {
  /**
   * Начало периода. Вернутся отзывы, которые созданы после этой даты.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly published_from?: string;

  /**
   * Конец периода. Вернутся отзывы, которые созданы до этой даты.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly published_to?: string;

  /**
   * Идентификатор товара в системе Ozon — SKU.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly sku?: number;
}

interface ListReviewCommentsV1RequestBase {
  /**
   * Ограничение значений в ответе. Минимум — 20. Максимум — 100.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit: number;

  /**
   * Количество элементов, которое будет пропущено с начала списка в ответе. Например, если `offset =
   * 10`, то ответ начнётся с 11-го найденного элемента.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly offset?: number;

  /**
   * Направление сортировки: - `ASC` — по возрастанию, - `DESC` — по убыванию.
   *
   * Пример: `ASC`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly sort_dir?: "ASC" | "DESC";
}

export type ListReviewCommentsV1Request = ListReviewCommentsV1RequestBase &
  (
    | {
        /**
         * Фильтры для поиска отзывов.
         *
         * <!-- seller-sdk:ozon-openapi -->
         */
        readonly filter?: OzonReviewCommentListFilterV1;

        /**
         * Идентификатор отзыва.
         *
         * <!-- seller-sdk:ozon-openapi -->
         */
        readonly review_id: string;
      }
    | {
        /**
         * Фильтры для поиска отзывов.
         *
         * <!-- seller-sdk:ozon-openapi -->
         */
        readonly filter: OzonReviewCommentListFilterV1 & {
          /**
           * Идентификатор товара в системе Ozon — SKU.
           *
           * Формат: `int64`.
           *
           * <!-- seller-sdk:ozon-openapi -->
           */
          readonly sku: number;
        };

        /**
         * Идентификатор отзыва.
         *
         * <!-- seller-sdk:ozon-openapi -->
         */
        readonly review_id?: string;
      }
  );

export interface ListReviewCommentsV1Response {
  readonly comments?: readonly OzonReviewCommentV1[];
  readonly offset?: number;
}
