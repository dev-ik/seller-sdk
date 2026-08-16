export interface UploadReceiptV1Request {
  /**
   * Содержание файла в бинарном виде.
   *
   * Формат: `byte`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly content: Blob;
  readonly filename?: string;

  /**
   * Тип операции. Получите значение параметра методом
   * [/v1/receipts/seller/list](#operation/ReceiptsSellerList).
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly operation_type: string;

  /**
   * Идентификатор родительского чека. Передайте параметр с идентификатором чека, который нужно
   * изменить.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly parent_receipt_id?: string;

  /**
   * Номера отправлений.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly posting_numbers: readonly string[];

  /**
   * Номер чека.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly receipt_number: string;

  /**
   * Тип чека: - `INCOMING` — чек реализации; - `REFUND` — чек возврата.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly type: "INCOMING" | "REFUND";
}

export interface UploadReceiptV1Response {
  readonly receipt_id?: string;
}
