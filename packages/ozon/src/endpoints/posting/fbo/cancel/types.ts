/** Параметры отмены FBO-отправления. */
export interface CancelFboPostingRequest {
  /** Номер отправления. */
  readonly posting_number: string;
  /** Идентификатор причины отмены. */
  readonly reason_id: number;
  /** Дополнительная информация по отмене. */
  readonly reason_message?: string;
}

/** Ответ на отмену FBO-отправления. */
export interface CancelFboPostingResponse {
  /** Текст сообщения Ozon. */
  readonly message?: string;
}
