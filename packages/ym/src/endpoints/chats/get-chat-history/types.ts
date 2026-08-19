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
type ChatsChatMessagesResultDTO = {
  readonly orderId?: number;
  readonly context: ChatsChatFullContextDTO;
  readonly messages: readonly ChatsChatMessageDTO[];
  readonly paging?: ChatsPackagingForwardScrollingPagerDTO;
};
type ChatsGetChatHistoryRequest = { readonly messageIdFrom?: number };
type ChatsGetChatHistoryResponse = {
  readonly status: ChatsApiResponseStatusType;
  readonly result?: ChatsChatMessagesResultDTO;
};
type ChatsPackagingForwardScrollingPagerDTO = {
  readonly nextPageToken?: string;
};
type ChatsUrl = string;

/**
 * Параметры метода «Получение истории сообщений в чате».
 *
 * Возвращает историю сообщений в чате с покупателем.
 *
 * POST /v2/businesses/{businessId}/chats/history
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetChatHistoryInput = {
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
     * Идентификатор страницы c результатами.
     *
     * Если параметр не указан, возвращается первая страница.
     *
     * Передавайте значение выходного параметра `nextPageToken`, полученное при последнем запросе.
     */
    readonly pageToken?: string;

    /**
     * Количество элементов на странице.
     *
     * Формат: `int32`.
     *
     * Значение по умолчанию: `50`.
     *
     * Минимальное значение: 1.
     *
     * Максимальное значение: 100.
     */
    readonly limit?: number;
  } /**
   * description
   */;
  readonly body: ChatsGetChatHistoryRequest;
};
/**
 * Успешный ответ метода «Получение истории сообщений в чате».
 *
 * 200: История сообщений.
 */
export type GetChatHistoryResponse = ChatsGetChatHistoryResponse;
