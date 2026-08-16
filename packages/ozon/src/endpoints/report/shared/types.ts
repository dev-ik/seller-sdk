export interface OzonReport {
  readonly additional_data?: readonly {
    readonly key?: string;
    readonly value?: string;
  }[];
  readonly code?: string;
  readonly created_at?: string;
  readonly error?: string;
  readonly expires_at?: string;
  readonly file?: string;
  readonly params?: Readonly<Record<string, string>>;
  readonly report_type?: string;
  readonly status?: string;
}
export interface OzonCreateReportResult {
  readonly code?: string;
}
export interface OzonCreateReportResponse {
  readonly result?: OzonCreateReportResult;
}
export type OzonReportLanguage = string;
