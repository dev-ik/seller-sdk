/** Параметры проверки возможности отмены заказа. */
export interface CheckOrderCancellationRequest {
  /**
   * Номер заказа.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly order_number: string;
}

/** Группа отправлений заказа. */
export interface OzonOrderCancellationPostingGroup {
  readonly posting_numbers?: readonly string[];
}

/** Возможность отмены отдельного отправления. */
export interface OzonOrderCancellationPosting {
  readonly cancellable?: boolean;
  readonly posting_number?: string;
  readonly why_not_cancellable?: string;
}

/** Результат проверки возможности отмены заказа. */
export interface CheckOrderCancellationResponse {
  readonly cancellable?: boolean;
  readonly order_number?: string;
  readonly posting_groups?: readonly OzonOrderCancellationPostingGroup[];
  readonly postings?: readonly OzonOrderCancellationPosting[];
}
