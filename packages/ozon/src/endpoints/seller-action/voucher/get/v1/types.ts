export interface GetSellerActionVoucherFileV1Request {
  /**
   * Идентификатор акции. Получите значение параметра методом
   * [/v1/seller-actions/list](#operation/SellerActionsList).
   *
   * Формат: `uint64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly action_id: number;
}
export interface GetSellerActionVoucherFileV1Response {
  readonly file?: string;
}
