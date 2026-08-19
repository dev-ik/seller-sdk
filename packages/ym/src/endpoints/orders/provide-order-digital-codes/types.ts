// Generated public types for this Yandex Market endpoint.
type OrdersApiResponseStatusType = "OK" | "ERROR";
type OrdersEmptyApiResponse = { readonly status: OrdersApiResponseStatusType };
type OrdersOrderDigitalItemDTO = {
  readonly id: number;
  readonly codes?: readonly string[] | null;
  readonly slip: string;
  readonly activate_till: string;
};
type OrdersProvideOrderDigitalCodesRequest = {
  readonly items: readonly OrdersOrderDigitalItemDTO[];
};

/**
 * Параметры метода «Передача ключей цифровых товаров».
 *
 * Передает ключи цифровых товаров, которые покупатель заказал и оплатил. После выполнения запроса Маркет отправит ему письмо с ключами и инструкциями по активации. Если письмо будет доставлено, Маркет переведет заказ в финальный статус `DELIVERED`.
 *
 * После передачи кода покупателю статус заказа изменится не сразу
 *
 * Подключите API-уведомления — Маркет отправит вам запрос [POST notification](../../push-notifications/reference/sendNotification.md), когда заказ перейдет в статус `DELIVERED`.
 *
 * [{#T}](../../push-notifications/index.md)
 *
 * Ключ нужно передать в течение 30 минут после перехода заказа в статус `PROCESSING`.
 *
 * Если в один заказ входят несколько ключей, передавайте их все в одном запросе.
 *
 * Каждый товар с уникальным `id` передавайте в виде отдельного элемента в массиве `items`, а ключи товара — в массиве `codes`.
 *
 * Пример
 *
 * ```json translate=no
 * {
 * "items": [
 * {
 * "id": 1,
 * "codes": [
 * "code1", "code2", "code3"
 * ],
 * "slip": "slip",
 * "activate_till": "2025-02-18"
 * },
 * {
 * "id": 2,
 * "codes": [
 * "code4", "code5", "code6"
 * ],
 * "slip": "slip",
 * "activate_till": "2025-02-18"
 * }
 * ]
 * }
 * ```
 *
 * POST /v2/campaigns/{campaignId}/orders/{orderId}/deliverDigitalGoods
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type ProvideOrderDigitalCodesInput = {
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
  readonly body: OrdersProvideOrderDigitalCodesRequest;
};
/**
 * Успешный ответ метода «Передача ключей цифровых товаров».
 *
 * 200: Пустой ответ.
 *
 * Ответ `200` сам по себе не значит, что ключи переданы покупателю
 *
 * Если письмо с ключами удалось доставить, Маркет переведет заказ в финальный статус `DELIVERED`.
 *
 * Статус заказа можно узнать с помощью метода [POST v1/businesses/{businessId}/orders](../../reference/orders/getBusinessOrders.md).
 */
export type ProvideOrderDigitalCodesResponse = OrdersEmptyApiResponse;
