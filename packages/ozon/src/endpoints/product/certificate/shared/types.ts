export interface OzonCertificateDictionaryItem {
  readonly name?: string;
  readonly value?: string;
}

export interface OzonCertificateDictionaryResponse {
  readonly result?: readonly OzonCertificateDictionaryItem[];
}
