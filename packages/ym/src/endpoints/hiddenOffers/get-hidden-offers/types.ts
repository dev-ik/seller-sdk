// Generated public types for this Yandex Market endpoint.
type HiddenOffersApiResponseStatusType = "OK" | "ERROR";
type HiddenOffersGetHiddenOffersResponse = {
  readonly status: HiddenOffersApiResponseStatusType;
  readonly result?: HiddenOffersGetHiddenOffersResultDTO;
};
type HiddenOffersGetHiddenOffersResultDTO = {
  readonly paging?: HiddenOffersPackagingScrollingPagerDTO;
  readonly hiddenOffers: readonly HiddenOffersHiddenOfferDTO[];
};
type HiddenOffersHiddenOfferDTO = { readonly offerId: HiddenOffersShopSku };
type HiddenOffersPackagingScrollingPagerDTO = {
  readonly nextPageToken?: string;
  readonly prevPageToken?: string;
};
type HiddenOffersShopSku = string;

/**
 * Параметры метода «Информация о скрытых вами товарах».
 *
 * Возвращает список скрытых вами товаров для заданного магазина.
 *
 * В списке будут товары, скрытые любым способом — через API, с помощью YML-фида, в кабинете и так далее.
 *
 * GET /v2/campaigns/{campaignId}/hidden-offers
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetHiddenOffersInput = {
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
   * Параметры строки запроса.
   */;
  readonly query?: {
    /**
     * Идентификатор скрытого предложения.
     */
    readonly offer_id?: readonly HiddenOffersShopSku[];

    /**
     * Идентификатор страницы c результатами.
     *
     * Если параметр не указан, возвращается первая страница.
     *
     * Передавайте значение выходного параметра `nextPageToken`, полученное при последнем запросе.
     */
    readonly pageToken?: string;

    /**
     * Количество элементов на странице.
     *
     * Формат: `int32`.
     *
     * Значение по умолчанию: `250`.
     *
     * Минимальное значение: 1.
     *
     * Максимальное значение: 500.
     */
    readonly limit?: number;
  };
};
/**
 * Успешный ответ метода «Информация о скрытых вами товарах».
 *
 * 200: Информация о скрытых вами товарах.
 */
export type GetHiddenOffersResponse = HiddenOffersGetHiddenOffersResponse;
