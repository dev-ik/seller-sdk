// Generated public types for this Yandex Market endpoint.
type PriceQuarantineApiResponseStatusType = "OK" | "ERROR";
type PriceQuarantineBasePriceDTO = {
  readonly value: number;
  readonly currencyId: PriceQuarantineCurrencyType;
};
type PriceQuarantineCurrencyType =
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
type PriceQuarantineGetQuarantineOffersRequest = {
  readonly offerIds?: readonly PriceQuarantineShopSku[] | null;
  readonly cardStatuses?: readonly PriceQuarantineOfferCardStatusType[] | null;
  readonly categoryIds?: readonly number[] | null;
  readonly vendorNames?: readonly string[] | null;
  readonly tags?: readonly string[] | null;
};
type PriceQuarantineGetQuarantineOffersResponse = {
  readonly status: PriceQuarantineApiResponseStatusType;
  readonly result?: PriceQuarantineGetQuarantineOffersResultDTO;
};
type PriceQuarantineGetQuarantineOffersResultDTO = {
  readonly paging?: PriceQuarantinePackagingForwardScrollingPagerDTO;
  readonly offers: readonly PriceQuarantineQuarantineOfferDTO[];
};
type PriceQuarantineOfferCardStatusType =
  | "HAS_CARD_CAN_NOT_UPDATE"
  | "HAS_CARD_CAN_UPDATE"
  | "HAS_CARD_CAN_UPDATE_ERRORS"
  | "HAS_CARD_CAN_UPDATE_PROCESSING"
  | "NO_CARD_NEED_CONTENT"
  | "NO_CARD_MARKET_WILL_CREATE"
  | "NO_CARD_ERRORS"
  | "NO_CARD_PROCESSING"
  | "NO_CARD_ADD_TO_CAMPAIGN";
type PriceQuarantinePackagingForwardScrollingPagerDTO = {
  readonly nextPageToken?: string;
};
type PriceQuarantinePriceQuarantineVerdictDTO = {
  readonly type?: PriceQuarantinePriceQuarantineVerdictType;
  readonly params: readonly PriceQuarantinePriceQuarantineVerdictParameterDTO[];
};
type PriceQuarantinePriceQuarantineVerdictParamNameType =
  | "CURRENT_PRICE"
  | "LAST_VALID_PRICE"
  | "MIN_PRICE"
  | "CURRENCY";
type PriceQuarantinePriceQuarantineVerdictParameterDTO = {
  readonly name: PriceQuarantinePriceQuarantineVerdictParamNameType;
  readonly value: string;
};
type PriceQuarantinePriceQuarantineVerdictType =
  | "PRICE_CHANGE"
  | "LOW_PRICE"
  | "LOW_PRICE_PROMO";
type PriceQuarantineQuarantineOfferDTO = {
  readonly offerId?: PriceQuarantineShopSku;
  readonly currentPrice?: PriceQuarantineBasePriceDTO;
  readonly lastValidPrice?: PriceQuarantineBasePriceDTO;
  readonly verdicts?:
    | readonly PriceQuarantinePriceQuarantineVerdictDTO[]
    | null;
};
type PriceQuarantineShopSku = string;

/**
 * Параметры метода «Список товаров, находящихся в карантине по цене в магазине».
 *
 * Возвращает список товаров, которые находятся в карантине по цене, установленной в заданном магазине.
 *
 * Проверьте цену каждого из товаров, который попал в карантин. Если ошибки нет и цена правильная, подтвердите ее с помощью запроса [POST v2/campaigns/{campaignId}/price-quarantine/confirm](../../reference/price-quarantine/confirmCampaignPrices.md). Если цена в самом деле ошибочная, установите верную с помощью запроса [POST v2/campaigns/{campaignId}/offer-prices/updates](../../reference/prices/updatePrices.md).
 *
 * Что такое карантин?
 *
 * Товар попадает в карантин, если его цена меняется слишком резко или слишком сильно отличается от рыночной. [Подробнее](https://yandex.ru/support/marketplace/assortment/operations/prices.html#quarantine)
 *
 * В запросе можно использовать фильтры.
 *
 * Результаты возвращаются постранично.
 *
 * POST /v2/campaigns/{campaignId}/price-quarantine
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetCampaignQuarantineOffersInput = {
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
  readonly body: PriceQuarantineGetQuarantineOffersRequest;
};
/**
 * Успешный ответ метода «Список товаров, находящихся в карантине по цене в магазине».
 *
 * 200: Список товаров в карантине.
 */
export type GetCampaignQuarantineOffersResponse =
  PriceQuarantineGetQuarantineOffersResponse;
