export interface OzonCertificateStatus {
  readonly code?: string;
  readonly name?: string;
}

export interface OzonCertificateStatusListResponse {
  readonly result?: readonly OzonCertificateStatus[];
}
