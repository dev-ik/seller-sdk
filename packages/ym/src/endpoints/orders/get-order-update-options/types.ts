// Generated public types for this Yandex Market endpoint.
type OrdersApiResponseStatusType = "OK" | "ERROR";
type OrdersDeliveryDateIntervalDTO = {
  readonly fromDate: string;
  readonly toDate: string;
};
type OrdersDeliveryIntervalsUpdateOptionDTO = {
  readonly deliveryDateInterval: OrdersDeliveryDateIntervalDTO;
  readonly deliveryTimeInterval: OrdersTimeIntervalDTO;
};
type OrdersDeliveryIntervalsUpdateOptionsDTO = {
  readonly availableDeliveryIntervals: readonly OrdersDeliveryIntervalsUpdateOptionDTO[];
};
type OrdersGetOrderUpdateOptionsRequest = { readonly id: number };
type OrdersGetOrderUpdateOptionsResponse = {
  readonly status: OrdersApiResponseStatusType;
  readonly result?: OrdersOrderUpdateOptionsDTO;
};
type OrdersOrderUpdateOptionsDTO = {
  readonly deliveryIntervals: OrdersDeliveryIntervalsUpdateOptionsDTO;
};
type OrdersTimeIntervalDTO = {
  readonly fromTime: string;
  readonly toTime: string;
};

/**
 * Параметры метода «Получение временных интервалов для изменения заказа».
 *
 * Возвращает список доступных интервалов для изменения даты и времени курьерской доставки.
 *
 * POST /v1/campaigns/{campaignId}/orders/update-options
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetOrderUpdateOptionsInput = {
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
  } /**
   * Тело запроса.
   */;
  readonly body: OrdersGetOrderUpdateOptionsRequest;
};
/**
 * Успешный ответ метода «Получение временных интервалов для изменения заказа».
 *
 * 200: Список доступных интервалов.
 */
export type GetOrderUpdateOptionsResponse = OrdersGetOrderUpdateOptionsResponse;
