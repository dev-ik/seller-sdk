export interface ReadChatV2Request {
  /**
   * Идентификатор чата.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly chat_id: string;

  /**
   * Идентификатор сообщения.
   *
   * Формат: `uint64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly from_message_id?: number;
}

export interface ReadChatV2Response {
  readonly unread_count?: number;
}
