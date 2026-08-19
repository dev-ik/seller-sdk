// Generated public types for this Yandex Market endpoint.
type OffersApiResponseStatusType = "OK" | "ERROR";
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
type OffersDiscountBase = number;
type OffersGetCampaignOfferDTO = {
  readonly offerId: OffersShopSku;
  readonly available?: boolean;
  readonly basicPrice?: OffersGetPriceWithDiscountDTO;
  readonly campaignPrice?: OffersGetPriceWithVatDTO;
  readonly status?: OffersOfferCampaignStatusType;
  readonly errors?: readonly OffersOfferErrorDTO[] | null;
  readonly warnings?: readonly OffersOfferErrorDTO[] | null;
};
type OffersGetCampaignOffersRequest = {
  readonly offerIds?: readonly OffersShopSku[] | null;
  readonly statuses?: readonly OffersOfferCampaignStatusType[] | null;
  readonly categoryIds?: readonly number[] | null;
  readonly vendorNames?: readonly string[] | null;
  readonly tags?: readonly string[] | null;
};
type OffersGetCampaignOffersResponse = {
  readonly status: OffersApiResponseStatusType;
  readonly result?: OffersGetCampaignOffersResultDTO;
};
type OffersGetCampaignOffersResultDTO = {
  readonly paging?: OffersPackagingForwardScrollingPagerDTO;
  readonly offers: readonly OffersGetCampaignOfferDTO[];
};
type OffersGetPriceWithDiscountDTO = {
  readonly value: number;
  readonly currencyId: OffersCurrencyType;
  readonly discountBase?: OffersDiscountBase;
  readonly updatedAt: string;
};
type OffersGetPriceWithVatDTO = {
  readonly value?: number;
  readonly discountBase?: OffersDiscountBase;
  readonly currencyId?: OffersCurrencyType;
  readonly vat?: OffersVatType;
  readonly updatedAt: string;
};
type OffersOfferCampaignStatusType =
  | "PUBLISHED"
  | "CHECKING"
  | "DISABLED_BY_PARTNER"
  | "DISABLED_AUTOMATICALLY"
  | "REJECTED_BY_MARKET"
  | "CREATING_CARD"
  | "NO_CARD"
  | "NO_STOCKS"
  | "ARCHIVED"
  | "READY_FOR_PUBLICATION";
type OffersOfferErrorDTO = {
  readonly message?: string;
  readonly comment?: string;
};
type OffersPackagingForwardScrollingPagerDTO = {
  readonly nextPageToken?: string;
};
type OffersShopSku = string;
type OffersVatType = number;

/**
 * Параметры метода «Информация о товарах, которые размещены в заданном магазине».
 *
 * Возвращает список товаров, которые размещены в заданном магазине. Для каждого товара указываются параметры размещения.
 *
 * POST /v2/campaigns/{campaignId}/offers
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetCampaignOffersInput = {
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
  readonly body: OffersGetCampaignOffersRequest;
};
/**
 * Успешный ответ метода «Информация о товарах, которые размещены в заданном магазине».
 *
 * 200: Список товаров, размещенных в заданном магазине.
 */
export type GetCampaignOffersResponse = OffersGetCampaignOffersResponse;
