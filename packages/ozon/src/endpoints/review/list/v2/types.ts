import type { OzonReviewSummary } from "../../shared/types.js";

export interface ListReviewsV2Request {
  /**
   * Фильтры для поиска отзывов.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly filters?: {
    /**
     * Статус заказа, на который покупатель оставил отзыв: - `ALL` — все; - `DELIVERED` — доставлен; -
     * `CANCELLED` — отменён.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly order_status?: "ALL" | "DELIVERED" | "CANCELLED";

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
     * Максимум элементов: `1000`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly skus?: readonly string[];

    /**
     * Статус отзыва: - `ALL` — все; - `NEW` — новый; - `VIEWED` — просмотренный; - `PROCESSED` —
     * обработанный.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly status?: "ALL" | "NEW" | "VIEWED" | "PROCESSED";
  };

  /**
   * Идентификатор последнего отзыва в ответе.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly last_id?: string;

  /**
   * Количество отзывов в ответе.
   *
   * Формат: `int32`. Минимум: `20`. Максимум: `100`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit: number;

  /**
   * Направление сортировки: - `ASC` — по возрастанию; - `DESC` — по убыванию.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly sort_dir?: "ASC" | "DESC";
}

export interface OzonReviewSummaryV2 extends OzonReviewSummary {
  readonly order_status?: "DELIVERED" | "CANCELLED";
  readonly status?: "NEW" | "VIEWED" | "PROCESSED";
}

export interface ListReviewsV2Response {
  readonly has_next?: boolean;
  readonly last_id?: string;
  readonly reviews?: readonly OzonReviewSummaryV2[];
}
