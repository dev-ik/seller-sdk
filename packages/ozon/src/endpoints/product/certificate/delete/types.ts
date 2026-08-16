export interface DeleteProductCertificateRequest {
  /**
   * Идентификатор сертификата.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly certificate_id: number;
}
export interface DeleteProductCertificateResponse {
  readonly result?: {
    readonly is_delete?: boolean;
    readonly error_message?: string;
  };
}
