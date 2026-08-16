export interface OzonFbsPostingMoveStatusResult {
  readonly error?: string;
  readonly posting_number?: string;
  readonly result?: boolean;
}

export interface OzonFbsPostingMoveStatusResponse {
  readonly result?: readonly OzonFbsPostingMoveStatusResult[];
}
