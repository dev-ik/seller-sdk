// Generated public types for this Yandex Market endpoint.
type OrderBusinessInformationApiResponseStatusType = "OK" | "ERROR";
type OrderBusinessInformationGetBusinessBuyerInfoResponse = {
  readonly status: OrderBusinessInformationApiResponseStatusType;
  readonly result?: OrderBusinessInformationOrderBusinessBuyerDTO;
};
type OrderBusinessInformationOrderBusinessBuyerDTO = {
  readonly inn?: string;
  readonly kpp?: string;
  readonly organizationName?: string;
  readonly organizationJurAddress?: string;
};

/**
 * Параметры метода «Информация о покупателе — юридическом лице».
 *
 * Возвращает информацию о покупателе по идентификатору заказа.
 *
 * Как получить информацию о покупателе, который является физическим лицом
 *
 * Воспользуйтесь запросом [GET v2/campaigns/{campaignId}/orders/{orderId}/buyer](../../reference/order-delivery/getOrderBuyerInfo.md).
 *
 * Получить данные можно, только если заказ находится в статусе `PROCESSING`, `DELIVERY`, `PICKUP` или `DELIVERED`.
 *
 * POST /v2/campaigns/{campaignId}/orders/{orderId}/business-buyer
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetOrderBusinessBuyerInfoInput = {
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
 * Успешный ответ метода «Информация о покупателе — юридическом лице».
 *
 * 200: Информация о покупателе.
 */
export type GetOrderBusinessBuyerInfoResponse =
  OrderBusinessInformationGetBusinessBuyerInfoResponse;
