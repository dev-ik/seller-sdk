import type { OzonFbpOrderDetails } from "../../shared/v1/types.js";

export interface ListFbpOrdersV1Request {
  /**
   * Количество поставок в ответе.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly count: number;

  /**
   * Идентификатор последней поставки на странице. Для первого запроса оставьте это поле пустым.
   * Чтобы получить следующие значения, укажите `id` последней поставки из ответа предыдущего
   * запроса.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly last_id?: number;
}

export type OzonFbpOrderListItem = Omit<
  OzonFbpOrderDetails,
  "bundle_uuid" | "draft_id" | "row_version"
>;

export interface ListFbpOrdersV1Response {
  readonly has_next?: boolean;
  readonly items?: readonly OzonFbpOrderListItem[];
  readonly last_id?: number;
}
