// Generated public types for this Yandex Market endpoint.
type ChatsApiResponseStatusType = "OK" | "ERROR";
type ChatsChatMessageDTO = {
  readonly messageId: number;
  readonly createdAt: string;
  readonly sender: ChatsChatMessageSenderType;
  readonly message?: string;
  readonly payload?: readonly ChatsChatMessagePayloadDTO[] | null;
};
type ChatsChatMessagePayloadDTO = {
  readonly name: string;
  readonly url: ChatsUrl;
  readonly size: number;
};
type ChatsChatMessageSenderType = "PARTNER" | "CUSTOMER" | "MARKET" | "SUPPORT";
type ChatsGetChatMessageResponse = {
  readonly status: ChatsApiResponseStatusType;
  readonly result?: ChatsChatMessageDTO;
};
type ChatsUrl = string;

/**
 * Параметры метода «Получение сообщения в чате».
 *
 * Возвращает сообщение по его идентификатору.
 *
 * Подключите API-уведомления
 *
 * Маркет отправит вам запрос [POST notification](../../push-notifications/reference/sendNotification.md), когда появится новый чат или сообщение.
 *
 * [{#T}](../../push-notifications/index.md)
 *
 * GET /v2/businesses/{businessId}/chats/message
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetChatMessageInput = {
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

    /**
     * Идентификатор сообщения.
     *
     * Формат: `int64`.
     *
     * Минимальное значение: 1.
     */
    readonly messageId: number;
  };
};
/**
 * Успешный ответ метода «Получение сообщения в чате».
 *
 * 200: Сообщение и информация о нем.
 */
export type GetChatMessageResponse = ChatsGetChatMessageResponse;
