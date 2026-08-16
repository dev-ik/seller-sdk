export interface ChangeSellerActionActivityV1Request {
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
   * `true`, чтобы включить акцию.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly is_turn_on: boolean;
}
export type ChangeSellerActionActivityV1Response = void;
