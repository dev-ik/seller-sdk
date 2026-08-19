// Generated public types for this Yandex Market endpoint.
type PromosApiResponseStatusType = "OK" | "ERROR";
type PromosCampaignId = number;
type PromosGetPromoOfferDTO = {
  readonly offerId: PromosShopSku;
  readonly status: PromosPromoOfferParticipationStatusType;
  readonly params: PromosPromoOfferParamsDTO;
  readonly autoParticipatingDetails?: PromosPromoOfferAutoParticipatingDetailsDTO;
};
type PromosGetPromoOffersRequest = {
  readonly promoId: string;
  readonly statusType?: PromosPromoOfferParticipationStatusFilterType;
  readonly statuses?:
    | readonly PromosPromoOfferParticipationStatusMultiFilterType[]
    | null;
};
type PromosGetPromoOffersResponse = {
  readonly status: PromosApiResponseStatusType;
  readonly result?: PromosGetPromoOffersResultDTO;
};
type PromosGetPromoOffersResultDTO = {
  readonly offers: readonly PromosGetPromoOfferDTO[];
  readonly paging?: PromosPackagingForwardScrollingPagerDTO;
};
type PromosPackagingForwardScrollingPagerDTO = {
  readonly nextPageToken?: string;
};
type PromosPromoOfferAutoParticipatingDetailsDTO = {
  readonly campaignIds?: readonly PromosCampaignId[] | null;
};
type PromosPromoOfferDiscountParamsDTO = {
  readonly price?: number;
  readonly promoPrice?: number;
  readonly maxPromoPrice?: number;
};
type PromosPromoOfferParamsDTO = {
  readonly discountParams?: PromosPromoOfferDiscountParamsDTO;
};
type PromosPromoOfferParticipationStatusFilterType =
  | "MANUALLY_ADDED"
  | "NOT_MANUALLY_ADDED";
type PromosPromoOfferParticipationStatusMultiFilterType =
  | "MANUALLY_ADDED"
  | "RENEWED"
  | "RENEW_FAILED"
  | "NOT_MANUALLY_ADDED"
  | "MINIMUM_FOR_PROMOS";
type PromosPromoOfferParticipationStatusType =
  | "AUTO"
  | "PARTIALLY_AUTO"
  | "MANUAL"
  | "NOT_PARTICIPATING"
  | "RENEWED"
  | "RENEW_FAILED"
  | "MINIMUM_FOR_PROMOS";
type PromosShopSku = string;

/**
 * Параметры метода «Получение списка товаров, которые участвуют или могут участвовать в акции».
 *
 * Возвращает список товаров, которые участвуют или могут участвовать в акции.
 *
 * Условия участия в акциях могут меняться
 *
 * Например, `maxPromoPrice`.
 *
 * Установленные цены меняться не будут — `price` и `promoPrice`.
 *
 * POST /v2/businesses/{businessId}/promos/offers
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetPromoOffersInput = {
  /**
   * Параметры пути.
   */
  readonly path: {
    /**
     * Идентификатор кабинета.
     *
     * Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).
     *
     * ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)
     *
     * Формат: `int64`.
     *
     * Минимальное значение: 1.
     */
    readonly businessId: number;
  } /**
   * Параметры строки запроса.
   */;
  readonly query?: {
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
  } /**
   * Тело запроса.
   */;
  readonly body: PromosGetPromoOffersRequest;
};
/**
 * Успешный ответ метода «Получение списка товаров, которые участвуют или могут участвовать в акции».
 *
 * 200: Список товаров, которые участвуют или могут участвовать в акции.
 */
export type GetPromoOffersResponse = PromosGetPromoOffersResponse;
