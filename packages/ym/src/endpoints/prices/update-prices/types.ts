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
type PricesOfferPriceDTO = {
  readonly offerId?: PricesShopSku;
  readonly price?: PricesPriceDTO;
};
type PricesPriceDTO = {
  readonly value?: number;
  readonly discountBase?: PricesDiscountBase;
  readonly currencyId?: PricesCurrencyType;
  readonly vat?: PricesVatType;
};
type PricesShopSku = string;
type PricesUpdatePricesRequest = {
  readonly offers: readonly PricesOfferPriceDTO[];
};
type PricesVatType = number;

/**
 * Параметры метода «Установка цен на товары в конкретном магазине».
 *
 * Устанавливает цены на товары в магазине. Чтобы получить рекомендации Маркета, касающиеся цен, выполните запрос [POST v2/businesses/{businessId}/offers/recommendations](../../reference/offers/getOfferRecommendations.md).
 *
 * Метод только для отдельных магазинов
 *
 * Вам доступен этот метод, если в кабинете продавца на Маркете есть возможность установить уникальные цены в отдельных магазинах. Как это проверить — в методе [POST v2/businesses/{businessId}/settings](../../reference/businesses/getBusinessSettings.md) в параметре `onlyDefaultPrice` возвращается значение `false`.
 *
 * В ином случае используйте метод управления ценами, которые действуют во всех магазинах, — [POST v2/businesses/{businessId}/offer-prices/updates](../../reference/prices/updateBusinessPrices.md).
 *
 * Данные в каталоге обновляются не мгновенно
 *
 * Это занимает до нескольких минут.
 *
 * POST /v2/campaigns/{campaignId}/offer-prices/updates
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type UpdatePricesInput = {
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
  readonly body: PricesUpdatePricesRequest;
};
/**
 * Успешный ответ метода «Установка цен на товары в конкретном магазине».
 *
 * 200: Маркет принял информацию о новых ценах.
 */
export type UpdatePricesResponse = PricesEmptyApiResponse;
