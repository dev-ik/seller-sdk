export interface SetFbsPostingCutoffRequest {
  /**
   * Новая дата отгрузки.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly new_cutoff_date: string;

  /**
   * Номер отправления.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly posting_number: string;
}

export interface SetFbsPostingCutoffResponse {
  readonly result?: boolean;
}
