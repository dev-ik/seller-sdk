// Generated public types for this Yandex Market endpoint.
type ShipmentsApiResponseStatusType = "OK" | "ERROR";
type ShipmentsEmptyApiResponse = {
  readonly status: ShipmentsApiResponseStatusType;
};
type ShipmentsSetShipmentPalletsCountRequest = { readonly placesCount: number };

/**
 * Параметры метода «Передача количества упаковок для доверительной приемки».
 *
 * Передает Маркету количество упаковок в отгрузке для доверительной приемки. Подробнее о таком виде приемки читайте в [Справке Маркета для продавцов](https://yandex.ru/support/marketplace/orders/fbs/process.html#acceptance).
 *
 * Как передавать упаковки
 *
 * Передавайте количество упаковок, которые вы везете в отгрузке, а не сумму грузомест по заказам.
 *
 * **Пример:** в отгрузке 2 заказа, в каждом по 5 грузомест. Если вы везете их в 2 палетах — передайте в запросе `2`, а не `10`.
 *
 * Получить PDF-файл с ярлыками для упаковок можно с помощью метода [GET v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/pallet/labels](../../reference/shipments/downloadShipmentPalletLabels.md).
 *
 * PUT /v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/pallets
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type SetShipmentPalletsCountInput = {
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
  readonly body: ShipmentsSetShipmentPalletsCountRequest;
};
/**
 * Успешный ответ метода «Передача количества упаковок для доверительной приемки».
 *
 * 200: Имеет значение только тип ответа. Если ответ `ОК`, количество упаковок записано.
 */
export type SetShipmentPalletsCountResponse = ShipmentsEmptyApiResponse;
