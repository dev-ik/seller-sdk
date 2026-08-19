// Generated public types for this Yandex Market endpoint.
type OffersApiResponseStatusType = "OK" | "ERROR";
type OffersEmptyApiResponse = { readonly status: OffersApiResponseStatusType };
type OffersShopSku = string;
type OffersUpdateCampaignOfferDTO = {
  readonly offerId: OffersShopSku;
  readonly available?: boolean;
  readonly vat?: OffersVatType;
};
type OffersUpdateCampaignOffersRequest = {
  readonly offers: readonly OffersUpdateCampaignOfferDTO[];
};
type OffersVatType = number;

/**
 * Параметры метода «Изменение условий продажи товаров в магазине».
 *
 * Изменяет параметры размещения товаров в конкретном магазине: доступность товара и применяемый НДС.
 *
 * POST /v2/campaigns/{campaignId}/offers/update
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type UpdateCampaignOffersInput = {
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
  readonly body: OffersUpdateCampaignOffersRequest;
};
/**
 * Успешный ответ метода «Изменение условий продажи товаров в магазине».
 *
 * 200: Ответ `200` обозначает, что новые параметры получены Маркетом и скоро вступят в силу.
 */
export type UpdateCampaignOffersResponse = OffersEmptyApiResponse;
