export interface GetFbsActBarcodeTextRequest {
  /**
   * Идентификатор перевозки.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly id: number;
}
export interface GetFbsActBarcodeTextResponse {
  readonly result?: string;
}
