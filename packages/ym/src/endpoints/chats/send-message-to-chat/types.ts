// Generated public types for this Yandex Market endpoint.
type ChatsApiResponseStatusType = "OK" | "ERROR";
type ChatsEmptyApiResponse = { readonly status: ChatsApiResponseStatusType };
type ChatsSendMessageToChatRequest = { readonly message: string };

/**
 * Параметры метода «Отправка сообщения в чат».
 *
 * Отправляет сообщение в чат с покупателем.
 *
 * POST /v2/businesses/{businessId}/chats/message
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type SendMessageToChatInput = {
  /**
   * Параметры пути.
   */
  readonly path: {
    /**
     * Идентификатор кабинета.
     *
     * Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).
     *
     * ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)
     *
     * Формат: `int64`.
     *
     * Минимальное значение: 1.
     */
    readonly businessId: number;
  } /**
   * Параметры строки запроса.
   */;
  readonly query: {
    /**
     * Идентификатор чата.
     *
     * Формат: `int64`.
     *
     * Минимальное значение: 1.
     */
    readonly chatId: number;
  } /**
   * description
   */;
  readonly body: ChatsSendMessageToChatRequest;
};
/**
 * Успешный ответ метода «Отправка сообщения в чат».
 *
 * 200: Пустой ответ. Означает, что сообщение отправлено.
 */
export type SendMessageToChatResponse = ChatsEmptyApiResponse;
