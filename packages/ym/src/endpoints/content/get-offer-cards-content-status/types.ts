// Generated public types for this Yandex Market endpoint.
type ContentApiResponseStatusType = "OK" | "ERROR";
type ContentCategoryId = number;
type ContentGetMappingDTO = {
  readonly marketSku?: ContentMarketSku;
  readonly marketSkuName?: string;
  readonly marketModelName?: string;
  readonly marketCategoryId?: number;
  readonly marketCategoryName?: string;
};
type ContentGetOfferCardsContentStatusRequest = {
  readonly offerIds?: readonly ContentShopSku[] | null;
  readonly cardStatuses?: readonly ContentOfferCardStatusType[] | null;
  readonly categoryIds?: readonly ContentCategoryId[] | null;
  readonly withRecommendations?: boolean;
};
type ContentGetOfferCardsContentStatusResponse = {
  readonly status: ContentApiResponseStatusType;
  readonly result?: ContentOfferCardsContentStatusDTO;
};
type ContentMarketSku = number;
type ContentOfferCardContentStatusType = "UPDATING" | "ACTUAL";
type ContentOfferCardDTO = {
  readonly offerId: ContentShopSku;
  readonly mapping?: ContentGetMappingDTO;
  readonly parameterValues?: readonly ContentParameterValueDTO[] | null;
  readonly cardStatus?: ContentOfferCardStatusType;
  readonly contentRating?: number;
  readonly averageContentRating?: number;
  readonly contentRatingStatus?: ContentOfferCardContentStatusType;
  readonly recommendations?:
    | readonly ContentOfferCardRecommendationDTO[]
    | null;
  readonly groupId?: string;
  readonly errors?: readonly ContentOfferErrorDTO[] | null;
  readonly warnings?: readonly ContentOfferErrorDTO[] | null;
};
type ContentOfferCardRecommendationDTO = {
  readonly type: ContentOfferCardRecommendationType;
  readonly percent?: number;
  readonly remainingRatingPoints?: number;
};
type ContentOfferCardRecommendationType =
  | "HAS_VIDEO"
  | "RECOGNIZED_VENDOR"
  | "MAIN"
  | "ADDITIONAL"
  | "DISTINCTIVE"
  | "FILTERABLE"
  | "PICTURE_COUNT"
  | "HAS_DESCRIPTION"
  | "HAS_BARCODE"
  | "FIRST_PICTURE_SIZE"
  | "TITLE_LENGTH"
  | "DESCRIPTION_LENGTH"
  | "AVERAGE_PICTURE_SIZE"
  | "FIRST_VIDEO_SIZE"
  | "FIRST_VIDEO_LENGTH"
  | "AVERAGE_VIDEO_SIZE"
  | "VIDEO_COUNT";
type ContentOfferCardStatusType =
  | "HAS_CARD_CAN_NOT_UPDATE"
  | "HAS_CARD_CAN_UPDATE"
  | "HAS_CARD_CAN_UPDATE_ERRORS"
  | "HAS_CARD_CAN_UPDATE_PROCESSING"
  | "NO_CARD_NEED_CONTENT"
  | "NO_CARD_MARKET_WILL_CREATE"
  | "NO_CARD_ERRORS"
  | "NO_CARD_PROCESSING"
  | "NO_CARD_ADD_TO_CAMPAIGN";
type ContentOfferCardsContentStatusDTO = {
  readonly offerCards: readonly ContentOfferCardDTO[];
  readonly paging?: ContentPackagingForwardScrollingPagerDTO;
};
type ContentOfferErrorDTO = {
  readonly message?: string;
  readonly comment?: string;
};
type ContentPackagingForwardScrollingPagerDTO = {
  readonly nextPageToken?: string;
};
type ContentParameterValueDTO = {
  readonly parameterId: number;
  readonly unitId?: number;
  readonly valueId?: number;
  readonly value?: string;
};
type ContentShopSku = string;

/**
 * Параметры метода «Получение информации о заполненности карточек магазина».
 *
 * Возвращает сведения о состоянии контента для заданных товаров:
 *
 * * создана ли карточка товара и в каком она статусе;
 * * рейтинг карточки — на сколько процентов она заполнена;
 * * переданные характеристики товаров;
 * * есть ли ошибки или предупреждения, связанные с контентом;
 * * рекомендации по заполнению карточки.
 *
 * Чтобы получить другие характеристики товаров, воспользуйтесь методом [POST v2/businesses/{businessId}/offer-mappings](../../reference/business-offer-mappings/getOfferMappings.md).
 *
 * POST /v2/businesses/{businessId}/offer-cards
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetOfferCardsContentStatusInput = {
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
     * Значение по умолчанию: `100`.
     *
     * Минимальное значение: 1.
     *
     * Максимальное значение: 200.
     */
    readonly limit?: number;
  } /**
   * Тело запроса.
   */;
  readonly body?: ContentGetOfferCardsContentStatusRequest;
};
/**
 * Успешный ответ метода «Получение информации о заполненности карточек магазина».
 *
 * 200: Информация о карточках указанных товаров.
 */
export type GetOfferCardsContentStatusResponse =
  ContentGetOfferCardsContentStatusResponse;
