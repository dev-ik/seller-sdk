// Generated public types for this Yandex Market endpoint.
type OrdersBriefOrderItemInstanceDTO = {
  readonly cis?: OrdersCis;
  readonly uin?: string;
  readonly rnpt?: string;
  readonly gtd?: string;
  readonly countryCode?: OrdersCountryCode;
};
type OrdersCis = string;
type OrdersCountryCode = string;
type OrdersOrderItemModificationDTO = {
  readonly id: number;
  readonly count: number;
  readonly instances?: readonly OrdersBriefOrderItemInstanceDTO[] | null;
};
type OrdersOrderItemsModificationRequestReasonType =
  | "PARTNER_REQUESTED_REMOVE"
  | "USER_REQUESTED_REMOVE";
type OrdersUpdateOrderItemRequest = {
  readonly items: readonly OrdersOrderItemModificationDTO[];
  readonly reason?: OrdersOrderItemsModificationRequestReasonType;
};

/**
 * Параметры метода «Удаление товаров из заказа или уменьшение их числа».
 *
 * Если вы работаете по модели FBS
 *
 * Используйте метод [PUT v2/campaigns/{campaignId}/orders/{orderId}/boxes](../../reference/orders/setOrderBoxLayout.md).
 *
 * Удаляет один или несколько товаров из заказа, если магазин не может поставить их все.
 *
 * Заказ должен находится в статусе `"status": "PROCESSING"` этапа обработки `"substatus": "STARTED"`. Изменить состав нельзя после передачи статуса `"substatus": "READY_TO_SHIP"`.
 *
 * Уменьшить количество одинаковых товаров
 *
 * Передайте обновленное значение в параметре `count`.
 *
 * Удалить товар из заказа
 *
 * Передайте значение `0` в параметре `count` или не передавайте `item`.
 *
 * Нельзя удалить или уменьшить количество товара, если он:
 *
 * * добавлен по акции;
 * * составляет 99% стоимости заказа;
 * * единственный товар в заказе.
 *
 * В таком случае отмените заказ — в методе [PUT v2/campaigns/{campaignId}/orders/{orderId}/status](../../reference/orders/updateOrderStatus.md) передайте статус заказа `CANCELLED` с причиной отмены `SHOP_FAILED`.
 *
 * ### Как вернутся деньги {#money}
 *
 * Если покупатель оплатил товар при оформлении, Маркет вернет ему деньги за удаленные из заказа товары в течение двух дней:
 *
 * * при оплате банковской картой — с момента, когда магазин переведет заказ в статус `SHIPPED`;
 *
 * * при оплате через :no-translate[Apple Pay] или :no-translate[Google Pay] — с момента, когда магазин удалит товар из заказа.
 *
 * PUT /v2/campaigns/{campaignId}/orders/{orderId}/items
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type UpdateOrderItemsInput = {
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
  readonly body: OrdersUpdateOrderItemRequest;
};
/**
 * Успешный ответ метода «Удаление товаров из заказа или уменьшение их числа».
 *
 * 200: Маркет успешно обработал ваш запрос. Выходные данные не ожидаются.
 */
export type UpdateOrderItemsResponse = undefined;
