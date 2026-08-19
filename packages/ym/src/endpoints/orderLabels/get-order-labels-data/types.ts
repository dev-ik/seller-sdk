// Generated public types for this Yandex Market endpoint.
type OrderLabelsApiResponseStatusType = "OK" | "ERROR";
type OrderLabelsGetOrderLabelsDataResponse = {
  readonly status: OrderLabelsApiResponseStatusType;
  readonly result?: OrderLabelsOrderLabelDTO;
};
type OrderLabelsOrderLabelDTO = {
  readonly orderId: number;
  readonly placesNumber: number;
  readonly url: OrderLabelsUrl;
  readonly parcelBoxLabels: readonly OrderLabelsParcelBoxLabelDTO[];
};
type OrderLabelsParcelBoxLabelDTO = {
  readonly url: OrderLabelsUrl;
  readonly supplierName: string;
  readonly deliveryServiceName: string;
  readonly orderId: number;
  readonly orderNum: string;
  readonly recipientName: string;
  readonly boxId: number;
  readonly fulfilmentId: string;
  readonly place: string;
  readonly weight: string;
  readonly deliveryServiceId: string;
  readonly deliveryAddress?: string;
  readonly shipmentDate?: string;
};
type OrderLabelsUrl = string;

/**
 * Параметры метода «Данные для самостоятельного изготовления ярлыков».
 *
 * Возвращает информацию на ярлыках, которые клеятся на коробки в заказе.
 *
 * GET /v2/campaigns/{campaignId}/orders/{orderId}/delivery/labels/data
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetOrderLabelsDataInput = {
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
 * Успешный ответ метода «Данные для самостоятельного изготовления ярлыков».
 *
 * 200: Информация для печати ярлыков.
 */
export type GetOrderLabelsDataResponse = OrderLabelsGetOrderLabelsDataResponse;
