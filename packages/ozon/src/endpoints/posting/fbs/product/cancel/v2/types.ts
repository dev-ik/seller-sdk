export interface CancelFbsPostingProductItemV2 {
  /**
   * Количество товара в отправлении.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly quantity: number;

  /**
   * Идентификатор товара в системе Ozon — SKU.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly sku: number;
}
export interface CancelFbsPostingProductsV2Request {
  /**
   * Идентификатор причины отмены отправления товара.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly cancel_reason_id: number;

  /**
   * Обязательное поле. Дополнительная информация по отмене.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly cancel_reason_message: string;

  /**
   * Информация о товарах.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly items: readonly CancelFbsPostingProductItemV2[];

  /**
   * Идентификатор отправления.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly posting_number: string;
}
export interface CancelFbsPostingProductsV2Response {
  readonly result?: string;
}
