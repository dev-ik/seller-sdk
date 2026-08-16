export interface ListFbsActPostingsRequest {
  /**
   * Идентификатор акта. Получите значение параметра методом
   * [/v2/posting/fbs/act/list](#operation/PostingAPI_FbsActList) или
   * [/v1/carriage/create](#operation/CarriageAPI_CarriageCreate).
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly id: number;
}
export interface OzonFbsActProduct {
  readonly name?: string;
  readonly offer_id?: string;
  readonly price?: string;
  readonly quantity?: number;
  readonly sku?: number;
}
export interface OzonFbsActPosting {
  readonly id?: number;
  readonly multi_box_qty?: number;
  readonly posting_number?: string;
  readonly status?: string;
  readonly seller_error?: string;
  readonly updated_at?: string;
  readonly created_at?: string;
  readonly products?: readonly OzonFbsActProduct[];
}
export interface ListFbsActPostingsResponse {
  readonly result?: readonly OzonFbsActPosting[];
}
