// Generated public types for this Yandex Market endpoint.
type BusinessOfferMappingsAgeDTO = {
  readonly value: number;
  readonly ageUnit: BusinessOfferMappingsAgeUnitType;
};
type BusinessOfferMappingsAgeUnitType = "YEAR" | "MONTH";
type BusinessOfferMappingsApiResponseStatusType = "OK" | "ERROR";
type BusinessOfferMappingsBaseOfferAdult = boolean;
type BusinessOfferMappingsBaseOfferBoxCount = number;
type BusinessOfferMappingsBaseOfferCommodityCodes =
  | readonly BusinessOfferMappingsCommodityCodeDTO[]
  | null;
type BusinessOfferMappingsBaseOfferCustomsCommodityCode = string;
type BusinessOfferMappingsBaseOfferDownloadable = boolean;
type BusinessOfferMappingsBaseOfferManufacturerCountries =
  | readonly string[]
  | null;
type BusinessOfferMappingsBaseOfferParams =
  | readonly BusinessOfferMappingsOfferParamDTO[]
  | null;
type BusinessOfferMappingsBaseOfferTags = readonly string[] | null;
type BusinessOfferMappingsCampaignId = number;
type BusinessOfferMappingsCommodityCodeDTO = {
  readonly code: string;
  readonly type: BusinessOfferMappingsCommodityCodeType;
};
type BusinessOfferMappingsCommodityCodeType =
  | "CUSTOMS_COMMODITY_CODE"
  | "IKPU_CODE";
type BusinessOfferMappingsCurrencyType =
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
type BusinessOfferMappingsDiscountBase = number;
type BusinessOfferMappingsGetMappingDTO = {
  readonly marketSku?: BusinessOfferMappingsMarketSku;
  readonly marketSkuName?: string;
  readonly marketModelName?: string;
  readonly marketCategoryId?: number;
  readonly marketCategoryName?: string;
};
type BusinessOfferMappingsGetOfferDTO = {
  readonly offerId: BusinessOfferMappingsShopSku;
  readonly name?: string;
  readonly marketCategoryId?: BusinessOfferMappingsPartnerMarketCategoryId;
  readonly category?: BusinessOfferMappingsOfferCategory;
  readonly pictures?: readonly BusinessOfferMappingsUrl[] | null;
  readonly videos?: readonly BusinessOfferMappingsUrl[] | null;
  readonly manuals?: readonly BusinessOfferMappingsOfferManualDTO[] | null;
  readonly vendor?: BusinessOfferMappingsOfferVendor;
  readonly barcodes?: BusinessOfferMappingsOfferBarcodes;
  readonly description?: string;
  readonly manufacturerCountries?: BusinessOfferMappingsBaseOfferManufacturerCountries;
  readonly weightDimensions?: BusinessOfferMappingsOfferWeightDimensionsDTO;
  readonly vendorCode?: BusinessOfferMappingsOfferVendorCode;
  readonly tags?: BusinessOfferMappingsBaseOfferTags;
  readonly shelfLife?: BusinessOfferMappingsTimePeriodDTO;
  readonly lifeTime?: BusinessOfferMappingsTimePeriodDTO;
  readonly guaranteePeriod?: BusinessOfferMappingsTimePeriodDTO;
  readonly customsCommodityCode?: BusinessOfferMappingsBaseOfferCustomsCommodityCode;
  readonly commodityCodes?: BusinessOfferMappingsBaseOfferCommodityCodes;
  readonly certificates?: readonly string[] | null;
  readonly boxCount?: BusinessOfferMappingsBaseOfferBoxCount;
  readonly condition?: BusinessOfferMappingsOfferConditionDTO;
  readonly type?: BusinessOfferMappingsOfferType;
  readonly downloadable?: BusinessOfferMappingsBaseOfferDownloadable;
  readonly adult?: BusinessOfferMappingsBaseOfferAdult;
  readonly age?: BusinessOfferMappingsAgeDTO;
  readonly params?: BusinessOfferMappingsBaseOfferParams;
  readonly basicPrice?: BusinessOfferMappingsGetPriceWithDiscountDTO;
  readonly purchasePrice?: BusinessOfferMappingsGetPriceDTO;
  readonly additionalExpenses?: BusinessOfferMappingsGetPriceDTO;
  readonly cardStatus?: BusinessOfferMappingsOfferCardStatusType;
  readonly campaigns?:
    | readonly BusinessOfferMappingsOfferCampaignStatusDTO[]
    | null;
  readonly sellingPrograms?:
    | readonly BusinessOfferMappingsOfferSellingProgramDTO[]
    | null;
  readonly mediaFiles?: BusinessOfferMappingsOfferMediaFilesDTO;
  readonly archived?: boolean;
  readonly groupId?: string;
};
type BusinessOfferMappingsGetOfferMappingDTO = {
  readonly offer?: BusinessOfferMappingsGetOfferDTO;
  readonly mapping?: BusinessOfferMappingsGetMappingDTO;
  readonly showcaseUrls?: readonly BusinessOfferMappingsShowcaseUrlDTO[] | null;
};
type BusinessOfferMappingsGetOfferMappingsRequest = {
  readonly offerIds?: readonly BusinessOfferMappingsShopSku[] | null;
  readonly cardStatuses?:
    | readonly BusinessOfferMappingsOfferCardStatusType[]
    | null;
  readonly categoryIds?: readonly number[] | null;
  readonly vendorNames?: readonly string[] | null;
  readonly tags?: readonly string[] | null;
  readonly archived?: boolean;
};
type BusinessOfferMappingsGetOfferMappingsResponse = {
  readonly status: BusinessOfferMappingsApiResponseStatusType;
  readonly result?: BusinessOfferMappingsGetOfferMappingsResultDTO;
};
type BusinessOfferMappingsGetOfferMappingsResultDTO = {
  readonly paging?: BusinessOfferMappingsPackagingForwardScrollingPagerDTO;
  readonly offerMappings: readonly BusinessOfferMappingsGetOfferMappingDTO[];
};
type BusinessOfferMappingsGetPriceDTO = {
  readonly value: number;
  readonly currencyId: BusinessOfferMappingsCurrencyType;
  readonly updatedAt: string;
};
type BusinessOfferMappingsGetPriceWithDiscountDTO = {
  readonly value: number;
  readonly currencyId: BusinessOfferMappingsCurrencyType;
  readonly discountBase?: BusinessOfferMappingsDiscountBase;
  readonly updatedAt: string;
};
type BusinessOfferMappingsMarketSku = number;
type BusinessOfferMappingsMediaFileUploadStateType =
  | "UPLOADING"
  | "UPLOADED"
  | "FAILED";
type BusinessOfferMappingsOfferBarcodes = readonly string[] | null;
type BusinessOfferMappingsOfferCampaignStatusDTO = {
  readonly campaignId: BusinessOfferMappingsCampaignId;
  readonly status: BusinessOfferMappingsOfferCampaignStatusType;
};
type BusinessOfferMappingsOfferCampaignStatusType =
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
type BusinessOfferMappingsOfferCardStatusType =
  | "HAS_CARD_CAN_NOT_UPDATE"
  | "HAS_CARD_CAN_UPDATE"
  | "HAS_CARD_CAN_UPDATE_ERRORS"
  | "HAS_CARD_CAN_UPDATE_PROCESSING"
  | "NO_CARD_NEED_CONTENT"
  | "NO_CARD_MARKET_WILL_CREATE"
  | "NO_CARD_ERRORS"
  | "NO_CARD_PROCESSING"
  | "NO_CARD_ADD_TO_CAMPAIGN";
type BusinessOfferMappingsOfferCategory = string;
type BusinessOfferMappingsOfferConditionDTO = {
  readonly type?: BusinessOfferMappingsOfferConditionType;
  readonly quality?: BusinessOfferMappingsOfferConditionQualityType;
  readonly reason?: string;
};
type BusinessOfferMappingsOfferConditionQualityType =
  | "PERFECT"
  | "EXCELLENT"
  | "GOOD"
  | "NOT_SPECIFIED";
type BusinessOfferMappingsOfferConditionType =
  | "PREOWNED"
  | "SHOWCASESAMPLE"
  | "REFURBISHED"
  | "REDUCTION"
  | "RENOVATED"
  | "NOT_SPECIFIED";
type BusinessOfferMappingsOfferManualDTO = {
  readonly url: BusinessOfferMappingsUrl;
  readonly title?: string;
};
type BusinessOfferMappingsOfferMediaFileDTO = {
  readonly url?: BusinessOfferMappingsUrl;
  readonly title?: string;
  readonly uploadState?: BusinessOfferMappingsMediaFileUploadStateType;
};
type BusinessOfferMappingsOfferMediaFilesDTO = {
  readonly firstVideoAsCover?: boolean;
  readonly videos?: readonly BusinessOfferMappingsOfferMediaFileDTO[] | null;
  readonly pictures?: readonly BusinessOfferMappingsOfferMediaFileDTO[] | null;
  readonly manuals?: readonly BusinessOfferMappingsOfferMediaFileDTO[] | null;
};
type BusinessOfferMappingsOfferParamDTO = {
  readonly name: string;
  readonly value: string;
};
type BusinessOfferMappingsOfferSellingProgramDTO = {
  readonly sellingProgram: BusinessOfferMappingsSellingProgramType;
  readonly status: BusinessOfferMappingsOfferSellingProgramStatusType;
};
type BusinessOfferMappingsOfferSellingProgramStatusType = "FINE" | "REJECT";
type BusinessOfferMappingsOfferType =
  | "DEFAULT"
  | "MEDICINE"
  | "BOOK"
  | "AUDIOBOOK"
  | "ARTIST_TITLE"
  | "ON_DEMAND"
  | "ALCOHOL";
type BusinessOfferMappingsOfferVendor = string;
type BusinessOfferMappingsOfferVendorCode = string;
type BusinessOfferMappingsOfferWeightDimensionsDTO = {
  readonly length: number;
  readonly width: number;
  readonly height: number;
  readonly weight: number;
};
type BusinessOfferMappingsPackagingForwardScrollingPagerDTO = {
  readonly nextPageToken?: string;
};
type BusinessOfferMappingsPartnerMarketCategoryId = number;
type BusinessOfferMappingsSellingProgramType =
  | "FBY"
  | "FBS"
  | "DBS"
  | "EXPRESS"
  | "LAAS";
type BusinessOfferMappingsShopSku = string;
type BusinessOfferMappingsShowcaseType = "B2B" | "B2C";
type BusinessOfferMappingsShowcaseUrlDTO = {
  readonly showcaseType: BusinessOfferMappingsShowcaseType;
  readonly showcaseUrl: string;
};
type BusinessOfferMappingsTimePeriodDTO = {
  readonly timePeriod: number;
  readonly timeUnit: BusinessOfferMappingsTimeUnitType;
  readonly comment?: string;
};
type BusinessOfferMappingsTimeUnitType =
  | "HOUR"
  | "DAY"
  | "WEEK"
  | "MONTH"
  | "YEAR";
type BusinessOfferMappingsUrl = string;

/**
 * Параметры метода «Информация о товарах в каталоге».
 *
 * Возвращает список товаров в каталоге, их категории на Маркете и характеристики каждого товара.
 *
 * Можно использовать тремя способами:
 * * задать список интересующих SKU;
 * * задать фильтр — в этом случае результаты возвращаются постранично;
 * * не передавать тело запроса, чтобы получить список всех товаров в каталоге.
 *
 * Чтобы получить категорийные характеристики товаров, воспользуйтесь методом [POST v2/businesses/{businessId}/offer-cards](../../reference/content/getOfferCardsContentStatus.md).
 *
 * POST /v2/businesses/{businessId}/offer-mappings
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetOfferMappingsInput = {
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
     * Значение по умолчанию: `50`.
     *
     * Минимальное значение: 1.
     *
     * Максимальное значение: 100.
     */
    readonly limit?: number;

    /**
     * Язык, на котором принимаются и возвращаются значения в параметрах `name` и `description`.
     *
     * Значение по умолчанию: `RU`.
     *
     * Язык:
     *
     * * `RU` — русский.
     * * `UZ` — узбекский.
     */
    readonly language?: "RU" | "UZ";
  } /**
   * Тело запроса.
   */;
  readonly body?: BusinessOfferMappingsGetOfferMappingsRequest;
};
/**
 * Успешный ответ метода «Информация о товарах в каталоге».
 *
 * 200: Информация о товарах в каталоге.
 */
export type GetOfferMappingsResponse =
  BusinessOfferMappingsGetOfferMappingsResponse;
