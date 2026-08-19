// Generated public types for this Yandex Market endpoint.
type OrdersAcceptOrderCancellationRequest = {
  readonly accepted: boolean;
  readonly reason?: OrdersOrderCancellationReasonType;
};
type OrdersApiResponseStatusType = "OK" | "ERROR";
type OrdersEmptyApiResponse = { readonly status: OrdersApiResponseStatusType };
type OrdersOrderCancellationReasonType =
  | "ORDER_DELIVERED"
  | "ORDER_IN_DELIVERY";

/**
 * Параметры метода «Отмена заказа покупателем».
 *
 * Подтверждает или отклоняет заявку покупателя на отмену заказа, который передан службе доставки.
 *
 * Покупатель может отменить заказ в течение его обработки или доставки. Если заказ еще обрабатывается (статус `PROCESSING`), вам не нужно подтверждать отмену заказа — он будет отменен автоматически.
 *
 * Если заказ уже передан службе доставки (статус `DELIVERY` или `PICKUP`) и пользователь отменил его, вы можете предупредить службу об отмене в течение 48 часов.
 *
 * * Служба доставки узнала об отмене до передачи заказа покупателю — подтвердите отмену с помощью запроса [PUT v2/campaigns/{campaignId}/orders/{orderId}/cancellation/accept](../../reference/orders/acceptOrderCancellation.md).
 * * Заказ уже доставлен — отклоните отмену с помощью этого же запроса. Тогда у покупателя останется заказ, и деньги за него возвращаться не будут.
 *
 * **Как узнать об отмененных заказах:**
 *
 * * Передайте параметр `onlyWaitingForCancellationApprove` в запросе [POST v1/businesses/{businessId}/orders](../../reference/orders/getBusinessOrders.md).
 * * В кабинете или через почту — на нее придет уведомление об отмене.
 * * Подключите API-уведомления. Маркет отправит вам запрос [POST notification](../../push-notifications/reference/sendNotification.md), когда появится новая заявка на отмену заказа. [{#T}](../../push-notifications/index.md)
 *
 * Если в течение 48 часов вы не подтвердите или отклоните отмену, заказ будет отменен автоматически.
 *
 * PUT /v2/campaigns/{campaignId}/orders/{orderId}/cancellation/accept
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type AcceptOrderCancellationInput = {
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
  readonly body: OrdersAcceptOrderCancellationRequest;
};
/**
 * Успешный ответ метода «Отмена заказа покупателем».
 *
 * 200: Ответ на отмену заказа был успешно передан.
 */
export type AcceptOrderCancellationResponse = OrdersEmptyApiResponse;
