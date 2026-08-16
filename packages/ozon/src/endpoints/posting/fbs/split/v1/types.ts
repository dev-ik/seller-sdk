export interface OzonFbsSplitProduct {
  readonly product_id: number;
  readonly quantity: number;
}
export interface OzonFbsSplitPosting {
  readonly posting_number?: string;
  readonly products?: readonly OzonFbsSplitProduct[];
}
export interface SplitFbsPostingResponse {
  readonly parent_posting?: OzonFbsSplitPosting;
  readonly postings?: readonly OzonFbsSplitPosting[];
}
