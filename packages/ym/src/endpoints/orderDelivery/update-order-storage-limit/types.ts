// Generated public types for this Yandex Market endpoint.
type OrderDeliveryApiResponseStatusType = "OK" | "ERROR";
type OrderDeliveryEmptyApiResponse = {
  readonly status: OrderDeliveryApiResponseStatusType;
};
type OrderDeliveryUpdateOrderStorageLimitRequest = { readonly newDate: string };

/**
 * Параметры метода «Продление срока хранения заказа».
 *
 * Продлевает срок хранения заказа в пункте выдачи продавца.
 *
 * Заказ должен быть в статусе `PICKUP`. Продлить срок можно только один раз, не больше чем на 30 дней.
 *
 * Новый срок хранения можно получить в параметре `outletStorageLimitDate` в ответе метода [POST v1/businesses/{businessId}/orders](../../reference/orders/getBusinessOrders.md).
 *
 * PUT /v2/campaigns/{campaignId}/orders/{orderId}/delivery/storage-limit
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type UpdateOrderStorageLimitInput = {
  /**
   * Параметры пути.
   */
  readonly path: {
    /**
     * Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.
     *
     * Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:
     *
     * * блок **Идентификатор кампании**;
     * * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.
     *
     * ⚠️ Не путайте его с:
     * - идентификатором магазина, который отображается в личном кабинете продавца;
     * - рекламными кампаниями.
     *
     * Формат: `int64`.
     *
     * Минимальное значение: 1.
     */
    readonly campaignId: number;

    /**
     * Идентификатор заказа.
     *
     * Формат: `int64`.
     */
    readonly orderId: number;
  } /**
   * Тело запроса.
   */;
  readonly body: OrderDeliveryUpdateOrderStorageLimitRequest;
};
/**
 * Успешный ответ метода «Продление срока хранения заказа».
 *
 * 200: Пустой ответ.
 */
export type UpdateOrderStorageLimitResponse = OrderDeliveryEmptyApiResponse;
