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
type PricesGetPricesResponse = {
  readonly status: PricesApiResponseStatusType;
  readonly result?: PricesOfferPriceListResponseDTO;
};
type PricesMarketSku = number;
type PricesOfferPriceListResponseDTO = {
  readonly offers: readonly PricesOfferPriceResponseDTO[];
  readonly paging?: PricesPackagingForwardScrollingPagerDTO;
  readonly total?: number;
};
type PricesOfferPriceResponseDTO = {
  readonly id?: string;
  readonly price?: PricesPriceDTO;
  readonly marketSku?: PricesMarketSku;
  readonly updatedAt?: string;
};
type PricesPackagingForwardScrollingPagerDTO = {
  readonly nextPageToken?: string;
};
type PricesPriceDTO = {
  readonly value?: number;
  readonly discountBase?: PricesDiscountBase;
  readonly currencyId?: PricesCurrencyType;
  readonly vat?: PricesVatType;
};
type PricesVatType = number;

/**
 * Параметры метода «Список цен».
 *
 * Возвращает список цен, установленных вами на товары любым способом: например, через API или в файле с каталогом.
 *
 * Способы установки цен описаны [в Справке Маркета для продавцов](https://yandex.ru/support/marketplace/assortment/operations/prices.html).
 *
 * GET /v2/campaigns/{campaignId}/offer-prices
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetPricesInput = {
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

    /**
     * Фильтр по нахождению в архиве.
     *
     * Значение по умолчанию: `false`.
     */
    readonly archived?: boolean;
  };
};
/**
 * Успешный ответ метода «Список цен».
 *
 * 200: Список всех товаров с установленными ценами.
 */
export type GetPricesResponse = PricesGetPricesResponse;
