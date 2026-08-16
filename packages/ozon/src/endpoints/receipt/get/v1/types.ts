export interface GetReceiptV1Request {
  /**
   * Идентификатор чека. Получите значение параметра методом
   * [/v1/receipts/seller/list](#operation/ReceiptsSellerList).
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly receipt_id: string;
}

export interface GetReceiptV1Response {
  readonly content?: string;
}
