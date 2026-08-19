// Generated public types for this Yandex Market endpoint.
type ChatsApiResponseStatusType = "OK" | "ERROR";
type ChatsCampaignId = number;
type ChatsChatContextType = "ORDER" | "RETURN" | "DIRECT";
type ChatsChatCustomerDTO = {
  readonly name?: string;
  readonly publicId?: string;
};
type ChatsChatFullContextDTO = {
  readonly type: ChatsChatContextType;
  readonly customer?: ChatsChatCustomerDTO;
  readonly campaignId?: ChatsCampaignId;
  readonly orderId?: number;
  readonly returnId?: number;
};
type ChatsChatStatusType =
  | "NEW"
  | "WAITING_FOR_CUSTOMER"
  | "WAITING_FOR_PARTNER"
  | "WAITING_FOR_ARBITER"
  | "WAITING_FOR_MARKET"
  | "FINISHED";
type ChatsChatType = "CHAT" | "ARBITRAGE";
type ChatsGetChatInfoDTO = {
  readonly chatId: number;
  readonly orderId?: number;
  readonly context: ChatsChatFullContextDTO;
  readonly type: ChatsChatType;
  readonly status: ChatsChatStatusType;
  readonly createdAt: string;
  readonly updatedAt: string;
};
type ChatsGetChatResponse = {
  readonly status: ChatsApiResponseStatusType;
  readonly result?: ChatsGetChatInfoDTO;
};

/**
 * Параметры метода «Получение чата по идентификатору».
 *
 * Возвращает чат по его идентификатору.
 *
 * Подключите API-уведомления
 *
 * Маркет отправит вам запрос [POST notification](../../push-notifications/reference/sendNotification.md), когда появится новый чат или сообщение.
 *
 * [{#T}](../../push-notifications/index.md)
 *
 * GET /v2/businesses/{businessId}/chat
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetChatInput = {
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
  };
};
/**
 * Успешный ответ метода «Получение чата по идентификатору».
 *
 * 200: Информация о чате.
 */
export type GetChatResponse = ChatsGetChatResponse;
