export interface SendChatFileV1Request {
  /**
   * Файл в виде строки base64.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly base64_content: string;

  /**
   * Идентификатор чата.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly chat_id: string;

  /**
   * Название файла с расширением.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly name: string;
}
export interface SendChatFileV1Response {
  readonly result?: string;
}
