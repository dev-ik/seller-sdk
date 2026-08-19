// Generated public types for this Yandex Market endpoint.
type ChatsApiResponseStatusType = "OK" | "ERROR";
type ChatsCampaignId = number;
type ChatsChatContextDTO = {
  readonly type: ChatsChatContextIdentifiableType;
  readonly id: number;
};
type ChatsChatContextIdentifiableType = "ORDER" | "RETURN";
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
type ChatsGetChatsInfoDTO = {
  readonly chats: readonly ChatsGetChatInfoDTO[];
  readonly paging?: ChatsPackagingForwardScrollingPagerDTO;
};
type ChatsGetChatsRequest = {
  readonly orderIds?: readonly number[] | null;
  readonly contexts?: readonly ChatsChatContextDTO[] | null;
  readonly contextTypes?: readonly ChatsChatContextType[] | null;
  readonly types?: readonly ChatsChatType[] | null;
  readonly statuses?: readonly ChatsChatStatusType[] | null;
};
type ChatsGetChatsResponse = {
  readonly status: ChatsApiResponseStatusType;
  readonly result?: ChatsGetChatsInfoDTO;
};
type ChatsPackagingForwardScrollingPagerDTO = {
  readonly nextPageToken?: string;
};

/**
 * Параметры метода «Получение доступных чатов».
 *
 * Возвращает чаты с покупателями.
 *
 * Подключите API-уведомления
 *
 * Маркет отправит вам запрос [POST notification](../../push-notifications/reference/sendNotification.md), когда появится новый чат или сообщение.
 *
 * [{#T}](../../push-notifications/index.md)
 *
 * POST /v2/businesses/{businessId}/chats
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetChatsInput = {
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
  readonly query?: {
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
     * Значение по умолчанию: `10`.
     *
     * Минимальное значение: 1.
     *
     * Максимальное значение: 20.
     */
    readonly limit?: number;
  } /**
   * description
   */;
  readonly body: ChatsGetChatsRequest;
};
/**
 * Успешный ответ метода «Получение доступных чатов».
 *
 * 200: Список чатов.
 */
export type GetChatsResponse = ChatsGetChatsResponse;
