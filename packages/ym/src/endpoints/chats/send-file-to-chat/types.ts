// Generated public types for this Yandex Market endpoint.
type ChatsApiResponseStatusType = "OK" | "ERROR";
type ChatsEmptyApiResponse = { readonly status: ChatsApiResponseStatusType };

/**
 * Параметры метода «Отправка файла в чат».
 *
 * Отправляет файл в чат с покупателем.
 *
 * POST /v2/businesses/{businessId}/chats/file/send
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type SendFileToChatInput = {
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
  readonly body: FormData;
};
/**
 * Успешный ответ метода «Отправка файла в чат».
 *
 * 200: Пустой ответ. Означает, что файл отправлен.
 */
export type SendFileToChatResponse = ChatsEmptyApiResponse;
