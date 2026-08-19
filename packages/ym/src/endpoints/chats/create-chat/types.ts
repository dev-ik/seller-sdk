// Generated public types for this Yandex Market endpoint.
type ChatsApiResponseStatusType = "OK" | "ERROR";
type ChatsChatContextDTO = {
  readonly type: ChatsChatContextIdentifiableType;
  readonly id: number;
};
type ChatsChatContextIdentifiableType = "ORDER" | "RETURN";
type ChatsCreateChatRequest = {
  readonly orderId?: number;
  readonly context?: ChatsChatContextDTO;
};
type ChatsCreateChatResponse = {
  readonly status: ChatsApiResponseStatusType;
  readonly result?: ChatsCreateChatResultDTO;
};
type ChatsCreateChatResultDTO = { readonly chatId: number };

/**
 * Параметры метода «Создание нового чата с покупателем».
 *
 * Создает новый чат с покупателем и возвращает информацию о нем или созданном ранее.
 *
 * Типы чатов, которые может начать продавец:
 *
 * * по заказам;
 * * по возвратам (доступны только для FBY-, FBS- и Экспресс-магазинов).
 *
 * POST /v2/businesses/{businessId}/chats/new
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type CreateChatInput = {
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
   * description
   */;
  readonly body: ChatsCreateChatRequest;
};
/**
 * Успешный ответ метода «Создание нового чата с покупателем».
 *
 * 200: Информация о новом или созданном ранее чате.
 */
export type CreateChatResponse = ChatsCreateChatResponse;
