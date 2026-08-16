/** Параметры получения статуса отмены заказа. */
export interface GetOrderCancellationStatusRequest {
  /**
   * Номер заказа.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly order_number: string;
}

/** Статус отмены заказа. */
export interface GetOrderCancellationStatusResponse {
  readonly order_number?: string;
  /** Wire-схема использует имя в единственном числе для массива. */
  readonly posting_number?: readonly string[];
  readonly state?: string;
}
