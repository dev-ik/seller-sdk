import type { OzonFbsUnprintedPosting } from "../../shared/types.js";
export interface GetFbsPackageLabelBatchV1Request {
  /**
   * Номер задания на формирование этикеток из ответа метода
   * [/v1/posting/fbs/package-label/create](#operation/PostingAPI_CreateLabelBatch).
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly task_id: number;
}
export interface GetFbsPackageLabelBatchV1Response {
  readonly result?: {
    readonly error?: string;
    readonly file_url?: string;
    readonly printed_postings_count?: number;
    readonly status?: string;
    readonly unprinted_postings?: readonly OzonFbsUnprintedPosting[];
    readonly unprinted_postings_count?: number;
  };
}
