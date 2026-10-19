export type GetFbsPackageLabelBatchV2Request = {
  /**
   * Идентификатор задания из ответа метода
   * [/v3/posting/fbs/package-label/create](#operation/PostingFbsPackageLabelCreate).
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly task_id: number;
};

export type GetFbsPackageLabelBatchV2Response = {
  readonly error?: {
    readonly code?: string;
    readonly message?: string;
  };
  readonly file_url?: string;
  readonly status?: {
    readonly code?: string;
    readonly postings_count?: number;
    readonly printed_postings_count?: number;
    readonly unprinted_postings?: ReadonlyArray<{
      readonly message?: string;
      readonly posting_number?: string;
    }>;
  };
};
