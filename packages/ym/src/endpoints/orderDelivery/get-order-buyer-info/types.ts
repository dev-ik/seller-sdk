// Generated public types for this Yandex Market endpoint.
type OrderDeliveryApiResponseStatusType = "OK" | "ERROR";
type OrderDeliveryGetOrderBuyerInfoResponse = {
  readonly status: OrderDeliveryApiResponseStatusType;
  readonly result?: OrderDeliveryOrderBuyerInfoDTO;
};
type OrderDeliveryOrderBuyerInfoDTO = {
  readonly id?: string;
  readonly lastName?: string;
  readonly firstName?: string;
  readonly middleName?: string;
  readonly type: OrderDeliveryOrderBuyerType;
  readonly phone?: string;
  readonly trusted?: boolean;
};
type OrderDeliveryOrderBuyerType = "PERSON" | "BUSINESS";

/**
 * Параметры метода «Информация о покупателе — физическом лице».
 *
 * Возвращает информацию о покупателе по идентификатору заказа.
 *
 * Как получить информацию о покупателе, который является юридическим лицом
 *
 * Воспользуйтесь запросом [POST v2/campaigns/{campaignId}/orders/{orderId}/business-buyer](../../reference/order-business-information/getOrderBusinessBuyerInfo.md).
 *
 * Получить данные можно, только если заказ находится в статусе `PROCESSING`, `DELIVERY` или `PICKUP`.
 *
 * GET /v2/campaigns/{campaignId}/orders/{orderId}/buyer
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetOrderBuyerInfoInput = {
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
  };
};
/**
 * Успешный ответ метода «Информация о покупателе — физическом лице».
 *
 * 200: Информация о покупателе.
 */
export type GetOrderBuyerInfoResponse = OrderDeliveryGetOrderBuyerInfoResponse;
