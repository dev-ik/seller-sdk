import type { OzonSellerActionProductsPage } from "../../../shared/v1/types.js";
export interface ListSellerActionProductsPageV1Request {
  /**
   * Идентификатор акции. Получите значение параметра методом
   * [/v1/seller-actions/list](#operation/SellerActionsList).
   *
   * Формат: `uint64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly action_id: number;

  /**
   * Указатель для выборки следующих данных.
   *
   * Формат: `uint64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly cursor?: number;

  /**
   * Максимальное количество элементов в ответе.
   *
   * Формат: `int64`. Минимум: `1`. Максимум: `100`. Пример: `100`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit: number;
}
export type ListSellerActionProductsPageV1Response =
  OzonSellerActionProductsPage;
