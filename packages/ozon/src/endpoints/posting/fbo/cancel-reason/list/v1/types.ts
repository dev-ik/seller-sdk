export interface OzonFboPostingCancelReason {
  readonly id?: number;
  readonly name?: string;
}
export interface ListFboPostingCancelReasonsResponse {
  readonly reasons?: readonly OzonFboPostingCancelReason[];
}
