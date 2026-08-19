// Generated public types for this Yandex Market endpoint.
type HiddenOffersApiResponseStatusType = "OK" | "ERROR";
type HiddenOffersDeleteHiddenOffersRequest = {
  readonly hiddenOffers: readonly HiddenOffersHiddenOfferDTO[];
};
type HiddenOffersEmptyApiResponse = {
  readonly status: HiddenOffersApiResponseStatusType;
};
type HiddenOffersHiddenOfferDTO = { readonly offerId: HiddenOffersShopSku };
type HiddenOffersShopSku = string;

/**
 * Параметры метода «Возобновление показа товаров».
 *
 * Возобновляет показ скрытых вами товаров магазина на Маркете.
 *
 * Данные в каталоге обновляются не мгновенно
 *
 * Это занимает до нескольких минут.
 *
 * POST /v2/campaigns/{campaignId}/hidden-offers/delete
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type DeleteHiddenOffersInput = {
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
   * Запрос на возобновление показа оферов.
   */;
  readonly body: HiddenOffersDeleteHiddenOffersRequest;
};
/**
 * Успешный ответ метода «Возобновление показа товаров».
 *
 * 200: Показ товаров возобновлен.
 */
export type DeleteHiddenOffersResponse = HiddenOffersEmptyApiResponse;
