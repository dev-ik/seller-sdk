export interface DeleteSellerActionProductsV1Request {
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
   * Идентификаторы товаров в системе Ozon — SKU.
   *
   * Максимум элементов: `100`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly skus: readonly string[];
}
export type DeleteSellerActionProductsV1Response = void;
