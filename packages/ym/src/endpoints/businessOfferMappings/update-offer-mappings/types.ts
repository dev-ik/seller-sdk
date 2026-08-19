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
type BusinessOfferMappingsBasePriceDTO = {
  readonly value: number;
  readonly currencyId: BusinessOfferMappingsCurrencyType;
};
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
type BusinessOfferMappingsDeleteOfferParameterType =
  | "ADDITIONAL_EXPENSES"
  | "ADULT"
  | "AGE"
  | "BARCODES"
  | "BOX_COUNT"
  | "CERTIFICATES"
  | "COMMODITY_CODES"
  | "CONDITION"
  | "CUSTOMS_COMMODITY_CODE"
  | "DESCRIPTION"
  | "DOWNLOADABLE"
  | "GUARANTEE_PERIOD"
  | "LIFE_TIME"
  | "MANUALS"
  | "MANUFACTURER_COUNTRIES"
  | "PARAMETERS"
  | "PICTURES"
  | "PURCHASE_PRICE"
  | "SHELF_LIFE"
  | "TAGS"
  | "TYPE"
  | "VENDOR_CODE"
  | "VIDEOS";
type BusinessOfferMappingsDiscountBase = number;
type BusinessOfferMappingsMarketSku = number;
type BusinessOfferMappingsOfferBarcodes = readonly string[] | null;
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
type BusinessOfferMappingsOfferDescription = string;
type BusinessOfferMappingsOfferManualDTO = {
  readonly url: BusinessOfferMappingsUrl;
  readonly title?: string;
};
type BusinessOfferMappingsOfferMappingErrorDTO = {
  readonly type: BusinessOfferMappingsOfferMappingErrorType;
  readonly parameterId?: number;
  readonly message: string;
};
type BusinessOfferMappingsOfferMappingErrorType =
  | "UNKNOWN_CATEGORY"
  | "INVALID_CATEGORY"
  | "EMPTY_MARKET_CATEGORY"
  | "UNKNOWN_PARAMETER"
  | "UNEXPECTED_BOOLEAN_VALUE"
  | "NUMBER_FORMAT"
  | "INVALID_UNIT_ID"
  | "INVALID_GROUP_ID_LENGTH"
  | "INVALID_GROUP_ID_CHARACTERS"
  | "INVALID_PICKER_URL"
  | "LOCKED_DIMENSIONS"
  | "INVALID_COMMODITY_CODE";
type BusinessOfferMappingsOfferName = string;
type BusinessOfferMappingsOfferParamDTO = {
  readonly name: string;
  readonly value: string;
};
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
type BusinessOfferMappingsParameterValueDTO = {
  readonly parameterId: number;
  readonly unitId?: number;
  readonly valueId?: number;
  readonly value?: string;
};
type BusinessOfferMappingsPartnerMarketCategoryId = number;
type BusinessOfferMappingsPriceWithDiscountDTO = {
  readonly value: number;
  readonly currencyId: BusinessOfferMappingsCurrencyType;
  readonly discountBase?: BusinessOfferMappingsDiscountBase;
};
type BusinessOfferMappingsShopSku = string;
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
type BusinessOfferMappingsUpdateMappingDTO = {
  readonly marketSku?: BusinessOfferMappingsMarketSku;
};
type BusinessOfferMappingsUpdateOfferDTO = {
  readonly offerId: BusinessOfferMappingsShopSku;
  readonly name?: BusinessOfferMappingsOfferName;
  readonly marketCategoryId?: BusinessOfferMappingsPartnerMarketCategoryId;
  readonly category?: BusinessOfferMappingsOfferCategory;
  readonly pictures?: readonly BusinessOfferMappingsUrl[] | null;
  readonly videos?: readonly BusinessOfferMappingsUrl[] | null;
  readonly manuals?: readonly BusinessOfferMappingsOfferManualDTO[] | null;
  readonly vendor?: BusinessOfferMappingsOfferVendor;
  readonly barcodes?: BusinessOfferMappingsOfferBarcodes;
  readonly description?: BusinessOfferMappingsOfferDescription;
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
  readonly parameterValues?:
    | readonly BusinessOfferMappingsParameterValueDTO[]
    | null;
  readonly basicPrice?: BusinessOfferMappingsPriceWithDiscountDTO;
  readonly purchasePrice?: BusinessOfferMappingsBasePriceDTO;
  readonly additionalExpenses?: BusinessOfferMappingsBasePriceDTO;
  readonly firstVideoAsCover?: boolean;
  readonly deleteParameters?:
    | readonly BusinessOfferMappingsDeleteOfferParameterType[]
    | null;
};
type BusinessOfferMappingsUpdateOfferMappingDTO = {
  readonly offer: BusinessOfferMappingsUpdateOfferDTO;
  readonly mapping?: BusinessOfferMappingsUpdateMappingDTO;
};
type BusinessOfferMappingsUpdateOfferMappingResultDTO = {
  readonly offerId: BusinessOfferMappingsShopSku;
  readonly errors?: readonly BusinessOfferMappingsOfferMappingErrorDTO[] | null;
  readonly warnings?:
    | readonly BusinessOfferMappingsOfferMappingErrorDTO[]
    | null;
};
type BusinessOfferMappingsUpdateOfferMappingsRequest = {
  readonly offerMappings: readonly BusinessOfferMappingsUpdateOfferMappingDTO[];
  readonly onlyPartnerMediaContent?: boolean;
};
type BusinessOfferMappingsUpdateOfferMappingsResponse = {
  readonly status: BusinessOfferMappingsApiResponseStatusType;
  readonly results?:
    | readonly BusinessOfferMappingsUpdateOfferMappingResultDTO[]
    | null;
};
type BusinessOfferMappingsUrl = string;

/**
 * Параметры метода «Добавление товаров в каталог и изменение информации о них».
 *
 * Добавляет товары в каталог и передает:
 *
 * * их [листовые категории](*list-categories) на Маркете и категорийные характеристики;
 * * основные характеристики;
 * * цены на товары в кабинете.
 *
 * Также объединяет товары на карточке, редактирует и удаляет информацию об уже добавленных товарах, в том числе цены в кабинете и категории товаров.
 *
 * Список категорий Маркета можно получить с помощью запроса [POST v2/categories/tree](../../reference/categories/getCategoriesTree.md), а характеристики товаров по категориям с помощью [POST v2/category/{categoryId}/parameters](../../reference/content/getCategoryContentParameters.md).
 *
 * Добавить новый товар
 *
 * Передайте его с новым идентификатором, который раньше никогда не использовался в каталоге.
 *
 * Обязательно укажите параметры: `offerId`, `name`, `marketCategoryId`, `pictures`, `vendor`, `description`.
 *
 * Старайтесь сразу передать как можно больше информации — она потребуется Маркету для подбора подходящей карточки или создания новой.
 *
 * Если известно, какой карточке на Маркете соответствует товар, можно сразу указать идентификатор этой карточки (SKU на Маркете) в поле `marketSKU`.
 *
 * **Для продавцов Market Yandex Go:**
 *
 * Когда вы добавляете товары в каталог, указывайте значения параметров `name` и `description` на русском языке. Чтобы на витрине они отображались и на другом языке, еще раз выполните запрос `POST v2/businesses/{businessId}/offer-mappings/update`, где укажите:
 *
 * * язык в параметре `language`;
 * * значения параметров `name` и `description` на указанном языке.
 *
 * Повторно передавать остальные характеристики товара не нужно.
 *
 * Изменить информацию о товаре
 *
 * Передайте новые данные, указав в `offerId` SKU товара в вашей системе.
 *
 * Поля, в которых ничего не меняется, можно не передавать.
 *
 * Удалить переданные ранее параметры товара
 *
 * В `deleteParameters` укажите значения параметров, которые хотите удалить. Можно передать сразу несколько значений.
 *
 * Для параметров с типом `string` также можно передать пустое значение.
 *
 * Параметр `offerId` (SKU товара в вашей системе) должен быть **уникальным** для всех товаров, которые вы передаете.
 *
 * Правила использования SKU
 *
 * * У каждого товара SKU должен быть свой.
 *
 * * Уже заданный SKU нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.
 *
 * SKU товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).
 *
 * Данные в каталоге обновляются не мгновенно
 *
 * Это занимает до нескольких минут.
 *
 * POST /v2/businesses/{businessId}/offer-mappings/update
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type UpdateOfferMappingsInput = {
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
  readonly body: BusinessOfferMappingsUpdateOfferMappingsRequest;
};
/**
 * Успешный ответ метода «Добавление товаров в каталог и изменение информации о них».
 *
 * 200: Запрос выполнен корректно, данные обработаны.
 *
 * Ответ `200` сам по себе не значит, что переданные значения корректны
 *
 * Обязательно посмотрите детали ответа: `status`, а также перечень ошибок (`results.errors`) и замечаний (`results.warnings`), если они есть.
 *
 * - Если хотя бы по одному товару вернулась ошибка (`results.errors`), поле `status` = `ERROR`. Изменения по всем переданным товарам не будут применены.
 * - Если ошибок нет, но хотя бы по одному товару вернулось замечание (`results.warnings`), поле `status` = `OK`, и изменения будут применены.
 */
export type UpdateOfferMappingsResponse =
  BusinessOfferMappingsUpdateOfferMappingsResponse;
