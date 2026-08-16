export interface UploadInvoiceFileRequest {
  /**
   * Счёт-фактура в кодировке Base64.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly base64_content: string;

  /**
   * Номер отправления.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly posting_number: string;
}
export interface UploadInvoiceFileResponse {
  readonly url?: string;
}
