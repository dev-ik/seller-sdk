/** Параметры получения статуса отмены FBO-отправления. */
export interface GetFboPostingCancellationStatusRequest {
  /** Номер отправления. */
  readonly posting_number?: string;
}

/** Статус отмены FBO-отправления. */
export interface GetFboPostingCancellationStatusResponse {
  /** Номер заказа. */
  readonly order_number?: string;
  /** Номера отправлений. Wire-схема использует имя в единственном числе. */
  readonly posting_number?: readonly string[];
  /** Текстовый статус отмены. */
  readonly state?: string;
}
