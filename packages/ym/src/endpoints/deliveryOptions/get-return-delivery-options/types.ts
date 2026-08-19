// Generated public types for this Yandex Market endpoint.
type DeliveryOptionsApiResponseStatusType = "OK" | "ERROR";
type DeliveryOptionsBasicOrderItemDTO = {
  readonly offerId: DeliveryOptionsShopSku;
  readonly count: number;
};
type DeliveryOptionsGetReturnDeliveryOptionsDTO = {
  readonly pickupDelivery: DeliveryOptionsPickupReturnDeliveryOptionsDTO;
};
type DeliveryOptionsGetReturnDeliveryOptionsRequest = {
  readonly items: readonly DeliveryOptionsBasicOrderItemDTO[];
  readonly pickupDelivery: DeliveryOptionsPickupDeliveryParametersDTO;
};
type DeliveryOptionsGetReturnDeliveryOptionsResponse = {
  readonly status: DeliveryOptionsApiResponseStatusType;
  readonly result?: DeliveryOptionsGetReturnDeliveryOptionsDTO;
};
type DeliveryOptionsLogisticPointId = number;
type DeliveryOptionsPickupDeliveryParametersDTO = {
  readonly logisticPointsIds: readonly DeliveryOptionsLogisticPointId[];
};
type DeliveryOptionsPickupReturnDeliveryOptionsDTO = {
  readonly logisticPointIds: readonly DeliveryOptionsLogisticPointId[];
};
type DeliveryOptionsShopSku = string;

/**
 * Параметры метода «Получение подходящих для возврата пунктов выдачи».
 *
 * Возвращает список идентификаторов пунктов выдачи, которые могут принять возврат указанных товаров.
 *
 * POST /v1/campaigns/{campaignId}/return-delivery-options
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetReturnDeliveryOptionsInput = {
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
  readonly body: DeliveryOptionsGetReturnDeliveryOptionsRequest;
};
/**
 * Успешный ответ метода «Получение подходящих для возврата пунктов выдачи».
 *
 * 200: Информация о пунктах выдачи, которые могут принять возврат указанных товаров.
 */
export type GetReturnDeliveryOptionsResponse =
  DeliveryOptionsGetReturnDeliveryOptionsResponse;
