import type { OzonGiveoutV1 } from "../../shared/types.js";
export interface ListGiveoutsV1Request {
  /**
   * Идентификатор последнего значения на странице.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly last_id?: number;

  /**
   * Количество элементов в ответе.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit: number;
}
export interface ListGiveoutsV1Response {
  readonly giveouts?: readonly OzonGiveoutV1[];
}
