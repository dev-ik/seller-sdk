export interface OzonUtilizationHistoryItemV1 {
  readonly descriptions?: readonly string[];
  readonly updated_at?: string;
  readonly user_name?: string;
}
export interface GetUtilizationHistoryV1Response {
  readonly history?: readonly OzonUtilizationHistoryItemV1[];
}
