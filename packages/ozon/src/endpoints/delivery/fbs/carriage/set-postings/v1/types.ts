export interface SetFbsCarriagePostingsRequest {
  /**
   * Идентификатор отгрузки.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly carriage_id: number;

  /**
   * Актуальный список отправлений.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly posting_numbers: readonly string[];
}

export interface OzonFbsCarriagePostingResult {
  readonly error?: string;
  readonly posting_number?: string;
  readonly result?: boolean;
}

export interface SetFbsCarriagePostingsResponse {
  readonly result?: readonly OzonFbsCarriagePostingResult[];
}
