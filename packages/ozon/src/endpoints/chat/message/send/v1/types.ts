export interface SendChatMessageV1Request {
  /**
   * Идентификатор чата.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly chat_id: string;

  /**
   * Текст сообщения в формате plain text от 1 до 1000 символов.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly text: string;
}

export interface SendChatMessageV1Response {
  readonly result?: string;
}
