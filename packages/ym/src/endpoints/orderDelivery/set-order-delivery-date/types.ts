// Generated public types for this Yandex Market endpoint.
type OrderDeliveryApiResponseStatusType = "OK" | "ERROR";
type OrderDeliveryEmptyApiResponse = {
  readonly status: OrderDeliveryApiResponseStatusType;
};
type OrderDeliveryOrderDeliveryDateDTO = { readonly toDate: string };
type OrderDeliveryOrderDeliveryDateReasonType =
  | "USER_MOVED_DELIVERY_DATES"
  | "PARTNER_MOVED_DELIVERY_DATES";
type OrderDeliverySetOrderDeliveryDateRequest = {
  readonly dates: OrderDeliveryOrderDeliveryDateDTO;
  readonly reason: OrderDeliveryOrderDeliveryDateReasonType;
};

/**
 * Параметры метода «Изменение даты доставки заказа».
 *
 * Метод изменяет дату доставки заказа в статусе `PROCESSING` или `DELIVERY`. Для заказов с другими статусами дату доставки изменить нельзя.
 *
 * PUT /v2/campaigns/{campaignId}/orders/{orderId}/delivery/date
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type SetOrderDeliveryDateInput = {
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
  readonly body: OrderDeliverySetOrderDeliveryDateRequest;
};
/**
 * Успешный ответ метода «Изменение даты доставки заказа».
 *
 * 200: Успешное изменение даты доставки.
 */
export type SetOrderDeliveryDateResponse = OrderDeliveryEmptyApiResponse;
