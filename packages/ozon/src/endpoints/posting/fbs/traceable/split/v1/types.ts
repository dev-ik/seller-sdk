export interface SplitTraceableFbsPostingRequest {
  /**
   * Номер отправления.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly posting_number: string;
}
export interface OzonTraceableFbsSplitProduct {
  readonly quantity?: number;
  readonly sku?: number;
}
export interface OzonTraceableFbsSplitPosting {
  readonly posting_number?: string;
  readonly potential_blr_traceable?: boolean;
  readonly products?: readonly OzonTraceableFbsSplitProduct[];
}
export interface SplitTraceableFbsPostingResponse {
  readonly postings?: readonly OzonTraceableFbsSplitPosting[];
}
