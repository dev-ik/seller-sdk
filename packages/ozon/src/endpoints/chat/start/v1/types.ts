export interface StartChatV1Request {
  /**
   * Идентификатор отправления.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly posting_number: string;
}

export interface StartChatV1Response {
  readonly result?: {
    readonly chat_id?: string;
  };
}
