/** Причина отмены заказа или отправления. */
export interface OzonCancellationReason {
  /** Идентификатор причины отмены. */
  readonly id?: number;
  /** Название причины отмены. */
  readonly name?: string;
}

/** Общая форма ответа со списком причин отмены. */
export interface OzonCancellationReasonsResponse {
  /** Доступные причины отмены. */
  readonly reasons?: readonly OzonCancellationReason[];
}
