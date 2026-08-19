// Generated public types for this Yandex Market endpoint.
type OffersApiResponseStatusType = "OK" | "ERROR";
type OffersDeleteCampaignOffersDTO = {
  readonly notDeletedOfferIds?: readonly OffersShopSku[] | null;
};
type OffersDeleteCampaignOffersRequest = {
  readonly offerIds: readonly OffersShopSku[];
};
type OffersDeleteCampaignOffersResponse = {
  readonly status: OffersApiResponseStatusType;
  readonly result?: OffersDeleteCampaignOffersDTO;
};
type OffersShopSku = string;

/**
 * Параметры метода «Удаление товаров из ассортимента магазина».
 *
 * Удаляет заданные товары из заданного магазина.
 *
 * Запрос удаляет товары из конкретного магазина
 *
 * На продажи в других магазинах и на наличие товара в общем каталоге он не влияет.
 *
 * Товар не получится удалить, если он хранится на складах Маркета.
 *
 * POST /v2/campaigns/{campaignId}/offers/delete
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type DeleteCampaignOffersInput = {
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
  readonly body: OffersDeleteCampaignOffersRequest;
};
/**
 * Успешный ответ метода «Удаление товаров из ассортимента магазина».
 *
 * 200: Если удалось удалить не все товары, с ответом 200 вернется список тех, что были в запросе, но остались в магазине.
 */
export type DeleteCampaignOffersResponse = OffersDeleteCampaignOffersResponse;
