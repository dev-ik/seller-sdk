// Generated public types for this Yandex Market endpoint.
type PricesApiResponseStatusType = "OK" | "ERROR";
type PricesCurrencyType =
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
type PricesDiscountBase = number;
type PricesEmptyApiResponse = { readonly status: PricesApiResponseStatusType };
type PricesShopSku = string;
type PricesUpdateBusinessOfferPriceDTO = {
  readonly offerId: PricesShopSku;
  readonly price: PricesUpdateBusinessPricesDTO;
};
type PricesUpdateBusinessPricesDTO = {
  readonly value: number;
  readonly currencyId: PricesCurrencyType;
  readonly discountBase?: PricesDiscountBase;
  readonly minimumForBestseller?: number;
};
type PricesUpdateBusinessPricesRequest = {
  readonly offers: readonly PricesUpdateBusinessOfferPriceDTO[];
};

/**
 * Параметры метода «Установка цен на товары для всех магазинов».
 *
 * Устанавливает цены, которые действуют во всех магазинах. Чтобы получить рекомендации Маркета, касающиеся цен, выполните запрос [POST v2/businesses/{businessId}/offers/recommendations](../../reference/offers/getOfferRecommendations.md).
 *
 * При необходимости передавайте НДС с помощью параметра `vat` в запросе [POST v2/campaigns/{campaignId}/offers/update](../../reference/offers/updateCampaignOffers.md).
 *
 * Данные в каталоге обновляются не мгновенно
 *
 * Это занимает до нескольких минут.
 *
 * POST /v2/businesses/{businessId}/offer-prices/updates
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type UpdateBusinessPricesInput = {
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
   * Тело запроса.
   */;
  readonly body: PricesUpdateBusinessPricesRequest;
};
/**
 * Успешный ответ метода «Установка цен на товары для всех магазинов».
 *
 * 200: Маркет принял информацию о новых ценах.
 */
export type UpdateBusinessPricesResponse = PricesEmptyApiResponse;
