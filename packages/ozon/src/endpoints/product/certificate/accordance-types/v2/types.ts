export interface OzonCertificateAccordanceTypeV2 {
  readonly code?: string;
  readonly title?: string;
}
export interface ListCertificateAccordanceTypesV2Response {
  readonly result?: {
    readonly base?: readonly OzonCertificateAccordanceTypeV2[];
    readonly hazard?: readonly OzonCertificateAccordanceTypeV2[];
  };
}
