export interface SetFbsPostingMultiboxQuantityV3Request {
  /**
   * Количество коробок, в которые упакован товар.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly multi_box_qty: number;

  /**
   * Идентификатор многокоробочного отправления.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly posting_number: string;
}
export interface SetFbsPostingMultiboxQuantityV3Response {
  readonly result?: { readonly result?: boolean };
}
