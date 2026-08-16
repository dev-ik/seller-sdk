export interface GetFbsPostingRestrictionsV1Request {
  /**
   * Номер отправления, для которого нужно определить ограничения.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly posting_number: string;
}
export interface OzonFbsPostingRestrictionsV1 {
  readonly height?: number;
  readonly length?: number;
  readonly max_posting_price?: number;
  readonly max_posting_weight?: number;
  readonly min_posting_price?: number;
  readonly min_posting_weight?: number;
  readonly posting_number?: string;
  readonly width?: number;
}
export interface GetFbsPostingRestrictionsV1Response {
  readonly result?: OzonFbsPostingRestrictionsV1;
}
