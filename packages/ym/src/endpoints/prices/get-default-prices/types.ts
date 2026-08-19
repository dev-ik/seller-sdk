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
type PricesGetDefaultPricesRequest = {
  readonly offerIds?: readonly PricesShopSku[] | null;
  readonly archived?: boolean;
};
type PricesGetDefaultPricesResponse = {
  readonly status: PricesApiResponseStatusType;
  readonly result?: PricesOfferDefaultPriceListResponseDTO;
};
type PricesOfferDefaultPriceDTO = {
  readonly minimumForBestseller?: number;
  readonly excludedFromBestsellers?: boolean;
  readonly value?: number;
  readonly currencyId?: PricesCurrencyType;
  readonly discountBase?: PricesDiscountBase;
  readonly updatedAt?: string;
};
type PricesOfferDefaultPriceListResponseDTO = {
  readonly offers: readonly PricesOfferDefaultPriceResponseDTO[];
  readonly paging?: PricesPackagingForwardScrollingPagerDTO;
};
type PricesOfferDefaultPriceResponseDTO = {
  readonly offerId: PricesShopSku;
  readonly price?: PricesOfferDefaultPriceDTO;
};
type PricesPackagingForwardScrollingPagerDTO = {
  readonly nextPageToken?: string;
};
type PricesShopSku = string;

/**
 * Параметры метода «Просмотр цен на указанные товары во всех магазинах».
 *
 * Возвращает список цен, которые вы установили для всех магазинов любым способом. Например, через API или с помощью Excel-шаблона.
 *
 * О способах установки цен читайте [в Справке Маркета для продавцов](https://yandex.ru/support/marketplace/assortment/operations/prices.html).
 *
 * POST /v2/businesses/{businessId}/offer-prices
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetDefaultPricesInput = {
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
  readonly body?: PricesGetDefaultPricesRequest;
};
/**
 * Успешный ответ метода «Просмотр цен на указанные товары во всех магазинах».
 *
 * 200: Список всех товаров с установленными ценами.
 */
export type GetDefaultPricesResponse = PricesGetDefaultPricesResponse;
