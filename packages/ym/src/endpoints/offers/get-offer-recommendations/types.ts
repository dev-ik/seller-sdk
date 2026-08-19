// Generated public types for this Yandex Market endpoint.
type OffersApiResponseStatusType = "OK" | "ERROR";
type OffersBasePriceDTO = {
  readonly value: number;
  readonly currencyId: OffersCurrencyType;
};
type OffersCurrencyType =
  | "RUR"
  | "USD"
  | "EUR"
  | "UAH"
  | "AUD"
  | "GBP"
  | "BYR"
  | "BYN"
  | "DKK"
  | "ISK"
  | "KZT"
  | "CAD"
  | "CNY"
  | "NOK"
  | "XDR"
  | "SGD"
  | "TRY"
  | "SEK"
  | "CHF"
  | "JPY"
  | "AZN"
  | "ALL"
  | "DZD"
  | "AOA"
  | "ARS"
  | "AMD"
  | "AFN"
  | "BHD"
  | "BGN"
  | "BOB"
  | "BWP"
  | "BND"
  | "BRL"
  | "BIF"
  | "HUF"
  | "VEF"
  | "KPW"
  | "VND"
  | "GMD"
  | "GHS"
  | "GNF"
  | "HKD"
  | "GEL"
  | "AED"
  | "EGP"
  | "ZMK"
  | "ILS"
  | "INR"
  | "IDR"
  | "JOD"
  | "IQD"
  | "IRR"
  | "YER"
  | "QAR"
  | "KES"
  | "KGS"
  | "COP"
  | "CDF"
  | "CRC"
  | "KWD"
  | "CUP"
  | "LAK"
  | "LVL"
  | "SLL"
  | "LBP"
  | "LYD"
  | "SZL"
  | "LTL"
  | "MUR"
  | "MRO"
  | "MKD"
  | "MWK"
  | "MGA"
  | "MYR"
  | "MAD"
  | "MXN"
  | "MZN"
  | "MDL"
  | "MNT"
  | "NPR"
  | "NGN"
  | "NIO"
  | "NZD"
  | "OMR"
  | "PKR"
  | "PYG"
  | "PEN"
  | "PLN"
  | "KHR"
  | "SAR"
  | "RON"
  | "SCR"
  | "SYP"
  | "SKK"
  | "SOS"
  | "SDG"
  | "SRD"
  | "TJS"
  | "THB"
  | "TWD"
  | "BDT"
  | "TZS"
  | "TND"
  | "TMM"
  | "UGX"
  | "UZS"
  | "UYU"
  | "PHP"
  | "DJF"
  | "XAF"
  | "XOF"
  | "HRK"
  | "CZK"
  | "CLP"
  | "LKR"
  | "EEK"
  | "ETB"
  | "RSD"
  | "ZAR"
  | "KRW"
  | "NAD"
  | "TL"
  | "UE";
type OffersGetOfferRecommendationsRequest = {
  readonly offerIds?: readonly OffersShopSku[] | null;
  readonly competitivenessFilter?: OffersPriceCompetitivenessType;
};
type OffersGetOfferRecommendationsResponse = {
  readonly status: OffersApiResponseStatusType;
  readonly result?: OffersOfferRecommendationsResultDTO;
};
type OffersOfferForRecommendationDTO = {
  readonly offerId?: OffersShopSku;
  readonly price?: OffersBasePriceDTO;
  readonly competitiveness?: OffersPriceCompetitivenessType;
  readonly shows?: number;
};
type OffersOfferRecommendationDTO = {
  readonly offer?: OffersOfferForRecommendationDTO;
  readonly recommendation?: OffersOfferRecommendationInfoDTO;
};
type OffersOfferRecommendationInfoDTO = {
  readonly offerId?: OffersShopSku;
  readonly competitivenessThresholds?: OffersPriceCompetitivenessThresholdsDTO;
};
type OffersOfferRecommendationsResultDTO = {
  readonly paging?: OffersPackagingForwardScrollingPagerDTO;
  readonly offerRecommendations: readonly OffersOfferRecommendationDTO[];
};
type OffersPackagingForwardScrollingPagerDTO = {
  readonly nextPageToken?: string;
};
type OffersPriceCompetitivenessThresholdsDTO = {
  readonly optimalPrice?: OffersBasePriceDTO;
  readonly averagePrice?: OffersBasePriceDTO;
};
type OffersPriceCompetitivenessType = "OPTIMAL" | "AVERAGE" | "LOW";
type OffersShopSku = string;

/**
 * Параметры метода «Рекомендации Маркета, касающиеся цен».
 *
 * Метод возвращает рекомендации нескольких типов.
 *
 * 1. Порог для привлекательной цены.
 * 2. Оценка привлекательности цен на витрине.
 *
 * Рекомендации показывают, какие цены нужно установить, чтобы привлечь покупателя.
 *
 * В запросе можно использовать фильтры. Результаты возвращаются постранично.
 *
 * POST /v2/businesses/{businessId}/offers/recommendations
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetOfferRecommendationsInput = {
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
  readonly body: OffersGetOfferRecommendationsRequest;
};
/**
 * Успешный ответ метода «Рекомендации Маркета, касающиеся цен».
 *
 * 200: Список товаров с рекомендациями.
 */
export type GetOfferRecommendationsResponse =
  OffersGetOfferRecommendationsResponse;
