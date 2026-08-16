/** Параметры отмены заказа. */
export interface CancelOrderRequest {
  /**
   * Номер заказа.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly order_number: string;

  /**
   * Идентификатор причины отмены заказа.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly reason_id: number;

  /**
   * Причина отмены заказа.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly reason_message?: string;
}

/** Ответ на отмену заказа. */
export interface CancelOrderResponse {
  readonly message?: string;
}
