export interface CreateFbsPackageLabelBatchRequest {
  /**
   * Номера отправлений, для которых нужны этикетки.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly posting_number: readonly string[];
}

export interface OzonFbsPackageLabelBatchTask {
  readonly task_id?: number;
  readonly task_type?: string;
}

export interface OzonFbsUnprintedPosting {
  readonly msg?: string;
  readonly posting_number?: string;
}
