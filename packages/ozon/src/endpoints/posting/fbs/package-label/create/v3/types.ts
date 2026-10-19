export type CreateFbsPackageLabelBatchV3Request = {
  /**
   * Номера отправлений, для которых нужны этикетки.
   *
   * Минимум элементов: `1`. Максимум элементов: `1000`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly posting_numbers: ReadonlyArray<string>;
};

export type CreateFbsPackageLabelBatchV3Response = {
  readonly tasks?: ReadonlyArray<{
    readonly task_id?: number;
    readonly task_type?: string;
  }>;
};
