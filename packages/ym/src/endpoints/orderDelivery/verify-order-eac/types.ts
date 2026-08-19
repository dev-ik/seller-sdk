// Generated public types for this Yandex Market endpoint.
type OrderDeliveryApiResponseStatusType = "OK" | "ERROR";
type OrderDeliveryEacVerificationResultDTO = {
  readonly verificationResult?: OrderDeliveryEacVerificationStatusType;
  readonly attemptsLeft?: number;
};
type OrderDeliveryEacVerificationStatusType =
  | "ACCEPTED"
  | "REJECTED"
  | "NEED_UPDATE";
type OrderDeliveryVerifyOrderEacRequest = { readonly code: string };
type OrderDeliveryVerifyOrderEacResponse = {
  readonly status: OrderDeliveryApiResponseStatusType;
  readonly result?: OrderDeliveryEacVerificationResultDTO;
};

/**
 * Параметры метода «Передача кода подтверждения».
 *
 * Отправляет Маркету код подтверждения для его проверки.
 *
 * **Если у магазина настроена работа с кодами подтверждения:**
 *
 * В параметре `delivery`, вложенном в `order`, возвращается параметр `eacType` с типом `Enum` (тип кода подтверждения для передачи заказа) в методах:
 *
 * * [POST v1/businesses/{businessId}/orders](../../reference/orders/getBusinessOrders.md);
 * * [PUT v2/campaigns/{campaignId}/orders/{orderId}/status](../../reference/orders/updateOrderStatus.md).
 *
 * Возможные значения:
 *
 * * `MERCHANT_TO_COURIER` (временно не возвращается) — продавец передает код курьеру для получения невыкупа;
 * * `COURIER_TO_MERCHANT` — курьер передает код продавцу для получения заказа.
 *
 * Параметр `eacType` возвращается при статусах заказа `COURIER_FOUND`, `COURIER_ARRIVED_TO_SENDER` и `DELIVERY_SERVICE_UNDELIVERED`. Если заказ в других статусах, параметр может отсутствовать.
 *
 * PUT /v2/campaigns/{campaignId}/orders/{orderId}/verifyEac
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type VerifyOrderEacInput = {
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
  readonly body: OrderDeliveryVerifyOrderEacRequest;
};
/**
 * Успешный ответ метода «Передача кода подтверждения».
 *
 * 200: Проверка кода выполнена успешно.
 */
export type VerifyOrderEacResponse = OrderDeliveryVerifyOrderEacResponse;
