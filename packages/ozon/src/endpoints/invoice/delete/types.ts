export interface DeleteInvoiceRequest {
  /**
   * Номер отправления.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly posting_number: string;
}
export interface DeleteInvoiceResponse {
  readonly result?: boolean;
}
