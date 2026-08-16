export interface CancelSupplyOrderRequest {
  /**
   * Идентификатор заявки на поставку.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly order_id: number;
}

export interface CancelSupplyOrderResponse {
  readonly operation_id?: string;
}
