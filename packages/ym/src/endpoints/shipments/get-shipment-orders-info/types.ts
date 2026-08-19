// Generated public types for this Yandex Market endpoint.
type ShipmentsApiResponseStatusType = "OK" | "ERROR";
type ShipmentsGetShipmentOrdersInfoResponse = {
  readonly status: ShipmentsApiResponseStatusType;
  readonly result?: ShipmentsOrdersShipmentInfoDTO;
};
type ShipmentsOrdersShipmentInfoDTO = {
  readonly orderIdsWithLabels: readonly number[];
  readonly orderIdsWithoutLabels: readonly number[];
};

/**
 * Параметры метода «Получение информации о возможности печати ярлыков».
 *
 * Возвращает информацию о возможности печати ярлыков-наклеек для заказов в отгрузке.
 *
 * GET /v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/orders/info
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetShipmentOrdersInfoInput = {
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
     * Идентификатор отгрузки.
     *
     * Формат: `int64`.
     *
     * Минимальное значение: 1.
     */
    readonly shipmentId: number;
  };
};
/**
 * Успешный ответ метода «Получение информации о возможности печати ярлыков».
 *
 * 200: Информация по годным/негодным для печати ярлыков заказам в отгрузке.
 */
export type GetShipmentOrdersInfoResponse =
  ShipmentsGetShipmentOrdersInfoResponse;
