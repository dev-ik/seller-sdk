export interface GetProductCertificateInfoRequest {
  /**
   * Идентификатор сертификата.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly certificate_number: string;
}
export interface OzonProductCertificate {
  readonly certificate_id?: number;
  readonly certificate_number?: string;
  readonly certificate_name?: string;
  readonly type_code?: string;
  readonly status_code?: string;
  readonly accordance_type_code?: string;
  readonly rejection_reason_code?: string;
  readonly verification_comment?: string;
  readonly issue_date?: string;
  readonly expire_date?: string;
  readonly products_count?: number;
}
export interface GetProductCertificateInfoResponse {
  readonly result?: OzonProductCertificate;
}
