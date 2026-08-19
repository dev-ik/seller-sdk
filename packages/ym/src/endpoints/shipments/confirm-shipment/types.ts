// Generated public types for this Yandex Market endpoint.
type ShipmentsApiResponseStatusType = "OK" | "ERROR";
type ShipmentsConfirmShipmentRequest = {
  readonly externalShipmentId?: string;
  readonly signatory?: string;
};
type ShipmentsEmptyApiResponse = {
  readonly status: ShipmentsApiResponseStatusType;
};

/**
 * Параметры метода «Подтверждение отгрузки».
 *
 * Подтверждает отгрузку товаров в сортировочный центр или пункт приема заказов. Действие доступно только после того, как отгрузка сформирована.
 *
 * График отгрузок настраивается отдельно для каждого склада в личном кабинете и недоступен через API.
 * Проверить возможность подтверждения отгрузки можно с помощью метода [GET v2/campaigns/{campaignId}/shipments/{shipmentId}](../../reference/shipments/getShipment): среди доступных действий `availableActions` должно быть действие `CONFIRM`.
 * До наступления времени подтверждения метод вернет код `400` и ошибку :no-translate["Cutoff time for shipments has not been reached yet"].
 *
 * Подробнее о приеме заказов и расписании отгрузок читайте [в Справке Маркета для продавцов](https://yandex.ru/support/marketplace/ru/orders/fbs/settings/shipment#schedule).
 *
 * POST /v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/confirm
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type ConfirmShipmentInput = {
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
  } /**
   * Тело запроса.
   */;
  readonly body?: ShipmentsConfirmShipmentRequest;
};
/**
 * Успешный ответ метода «Подтверждение отгрузки».
 *
 * 200: Пустой ответ.
 */
export type ConfirmShipmentResponse = ShipmentsEmptyApiResponse;
