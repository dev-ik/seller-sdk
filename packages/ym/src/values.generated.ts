/**
 * Сгенерировано из закрытых строковых enum/union-контрактов Yandex Market.
 * После обновления локального OpenAPI snapshot выполните `pnpm update:ym`.
 */
export const YmValues = {
  /**
   * Доступы к методам:
   *
   * * `ALL_METHODS` — полное управление кабинетом.
   * * `ALL_METHODS_READ_ONLY` — просмотр всей информации в кабинете.
   * * `INVENTORY_AND_ORDER_PROCESSING` — обработка заказов и учет товаров.
   * * `INVENTORY_AND_ORDER_PROCESSING_READ_ONLY` — просмотр информации о заказах.
   * * `PRICING` — управление ценами.
   * * `PRICING_READ_ONLY` — просмотр цен.
   * * `OFFERS_AND_CARDS_MANAGEMENT` — управление товарами и карточками.
   * * `OFFERS_AND_CARDS_MANAGEMENT_READ_ONLY` — просмотр товаров и карточек.
   * * `PROMOTION` — продвижение товаров.
   * * `PROMOTION_READ_ONLY` — просмотр информации о продвижении товаров.
   * * `FINANCE_AND_ACCOUNTING` — просмотр финансовой информации и отчётности.
   * * `COMMUNICATION` — общение с покупателями.
   * * `SETTINGS_MANAGEMENT` — настройка магазинов.
   * * `SUPPLIES_MANAGEMENT_READ_ONLY` — получение информации по заявкам на поставку, вывоз и утилизацию (FBY, LaaS).
   */
  AuthApiKeyScopeType: {
    /**
     * полное управление кабинетом
     */
    AllMethods: "ALL_METHODS",
    /**
     * просмотр всей информации в кабинете
     */
    AllMethodsReadOnly: "ALL_METHODS_READ_ONLY",
    /**
     * обработка заказов и учет товаров
     */
    InventoryAndOrderProcessing: "INVENTORY_AND_ORDER_PROCESSING",
    /**
     * просмотр информации о заказах
     */
    InventoryAndOrderProcessingReadOnly:
      "INVENTORY_AND_ORDER_PROCESSING_READ_ONLY",
    /**
     * управление ценами
     */
    Pricing: "PRICING",
    /**
     * просмотр цен
     */
    PricingReadOnly: "PRICING_READ_ONLY",
    /**
     * управление товарами и карточками
     */
    OffersAndCardsManagement: "OFFERS_AND_CARDS_MANAGEMENT",
    /**
     * просмотр товаров и карточек
     */
    OffersAndCardsManagementReadOnly: "OFFERS_AND_CARDS_MANAGEMENT_READ_ONLY",
    /**
     * продвижение товаров
     */
    Promotion: "PROMOTION",
    /**
     * просмотр информации о продвижении товаров
     */
    PromotionReadOnly: "PROMOTION_READ_ONLY",
    /**
     * просмотр финансовой информации и отчётности
     */
    FinanceAndAccounting: "FINANCE_AND_ACCOUNTING",
    /**
     * общение с покупателями
     */
    Communication: "COMMUNICATION",
    /**
     * настройка магазинов
     */
    SettingsManagement: "SETTINGS_MANAGEMENT",
    /**
     * получение информации по заявкам на поставку, вывоз и утилизацию (FBY, LaaS).
     */
    SuppliesManagementReadOnly: "SUPPLIES_MANAGEMENT_READ_ONLY",
  },
  /**
   * Тип ответа.
   * Возможные значения:
   * * `OK` — ошибок нет.
   * * `ERROR` — при обработке запроса произошла ошибка.
   */
  AuthApiResponseStatusType: {
    /**
     * ошибок нет
     */
    Ok: "OK",
    /**
     * при обработке запроса произошла ошибка.
     */
    Error: "ERROR",
  },
  /**
   * Тип ответа.
   * Возможные значения:
   * * `OK` — ошибок нет.
   * * `ERROR` — при обработке запроса произошла ошибка.
   */
  BidsApiResponseStatusType: {
    /**
     * ошибок нет
     */
    Ok: "OK",
    /**
     * при обработке запроса произошла ошибка.
     */
    Error: "ERROR",
  },
  /**
   * Типы дополнительных инструментов продвижения:
   *
   * * `BESTS` — участие в акции «Бестселлеры Маркета».
   * * `SPLIT_0_0_4` — возможность оплаты со Сплитом сроком на 4 месяца.
   * * `SPLIT_0_0_6` — возможность оплаты со Сплитом сроком на 6 месяцев.
   * * `SPLIT_0_0_12` — возможность оплаты со Сплитом сроком на 12 месяцев.
   * * `MARKET_SUBSIDY_1_4` — скидка от Маркета от 1 до 4%.
   * * `MARKET_SUBSIDY_5_9` — скидка от Маркета от 5 до 9%.
   * * `MARKET_SUBSIDY_10` — скидка от Маркета от 10%.
   */
  BidsBenefitType: {
    /**
     * участие в акции «Бестселлеры Маркета»
     */
    Bests: "BESTS",
    /**
     * возможность оплаты со Сплитом сроком на 4 месяца
     */
    Split004: "SPLIT_0_0_4",
    /**
     * возможность оплаты со Сплитом сроком на 6 месяцев
     */
    Split006: "SPLIT_0_0_6",
    /**
     * возможность оплаты со Сплитом сроком на 12 месяцев
     */
    Split0012: "SPLIT_0_0_12",
    /**
     * скидка от Маркета от 1 до 4%
     */
    MarketSubsidy14: "MARKET_SUBSIDY_1_4",
    /**
     * скидка от Маркета от 5 до 9%
     */
    MarketSubsidy59: "MARKET_SUBSIDY_5_9",
    /**
     * скидка от Маркета от 10%.
     */
    MarketSubsidy10: "MARKET_SUBSIDY_10",
  },
  /**
   * Тип ответа.
   * Возможные значения:
   * * `OK` — ошибок нет.
   * * `ERROR` — при обработке запроса произошла ошибка.
   */
  BusinessesApiResponseStatusType: {
    /**
     * ошибок нет
     */
    Ok: "OK",
    /**
     * при обработке запроса произошла ошибка.
     */
    Error: "ERROR",
  },
  /**
   * Уровень подписки кабинета:
   *
   * * `NONE` — подписка отсутствует.
   * * `LIGHT` — уровень подписки Лайт.
   * * `MEDIUM` — уровень подписки Медиум.
   */
  BusinessesBusinessSubscriptionLevelType: {
    /**
     * подписка отсутствует
     */
    None: "NONE",
    /**
     * уровень подписки Лайт
     */
    Light: "LIGHT",
    /**
     * уровень подписки Медиум.
     */
    Medium: "MEDIUM",
  },
  /**
   * Свойства кабинета:
   *
   * * `MARKET_YANDEX_GO` — продавец Market Yandex Go.
   */
  BusinessesBusinessTraitType: {
    /**
     * продавец Market Yandex Go.
     */
    MarketYandexGo: "MARKET_YANDEX_GO",
  },
  /**
   * Коды валют:
   *
   * * `RUR` — российский рубль.
   * * `UAH` — украинская гривна.
   * * `BYR` — белорусский рубль.
   * * `KZT` — казахстанский тенге.
   * * `UZS` — узбекский сум.
   */
  BusinessesCurrencyType: {
    /**
     * российский рубль
     */
    Rur: "RUR",
    Usd: "USD",
    Eur: "EUR",
    /**
     * украинская гривна
     */
    Uah: "UAH",
    Aud: "AUD",
    Gbp: "GBP",
    /**
     * белорусский рубль
     */
    Byr: "BYR",
    Byn: "BYN",
    Dkk: "DKK",
    Isk: "ISK",
    /**
     * казахстанский тенге
     */
    Kzt: "KZT",
    Cad: "CAD",
    Cny: "CNY",
    Nok: "NOK",
    Xdr: "XDR",
    Sgd: "SGD",
    Try: "TRY",
    Sek: "SEK",
    Chf: "CHF",
    Jpy: "JPY",
    Azn: "AZN",
    All: "ALL",
    Dzd: "DZD",
    Aoa: "AOA",
    Ars: "ARS",
    Amd: "AMD",
    Afn: "AFN",
    Bhd: "BHD",
    Bgn: "BGN",
    Bob: "BOB",
    Bwp: "BWP",
    Bnd: "BND",
    Brl: "BRL",
    Bif: "BIF",
    Huf: "HUF",
    Vef: "VEF",
    Kpw: "KPW",
    Vnd: "VND",
    Gmd: "GMD",
    Ghs: "GHS",
    Gnf: "GNF",
    Hkd: "HKD",
    Gel: "GEL",
    Aed: "AED",
    Egp: "EGP",
    Zmk: "ZMK",
    Ils: "ILS",
    Inr: "INR",
    Idr: "IDR",
    Jod: "JOD",
    Iqd: "IQD",
    Irr: "IRR",
    Yer: "YER",
    Qar: "QAR",
    Kes: "KES",
    Kgs: "KGS",
    Cop: "COP",
    Cdf: "CDF",
    Crc: "CRC",
    Kwd: "KWD",
    Cup: "CUP",
    Lak: "LAK",
    Lvl: "LVL",
    Sll: "SLL",
    Lbp: "LBP",
    Lyd: "LYD",
    Szl: "SZL",
    Ltl: "LTL",
    Mur: "MUR",
    Mro: "MRO",
    Mkd: "MKD",
    Mwk: "MWK",
    Mga: "MGA",
    Myr: "MYR",
    Mad: "MAD",
    Mxn: "MXN",
    Mzn: "MZN",
    Mdl: "MDL",
    Mnt: "MNT",
    Npr: "NPR",
    Ngn: "NGN",
    Nio: "NIO",
    Nzd: "NZD",
    Omr: "OMR",
    Pkr: "PKR",
    Pyg: "PYG",
    Pen: "PEN",
    Pln: "PLN",
    Khr: "KHR",
    Sar: "SAR",
    Ron: "RON",
    Scr: "SCR",
    Syp: "SYP",
    Skk: "SKK",
    Sos: "SOS",
    Sdg: "SDG",
    Srd: "SRD",
    Tjs: "TJS",
    Thb: "THB",
    Twd: "TWD",
    Bdt: "BDT",
    Tzs: "TZS",
    Tnd: "TND",
    Tmm: "TMM",
    Ugx: "UGX",
    /**
     * узбекский сум.
     */
    Uzs: "UZS",
    Uyu: "UYU",
    Php: "PHP",
    Djf: "DJF",
    Xaf: "XAF",
    Xof: "XOF",
    Hrk: "HRK",
    Czk: "CZK",
    Clp: "CLP",
    Lkr: "LKR",
    Eek: "EEK",
    Etb: "ETB",
    Rsd: "RSD",
    Zar: "ZAR",
    Krw: "KRW",
    Nad: "NAD",
    Tl: "TL",
    Ue: "UE",
  },
  /**
   * Причина, по которой товар не удалось поместить в архив:
   *
   * * `OFFER_HAS_STOCKS` — товар хранится на складе Маркета.
   *
   * * `UNKNOWN` — неизвестная причина ошибки. Скорее всего произошел сбой на стороне Маркета. Если ошибка повторяется долгое время, обратитесь в поддержку.
   */
  BusinessOfferMappingsAddOffersToArchiveErrorType: {
    /**
     * товар хранится на складе Маркета.
     */
    OfferHasStocks: "OFFER_HAS_STOCKS",
    /**
     * неизвестная причина ошибки. Скорее всего произошел сбой на стороне Маркета. Если ошибка повторяется долгое время, обратитесь в поддержку.
     */
    Unknown: "UNKNOWN",
  },
  /**
   * Единицы измерения возраста:
   *
   * * `YEAR` — год.
   * * `MONTH` — месяц.
   */
  BusinessOfferMappingsAgeUnitType: {
    /**
     * год
     */
    Year: "YEAR",
    /**
     * месяц.
     */
    Month: "MONTH",
  },
  /**
   * Тип ответа.
   * Возможные значения:
   * * `OK` — ошибок нет.
   * * `ERROR` — при обработке запроса произошла ошибка.
   */
  BusinessOfferMappingsApiResponseStatusType: {
    /**
     * ошибок нет
     */
    Ok: "OK",
    /**
     * при обработке запроса произошла ошибка.
     */
    Error: "ERROR",
  },
  /**
   * Язык:
   *
   * * `RU` — русский.
   * * `UZ` — узбекский.
   */
  BusinessOfferMappingsCatalogLanguageType: {
    /**
     * русский
     */
    Ru: "RU",
    /**
     * узбекский.
     */
    Uz: "UZ",
  },
  /**
   * Тип товарного кода:
   *
   * * `CUSTOMS_COMMODITY_CODE` — код товара в единой Товарной номенклатуре внешнеэкономической деятельности (ТН ВЭД) — 10 или 14 цифр без пробелов.
   * * `IKPU_CODE` — идентификационный код продукции и услуг (ИКПУ) в Узбекистане – 17 цифр без пробелов.
   *
   * Не передавайте несколько кодов одного типа.
   */
  BusinessOfferMappingsCommodityCodeType: {
    /**
     * код товара в единой Товарной номенклатуре внешнеэкономической деятельности (ТН ВЭД) — 10 или 14 цифр без пробелов
     */
    CustomsCommodityCode: "CUSTOMS_COMMODITY_CODE",
    /**
     * идентификационный код продукции и услуг (ИКПУ) в Узбекистане – 17 цифр без пробелов.
     */
    IkpuCode: "IKPU_CODE",
  },
  /**
   * Коды валют:
   *
   * * `RUR` — российский рубль.
   * * `UAH` — украинская гривна.
   * * `BYR` — белорусский рубль.
   * * `KZT` — казахстанский тенге.
   * * `UZS` — узбекский сум.
   */
  BusinessOfferMappingsCurrencyType: {
    /**
     * российский рубль
     */
    Rur: "RUR",
    Usd: "USD",
    Eur: "EUR",
    /**
     * украинская гривна
     */
    Uah: "UAH",
    Aud: "AUD",
    Gbp: "GBP",
    /**
     * белорусский рубль
     */
    Byr: "BYR",
    Byn: "BYN",
    Dkk: "DKK",
    Isk: "ISK",
    /**
     * казахстанский тенге
     */
    Kzt: "KZT",
    Cad: "CAD",
    Cny: "CNY",
    Nok: "NOK",
    Xdr: "XDR",
    Sgd: "SGD",
    Try: "TRY",
    Sek: "SEK",
    Chf: "CHF",
    Jpy: "JPY",
    Azn: "AZN",
    All: "ALL",
    Dzd: "DZD",
    Aoa: "AOA",
    Ars: "ARS",
    Amd: "AMD",
    Afn: "AFN",
    Bhd: "BHD",
    Bgn: "BGN",
    Bob: "BOB",
    Bwp: "BWP",
    Bnd: "BND",
    Brl: "BRL",
    Bif: "BIF",
    Huf: "HUF",
    Vef: "VEF",
    Kpw: "KPW",
    Vnd: "VND",
    Gmd: "GMD",
    Ghs: "GHS",
    Gnf: "GNF",
    Hkd: "HKD",
    Gel: "GEL",
    Aed: "AED",
    Egp: "EGP",
    Zmk: "ZMK",
    Ils: "ILS",
    Inr: "INR",
    Idr: "IDR",
    Jod: "JOD",
    Iqd: "IQD",
    Irr: "IRR",
    Yer: "YER",
    Qar: "QAR",
    Kes: "KES",
    Kgs: "KGS",
    Cop: "COP",
    Cdf: "CDF",
    Crc: "CRC",
    Kwd: "KWD",
    Cup: "CUP",
    Lak: "LAK",
    Lvl: "LVL",
    Sll: "SLL",
    Lbp: "LBP",
    Lyd: "LYD",
    Szl: "SZL",
    Ltl: "LTL",
    Mur: "MUR",
    Mro: "MRO",
    Mkd: "MKD",
    Mwk: "MWK",
    Mga: "MGA",
    Myr: "MYR",
    Mad: "MAD",
    Mxn: "MXN",
    Mzn: "MZN",
    Mdl: "MDL",
    Mnt: "MNT",
    Npr: "NPR",
    Ngn: "NGN",
    Nio: "NIO",
    Nzd: "NZD",
    Omr: "OMR",
    Pkr: "PKR",
    Pyg: "PYG",
    Pen: "PEN",
    Pln: "PLN",
    Khr: "KHR",
    Sar: "SAR",
    Ron: "RON",
    Scr: "SCR",
    Syp: "SYP",
    Skk: "SKK",
    Sos: "SOS",
    Sdg: "SDG",
    Srd: "SRD",
    Tjs: "TJS",
    Thb: "THB",
    Twd: "TWD",
    Bdt: "BDT",
    Tzs: "TZS",
    Tnd: "TND",
    Tmm: "TMM",
    Ugx: "UGX",
    /**
     * узбекский сум.
     */
    Uzs: "UZS",
    Uyu: "UYU",
    Php: "PHP",
    Djf: "DJF",
    Xaf: "XAF",
    Xof: "XOF",
    Hrk: "HRK",
    Czk: "CZK",
    Clp: "CLP",
    Lkr: "LKR",
    Eek: "EEK",
    Etb: "ETB",
    Rsd: "RSD",
    Zar: "ZAR",
    Krw: "KRW",
    Nad: "NAD",
    Tl: "TL",
    Ue: "UE",
  },
  /**
   * Значения параметров, которые хотите удалить, и соответствующие параметры в `UpdateOfferDTO`, в которых вы передали эти значения ранее:
   *
   * * `ADDITIONAL_EXPENSES` — дополнительные расходы на товар (параметр `additionalExpenses`).
   * * `ADULT` — пометка 18+ (параметр `adult`)
   * * `AGE` — возрастное ограничение для детей (параметр `age`).
   * * `BARCODES` — штрихкод (параметр `barcodes`).
   * * `BOX_COUNT` — количество грузовых мест (параметр `boxCount`).
   * * `CERTIFICATES` — номера документов на товар (параметр `certificates`).
   * * `COMMODITY_CODES` — товарные коды (параметр `commodityCodes`).
   * * `CONDITION` — состояние уцененного товара (параметр `condition`).
   * * `CUSTOMS_COMMODITY_CODE` — код товара в ТН ВЭД (параметр `customsCommodityCode`).
   * * `DESCRIPTION` — описание товара (параметр `description`).
   * * `DOWNLOADABLE` — признак цифрового товара (параметр `downloadable`).
   * * `GUARANTEE_PERIOD` — гарантийный срок (параметр `guaranteePeriod`).
   * * `LIFE_TIME` — срок службы (параметр `lifeTime`).
   * * `MANUALS` — список инструкций по использованию товара (параметр `manuals`).
   * * `MANUFACTURER_COUNTRIES` — страна производства (параметр `manufacturerCountries`).
   * * `PARAMETERS` — характеристики товара (параметры `params`, `parameterValues`).
   * * `PICTURES` — ссылки на изображения товара (параметр `pictures`).
   * * `PURCHASE_PRICE` — себестоимость (параметр `purchasePrice`).
   * * `SHELF_LIFE` — срок годности (параметр `shelfLife`).
   * * `TAGS` — метки товара, которые использует магазин (параметр `tags`).
   * * `TYPE` — особый тип товара (параметр `type`).
   * * `VENDOR_CODE` — название бренда или производителя (параметр `vendorCode`).
   * * `VIDEOS` — ссылки на видео товара (параметр `videos`).
   */
  BusinessOfferMappingsDeleteOfferParameterType: {
    /**
     * дополнительные расходы на товар (параметр `additionalExpenses`)
     */
    AdditionalExpenses: "ADDITIONAL_EXPENSES",
    /**
     * пометка 18+ (параметр `adult`)
     */
    Adult: "ADULT",
    /**
     * возрастное ограничение для детей (параметр `age`)
     */
    Age: "AGE",
    /**
     * штрихкод (параметр `barcodes`)
     */
    Barcodes: "BARCODES",
    /**
     * количество грузовых мест (параметр `boxCount`)
     */
    BoxCount: "BOX_COUNT",
    /**
     * номера документов на товар (параметр `certificates`)
     */
    Certificates: "CERTIFICATES",
    /**
     * товарные коды (параметр `commodityCodes`)
     */
    CommodityCodes: "COMMODITY_CODES",
    /**
     * состояние уцененного товара (параметр `condition`)
     */
    Condition: "CONDITION",
    /**
     * код товара в ТН ВЭД (параметр `customsCommodityCode`)
     */
    CustomsCommodityCode: "CUSTOMS_COMMODITY_CODE",
    /**
     * описание товара (параметр `description`)
     */
    Description: "DESCRIPTION",
    /**
     * признак цифрового товара (параметр `downloadable`)
     */
    Downloadable: "DOWNLOADABLE",
    /**
     * гарантийный срок (параметр `guaranteePeriod`)
     */
    GuaranteePeriod: "GUARANTEE_PERIOD",
    /**
     * срок службы (параметр `lifeTime`)
     */
    LifeTime: "LIFE_TIME",
    /**
     * список инструкций по использованию товара (параметр `manuals`)
     */
    Manuals: "MANUALS",
    /**
     * страна производства (параметр `manufacturerCountries`)
     */
    ManufacturerCountries: "MANUFACTURER_COUNTRIES",
    /**
     * характеристики товара (параметры `params`, `parameterValues`)
     */
    Parameters: "PARAMETERS",
    /**
     * ссылки на изображения товара (параметр `pictures`)
     */
    Pictures: "PICTURES",
    /**
     * себестоимость (параметр `purchasePrice`)
     */
    PurchasePrice: "PURCHASE_PRICE",
    /**
     * срок годности (параметр `shelfLife`)
     */
    ShelfLife: "SHELF_LIFE",
    /**
     * метки товара, которые использует магазин (параметр `tags`)
     */
    Tags: "TAGS",
    /**
     * особый тип товара (параметр `type`)
     */
    Type: "TYPE",
    /**
     * название бренда или производителя (параметр `vendorCode`)
     */
    VendorCode: "VENDOR_CODE",
    /**
     * ссылки на видео товара (параметр `videos`).
     */
    Videos: "VIDEOS",
  },
  /**
   * Состояние загрузки медиафайла:
   *
   * * `UPLOADING` — загружается.
   * * `UPLOADED` — успешно загружен.
   * * `FAILED` — при загрузке произошла ошибка. Повторите попытку позже.
   */
  BusinessOfferMappingsMediaFileUploadStateType: {
    /**
     * загружается
     */
    Uploading: "UPLOADING",
    /**
     * успешно загружен
     */
    Uploaded: "UPLOADED",
    /**
     * при загрузке произошла ошибка. Повторите попытку позже.
     */
    Failed: "FAILED",
  },
  /**
   * Статус товара:
   *
   * * `PUBLISHED` — Готов к продаже.
   * * `CHECKING` — На проверке.
   * * `DISABLED_BY_PARTNER` — Скрыт вами.
   * * `REJECTED_BY_MARKET` — Отклонен.
   * * `DISABLED_AUTOMATICALLY` — Исправьте ошибки.
   * * `CREATING_CARD` — Создается карточка.
   * * `NO_CARD` — Нужна карточка.
   * * `NO_STOCKS` — Нет на складе.
   * * `ARCHIVED` — В архиве.
   * * `READY_FOR_PUBLICATION` — Магазин в процессе подключения.
   *
   * [Что обозначает каждый из статусов](https://yandex.ru/support/marketplace/assortment/add/statuses.html)
   */
  BusinessOfferMappingsOfferCampaignStatusType: {
    /**
     * Готов к продаже
     */
    Published: "PUBLISHED",
    /**
     * На проверке
     */
    Checking: "CHECKING",
    /**
     * Скрыт вами
     */
    DisabledByPartner: "DISABLED_BY_PARTNER",
    /**
     * Исправьте ошибки
     */
    DisabledAutomatically: "DISABLED_AUTOMATICALLY",
    /**
     * Отклонен
     */
    RejectedByMarket: "REJECTED_BY_MARKET",
    /**
     * Создается карточка
     */
    CreatingCard: "CREATING_CARD",
    /**
     * Нужна карточка
     */
    NoCard: "NO_CARD",
    /**
     * Нет на складе
     */
    NoStocks: "NO_STOCKS",
    /**
     * В архиве
     */
    Archived: "ARCHIVED",
    /**
     * Магазин в процессе подключения.
     */
    ReadyForPublication: "READY_FOR_PUBLICATION",
  },
  /**
   * Статус карточки товара:
   *
   * * `HAS_CARD_CAN_NOT_UPDATE` — Карточка Маркета.
   * * `HAS_CARD_CAN_UPDATE` — Можно дополнить.
   * * `HAS_CARD_CAN_UPDATE_ERRORS` — Изменения не приняты.
   * * `HAS_CARD_CAN_UPDATE_PROCESSING` — Изменения на проверке.
   * * `NO_CARD_NEED_CONTENT` — Создайте карточку.
   * * `NO_CARD_MARKET_WILL_CREATE` — Создаст Маркет.
   * * `NO_CARD_ERRORS` — Не создана из-за ошибки.
   * * `NO_CARD_PROCESSING` — Проверяем данные.
   * * `NO_CARD_ADD_TO_CAMPAIGN` — Разместите товар в магазине.
   */
  BusinessOfferMappingsOfferCardStatusType: {
    /**
     * Карточка Маркета
     */
    HasCardCanNotUpdate: "HAS_CARD_CAN_NOT_UPDATE",
    /**
     * Можно дополнить
     */
    HasCardCanUpdate: "HAS_CARD_CAN_UPDATE",
    /**
     * Изменения не приняты
     */
    HasCardCanUpdateErrors: "HAS_CARD_CAN_UPDATE_ERRORS",
    /**
     * Изменения на проверке
     */
    HasCardCanUpdateProcessing: "HAS_CARD_CAN_UPDATE_PROCESSING",
    /**
     * Создайте карточку
     */
    NoCardNeedContent: "NO_CARD_NEED_CONTENT",
    /**
     * Создаст Маркет
     */
    NoCardMarketWillCreate: "NO_CARD_MARKET_WILL_CREATE",
    /**
     * Не создана из-за ошибки
     */
    NoCardErrors: "NO_CARD_ERRORS",
    /**
     * Проверяем данные
     */
    NoCardProcessing: "NO_CARD_PROCESSING",
    /**
     * Разместите товар в магазине.
     */
    NoCardAddToCampaign: "NO_CARD_ADD_TO_CAMPAIGN",
  },
  /**
   * Внешний вид товара:
   *
   * * `PERFECT` — идеальный.
   * * `EXCELLENT` — отличный.
   * * `GOOD` — хороший.
   * * `NOT_SPECIFIED` — не выбран.
   */
  BusinessOfferMappingsOfferConditionQualityType: {
    /**
     * идеальный
     */
    Perfect: "PERFECT",
    /**
     * отличный
     */
    Excellent: "EXCELLENT",
    /**
     * хороший
     */
    Good: "GOOD",
    /**
     * не выбран.
     */
    NotSpecified: "NOT_SPECIFIED",
  },
  /**
   * Тип уценки:
   *
   * * `PREOWNED` — бывший в употреблении товар, раньше принадлежал другому человеку.
   * * `SHOWCASESAMPLE` — витринный образец.
   * * `REFURBISHED` — повторная продажа товара.
   * * `REDUCTION` — товар с дефектами.
   * * `RENOVATED` — восстановленный товар.
   * * `NOT_SPECIFIED` — не выбран.
   *
   * `REFURBISHED` — специальное значение для одежды, обуви и аксессуаров. Используется только для уцененных товаров из этой категории. Другие значения для одежды, обуви и аксессуаров не используются.
   */
  BusinessOfferMappingsOfferConditionType: {
    /**
     * бывший в употреблении товар, раньше принадлежал другому человеку
     */
    Preowned: "PREOWNED",
    /**
     * витринный образец
     */
    Showcasesample: "SHOWCASESAMPLE",
    /**
     * повторная продажа товара
     */
    Refurbished: "REFURBISHED",
    /**
     * товар с дефектами
     */
    Reduction: "REDUCTION",
    /**
     * восстановленный товар
     */
    Renovated: "RENOVATED",
    /**
     * не выбран.
     */
    NotSpecified: "NOT_SPECIFIED",
  },
  /**
   * Типы ошибок и предупреждений:
   *
   * * `UNKNOWN_CATEGORY` — указана неизвестная категория.
   * * `INVALID_CATEGORY` — указана нелистовая категория. Укажите ту, которая не имеет дочерних категорий.
   * * `EMPTY_MARKET_CATEGORY` — не указана категория Маркета при передаче характеристик категории.
   * * `UNKNOWN_PARAMETER` — передана характеристика, которой нет среди характеристик категории.
   * * `UNEXPECTED_BOOLEAN_VALUE` — вместо boolean-значения передано что-то другое.
   * * `NUMBER_FORMAT` — передана строка, не обозначающая число, вместо числа.
   * * `INVALID_UNIT_ID` — передана единица измерения, недопустимая для характеристики.
   * * `INVALID_GROUP_ID_LENGTH` — в названии превышено допустимое значение символов — 255.
   * * `INVALID_GROUP_ID_CHARACTERS` — переданы [недопустимые символы](*ascii-code).
   * * `INVALID_PICKER_URL` — передана ссылка на изображение для миниатюры, которой нет в переданных ссылках на изображение товара.
   * * `LOCKED_DIMENSIONS` — переданы габариты упаковки, которые нельзя изменить.
   * * `INVALID_COMMODITY_CODE` — передан некорректный товарный код.
   *
   * Проверить, какие категорийные характеристики доступны для заданной категории, и получить их настройки можно с помощью запроса [POST v2/category/{categoryId}/parameters](../../reference/content/getCategoryContentParameters).
   */
  BusinessOfferMappingsOfferMappingErrorType: {
    /**
     * указана неизвестная категория
     */
    UnknownCategory: "UNKNOWN_CATEGORY",
    /**
     * указана нелистовая категория. Укажите ту, которая не имеет дочерних категорий
     */
    InvalidCategory: "INVALID_CATEGORY",
    /**
     * не указана категория Маркета при передаче характеристик категории
     */
    EmptyMarketCategory: "EMPTY_MARKET_CATEGORY",
    /**
     * передана характеристика, которой нет среди характеристик категории
     */
    UnknownParameter: "UNKNOWN_PARAMETER",
    /**
     * вместо boolean-значения передано что-то другое
     */
    UnexpectedBooleanValue: "UNEXPECTED_BOOLEAN_VALUE",
    /**
     * передана строка, не обозначающая число, вместо числа
     */
    NumberFormat: "NUMBER_FORMAT",
    /**
     * передана единица измерения, недопустимая для характеристики
     */
    InvalidUnitId: "INVALID_UNIT_ID",
    /**
     * в названии превышено допустимое значение символов — 255
     */
    InvalidGroupIdLength: "INVALID_GROUP_ID_LENGTH",
    /**
     * переданы [недопустимые символы](*ascii-code)
     */
    InvalidGroupIdCharacters: "INVALID_GROUP_ID_CHARACTERS",
    /**
     * передана ссылка на изображение для миниатюры, которой нет в переданных ссылках на изображение товара
     */
    InvalidPickerUrl: "INVALID_PICKER_URL",
    /**
     * переданы габариты упаковки, которые нельзя изменить
     */
    LockedDimensions: "LOCKED_DIMENSIONS",
    /**
     * передан некорректный товарный код.
     */
    InvalidCommodityCode: "INVALID_COMMODITY_CODE",
  },
  /**
   * Информация о доступности или недоступности.
   *
   * * `FINE` — доступно.
   * * `REJECT` — недоступно.
   */
  BusinessOfferMappingsOfferSellingProgramStatusType: {
    /**
     * доступно
     */
    Fine: "FINE",
    /**
     * недоступно.
     */
    Reject: "REJECT",
  },
  /**
   * Особый тип товара:
   *
   * * `DEFAULT` — товары, для которых вы передавали особый тип ранее и хотите убрать его.
   * * `MEDICINE` — лекарства.
   * * `BOOK` — бумажные и электронные книги.
   * * `AUDIOBOOK` — аудиокниги.
   * * `ARTIST_TITLE` — музыкальная и видеопродукция.
   * * `ON_DEMAND` — товары на заказ.
   * * `ALCOHOL` — алкоголь.
   *
   * Если ваш товар — книга
   *
   * Укажите год издания в характеристиках товара. [Подробнее о параметре](../../reference/business-offer-mappings/updateOfferMappings.md#offerparamdto)
   */
  BusinessOfferMappingsOfferType: {
    /**
     * товары, для которых вы передавали особый тип ранее и хотите убрать его
     */
    Default: "DEFAULT",
    /**
     * лекарства
     */
    Medicine: "MEDICINE",
    /**
     * бумажные и электронные книги
     */
    Book: "BOOK",
    /**
     * аудиокниги
     */
    Audiobook: "AUDIOBOOK",
    /**
     * музыкальная и видеопродукция
     */
    ArtistTitle: "ARTIST_TITLE",
    /**
     * товары на заказ
     */
    OnDemand: "ON_DEMAND",
    /**
     * алкоголь.
     */
    Alcohol: "ALCOHOL",
  },
  /**
   * Модель работы:
   *
   * * `FBY` — FBY.
   * * `FBS` — FBS.
   * * `DBS` — DBS.
   * * `EXPRESS` — Экспресс.
   * * `LAAS` — LaaS.
   */
  BusinessOfferMappingsSellingProgramType: {
    /**
     * FBY
     */
    Fby: "FBY",
    /**
     * FBS
     */
    Fbs: "FBS",
    /**
     * DBS
     */
    Dbs: "DBS",
    /**
     * Экспресс
     */
    Express: "EXPRESS",
    /**
     * LaaS.
     */
    Laas: "LAAS",
  },
  /**
   * Тип витрины:
   *
   * * `B2B` — [Яндекс Маркет для бизнеса](https://business.market.yandex.ru/) (товары для юридических лиц и ИП). Подробнее о сервисе читайте в [Справке](https://yandex.ru/support/market-for-enterprise/ru/).
   * * `B2C` — [основная витрина Маркета](https://market.yandex.ru/) (товары для физических лиц).
   */
  BusinessOfferMappingsShowcaseType: {
    /**
     * [Яндекс Маркет для бизнеса](https://business.market.yandex.ru/) (товары для юридических лиц и ИП). Подробнее о сервисе читайте в [Справке](https://yandex.ru/support/market-for-enterprise/ru/)
     */
    B2b: "B2B",
    /**
     * [основная витрина Маркета](https://market.yandex.ru/) (товары для физических лиц).
     */
    B2c: "B2C",
  },
  /**
   * Единица измерения времени:
   *
   * * `HOUR` — час.
   * * `DAY` — сутки.
   * * `WEEK` — неделя.
   * * `MONTH` — месяц.
   * * `YEAR` — год.
   */
  BusinessOfferMappingsTimeUnitType: {
    /**
     * час
     */
    Hour: "HOUR",
    /**
     * сутки
     */
    Day: "DAY",
    /**
     * неделя
     */
    Week: "WEEK",
    /**
     * месяц
     */
    Month: "MONTH",
    /**
     * год.
     */
    Year: "YEAR",
  },
  /**
   * Возможность использовать API:
   *
   * * `AVAILABLE` — методы API доступны для выполнения запросов.
   * * `DISABLED_BY_INACTIVITY` — методы API недоступны, так как магазин не размещал товары на витрине больше 90 дней.
   * * `DISABLED_BY_NO_ACTIVE_CONTRACT` — методы API недоступны из-за отсутствия активного договора с Маркетом.
   * * `MANUALLY_DISABLED` — методы API недоступны, так как интеграция выключена вручную.
   * * `DISABLED_BY_NO_PLACEMENT_TYPE` — методы API недоступны, так как магазин не подключен к программе размещения.
   *
   * [Подробная инструкция по восстановлению доступа](../../concepts/api-access.md)
   */
  CampaignsApiAvailabilityStatusType: {
    /**
     * методы API доступны для выполнения запросов
     */
    Available: "AVAILABLE",
    /**
     * методы API недоступны, так как магазин не размещал товары на витрине больше 90 дней
     */
    DisabledByInactivity: "DISABLED_BY_INACTIVITY",
    /**
     * методы API недоступны из-за отсутствия активного договора с Маркетом
     */
    DisabledByNoActiveContract: "DISABLED_BY_NO_ACTIVE_CONTRACT",
    /**
     * методы API недоступны, так как интеграция выключена вручную
     */
    ManuallyDisabled: "MANUALLY_DISABLED",
    /**
     * методы API недоступны, так как магазин не подключен к программе размещения.
     */
    DisabledByNoPlacementType: "DISABLED_BY_NO_PLACEMENT_TYPE",
  },
  /**
   * Тип ответа.
   * Возможные значения:
   * * `OK` — ошибок нет.
   * * `ERROR` — при обработке запроса произошла ошибка.
   */
  CampaignsApiResponseStatusType: {
    /**
     * ошибок нет
     */
    Ok: "OK",
    /**
     * при обработке запроса произошла ошибка.
     */
    Error: "ERROR",
  },
  /**
   * Источник информации о расписании работы службы доставки.
   * Возможные значения:
   * * `WEB` — информация получена из настроек кабинета продавца на Маркете.
   * * `YML` — информация получена из прайс-листа магазина.
   */
  CampaignsCampaignSettingsScheduleSourceType: {
    /**
     * информация получена из настроек кабинета продавца на Маркете
     */
    Web: "WEB",
    /**
     * информация получена из прайс-листа магазина.
     */
    Yml: "YML",
  },
  /**
   * Модель, по которой работает магазин:
   *
   * * `FBS` — FBS или Экспресс.
   * * `FBY` — FBY.
   * * `DBS` — DBS.
   * * `LAAS` — LaaS.
   */
  CampaignsPlacementType: {
    /**
     * FBS или Экспресс
     */
    Fbs: "FBS",
    /**
     * FBY
     */
    Fby: "FBY",
    /**
     * DBS
     */
    Dbs: "DBS",
    /**
     * LaaS.
     */
    Laas: "LAAS",
  },
  /**
   * Тип региона.
   *
   * Возможные значения:
   *
   * * `CITY_DISTRICT` — район города.
   *
   * * `CITY` — крупный город.
   *
   * * `CONTINENT` — континент.
   *
   * * `COUNTRY_DISTRICT` — область.
   *
   * * `COUNTRY` — страна.
   *
   * * `REGION` — регион.
   *
   * * `REPUBLIC_AREA` — район субъекта федерации.
   *
   * * `REPUBLIC` — субъект федерации.
   *
   * * `SUBWAY_STATION` — станция метро.
   *
   * * `VILLAGE` — город.
   *
   * * `OTHER` — неизвестный регион.
   */
  CampaignsRegionType: {
    /**
     * неизвестный регион.
     */
    Other: "OTHER",
    /**
     * континент.
     */
    Continent: "CONTINENT",
    /**
     * регион.
     */
    Region: "REGION",
    /**
     * страна.
     */
    Country: "COUNTRY",
    /**
     * область.
     */
    CountryDistrict: "COUNTRY_DISTRICT",
    /**
     * субъект федерации.
     */
    Republic: "REPUBLIC",
    /**
     * крупный город.
     */
    City: "CITY",
    /**
     * город.
     */
    Village: "VILLAGE",
    /**
     * район города.
     */
    CityDistrict: "CITY_DISTRICT",
    /**
     * станция метро.
     */
    SubwayStation: "SUBWAY_STATION",
    /**
     * район субъекта федерации.
     */
    RepublicArea: "REPUBLIC_AREA",
  },
  /**
   * Ставка НДС.
   * Возможные значения:
   *
   * * `VAT_22` — НДС 22%.
   * * `NO_VAT` — НДС не облагается.
   * * `VAT_12` — НДС 12%.
   * * `VAT_10` — НДС 10%.
   * * `VAT_05` — НДС 5%.
   * * `VAT_07` — НДС 7%.
   *
   * Если у партнёра в кабинете установлена ставка, не входящая в список, — значение не возвращается.
   */
  CampaignsVatRateType: {
    /**
     * НДС 22%
     */
    Vat22: "VAT_22",
    /**
     * НДС не облагается
     */
    NoVat: "NO_VAT",
    /**
     * НДС 12%
     */
    Vat12: "VAT_12",
    /**
     * НДС 10%
     */
    Vat10: "VAT_10",
    /**
     * НДС 5%
     */
    Vat05: "VAT_05",
    /**
     * НДС 7%.
     */
    Vat07: "VAT_07",
  },
  /**
   * Тип ответа.
   * Возможные значения:
   * * `OK` — ошибок нет.
   * * `ERROR` — при обработке запроса произошла ошибка.
   */
  CategoriesApiResponseStatusType: {
    /**
     * ошибок нет
     */
    Ok: "OK",
    /**
     * при обработке запроса произошла ошибка.
     */
    Error: "ERROR",
  },
  /**
   * Типы ошибок:
   *
   * * `UNKNOWN_CATEGORY` — указана неизвестная категория.
   * * `CATEGORY_IS_NOT_LEAF` — указана нелистовая категория. Укажите ту, которая не имеет дочерних категорий.
   */
  CategoriesCategoryErrorType: {
    /**
     * указана неизвестная категория
     */
    UnknownCategory: "UNKNOWN_CATEGORY",
    /**
     * указана нелистовая категория. Укажите ту, которая не имеет дочерних категорий.
     */
    CategoryIsNotLeaf: "CATEGORY_IS_NOT_LEAF",
  },
  /**
   * Язык:
   *
   * * `RU` — русский.
   *
   * * `EN` — английский.
   */
  CategoriesLanguageType: {
    /**
     * русский.
     */
    Ru: "RU",
    /**
     * английский.
     */
    En: "EN",
  },
  /**
   * Тип ответа.
   * Возможные значения:
   * * `OK` — ошибок нет.
   * * `ERROR` — при обработке запроса произошла ошибка.
   */
  ChatsApiResponseStatusType: {
    /**
     * ошибок нет
     */
    Ok: "OK",
    /**
     * при обработке запроса произошла ошибка.
     */
    Error: "ERROR",
  },
  /**
   * Тип чата:
   *
   * * `ORDER` — по заказам.
   * * `RETURN` — по возвратам (FBY, FBS и Экспресс).
   *
   * Подробнее о чатах по заказам и возвратам читайте в [Справке Маркета для продавцов](https://yandex.ru/support/marketplace/ru/orders/communication/about-orders).
   */
  ChatsChatContextIdentifiableType: {
    /**
     * по заказам
     */
    Order: "ORDER",
    /**
     * по возвратам (FBY, FBS и Экспресс).
     */
    Return: "RETURN",
  },
  /**
   * Тип контекста:
   *
   * * `ORDER` — чат по заказу. [Чаты о заказах и возвратах](https://yandex.ru/support/marketplace/ru/orders/communication/about-orders)
   * * `RETURN` — чат по возврату (FBY, FBS и Экспресс). [Чаты о заказах и возвратах](https://yandex.ru/support/marketplace/ru/orders/communication/about-orders)
   * * `DIRECT` — чат, который начал покупатель. [Сообщения от покупателей](https://yandex.ru/support/marketplace/ru/orders/communication/with-users)
   */
  ChatsChatContextType: {
    /**
     * чат по заказу. [Чаты о заказах и возвратах](https://yandex.ru/support/marketplace/ru/orders/communication/about-orders)
     */
    Order: "ORDER",
    /**
     * чат по возврату (FBY, FBS и Экспресс). [Чаты о заказах и возвратах](https://yandex.ru/support/marketplace/ru/orders/communication/about-orders)
     */
    Return: "RETURN",
    /**
     * чат, который начал покупатель. [Сообщения от покупателей](https://yandex.ru/support/marketplace/ru/orders/communication/with-users)
     */
    Direct: "DIRECT",
  },
  /**
   * Кто отправил сообщение:
   *
   * * `PARTNER` — магазин.
   * * `CUSTOMER` — покупатель.
   * * `MARKET` — Маркет ([автоматическое сообщение](*market-notification)).
   * * `SUPPORT` — сотрудник службы поддержки Маркета.
   */
  ChatsChatMessageSenderType: {
    /**
     * магазин
     */
    Partner: "PARTNER",
    /**
     * покупатель
     */
    Customer: "CUSTOMER",
    /**
     * Маркет ([автоматическое сообщение](*market-notification))
     */
    Market: "MARKET",
    /**
     * сотрудник службы поддержки Маркета.
     */
    Support: "SUPPORT",
  },
  /**
   * Статус чата:
   *
   * * `NEW` — новый чат.
   * * `WAITING_FOR_CUSTOMER` — нужен ответ покупателя.
   * * `WAITING_FOR_PARTNER` — нужен ответ магазина.
   * * `WAITING_FOR_ARBITER` — нужен ответ арбитра.
   * * `WAITING_FOR_MARKET` — нужен ответ Маркета.
   * * `FINISHED` — чат завершен.
   */
  ChatsChatStatusType: {
    /**
     * новый чат
     */
    New: "NEW",
    /**
     * нужен ответ покупателя
     */
    WaitingForCustomer: "WAITING_FOR_CUSTOMER",
    /**
     * нужен ответ магазина
     */
    WaitingForPartner: "WAITING_FOR_PARTNER",
    /**
     * нужен ответ арбитра
     */
    WaitingForArbiter: "WAITING_FOR_ARBITER",
    /**
     * нужен ответ Маркета
     */
    WaitingForMarket: "WAITING_FOR_MARKET",
    /**
     * чат завершен.
     */
    Finished: "FINISHED",
  },
  /**
   * Тип чата:
   *
   * * `CHAT` — чат с покупателем.
   * * `ARBITRAGE` — спор.
   */
  ChatsChatType: {
    /**
     * чат с покупателем
     */
    Chat: "CHAT",
    /**
     * спор.
     */
    Arbitrage: "ARBITRAGE",
  },
  /**
   * Тип ответа.
   * Возможные значения:
   * * `OK` — ошибок нет.
   * * `ERROR` — при обработке запроса произошла ошибка.
   */
  ContentApiResponseStatusType: {
    /**
     * ошибок нет
     */
    Ok: "OK",
    /**
     * при обработке запроса произошла ошибка.
     */
    Error: "ERROR",
  },
  /**
   * Статус вычисления рейтинга карточки товара и рекомендаций:
   *
   * * `UPDATING` — рейтинг обновляется.
   * * `ACTUAL` — рейтинг актуальный.
   */
  ContentOfferCardContentStatusType: {
    /**
     * рейтинг обновляется
     */
    Updating: "UPDATING",
    /**
     * рейтинг актуальный.
     */
    Actual: "ACTUAL",
  },
  /**
   * Рекомендация по дополнению или замене контента. Не возвращается для карточек, которые заполнены Маркетом или содержат бывшие в употреблении товары.
   *
   * Часть рекомендаций относятся к **основным параметрам**, которые есть у товаров любых категорий. Другие — к тем **характеристикам**, которые есть у товара потому, что он относится к определенной категории.
   *
   * **1. Рекомендации, относящиеся к основным параметрам**
   *
   * Каждая такая рекомендация относится к **единственному параметру**. Чтобы заполнить этот параметр, пользуйтесь запросом [POST v2/businesses/{businessId}/offer-mappings/update](../../reference/business-offer-mappings/updateOfferMappings.md).
   *
   * Рекомендации по заполнению параметров в `updateOfferMappings`:
   *
   * * `RECOGNIZED_VENDOR` — напишите название производителя так, как его пишет сам производитель (параметр `vendor`).
   * * `PICTURE_COUNT` — добавьте изображения (параметр `pictures`). [Требования](https://yandex.ru/support2/marketplace/ru/assortment/fields/images)
   *
   * Для рекомендации приходит процент ее выполнения.
   * * `FIRST_PICTURE_SIZE`— замените первое изображение более крупным (параметр `pictures`). [Требования](https://yandex.ru/support2/marketplace/ru/assortment/fields/images)
   * * `TITLE_LENGTH` — измените название (параметр `name`). Составьте название по схеме: тип + бренд или производитель + модель + особенности, если есть (размер, вес, цвет). [Требования](https://yandex.ru/support2/marketplace/ru/assortment/fields/title)
   * * `DESCRIPTION_LENGTH` — добавьте описание рекомендуемого размера (параметр `description`). [Требования](https://yandex.ru/support2/marketplace/ru/assortment/fields/description)
   * * `AVERAGE_PICTURE_SIZE` — замените все изображения на изображения высокого качества (параметр `pictures`). [Требования](https://yandex.ru/support2/marketplace/ru/assortment/fields/images)
   * * `FIRST_VIDEO_LENGTH` — добавьте первое видео рекомендуемой длины (параметр `videos`). [Требования](https://yandex.ru/support2/marketplace/ru/assortment/fields/video)
   * * `FIRST_VIDEO_SIZE` — замените первое видео на видео высокого качества (параметр `videos`). [Требования](https://yandex.ru/support2/marketplace/ru/assortment/fields/video)
   * * `AVERAGE_VIDEO_SIZE` — замените все видео на видео высокого качества (параметр `videos`). [Требования](https://yandex.ru/support2/marketplace/ru/assortment/fields/video)
   * * `VIDEO_COUNT` — добавьте хотя бы одно видео (параметр `videos`). [Требования](https://yandex.ru/support2/marketplace/ru/assortment/fields/video)
   *
   * Для рекомендации приходит процент ее выполнения.
   *
   * **2. Рекомендации, относящиеся к характеристикам по категориям**
   *
   * Каждая такая рекомендация предполагает заполнение **одной или нескольких характеристик**. Чтобы узнать, какие именно характеристики нужно заполнить, воспользуйтесь запросом [POST v2/category/{categoryId}/parameters](../../reference/content/getCategoryContentParameters.md). Например, если вы получили рекомендацию `MAIN`, нужно заполнить характеристики, имеющие `MAIN` в массиве `recommendationTypes`.
   *
   * Рекомендации:
   *
   * * `MAIN` — заполните ключевые характеристики товара, которые используются в поиске и фильтрах.
   *
   * Для рекомендации приходит процент ее выполнения.
   * * `ADDITIONAL` — заполните дополнительные характеристики товара.
   *
   * Для рекомендации приходит процент ее выполнения.
   * * `DISTINCTIVE` — заполните характеристики, которыми отличаются друг от друга варианты товара.
   *
   * Для рекомендации приходит процент ее выполнения.
   *
   * **3. Устаревшие рекомендации**
   *
   * * `HAS_VIDEO`.
   * * `FILTERABLE`.
   * * `HAS_DESCRIPTION`.
   * * `HAS_BARCODE`.
   */
  ContentOfferCardRecommendationType: {
    HasVideo: "HAS_VIDEO",
    /**
     * напишите название производителя так, как его пишет сам производитель (параметр `vendor`)
     */
    RecognizedVendor: "RECOGNIZED_VENDOR",
    /**
     * , нужно заполнить характеристики, имеющие `MAIN` в массиве `recommendationTypes`.
     */
    Main: "MAIN",
    /**
     * заполните дополнительные характеристики товара.
     */
    Additional: "ADDITIONAL",
    /**
     * заполните характеристики, которыми отличаются друг от друга варианты товара.
     */
    Distinctive: "DISTINCTIVE",
    Filterable: "FILTERABLE",
    /**
     * добавьте изображения (параметр `pictures`). [Требования](https://yandex.ru/support2/marketplace/ru/assortment/fields/images)
     */
    PictureCount: "PICTURE_COUNT",
    HasDescription: "HAS_DESCRIPTION",
    /**
     * .
     */
    HasBarcode: "HAS_BARCODE",
    /**
     * замените первое изображение более крупным (параметр `pictures`). [Требования](https://yandex.ru/support2/marketplace/ru/assortment/fields/images)
     */
    FirstPictureSize: "FIRST_PICTURE_SIZE",
    /**
     * измените название (параметр `name`). Составьте название по схеме: тип + бренд или производитель + модель + особенности, если есть (размер, вес, цвет). [Требования](https://yandex.ru/support2/marketplace/ru/assortment/fields/title)
     */
    TitleLength: "TITLE_LENGTH",
    /**
     * добавьте описание рекомендуемого размера (параметр `description`). [Требования](https://yandex.ru/support2/marketplace/ru/assortment/fields/description)
     */
    DescriptionLength: "DESCRIPTION_LENGTH",
    /**
     * замените все изображения на изображения высокого качества (параметр `pictures`). [Требования](https://yandex.ru/support2/marketplace/ru/assortment/fields/images)
     */
    AveragePictureSize: "AVERAGE_PICTURE_SIZE",
    /**
     * замените первое видео на видео высокого качества (параметр `videos`). [Требования](https://yandex.ru/support2/marketplace/ru/assortment/fields/video)
     */
    FirstVideoSize: "FIRST_VIDEO_SIZE",
    /**
     * добавьте первое видео рекомендуемой длины (параметр `videos`). [Требования](https://yandex.ru/support2/marketplace/ru/assortment/fields/video)
     */
    FirstVideoLength: "FIRST_VIDEO_LENGTH",
    /**
     * замените все видео на видео высокого качества (параметр `videos`). [Требования](https://yandex.ru/support2/marketplace/ru/assortment/fields/video)
     */
    AverageVideoSize: "AVERAGE_VIDEO_SIZE",
    /**
     * добавьте хотя бы одно видео (параметр `videos`). [Требования](https://yandex.ru/support2/marketplace/ru/assortment/fields/video)
     */
    VideoCount: "VIDEO_COUNT",
  },
  /**
   * Статус карточки товара:
   *
   * * `HAS_CARD_CAN_NOT_UPDATE` — Карточка Маркета.
   * * `HAS_CARD_CAN_UPDATE` — Можно дополнить.
   * * `HAS_CARD_CAN_UPDATE_ERRORS` — Изменения не приняты.
   * * `HAS_CARD_CAN_UPDATE_PROCESSING` — Изменения на проверке.
   * * `NO_CARD_NEED_CONTENT` — Создайте карточку.
   * * `NO_CARD_MARKET_WILL_CREATE` — Создаст Маркет.
   * * `NO_CARD_ERRORS` — Не создана из-за ошибки.
   * * `NO_CARD_PROCESSING` — Проверяем данные.
   * * `NO_CARD_ADD_TO_CAMPAIGN` — Разместите товар в магазине.
   */
  ContentOfferCardStatusType: {
    /**
     * Карточка Маркета
     */
    HasCardCanNotUpdate: "HAS_CARD_CAN_NOT_UPDATE",
    /**
     * Можно дополнить
     */
    HasCardCanUpdate: "HAS_CARD_CAN_UPDATE",
    /**
     * Изменения не приняты
     */
    HasCardCanUpdateErrors: "HAS_CARD_CAN_UPDATE_ERRORS",
    /**
     * Изменения на проверке
     */
    HasCardCanUpdateProcessing: "HAS_CARD_CAN_UPDATE_PROCESSING",
    /**
     * Создайте карточку
     */
    NoCardNeedContent: "NO_CARD_NEED_CONTENT",
    /**
     * Создаст Маркет
     */
    NoCardMarketWillCreate: "NO_CARD_MARKET_WILL_CREATE",
    /**
     * Не создана из-за ошибки
     */
    NoCardErrors: "NO_CARD_ERRORS",
    /**
     * Проверяем данные
     */
    NoCardProcessing: "NO_CARD_PROCESSING",
    /**
     * Разместите товар в магазине.
     */
    NoCardAddToCampaign: "NO_CARD_ADD_TO_CAMPAIGN",
  },
  /**
   * Типы ошибок и предупреждений:
   *
   * * `OFFER_NOT_FOUND` — такого товара нет в каталоге.
   * * `UNKNOWN_CATEGORY` — указана неизвестная категория.
   * * `INVALID_CATEGORY` — указана нелистовая категория. Укажите ту, которая не имеет дочерних категорий.
   * * `UNKNOWN_PARAMETER` — передана характеристика, которой нет среди характеристик категории.
   * * `UNEXPECTED_BOOLEAN_VALUE` — вместо boolean-значения передано что-то другое.
   * * `NUMBER_FORMAT` — передана строка, не обозначающая число, вместо числа.
   * * `INVALID_UNIT_ID` — передана единица измерения, недопустимая для характеристики.
   * * `INVALID_GROUP_ID_LENGTH` — в названии превышено допустимое значение символов — 255.
   * * `INVALID_GROUP_ID_CHARACTERS` — переданы [недопустимые символы](*ascii-code).
   *
   * Проверить, какие категорийные характеристики доступны для заданной категории, и получить их настройки можно с помощью запроса [POST v2/category/{categoryId}/parameters](../../reference/content/getCategoryContentParameters).
   */
  ContentOfferContentErrorType: {
    /**
     * такого товара нет в каталоге
     */
    OfferNotFound: "OFFER_NOT_FOUND",
    /**
     * указана неизвестная категория
     */
    UnknownCategory: "UNKNOWN_CATEGORY",
    /**
     * указана нелистовая категория. Укажите ту, которая не имеет дочерних категорий
     */
    InvalidCategory: "INVALID_CATEGORY",
    /**
     * передана характеристика, которой нет среди характеристик категории
     */
    UnknownParameter: "UNKNOWN_PARAMETER",
    /**
     * вместо boolean-значения передано что-то другое
     */
    UnexpectedBooleanValue: "UNEXPECTED_BOOLEAN_VALUE",
    /**
     * передана строка, не обозначающая число, вместо числа
     */
    NumberFormat: "NUMBER_FORMAT",
    /**
     * передана единица измерения, недопустимая для характеристики
     */
    InvalidUnitId: "INVALID_UNIT_ID",
    /**
     * в названии превышено допустимое значение символов — 255
     */
    InvalidGroupIdLength: "INVALID_GROUP_ID_LENGTH",
    /**
     * переданы [недопустимые символы](*ascii-code).
     */
    InvalidGroupIdCharacters: "INVALID_GROUP_ID_CHARACTERS",
  },
  /**
   * Тип данных:
   *
   * * `TEXT` — текст.
   * * `ENUM` — список возможных значений.
   * * `BOOLEAN` — `true` или `false`.
   * * `NUMERIC` — число.
   */
  ContentParameterType: {
    /**
     * текст
     */
    Text: "TEXT",
    /**
     * список возможных значений
     */
    Enum: "ENUM",
    /**
     * `true` или `false`
     */
    Boolean: "BOOLEAN",
    /**
     * число.
     */
    Numeric: "NUMERIC",
  },
  /**
   * Тип кабинета:
   *
   * * `SELLER` — продавец.
   * * `ADVERTISER` — рекламодатель.
   */
  DeleteGoodsFeedbackCommentSourceType: {
    /**
     * продавец
     */
    Seller: "SELLER",
    /**
     * рекламодатель.
     */
    Advertiser: "ADVERTISER",
  },
  /**
   * Тип ответа.
   * Возможные значения:
   * * `OK` — ошибок нет.
   * * `ERROR` — при обработке запроса произошла ошибка.
   */
  DeliveryOptionsApiResponseStatusType: {
    /**
     * ошибок нет
     */
    Ok: "OK",
    /**
     * при обработке запроса произошла ошибка.
     */
    Error: "ERROR",
  },
  /**
   * Коды валют:
   *
   * * `RUR` — российский рубль.
   * * `UAH` — украинская гривна.
   * * `BYR` — белорусский рубль.
   * * `KZT` — казахстанский тенге.
   * * `UZS` — узбекский сум.
   */
  DeliveryOptionsCurrencyType: {
    /**
     * российский рубль
     */
    Rur: "RUR",
    Usd: "USD",
    Eur: "EUR",
    /**
     * украинская гривна
     */
    Uah: "UAH",
    Aud: "AUD",
    Gbp: "GBP",
    /**
     * белорусский рубль
     */
    Byr: "BYR",
    Byn: "BYN",
    Dkk: "DKK",
    Isk: "ISK",
    /**
     * казахстанский тенге
     */
    Kzt: "KZT",
    Cad: "CAD",
    Cny: "CNY",
    Nok: "NOK",
    Xdr: "XDR",
    Sgd: "SGD",
    Try: "TRY",
    Sek: "SEK",
    Chf: "CHF",
    Jpy: "JPY",
    Azn: "AZN",
    All: "ALL",
    Dzd: "DZD",
    Aoa: "AOA",
    Ars: "ARS",
    Amd: "AMD",
    Afn: "AFN",
    Bhd: "BHD",
    Bgn: "BGN",
    Bob: "BOB",
    Bwp: "BWP",
    Bnd: "BND",
    Brl: "BRL",
    Bif: "BIF",
    Huf: "HUF",
    Vef: "VEF",
    Kpw: "KPW",
    Vnd: "VND",
    Gmd: "GMD",
    Ghs: "GHS",
    Gnf: "GNF",
    Hkd: "HKD",
    Gel: "GEL",
    Aed: "AED",
    Egp: "EGP",
    Zmk: "ZMK",
    Ils: "ILS",
    Inr: "INR",
    Idr: "IDR",
    Jod: "JOD",
    Iqd: "IQD",
    Irr: "IRR",
    Yer: "YER",
    Qar: "QAR",
    Kes: "KES",
    Kgs: "KGS",
    Cop: "COP",
    Cdf: "CDF",
    Crc: "CRC",
    Kwd: "KWD",
    Cup: "CUP",
    Lak: "LAK",
    Lvl: "LVL",
    Sll: "SLL",
    Lbp: "LBP",
    Lyd: "LYD",
    Szl: "SZL",
    Ltl: "LTL",
    Mur: "MUR",
    Mro: "MRO",
    Mkd: "MKD",
    Mwk: "MWK",
    Mga: "MGA",
    Myr: "MYR",
    Mad: "MAD",
    Mxn: "MXN",
    Mzn: "MZN",
    Mdl: "MDL",
    Mnt: "MNT",
    Npr: "NPR",
    Ngn: "NGN",
    Nio: "NIO",
    Nzd: "NZD",
    Omr: "OMR",
    Pkr: "PKR",
    Pyg: "PYG",
    Pen: "PEN",
    Pln: "PLN",
    Khr: "KHR",
    Sar: "SAR",
    Ron: "RON",
    Scr: "SCR",
    Syp: "SYP",
    Skk: "SKK",
    Sos: "SOS",
    Sdg: "SDG",
    Srd: "SRD",
    Tjs: "TJS",
    Thb: "THB",
    Twd: "TWD",
    Bdt: "BDT",
    Tzs: "TZS",
    Tnd: "TND",
    Tmm: "TMM",
    Ugx: "UGX",
    /**
     * узбекский сум.
     */
    Uzs: "UZS",
    Uyu: "UYU",
    Php: "PHP",
    Djf: "DJF",
    Xaf: "XAF",
    Xof: "XOF",
    Hrk: "HRK",
    Czk: "CZK",
    Clp: "CLP",
    Lkr: "LKR",
    Eek: "EEK",
    Etb: "ETB",
    Rsd: "RSD",
    Zar: "ZAR",
    Krw: "KRW",
    Nad: "NAD",
    Tl: "TL",
    Ue: "UE",
  },
  /**
   * Тип ответа.
   * Возможные значения:
   * * `OK` — ошибок нет.
   * * `ERROR` — при обработке запроса произошла ошибка.
   */
  DeliveryServicesApiResponseStatusType: {
    /**
     * ошибок нет
     */
    Ok: "OK",
    /**
     * при обработке запроса произошла ошибка.
     */
    Error: "ERROR",
  },
  /**
   * Формат страницы:
   * * `A4` — формат страницы :no-translate[A4].
   * * `A8` — формат страницы :no-translate[A8].
   */
  DownloadShipmentPalletLabelsFormat: {
    /**
     * формат страницы :no-translate[A4]
     */
    A4: "A4",
    /**
     * формат страницы :no-translate[A8].
     */
    A8: "A8",
  },
  /**
   * Формат отчета:
   *
   * * `FILE` — файл с электронной таблицей (:no-translate[XLSX]).
   * * `CSV` — ZIP-архив с CSV-файлами на каждый лист отчета.
   * * `JSON` — ZIP-архив с JSON-файлами на каждый лист отчета.
   */
  GenerateBannersStatisticsReportFormat: {
    /**
     * файл с электронной таблицей (:no-translate[XLSX])
     */
    File: "FILE",
    /**
     * ZIP-архив с CSV-файлами на каждый лист отчета
     */
    Csv: "CSV",
    /**
     * ZIP-архив с JSON-файлами на каждый лист отчета.
     */
    Json: "JSON",
  },
  /**
   * Тип кабинета:
   *
   * * `SELLER` — продавец.
   * * `ADVERTISER` — рекламодатель.
   */
  GenerateBannersStatisticsReportSourceType: {
    /**
     * продавец
     */
    Seller: "SELLER",
    /**
     * рекламодатель.
     */
    Advertiser: "ADVERTISER",
  },
  /**
   * Формат отчета:
   *
   * * `FILE` — файл с электронной таблицей (:no-translate[XLSX]).
   * * `CSV` — ZIP-архив с CSV-файлами на каждый лист отчета.
   * * `JSON` — ZIP-архив с JSON-файлами на каждый лист отчета.
   */
  GenerateBoostConsolidatedReportFormat: {
    /**
     * файл с электронной таблицей (:no-translate[XLSX])
     */
    File: "FILE",
    /**
     * ZIP-архив с CSV-файлами на каждый лист отчета
     */
    Csv: "CSV",
    /**
     * ZIP-архив с JSON-файлами на каждый лист отчета.
     */
    Json: "JSON",
  },
  /**
   * Тип кабинета:
   *
   * * `SELLER` — продавец.
   * * `ADVERTISER` — рекламодатель.
   */
  GenerateBoostConsolidatedReportSourceType: {
    /**
     * продавец
     */
    Seller: "SELLER",
    /**
     * рекламодатель.
     */
    Advertiser: "ADVERTISER",
  },
  /**
   * Формат отчета:
   *
   * * `FILE` — файл с электронной таблицей (:no-translate[XLSX]).
   * * `CSV` — ZIP-архив с CSV-файлами на каждый лист отчета.
   * * `JSON` — ZIP-архив с JSON-файлами на каждый лист отчета.
   */
  GenerateClosureDocumentsDetalizationReportFormat: {
    /**
     * файл с электронной таблицей (:no-translate[XLSX])
     */
    File: "FILE",
    /**
     * ZIP-архив с CSV-файлами на каждый лист отчета
     */
    Csv: "CSV",
    /**
     * ZIP-архив с JSON-файлами на каждый лист отчета.
     */
    Json: "JSON",
  },
  /**
   * Формат отчета:
   *
   * * `FILE` — файл с электронной таблицей (:no-translate[XLSX]).
   * * `CSV` — ZIP-архив с CSV-файлами на каждый лист отчета.
   * * `JSON` — ZIP-архив с JSON-файлами на каждый лист отчета.
   */
  GenerateCompetitorsPositionReportFormat: {
    /**
     * файл с электронной таблицей (:no-translate[XLSX])
     */
    File: "FILE",
    /**
     * ZIP-архив с CSV-файлами на каждый лист отчета
     */
    Csv: "CSV",
    /**
     * ZIP-архив с JSON-файлами на каждый лист отчета.
     */
    Json: "JSON",
  },
  /**
   * Формат отчета:
   *
   * * `FILE` — файл с электронной таблицей (:no-translate[XLSX]).
   * * `CSV` — ZIP-архив с CSV-файлами на каждый лист отчета.
   * * `JSON` — ZIP-архив с JSON-файлами на каждый лист отчета.
   */
  GenerateGoodsFeedbackReportFormat: {
    /**
     * файл с электронной таблицей (:no-translate[XLSX])
     */
    File: "FILE",
    /**
     * ZIP-архив с CSV-файлами на каждый лист отчета
     */
    Csv: "CSV",
    /**
     * ZIP-архив с JSON-файлами на каждый лист отчета.
     */
    Json: "JSON",
  },
  /**
   * Формат отчета:
   *
   * * `FILE` — файл с электронной таблицей (:no-translate[XLSX]).
   * * `CSV` — ZIP-архив с CSV-файлами на каждый лист отчета.
   * * `JSON` — ZIP-архив с JSON-файлами на каждый лист отчета.
   */
  GenerateGoodsMovementReportFormat: {
    /**
     * файл с электронной таблицей (:no-translate[XLSX])
     */
    File: "FILE",
    /**
     * ZIP-архив с CSV-файлами на каждый лист отчета
     */
    Csv: "CSV",
    /**
     * ZIP-архив с JSON-файлами на каждый лист отчета.
     */
    Json: "JSON",
  },
  /**
   * Формат отчета:
   *
   * * `FILE` — файл с электронной таблицей (:no-translate[XLSX]).
   * * `CSV` — ZIP-архив с CSV-файлами на каждый лист отчета.
   * * `JSON` — ZIP-архив с JSON-файлами на каждый лист отчета.
   */
  GenerateGoodsPricesReportFormat: {
    /**
     * файл с электронной таблицей (:no-translate[XLSX])
     */
    File: "FILE",
    /**
     * ZIP-архив с CSV-файлами на каждый лист отчета
     */
    Csv: "CSV",
    /**
     * ZIP-архив с JSON-файлами на каждый лист отчета.
     */
    Json: "JSON",
  },
  /**
   * Формат отчета:
   *
   * * `FILE` — файл с электронной таблицей (:no-translate[XLSX]).
   * * `CSV` — ZIP-архив с CSV-файлами на каждый лист отчета.
   * * `JSON` — ZIP-архив с JSON-файлами на каждый лист отчета.
   */
  GenerateGoodsRealizationReportFormat: {
    /**
     * файл с электронной таблицей (:no-translate[XLSX])
     */
    File: "FILE",
    /**
     * ZIP-архив с CSV-файлами на каждый лист отчета
     */
    Csv: "CSV",
    /**
     * ZIP-архив с JSON-файлами на каждый лист отчета.
     */
    Json: "JSON",
  },
  /**
   * Формат отчета:
   *
   * * `FILE` — файл с электронной таблицей (:no-translate[XLSX]).
   * * `CSV` — ZIP-архив с CSV-файлами на каждый лист отчета.
   * * `JSON` — ZIP-архив с JSON-файлами на каждый лист отчета.
   */
  GenerateGoodsTurnoverReportFormat: {
    /**
     * файл с электронной таблицей (:no-translate[XLSX])
     */
    File: "FILE",
    /**
     * ZIP-архив с CSV-файлами на каждый лист отчета
     */
    Csv: "CSV",
    /**
     * ZIP-архив с JSON-файлами на каждый лист отчета.
     */
    Json: "JSON",
  },
  /**
   * Формат отчета:
   *
   * * `FILE` — файл с электронной таблицей (:no-translate[XLSX]).
   * * `CSV` — ZIP-архив с CSV-файлами на каждый лист отчета.
   * * `JSON` — ZIP-архив с JSON-файлами на каждый лист отчета.
   */
  GenerateJewelryFiscalReportFormat: {
    /**
     * файл с электронной таблицей (:no-translate[XLSX])
     */
    File: "FILE",
    /**
     * ZIP-архив с CSV-файлами на каждый лист отчета
     */
    Csv: "CSV",
    /**
     * ZIP-архив с JSON-файлами на каждый лист отчета.
     */
    Json: "JSON",
  },
  /**
   * Формат отчета:
   *
   * * `FILE` — файл с электронной таблицей (:no-translate[XLSX]).
   * * `CSV` — ZIP-архив с CSV-файлами на каждый лист отчета.
   * * `JSON` — ZIP-архив с JSON-файлами на каждый лист отчета.
   */
  GenerateKeyIndicatorsReportFormat: {
    /**
     * файл с электронной таблицей (:no-translate[XLSX])
     */
    File: "FILE",
    /**
     * ZIP-архив с CSV-файлами на каждый лист отчета
     */
    Csv: "CSV",
    /**
     * ZIP-архив с JSON-файлами на каждый лист отчета.
     */
    Json: "JSON",
  },
  /**
   * Формат отчета:
   *
   * * `FILE` — файл с электронной таблицей (:no-translate[XLSX]).
   * * `CSV` — ZIP-архив с CSV-файлами на каждый лист отчета.
   * * `JSON` — ZIP-архив с JSON-файлами на каждый лист отчета.
   */
  GenerateMarketingDetalizationReportFormat: {
    /**
     * файл с электронной таблицей (:no-translate[XLSX])
     */
    File: "FILE",
    /**
     * ZIP-архив с CSV-файлами на каждый лист отчета
     */
    Csv: "CSV",
    /**
     * ZIP-архив с JSON-файлами на каждый лист отчета.
     */
    Json: "JSON",
  },
  /**
   * Тип кабинета:
   *
   * * `SELLER` — продавец.
   * * `ADVERTISER` — рекламодатель.
   */
  GenerateMarketingDetalizationReportSourceType: {
    /**
     * продавец
     */
    Seller: "SELLER",
    /**
     * рекламодатель.
     */
    Advertiser: "ADVERTISER",
  },
  /**
   * Размещение ярлыков на странице PDF-файла:
   *
   * * `A9_HORIZONTALLY` — ярлык размером 58 × 40 мм без полей, близок к формату :no-translate[A9].
   *
   * Пример ярлыка для продавцов Маркета
   *
   * ![Изображение горизонтального ярлыка формата :no-translate[A9] для продавцов Маркета](../../_images/labels/label-A9-horizontally.png)
   *
   * Пример ярлыка для продавцов Market Yandex Go
   *
   * ![Изображение горизонтального ярлыка формата A9 для продавцов Market Yandex Go](../../_images/labels/label-A9-horizontally-uz.png)
   *
   * * `A9` — ярлык размером 40 × 58 мм без полей, близок к формату A9.
   *
   * Пример ярлыка для продавцов Маркета
   *
   * ![Изображение вертикального ярлыка формата :no-translate[A9] для продавцов Маркета](../../_images/labels/label-A9.png)
   *
   * Пример ярлыка для продавцов Market Yandex Go
   *
   * ![Изображение вертикального ярлыка формата :no-translate[A9] для продавцов Market Yandex Go](../../_images/labels/label-A9-uz.png)
   *
   * * `A7` — ярлык размером 75 × 120 мм (80,4 × 125,6 мм с учетом полей), близок к формату :no-translate[A7].
   *
   * Пример ярлыка для продавцов Маркета
   *
   * ![Изображение ярлыка формата A7 для продавцов Маркета](../../_images/labels/label-A7.jpg)
   *
   * Пример ярлыка для продавцов Market Yandex Go
   *
   * ![Изображение ярлыка формата :no-translate[A7] для продавцов Market Yandex Go](../../_images/labels/label-A7-uz.png)
   *
   * * `A4` — на листе A4 располагается ярлык того формата, который выбран в кабинете продавца на Маркете — перейдите на страницу **Заказы** → **Заказы и отгрузки** → на вкладке нужной модели работы нажмите кнопку **Формат ярлыков**.
   */
  GenerateMassOrderLabelsReportFormat: {
    /**
     * ярлык размером 58 × 40 мм без полей, близок к формату :no-translate[A9].
     */
    A9Horizontally: "A9_HORIZONTALLY",
    /**
     * ярлык размером 40 × 58 мм без полей, близок к формату A9.
     */
    A9: "A9",
    /**
     * ярлык размером 75 × 120 мм (80,4 × 125,6 мм с учетом полей), близок к формату :no-translate[A7].
     */
    A7: "A7",
    /**
     * на листе A4 располагается ярлык того формата, который выбран в кабинете продавца на Маркете — перейдите на страницу **Заказы** → **Заказы и отгрузки** → на вкладке нужной модели работы нажмите кнопку **Формат ярлыков**.
     */
    A4: "A4",
  },
  /**
   * Размещение ярлыков на странице PDF-файла:
   *
   * * `A9_HORIZONTALLY` — ярлык размером 58 × 40 мм без полей, близок к формату :no-translate[A9].
   *
   * Пример ярлыка для продавцов Маркета
   *
   * ![Изображение горизонтального ярлыка формата :no-translate[A9] для продавцов Маркета](../../_images/labels/label-A9-horizontally.png)
   *
   * Пример ярлыка для продавцов Market Yandex Go
   *
   * ![Изображение горизонтального ярлыка формата A9 для продавцов Market Yandex Go](../../_images/labels/label-A9-horizontally-uz.png)
   *
   * * `A9` — ярлык размером 40 × 58 мм без полей, близок к формату A9.
   *
   * Пример ярлыка для продавцов Маркета
   *
   * ![Изображение вертикального ярлыка формата :no-translate[A9] для продавцов Маркета](../../_images/labels/label-A9.png)
   *
   * Пример ярлыка для продавцов Market Yandex Go
   *
   * ![Изображение вертикального ярлыка формата :no-translate[A9] для продавцов Market Yandex Go](../../_images/labels/label-A9-uz.png)
   *
   * * `A7` — ярлык размером 75 × 120 мм (80,4 × 125,6 мм с учетом полей), близок к формату :no-translate[A7].
   *
   * Пример ярлыка для продавцов Маркета
   *
   * ![Изображение ярлыка формата A7 для продавцов Маркета](../../_images/labels/label-A7.jpg)
   *
   * Пример ярлыка для продавцов Market Yandex Go
   *
   * ![Изображение ярлыка формата :no-translate[A7] для продавцов Market Yandex Go](../../_images/labels/label-A7-uz.png)
   *
   * * `A4` — на листе A4 располагается ярлык того формата, который выбран в кабинете продавца на Маркете — перейдите на страницу **Заказы** → **Заказы и отгрузки** → на вкладке нужной модели работы нажмите кнопку **Формат ярлыков**.
   */
  GenerateOrderLabelFormat: {
    /**
     * ярлык размером 58 × 40 мм без полей, близок к формату :no-translate[A9].
     */
    A9Horizontally: "A9_HORIZONTALLY",
    /**
     * ярлык размером 40 × 58 мм без полей, близок к формату A9.
     */
    A9: "A9",
    /**
     * ярлык размером 75 × 120 мм (80,4 × 125,6 мм с учетом полей), близок к формату :no-translate[A7].
     */
    A7: "A7",
    /**
     * на листе A4 располагается ярлык того формата, который выбран в кабинете продавца на Маркете — перейдите на страницу **Заказы** → **Заказы и отгрузки** → на вкладке нужной модели работы нажмите кнопку **Формат ярлыков**.
     */
    A4: "A4",
  },
  /**
   * Размещение ярлыков на странице PDF-файла:
   *
   * * `A9_HORIZONTALLY` — ярлык размером 58 × 40 мм без полей, близок к формату :no-translate[A9].
   *
   * Пример ярлыка для продавцов Маркета
   *
   * ![Изображение горизонтального ярлыка формата :no-translate[A9] для продавцов Маркета](../../_images/labels/label-A9-horizontally.png)
   *
   * Пример ярлыка для продавцов Market Yandex Go
   *
   * ![Изображение горизонтального ярлыка формата A9 для продавцов Market Yandex Go](../../_images/labels/label-A9-horizontally-uz.png)
   *
   * * `A9` — ярлык размером 40 × 58 мм без полей, близок к формату A9.
   *
   * Пример ярлыка для продавцов Маркета
   *
   * ![Изображение вертикального ярлыка формата :no-translate[A9] для продавцов Маркета](../../_images/labels/label-A9.png)
   *
   * Пример ярлыка для продавцов Market Yandex Go
   *
   * ![Изображение вертикального ярлыка формата :no-translate[A9] для продавцов Market Yandex Go](../../_images/labels/label-A9-uz.png)
   *
   * * `A7` — ярлык размером 75 × 120 мм (80,4 × 125,6 мм с учетом полей), близок к формату :no-translate[A7].
   *
   * Пример ярлыка для продавцов Маркета
   *
   * ![Изображение ярлыка формата A7 для продавцов Маркета](../../_images/labels/label-A7.jpg)
   *
   * Пример ярлыка для продавцов Market Yandex Go
   *
   * ![Изображение ярлыка формата :no-translate[A7] для продавцов Market Yandex Go](../../_images/labels/label-A7-uz.png)
   *
   * * `A4` — на листе A4 располагается ярлык того формата, который выбран в кабинете продавца на Маркете — перейдите на страницу **Заказы** → **Заказы и отгрузки** → на вкладке нужной модели работы нажмите кнопку **Формат ярлыков**.
   */
  GenerateOrderLabelsFormat: {
    /**
     * ярлык размером 58 × 40 мм без полей, близок к формату :no-translate[A9].
     */
    A9Horizontally: "A9_HORIZONTALLY",
    /**
     * ярлык размером 40 × 58 мм без полей, близок к формату A9.
     */
    A9: "A9",
    /**
     * ярлык размером 75 × 120 мм (80,4 × 125,6 мм с учетом полей), близок к формату :no-translate[A7].
     */
    A7: "A7",
    /**
     * на листе A4 располагается ярлык того формата, который выбран в кабинете продавца на Маркете — перейдите на страницу **Заказы** → **Заказы и отгрузки** → на вкладке нужной модели работы нажмите кнопку **Формат ярлыков**.
     */
    A4: "A4",
  },
  /**
   * Формат отчета:
   *
   * * `FILE` — файл с электронной таблицей (:no-translate[XLSX]).
   * * `CSV` — ZIP-архив с CSV-файлами на каждый лист отчета.
   * * `JSON` — ZIP-архив с JSON-файлами на каждый лист отчета.
   */
  GenerateSalesGeographyReportFormat: {
    /**
     * файл с электронной таблицей (:no-translate[XLSX])
     */
    File: "FILE",
    /**
     * ZIP-архив с CSV-файлами на каждый лист отчета
     */
    Csv: "CSV",
    /**
     * ZIP-архив с JSON-файлами на каждый лист отчета.
     */
    Json: "JSON",
  },
  /**
   * Формат отчета:
   *
   * * `FILE` — файл с электронной таблицей (:no-translate[XLSX]).
   * * `CSV` — ZIP-архив с CSV-файлами на каждый лист отчета.
   * * `JSON` — ZIP-архив с JSON-файлами на каждый лист отчета.
   */
  GenerateShelfsStatisticsReportFormat: {
    /**
     * файл с электронной таблицей (:no-translate[XLSX])
     */
    File: "FILE",
    /**
     * ZIP-архив с CSV-файлами на каждый лист отчета
     */
    Csv: "CSV",
    /**
     * ZIP-архив с JSON-файлами на каждый лист отчета.
     */
    Json: "JSON",
  },
  /**
   * Тип кабинета:
   *
   * * `SELLER` — продавец.
   * * `ADVERTISER` — рекламодатель.
   */
  GenerateShelfsStatisticsReportSourceType: {
    /**
     * продавец
     */
    Seller: "SELLER",
    /**
     * рекламодатель.
     */
    Advertiser: "ADVERTISER",
  },
  /**
   * Формат отчета:
   *
   * * `FILE` — файл с электронной таблицей (:no-translate[XLSX]).
   * * `CSV` — ZIP-архив с CSV-файлами на каждый лист отчета.
   * * `JSON` — ZIP-архив с JSON-файлами на каждый лист отчета.
   */
  GenerateShowsBoostReportFormat: {
    /**
     * файл с электронной таблицей (:no-translate[XLSX])
     */
    File: "FILE",
    /**
     * ZIP-архив с CSV-файлами на каждый лист отчета
     */
    Csv: "CSV",
    /**
     * ZIP-архив с JSON-файлами на каждый лист отчета.
     */
    Json: "JSON",
  },
  /**
   * Тип кабинета:
   *
   * * `SELLER` — продавец.
   * * `ADVERTISER` — рекламодатель.
   */
  GenerateShowsBoostReportSourceType: {
    /**
     * продавец
     */
    Seller: "SELLER",
    /**
     * рекламодатель.
     */
    Advertiser: "ADVERTISER",
  },
  /**
   * Формат отчета:
   *
   * * `FILE` — файл с электронной таблицей (:no-translate[XLSX]).
   * * `CSV` — ZIP-архив с CSV-файлами на каждый лист отчета.
   * * `JSON` — ZIP-архив с JSON-файлами на каждый лист отчета.
   */
  GenerateShowsSalesReportFormat: {
    /**
     * файл с электронной таблицей (:no-translate[XLSX])
     */
    File: "FILE",
    /**
     * ZIP-архив с CSV-файлами на каждый лист отчета
     */
    Csv: "CSV",
    /**
     * ZIP-архив с JSON-файлами на каждый лист отчета.
     */
    Json: "JSON",
  },
  /**
   * Формат отчета:
   *
   * * `FILE` — файл с электронной таблицей (:no-translate[XLSX]).
   * * `CSV` — ZIP-архив с CSV-файлами на каждый лист отчета.
   * * `JSON` — ZIP-архив с JSON-файлами на каждый лист отчета.
   */
  GenerateStocksOnWarehousesReportFormat: {
    /**
     * файл с электронной таблицей (:no-translate[XLSX])
     */
    File: "FILE",
    /**
     * ZIP-архив с CSV-файлами на каждый лист отчета
     */
    Csv: "CSV",
    /**
     * ZIP-архив с JSON-файлами на каждый лист отчета.
     */
    Json: "JSON",
  },
  /**
   * Формат отчета:
   *
   * * `FILE` — файл с электронной таблицей (:no-translate[XLSX]).
   * * `CSV` — ZIP-архив с CSV-файлами на каждый лист отчета.
   * * `JSON` — ZIP-архив с JSON-файлами на каждый лист отчета.
   */
  GenerateStocksReportFormat: {
    /**
     * файл с электронной таблицей (:no-translate[XLSX])
     */
    File: "FILE",
    /**
     * ZIP-архив с CSV-файлами на каждый лист отчета
     */
    Csv: "CSV",
    /**
     * ZIP-архив с JSON-файлами на каждый лист отчета.
     */
    Json: "JSON",
  },
  /**
   * Формат отчета:
   *
   * * `FILE` — файл с электронной таблицей (:no-translate[XLSX]).
   * * `CSV` — ZIP-архив с CSV-файлами на каждый лист отчета.
   * * `JSON` — ZIP-архив с JSON-файлами на каждый лист отчета.
   */
  GenerateUnitedMarketplaceServicesReportFormat: {
    /**
     * файл с электронной таблицей (:no-translate[XLSX])
     */
    File: "FILE",
    /**
     * ZIP-архив с CSV-файлами на каждый лист отчета
     */
    Csv: "CSV",
    /**
     * ZIP-архив с JSON-файлами на каждый лист отчета.
     */
    Json: "JSON",
  },
  /**
   * Язык отчета:
   *
   * * `RU` — русский язык.
   * * `EN` — английский язык.
   */
  GenerateUnitedMarketplaceServicesReportLanguage: {
    /**
     * русский язык
     */
    Ru: "RU",
    /**
     * английский язык.
     */
    En: "EN",
  },
  /**
   * Формат отчета:
   *
   * * `FILE` — файл с электронной таблицей (:no-translate[XLSX]).
   * * `CSV` — ZIP-архив с CSV-файлами на каждый лист отчета.
   * * `JSON` — ZIP-архив с JSON-файлами на каждый лист отчета.
   */
  GenerateUnitedNettingReportFormat: {
    /**
     * файл с электронной таблицей (:no-translate[XLSX])
     */
    File: "FILE",
    /**
     * ZIP-архив с CSV-файлами на каждый лист отчета
     */
    Csv: "CSV",
    /**
     * ZIP-архив с JSON-файлами на каждый лист отчета.
     */
    Json: "JSON",
  },
  /**
   * Язык отчета:
   *
   * * `RU` — русский язык.
   * * `EN` — английский язык.
   */
  GenerateUnitedNettingReportLanguage: {
    /**
     * русский язык
     */
    Ru: "RU",
    /**
     * английский язык.
     */
    En: "EN",
  },
  /**
   * Формат отчета:
   *
   * * `FILE` — файл с электронной таблицей (:no-translate[XLSX]).
   * * `CSV` — ZIP-архив с CSV-файлами на каждый лист отчета.
   * * `JSON` — ZIP-архив с JSON-файлами на каждый лист отчета.
   */
  GenerateUnitedOrdersReportFormat: {
    /**
     * файл с электронной таблицей (:no-translate[XLSX])
     */
    File: "FILE",
    /**
     * ZIP-архив с CSV-файлами на каждый лист отчета
     */
    Csv: "CSV",
    /**
     * ZIP-архив с JSON-файлами на каждый лист отчета.
     */
    Json: "JSON",
  },
  /**
   * Язык отчета:
   *
   * * `RU` — русский язык.
   * * `EN` — английский язык.
   */
  GenerateUnitedOrdersReportLanguage: {
    /**
     * русский язык
     */
    Ru: "RU",
    /**
     * английский язык.
     */
    En: "EN",
  },
  /**
   * Формат отчета:
   *
   * * `FILE` — файл с электронной таблицей (:no-translate[XLSX]).
   * * `CSV` — ZIP-архив с CSV-файлами на каждый лист отчета.
   * * `JSON` — ZIP-архив с JSON-файлами на каждый лист отчета.
   */
  GenerateUnitedReturnsReportFormat: {
    /**
     * файл с электронной таблицей (:no-translate[XLSX])
     */
    File: "FILE",
    /**
     * ZIP-архив с CSV-файлами на каждый лист отчета
     */
    Csv: "CSV",
    /**
     * ZIP-архив с JSON-файлами на каждый лист отчета.
     */
    Json: "JSON",
  },
  /**
   * Тип кабинета:
   *
   * * `SELLER` — продавец.
   * * `ADVERTISER` — рекламодатель.
   */
  GetGoodsFeedbackCommentsSourceType: {
    /**
     * продавец
     */
    Seller: "SELLER",
    /**
     * рекламодатель.
     */
    Advertiser: "ADVERTISER",
  },
  /**
   * Тип кабинета:
   *
   * * `SELLER` — продавец.
   * * `ADVERTISER` — рекламодатель.
   */
  GetGoodsFeedbacksUrbanadsSourceType: {
    /**
     * продавец
     */
    Seller: "SELLER",
    /**
     * рекламодатель.
     */
    Advertiser: "ADVERTISER",
  },
  /**
   * Язык:
   *
   * * `RU` — русский.
   * * `UZ` — узбекский.
   */
  GetOfferMappingsLanguage: {
    /**
     * русский
     */
    Ru: "RU",
    /**
     * узбекский.
     */
    Uz: "UZ",
  },
  /**
   * Тип покупателя:
   *
   * * `PERSON` — физическое лицо.
   *
   * * `BUSINESS` — организация.
   */
  GetOrdersBuyerType: {
    /**
     * физическое лицо.
     */
    Person: "PERSON",
    /**
     * организация.
     */
    Business: "BUSINESS",
  },
  /**
   * Способ доставки:
   *
   * * `BUYER` — курьерская доставка покупателю.
   *
   * * `MARKET_BRANDED_OUTLET` — доставка в пункт выдачи заказов Маркета.
   *
   * * `SHOP_OUTLET` — доставка в пункт выдачи заказов магазина.
   *
   * * `UNKNOWN` — неизвестный тип.
   */
  GetOrdersDispatchType: {
    /**
     * неизвестный тип.
     */
    Unknown: "UNKNOWN",
    /**
     * курьерская доставка покупателю.
     */
    Buyer: "BUYER",
    /**
     * доставка в пункт выдачи заказов Маркета.
     */
    MarketBrandedOutlet: "MARKET_BRANDED_OUTLET",
    /**
     * доставка в пункт выдачи заказов магазина.
     */
    ShopOutlet: "SHOP_OUTLET",
  },
  /**
   * Тип кабинета:
   *
   * * `SELLER` — продавец.
   * * `ADVERTISER` — рекламодатель.
   */
  GetReportInfoSourceType: {
    /**
     * продавец
     */
    Seller: "SELLER",
    /**
     * рекламодатель.
     */
    Advertiser: "ADVERTISER",
  },
  /**
   * Тип фильтрации:
   *
   * * `UNREDEEMED` — невыкупы.
   *
   * * `RETURN` — возвраты.
   *
   * Если не указывать, в ответе будут и невыкупы, и возвраты.
   */
  GetReturnsType: {
    /**
     * невыкупы.
     */
    Unredeemed: "UNREDEEMED",
    /**
     * возвраты.
     */
    Return: "RETURN",
  },
  /**
   * Тип ответа.
   * Возможные значения:
   * * `OK` — ошибок нет.
   * * `ERROR` — при обработке запроса произошла ошибка.
   */
  GoodsFeedbackApiResponseStatusType: {
    /**
     * ошибок нет
     */
    Ok: "OK",
    /**
     * при обработке запроса произошла ошибка.
     */
    Error: "ERROR",
  },
  /**
   * Статус реакции на отзыв:
   *
   * * `ALL` — все отзывы.
   *
   * * `NEED_REACTION` — отзывы, на которые нужно ответить.
   */
  GoodsFeedbackFeedbackReactionStatusType: {
    /**
     * все отзывы.
     */
    All: "ALL",
    /**
     * отзывы, на которые нужно ответить.
     */
    NeedReaction: "NEED_REACTION",
  },
  /**
   * Тип автора:
   *
   * * `USER` — пользователь.
   * * `BUSINESS` — кабинет.
   * * `BRAND` — бренд.
   */
  GoodsFeedbackGoodsFeedbackCommentAuthorType: {
    /**
     * пользователь
     */
    User: "USER",
    /**
     * кабинет
     */
    Business: "BUSINESS",
    /**
     * бренд.
     */
    Brand: "BRAND",
  },
  /**
   * Статус комментария:
   *
   * * `PUBLISHED` — опубликован.
   * * `UNMODERATED` — не проверен.
   * * `BANNED` — заблокирован.
   * * `DELETED` — удален.
   */
  GoodsFeedbackGoodsFeedbackCommentStatusType: {
    /**
     * опубликован
     */
    Published: "PUBLISHED",
    /**
     * не проверен
     */
    Unmoderated: "UNMODERATED",
    /**
     * заблокирован
     */
    Banned: "BANNED",
    /**
     * удален.
     */
    Deleted: "DELETED",
  },
  /**
   * Тип кабинета:
   *
   * * `SELLER` — продавец.
   * * `ADVERTISER` — рекламодатель.
   */
  GoodsFeedbackSourceType: {
    /**
     * продавец
     */
    Seller: "SELLER",
    /**
     * рекламодатель.
     */
    Advertiser: "ADVERTISER",
  },
  /**
   * Тип ответа.
   * Возможные значения:
   * * `OK` — ошибок нет.
   * * `ERROR` — при обработке запроса произошла ошибка.
   */
  GoodsQuestionsApiResponseStatusType: {
    /**
     * ошибок нет
     */
    Ok: "OK",
    /**
     * при обработке запроса произошла ошибка.
     */
    Error: "ERROR",
  },
  /**
   * Порядок сортировки вопросов.
   * * `CREATED_AT_DESC` — по дате создания вопроса по убыванию;
   * * `CREATED_AT_ASC` — по дате создания вопроса по возрастанию.
   */
  GoodsQuestionsQuestionSortOrderType: {
    /**
     * по дате создания вопроса по убыванию
     */
    CreatedAtDesc: "CREATED_AT_DESC",
    /**
     * по дате создания вопроса по возрастанию.
     */
    CreatedAtAsc: "CREATED_AT_ASC",
  },
  /**
   * Тип автора:
   * * `USER` — пользователь.
   * * `BUSINESS` — кабинет.
   * * `VENDOR` — производитель.
   * * `BRAND` — бренд.
   */
  GoodsQuestionsQuestionsTextContentAuthorType: {
    /**
     * пользователь
     */
    User: "USER",
    /**
     * кабинет
     */
    Business: "BUSINESS",
    /**
     * производитель
     */
    Vendor: "VENDOR",
    /**
     * бренд.
     */
    Brand: "BRAND",
  },
  /**
   * Статус модерации ответа или комментария:
   * * `PUBLISHED` — опубликован.
   * * `UNMODERATED` — не проверен.
   * * `BANNED` — заблокирован.
   * * `DELETED` — удален.
   */
  GoodsQuestionsQuestionsTextContentModerationStatusType: {
    /**
     * опубликован
     */
    Published: "PUBLISHED",
    /**
     * не проверен
     */
    Unmoderated: "UNMODERATED",
    /**
     * заблокирован
     */
    Banned: "BANNED",
    /**
     * удален.
     */
    Deleted: "DELETED",
  },
  /**
   * Операция над ответом или комментарием.
   * * `UPDATE` — обновление.
   * * `CREATE` — создание.
   * * `DELETE` — удаление.
   */
  GoodsQuestionsQuestionsTextEntityOperationType: {
    /**
     * обновление
     */
    Update: "UPDATE",
    /**
     * создание
     */
    Create: "CREATE",
    /**
     * удаление.
     */
    Delete: "DELETE",
  },
  /**
   * Тип сущности:
   *
   * * `QUESTION` — вопрос о товаре.
   * * `ANSWER` — ответ на вопрос.
   * * `COMMENT` — комментарий к ответу.
   */
  GoodsQuestionsQuestionsTextEntityType: {
    /**
     * вопрос о товаре
     */
    Question: "QUESTION",
    /**
     * ответ на вопрос
     */
    Answer: "ANSWER",
    /**
     * комментарий к ответу.
     */
    Comment: "COMMENT",
  },
  /**
   * Тип ответа.
   * Возможные значения:
   * * `OK` — ошибок нет.
   * * `ERROR` — при обработке запроса произошла ошибка.
   */
  GoodsStatsApiResponseStatusType: {
    /**
     * ошибок нет
     */
    Ok: "OK",
    /**
     * при обработке запроса произошла ошибка.
     */
    Error: "ERROR",
  },
  /**
   * Коды валют:
   *
   * * `RUR` — российский рубль.
   * * `UAH` — украинская гривна.
   * * `BYR` — белорусский рубль.
   * * `KZT` — казахстанский тенге.
   * * `UZS` — узбекский сум.
   */
  GoodsStatsCurrencyType: {
    /**
     * российский рубль
     */
    Rur: "RUR",
    Usd: "USD",
    Eur: "EUR",
    /**
     * украинская гривна
     */
    Uah: "UAH",
    Aud: "AUD",
    Gbp: "GBP",
    /**
     * белорусский рубль
     */
    Byr: "BYR",
    Byn: "BYN",
    Dkk: "DKK",
    Isk: "ISK",
    /**
     * казахстанский тенге
     */
    Kzt: "KZT",
    Cad: "CAD",
    Cny: "CNY",
    Nok: "NOK",
    Xdr: "XDR",
    Sgd: "SGD",
    Try: "TRY",
    Sek: "SEK",
    Chf: "CHF",
    Jpy: "JPY",
    Azn: "AZN",
    All: "ALL",
    Dzd: "DZD",
    Aoa: "AOA",
    Ars: "ARS",
    Amd: "AMD",
    Afn: "AFN",
    Bhd: "BHD",
    Bgn: "BGN",
    Bob: "BOB",
    Bwp: "BWP",
    Bnd: "BND",
    Brl: "BRL",
    Bif: "BIF",
    Huf: "HUF",
    Vef: "VEF",
    Kpw: "KPW",
    Vnd: "VND",
    Gmd: "GMD",
    Ghs: "GHS",
    Gnf: "GNF",
    Hkd: "HKD",
    Gel: "GEL",
    Aed: "AED",
    Egp: "EGP",
    Zmk: "ZMK",
    Ils: "ILS",
    Inr: "INR",
    Idr: "IDR",
    Jod: "JOD",
    Iqd: "IQD",
    Irr: "IRR",
    Yer: "YER",
    Qar: "QAR",
    Kes: "KES",
    Kgs: "KGS",
    Cop: "COP",
    Cdf: "CDF",
    Crc: "CRC",
    Kwd: "KWD",
    Cup: "CUP",
    Lak: "LAK",
    Lvl: "LVL",
    Sll: "SLL",
    Lbp: "LBP",
    Lyd: "LYD",
    Szl: "SZL",
    Ltl: "LTL",
    Mur: "MUR",
    Mro: "MRO",
    Mkd: "MKD",
    Mwk: "MWK",
    Mga: "MGA",
    Myr: "MYR",
    Mad: "MAD",
    Mxn: "MXN",
    Mzn: "MZN",
    Mdl: "MDL",
    Mnt: "MNT",
    Npr: "NPR",
    Ngn: "NGN",
    Nio: "NIO",
    Nzd: "NZD",
    Omr: "OMR",
    Pkr: "PKR",
    Pyg: "PYG",
    Pen: "PEN",
    Pln: "PLN",
    Khr: "KHR",
    Sar: "SAR",
    Ron: "RON",
    Scr: "SCR",
    Syp: "SYP",
    Skk: "SKK",
    Sos: "SOS",
    Sdg: "SDG",
    Srd: "SRD",
    Tjs: "TJS",
    Thb: "THB",
    Twd: "TWD",
    Bdt: "BDT",
    Tzs: "TZS",
    Tnd: "TND",
    Tmm: "TMM",
    Ugx: "UGX",
    /**
     * узбекский сум.
     */
    Uzs: "UZS",
    Uyu: "UYU",
    Php: "PHP",
    Djf: "DJF",
    Xaf: "XAF",
    Xof: "XOF",
    Hrk: "HRK",
    Czk: "CZK",
    Clp: "CLP",
    Lkr: "LKR",
    Eek: "EEK",
    Etb: "ETB",
    Rsd: "RSD",
    Zar: "ZAR",
    Krw: "KRW",
    Nad: "NAD",
    Tl: "TL",
    Ue: "UE",
  },
  /**
   * Услуга Маркета или дополнительный тариф к услуге размещения:
   *
   * * `AGENCY_COMMISSION` — прием платежа покупателя.
   *
   * * `PAYMENT_TRANSFER` — перевод платежа покупателя.
   *
   * * `STORAGE` — хранение товара на складе Маркета в течение суток.
   *
   * * `SURPLUS` — хранение излишков на складе Маркета.
   *
   * * `WITHDRAW` — вывоз товара со склада Маркета.
   *
   * * `FEE` — размещение товара на Маркете.
   *
   * * `DELIVERY_TO_CUSTOMER` — доставка покупателю.
   *
   * * `CROSSREGIONAL_DELIVERY` — доставка в федеральный округ, город или населенный пункт.
   *
   * * `CROSSREGIONAL_DELIVERY_RETURN` — доставка невыкупов и возвратов.
   *
   * * `DISPOSAL` — утилизация.
   *
   * * `SORTING_CENTER_STORAGE` — хранение невыкупов и возвратов.
   *
   * * `EXPRESS_DELIVERY` — экспресс-доставка покупателю.
   *
   * * `FF_XDOC_SUPPLY_BOX` — поставка товара через транзитный склад (за короб).
   *
   * * `FF_XDOC_SUPPLY_PALLET` — поставка товара через транзитный склад (за палету).
   *
   * * `SORTING` — обработка заказа.
   *
   * * `MIDDLE_MILE` — средняя миля.
   *
   * * `RETURN_PROCESSING` — обработка невыкупов и возвратов.
   *
   * * `EXPRESS_CANCELLED_BY_PARTNER` — отмена заказа с экспресс-доставкой.
   *
   * * `CROSSBORDER_DELIVERY` — доставка из-за рубежа.
   *
   * * `INTAKE_SORTING_BULKY_CARGO` — сортировка заказов с крупногабаритными товарами, которые Маркет забрал со склада продавца.
   *
   * * `INTAKE_SORTING_SMALL_GOODS` — сортировка заказов с малогабаритными товарами, которые Маркет забрал со склада продавца.
   *
   * * `INTAKE_SORTING_DAILY` — организация забора заказов со склада продавца.
   *
   * * `FF_STORAGE_BILLING` — хранение товаров на складе.
   *
   * * `CANCELLED_ORDER_FEE_QI` — отмена заказа по вине продавца.
   *
   * * `LATE_ORDER_EXECUTION_FEE_QI` — несвоевременная отгрузка или доставка.
   *
   * * `VOLUME_STORAGE` — стоимость хранения товара на складе — из расчёта за один кубический метр в сутки.
   *
   * * `GOODS_ACCEPTANCE` — окончательная приемка товара на складе.
   *
   * * `CARGO_ACCEPTANCE` — первичная приемка товара на складе.
   *
   * * `ORDER_PROCESSING` — обработка заказа.
   *
   * * `WITHDRAW_EXTERNAL` — отгрузка на внешний маркетплейс.
   *
   * * `ITEM_BOOKING` — бронирование товара.
   *
   * Подробнее об услугах Маркета читайте [в Справке Маркета для продавцов](https://yandex.ru/support/marketplace/introduction/rates/index.html).
   */
  GoodsStatsTariffType: {
    /**
     * прием платежа покупателя.
     */
    AgencyCommission: "AGENCY_COMMISSION",
    /**
     * перевод платежа покупателя.
     */
    PaymentTransfer: "PAYMENT_TRANSFER",
    /**
     * хранение товара на складе Маркета в течение суток.
     */
    Storage: "STORAGE",
    /**
     * вывоз товара со склада Маркета.
     */
    Withdraw: "WITHDRAW",
    /**
     * хранение излишков на складе Маркета.
     */
    Surplus: "SURPLUS",
    /**
     * размещение товара на Маркете.
     */
    Fee: "FEE",
    /**
     * доставка покупателю.
     */
    DeliveryToCustomer: "DELIVERY_TO_CUSTOMER",
    /**
     * доставка в федеральный округ, город или населенный пункт.
     */
    CrossregionalDelivery: "CROSSREGIONAL_DELIVERY",
    /**
     * доставка невыкупов и возвратов.
     */
    CrossregionalDeliveryReturn: "CROSSREGIONAL_DELIVERY_RETURN",
    /**
     * утилизация.
     */
    Disposal: "DISPOSAL",
    /**
     * хранение невыкупов и возвратов.
     */
    SortingCenterStorage: "SORTING_CENTER_STORAGE",
    /**
     * экспресс-доставка покупателю.
     */
    ExpressDelivery: "EXPRESS_DELIVERY",
    /**
     * поставка товара через транзитный склад (за короб).
     */
    FfXdocSupplyBox: "FF_XDOC_SUPPLY_BOX",
    /**
     * поставка товара через транзитный склад (за палету).
     */
    FfXdocSupplyPallet: "FF_XDOC_SUPPLY_PALLET",
    /**
     * обработка заказа.
     */
    Sorting: "SORTING",
    /**
     * средняя миля.
     */
    MiddleMile: "MIDDLE_MILE",
    /**
     * обработка невыкупов и возвратов.
     */
    ReturnProcessing: "RETURN_PROCESSING",
    /**
     * отмена заказа с экспресс-доставкой.
     */
    ExpressCancelledByPartner: "EXPRESS_CANCELLED_BY_PARTNER",
    /**
     * доставка из-за рубежа.
     */
    CrossborderDelivery: "CROSSBORDER_DELIVERY",
    /**
     * сортировка заказов с крупногабаритными товарами, которые Маркет забрал со склада продавца.
     */
    IntakeSortingBulkyCargo: "INTAKE_SORTING_BULKY_CARGO",
    /**
     * сортировка заказов с малогабаритными товарами, которые Маркет забрал со склада продавца.
     */
    IntakeSortingSmallGoods: "INTAKE_SORTING_SMALL_GOODS",
    /**
     * организация забора заказов со склада продавца.
     */
    IntakeSortingDaily: "INTAKE_SORTING_DAILY",
    /**
     * хранение товаров на складе.
     */
    FfStorageBilling: "FF_STORAGE_BILLING",
    /**
     * отмена заказа по вине продавца.
     */
    CancelledOrderFeeQi: "CANCELLED_ORDER_FEE_QI",
    /**
     * несвоевременная отгрузка или доставка.
     */
    LateOrderExecutionFeeQi: "LATE_ORDER_EXECUTION_FEE_QI",
    /**
     * стоимость хранения товара на складе — из расчёта за один кубический метр в сутки.
     */
    VolumeStorage: "VOLUME_STORAGE",
    /**
     * окончательная приемка товара на складе.
     */
    GoodsAcceptance: "GOODS_ACCEPTANCE",
    /**
     * первичная приемка товара на складе.
     */
    CargoAcceptance: "CARGO_ACCEPTANCE",
    /**
     * обработка заказа.
     */
    OrderProcessing: "ORDER_PROCESSING",
    /**
     * отгрузка на внешний маркетплейс.
     */
    WithdrawExternal: "WITHDRAW_EXTERNAL",
    /**
     * бронирование товара.
     */
    ItemBooking: "ITEM_BOOKING",
  },
  /**
   * Тип остатков товаров на складе:
   *
   * * `AVAILABLE` (соответствует типу «Доступный к заказу» в отчете «Остатки на складе» в кабинете продавца на Маркете) — товар, доступный для продажи.
   *
   * * `DEFECT` (соответствует типу «Брак») — товар с браком.
   *
   * * `EXPIRED` (соответствует типу «Просрочен») — товар с истекшим сроком годности.
   *
   * * `FIT` (соответствует типу «Годный») — товар, который доступен для продажи или уже зарезервирован.
   *
   * * `FREEZE` — товар, который зарезервирован для заказов.
   *
   * * `QUARANTINE` (соответствует типу «Карантин») — товар, временно недоступный для продажи (например, товар перемещают из одного помещения склада в другое).
   *
   * * `UTILIZATION` — товар, который будет утилизирован.
   */
  GoodsStatsWarehouseStockType: {
    /**
     * (соответствует типу «Годный») — товар, который доступен для продажи или уже зарезервирован.
     */
    Fit: "FIT",
    /**
     * товар, который зарезервирован для заказов.
     */
    Freeze: "FREEZE",
    /**
     * (соответствует типу «Доступный к заказу» в отчете «Остатки на складе» в кабинете продавца на Маркете) — товар, доступный для продажи.
     */
    Available: "AVAILABLE",
    /**
     * (соответствует типу «Карантин») — товар, временно недоступный для продажи (например, товар перемещают из одного помещения склада в другое).
     */
    Quarantine: "QUARANTINE",
    /**
     * товар, который будет утилизирован.
     */
    Utilization: "UTILIZATION",
    /**
     * (соответствует типу «Брак») — товар с браком.
     */
    Defect: "DEFECT",
    /**
     * (соответствует типу «Просрочен») — товар с истекшим сроком годности.
     */
    Expired: "EXPIRED",
  },
  /**
   * Тип ответа.
   * Возможные значения:
   * * `OK` — ошибок нет.
   * * `ERROR` — при обработке запроса произошла ошибка.
   */
  HiddenOffersApiResponseStatusType: {
    /**
     * ошибок нет
     */
    Ok: "OK",
    /**
     * при обработке запроса произошла ошибка.
     */
    Error: "ERROR",
  },
  /**
   * Тип ответа.
   * Возможные значения:
   * * `OK` — ошибок нет.
   * * `ERROR` — при обработке запроса произошла ошибка.
   */
  LogisticPointsApiResponseStatusType: {
    /**
     * ошибок нет
     */
    Ok: "OK",
    /**
     * при обработке запроса произошла ошибка.
     */
    Error: "ERROR",
  },
  /**
   * День недели:
   *
   * * `MONDAY` — понедельник.
   * * `TUESDAY` — вторник.
   * * `WEDNESDAY` — среда.
   * * `THURSDAY` — четверг.
   * * `FRIDAY` — пятница.
   * * `SATURDAY` — суббота.
   * * `SUNDAY` — воскресенье.
   */
  LogisticPointsDayOfWeekType: {
    /**
     * понедельник
     */
    Monday: "MONDAY",
    /**
     * вторник
     */
    Tuesday: "TUESDAY",
    /**
     * среда
     */
    Wednesday: "WEDNESDAY",
    /**
     * четверг
     */
    Thursday: "THURSDAY",
    /**
     * пятница
     */
    Friday: "FRIDAY",
    /**
     * суббота
     */
    Saturday: "SATURDAY",
    /**
     * воскресенье.
     */
    Sunday: "SUNDAY",
  },
  /**
   * Тип пункта выдачи:
   *
   * * `MARKET` — пункт выдачи Маркета.
   */
  LogisticPointsLogisticPointBrandType: {
    /**
     * пункт выдачи Маркета.
     */
    Market: "MARKET",
  },
  /**
   * Свойство пункта выдачи:
   *
   * * `RETURN_ALLOWED` — пункт выдачи принимает возвраты.
   *
   * Проверка ограничений
   *
   * Признак не учитывает ограничения ПВЗ на прием различных товаров в возврате.
   * Для проверки по конкретному набору товаров используйте метод [POST v1/campaigns/{campaignId}/return-delivery-options](../../reference/delivery-options/getReturnDeliveryOptions.md).
   */
  LogisticPointsLogisticPointFeatureType: {
    /**
     * пункт выдачи принимает возвраты.
     */
    ReturnAllowed: "RETURN_ALLOWED",
  },
  /**
   * Тип ответа.
   * Возможные значения:
   * * `OK` — ошибок нет.
   * * `ERROR` — при обработке запроса произошла ошибка.
   */
  OffersApiResponseStatusType: {
    /**
     * ошибок нет
     */
    Ok: "OK",
    /**
     * при обработке запроса произошла ошибка.
     */
    Error: "ERROR",
  },
  /**
   * Коды валют:
   *
   * * `RUR` — российский рубль.
   * * `UAH` — украинская гривна.
   * * `BYR` — белорусский рубль.
   * * `KZT` — казахстанский тенге.
   * * `UZS` — узбекский сум.
   */
  OffersCurrencyType: {
    /**
     * российский рубль
     */
    Rur: "RUR",
    Usd: "USD",
    Eur: "EUR",
    /**
     * украинская гривна
     */
    Uah: "UAH",
    Aud: "AUD",
    Gbp: "GBP",
    /**
     * белорусский рубль
     */
    Byr: "BYR",
    Byn: "BYN",
    Dkk: "DKK",
    Isk: "ISK",
    /**
     * казахстанский тенге
     */
    Kzt: "KZT",
    Cad: "CAD",
    Cny: "CNY",
    Nok: "NOK",
    Xdr: "XDR",
    Sgd: "SGD",
    Try: "TRY",
    Sek: "SEK",
    Chf: "CHF",
    Jpy: "JPY",
    Azn: "AZN",
    All: "ALL",
    Dzd: "DZD",
    Aoa: "AOA",
    Ars: "ARS",
    Amd: "AMD",
    Afn: "AFN",
    Bhd: "BHD",
    Bgn: "BGN",
    Bob: "BOB",
    Bwp: "BWP",
    Bnd: "BND",
    Brl: "BRL",
    Bif: "BIF",
    Huf: "HUF",
    Vef: "VEF",
    Kpw: "KPW",
    Vnd: "VND",
    Gmd: "GMD",
    Ghs: "GHS",
    Gnf: "GNF",
    Hkd: "HKD",
    Gel: "GEL",
    Aed: "AED",
    Egp: "EGP",
    Zmk: "ZMK",
    Ils: "ILS",
    Inr: "INR",
    Idr: "IDR",
    Jod: "JOD",
    Iqd: "IQD",
    Irr: "IRR",
    Yer: "YER",
    Qar: "QAR",
    Kes: "KES",
    Kgs: "KGS",
    Cop: "COP",
    Cdf: "CDF",
    Crc: "CRC",
    Kwd: "KWD",
    Cup: "CUP",
    Lak: "LAK",
    Lvl: "LVL",
    Sll: "SLL",
    Lbp: "LBP",
    Lyd: "LYD",
    Szl: "SZL",
    Ltl: "LTL",
    Mur: "MUR",
    Mro: "MRO",
    Mkd: "MKD",
    Mwk: "MWK",
    Mga: "MGA",
    Myr: "MYR",
    Mad: "MAD",
    Mxn: "MXN",
    Mzn: "MZN",
    Mdl: "MDL",
    Mnt: "MNT",
    Npr: "NPR",
    Ngn: "NGN",
    Nio: "NIO",
    Nzd: "NZD",
    Omr: "OMR",
    Pkr: "PKR",
    Pyg: "PYG",
    Pen: "PEN",
    Pln: "PLN",
    Khr: "KHR",
    Sar: "SAR",
    Ron: "RON",
    Scr: "SCR",
    Syp: "SYP",
    Skk: "SKK",
    Sos: "SOS",
    Sdg: "SDG",
    Srd: "SRD",
    Tjs: "TJS",
    Thb: "THB",
    Twd: "TWD",
    Bdt: "BDT",
    Tzs: "TZS",
    Tnd: "TND",
    Tmm: "TMM",
    Ugx: "UGX",
    /**
     * узбекский сум.
     */
    Uzs: "UZS",
    Uyu: "UYU",
    Php: "PHP",
    Djf: "DJF",
    Xaf: "XAF",
    Xof: "XOF",
    Hrk: "HRK",
    Czk: "CZK",
    Clp: "CLP",
    Lkr: "LKR",
    Eek: "EEK",
    Etb: "ETB",
    Rsd: "RSD",
    Zar: "ZAR",
    Krw: "KRW",
    Nad: "NAD",
    Tl: "TL",
    Ue: "UE",
  },
  /**
   * Статус товара:
   *
   * * `PUBLISHED` — Готов к продаже.
   * * `CHECKING` — На проверке.
   * * `DISABLED_BY_PARTNER` — Скрыт вами.
   * * `REJECTED_BY_MARKET` — Отклонен.
   * * `DISABLED_AUTOMATICALLY` — Исправьте ошибки.
   * * `CREATING_CARD` — Создается карточка.
   * * `NO_CARD` — Нужна карточка.
   * * `NO_STOCKS` — Нет на складе.
   * * `ARCHIVED` — В архиве.
   * * `READY_FOR_PUBLICATION` — Магазин в процессе подключения.
   *
   * [Что обозначает каждый из статусов](https://yandex.ru/support/marketplace/assortment/add/statuses.html)
   */
  OffersOfferCampaignStatusType: {
    /**
     * Готов к продаже
     */
    Published: "PUBLISHED",
    /**
     * На проверке
     */
    Checking: "CHECKING",
    /**
     * Скрыт вами
     */
    DisabledByPartner: "DISABLED_BY_PARTNER",
    /**
     * Исправьте ошибки
     */
    DisabledAutomatically: "DISABLED_AUTOMATICALLY",
    /**
     * Отклонен
     */
    RejectedByMarket: "REJECTED_BY_MARKET",
    /**
     * Создается карточка
     */
    CreatingCard: "CREATING_CARD",
    /**
     * Нужна карточка
     */
    NoCard: "NO_CARD",
    /**
     * Нет на складе
     */
    NoStocks: "NO_STOCKS",
    /**
     * В архиве
     */
    Archived: "ARCHIVED",
    /**
     * Магазин в процессе подключения.
     */
    ReadyForPublication: "READY_FOR_PUBLICATION",
  },
  /**
   * Привлекательность цены:
   *
   * * `OPTIMAL` — привлекательная.
   * * `AVERAGE` — умеренная.
   * * `LOW` — непривлекательная.
   */
  OffersPriceCompetitivenessType: {
    /**
     * привлекательная
     */
    Optimal: "OPTIMAL",
    /**
     * умеренная
     */
    Average: "AVERAGE",
    /**
     * непривлекательная.
     */
    Low: "LOW",
  },
  /**
   * Тип ответа.
   * Возможные значения:
   * * `OK` — ошибок нет.
   * * `ERROR` — при обработке запроса произошла ошибка.
   */
  OperationsApiResponseStatusType: {
    /**
     * ошибок нет
     */
    Ok: "OK",
    /**
     * при обработке запроса произошла ошибка.
     */
    Error: "ERROR",
  },
  /**
   * Статус выполнения операции:
   *
   * * `IN_PROGRESS` — выполняется.
   *
   * * `DONE` — успешно завершена.
   *
   * * `FAILED` — завершена с ошибкой.
   */
  OperationsOperationStatusType: {
    /**
     * выполняется.
     */
    InProgress: "IN_PROGRESS",
    /**
     * успешно завершена.
     */
    Done: "DONE",
    /**
     * завершена с ошибкой.
     */
    Failed: "FAILED",
  },
  /**
   * Тип операции:
   *
   * * `ORDER_RECIPIENT_UPDATE` — изменение данных получателя.
   *
   * * `ORDER_DELIVERY_INTERVAL_UPDATE` — изменение интервала дат доставки.
   *
   * * `ORDER_STATUS_UPDATE` — обновление статуса заказа для его отмены.
   *
   * * `RETURN_CANCELLATION` — отмена возврата.
   */
  OperationsOperationType: {
    /**
     * изменение данных получателя.
     */
    OrderRecipientUpdate: "ORDER_RECIPIENT_UPDATE",
    /**
     * изменение интервала дат доставки.
     */
    OrderDeliveryIntervalUpdate: "ORDER_DELIVERY_INTERVAL_UPDATE",
    /**
     * обновление статуса заказа для его отмены.
     */
    OrderStatusUpdate: "ORDER_STATUS_UPDATE",
    /**
     * отмена возврата.
     */
    ReturnCancellation: "RETURN_CANCELLATION",
  },
  /**
   * Тип ответа.
   * Возможные значения:
   * * `OK` — ошибок нет.
   * * `ERROR` — при обработке запроса произошла ошибка.
   */
  OrderBusinessInformationApiResponseStatusType: {
    /**
     * ошибок нет
     */
    Ok: "OK",
    /**
     * при обработке запроса произошла ошибка.
     */
    Error: "ERROR",
  },
  /**
   * Статус документа:
   *
   * * `READY` — готов.
   * * `NOT_READY` — не готов.
   */
  OrderBusinessInformationOrderDocumentStatusType: {
    /**
     * готов
     */
    Ready: "READY",
    /**
     * не готов.
     */
    NotReady: "NOT_READY",
  },
  /**
   * Тип ответа.
   * Возможные значения:
   * * `OK` — ошибок нет.
   * * `ERROR` — при обработке запроса произошла ошибка.
   */
  OrderDeliveryApiResponseStatusType: {
    /**
     * ошибок нет
     */
    Ok: "OK",
    /**
     * при обработке запроса произошла ошибка.
     */
    Error: "ERROR",
  },
  /**
   * Статус проверки кода подтверждения:
   *
   * * `ACCEPTED` — код верный.
   * * `REJECTED` — код неверный.
   * * `NEED_UPDATE` — Маркет отправит новый код. Значение возвращается, если превышено количество попыток отправки кода.
   */
  OrderDeliveryEacVerificationStatusType: {
    /**
     * код верный
     */
    Accepted: "ACCEPTED",
    /**
     * код неверный
     */
    Rejected: "REJECTED",
    /**
     * Маркет отправит новый код. Значение возвращается, если превышено количество попыток отправки кода.
     */
    NeedUpdate: "NEED_UPDATE",
  },
  /**
   * Тип покупателя:
   *
   * * `PERSON` — физическое лицо.
   *
   * * `BUSINESS` — организация.
   */
  OrderDeliveryOrderBuyerType: {
    /**
     * физическое лицо.
     */
    Person: "PERSON",
    /**
     * организация.
     */
    Business: "BUSINESS",
  },
  /**
   * Причина переноса доставки заказа. Возможные причины изменения даты:
   * - ```USER_MOVED_DELIVERY_DATES``` — покупатель попросил изменить дату или вы договорились привезти ему заказ раньше изначальной даты. Кроме этого указывается для подтверждения даты доставки товаров на заказ с долгой (31-60 дней) доставкой.
   * - ```PARTNER_MOVED_DELIVERY_DATES``` — магазин не может доставить заказ в срок.
   */
  OrderDeliveryOrderDeliveryDateReasonType: {
    /**
     * `` — покупатель попросил изменить дату или вы договорились привезти ему заказ раньше изначальной даты. Кроме этого указывается для подтверждения даты доставки товаров на заказ с долгой (31-60 дней) доставкой. - ``
     */
    UserMovedDeliveryDates: "USER_MOVED_DELIVERY_DATES",
    /**
     * `` — магазин не может доставить заказ в срок.
     */
    PartnerMovedDeliveryDates: "PARTNER_MOVED_DELIVERY_DATES",
  },
  /**
   * Тип ответа.
   * Возможные значения:
   * * `OK` — ошибок нет.
   * * `ERROR` — при обработке запроса произошла ошибка.
   */
  OrderLabelsApiResponseStatusType: {
    /**
     * ошибок нет
     */
    Ok: "OK",
    /**
     * при обработке запроса произошла ошибка.
     */
    Error: "ERROR",
  },
  /**
   * Размещение ярлыков на странице PDF-файла:
   *
   * * `A9_HORIZONTALLY` — ярлык размером 58 × 40 мм без полей, близок к формату :no-translate[A9].
   *
   * Пример ярлыка для продавцов Маркета
   *
   * ![Изображение горизонтального ярлыка формата :no-translate[A9] для продавцов Маркета](../../_images/labels/label-A9-horizontally.png)
   *
   * Пример ярлыка для продавцов Market Yandex Go
   *
   * ![Изображение горизонтального ярлыка формата A9 для продавцов Market Yandex Go](../../_images/labels/label-A9-horizontally-uz.png)
   *
   * * `A9` — ярлык размером 40 × 58 мм без полей, близок к формату A9.
   *
   * Пример ярлыка для продавцов Маркета
   *
   * ![Изображение вертикального ярлыка формата :no-translate[A9] для продавцов Маркета](../../_images/labels/label-A9.png)
   *
   * Пример ярлыка для продавцов Market Yandex Go
   *
   * ![Изображение вертикального ярлыка формата :no-translate[A9] для продавцов Market Yandex Go](../../_images/labels/label-A9-uz.png)
   *
   * * `A7` — ярлык размером 75 × 120 мм (80,4 × 125,6 мм с учетом полей), близок к формату :no-translate[A7].
   *
   * Пример ярлыка для продавцов Маркета
   *
   * ![Изображение ярлыка формата A7 для продавцов Маркета](../../_images/labels/label-A7.jpg)
   *
   * Пример ярлыка для продавцов Market Yandex Go
   *
   * ![Изображение ярлыка формата :no-translate[A7] для продавцов Market Yandex Go](../../_images/labels/label-A7-uz.png)
   *
   * * `A4` — на листе A4 располагается ярлык того формата, который выбран в кабинете продавца на Маркете — перейдите на страницу **Заказы** → **Заказы и отгрузки** → на вкладке нужной модели работы нажмите кнопку **Формат ярлыков**.
   */
  OrderLabelsPageFormatType: {
    /**
     * ярлык размером 58 × 40 мм без полей, близок к формату :no-translate[A9].
     */
    A9Horizontally: "A9_HORIZONTALLY",
    /**
     * ярлык размером 40 × 58 мм без полей, близок к формату A9.
     */
    A9: "A9",
    /**
     * ярлык размером 75 × 120 мм (80,4 × 125,6 мм с учетом полей), близок к формату :no-translate[A7].
     */
    A7: "A7",
    /**
     * на листе A4 располагается ярлык того формата, который выбран в кабинете продавца на Маркете — перейдите на страницу **Заказы** → **Заказы и отгрузки** → на вкладке нужной модели работы нажмите кнопку **Формат ярлыков**.
     */
    A4: "A4",
  },
  /**
   * Тип ответа.
   * Возможные значения:
   * * `OK` — ошибок нет.
   * * `ERROR` — при обработке запроса произошла ошибка.
   */
  OrdersApiResponseStatusType: {
    /**
     * ошибок нет
     */
    Ok: "OK",
    /**
     * при обработке запроса произошла ошибка.
     */
    Error: "ERROR",
  },
  /**
   * Статус проверки кода маркировки в системе :no-translate[«Честный ЗНАК»]:
   *
   * * `FAILED` — не удалось проверить код.
   *
   * Повторите попытку позже или удалите код маркировки.
   *
   * * `IN_PROGRESS` — в процессе проверки.
   *
   * * `NOT_ON_VALIDATION` — код маркировки не отправлен на проверку.
   *
   * * `OK` — проверка успешно пройдена.
   *
   * * `INVALID` — проверка не пройдена. Продажа товара с этим кодом запрещена.
   */
  OrdersCisStatusType: {
    /**
     * проверка успешно пройдена.
     */
    Ok: "OK",
    /**
     * не удалось проверить код.
     */
    Failed: "FAILED",
    /**
     * в процессе проверки.
     */
    InProgress: "IN_PROGRESS",
    /**
     * проверка не пройдена. Продажа товара с этим кодом запрещена.
     */
    Invalid: "INVALID",
    /**
     * код маркировки не отправлен на проверку.
     */
    NotOnValidation: "NOT_ON_VALIDATION",
  },
  /**
   * Детализация ошибки при проверке кода маркировки в системе :no-translate[«Честный ЗНАК»]:
   *
   * * `WRONG_OWNER_INN` — проверка не пройдена. ИНН владельца кода отличается от ИНН продавца.
   *
   * * `CIS_VALIDATION_ERROR` — проверка не пройдена.
   *
   * * `CIS_GTIN_NOT_FOUND` — код маркировки не содержит [GTIN](:no-translate[*gtin]).
   *
   * * `CIS_SERIAL_NUMBER_NOT_FOUND` — код маркировки не содержит серийный номер.
   *
   * * `INVALID_SYMBOLS_FOUND` — код маркировки содержит недопустимые символы.
   *
   * * `CRYPTO_TAIL_FORMAT_MISMATCH_CIS_TYPE` — формат криптоподписи не соответствует типу кода маркировки.
   *
   * * `INVALID_CRYPTO_TAIL` — криптоподпись не валидна.
   *
   * * `INVALID_CRYPTO_KEY` — криптоключ не валиден.
   *
   * * `VERIFICATION_FAILED_IN_EMITTER_COUNTRY` — код маркировки не прошел верификацию в стране эмитента.
   *
   * * `UNSUPPORTED_AI_FOUND` — найденные в коде маркировки AI не поддерживаются.
   *
   * * `CIS_NOT_FOUND_IN_GIS_MT` — код маркировки не найден в :no-translate[ГИС МТ].
   *
   * * `NOT_PLACED_ON_MARKET` — код маркировки не введен в оборот.
   *
   * * `NOT_PRINTED_ON_PACKAGE` — код маркировки не нанесен на упаковку.
   *
   * * `EXPIRED_ITEM` — у маркированного товара истек срок годности.
   *
   * * `SALE_BLOCKED_BY_OGB` — розничная продажа продукции заблокирована по решению ОГВ.
   *
   * * `ITEM_SOLD` — маркированный товар был продан.
   *
   * Возвращается только для статуса `INVALID`.
   */
  OrdersCisSubstatusType: {
    /**
     * проверка не пройдена. ИНН владельца кода отличается от ИНН продавца.
     */
    WrongOwnerInn: "WRONG_OWNER_INN",
    /**
     * проверка не пройдена.
     */
    CisValidationError: "CIS_VALIDATION_ERROR",
    /**
     * код маркировки не содержит [GTIN](:no-translate[*gtin]).
     */
    CisGtinNotFound: "CIS_GTIN_NOT_FOUND",
    /**
     * код маркировки не содержит серийный номер.
     */
    CisSerialNumberNotFound: "CIS_SERIAL_NUMBER_NOT_FOUND",
    /**
     * код маркировки содержит недопустимые символы.
     */
    InvalidSymbolsFound: "INVALID_SYMBOLS_FOUND",
    /**
     * формат криптоподписи не соответствует типу кода маркировки.
     */
    CryptoTailFormatMismatchCisType: "CRYPTO_TAIL_FORMAT_MISMATCH_CIS_TYPE",
    /**
     * криптоподпись не валидна.
     */
    InvalidCryptoTail: "INVALID_CRYPTO_TAIL",
    /**
     * криптоключ не валиден.
     */
    InvalidCryptoKey: "INVALID_CRYPTO_KEY",
    /**
     * код маркировки не прошел верификацию в стране эмитента.
     */
    VerificationFailedInEmitterCountry:
      "VERIFICATION_FAILED_IN_EMITTER_COUNTRY",
    /**
     * найденные в коде маркировки AI не поддерживаются.
     */
    UnsupportedAiFound: "UNSUPPORTED_AI_FOUND",
    /**
     * код маркировки не найден в :no-translate[ГИС МТ].
     */
    CisNotFoundInGisMt: "CIS_NOT_FOUND_IN_GIS_MT",
    /**
     * код маркировки не введен в оборот.
     */
    NotPlacedOnMarket: "NOT_PLACED_ON_MARKET",
    /**
     * код маркировки не нанесен на упаковку.
     */
    NotPrintedOnPackage: "NOT_PRINTED_ON_PACKAGE",
    /**
     * у маркированного товара истек срок годности.
     */
    ExpiredItem: "EXPIRED_ITEM",
    /**
     * розничная продажа продукции заблокирована по решению ОГВ.
     */
    SaleBlockedByOgb: "SALE_BLOCKED_BY_OGB",
    /**
     * маркированный товар был продан.
     */
    ItemSold: "ITEM_SOLD",
  },
  /**
   * Требования к упаковке:
   *
   * * `WHITELABEL` — коробка.
   *
   * * `BRAND` — [брендированная упаковка](*brand-package) магазина.
   *
   * Если не передать `packageType`, заказ приедет в коробке или без упаковки.
   */
  OrdersCreateOrderPackageType: {
    /**
     * коробка.
     */
    Whitelabel: "WHITELABEL",
    /**
     * [брендированная упаковка](*brand-package) магазина.
     */
    Brand: "BRAND",
  },
  /**
   * Коды валют:
   *
   * * `RUR` — российский рубль.
   * * `UAH` — украинская гривна.
   * * `BYR` — белорусский рубль.
   * * `KZT` — казахстанский тенге.
   * * `UZS` — узбекский сум.
   */
  OrdersCurrencyType: {
    /**
     * российский рубль
     */
    Rur: "RUR",
    Usd: "USD",
    Eur: "EUR",
    /**
     * украинская гривна
     */
    Uah: "UAH",
    Aud: "AUD",
    Gbp: "GBP",
    /**
     * белорусский рубль
     */
    Byr: "BYR",
    Byn: "BYN",
    Dkk: "DKK",
    Isk: "ISK",
    /**
     * казахстанский тенге
     */
    Kzt: "KZT",
    Cad: "CAD",
    Cny: "CNY",
    Nok: "NOK",
    Xdr: "XDR",
    Sgd: "SGD",
    Try: "TRY",
    Sek: "SEK",
    Chf: "CHF",
    Jpy: "JPY",
    Azn: "AZN",
    All: "ALL",
    Dzd: "DZD",
    Aoa: "AOA",
    Ars: "ARS",
    Amd: "AMD",
    Afn: "AFN",
    Bhd: "BHD",
    Bgn: "BGN",
    Bob: "BOB",
    Bwp: "BWP",
    Bnd: "BND",
    Brl: "BRL",
    Bif: "BIF",
    Huf: "HUF",
    Vef: "VEF",
    Kpw: "KPW",
    Vnd: "VND",
    Gmd: "GMD",
    Ghs: "GHS",
    Gnf: "GNF",
    Hkd: "HKD",
    Gel: "GEL",
    Aed: "AED",
    Egp: "EGP",
    Zmk: "ZMK",
    Ils: "ILS",
    Inr: "INR",
    Idr: "IDR",
    Jod: "JOD",
    Iqd: "IQD",
    Irr: "IRR",
    Yer: "YER",
    Qar: "QAR",
    Kes: "KES",
    Kgs: "KGS",
    Cop: "COP",
    Cdf: "CDF",
    Crc: "CRC",
    Kwd: "KWD",
    Cup: "CUP",
    Lak: "LAK",
    Lvl: "LVL",
    Sll: "SLL",
    Lbp: "LBP",
    Lyd: "LYD",
    Szl: "SZL",
    Ltl: "LTL",
    Mur: "MUR",
    Mro: "MRO",
    Mkd: "MKD",
    Mwk: "MWK",
    Mga: "MGA",
    Myr: "MYR",
    Mad: "MAD",
    Mxn: "MXN",
    Mzn: "MZN",
    Mdl: "MDL",
    Mnt: "MNT",
    Npr: "NPR",
    Ngn: "NGN",
    Nio: "NIO",
    Nzd: "NZD",
    Omr: "OMR",
    Pkr: "PKR",
    Pyg: "PYG",
    Pen: "PEN",
    Pln: "PLN",
    Khr: "KHR",
    Sar: "SAR",
    Ron: "RON",
    Scr: "SCR",
    Syp: "SYP",
    Skk: "SKK",
    Sos: "SOS",
    Sdg: "SDG",
    Srd: "SRD",
    Tjs: "TJS",
    Thb: "THB",
    Twd: "TWD",
    Bdt: "BDT",
    Tzs: "TZS",
    Tnd: "TND",
    Tmm: "TMM",
    Ugx: "UGX",
    /**
     * узбекский сум.
     */
    Uzs: "UZS",
    Uyu: "UYU",
    Php: "PHP",
    Djf: "DJF",
    Xaf: "XAF",
    Xof: "XOF",
    Hrk: "HRK",
    Czk: "CZK",
    Clp: "CLP",
    Lkr: "LKR",
    Eek: "EEK",
    Etb: "ETB",
    Rsd: "RSD",
    Zar: "ZAR",
    Krw: "KRW",
    Nad: "NAD",
    Tl: "TL",
    Ue: "UE",
  },
  /**
   * Тип оплаты заказа:
   *
   * * `PREPAID` — оплата при оформлении заказа.
   */
  OrdersDeliveryPaymentType: {
    /**
     * оплата при оформлении заказа.
     */
    Prepaid: "PREPAID",
  },
  /**
   * Способ получения цифрового товара:
   *
   * * `EMAIL` — код активации по почте: покупатель получит письмо с кодом и инструкцией на почту.
   *
   * * `ACTIVATION_CODE` — код активации в заказе на Маркете: покупатель получит инструкцию и код в чате с магазином, а в списке заказов сможет скопировать код.
   *
   * * `STEAM_GIFT` — игры подарком в Steam: вы получите от покупателя ссылку формата https://s.team/p/m**-*** /******** на добавление в друзья. Перейдите по ссылке, добавьте покупателя в друзья и отправьте ему игру. В течение трех часов передайте Маркету статус, что заказ доставлен — через API или на странице заказа.
   *
   * * `CHAT` — игры и товары в чате с покупателем на Маркете: покупатель получит сертификат в чате с магазином. Передайте Маркету статус, что заказ доставлен — через API или на странице заказа.
   */
  OrdersDigitalGoodsDeliveryType: {
    /**
     * код активации по почте: покупатель получит письмо с кодом и инструкцией на почту.
     */
    Email: "EMAIL",
    /**
     * код активации в заказе на Маркете: покупатель получит инструкцию и код в чате с магазином, а в списке заказов сможет скопировать код.
     */
    ActivationCode: "ACTIVATION_CODE",
    /**
     * игры подарком в Steam: вы получите от покупателя ссылку формата https://s.team/p/m**-*** /******** на добавление в друзья. Перейдите по ссылке, добавьте покупателя в друзья и отправьте ему игру. В течение трех часов передайте Маркету статус, что заказ доставлен — через API или на странице заказа.
     */
    SteamGift: "STEAM_GIFT",
    /**
     * игры и товары в чате с покупателем на Маркете: покупатель получит сертификат в чате с магазином. Передайте Маркету статус, что заказ доставлен — через API или на странице заказа.
     */
    Chat: "CHAT",
  },
  /**
   * Тип операции:
   *
   * * `ORDER_RECIPIENT_UPDATE` — изменение данных получателя.
   *
   * * `ORDER_DELIVERY_INTERVAL_UPDATE` — изменение интервала дат доставки.
   *
   * * `ORDER_STATUS_UPDATE` — обновление статуса заказа для его отмены.
   *
   * * `RETURN_CANCELLATION` — отмена возврата.
   */
  OrdersOperationType: {
    /**
     * изменение данных получателя.
     */
    OrderRecipientUpdate: "ORDER_RECIPIENT_UPDATE",
    /**
     * изменение интервала дат доставки.
     */
    OrderDeliveryIntervalUpdate: "ORDER_DELIVERY_INTERVAL_UPDATE",
    /**
     * обновление статуса заказа для его отмены.
     */
    OrderStatusUpdate: "ORDER_STATUS_UPDATE",
    /**
     * отмена возврата.
     */
    ReturnCancellation: "RETURN_CANCELLATION",
  },
  /**
   * Тип покупателя:
   *
   * * `PERSON` — физическое лицо.
   *
   * * `BUSINESS` — организация.
   */
  OrdersOrderBuyerType: {
    /**
     * физическое лицо.
     */
    Person: "PERSON",
    /**
     * организация.
     */
    Business: "BUSINESS",
  },
  /**
   * Варианты причин, по которым заказ не может быть отменен.
   *
   * * `ORDER_DELIVERED` — заказ уже доставлен.
   * * `ORDER_IN_DELIVERY` — заказ уже у курьера.
   */
  OrdersOrderCancellationReasonType: {
    /**
     * заказ уже доставлен
     */
    OrderDelivered: "ORDER_DELIVERED",
    /**
     * заказ уже у курьера.
     */
    OrderInDelivery: "ORDER_IN_DELIVERY",
  },
  /**
   * Способ доставки:
   *
   * * `BUYER` — курьерская доставка покупателю.
   *
   * * `MARKET_BRANDED_OUTLET` — доставка в пункт выдачи заказов Маркета.
   *
   * * `SHOP_OUTLET` — доставка в пункт выдачи заказов магазина.
   *
   * * `UNKNOWN` — неизвестный тип.
   */
  OrdersOrderDeliveryDispatchType: {
    /**
     * неизвестный тип.
     */
    Unknown: "UNKNOWN",
    /**
     * курьерская доставка покупателю.
     */
    Buyer: "BUYER",
    /**
     * доставка в пункт выдачи заказов Маркета.
     */
    MarketBrandedOutlet: "MARKET_BRANDED_OUTLET",
    /**
     * доставка в пункт выдачи заказов магазина.
     */
    ShopOutlet: "SHOP_OUTLET",
  },
  /**
   * Тип кода подтверждения ЭАПП:
   *
   * * `MERCHANT_TO_COURIER` (временно не возвращается) — продавец передает код курьеру для получения невыкупа.
   *
   * * `COURIER_TO_MERCHANT` — курьер передает код продавцу для получения заказа.
   *
   * * `CHECKING_BY_MERCHANT` — продавец проверяет код на своей стороне.
   */
  OrdersOrderDeliveryEacType: {
    /**
     * (временно не возвращается) — продавец передает код курьеру для получения невыкупа.
     */
    MerchantToCourier: "MERCHANT_TO_COURIER",
    /**
     * курьер передает код продавцу для получения заказа.
     */
    CourierToMerchant: "COURIER_TO_MERCHANT",
    /**
     * продавец проверяет код на своей стороне.
     */
    CheckingByMerchant: "CHECKING_BY_MERCHANT",
  },
  /**
   * Тип сотрудничества со службой доставки в рамках конкретного заказа:
   *
   * * `SHOP` — магазин работает со службой доставки напрямую или доставляет заказы самостоятельно.
   *
   * * `YANDEX_MARKET` — магазин работает со службой доставки через Маркет.
   *
   * * `UNKNOWN` — неизвестный тип.
   */
  OrdersOrderDeliveryPartnerType: {
    /**
     * магазин работает со службой доставки напрямую или доставляет заказы самостоятельно.
     */
    Shop: "SHOP",
    /**
     * магазин работает со службой доставки через Маркет.
     */
    YandexMarket: "YANDEX_MARKET",
    /**
     * неизвестный тип.
     */
    Unknown: "UNKNOWN",
  },
  /**
   * Способ доставки заказа:
   *
   * * `DELIVERY` — курьерская доставка.
   *
   * * `PICKUP` — самовывоз.
   *
   * * `POST` — почта.
   *
   * * `DIGITAL` — для цифровых товаров.
   *
   * * `UNKNOWN` — неизвестный тип.
   */
  OrdersOrderDeliveryType: {
    /**
     * курьерская доставка.
     */
    Delivery: "DELIVERY",
    /**
     * самовывоз.
     */
    Pickup: "PICKUP",
    /**
     * почта.
     */
    Post: "POST",
    /**
     * для цифровых товаров.
     */
    Digital: "DIGITAL",
    /**
     * неизвестный тип.
     */
    Unknown: "UNKNOWN",
  },
  /**
   * Вид маркировки товара:
   *
   * * `CIS` — КИЗ, идентификатор единицы товара в системе [«Честный ЗНАК»](https://честныйзнак.рф/) или [«ASL BELGISI»](https://aslbelgisi.uz) (для продавцов Market Yandex Go). Обязателен для заполнения.
   *
   * * `CIS_OPTIONAL` — КИЗ, идентификатор единицы товара в системе [«Честный ЗНАК»](https://честныйзнак.рф/). Необязателен для заполнения, но в ближайшее время потребуется его передача.
   *
   * * `UIN` — УИН, уникальный идентификационный номер.
   *
   * * `RNPT` — РНПТ, регистрационный номер партии товара.
   *
   * * `GTD` — номер ГТД, грузовой таможенной декларации.
   */
  OrdersOrderItemInstanceType: {
    /**
     * КИЗ, идентификатор единицы товара в системе [«Честный ЗНАК»](https://честныйзнак.рф/) или [«ASL BELGISI»](https://aslbelgisi.uz) (для продавцов Market Yandex Go). Обязателен для заполнения.
     */
    Cis: "CIS",
    /**
     * КИЗ, идентификатор единицы товара в системе [«Честный ЗНАК»](https://честныйзнак.рф/). Необязателен для заполнения, но в ближайшее время потребуется его передача.
     */
    CisOptional: "CIS_OPTIONAL",
    /**
     * УИН, уникальный идентификационный номер.
     */
    Uin: "UIN",
    /**
     * РНПТ, регистрационный номер партии товара.
     */
    Rnpt: "RNPT",
    /**
     * номер ГТД, грузовой таможенной декларации.
     */
    Gtd: "GTD",
  },
  /**
   * Причина, почему обновился состав заказа:
   *
   * * `PARTNER_REQUESTED_REMOVE` — магазин удалил товар.
   * * `USER_REQUESTED_REMOVE` — покупатель попросил удалить товар.
   */
  OrdersOrderItemsModificationRequestReasonType: {
    /**
     * магазин удалил товар
     */
    PartnerRequestedRemove: "PARTNER_REQUESTED_REMOVE",
    /**
     * покупатель попросил удалить товар.
     */
    UserRequestedRemove: "USER_REQUESTED_REMOVE",
  },
  /**
   * Невыкупленный или возвращенный товар:
   *
   * * `REJECTED` — невыкупленный.
   *
   * * `RETURNED` — возвращенный.
   */
  OrdersOrderItemStatusType: {
    /**
     * невыкупленный.
     */
    Rejected: "REJECTED",
    /**
     * возвращенный.
     */
    Returned: "RETURNED",
  },
  /**
   * Тип субсидии:
   *
   * * `YANDEX_CASHBACK` — скидка по подписке Яндекс Плюс.
   *
   * * `SUBSIDY` — скидка Маркета (по акциям, промокодам, купонам и т. д.).
   */
  OrdersOrderItemSubsidyType: {
    /**
     * скидка по подписке Яндекс Плюс.
     */
    YandexCashback: "YANDEX_CASHBACK",
    /**
     * скидка Маркета (по акциям, промокодам, купонам и т. д.).
     */
    Subsidy: "SUBSIDY",
  },
  /**
   * Признак товара:
   *
   * * `ULTIMA` — премиум-товар.
   * * `SAFE_TAG` — товар с [защитной меткой](*safe-tag).
   */
  OrdersOrderItemTagType: {
    /**
     * премиум-товар
     */
    Ultima: "ULTIMA",
    /**
     * товар с [защитной меткой](*safe-tag).
     */
    SafeTag: "SAFE_TAG",
  },
  /**
   * Статус единицы товара в заказе.
   *
   * * `CREATED` — создана.
   *
   * * `SHIPPED` — передана в доставку.
   *
   * * `CANCELLED` — отменена или удалена из заказа.
   *
   * * `DELIVERED_TO_BUYER` — передана покупателю.
   *
   * * `LOST` — утеряна.
   *
   * * `REJECTED` — невыкупленная.
   *
   * * `RETURNED` — возвращенная.
   */
  OrdersOrderItemUnitStatusType: {
    /**
     * создана.
     */
    Created: "CREATED",
    /**
     * передана в доставку.
     */
    Shipped: "SHIPPED",
    /**
     * отменена или удалена из заказа.
     */
    Cancelled: "CANCELLED",
    /**
     * передана покупателю.
     */
    DeliveredToBuyer: "DELIVERED_TO_BUYER",
    /**
     * утеряна.
     */
    Lost: "LOST",
    /**
     * невыкупленная.
     */
    Rejected: "REJECTED",
    /**
     * возвращенная.
     */
    Returned: "RETURNED",
  },
  /**
   * Тип подъема заказа на этаж:
   *
   * * `NOT_NEEDED` — не требуется.
   *
   * * `MANUAL` — ручной.
   *
   * * `ELEVATOR` — лифт.
   *
   * * `CARGO_ELEVATOR` — грузовой лифт.
   *
   * * `FREE` — любой из перечисленных выше, если включена опция бесплатного подъема.
   *
   * * `UNKNOWN` — неизвестный тип.
   */
  OrdersOrderLiftType: {
    /**
     * не требуется.
     */
    NotNeeded: "NOT_NEEDED",
    /**
     * ручной.
     */
    Manual: "MANUAL",
    /**
     * лифт.
     */
    Elevator: "ELEVATOR",
    /**
     * грузовой лифт.
     */
    CargoElevator: "CARGO_ELEVATOR",
    /**
     * любой из перечисленных выше, если включена опция бесплатного подъема.
     */
    Free: "FREE",
    /**
     * неизвестный тип.
     */
    Unknown: "UNKNOWN",
  },
  /**
   * Способ оплаты заказа:
   *
   * * Значения, если выбрана оплата при оформлении заказа (`"paymentType": "PREPAID"`):
   *
   * * `YANDEX` — банковской картой.
   *
   * * `APPLE_PAY` — Apple Pay (не используется).
   *
   * * `GOOGLE_PAY` — Google Pay (не используется).
   *
   * * `CREDIT` — в кредит.
   *
   * * `TINKOFF_CREDIT` — в кредит в Тинькофф Банке.
   *
   * * `TINKOFF_INSTALLMENTS` — рассрочка в Тинькофф Банке.
   *
   * * `EXTERNAL_CERTIFICATE` — подарочным сертификатом (например, из приложения «Сбербанк Онлайн»).
   *
   * * `SBP` — через систему быстрых платежей.
   *
   * * `B2B_ACCOUNT_PREPAYMENT` — заказ оплачивает организация.
   *
   * * `MICROCREDIT` - Сплит на основе МКК (Микрокредитной компании).
   *
   * * `BNPL_TBC` - BNPL через внешний банк TBC.
   *
   * * `DIGITAL_RUBLE` - Цифровой рубль.
   *
   * * Значения, если выбрана оплата при получении заказа (`"paymentType": "POSTPAID"`):
   *
   * * `CARD_ON_DELIVERY` — банковской картой.
   *
   * * `BOUND_CARD_ON_DELIVERY` — привязанной картой при получении.
   *
   * * `BNPL_BANK_ON_DELIVERY` — супер Сплитом.
   *
   * * `BNPL_ON_DELIVERY` — Сплитом.
   *
   * * `BNPL_TBYB` - Оплата после доставки на основе Сплита.
   *
   * * `CASH_ON_DELIVERY` — наличными.
   *
   * * `B2B_ACCOUNT_POSTPAYMENT` — заказ оплачивает организация после доставки.
   *
   * * `UNKNOWN` — неизвестный тип.
   *
   * Значение по умолчанию: `CASH_ON_DELIVERY`.
   */
  OrdersOrderPaymentMethodType: {
    /**
     * наличными.
     */
    CashOnDelivery: "CASH_ON_DELIVERY",
    /**
     * банковской картой.
     */
    CardOnDelivery: "CARD_ON_DELIVERY",
    /**
     * привязанной картой при получении.
     */
    BoundCardOnDelivery: "BOUND_CARD_ON_DELIVERY",
    /**
     * супер Сплитом.
     */
    BnplBankOnDelivery: "BNPL_BANK_ON_DELIVERY",
    /**
     * Сплитом.
     */
    BnplOnDelivery: "BNPL_ON_DELIVERY",
    /**
     * банковской картой.
     */
    Yandex: "YANDEX",
    /**
     * Apple Pay (не используется).
     */
    ApplePay: "APPLE_PAY",
    /**
     * подарочным сертификатом (например, из приложения «Сбербанк Онлайн»).
     */
    ExternalCertificate: "EXTERNAL_CERTIFICATE",
    /**
     * в кредит.
     */
    Credit: "CREDIT",
    /**
     * Google Pay (не используется).
     */
    GooglePay: "GOOGLE_PAY",
    /**
     * в кредит в Тинькофф Банке.
     */
    TinkoffCredit: "TINKOFF_CREDIT",
    /**
     * через систему быстрых платежей.
     */
    Sbp: "SBP",
    /**
     * рассрочка в Тинькофф Банке.
     */
    TinkoffInstallments: "TINKOFF_INSTALLMENTS",
    /**
     * заказ оплачивает организация.
     */
    B2bAccountPrepayment: "B2B_ACCOUNT_PREPAYMENT",
    /**
     * заказ оплачивает организация после доставки.
     */
    B2bAccountPostpayment: "B2B_ACCOUNT_POSTPAYMENT",
    /**
     * Сплит на основе МКК (Микрокредитной компании).
     */
    Microcredit: "MICROCREDIT",
    /**
     * Оплата после доставки на основе Сплита.
     */
    BnplTbyb: "BNPL_TBYB",
    /**
     * BNPL через внешний банк TBC.
     */
    BnplTbc: "BNPL_TBC",
    /**
     * Цифровой рубль.
     */
    DigitalRuble: "DIGITAL_RUBLE",
    /**
     * неизвестный тип.
     */
    Unknown: "UNKNOWN",
  },
  /**
   * Тип оплаты заказа:
   *
   * * `PREPAID` — оплата при оформлении заказа.
   *
   * * `POSTPAID` — оплата при получении заказа.
   *
   * * `UNKNOWN` — неизвестный тип.
   *
   * Если параметр отсутствует, заказ будет оплачен при получении.
   */
  OrdersOrderPaymentType: {
    /**
     * оплата при оформлении заказа.
     */
    Prepaid: "PREPAID",
    /**
     * оплата при получении заказа.
     */
    Postpaid: "POSTPAID",
    /**
     * неизвестный тип.
     */
    Unknown: "UNKNOWN",
  },
  /**
   * Тип скидки:
   *
   * * `DIRECT_DISCOUNT` — прямая скидка, которую устанавливает продавец или Маркет.
   *
   * * `BLUE_SET` — комплекты.
   *
   * * `BLUE_FLASH` — флеш-акция.
   *
   * * `MARKET_COUPON` — скидка по промокоду Маркета.
   *
   * * `MARKET_PROMOCODE` — скидка по промокоду магазина.
   *
   * * `MARKET_BLUE` — скидка на Маркете.
   *
   * * `CHEAPEST_AS_GIFT` — самый дешевый товар в подарок.
   *
   * * `CASHBACK` — кешбэк.
   *
   * * `SPREAD_DISCOUNT_COUNT` — скидка за количество одинаковых товаров.
   *
   * * `SPREAD_DISCOUNT_RECEIPT` — скидка от суммы чека.
   *
   * * `DISCOUNT_BY_PAYMENT_TYPE` — прямая скидка при оплате картой Плюса.
   *
   * * `PERCENT_DISCOUNT` — прямая скидка в процентах.
   *
   * * `DCO_EXTRA_DISCOUNT` — дополнительная скидка, необходимая для расчета субсидии от Маркета.
   *
   * * `UNKNOWN` — неизвестный тип.
   *
   * Устаревшие типы:
   *
   * * `GENERIC_BUNDLE`.
   *
   * * `MARKET_COIN`.
   *
   * * `PRICE_DROP_AS_YOU_SHOP`.
   *
   * * `SECRET_SALE`.
   */
  OrdersOrderPromoType: {
    /**
     * прямая скидка, которую устанавливает продавец или Маркет.
     */
    DirectDiscount: "DIRECT_DISCOUNT",
    /**
     * комплекты.
     */
    BlueSet: "BLUE_SET",
    /**
     * флеш-акция.
     */
    BlueFlash: "BLUE_FLASH",
    /**
     * .
     */
    GenericBundle: "GENERIC_BUNDLE",
    /**
     * скидка по промокоду Маркета.
     */
    MarketCoupon: "MARKET_COUPON",
    /**
     * скидка по промокоду магазина.
     */
    MarketPromocode: "MARKET_PROMOCODE",
    /**
     * скидка на Маркете.
     */
    MarketBlue: "MARKET_BLUE",
    /**
     * .
     */
    MarketCoin: "MARKET_COIN",
    /**
     * .
     */
    PriceDropAsYouShop: "PRICE_DROP_AS_YOU_SHOP",
    /**
     * .
     */
    SecretSale: "SECRET_SALE",
    /**
     * самый дешевый товар в подарок.
     */
    CheapestAsGift: "CHEAPEST_AS_GIFT",
    /**
     * кешбэк.
     */
    Cashback: "CASHBACK",
    /**
     * скидка за количество одинаковых товаров.
     */
    SpreadDiscountCount: "SPREAD_DISCOUNT_COUNT",
    /**
     * скидка от суммы чека.
     */
    SpreadDiscountReceipt: "SPREAD_DISCOUNT_RECEIPT",
    /**
     * прямая скидка при оплате картой Плюса.
     */
    DiscountByPaymentType: "DISCOUNT_BY_PAYMENT_TYPE",
    /**
     * прямая скидка в процентах.
     */
    PercentDiscount: "PERCENT_DISCOUNT",
    /**
     * дополнительная скидка, необходимая для расчета субсидии от Маркета.
     */
    DcoExtraDiscount: "DCO_EXTRA_DISCOUNT",
    /**
     * неизвестный тип.
     */
    Unknown: "UNKNOWN",
  },
  /**
   * Площадка-источник заказа:
   *
   * * `MARKET` — заказ, оформленный на Маркете.
   *
   * * `OTHER` — LaaS-заказ, созданный продавцом.
   */
  OrdersOrderSourcePlatformType: {
    /**
     * заказ, оформленный на Маркете.
     */
    Market: "MARKET",
    Ozon: "OZON",
    Wildberries: "WILDBERRIES",
    /**
     * LaaS-заказ, созданный продавцом.
     */
    Other: "OTHER",
  },
  /**
   * Статус заказа:
   *
   * * `PLACING` — оформляется, подготовка к резервированию.
   *
   * * `RESERVED` — зарезервирован, но недооформлен (только для LaaS).
   *
   * * `UNPAID` — оформлен, но еще не оплачен (если выбрана оплата при оформлении).
   *
   * * `PROCESSING` — находится в обработке.
   *
   * * `DELIVERY` — передан в службу доставки.
   *
   * * `PICKUP` — доставлен в пункт выдачи.
   *
   * * `DELIVERED` — получен покупателем.
   *
   * * `CANCELLED` — отменен.
   *
   * * `PENDING` — ожидает обработки со стороны продавца.
   *
   * * `PARTIALLY_RETURNED` — возвращен частично.
   *
   * * `RETURNED` — возвращен полностью.
   *
   * * `UNKNOWN` — неизвестный статус.
   *
   * Также могут возвращаться другие значения. Обрабатывать их не нужно.
   */
  OrdersOrderStatusType: {
    /**
     * оформляется, подготовка к резервированию.
     */
    Placing: "PLACING",
    /**
     * зарезервирован, но недооформлен (только для LaaS).
     */
    Reserved: "RESERVED",
    /**
     * оформлен, но еще не оплачен (если выбрана оплата при оформлении).
     */
    Unpaid: "UNPAID",
    /**
     * находится в обработке.
     */
    Processing: "PROCESSING",
    /**
     * передан в службу доставки.
     */
    Delivery: "DELIVERY",
    /**
     * доставлен в пункт выдачи.
     */
    Pickup: "PICKUP",
    /**
     * получен покупателем.
     */
    Delivered: "DELIVERED",
    /**
     * отменен.
     */
    Cancelled: "CANCELLED",
    /**
     * ожидает обработки со стороны продавца.
     */
    Pending: "PENDING",
    /**
     * возвращен частично.
     */
    PartiallyReturned: "PARTIALLY_RETURNED",
    /**
     * возвращен полностью.
     */
    Returned: "RETURNED",
    /**
     * неизвестный статус.
     */
    Unknown: "UNKNOWN",
  },
  /**
   * Тип субсидии:
   *
   * * `YANDEX_CASHBACK` — скидка по подписке Яндекс Плюс.
   *
   * * `SUBSIDY` — скидка Маркета (по акциям, промокодам, купонам и т. д.)
   *
   * * `DELIVERY` — скидка за доставку (DBS).
   */
  OrdersOrderSubsidyType: {
    /**
     * скидка по подписке Яндекс Плюс.
     */
    YandexCashback: "YANDEX_CASHBACK",
    /**
     * скидка Маркета (по акциям, промокодам, купонам и т. д.)
     */
    Subsidy: "SUBSIDY",
    /**
     * скидка за доставку (DBS).
     */
    Delivery: "DELIVERY",
  },
  /**
   * Этап обработки заказа (статус `PROCESSING`) или причина отмены заказа (статус `CANCELLED`).
   *
   * * Значения для заказа в статусе `PROCESSING`:
   *
   * * `STARTED` — заказ подтвержден, его можно начать обрабатывать.
   *
   * * `READY_TO_SHIP` — заказ собран и готов к отправке.
   *
   * * Значения для заказа в статусе `CANCELLED`:
   *
   * * `RESERVATION_EXPIRED` — покупатель не завершил оформление зарезервированного заказа в течение 10 минут.
   *
   * * `USER_NOT_PAID` — покупатель не оплатил заказ (для типа оплаты `PREPAID`) в течение 30 минут.
   *
   * * `USER_UNREACHABLE` — не удалось связаться с покупателем. Для отмены с этой причиной необходимо выполнить условия:
   *
   * * не менее 3 звонков с 8 до 21 в часовом поясе покупателя;
   * * перерыв между первым и третьим звонком не менее 90 минут;
   * * соединение не короче 5 секунд.
   *
   * Если хотя бы одно из этих условий не выполнено (кроме случая, когда номер недоступен), отменить заказ не получится. Вернется ответ с кодом ошибки 400.
   *
   * * `USER_CHANGED_MIND` — покупатель отменил заказ по личным причинам.
   *
   * * `USER_REFUSED_DELIVERY` — покупателя не устроили условия доставки.
   *
   * * `USER_REFUSED_PRODUCT` — покупателю не подошел товар.
   *
   * * `SHOP_FAILED` — магазин не может выполнить заказ.
   *
   * * `USER_REFUSED_QUALITY` — покупателя не устроило качество товара.
   *
   * * `USER_IDENTIFICATION_MISMATCH` — идентификационный документ покупателя не совпадает с данными в заказе.
   *
   * * `PURCHASE_GROUP_THRESHOLD_NOT_REACHED_CANCELLED` — заказ участвовал в групповой покупке и был отменен, потому что не было достигнуто нужное количество покупок.
   *
   * * `REPLACING_ORDER` — покупатель решил заменить товар другим по собственной инициативе.
   *
   * * `PROCESSING_EXPIRED` — значение более не используется.
   *
   * * `PICKUP_EXPIRED` — закончился срок хранения заказа в пункт выдачи.
   *
   * * `TOO_MANY_DELIVERY_DATE_CHANGES` — заказ переносили слишком много раз.
   *
   * * `TOO_LONG_DELIVERY` — заказ доставляется слишком долго.
   *
   * * `INCORRECT_PERSONAL_DATA` — для заказа из-за рубежа указаны неправильные данные получателя, заказ не пройдет проверку на таможне.
   *
   * * `TECHNICAL_ERROR` — техническая ошибка на стороне Маркета. Обратитесь в поддержку.
   *
   * Также могут возвращаться другие значения. Обрабатывать их не нужно.
   */
  OrdersOrderSubstatusType: {
    /**
     * покупатель не завершил оформление зарезервированного заказа в течение 10 минут.
     */
    ReservationExpired: "RESERVATION_EXPIRED",
    /**
     * покупатель не оплатил заказ (для типа оплаты `PREPAID`) в течение 30 минут.
     */
    UserNotPaid: "USER_NOT_PAID",
    /**
     * не удалось связаться с покупателем. Для отмены с этой причиной необходимо выполнить условия:
     */
    UserUnreachable: "USER_UNREACHABLE",
    /**
     * покупатель отменил заказ по личным причинам.
     */
    UserChangedMind: "USER_CHANGED_MIND",
    /**
     * покупателя не устроили условия доставки.
     */
    UserRefusedDelivery: "USER_REFUSED_DELIVERY",
    /**
     * покупателю не подошел товар.
     */
    UserRefusedProduct: "USER_REFUSED_PRODUCT",
    /**
     * магазин не может выполнить заказ.
     */
    ShopFailed: "SHOP_FAILED",
    /**
     * покупателя не устроило качество товара.
     */
    UserRefusedQuality: "USER_REFUSED_QUALITY",
    /**
     * покупатель решил заменить товар другим по собственной инициативе.
     */
    ReplacingOrder: "REPLACING_ORDER",
    /**
     * значение более не используется.
     */
    ProcessingExpired: "PROCESSING_EXPIRED",
    PendingExpired: "PENDING_EXPIRED",
    ShopPendingCancelled: "SHOP_PENDING_CANCELLED",
    PendingCancelled: "PENDING_CANCELLED",
    UserFraud: "USER_FRAUD",
    ReservationFailed: "RESERVATION_FAILED",
    UserPlacedOtherOrder: "USER_PLACED_OTHER_ORDER",
    UserBoughtCheaper: "USER_BOUGHT_CHEAPER",
    MissingItem: "MISSING_ITEM",
    BrokenItem: "BROKEN_ITEM",
    WrongItem: "WRONG_ITEM",
    /**
     * закончился срок хранения заказа в пункт выдачи.
     */
    PickupExpired: "PICKUP_EXPIRED",
    DeliveryProblems: "DELIVERY_PROBLEMS",
    LateContact: "LATE_CONTACT",
    Custom: "CUSTOM",
    DeliveryServiceFailed: "DELIVERY_SERVICE_FAILED",
    WarehouseFailedToShip: "WAREHOUSE_FAILED_TO_SHIP",
    DeliveryServiceUndelivered: "DELIVERY_SERVICE_UNDELIVERED",
    Preorder: "PREORDER",
    AwaitConfirmation: "AWAIT_CONFIRMATION",
    /**
     * заказ подтвержден, его можно начать обрабатывать.
     */
    Started: "STARTED",
    Packaging: "PACKAGING",
    /**
     * заказ собран и готов к отправке.
     */
    ReadyToShip: "READY_TO_SHIP",
    Shipped: "SHIPPED",
    AsyncProcessing: "ASYNC_PROCESSING",
    WaitingUserInput: "WAITING_USER_INPUT",
    WaitingBankDecision: "WAITING_BANK_DECISION",
    BankRejectCreditOffer: "BANK_REJECT_CREDIT_OFFER",
    CustomerRejectCreditOffer: "CUSTOMER_REJECT_CREDIT_OFFER",
    CreditOfferFailed: "CREDIT_OFFER_FAILED",
    AwaitDeliveryDatesConfirmation: "AWAIT_DELIVERY_DATES_CONFIRMATION",
    ServiceFault: "SERVICE_FAULT",
    DeliveryServiceReceived: "DELIVERY_SERVICE_RECEIVED",
    UserReceived: "USER_RECEIVED",
    WaitingForStocks: "WAITING_FOR_STOCKS",
    AsPartOfMultiOrder: "AS_PART_OF_MULTI_ORDER",
    ReadyForLastMile: "READY_FOR_LAST_MILE",
    LastMileStarted: "LAST_MILE_STARTED",
    Antifraud: "ANTIFRAUD",
    DeliveryUserNotReceived: "DELIVERY_USER_NOT_RECEIVED",
    DeliveryServiceDelivered: "DELIVERY_SERVICE_DELIVERED",
    DeliveredUserNotReceived: "DELIVERED_USER_NOT_RECEIVED",
    UserWantedAnotherPaymentMethod: "USER_WANTED_ANOTHER_PAYMENT_METHOD",
    UserReceivedTechnicalError: "USER_RECEIVED_TECHNICAL_ERROR",
    UserForgotToUseBonus: "USER_FORGOT_TO_USE_BONUS",
    DeliveryServiceNotReceived: "DELIVERY_SERVICE_NOT_RECEIVED",
    DeliveryServiceLost: "DELIVERY_SERVICE_LOST",
    ShippedToWrongDeliveryService: "SHIPPED_TO_WRONG_DELIVERY_SERVICE",
    DeliveredUserReceived: "DELIVERED_USER_RECEIVED",
    WaitingTinkoffDecision: "WAITING_TINKOFF_DECISION",
    CourierSearch: "COURIER_SEARCH",
    CourierFound: "COURIER_FOUND",
    CourierInTransitToSender: "COURIER_IN_TRANSIT_TO_SENDER",
    CourierArrivedToSender: "COURIER_ARRIVED_TO_SENDER",
    CourierReceived: "COURIER_RECEIVED",
    CourierNotFound: "COURIER_NOT_FOUND",
    CourierNotDeliverOrder: "COURIER_NOT_DELIVER_ORDER",
    CourierReturnsOrder: "COURIER_RETURNS_ORDER",
    CourierReturnedOrder: "COURIER_RETURNED_ORDER",
    WaitingUserDeliveryInput: "WAITING_USER_DELIVERY_INPUT",
    PickupServiceReceived: "PICKUP_SERVICE_RECEIVED",
    PickupUserReceived: "PICKUP_USER_RECEIVED",
    CancelledCourierNotFound: "CANCELLED_COURIER_NOT_FOUND",
    CourierNotComeForOrder: "COURIER_NOT_COME_FOR_ORDER",
    DeliveryNotManagedRegion: "DELIVERY_NOT_MANAGED_REGION",
    IncompleteContactInformation: "INCOMPLETE_CONTACT_INFORMATION",
    IncompleteMultiOrder: "INCOMPLETE_MULTI_ORDER",
    InappropriateWeightSize: "INAPPROPRIATE_WEIGHT_SIZE",
    /**
     * техническая ошибка на стороне Маркета. Обратитесь в поддержку.
     */
    TechnicalError: "TECHNICAL_ERROR",
    SortingCenterLost: "SORTING_CENTER_LOST",
    CourierSearchNotStarted: "COURIER_SEARCH_NOT_STARTED",
    Lost: "LOST",
    AwaitPayment: "AWAIT_PAYMENT",
    AwaitLavkaReservation: "AWAIT_LAVKA_RESERVATION",
    UserWantsToChangeAddress: "USER_WANTS_TO_CHANGE_ADDRESS",
    FullNotRansom: "FULL_NOT_RANSOM",
    PrescriptionMismatch: "PRESCRIPTION_MISMATCH",
    DropoffLost: "DROPOFF_LOST",
    DropoffClosed: "DROPOFF_CLOSED",
    DeliveryToStoreStarted: "DELIVERY_TO_STORE_STARTED",
    UserWantsToChangeDeliveryDate: "USER_WANTS_TO_CHANGE_DELIVERY_DATE",
    WrongItemDelivered: "WRONG_ITEM_DELIVERED",
    DamagedBox: "DAMAGED_BOX",
    AwaitDeliveryDates: "AWAIT_DELIVERY_DATES",
    LastMileCourierSearch: "LAST_MILE_COURIER_SEARCH",
    PickupPointClosed: "PICKUP_POINT_CLOSED",
    LegalInfoChanged: "LEGAL_INFO_CHANGED",
    UserHasNoTimeToPickupOrder: "USER_HAS_NO_TIME_TO_PICKUP_ORDER",
    DeliveryCustomsArrived: "DELIVERY_CUSTOMS_ARRIVED",
    DeliveryCustomsCleared: "DELIVERY_CUSTOMS_CLEARED",
    FirstMileDeliveryServiceReceived: "FIRST_MILE_DELIVERY_SERVICE_RECEIVED",
    AwaitAutoDeliveryDates: "AWAIT_AUTO_DELIVERY_DATES",
    AwaitUserPersonalData: "AWAIT_USER_PERSONAL_DATA",
    NoPersonalDataExpired: "NO_PERSONAL_DATA_EXPIRED",
    CustomsProblems: "CUSTOMS_PROBLEMS",
    AwaitCashier: "AWAIT_CASHIER",
    WaitingPostpaidBudgetReservation: "WAITING_POSTPAID_BUDGET_RESERVATION",
    AwaitServiceableConfirmation: "AWAIT_SERVICEABLE_CONFIRMATION",
    PostpaidBudgetReservationFailed: "POSTPAID_BUDGET_RESERVATION_FAILED",
    AwaitCustomPriceConfirmation: "AWAIT_CUSTOM_PRICE_CONFIRMATION",
    ReadyForPickup: "READY_FOR_PICKUP",
    /**
     * заказ переносили слишком много раз.
     */
    TooManyDeliveryDateChanges: "TOO_MANY_DELIVERY_DATE_CHANGES",
    /**
     * заказ доставляется слишком долго.
     */
    TooLongDelivery: "TOO_LONG_DELIVERY",
    DeferredPayment: "DEFERRED_PAYMENT",
    PostpaidFailed: "POSTPAID_FAILED",
    /**
     * для заказа из-за рубежа указаны неправильные данные получателя, заказ не пройдет проверку на таможне.
     */
    IncorrectPersonalData: "INCORRECT_PERSONAL_DATA",
    CustomsFailedMarket: "CUSTOMS_FAILED_MARKET",
    CustomsFailedUserCommercialItems: "CUSTOMS_FAILED_USER_COMMERCIAL_ITEMS",
    CustomsFailedUserDutyNotPaid: "CUSTOMS_FAILED_USER_DUTY_NOT_PAID",
    CustomsFailedUserInvalidPersonalData:
      "CUSTOMS_FAILED_USER_INVALID_PERSONAL_DATA",
    CustomsFailedUserAdditionalDataNotProvided:
      "CUSTOMS_FAILED_USER_ADDITIONAL_DATA_NOT_PROVIDED",
    AwaitPaymentAfterDelivery: "AWAIT_PAYMENT_AFTER_DELIVERY",
    AwaitUserSteamFastUrl: "AWAIT_USER_STEAM_FAST_URL",
    /**
     * идентификационный документ покупателя не совпадает с данными в заказе.
     */
    UserIdentificationMismatch: "USER_IDENTIFICATION_MISMATCH",
    /**
     * заказ участвовал в групповой покупке и был отменен, потому что не было достигнуто нужное количество покупок.
     */
    PurchaseGroupThresholdNotReachedCancelled:
      "PURCHASE_GROUP_THRESHOLD_NOT_REACHED_CANCELLED",
    Unknown: "UNKNOWN",
  },
  /**
   * Система налогообложения (СНО) магазина на момент оформления заказа:
   *
   * * `ECHN` — единый сельскохозяйственный налог (ЕСХН).
   *
   * * `ENVD` — единый налог на вмененный доход (ЕНВД).
   *
   * * `OSN` — общая система налогообложения (ОСН).
   *
   * * `PSN` — патентная система налогообложения (ПСН).
   *
   * * `USN` — упрощенная система налогообложения (УСН).
   *
   * * `USN_MINUS_COST` — упрощенная система налогообложения, доходы, уменьшенные на величину расходов (УСН «Доходы минус расходы»).
   *
   * * `NPD` — налог на профессиональный доход (НПД).
   *
   * * `AUSN` — автоматизированная упрощенная система налогообложения (АУСН).
   *
   * * `AUSN_MINUS_COST` — автоматизированная упрощенная система налогообложения, доходы, уменьшенные на величину расходов (АУСН «Доходы минус расходы»).
   *
   * * `UNKNOWN_VALUE` — неизвестное значение.
   */
  OrdersOrderTaxSystemType: {
    /**
     * общая система налогообложения (ОСН).
     */
    Osn: "OSN",
    /**
     * упрощенная система налогообложения (УСН).
     */
    Usn: "USN",
    /**
     * упрощенная система налогообложения, доходы, уменьшенные на величину расходов (УСН «Доходы минус расходы»).
     */
    UsnMinusCost: "USN_MINUS_COST",
    /**
     * единый налог на вмененный доход (ЕНВД).
     */
    Envd: "ENVD",
    /**
     * единый сельскохозяйственный налог (ЕСХН).
     */
    Echn: "ECHN",
    /**
     * патентная система налогообложения (ПСН).
     */
    Psn: "PSN",
    /**
     * налог на профессиональный доход (НПД).
     */
    Npd: "NPD",
    /**
     * автоматизированная упрощенная система налогообложения (АУСН).
     */
    Ausn: "AUSN",
    /**
     * автоматизированная упрощенная система налогообложения, доходы, уменьшенные на величину расходов (АУСН «Доходы минус расходы»).
     */
    AusnMinusCost: "AUSN_MINUS_COST",
    /**
     * неизвестное значение.
     */
    UnknownValue: "UNKNOWN_VALUE",
  },
  /**
   * Изменился ли статус заказа:
   *
   * * `OK` — статус изменен.
   *
   * * `ERROR` — статус не изменен. В этом случае появится сообщение об ошибке в параметре `errorDetails`.
   */
  OrdersOrderUpdateStatusType: {
    /**
     * статус изменен.
     */
    Ok: "OK",
    /**
     * статус не изменен. В этом случае появится сообщение об ошибке в параметре `errorDetails`.
     */
    Error: "ERROR",
  },
  /**
   * НДС на товар или доставку:
   *
   * * `NO_VAT` — НДС не облагается, используется только для отдельных видов услуг.
   *
   * * `VAT_0` — НДС 0%. Например, используется при продаже товаров, вывезенных в таможенной процедуре экспорта, или при оказании услуг по международной перевозке товаров.
   *
   * * `VAT_10` — НДС 10%. Например, используется при реализации отдельных продовольственных и медицинских товаров.
   *
   * * `VAT_10_110` — НДС 10/110. НДС 10%, применяется только при предоплате.
   *
   * * `VAT_20` — НДС 20%. Основной НДС с 2019 года до 1 января 2026 года.
   *
   * * `VAT_20_120` — НДС 20/120. НДС 20%, применяется только при предоплате.
   *
   * * `VAT_18` — НДС 18%. Основной НДС до 2019 года.
   *
   * * `VAT_18_118` — НДС 18/118. НДС использовался до 1 января 2019 года при предоплате.
   *
   * * `VAT_12` — НДС 12%. Используется только в Узбекистане.
   *
   * * `VAT_05` — НДС 5%. НДС для упрощенной системы налогообложения (УСН).
   *
   * * `VAT_07` — НДС 7%. НДС для упрощенной системы налогообложения (УСН).
   *
   * * `VAT_22` — НДС 22%. Основной НДС с 1 января 2026 года.
   *
   * * `UNKNOWN_VALUE` — неизвестный тип.
   */
  OrdersOrderVatType: {
    /**
     * НДС не облагается, используется только для отдельных видов услуг.
     */
    NoVat: "NO_VAT",
    /**
     * НДС 0%. Например, используется при продаже товаров, вывезенных в таможенной процедуре экспорта, или при оказании услуг по международной перевозке товаров.
     */
    Vat0: "VAT_0",
    /**
     * НДС 10%. Например, используется при реализации отдельных продовольственных и медицинских товаров.
     */
    Vat10: "VAT_10",
    /**
     * НДС 10/110. НДС 10%, применяется только при предоплате.
     */
    Vat10110: "VAT_10_110",
    /**
     * НДС 20%. Основной НДС с 2019 года до 1 января 2026 года.
     */
    Vat20: "VAT_20",
    /**
     * НДС 20/120. НДС 20%, применяется только при предоплате.
     */
    Vat20120: "VAT_20_120",
    /**
     * НДС 18%. Основной НДС до 2019 года.
     */
    Vat18: "VAT_18",
    /**
     * НДС 18/118. НДС использовался до 1 января 2019 года при предоплате.
     */
    Vat18118: "VAT_18_118",
    /**
     * НДС 12%. Используется только в Узбекистане.
     */
    Vat12: "VAT_12",
    /**
     * НДС 5%. НДС для упрощенной системы налогообложения (УСН).
     */
    Vat05: "VAT_05",
    /**
     * НДС 7%. НДС для упрощенной системы налогообложения (УСН).
     */
    Vat07: "VAT_07",
    /**
     * НДС 22%. Основной НДС с 1 января 2026 года.
     */
    Vat22: "VAT_22",
    /**
     * неизвестный тип.
     */
    UnknownValue: "UNKNOWN_VALUE",
  },
  /**
   * Тип региона.
   *
   * Возможные значения:
   *
   * * `CITY_DISTRICT` — район города.
   *
   * * `CITY` — крупный город.
   *
   * * `CONTINENT` — континент.
   *
   * * `COUNTRY_DISTRICT` — область.
   *
   * * `COUNTRY` — страна.
   *
   * * `REGION` — регион.
   *
   * * `REPUBLIC_AREA` — район субъекта федерации.
   *
   * * `REPUBLIC` — субъект федерации.
   *
   * * `SUBWAY_STATION` — станция метро.
   *
   * * `VILLAGE` — город.
   *
   * * `OTHER` — неизвестный регион.
   */
  OrdersRegionType: {
    /**
     * неизвестный регион.
     */
    Other: "OTHER",
    /**
     * континент.
     */
    Continent: "CONTINENT",
    /**
     * регион.
     */
    Region: "REGION",
    /**
     * страна.
     */
    Country: "COUNTRY",
    /**
     * область.
     */
    CountryDistrict: "COUNTRY_DISTRICT",
    /**
     * субъект федерации.
     */
    Republic: "REPUBLIC",
    /**
     * крупный город.
     */
    City: "CITY",
    /**
     * город.
     */
    Village: "VILLAGE",
    /**
     * район города.
     */
    CityDistrict: "CITY_DISTRICT",
    /**
     * станция метро.
     */
    SubwayStation: "SUBWAY_STATION",
    /**
     * район субъекта федерации.
     */
    RepublicArea: "REPUBLIC_AREA",
  },
  /**
   * Модель работы:
   *
   * * `FBY` — FBY.
   * * `FBS` — FBS.
   * * `DBS` — DBS.
   * * `EXPRESS` — Экспресс.
   * * `LAAS` — LaaS.
   */
  OrdersSellingProgramType: {
    /**
     * FBY
     */
    Fby: "FBY",
    /**
     * FBS
     */
    Fbs: "FBS",
    /**
     * DBS
     */
    Dbs: "DBS",
    /**
     * Экспресс
     */
    Express: "EXPRESS",
    /**
     * LaaS.
     */
    Laas: "LAAS",
  },
  /**
   * Тип ответа.
   * Возможные значения:
   * * `OK` — ошибок нет.
   * * `ERROR` — при обработке запроса произошла ошибка.
   */
  OrdersStatsApiResponseStatusType: {
    /**
     * ошибок нет
     */
    Ok: "OK",
    /**
     * при обработке запроса произошла ошибка.
     */
    Error: "ERROR",
  },
  /**
   * Коды валют:
   *
   * * `RUR` — российский рубль.
   * * `UAH` — украинская гривна.
   * * `BYR` — белорусский рубль.
   * * `KZT` — казахстанский тенге.
   * * `UZS` — узбекский сум.
   */
  OrdersStatsCurrencyType: {
    /**
     * российский рубль
     */
    Rur: "RUR",
    Usd: "USD",
    Eur: "EUR",
    /**
     * украинская гривна
     */
    Uah: "UAH",
    Aud: "AUD",
    Gbp: "GBP",
    /**
     * белорусский рубль
     */
    Byr: "BYR",
    Byn: "BYN",
    Dkk: "DKK",
    Isk: "ISK",
    /**
     * казахстанский тенге
     */
    Kzt: "KZT",
    Cad: "CAD",
    Cny: "CNY",
    Nok: "NOK",
    Xdr: "XDR",
    Sgd: "SGD",
    Try: "TRY",
    Sek: "SEK",
    Chf: "CHF",
    Jpy: "JPY",
    Azn: "AZN",
    All: "ALL",
    Dzd: "DZD",
    Aoa: "AOA",
    Ars: "ARS",
    Amd: "AMD",
    Afn: "AFN",
    Bhd: "BHD",
    Bgn: "BGN",
    Bob: "BOB",
    Bwp: "BWP",
    Bnd: "BND",
    Brl: "BRL",
    Bif: "BIF",
    Huf: "HUF",
    Vef: "VEF",
    Kpw: "KPW",
    Vnd: "VND",
    Gmd: "GMD",
    Ghs: "GHS",
    Gnf: "GNF",
    Hkd: "HKD",
    Gel: "GEL",
    Aed: "AED",
    Egp: "EGP",
    Zmk: "ZMK",
    Ils: "ILS",
    Inr: "INR",
    Idr: "IDR",
    Jod: "JOD",
    Iqd: "IQD",
    Irr: "IRR",
    Yer: "YER",
    Qar: "QAR",
    Kes: "KES",
    Kgs: "KGS",
    Cop: "COP",
    Cdf: "CDF",
    Crc: "CRC",
    Kwd: "KWD",
    Cup: "CUP",
    Lak: "LAK",
    Lvl: "LVL",
    Sll: "SLL",
    Lbp: "LBP",
    Lyd: "LYD",
    Szl: "SZL",
    Ltl: "LTL",
    Mur: "MUR",
    Mro: "MRO",
    Mkd: "MKD",
    Mwk: "MWK",
    Mga: "MGA",
    Myr: "MYR",
    Mad: "MAD",
    Mxn: "MXN",
    Mzn: "MZN",
    Mdl: "MDL",
    Mnt: "MNT",
    Npr: "NPR",
    Ngn: "NGN",
    Nio: "NIO",
    Nzd: "NZD",
    Omr: "OMR",
    Pkr: "PKR",
    Pyg: "PYG",
    Pen: "PEN",
    Pln: "PLN",
    Khr: "KHR",
    Sar: "SAR",
    Ron: "RON",
    Scr: "SCR",
    Syp: "SYP",
    Skk: "SKK",
    Sos: "SOS",
    Sdg: "SDG",
    Srd: "SRD",
    Tjs: "TJS",
    Thb: "THB",
    Twd: "TWD",
    Bdt: "BDT",
    Tzs: "TZS",
    Tnd: "TND",
    Tmm: "TMM",
    Ugx: "UGX",
    /**
     * узбекский сум.
     */
    Uzs: "UZS",
    Uyu: "UYU",
    Php: "PHP",
    Djf: "DJF",
    Xaf: "XAF",
    Xof: "XOF",
    Hrk: "HRK",
    Czk: "CZK",
    Clp: "CLP",
    Lkr: "LKR",
    Eek: "EEK",
    Etb: "ETB",
    Rsd: "RSD",
    Zar: "ZAR",
    Krw: "KRW",
    Nad: "NAD",
    Tl: "TL",
    Ue: "UE",
  },
  /**
   * Услуга:
   *
   * * `FEE` — размещение товара на Маркете.
   * * `FULFILLMENT` — складская обработка. Не возвращается с 1 января 2024 года.
   * * `LOYALTY_PARTICIPATION_FEE` — участие в программе лояльности и отзывы за баллы.
   * * `AUCTION_PROMOTION` — буст продаж с оплатой за продажи.
   * * `INSTALLMENT` — рассрочка. Не возвращается с 24 февраля 2022 года.
   * * `DELIVERY_TO_CUSTOMER` — доставка покупателю (FBY, FBS). Для DBS и Экспресс — если заказ возвращается через логистику Маркета.
   * * `EXPRESS_DELIVERY_TO_CUSTOMER` — экспресс-доставка покупателю (Экспресс).
   * * `AGENCY` — прием платежа покупателя.
   * * `PAYMENT_TRANSFER` — перевод платежа покупателя.
   * * `RETURNED_ORDERS_STORAGE` — хранение невыкупов и возвратов (FBS). Для DBS и Экспресс — если заказ возвращается через логистику Маркета.
   * * `SORTING` — обработка заказа (FBS).
   * * `INTAKE_SORTING` — организация забора заказов со склада продавца (FBS).
   * * `RETURN_PROCESSING` — обработка заказов на складе (FBS). Для DBS и Экспресс — если заказ возвращается через логистику Маркета.
   * * `ILLIQUID_GOODS_SALE` — вознаграждение за продажу невывезенных товаров.
   * * `CROSSREGIONAL_DELIVERY` - доставка средней мили.
   * * `FULFILLMENT_WITHDRAW` - вывоз со склада.
   * * `ITEM_BOOKING` - бронирование товара (только для продавцов Market Yandex Go).
   */
  OrdersStatsOrdersStatsCommissionType: {
    /**
     * размещение товара на Маркете
     */
    Fee: "FEE",
    /**
     * складская обработка. Не возвращается с 1 января 2024 года
     */
    Fulfillment: "FULFILLMENT",
    /**
     * участие в программе лояльности и отзывы за баллы
     */
    LoyaltyParticipationFee: "LOYALTY_PARTICIPATION_FEE",
    /**
     * буст продаж с оплатой за продажи
     */
    AuctionPromotion: "AUCTION_PROMOTION",
    /**
     * рассрочка. Не возвращается с 24 февраля 2022 года
     */
    Installment: "INSTALLMENT",
    /**
     * доставка покупателю (FBY, FBS). Для DBS и Экспресс — если заказ возвращается через логистику Маркета
     */
    DeliveryToCustomer: "DELIVERY_TO_CUSTOMER",
    /**
     * экспресс-доставка покупателю (Экспресс)
     */
    ExpressDeliveryToCustomer: "EXPRESS_DELIVERY_TO_CUSTOMER",
    /**
     * прием платежа покупателя
     */
    Agency: "AGENCY",
    /**
     * перевод платежа покупателя
     */
    PaymentTransfer: "PAYMENT_TRANSFER",
    /**
     * хранение невыкупов и возвратов (FBS). Для DBS и Экспресс — если заказ возвращается через логистику Маркета
     */
    ReturnedOrdersStorage: "RETURNED_ORDERS_STORAGE",
    /**
     * обработка заказа (FBS)
     */
    Sorting: "SORTING",
    /**
     * организация забора заказов со склада продавца (FBS)
     */
    IntakeSorting: "INTAKE_SORTING",
    /**
     * обработка заказов на складе (FBS). Для DBS и Экспресс — если заказ возвращается через логистику Маркета
     */
    ReturnProcessing: "RETURN_PROCESSING",
    /**
     * вознаграждение за продажу невывезенных товаров
     */
    IlliquidGoodsSale: "ILLIQUID_GOODS_SALE",
    /**
     * доставка средней мили
     */
    CrossregionalDelivery: "CROSSREGIONAL_DELIVERY",
    /**
     * вывоз со склада
     */
    FulfillmentWithdraw: "FULFILLMENT_WITHDRAW",
    /**
     * бронирование товара (только для продавцов Market Yandex Go).
     */
    ItemBooking: "ITEM_BOOKING",
  },
  /**
   * Статус товара:
   *
   * * `REJECTED` — товар был добавлен в созданный заказ, но не был оплачен.
   * * `RETURNED` — товар вернули.
   */
  OrdersStatsOrdersStatsItemStatusType: {
    /**
     * товар был добавлен в созданный заказ, но не был оплачен
     */
    Rejected: "REJECTED",
    /**
     * товар вернули.
     */
    Returned: "RETURNED",
  },
  /**
   * Тип оплаты заказа:
   * - `POSTPAID` — заказ оплачен после того, как был получен.
   * - `PREPAID` — заказ оплачен до того, как был получен.
   * - `UNKNOWN` — неизвестный тип оплаты. Скорее всего покупатель отменил или вернул заказ или не было его оплаты.
   */
  OrdersStatsOrdersStatsOrderPaymentType: {
    /**
     * заказ оплачен после того, как был получен
     */
    Postpaid: "POSTPAID",
    /**
     * заказ оплачен до того, как был получен
     */
    Prepaid: "PREPAID",
    /**
     * неизвестный тип оплаты. Скорее всего покупатель отменил или вернул заказ или не было его оплаты.
     */
    Unknown: "UNKNOWN",
  },
  /**
   * Способ денежного перевода:
   * - `BUYER` — оплата или возврат деньгами.
   * - `MARKET_CESSION` — уступка задолженности покупателя.
   *
   * Устаревшие способы:
   * - `CASHBACK`.
   * - `MARKETPLACE`.
   * - `SPLIT`.
   */
  OrdersStatsOrdersStatsPaymentSourceType: {
    /**
     * оплата или возврат деньгами
     */
    Buyer: "BUYER",
    Cashback: "CASHBACK",
    Marketplace: "MARKETPLACE",
    /**
     * уступка задолженности покупателя.
     */
    MarketCession: "MARKET_CESSION",
    /**
     * .
     */
    Split: "SPLIT",
  },
  /**
   * Тип денежного перевода:
   * - `PAYMENT` — оплата.
   * - `REFUND` — возврат.
   */
  OrdersStatsOrdersStatsPaymentType: {
    /**
     * оплата
     */
    Payment: "PAYMENT",
    /**
     * возврат.
     */
    Refund: "REFUND",
  },
  /**
   * Тип скидки или цена товара:
   * - `BUYER` — цена товара с учетом скидок, в том числе купонов.
   * - `CASHBACK` — баллы Плюса.
   * - `MARKETPLACE` — купоны.
   */
  OrdersStatsOrdersStatsPriceType: {
    /**
     * цена товара с учетом скидок, в том числе купонов
     */
    Buyer: "BUYER",
    /**
     * баллы Плюса
     */
    Cashback: "CASHBACK",
    /**
     * купоны.
     */
    Marketplace: "MARKETPLACE",
  },
  /**
   * Тип товара:
   *
   * * `FIT` — товар надлежащего качества.
   *
   * * `DEFECT` — товар бракованный.
   *
   * * `EXPIRED` — товар с истекшим сроком годности.
   */
  OrdersStatsOrdersStatsStockType: {
    /**
     * товар надлежащего качества.
     */
    Fit: "FIT",
    /**
     * товар бракованный.
     */
    Defect: "DEFECT",
    /**
     * товар с истекшим сроком годности.
     */
    Expired: "EXPIRED",
  },
  /**
   * Тип операции с баллами, которые используются для уменьшения стоимости размещения:
   *
   * * `ACCRUAL` — начисление баллов.
   * * `DEDUCTION` — списание баллов.
   */
  OrdersStatsOrdersStatsSubsidyOperationType: {
    /**
     * начисление баллов
     */
    Accrual: "ACCRUAL",
    /**
     * списание баллов.
     */
    Deduction: "DEDUCTION",
  },
  /**
   * Источник баллов, которые используются для уменьшения стоимости размещения:
   *
   * * `YANDEX_CASHBACK` — скидка по подписке Яндекс Плюс.
   *
   * * `SUBSIDY` — скидка Маркета (по акциям, промокодам, купонам и т. д.)
   *
   * * `DELIVERY` — скидка за доставку (DBS).
   */
  OrdersStatsOrdersStatsSubsidyType: {
    /**
     * скидка по подписке Яндекс Плюс.
     */
    YandexCashback: "YANDEX_CASHBACK",
    /**
     * скидка Маркета (по акциям, промокодам, купонам и т. д.)
     */
    Subsidy: "SUBSIDY",
    /**
     * скидка за доставку (DBS).
     */
    Delivery: "DELIVERY",
  },
  /**
   * Текущий статус заказа:
   *
   * * `CANCELLED_BEFORE_PROCESSING` — заказ отменен до начала его обработки.
   *
   * * `CANCELLED_IN_DELIVERY` — заказ отменен во время его доставки.
   *
   * * `CANCELLED_IN_PROCESSING` — заказ отменен во время его обработки.
   *
   * * `DELIVERY` — заказ передан службе доставки.
   *
   * * `DELIVERED` — заказ доставлен.
   *
   * * `PARTIALLY_DELIVERED` — заказ частично доставлен.
   *
   * Статус заказа может перейти в `PARTIALLY_DELIVERED` не сразу
   *
   * Если в доставленном заказе был невыкуп, статус изменится только после получения заказа на складе Маркета.
   *
   * * `PARTIALLY_RETURNED` — заказ частично возвращен покупателем.
   *
   * * `PENDING` — заказ ожидает подтверждения.
   *
   * * `PICKUP` — заказ доставлен в пункт выдачи.
   *
   * * `PROCESSING` — заказ в обработке.
   *
   * * `RESERVED` — товар зарезервирован на складе.
   *
   * * `RETURNED` — заказ полностью возвращен покупателем.
   *
   * * `UNKNOWN` — неизвестный статус заказа.
   *
   * * `UNPAID` — заказ от юридического лица ожидает оплаты.
   *
   * * `LOST` — заказ утерян.
   */
  OrdersStatsOrderStatsStatusType: {
    /**
     * заказ отменен до начала его обработки.
     */
    CancelledBeforeProcessing: "CANCELLED_BEFORE_PROCESSING",
    /**
     * заказ отменен во время его доставки.
     */
    CancelledInDelivery: "CANCELLED_IN_DELIVERY",
    /**
     * заказ отменен во время его обработки.
     */
    CancelledInProcessing: "CANCELLED_IN_PROCESSING",
    /**
     * заказ передан службе доставки.
     */
    Delivery: "DELIVERY",
    /**
     * заказ доставлен.
     */
    Delivered: "DELIVERED",
    /**
     * заказ частично доставлен.
     */
    PartiallyDelivered: "PARTIALLY_DELIVERED",
    /**
     * заказ частично возвращен покупателем.
     */
    PartiallyReturned: "PARTIALLY_RETURNED",
    /**
     * заказ ожидает подтверждения.
     */
    Pending: "PENDING",
    /**
     * заказ доставлен в пункт выдачи.
     */
    Pickup: "PICKUP",
    /**
     * заказ в обработке.
     */
    Processing: "PROCESSING",
    /**
     * товар зарезервирован на складе.
     */
    Reserved: "RESERVED",
    /**
     * заказ полностью возвращен покупателем.
     */
    Returned: "RETURNED",
    /**
     * неизвестный статус заказа.
     */
    Unknown: "UNKNOWN",
    /**
     * заказ от юридического лица ожидает оплаты.
     */
    Unpaid: "UNPAID",
    /**
     * заказ утерян.
     */
    Lost: "LOST",
  },
  /**
   * Статус проверки УИНа:
   *
   * * `FAILED` — не прошел проверку.
   *
   * * `IN_PROGRESS` — в процессе проверки.
   *
   * * `NOT_ON_VALIDATION` — УИН не отправлен на проверку или переданы не все УИНы в заказе.
   *
   * * `OK` — проверка успешно пройдена.
   */
  OrdersUinStatusType: {
    /**
     * проверка успешно пройдена.
     */
    Ok: "OK",
    /**
     * в процессе проверки.
     */
    InProgress: "IN_PROGRESS",
    /**
     * не прошел проверку.
     */
    Failed: "FAILED",
    /**
     * УИН не отправлен на проверку или переданы не все УИНы в заказе.
     */
    NotOnValidation: "NOT_ON_VALIDATION",
  },
  /**
   * Детализация ошибки при проверке :no-translate[УИНа].
   *
   * * `UIN_MERCHANT_MISMATCH` — :no-translate[УИН] не принадлежит вашему магазину.
   *
   * * `UIN_MERCHANT_UNREGISTERED` — магазин не подключен к системе :no-translate[ГИИС ДМДК].
   *
   * * `UIN_NO_DATA` — :no-translate[УИН] не найден или заблокирован.
   *
   * Возвращается только для статуса `FAILED`.
   */
  OrdersUinSubstatusType: {
    /**
     * :no-translate[УИН] не принадлежит вашему магазину.
     */
    UinMerchantMismatch: "UIN_MERCHANT_MISMATCH",
    /**
     * магазин не подключен к системе :no-translate[ГИИС ДМДК].
     */
    UinMerchantUnregistered: "UIN_MERCHANT_UNREGISTERED",
    /**
     * :no-translate[УИН] не найден или заблокирован.
     */
    UinNoData: "UIN_NO_DATA",
  },
  /**
   * Тип ответа.
   * Возможные значения:
   * * `OK` — ошибок нет.
   * * `ERROR` — при обработке запроса произошла ошибка.
   */
  OutletLicensesApiResponseStatusType: {
    /**
     * ошибок нет
     */
    Ok: "OK",
    /**
     * при обработке запроса произошла ошибка.
     */
    Error: "ERROR",
  },
  /**
   * Статус проверки лицензии:
   *
   * * `NEW` — лицензия проверяется.
   * * `SUCCESS` — лицензия прошла проверку.
   * * `FAIL` — лицензия не прошла проверку.
   * * `REVOKE` — лицензия отозвана службой качества.
   * * `DONT_WANT` — не проверяется.
   * * `FAIL_MANUAL` — лицензия не прошла проверку службы качества.
   */
  OutletLicensesLicenseCheckStatusType: {
    /**
     * лицензия проверяется
     */
    New: "NEW",
    /**
     * лицензия прошла проверку
     */
    Success: "SUCCESS",
    /**
     * лицензия не прошла проверку
     */
    Fail: "FAIL",
    /**
     * лицензия отозвана службой качества
     */
    Revoke: "REVOKE",
    /**
     * не проверяется
     */
    DontWant: "DONT_WANT",
    /**
     * лицензия не прошла проверку службы качества.
     */
    FailManual: "FAIL_MANUAL",
  },
  /**
   * Тип лицензии:
   *
   * * `ALCOHOL` — лицензия на розничную продажу алкогольной продукции.
   * * `UNKNOWN` — неизвестный тип лицензии.
   */
  OutletLicensesLicenseType: {
    /**
     * лицензия на розничную продажу алкогольной продукции
     */
    Alcohol: "ALCOHOL",
    /**
     * неизвестный тип лицензии.
     */
    Unknown: "UNKNOWN",
  },
  /**
   * Типизированный код ошибки. Описания возможных значений приведены в разделе [Коды ошибок](../../concepts/error-codes.md).
   */
  OutletsApiErrorCodeType: {
    InvalidFeedId: "INVALID_FEED_ID",
    InvalidWarehouseId: "INVALID_WAREHOUSE_ID",
    GroupedWarehouse: "GROUPED_WAREHOUSE",
    DuplicateOffer: "DUPLICATE_OFFER",
    InvalidTtl: "INVALID_TTL",
    InvalidComment: "INVALID_COMMENT",
    LimitExceeded: "LIMIT_EXCEEDED",
    NonPositiveLimit: "NON_POSITIVE_LIMIT",
    RequestLimitExceeded: "REQUEST_LIMIT_EXCEEDED",
    InvalidOfferId: "INVALID_OFFER_ID",
    MissingOfferId: "MISSING_OFFER_ID",
    MissingOffer: "MISSING_OFFER",
    InvalidShopSku: "INVALID_SHOP_SKU",
    AmbiguousOffer: "AMBIGUOUS_OFFER",
    OfferNotFound: "OFFER_NOT_FOUND",
    ModelNotFound: "MODEL_NOT_FOUND",
    CategoryNotFound: "CATEGORY_NOT_FOUND",
    NoRequiredFields: "NO_REQUIRED_FIELDS",
    ForbiddenFieldDefinition: "FORBIDDEN_FIELD_DEFINITION",
    ProblemsInOtherOffers: "PROBLEMS_IN_OTHER_OFFERS",
    AmbiguousFieldDefinition: "AMBIGUOUS_FIELD_DEFINITION",
    InvalidOutletInfo: "INVALID_OUTLET_INFO",
    DuplicateOutletCode: "DUPLICATE_OUTLET_CODE",
    UnknownRegion: "UNKNOWN_REGION",
    WrongRegion: "WRONG_REGION",
    NotSpecified: "NOT_SPECIFIED",
    InvalidPhoneFormat: "INVALID_PHONE_FORMAT",
    InvalidTimeFormat: "INVALID_TIME_FORMAT",
    CouldNotFindCoords: "COULD_NOT_FIND_COORDS",
    WrongOutletGpsCoordinates: "WRONG_OUTLET_GPS_COORDINATES",
    ItemNotFound: "ITEM_NOT_FOUND",
    InvalidItem: "INVALID_ITEM",
    ItemDuplicate: "ITEM_DUPLICATE",
    ItemShipped: "ITEM_SHIPPED",
    ItemsAdditionNotSupported: "ITEMS_ADDITION_NOT_SUPPORTED",
    CannotRemoveLastItem: "CANNOT_REMOVE_LAST_ITEM",
    OtherRemoveItemError: "OTHER_REMOVE_ITEM_ERROR",
    TrackCodeAlreadyUsed: "TRACK_CODE_ALREADY_USED",
    TooManyCisesForItem: "TOO_MANY_CISES_FOR_ITEM",
    TooFewCisesForItem: "TOO_FEW_CISES_FOR_ITEM",
    InvalidCis: "INVALID_CIS",
    DuplicateCis: "DUPLICATE_CIS",
    TooManyUinsForItem: "TOO_MANY_UINS_FOR_ITEM",
    TooFewUinsForItem: "TOO_FEW_UINS_FOR_ITEM",
    InvalidUin: "INVALID_UIN",
    UinValidationInProgressError: "UIN_VALIDATION_IN_PROGRESS_ERROR",
    CisValidationInProgressError: "CIS_VALIDATION_IN_PROGRESS_ERROR",
    InvalidRnpt: "INVALID_RNPT",
    InvalidGtd: "INVALID_GTD",
    InvalidCountryCode: "INVALID_COUNTRY_CODE",
    CountryCodeAndGtdAreRequiredValidationError:
      "COUNTRY_CODE_AND_GTD_ARE_REQUIRED_VALIDATION_ERROR",
    DuplicateUin: "DUPLICATE_UIN",
    DeletedItemsExceedsThreshold: "DELETED_ITEMS_EXCEEDS_THRESHOLD",
    PromoProhibitsDelete: "PROMO_PROHIBITS_DELETE",
    PaymentProhibitsDelete: "PAYMENT_PROHIBITS_DELETE",
    CancellationRequested: "CANCELLATION_REQUESTED",
    OrderInTerminalState: "ORDER_IN_TERMINAL_STATE",
    EditCountExceeded: "EDIT_COUNT_EXCEEDED",
    DaysCountExceeded: "DAYS_COUNT_EXCEEDED",
    SameDeliveryDates: "SAME_DELIVERY_DATES",
    IncorrectInn: "INCORRECT_INN",
    BadRequest: "BAD_REQUEST",
    UnsupportedMediaType: "UNSUPPORTED_MEDIA_TYPE",
    Forbidden: "FORBIDDEN",
    NotFound: "NOT_FOUND",
    Locked: "LOCKED",
    ConstraintViolation: "CONSTRAINT_VIOLATION",
    DuplicateMarketSku: "DUPLICATE_MARKET_SKU",
    InvalidMarketSku: "INVALID_MARKET_SKU",
    InvalidMapping: "INVALID_MAPPING",
    MissingMapping: "MISSING_MAPPING",
    UnknownParameter: "UNKNOWN_PARAMETER",
    InternalError: "INTERNAL_ERROR",
    MissingParam: "MISSING_PARAM",
    DuplicateShopSku: "DUPLICATE_SHOP_SKU",
    InvalidCurrency: "INVALID_CURRENCY",
    InvalidPaymentSettings: "INVALID_PAYMENT_SETTINGS",
    Other: "OTHER",
    InvalidCategory: "INVALID_CATEGORY",
    InvalidQueryParameter: "INVALID_QUERY_PARAMETER",
    CampaignNotFound: "CAMPAIGN_NOT_FOUND",
    PartnerNotFound: "PARTNER_NOT_FOUND",
    BusinessNotFound: "BUSINESS_NOT_FOUND",
    CampaignTypeNotSupported: "CAMPAIGN_TYPE_NOT_SUPPORTED",
    BadOffers: "BAD_OFFERS",
    AlreadyConfirmed: "ALREADY_CONFIRMED",
    CutoffNotReached: "CUTOFF_NOT_REACHED",
    NoOrders: "NO_ORDERS",
    BadOrders: "BAD_ORDERS",
    NoBoxes: "NO_BOXES",
    InvalidOrderBefore: "INVALID_ORDER_BEFORE",
    StatusNotAllowed: "STATUS_NOT_ALLOWED",
    SubstatusNotAllowed: "SUBSTATUS_NOT_ALLOWED",
    UserUnreachableNotAllowed: "USER_UNREACHABLE_NOT_ALLOWED",
    ActionForbidden: "ACTION_FORBIDDEN",
    CantDeliverOrderToAddress: "CANT_DELIVER_ORDER_TO_ADDRESS",
    PickupExpiredCancellationForbidden: "PICKUP_EXPIRED_CANCELLATION_FORBIDDEN",
    InvalidOrderStatus: "INVALID_ORDER_STATUS",
    CodeNeedBeRefreshed: "CODE_NEED_BE_REFRESHED",
    CodeAlreadyAccepted: "CODE_ALREADY_ACCEPTED",
    NoEmail: "NO_EMAIL",
    PromoEnded: "PROMO_ENDED",
    PromoEntryDeadlineExceeded: "PROMO_ENTRY_DEADLINE_EXCEEDED",
    PromoMechanicsNotSupported: "PROMO_MECHANICS_NOT_SUPPORTED",
    PromoSingleOfferTaskLimitExceeded: "PROMO_SINGLE_OFFER_TASK_LIMIT_EXCEEDED",
    SupplyRequestNotFound: "SUPPLY_REQUEST_NOT_FOUND",
    DocumentNotFound: "DOCUMENT_NOT_FOUND",
    ExternalOrderIdUpdateError: "EXTERNAL_ORDER_ID_UPDATE_ERROR",
    DeclineReasonAreRequiredError: "DECLINE_REASON_ARE_REQUIRED_ERROR",
    ContractNotFound: "CONTRACT_NOT_FOUND",
    ContractWithAgency: "CONTRACT_WITH_AGENCY",
    NotEnoughStock: "NOT_ENOUGH_STOCK",
    InvalidDeliveryOption: "INVALID_DELIVERY_OPTION",
    OrderAlreadyExists: "ORDER_ALREADY_EXISTS",
    OrderModificationNotAllowed: "ORDER_MODIFICATION_NOT_ALLOWED",
    DeliveryTaxInfoNoDbsPartner: "DELIVERY_TAX_INFO_NO_DBS_PARTNER",
    DeliveryTaxInfoIncorrectOrderStatus:
      "DELIVERY_TAX_INFO_INCORRECT_ORDER_STATUS",
    DeliveryTaxInfoTaxSystemIsNotSupported:
      "DELIVERY_TAX_INFO_TAX_SYSTEM_IS_NOT_SUPPORTED",
    DeliveryTaxInfoIncorrectDeliveryService:
      "DELIVERY_TAX_INFO_INCORRECT_DELIVERY_SERVICE",
    DeliveryTaxInfoIncorrectRequest: "DELIVERY_TAX_INFO_INCORRECT_REQUEST",
    ReturnAlreadyExists: "RETURN_ALREADY_EXISTS",
    InvalidReturnOffers: "INVALID_RETURN_OFFERS",
    PhotoUploadFailed: "PHOTO_UPLOAD_FAILED",
    InvalidDeliveryType: "INVALID_DELIVERY_TYPE",
    InvalidReturnReason: "INVALID_RETURN_REASON",
    InvalidItemDimensions: "INVALID_ITEM_DIMENSIONS",
    ApiDisabled: "API_DISABLED",
    RestrictedByMarketplaceRegion: "RESTRICTED_BY_MARKETPLACE_REGION",
    NoAccessByDeprecationPolicy: "NO_ACCESS_BY_DEPRECATION_POLICY",
    OrderEditError: "ORDER_EDIT_ERROR",
    AdvertiserStatusMismatch: "ADVERTISER_STATUS_MISMATCH",
    RestrictedForAdvertiser: "RESTRICTED_FOR_ADVERTISER",
    SubscriptionRequired: "SUBSCRIPTION_REQUIRED",
    CisHandleModeRestriction: "CIS_HANDLE_MODE_RESTRICTION",
  },
  /**
   * Тип ответа.
   * Возможные значения:
   * * `OK` — ошибок нет.
   * * `ERROR` — при обработке запроса произошла ошибка.
   */
  OutletsApiResponseStatusType: {
    /**
     * ошибок нет
     */
    Ok: "OK",
    /**
     * при обработке запроса произошла ошибка.
     */
    Error: "ERROR",
  },
  /**
   * День недели:
   *
   * * `MONDAY` — понедельник.
   * * `TUESDAY` — вторник.
   * * `WEDNESDAY` — среда.
   * * `THURSDAY` — четверг.
   * * `FRIDAY` — пятница.
   * * `SATURDAY` — суббота.
   * * `SUNDAY` — воскресенье.
   */
  OutletsDayOfWeekType: {
    /**
     * понедельник
     */
    Monday: "MONDAY",
    /**
     * вторник
     */
    Tuesday: "TUESDAY",
    /**
     * среда
     */
    Wednesday: "WEDNESDAY",
    /**
     * четверг
     */
    Thursday: "THURSDAY",
    /**
     * пятница
     */
    Friday: "FRIDAY",
    /**
     * суббота
     */
    Saturday: "SATURDAY",
    /**
     * воскресенье.
     */
    Sunday: "SUNDAY",
  },
  /**
   * Статус точки продаж.
   *
   * Возможные значения:
   *
   * * `AT_MODERATION` — проверяется.
   * * `FAILED` — не прошла проверку и отклонена модератором.
   * * `MODERATED` — проверена и одобрена.
   * * `NONMODERATED` — новая точка, нуждается в проверке.
   * * `UNKNOWN` — статус не указан. При определении статуса произошла ошибка.
   */
  OutletsOutletStatusType: {
    /**
     * проверяется
     */
    AtModeration: "AT_MODERATION",
    /**
     * не прошла проверку и отклонена модератором
     */
    Failed: "FAILED",
    /**
     * проверена и одобрена
     */
    Moderated: "MODERATED",
    /**
     * новая точка, нуждается в проверке
     */
    Nonmoderated: "NONMODERATED",
    /**
     * статус не указан. При определении статуса произошла ошибка.
     */
    Unknown: "UNKNOWN",
  },
  /**
   * Тип точки продаж.
   *
   * Возможные значения:
   *
   * * `DEPOT` — пункт выдачи заказов.
   * * `MIXED` — смешанный тип точки продаж (торговый зал и пункт выдачи заказов).
   * * `RETAIL` — розничная точка продаж (торговый зал).
   * * `NOT_DEFINED` — неизвестный тип точки продажи. При определении типа произошла ошибка.
   */
  OutletsOutletType: {
    /**
     * пункт выдачи заказов
     */
    Depot: "DEPOT",
    /**
     * смешанный тип точки продаж (торговый зал и пункт выдачи заказов)
     */
    Mixed: "MIXED",
    /**
     * розничная точка продаж (торговый зал)
     */
    Retail: "RETAIL",
    /**
     * неизвестный тип точки продажи. При определении типа произошла ошибка.
     */
    NotDefined: "NOT_DEFINED",
  },
  /**
   * Состояние точки продаж.
   *
   * Возможные значения:
   *
   * * `HIDDEN` — точка продаж выключена.
   * * `VISIBLE` — точка продаж включена.
   * * `UNKNOWN` — неизвестное состояние точки продажи. При определении состояния произошла ошибка.
   */
  OutletsOutletVisibilityType: {
    /**
     * точка продаж выключена
     */
    Hidden: "HIDDEN",
    /**
     * точка продаж включена
     */
    Visible: "VISIBLE",
    /**
     * неизвестное состояние точки продажи. При определении состояния произошла ошибка.
     */
    Unknown: "UNKNOWN",
  },
  /**
   * Тип региона.
   *
   * Возможные значения:
   *
   * * `CITY_DISTRICT` — район города.
   *
   * * `CITY` — крупный город.
   *
   * * `CONTINENT` — континент.
   *
   * * `COUNTRY_DISTRICT` — область.
   *
   * * `COUNTRY` — страна.
   *
   * * `REGION` — регион.
   *
   * * `REPUBLIC_AREA` — район субъекта федерации.
   *
   * * `REPUBLIC` — субъект федерации.
   *
   * * `SUBWAY_STATION` — станция метро.
   *
   * * `VILLAGE` — город.
   *
   * * `OTHER` — неизвестный регион.
   */
  OutletsRegionType: {
    /**
     * неизвестный регион.
     */
    Other: "OTHER",
    /**
     * континент.
     */
    Continent: "CONTINENT",
    /**
     * регион.
     */
    Region: "REGION",
    /**
     * страна.
     */
    Country: "COUNTRY",
    /**
     * область.
     */
    CountryDistrict: "COUNTRY_DISTRICT",
    /**
     * субъект федерации.
     */
    Republic: "REPUBLIC",
    /**
     * крупный город.
     */
    City: "CITY",
    /**
     * город.
     */
    Village: "VILLAGE",
    /**
     * район города.
     */
    CityDistrict: "CITY_DISTRICT",
    /**
     * станция метро.
     */
    SubwayStation: "SUBWAY_STATION",
    /**
     * район субъекта федерации.
     */
    RepublicArea: "REPUBLIC_AREA",
  },
  /**
   * Тип ответа.
   * Возможные значения:
   * * `OK` — ошибок нет.
   * * `ERROR` — при обработке запроса произошла ошибка.
   */
  PriceQuarantineApiResponseStatusType: {
    /**
     * ошибок нет
     */
    Ok: "OK",
    /**
     * при обработке запроса произошла ошибка.
     */
    Error: "ERROR",
  },
  /**
   * Коды валют:
   *
   * * `RUR` — российский рубль.
   * * `UAH` — украинская гривна.
   * * `BYR` — белорусский рубль.
   * * `KZT` — казахстанский тенге.
   * * `UZS` — узбекский сум.
   */
  PriceQuarantineCurrencyType: {
    /**
     * российский рубль
     */
    Rur: "RUR",
    Usd: "USD",
    Eur: "EUR",
    /**
     * украинская гривна
     */
    Uah: "UAH",
    Aud: "AUD",
    Gbp: "GBP",
    /**
     * белорусский рубль
     */
    Byr: "BYR",
    Byn: "BYN",
    Dkk: "DKK",
    Isk: "ISK",
    /**
     * казахстанский тенге
     */
    Kzt: "KZT",
    Cad: "CAD",
    Cny: "CNY",
    Nok: "NOK",
    Xdr: "XDR",
    Sgd: "SGD",
    Try: "TRY",
    Sek: "SEK",
    Chf: "CHF",
    Jpy: "JPY",
    Azn: "AZN",
    All: "ALL",
    Dzd: "DZD",
    Aoa: "AOA",
    Ars: "ARS",
    Amd: "AMD",
    Afn: "AFN",
    Bhd: "BHD",
    Bgn: "BGN",
    Bob: "BOB",
    Bwp: "BWP",
    Bnd: "BND",
    Brl: "BRL",
    Bif: "BIF",
    Huf: "HUF",
    Vef: "VEF",
    Kpw: "KPW",
    Vnd: "VND",
    Gmd: "GMD",
    Ghs: "GHS",
    Gnf: "GNF",
    Hkd: "HKD",
    Gel: "GEL",
    Aed: "AED",
    Egp: "EGP",
    Zmk: "ZMK",
    Ils: "ILS",
    Inr: "INR",
    Idr: "IDR",
    Jod: "JOD",
    Iqd: "IQD",
    Irr: "IRR",
    Yer: "YER",
    Qar: "QAR",
    Kes: "KES",
    Kgs: "KGS",
    Cop: "COP",
    Cdf: "CDF",
    Crc: "CRC",
    Kwd: "KWD",
    Cup: "CUP",
    Lak: "LAK",
    Lvl: "LVL",
    Sll: "SLL",
    Lbp: "LBP",
    Lyd: "LYD",
    Szl: "SZL",
    Ltl: "LTL",
    Mur: "MUR",
    Mro: "MRO",
    Mkd: "MKD",
    Mwk: "MWK",
    Mga: "MGA",
    Myr: "MYR",
    Mad: "MAD",
    Mxn: "MXN",
    Mzn: "MZN",
    Mdl: "MDL",
    Mnt: "MNT",
    Npr: "NPR",
    Ngn: "NGN",
    Nio: "NIO",
    Nzd: "NZD",
    Omr: "OMR",
    Pkr: "PKR",
    Pyg: "PYG",
    Pen: "PEN",
    Pln: "PLN",
    Khr: "KHR",
    Sar: "SAR",
    Ron: "RON",
    Scr: "SCR",
    Syp: "SYP",
    Skk: "SKK",
    Sos: "SOS",
    Sdg: "SDG",
    Srd: "SRD",
    Tjs: "TJS",
    Thb: "THB",
    Twd: "TWD",
    Bdt: "BDT",
    Tzs: "TZS",
    Tnd: "TND",
    Tmm: "TMM",
    Ugx: "UGX",
    /**
     * узбекский сум.
     */
    Uzs: "UZS",
    Uyu: "UYU",
    Php: "PHP",
    Djf: "DJF",
    Xaf: "XAF",
    Xof: "XOF",
    Hrk: "HRK",
    Czk: "CZK",
    Clp: "CLP",
    Lkr: "LKR",
    Eek: "EEK",
    Etb: "ETB",
    Rsd: "RSD",
    Zar: "ZAR",
    Krw: "KRW",
    Nad: "NAD",
    Tl: "TL",
    Ue: "UE",
  },
  /**
   * Статус карточки товара:
   *
   * * `HAS_CARD_CAN_NOT_UPDATE` — Карточка Маркета.
   * * `HAS_CARD_CAN_UPDATE` — Можно дополнить.
   * * `HAS_CARD_CAN_UPDATE_ERRORS` — Изменения не приняты.
   * * `HAS_CARD_CAN_UPDATE_PROCESSING` — Изменения на проверке.
   * * `NO_CARD_NEED_CONTENT` — Создайте карточку.
   * * `NO_CARD_MARKET_WILL_CREATE` — Создаст Маркет.
   * * `NO_CARD_ERRORS` — Не создана из-за ошибки.
   * * `NO_CARD_PROCESSING` — Проверяем данные.
   * * `NO_CARD_ADD_TO_CAMPAIGN` — Разместите товар в магазине.
   */
  PriceQuarantineOfferCardStatusType: {
    /**
     * Карточка Маркета
     */
    HasCardCanNotUpdate: "HAS_CARD_CAN_NOT_UPDATE",
    /**
     * Можно дополнить
     */
    HasCardCanUpdate: "HAS_CARD_CAN_UPDATE",
    /**
     * Изменения не приняты
     */
    HasCardCanUpdateErrors: "HAS_CARD_CAN_UPDATE_ERRORS",
    /**
     * Изменения на проверке
     */
    HasCardCanUpdateProcessing: "HAS_CARD_CAN_UPDATE_PROCESSING",
    /**
     * Создайте карточку
     */
    NoCardNeedContent: "NO_CARD_NEED_CONTENT",
    /**
     * Создаст Маркет
     */
    NoCardMarketWillCreate: "NO_CARD_MARKET_WILL_CREATE",
    /**
     * Не создана из-за ошибки
     */
    NoCardErrors: "NO_CARD_ERRORS",
    /**
     * Проверяем данные
     */
    NoCardProcessing: "NO_CARD_PROCESSING",
    /**
     * Разместите товар в магазине.
     */
    NoCardAddToCampaign: "NO_CARD_ADD_TO_CAMPAIGN",
  },
  /**
   * Имя параметра причины скрытия товара по цене.
   *
   * * `CURRENT_PRICE` — цена, из-за которой товар попал в карантин.
   * * `LAST_VALID_PRICE` — последняя цена до попадания в карантин (только для карантина типа `PRICE_CHANGE`).
   * * `MIN_PRICE` — порог попадания в карантин (только для карантина типов `LOW_PRICE` и `LOW_PRICE_PROMO`).
   * * `CURRENCY` — валюта.
   */
  PriceQuarantinePriceQuarantineVerdictParamNameType: {
    /**
     * цена, из-за которой товар попал в карантин
     */
    CurrentPrice: "CURRENT_PRICE",
    /**
     * последняя цена до попадания в карантин (только для карантина типа `PRICE_CHANGE`)
     */
    LastValidPrice: "LAST_VALID_PRICE",
    /**
     * порог попадания в карантин (только для карантина типов `LOW_PRICE` и `LOW_PRICE_PROMO`)
     */
    MinPrice: "MIN_PRICE",
    /**
     * валюта.
     */
    Currency: "CURRENCY",
  },
  /**
   * Типы карантина:
   *
   * * `PRICE_CHANGE` — новая цена слишком сильно отличается от прежней. В поле `params` будет новая цена `CURRENT_PRICE` и последняя цена до попадания в карантин `LAST_VALID_PRICE`.
   * * `LOW_PRICE` — установленная цена слишком сильно отличается от рыночной. В поле `params` будет установленная вами цена `CURRENT_PRICE` и порог попадания в карантин `MIN_PRICE`.
   * * `LOW_PRICE_PROMO` — цена после применения акций слишком сильно отличается от рыночной. В поле `params` будет цена после применения акций `CURRENT_PRICE` и порог попадания в карантин `MIN_PRICE`.
   */
  PriceQuarantinePriceQuarantineVerdictType: {
    /**
     * новая цена слишком сильно отличается от прежней. В поле `params` будет новая цена `CURRENT_PRICE` и последняя цена до попадания в карантин `LAST_VALID_PRICE`
     */
    PriceChange: "PRICE_CHANGE",
    /**
     * установленная цена слишком сильно отличается от рыночной. В поле `params` будет установленная вами цена `CURRENT_PRICE` и порог попадания в карантин `MIN_PRICE`
     */
    LowPrice: "LOW_PRICE",
    /**
     * цена после применения акций слишком сильно отличается от рыночной. В поле `params` будет цена после применения акций `CURRENT_PRICE` и порог попадания в карантин `MIN_PRICE`.
     */
    LowPricePromo: "LOW_PRICE_PROMO",
  },
  /**
   * Тип ответа.
   * Возможные значения:
   * * `OK` — ошибок нет.
   * * `ERROR` — при обработке запроса произошла ошибка.
   */
  PricesApiResponseStatusType: {
    /**
     * ошибок нет
     */
    Ok: "OK",
    /**
     * при обработке запроса произошла ошибка.
     */
    Error: "ERROR",
  },
  /**
   * Коды валют:
   *
   * * `RUR` — российский рубль.
   * * `UAH` — украинская гривна.
   * * `BYR` — белорусский рубль.
   * * `KZT` — казахстанский тенге.
   * * `UZS` — узбекский сум.
   */
  PricesCurrencyType: {
    /**
     * российский рубль
     */
    Rur: "RUR",
    Usd: "USD",
    Eur: "EUR",
    /**
     * украинская гривна
     */
    Uah: "UAH",
    Aud: "AUD",
    Gbp: "GBP",
    /**
     * белорусский рубль
     */
    Byr: "BYR",
    Byn: "BYN",
    Dkk: "DKK",
    Isk: "ISK",
    /**
     * казахстанский тенге
     */
    Kzt: "KZT",
    Cad: "CAD",
    Cny: "CNY",
    Nok: "NOK",
    Xdr: "XDR",
    Sgd: "SGD",
    Try: "TRY",
    Sek: "SEK",
    Chf: "CHF",
    Jpy: "JPY",
    Azn: "AZN",
    All: "ALL",
    Dzd: "DZD",
    Aoa: "AOA",
    Ars: "ARS",
    Amd: "AMD",
    Afn: "AFN",
    Bhd: "BHD",
    Bgn: "BGN",
    Bob: "BOB",
    Bwp: "BWP",
    Bnd: "BND",
    Brl: "BRL",
    Bif: "BIF",
    Huf: "HUF",
    Vef: "VEF",
    Kpw: "KPW",
    Vnd: "VND",
    Gmd: "GMD",
    Ghs: "GHS",
    Gnf: "GNF",
    Hkd: "HKD",
    Gel: "GEL",
    Aed: "AED",
    Egp: "EGP",
    Zmk: "ZMK",
    Ils: "ILS",
    Inr: "INR",
    Idr: "IDR",
    Jod: "JOD",
    Iqd: "IQD",
    Irr: "IRR",
    Yer: "YER",
    Qar: "QAR",
    Kes: "KES",
    Kgs: "KGS",
    Cop: "COP",
    Cdf: "CDF",
    Crc: "CRC",
    Kwd: "KWD",
    Cup: "CUP",
    Lak: "LAK",
    Lvl: "LVL",
    Sll: "SLL",
    Lbp: "LBP",
    Lyd: "LYD",
    Szl: "SZL",
    Ltl: "LTL",
    Mur: "MUR",
    Mro: "MRO",
    Mkd: "MKD",
    Mwk: "MWK",
    Mga: "MGA",
    Myr: "MYR",
    Mad: "MAD",
    Mxn: "MXN",
    Mzn: "MZN",
    Mdl: "MDL",
    Mnt: "MNT",
    Npr: "NPR",
    Ngn: "NGN",
    Nio: "NIO",
    Nzd: "NZD",
    Omr: "OMR",
    Pkr: "PKR",
    Pyg: "PYG",
    Pen: "PEN",
    Pln: "PLN",
    Khr: "KHR",
    Sar: "SAR",
    Ron: "RON",
    Scr: "SCR",
    Syp: "SYP",
    Skk: "SKK",
    Sos: "SOS",
    Sdg: "SDG",
    Srd: "SRD",
    Tjs: "TJS",
    Thb: "THB",
    Twd: "TWD",
    Bdt: "BDT",
    Tzs: "TZS",
    Tnd: "TND",
    Tmm: "TMM",
    Ugx: "UGX",
    /**
     * узбекский сум.
     */
    Uzs: "UZS",
    Uyu: "UYU",
    Php: "PHP",
    Djf: "DJF",
    Xaf: "XAF",
    Xof: "XOF",
    Hrk: "HRK",
    Czk: "CZK",
    Clp: "CLP",
    Lkr: "LKR",
    Eek: "EEK",
    Etb: "ETB",
    Rsd: "RSD",
    Zar: "ZAR",
    Krw: "KRW",
    Nad: "NAD",
    Tl: "TL",
    Ue: "UE",
  },
  /**
   * Тип ответа.
   * Возможные значения:
   * * `OK` — ошибок нет.
   * * `ERROR` — при обработке запроса произошла ошибка.
   */
  PromosApiResponseStatusType: {
    /**
     * ошибок нет
     */
    Ok: "OK",
    /**
     * при обработке запроса произошла ошибка.
     */
    Error: "ERROR",
  },
  /**
   * Каналы продвижения товаров:
   *
   * * `PUSH` — пуш-уведомление из приложения Яндекс Маркет.
   *
   * * `STRETCH_MAIN` — верхний баннер-растяжка на главной странице Яндекс Маркета.
   *
   * * `MAIN_PAGE_CAROUSEL` — карусель акций на главной странице Яндекс Маркета.
   *
   * * `PRODUCT_RETAIL_PAGE` — товар на странице ритейл-повода.
   *
   * * `MAIN_PAGE_CAROUSEL_WEB` — карусель акций на главной странице веб версии Яндекс Маркета.
   *
   * * `PRODUCT_SEPARATE_LANDING` — товар на лендинге акции.
   *
   * * `SUPER_SHELF_CATEGORY` — полка в категориях.
   *
   * * `CAROUSEL_RETAIL_PAGE` — карусель на лендинге ритейл-повода.
   *
   * * `POPUP_APPLICATION` — всплывающее окно в приложении Яндекс Маркет.
   *
   * * `POST_TELEGRAM` — пост в Телеграм-канале Яндекс Маркета.
   *
   * * `CPA` — реклама в партнерской сети Яндекс Маркета.
   *
   * * `WEB_PERFORMANCE_DIRECT` — реклама в Яндекс Директе.
   *
   * * `APP_PERFORMANCE` — реклама в :no-translate[AppStore] и :no-translate[Google Play].
   *
   * * `BANNER_PICKUP_POINT` — баннер в ПВЗ Маркета.
   *
   * * `BLOGGER_PERFORMANCE` — рекламная интеграция у блогеров.
   *
   * * `DIGITAL_CHANNEL_BANNER` — баннер в digital-каналах и социальных сетях :no-translate[VK], :no-translate[Одноклассники].
   *
   * * `YANDEX_ECOSYSTEM_CHANNELS` — реклама в других сервисах Яндекса: :no-translate[GO], :no-translate[Delivery], :no-translate[Еда].
   *
   * * `PARTNERS_MAIN_BANNER` — баннер на главной странице :no-translate[mail.ru], :no-translate[auto.ru], :no-translate[ya.ru].
   *
   * * `OTHER` — прочее.
   */
  PromosChannelType: {
    /**
     * пуш-уведомление из приложения Яндекс Маркет.
     */
    Push: "PUSH",
    /**
     * верхний баннер-растяжка на главной странице Яндекс Маркета.
     */
    StretchMain: "STRETCH_MAIN",
    /**
     * карусель акций на главной странице Яндекс Маркета.
     */
    MainPageCarousel: "MAIN_PAGE_CAROUSEL",
    /**
     * товар на странице ритейл-повода.
     */
    ProductRetailPage: "PRODUCT_RETAIL_PAGE",
    /**
     * карусель акций на главной странице веб версии Яндекс Маркета.
     */
    MainPageCarouselWeb: "MAIN_PAGE_CAROUSEL_WEB",
    /**
     * товар на лендинге акции.
     */
    ProductSeparateLanding: "PRODUCT_SEPARATE_LANDING",
    /**
     * полка в категориях.
     */
    SuperShelfCategory: "SUPER_SHELF_CATEGORY",
    /**
     * карусель на лендинге ритейл-повода.
     */
    CarouselRetailPage: "CAROUSEL_RETAIL_PAGE",
    /**
     * всплывающее окно в приложении Яндекс Маркет.
     */
    PopupApplication: "POPUP_APPLICATION",
    /**
     * пост в Телеграм-канале Яндекс Маркета.
     */
    PostTelegram: "POST_TELEGRAM",
    /**
     * реклама в партнерской сети Яндекс Маркета.
     */
    Cpa: "CPA",
    /**
     * реклама в Яндекс Директе.
     */
    WebPerformanceDirect: "WEB_PERFORMANCE_DIRECT",
    /**
     * реклама в :no-translate[AppStore] и :no-translate[Google Play].
     */
    AppPerformance: "APP_PERFORMANCE",
    /**
     * баннер в ПВЗ Маркета.
     */
    BannerPickupPoint: "BANNER_PICKUP_POINT",
    /**
     * рекламная интеграция у блогеров.
     */
    BloggerPerformance: "BLOGGER_PERFORMANCE",
    /**
     * баннер в digital-каналах и социальных сетях :no-translate[VK], :no-translate[Одноклассники].
     */
    DigitalChannelBanner: "DIGITAL_CHANNEL_BANNER",
    /**
     * реклама в других сервисах Яндекса: :no-translate[GO], :no-translate[Delivery], :no-translate[Еда].
     */
    YandexEcosystemChannels: "YANDEX_ECOSYSTEM_CHANNELS",
    /**
     * баннер на главной странице :no-translate[mail.ru], :no-translate[auto.ru], :no-translate[ya.ru].
     */
    PartnersMainBanner: "PARTNERS_MAIN_BANNER",
    /**
     * прочее.
     */
    Other: "OTHER",
  },
  /**
   * Тип акции:
   *
   * * `DIRECT_DISCOUNT` — прямая скидка.
   *
   * * `BLUE_FLASH` — флеш-акция.
   *
   * * `MARKET_PROMOCODE` — скидка по промокоду.
   */
  PromosMechanicsType: {
    /**
     * прямая скидка.
     */
    DirectDiscount: "DIRECT_DISCOUNT",
    /**
     * флеш-акция.
     */
    BlueFlash: "BLUE_FLASH",
    /**
     * скидка по промокоду.
     */
    MarketPromocode: "MARKET_PROMOCODE",
  },
  /**
   * Фильтр для товаров, которые добавлены в акцию вручную:
   *
   * * `MANUALLY_ADDED` — товары, которые добавлены вручную.
   *
   * * `NOT_MANUALLY_ADDED`— товары, которые не участвуют в акции и те, которые добавлены автоматически.
   *
   * Об автоматическом и ручном добавлении товаров в акцию читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/marketing/promos/market/index).
   */
  PromosPromoOfferParticipationStatusFilterType: {
    /**
     * товары, которые добавлены вручную.
     */
    ManuallyAdded: "MANUALLY_ADDED",
    /**
     * товары, которые не участвуют в акции и те, которые добавлены автоматически.
     */
    NotManuallyAdded: "NOT_MANUALLY_ADDED",
  },
  /**
   * Фильтр для товаров, которые могут участвовать в акции:
   *
   * * `MANUALLY_ADDED` — товары, которые добавлены вручную.
   *
   * * `RENEWED` — товары, которые добавлены автоматически из предыдущей акции «Бестселлеры Маркета». Только для акций «Бестселлеры Маркета».
   *
   * * `RENEW_FAILED` — товары, которые не получилось перенести из предыдущей акции «Бестселлеры Маркета». Только для акций «Бестселлеры Маркета».
   *
   * * `NOT_MANUALLY_ADDED` — товары, которые не участвуют в акции и те, которые добавлены автоматически.
   *
   * * `MINIMUM_FOR_PROMOS` — товары с [установленным минимумом по цене для акций](*minimumForBestseller), который соответствует порогу `maxPromoPrice`. Такие товары участвуют в акции с ценой `maxPromoPrice`. Только для акций «Бестселлеры Маркета».
   *
   * Если не передать параметр `statuses`, вернутся все товары.
   *
   * Об автоматическом и ручном добавлении товаров в акцию читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/marketing/promos/market/index).
   */
  PromosPromoOfferParticipationStatusMultiFilterType: {
    /**
     * товары, которые добавлены вручную.
     */
    ManuallyAdded: "MANUALLY_ADDED",
    /**
     * товары, которые добавлены автоматически из предыдущей акции «Бестселлеры Маркета». Только для акций «Бестселлеры Маркета».
     */
    Renewed: "RENEWED",
    /**
     * товары, которые не получилось перенести из предыдущей акции «Бестселлеры Маркета». Только для акций «Бестселлеры Маркета».
     */
    RenewFailed: "RENEW_FAILED",
    /**
     * товары, которые не участвуют в акции и те, которые добавлены автоматически.
     */
    NotManuallyAdded: "NOT_MANUALLY_ADDED",
    /**
     * товары с [установленным минимумом по цене для акций](*minimumForBestseller), который соответствует порогу `maxPromoPrice`. Такие товары участвуют в акции с ценой `maxPromoPrice`. Только для акций «Бестселлеры Маркета».
     */
    MinimumForPromos: "MINIMUM_FOR_PROMOS",
  },
  /**
   * Статус товара в акции:
   *
   * * `AUTO` — добавлен автоматически во всех магазинах кабинета, в которых товар доступен для покупки.
   *
   * * `PARTIALLY_AUTO` — добавлен автоматически у части магазинов.
   *
   * * `MANUAL` — добавлен вручную.
   *
   * * `NOT_PARTICIPATING` — не участвует в акции.
   *
   * * `RENEWED` — успешно перенесен из предыдущей акции «Бестселлеры Маркета». Только для акций «Бестселлеры Маркета».
   *
   * * `RENEW_FAILED` — не получилось перенести из предыдущей акции «Бестселлеры Маркета». Только для акций «Бестселлеры Маркета».
   *
   * * `MINIMUM_FOR_PROMOS` — участвует в акции с ценой `maxPromoPrice` ([установлен минимум по цене для акций](*minimumForBestseller), который соответствует порогу `maxPromoPrice`). Только для акций «Бестселлеры Маркета».
   *
   * Об автоматическом и ручном добавлении товаров в акцию читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/marketing/promos/market/index).
   */
  PromosPromoOfferParticipationStatusType: {
    /**
     * добавлен автоматически во всех магазинах кабинета, в которых товар доступен для покупки.
     */
    Auto: "AUTO",
    /**
     * добавлен автоматически у части магазинов.
     */
    PartiallyAuto: "PARTIALLY_AUTO",
    /**
     * добавлен вручную.
     */
    Manual: "MANUAL",
    /**
     * не участвует в акции.
     */
    NotParticipating: "NOT_PARTICIPATING",
    /**
     * успешно перенесен из предыдущей акции «Бестселлеры Маркета». Только для акций «Бестселлеры Маркета».
     */
    Renewed: "RENEWED",
    /**
     * не получилось перенести из предыдущей акции «Бестселлеры Маркета». Только для акций «Бестселлеры Маркета».
     */
    RenewFailed: "RENEW_FAILED",
    /**
     * участвует в акции с ценой `maxPromoPrice` ([установлен минимум по цене для акций](*minimumForBestseller), который соответствует порогу `maxPromoPrice`). Только для акций «Бестселлеры Маркета».
     */
    MinimumForPromos: "MINIMUM_FOR_PROMOS",
  },
  /**
   * Предупреждение, которое появилось при добавлении товара:
   *
   * * `DEEP_DISCOUNT_OFFER` — большая разница с ценой в каталоге. Проверьте, нет ли ошибки.
   *
   * * `CATALOG_PRICE_IS_LOWER_THAN_PROMO` — цена, которая действует во всех магазинах, ниже цены по акции. У товара не будет отображаться цена по акции.
   *
   * * `SHOP_PRICES_ARE_LOWER_THAN_PROMO` — цена в отдельном магазине ниже цены по акции. У товара в акции будет отображаться цена в магазине. Для остальных магазинов будет действовать цена по акции.
   *
   * * `SHOP_OFFER_NOT_ELIGIBLE_FOR_PROMO` — товар в отдельном магазине не подходит под условия акции.
   */
  PromosPromoOfferUpdateWarningCodeType: {
    /**
     * большая разница с ценой в каталоге. Проверьте, нет ли ошибки.
     */
    DeepDiscountOffer: "DEEP_DISCOUNT_OFFER",
    /**
     * цена, которая действует во всех магазинах, ниже цены по акции. У товара не будет отображаться цена по акции.
     */
    CatalogPriceIsLowerThanPromo: "CATALOG_PRICE_IS_LOWER_THAN_PROMO",
    /**
     * цена в отдельном магазине ниже цены по акции. У товара в акции будет отображаться цена в магазине. Для остальных магазинов будет действовать цена по акции.
     */
    ShopPricesAreLowerThanPromo: "SHOP_PRICES_ARE_LOWER_THAN_PROMO",
    /**
     * товар в отдельном магазине не подходит под условия акции.
     */
    ShopOfferNotEligibleForPromo: "SHOP_OFFER_NOT_ELIGIBLE_FOR_PROMO",
  },
  /**
   * Без указания фильтра возвращаются акции, в которых продавец участвует или может принять участие.
   *
   * Какие акции вернутся при указании фильтра:
   *
   * * `PARTICIPATING_NOW` — текущие акции, в которых участвует продавец.
   *
   * * `PARTICIPATED` — завершенные акции, в которых продавец участвовал за последний год. Если за год их было меньше 15, в ответе придут 15 последних акций за все время.
   */
  PromosPromoParticipationType: {
    /**
     * текущие акции, в которых участвует продавец.
     */
    ParticipatingNow: "PARTICIPATING_NOW",
    /**
     * завершенные акции, в которых продавец участвовал за последний год. Если за год их было меньше 15, в ответе придут 15 последних акций за все время.
     */
    Participated: "PARTICIPATED",
  },
  /**
   * Описание ошибки:
   *
   * * `OFFER_DOES_NOT_EXIST` — в кабинете нет товара с таким SKU.
   */
  PromosRejectedPromoOfferDeleteReasonType: {
    /**
     * в кабинете нет товара с таким SKU.
     */
    OfferDoesNotExist: "OFFER_DOES_NOT_EXIST",
  },
  /**
   * Причина отклонения изменения:
   *
   * * `OFFER_DOES_NOT_EXIST` — в кабинете нет товара с таким SKU.
   *
   * * `OFFER_DUPLICATION` — один и тот же товар передан несколько раз.
   *
   * * `OFFER_NOT_ELIGIBLE_FOR_PROMO` — товар не подходит под условия акции.
   *
   * * `OFFER_PROMOS_MAX_BYTE_SIZE_EXCEEDED` — товар не добавлен в акцию по техническим причинам.
   *
   * * `DEADLINE_FOR_FOCUS_PROMOS_EXCEEDED` — истек срок добавления товаров в акцию.
   *
   * * `EMPTY_OLD_PRICE` — не указана зачеркнутая цена.
   *
   * * `EMPTY_PROMO_PRICE` — не указана цена по акции.
   *
   * * `MAX_PROMO_PRICE_EXCEEDED` — цена по акции превышает максимально возможную цену для участия в акции.
   *
   * * `PROMO_PRICE_BIGGER_THAN_MAX` — цена по акции больше 95% от зачеркнутой цены.
   *
   * * `PROMO_PRICE_SMALLER_THAN_MIN` — цена по акции меньше 1% от зачеркнутой цены.
   *
   * * `PRICE_TOO_BIG` — слишком большая цена по акции.
   *
   * * `OLD_PRICE_TOO_BIG` — слишком большая зачеркнутая цена.
   */
  PromosRejectedPromoOfferUpdateReasonType: {
    /**
     * в кабинете нет товара с таким SKU.
     */
    OfferDoesNotExist: "OFFER_DOES_NOT_EXIST",
    /**
     * один и тот же товар передан несколько раз.
     */
    OfferDuplication: "OFFER_DUPLICATION",
    /**
     * товар не подходит под условия акции.
     */
    OfferNotEligibleForPromo: "OFFER_NOT_ELIGIBLE_FOR_PROMO",
    /**
     * товар не добавлен в акцию по техническим причинам.
     */
    OfferPromosMaxByteSizeExceeded: "OFFER_PROMOS_MAX_BYTE_SIZE_EXCEEDED",
    /**
     * истек срок добавления товаров в акцию.
     */
    DeadlineForFocusPromosExceeded: "DEADLINE_FOR_FOCUS_PROMOS_EXCEEDED",
    /**
     * не указана зачеркнутая цена.
     */
    EmptyOldPrice: "EMPTY_OLD_PRICE",
    /**
     * не указана цена по акции.
     */
    EmptyPromoPrice: "EMPTY_PROMO_PRICE",
    /**
     * цена по акции превышает максимально возможную цену для участия в акции.
     */
    MaxPromoPriceExceeded: "MAX_PROMO_PRICE_EXCEEDED",
    /**
     * цена по акции больше 95% от зачеркнутой цены.
     */
    PromoPriceBiggerThanMax: "PROMO_PRICE_BIGGER_THAN_MAX",
    /**
     * цена по акции меньше 1% от зачеркнутой цены.
     */
    PromoPriceSmallerThanMin: "PROMO_PRICE_SMALLER_THAN_MIN",
    /**
     * слишком большая цена по акции.
     */
    PriceTooBig: "PRICE_TOO_BIG",
    /**
     * слишком большая зачеркнутая цена.
     */
    OldPriceTooBig: "OLD_PRICE_TOO_BIG",
  },
  /**
   * Составляющие индекса качества.
   *
   * **Для модели DBS:**
   * * `DBS_CANCELLATION_RATE` — доля отмененных товаров.
   * * `DBS_LATE_DELIVERY_RATE` — доля заказов, доставленных после плановой даты.
   *
   * **Для моделей FBS и Экспресс:**
   * * `FBS_CANCELLATION_RATE` — доля отмененных товаров.
   * * `FBS_LATE_SHIP_RATE` — доля не вовремя отгруженных заказов.
   */
  RatingsAffectedOrderQualityRatingComponentType: {
    /**
     * доля отмененных товаров
     */
    DbsCancellationRate: "DBS_CANCELLATION_RATE",
    /**
     * доля заказов, доставленных после плановой даты.
     */
    DbsLateDeliveryRate: "DBS_LATE_DELIVERY_RATE",
    /**
     * доля отмененных товаров
     */
    FbsCancellationRate: "FBS_CANCELLATION_RATE",
    /**
     * доля не вовремя отгруженных заказов.
     */
    FbsLateShipRate: "FBS_LATE_SHIP_RATE",
  },
  /**
   * Тип ответа.
   * Возможные значения:
   * * `OK` — ошибок нет.
   * * `ERROR` — при обработке запроса произошла ошибка.
   */
  RatingsApiResponseStatusType: {
    /**
     * ошибок нет
     */
    Ok: "OK",
    /**
     * при обработке запроса произошла ошибка.
     */
    Error: "ERROR",
  },
  /**
   * Составляющие индекса качества.
   *
   * **Для модели DBS:**
   * * `DBS_CANCELLATION_RATE` — доля отмененных товаров.
   * * `DBS_LATE_DELIVERY_RATE` — доля заказов, доставленных после плановой даты.
   *
   * **Для моделей FBS и Экспресс:**
   * * `FBS_CANCELLATION_RATE` — доля отмененных товаров.
   * * `FBS_LATE_SHIP_RATE` — доля не вовремя отгруженных заказов.
   *
   * **Для модели FBY:**
   * * `FBY_LATE_DELIVERY_RATE` — доля товаров, которые приехали на склад с опозданием.
   * * `FBY_CANCELLATION_RATE` — доля отмененных или недоставленных товаров.
   * * `FBY_DELIVERY_DIFF_RATE` — доля товаров, которые не прибыли вместе с поставкой или которые не приняли.
   * * `FBY_LATE_EDITING_RATE` — доля товаров, которые поздно убрали из заявки.
   */
  RatingsQualityRatingComponentType: {
    /**
     * доля отмененных товаров
     */
    DbsCancellationRate: "DBS_CANCELLATION_RATE",
    /**
     * доля заказов, доставленных после плановой даты.
     */
    DbsLateDeliveryRate: "DBS_LATE_DELIVERY_RATE",
    /**
     * доля отмененных товаров
     */
    FbsCancellationRate: "FBS_CANCELLATION_RATE",
    /**
     * доля не вовремя отгруженных заказов.
     */
    FbsLateShipRate: "FBS_LATE_SHIP_RATE",
    /**
     * доля товаров, которые приехали на склад с опозданием
     */
    FbyLateDeliveryRate: "FBY_LATE_DELIVERY_RATE",
    /**
     * доля отмененных или недоставленных товаров
     */
    FbyCancellationRate: "FBY_CANCELLATION_RATE",
    /**
     * доля товаров, которые не прибыли вместе с поставкой или которые не приняли
     */
    FbyDeliveryDiffRate: "FBY_DELIVERY_DIFF_RATE",
    /**
     * доля товаров, которые поздно убрали из заявки.
     */
    FbyLateEditingRate: "FBY_LATE_EDITING_RATE",
  },
  /**
   * Тип ответа.
   * Возможные значения:
   * * `OK` — ошибок нет.
   * * `ERROR` — при обработке запроса произошла ошибка.
   */
  RegionsApiResponseStatusType: {
    /**
     * ошибок нет
     */
    Ok: "OK",
    /**
     * при обработке запроса произошла ошибка.
     */
    Error: "ERROR",
  },
  /**
   * Тип региона.
   *
   * Возможные значения:
   *
   * * `CITY_DISTRICT` — район города.
   *
   * * `CITY` — крупный город.
   *
   * * `CONTINENT` — континент.
   *
   * * `COUNTRY_DISTRICT` — область.
   *
   * * `COUNTRY` — страна.
   *
   * * `REGION` — регион.
   *
   * * `REPUBLIC_AREA` — район субъекта федерации.
   *
   * * `REPUBLIC` — субъект федерации.
   *
   * * `SUBWAY_STATION` — станция метро.
   *
   * * `VILLAGE` — город.
   *
   * * `OTHER` — неизвестный регион.
   */
  RegionsRegionType: {
    /**
     * неизвестный регион.
     */
    Other: "OTHER",
    /**
     * континент.
     */
    Continent: "CONTINENT",
    /**
     * регион.
     */
    Region: "REGION",
    /**
     * страна.
     */
    Country: "COUNTRY",
    /**
     * область.
     */
    CountryDistrict: "COUNTRY_DISTRICT",
    /**
     * субъект федерации.
     */
    Republic: "REPUBLIC",
    /**
     * крупный город.
     */
    City: "CITY",
    /**
     * город.
     */
    Village: "VILLAGE",
    /**
     * район города.
     */
    CityDistrict: "CITY_DISTRICT",
    /**
     * станция метро.
     */
    SubwayStation: "SUBWAY_STATION",
    /**
     * район субъекта федерации.
     */
    RepublicArea: "REPUBLIC_AREA",
  },
  /**
   * Тип ответа.
   * Возможные значения:
   * * `OK` — ошибок нет.
   * * `ERROR` — при обработке запроса произошла ошибка.
   */
  ReportsApiResponseStatusType: {
    /**
     * ошибок нет
     */
    Ok: "OK",
    /**
     * при обработке запроса произошла ошибка.
     */
    Error: "ERROR",
  },
  /**
   * Формат страницы и размер штрихкодов:
   *
   * * `F_30_20` — А4, штрихкоды размера 30 × 20 мм.
   * * `F_43_25` — А4, штрихкоды размера 43 × 25 мм.
   * * `F_58_40` — А4, штрихкоды размера 58 × 40 мм.
   * * `F_43_25_SINGLE` — для печати этикеток.
   */
  ReportsBarcodeFormatType: {
    /**
     * А4, штрихкоды размера 30 × 20 мм
     */
    F3020: "F_30_20",
    /**
     * А4, штрихкоды размера 43 × 25 мм
     */
    F4325: "F_43_25",
    /**
     * А4, штрихкоды размера 58 × 40 мм
     */
    F5840: "F_58_40",
    /**
     * для печати этикеток.
     */
    F4325Single: "F_43_25_SINGLE",
  },
  /**
   * Тип договора:
   *
   * * `INCOME` — договор на размещение.
   *
   * * `OUTCOME` — договор на продвижение.
   */
  ReportsClosureDocumentsContractType: {
    /**
     * договор на размещение.
     */
    Income: "INCOME",
    /**
     * договор на продвижение.
     */
    Outcome: "OUTCOME",
    Marketing: "MARKETING",
  },
  /**
   * За какой период нужна детализация:
   *
   * * `WEEK` — по неделям.
   *
   * * `MONTH` — по месяцам.
   */
  ReportsKeyIndicatorsReportDetalizationLevelType: {
    /**
     * по неделям.
     */
    Week: "WEEK",
    /**
     * по месяцам.
     */
    Month: "MONTH",
  },
  /**
   * Тип сортировки ярлыков:
   *
   * * `SORT_BY_GIVEN_ORDER` — ярлыки заказов будут расположены в том же порядке, в каком были переданы идентификаторы заказов в запросе.
   * * `SORT_BY_ORDER_CREATED_AT` — ярлыки будут расположены в соответствии с датой создания заказа с группировкой по магазинам.
   *
   * Если параметр не указан, ярлыки сортируются по дате создания.
   */
  ReportsLabelsSortingType: {
    /**
     * ярлыки заказов будут расположены в том же порядке, в каком были переданы идентификаторы заказов в запросе
     */
    SortByGivenOrder: "SORT_BY_GIVEN_ORDER",
    /**
     * ярлыки будут расположены в соответствии с датой создания заказа с группировкой по магазинам.
     */
    SortByOrderCreatedAt: "SORT_BY_ORDER_CREATED_AT",
  },
  /**
   * Размещение ярлыков на странице PDF-файла:
   *
   * * `A9_HORIZONTALLY` — ярлык размером 58 × 40 мм без полей, близок к формату :no-translate[A9].
   *
   * Пример ярлыка для продавцов Маркета
   *
   * ![Изображение горизонтального ярлыка формата :no-translate[A9] для продавцов Маркета](../../_images/labels/label-A9-horizontally.png)
   *
   * Пример ярлыка для продавцов Market Yandex Go
   *
   * ![Изображение горизонтального ярлыка формата A9 для продавцов Market Yandex Go](../../_images/labels/label-A9-horizontally-uz.png)
   *
   * * `A9` — ярлык размером 40 × 58 мм без полей, близок к формату A9.
   *
   * Пример ярлыка для продавцов Маркета
   *
   * ![Изображение вертикального ярлыка формата :no-translate[A9] для продавцов Маркета](../../_images/labels/label-A9.png)
   *
   * Пример ярлыка для продавцов Market Yandex Go
   *
   * ![Изображение вертикального ярлыка формата :no-translate[A9] для продавцов Market Yandex Go](../../_images/labels/label-A9-uz.png)
   *
   * * `A7` — ярлык размером 75 × 120 мм (80,4 × 125,6 мм с учетом полей), близок к формату :no-translate[A7].
   *
   * Пример ярлыка для продавцов Маркета
   *
   * ![Изображение ярлыка формата A7 для продавцов Маркета](../../_images/labels/label-A7.jpg)
   *
   * Пример ярлыка для продавцов Market Yandex Go
   *
   * ![Изображение ярлыка формата :no-translate[A7] для продавцов Market Yandex Go](../../_images/labels/label-A7-uz.png)
   *
   * * `A4` — на листе A4 располагается ярлык того формата, который выбран в кабинете продавца на Маркете — перейдите на страницу **Заказы** → **Заказы и отгрузки** → на вкладке нужной модели работы нажмите кнопку **Формат ярлыков**.
   */
  ReportsPageFormatType: {
    /**
     * ярлык размером 58 × 40 мм без полей, близок к формату :no-translate[A9].
     */
    A9Horizontally: "A9_HORIZONTALLY",
    /**
     * ярлык размером 40 × 58 мм без полей, близок к формату A9.
     */
    A9: "A9",
    /**
     * ярлык размером 75 × 120 мм (80,4 × 125,6 мм с учетом полей), близок к формату :no-translate[A7].
     */
    A7: "A7",
    /**
     * на листе A4 располагается ярлык того формата, который выбран в кабинете продавца на Маркете — перейдите на страницу **Заказы** → **Заказы и отгрузки** → на вкладке нужной модели работы нажмите кнопку **Формат ярлыков**.
     */
    A4: "A4",
  },
  /**
   * Модель, по которой работает магазин:
   *
   * * `FBS` — FBS или Экспресс.
   * * `FBY` — FBY.
   * * `DBS` — DBS.
   * * `LAAS` — LaaS.
   */
  ReportsPlacementType: {
    /**
     * FBS или Экспресс
     */
    Fbs: "FBS",
    /**
     * FBY
     */
    Fby: "FBY",
    /**
     * DBS
     */
    Dbs: "DBS",
    /**
     * LaaS.
     */
    Laas: "LAAS",
  },
  /**
   * Формат отчета:
   *
   * * `FILE` — файл с электронной таблицей (:no-translate[XLSX]).
   * * `CSV` — ZIP-архив с CSV-файлами на каждый лист отчета.
   * * `JSON` — ZIP-архив с JSON-файлами на каждый лист отчета.
   */
  ReportsReportFormatType: {
    /**
     * файл с электронной таблицей (:no-translate[XLSX])
     */
    File: "FILE",
    /**
     * ZIP-архив с CSV-файлами на каждый лист отчета
     */
    Csv: "CSV",
    /**
     * ZIP-архив с JSON-файлами на каждый лист отчета.
     */
    Json: "JSON",
  },
  /**
   * Язык отчета:
   *
   * * `RU` — русский язык.
   * * `EN` — английский язык.
   */
  ReportsReportLanguageType: {
    /**
     * русский язык
     */
    Ru: "RU",
    /**
     * английский язык.
     */
    En: "EN",
  },
  /**
   * Статус генерации:
   *
   * * `PENDING` — ожидает генерации.
   * * `PROCESSING` — генерируется.
   * * `FAILED` — во время генерации произошла ошибка.
   * * `DONE` — отчет или документ готов.
   */
  ReportsReportStatusType: {
    /**
     * ожидает генерации
     */
    Pending: "PENDING",
    /**
     * генерируется
     */
    Processing: "PROCESSING",
    /**
     * во время генерации произошла ошибка
     */
    Failed: "FAILED",
    /**
     * отчет или документ готов.
     */
    Done: "DONE",
  },
  /**
   * Подстатус генерации:
   * * `NO_DATA` — для такого отчета или документа нет данных.
   * * `TOO_LARGE` — отчет или документ превысил допустимый размер — укажите меньший период времени или уточните условия запроса.
   * * `RESOURCE_NOT_FOUND` — для такого отчета или документа не удалось найти часть сущностей.
   */
  ReportsReportSubStatusType: {
    /**
     * для такого отчета или документа нет данных
     */
    NoData: "NO_DATA",
    /**
     * отчет или документ превысил допустимый размер — укажите меньший период времени или уточните условия запроса
     */
    TooLarge: "TOO_LARGE",
    /**
     * для такого отчета или документа не удалось найти часть сущностей.
     */
    ResourceNotFound: "RESOURCE_NOT_FOUND",
  },
  /**
   * Статус передачи возврата или невыкупа:
   *
   * * `CREATED` — возврат или невыкуп создан покупателем (оформлен).
   *
   * * `RECEIVED` — возврат подготовлен к отправке (принят у покупателя).
   *
   * * `IN_TRANSIT` — возврат или невыкуп в пути (отправлен).
   *
   * * `READY_FOR_PICKUP` — возврат или невыкуп готов к выдаче магазину.
   *
   * * `PICKED` — возврат или невыкуп выдан магазину.
   *
   * * `LOST` — возврат или невыкуп утерян (при транспортировке).
   *
   * * `EXPIRED` — покупатель не принес товар на возврат вовремя (возврат отменен).
   *
   * * `CANCELLED` — возврат или невыкуп отменен.
   *
   * * `FULFILMENT_RECEIVED` — возврат или невыкуп принят на складе Маркета.
   *
   * * `PREPARED_FOR_UTILIZATION` — возврат или невыкуп передан в очередь на утилизацию.
   *
   * * `NOT_IN_DEMAND` — возврат или невыкуп не забрали с почты.
   *
   * * `UTILIZED` — возврат или невыкуп утилизирован.
   *
   * * `READY_FOR_EXPROPRIATION` — товары в возврате или невыкупе направлены на перепродажу (проверка перед реализацией).
   *
   * * `RECEIVED_FOR_EXPROPRIATION` — товары в возврате или невыкупе приняты для перепродажи (реализация).
   *
   * * `UNKNOWN` — неизвестный статус, обратитесь в поддержку.
   */
  ReportsReturnShipmentStatusType: {
    /**
     * возврат или невыкуп создан покупателем (оформлен).
     */
    Created: "CREATED",
    /**
     * возврат подготовлен к отправке (принят у покупателя).
     */
    Received: "RECEIVED",
    /**
     * возврат или невыкуп в пути (отправлен).
     */
    InTransit: "IN_TRANSIT",
    /**
     * возврат или невыкуп готов к выдаче магазину.
     */
    ReadyForPickup: "READY_FOR_PICKUP",
    /**
     * возврат или невыкуп выдан магазину.
     */
    Picked: "PICKED",
    /**
     * возврат или невыкуп утерян (при транспортировке).
     */
    Lost: "LOST",
    /**
     * покупатель не принес товар на возврат вовремя (возврат отменен).
     */
    Expired: "EXPIRED",
    /**
     * возврат или невыкуп отменен.
     */
    Cancelled: "CANCELLED",
    /**
     * возврат или невыкуп принят на складе Маркета.
     */
    FulfilmentReceived: "FULFILMENT_RECEIVED",
    /**
     * возврат или невыкуп передан в очередь на утилизацию.
     */
    PreparedForUtilization: "PREPARED_FOR_UTILIZATION",
    /**
     * возврат или невыкуп не забрали с почты.
     */
    NotInDemand: "NOT_IN_DEMAND",
    /**
     * возврат или невыкуп утилизирован.
     */
    Utilized: "UTILIZED",
    /**
     * товары в возврате или невыкупе направлены на перепродажу (проверка перед реализацией).
     */
    ReadyForExpropriation: "READY_FOR_EXPROPRIATION",
    /**
     * товары в возврате или невыкупе приняты для перепродажи (реализация).
     */
    ReceivedForExpropriation: "RECEIVED_FOR_EXPROPRIATION",
    /**
     * неизвестный статус, обратитесь в поддержку.
     */
    Unknown: "UNKNOWN",
  },
  /**
   * Тип фильтрации:
   *
   * * `UNREDEEMED` — невыкупы.
   *
   * * `RETURN` — возвраты.
   *
   * Если не указывать, в ответе будут и невыкупы, и возвраты.
   */
  ReportsReturnType: {
    /**
     * невыкупы.
     */
    Unredeemed: "UNREDEEMED",
    /**
     * возвраты.
     */
    Return: "RETURN",
  },
  /**
   * Группировка данных отчета.
   * Возможные значения:
   * * `CATEGORIES` — группировка по категориям.
   * * `OFFERS` — группировка по товарам.
   */
  ReportsShowsSalesGroupingType: {
    /**
     * группировка по категориям
     */
    Categories: "CATEGORIES",
    /**
     * группировка по товарам.
     */
    Offers: "OFFERS",
  },
  /**
   * Тип кабинета:
   *
   * * `SELLER` — продавец.
   * * `ADVERTISER` — рекламодатель.
   */
  ReportsSourceType: {
    /**
     * продавец
     */
    Seller: "SELLER",
    /**
     * рекламодатель.
     */
    Advertiser: "ADVERTISER",
  },
  /**
   * Тип атрибуции:
   * * `CLICKS` — по кликам.
   * * `SHOWS` — по показам.
   *
   * О том, какие данные в отчете зависят и не зависят от типа атрибуции, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/marketing/shelf#stats).
   */
  ReportsStatisticsAttributionType: {
    /**
     * по кликам
     */
    Clicks: "CLICKS",
    /**
     * по показам.
     */
    Shows: "SHOWS",
  },
  /**
   * Тип ответа.
   * Возможные значения:
   * * `OK` — ошибок нет.
   * * `ERROR` — при обработке запроса произошла ошибка.
   */
  ReturnsApiResponseStatusType: {
    /**
     * ошибок нет
     */
    Ok: "OK",
    /**
     * при обработке запроса произошла ошибка.
     */
    Error: "ERROR",
  },
  /**
   * Коды валют:
   *
   * * `RUR` — российский рубль.
   * * `UAH` — украинская гривна.
   * * `BYR` — белорусский рубль.
   * * `KZT` — казахстанский тенге.
   * * `UZS` — узбекский сум.
   */
  ReturnsCurrencyType: {
    /**
     * российский рубль
     */
    Rur: "RUR",
    Usd: "USD",
    Eur: "EUR",
    /**
     * украинская гривна
     */
    Uah: "UAH",
    Aud: "AUD",
    Gbp: "GBP",
    /**
     * белорусский рубль
     */
    Byr: "BYR",
    Byn: "BYN",
    Dkk: "DKK",
    Isk: "ISK",
    /**
     * казахстанский тенге
     */
    Kzt: "KZT",
    Cad: "CAD",
    Cny: "CNY",
    Nok: "NOK",
    Xdr: "XDR",
    Sgd: "SGD",
    Try: "TRY",
    Sek: "SEK",
    Chf: "CHF",
    Jpy: "JPY",
    Azn: "AZN",
    All: "ALL",
    Dzd: "DZD",
    Aoa: "AOA",
    Ars: "ARS",
    Amd: "AMD",
    Afn: "AFN",
    Bhd: "BHD",
    Bgn: "BGN",
    Bob: "BOB",
    Bwp: "BWP",
    Bnd: "BND",
    Brl: "BRL",
    Bif: "BIF",
    Huf: "HUF",
    Vef: "VEF",
    Kpw: "KPW",
    Vnd: "VND",
    Gmd: "GMD",
    Ghs: "GHS",
    Gnf: "GNF",
    Hkd: "HKD",
    Gel: "GEL",
    Aed: "AED",
    Egp: "EGP",
    Zmk: "ZMK",
    Ils: "ILS",
    Inr: "INR",
    Idr: "IDR",
    Jod: "JOD",
    Iqd: "IQD",
    Irr: "IRR",
    Yer: "YER",
    Qar: "QAR",
    Kes: "KES",
    Kgs: "KGS",
    Cop: "COP",
    Cdf: "CDF",
    Crc: "CRC",
    Kwd: "KWD",
    Cup: "CUP",
    Lak: "LAK",
    Lvl: "LVL",
    Sll: "SLL",
    Lbp: "LBP",
    Lyd: "LYD",
    Szl: "SZL",
    Ltl: "LTL",
    Mur: "MUR",
    Mro: "MRO",
    Mkd: "MKD",
    Mwk: "MWK",
    Mga: "MGA",
    Myr: "MYR",
    Mad: "MAD",
    Mxn: "MXN",
    Mzn: "MZN",
    Mdl: "MDL",
    Mnt: "MNT",
    Npr: "NPR",
    Ngn: "NGN",
    Nio: "NIO",
    Nzd: "NZD",
    Omr: "OMR",
    Pkr: "PKR",
    Pyg: "PYG",
    Pen: "PEN",
    Pln: "PLN",
    Khr: "KHR",
    Sar: "SAR",
    Ron: "RON",
    Scr: "SCR",
    Syp: "SYP",
    Skk: "SKK",
    Sos: "SOS",
    Sdg: "SDG",
    Srd: "SRD",
    Tjs: "TJS",
    Thb: "THB",
    Twd: "TWD",
    Bdt: "BDT",
    Tzs: "TZS",
    Tnd: "TND",
    Tmm: "TMM",
    Ugx: "UGX",
    /**
     * узбекский сум.
     */
    Uzs: "UZS",
    Uyu: "UYU",
    Php: "PHP",
    Djf: "DJF",
    Xaf: "XAF",
    Xof: "XOF",
    Hrk: "HRK",
    Czk: "CZK",
    Clp: "CLP",
    Lkr: "LKR",
    Eek: "EEK",
    Etb: "ETB",
    Rsd: "RSD",
    Zar: "ZAR",
    Krw: "KRW",
    Nad: "NAD",
    Tl: "TL",
    Ue: "UE",
  },
  /**
   * Причины возврата:
   *
   * * `BAD_QUALITY` — бракованный товар (есть недостатки).
   *
   * * `DOES_NOT_FIT` — товар не подошел.
   *
   * * `WRONG_ITEM` — привезли не тот товар.
   */
  ReturnsExternalReturnDecisionReasonType: {
    /**
     * бракованный товар (есть недостатки).
     */
    BadQuality: "BAD_QUALITY",
    /**
     * товар не подошел.
     */
    DoesNotFit: "DOES_NOT_FIT",
    /**
     * привезли не тот товар.
     */
    WrongItem: "WRONG_ITEM",
  },
  /**
   * Детали причин возврата:
   * * `DOES_NOT_FIT`:
   * * `USER_DID_NOT_LIKE` — товар не понравился.
   * * `USER_CHANGED_MIND` — передумал покупать.
   * * `DELIVERED_TOO_LONG` — передумал покупать из-за длительного срока доставки.
   *
   * * `BAD_QUALITY`:
   * * `BAD_PACKAGE` — заводская упаковка повреждена.
   * * `DAMAGED` — царапины, сколы.
   * * `NOT_WORKING` — не включается, не работает.
   * * `INCOMPLETENESS` — некомплект (не хватает детали в наборе, к товару).
   *
   * * `WRONG_ITEM`:
   * * `WRONG_ITEM` — не тот товар.
   * * `WRONG_COLOR` — цвет не соответствует заявленному.
   * * `DID_NOT_MATCH_DESCRIPTION` — описание или характеристики не соответствуют заявленным.
   */
  ReturnsExternalReturnDecisionSubreasonType: {
    /**
     * товар не понравился
     */
    UserDidNotLike: "USER_DID_NOT_LIKE",
    /**
     * передумал покупать
     */
    UserChangedMind: "USER_CHANGED_MIND",
    /**
     * передумал покупать из-за длительного срока доставки.
     */
    DeliveredTooLong: "DELIVERED_TOO_LONG",
    /**
     * заводская упаковка повреждена
     */
    BadPackage: "BAD_PACKAGE",
    /**
     * царапины, сколы
     */
    Damaged: "DAMAGED",
    /**
     * не включается, не работает
     */
    NotWorking: "NOT_WORKING",
    /**
     * некомплект (не хватает детали в наборе, к товару).
     */
    Incompleteness: "INCOMPLETENESS",
    /**
     * : * `WRONG_ITEM` — не тот товар
     */
    WrongItem: "WRONG_ITEM",
    /**
     * цвет не соответствует заявленному
     */
    WrongColor: "WRONG_COLOR",
    /**
     * описание или характеристики не соответствуют заявленным.
     */
    DidNotMatchDescription: "DID_NOT_MATCH_DESCRIPTION",
  },
  /**
   * Тип логистической точки:
   *
   * * `WAREHOUSE` — склад.
   * * `PICKUP_POINT` — обычная точка выдачи заказов (ПВЗ).
   * * `PICKUP_TERMINAL` — постамат.
   * * `PICKUP_POST_OFFICE` — отделение почтовой связи (ОПС).
   * * `PICKUP_MIXED` — торговый зал и пункт выдачи заказов.
   * * `PICKUP_RETAIL` — торговый зал.
   */
  ReturnsLogisticPointType: {
    /**
     * склад
     */
    Warehouse: "WAREHOUSE",
    /**
     * обычная точка выдачи заказов (ПВЗ)
     */
    PickupPoint: "PICKUP_POINT",
    /**
     * постамат
     */
    PickupTerminal: "PICKUP_TERMINAL",
    /**
     * отделение почтовой связи (ОПС)
     */
    PickupPostOffice: "PICKUP_POST_OFFICE",
    /**
     * торговый зал и пункт выдачи заказов
     */
    PickupMixed: "PICKUP_MIXED",
    /**
     * торговый зал.
     */
    PickupRetail: "PICKUP_RETAIL",
  },
  /**
   * Тип операции:
   *
   * * `ORDER_RECIPIENT_UPDATE` — изменение данных получателя.
   *
   * * `ORDER_DELIVERY_INTERVAL_UPDATE` — изменение интервала дат доставки.
   *
   * * `ORDER_STATUS_UPDATE` — обновление статуса заказа для его отмены.
   *
   * * `RETURN_CANCELLATION` — отмена возврата.
   */
  ReturnsOperationType: {
    /**
     * изменение данных получателя.
     */
    OrderRecipientUpdate: "ORDER_RECIPIENT_UPDATE",
    /**
     * изменение интервала дат доставки.
     */
    OrderDeliveryIntervalUpdate: "ORDER_DELIVERY_INTERVAL_UPDATE",
    /**
     * обновление статуса заказа для его отмены.
     */
    OrderStatusUpdate: "ORDER_STATUS_UPDATE",
    /**
     * отмена возврата.
     */
    ReturnCancellation: "RETURN_CANCELLATION",
  },
  /**
   * Способ возврата товара покупателем:
   *
   * * `SHOP` — в точку возврата магазина.
   *
   * * `DELIVERY_SERVICE` — отправить курьером.
   *
   * * `POST` — почта.
   */
  ReturnsRecipientType: {
    /**
     * в точку возврата магазина.
     */
    Shop: "SHOP",
    /**
     * отправить курьером.
     */
    DeliveryService: "DELIVERY_SERVICE",
    /**
     * почта.
     */
    Post: "POST",
  },
  /**
   * Статус возврата денег:
   *
   * * `STARTED_BY_USER` — создан покупателем из личного кабинета.
   *
   * * `REFUND_IN_PROGRESS` — ждет решение о возврате денег (на рассмотрении).
   *
   * * `REFUNDED` — деньги возвращены.
   *
   * * `FAILED` — невозможно провести возврат покупателю.
   *
   * * `WAITING_FOR_DECISION` — ожидает решения (DBS).
   *
   * * `DECISION_MADE` — по возврату принято решение (DBS).
   *
   * * `REFUNDED_WITH_BONUSES` — возврат осуществлен баллами Плюса или промокодом.
   *
   * * `REFUNDED_BY_SHOP` — магазин сделал самостоятельно возврат денег.
   *
   * * `COMPLETE_WITHOUT_REFUND` — возврат денег не требуется.
   *
   * * `CANCELLED` — возврат отменен.
   *
   * * `REJECTED` — возврат отклонен модерацией или в ПВЗ.
   *
   * * `PREMODERATION_DISPUTE` — по возврату открыт спор (FBY, FBS и Экспресс).
   *
   * * `PREMODERATION_DECISION_WAITING` — ожидает решения (FBY, FBS и Экспресс).
   *
   * * `PREMODERATION_DECISION_MADE` — по возврату принято решение (FBY, FBS и Экспресс).
   *
   * * `PREMODERATION_SELECT_DELIVERY` — пользователь выбирает способ доставки (FBY, FBS и Экспресс).
   *
   * * `UNKNOWN` — неизвестный статус, обратитесь в поддержку.
   */
  ReturnsRefundStatusType: {
    /**
     * создан покупателем из личного кабинета.
     */
    StartedByUser: "STARTED_BY_USER",
    /**
     * ждет решение о возврате денег (на рассмотрении).
     */
    RefundInProgress: "REFUND_IN_PROGRESS",
    /**
     * деньги возвращены.
     */
    Refunded: "REFUNDED",
    /**
     * невозможно провести возврат покупателю.
     */
    Failed: "FAILED",
    /**
     * ожидает решения (DBS).
     */
    WaitingForDecision: "WAITING_FOR_DECISION",
    /**
     * по возврату принято решение (DBS).
     */
    DecisionMade: "DECISION_MADE",
    /**
     * возврат осуществлен баллами Плюса или промокодом.
     */
    RefundedWithBonuses: "REFUNDED_WITH_BONUSES",
    /**
     * магазин сделал самостоятельно возврат денег.
     */
    RefundedByShop: "REFUNDED_BY_SHOP",
    /**
     * возврат отменен.
     */
    Cancelled: "CANCELLED",
    /**
     * возврат отклонен модерацией или в ПВЗ.
     */
    Rejected: "REJECTED",
    /**
     * возврат денег не требуется.
     */
    CompleteWithoutRefund: "COMPLETE_WITHOUT_REFUND",
    /**
     * по возврату открыт спор (FBY, FBS и Экспресс).
     */
    PremoderationDispute: "PREMODERATION_DISPUTE",
    /**
     * ожидает решения (FBY, FBS и Экспресс).
     */
    PremoderationDecisionWaiting: "PREMODERATION_DECISION_WAITING",
    /**
     * по возврату принято решение (FBY, FBS и Экспресс).
     */
    PremoderationDecisionMade: "PREMODERATION_DECISION_MADE",
    /**
     * пользователь выбирает способ доставки (FBY, FBS и Экспресс).
     */
    PremoderationSelectDelivery: "PREMODERATION_SELECT_DELIVERY",
    /**
     * неизвестный статус, обратитесь в поддержку.
     */
    Unknown: "UNKNOWN",
  },
  /**
   * Причины возврата:
   *
   * * `BAD_QUALITY` — бракованный товар (есть недостатки).
   *
   * * `DOES_NOT_FIT` — товар не подошел.
   *
   * * `WRONG_ITEM` — привезли не тот товар.
   *
   * * `DAMAGE_DELIVERY` — товар поврежден при доставке.
   *
   * * `LOYALTY_FAIL` — невозможно установить виновного в браке/пересорте.
   *
   * * `CONTENT_FAIL` — ошибочное описание товара по вине Маркета.
   *
   * * `DELIVERY_FAIL` — товар не привезли.
   *
   * * `UNKNOWN` — причина не известна.
   */
  ReturnsReturnDecisionReasonType: {
    /**
     * бракованный товар (есть недостатки).
     */
    BadQuality: "BAD_QUALITY",
    /**
     * товар не подошел.
     */
    DoesNotFit: "DOES_NOT_FIT",
    /**
     * привезли не тот товар.
     */
    WrongItem: "WRONG_ITEM",
    /**
     * товар поврежден при доставке.
     */
    DamageDelivery: "DAMAGE_DELIVERY",
    /**
     * невозможно установить виновного в браке/пересорте.
     */
    LoyaltyFail: "LOYALTY_FAIL",
    /**
     * ошибочное описание товара по вине Маркета.
     */
    ContentFail: "CONTENT_FAIL",
    /**
     * товар не привезли.
     */
    DeliveryFail: "DELIVERY_FAIL",
    /**
     * причина не известна.
     */
    Unknown: "UNKNOWN",
  },
  /**
   * Детали причин возврата:
   * * `DOES_NOT_FIT`:
   * * `USER_DID_NOT_LIKE` — товар не понравился.
   * * `USER_CHANGED_MIND` — передумал покупать.
   * * `DELIVERED_TOO_LONG` — передумал покупать из-за длительного срока доставки.
   *
   * * `BAD_QUALITY`:
   * * `BAD_PACKAGE` — заводская упаковка повреждена.
   * * `DAMAGED` — царапины, сколы.
   * * `NOT_WORKING` — не включается, не работает.
   * * `INCOMPLETENESS` — некомплект (не хватает детали в наборе, к товару).
   * * `WRAPPING_DAMAGED` — транспортная упаковка повреждена.
   * * `ITEM_WAS_USED` — следы использования на товаре.
   * * `BROKEN` — товар разбит.
   * * `BAD_FLOWERS` — некачественные цветы.
   *
   * * `WRONG_ITEM`:
   * * `WRONG_ITEM` — не тот товар.
   * * `WRONG_COLOR` — цвет не соответствует заявленному.
   * * `DID_NOT_MATCH_DESCRIPTION` — описание или характеристики не соответствуют заявленным.
   * * `WRONG_ORDER` — доставили чужой заказ.
   * * `WRONG_AMOUNT_DELIVERED` — неверное количество товара.
   * * `PARCEL_MISSING` — часть заказа отсутствует.
   * * `INCOMPLETE` — заказ не привезли полностью.
   *
   * * `UNKNOWN` — детали причины не указаны.
   */
  ReturnsReturnDecisionSubreasonType: {
    /**
     * товар не понравился
     */
    UserDidNotLike: "USER_DID_NOT_LIKE",
    /**
     * передумал покупать
     */
    UserChangedMind: "USER_CHANGED_MIND",
    /**
     * передумал покупать из-за длительного срока доставки.
     */
    DeliveredTooLong: "DELIVERED_TOO_LONG",
    /**
     * заводская упаковка повреждена
     */
    BadPackage: "BAD_PACKAGE",
    /**
     * царапины, сколы
     */
    Damaged: "DAMAGED",
    /**
     * не включается, не работает
     */
    NotWorking: "NOT_WORKING",
    /**
     * некомплект (не хватает детали в наборе, к товару)
     */
    Incompleteness: "INCOMPLETENESS",
    /**
     * : * `WRONG_ITEM` — не тот товар
     */
    WrongItem: "WRONG_ITEM",
    /**
     * цвет не соответствует заявленному
     */
    WrongColor: "WRONG_COLOR",
    /**
     * описание или характеристики не соответствуют заявленным
     */
    DidNotMatchDescription: "DID_NOT_MATCH_DESCRIPTION",
    /**
     * доставили чужой заказ
     */
    WrongOrder: "WRONG_ORDER",
    /**
     * неверное количество товара
     */
    WrongAmountDelivered: "WRONG_AMOUNT_DELIVERED",
    /**
     * транспортная упаковка повреждена
     */
    WrappingDamaged: "WRAPPING_DAMAGED",
    /**
     * следы использования на товаре
     */
    ItemWasUsed: "ITEM_WAS_USED",
    /**
     * товар разбит
     */
    Broken: "BROKEN",
    /**
     * некачественные цветы.
     */
    BadFlowers: "BAD_FLOWERS",
    /**
     * часть заказа отсутствует
     */
    ParcelMissing: "PARCEL_MISSING",
    /**
     * заказ не привезли полностью.
     */
    Incomplete: "INCOMPLETE",
    /**
     * детали причины не указаны.
     */
    Unknown: "UNKNOWN",
  },
  /**
   * Решение по возврату:
   *
   * * `FAST_REFUND_MONEY` — вернуть покупателю деньги без возврата товара.
   *
   * * `REFUND_MONEY` — вернуть покупателю деньги за товар.
   *
   * * `REFUND_MONEY_INCLUDING_SHIPMENT` — вернуть покупателю деньги за товар и обратную пересылку.
   *
   * * `REPAIR` — отремонтировать товар.
   *
   * * `REPLACE` — заменить товар.
   *
   * * `SEND_TO_EXAMINATION` — взять товар на экспертизу.
   *
   * * `DECLINE_REFUND` — отказать в возврате.
   *
   * * `PARTIAL_MONEY_REFUND` — частичный возврат денег.
   *
   * * `OTHER_DECISION` — другое решение.
   *
   * * `UNKNOWN` — не указано.
   */
  ReturnsReturnDecisionType: {
    /**
     * вернуть покупателю деньги без возврата товара.
     */
    FastRefundMoney: "FAST_REFUND_MONEY",
    /**
     * вернуть покупателю деньги за товар.
     */
    RefundMoney: "REFUND_MONEY",
    /**
     * вернуть покупателю деньги за товар и обратную пересылку.
     */
    RefundMoneyIncludingShipment: "REFUND_MONEY_INCLUDING_SHIPMENT",
    /**
     * отремонтировать товар.
     */
    Repair: "REPAIR",
    /**
     * заменить товар.
     */
    Replace: "REPLACE",
    /**
     * взять товар на экспертизу.
     */
    SendToExamination: "SEND_TO_EXAMINATION",
    /**
     * отказать в возврате.
     */
    DeclineRefund: "DECLINE_REFUND",
    /**
     * частичный возврат денег.
     */
    PartialMoneyRefund: "PARTIAL_MONEY_REFUND",
    /**
     * другое решение.
     */
    OtherDecision: "OTHER_DECISION",
    /**
     * не указано.
     */
    Unknown: "UNKNOWN",
  },
  /**
   * Логистический статус конкретного товара:
   *
   * * `CREATED` — возврат создан.
   *
   * * `RECEIVED` — возврат принят у отправителя.
   *
   * * `IN_TRANSIT` — возврат в пути.
   *
   * * `READY_FOR_PICKUP` — возврат готов к выдаче магазину.
   *
   * * `PICKED` — возврат выдан магазину.
   *
   * * `RECEIVED_ON_FULFILLMENT` — возврат принят на складе Маркета.
   *
   * * `CANCELLED` — возврат отменен.
   *
   * * `LOST` — возврат утерян.
   *
   * * `UTILIZED` — возврат утилизирован.
   *
   * * `PREPARED_FOR_UTILIZATION` — возврат готов к утилизации.
   *
   * * `EXPROPRIATED` — товары в возврате направлены на перепродажу.
   *
   * * `NOT_IN_DEMAND` — возврат не забрали с почты.
   */
  ReturnsReturnInstanceStatusType: {
    /**
     * возврат создан.
     */
    Created: "CREATED",
    /**
     * возврат принят у отправителя.
     */
    Received: "RECEIVED",
    /**
     * возврат в пути.
     */
    InTransit: "IN_TRANSIT",
    /**
     * возврат готов к выдаче магазину.
     */
    ReadyForPickup: "READY_FOR_PICKUP",
    /**
     * возврат выдан магазину.
     */
    Picked: "PICKED",
    /**
     * возврат принят на складе Маркета.
     */
    ReceivedOnFulfillment: "RECEIVED_ON_FULFILLMENT",
    /**
     * возврат отменен.
     */
    Cancelled: "CANCELLED",
    /**
     * возврат утерян.
     */
    Lost: "LOST",
    /**
     * возврат утилизирован.
     */
    Utilized: "UTILIZED",
    /**
     * возврат готов к утилизации.
     */
    PreparedForUtilization: "PREPARED_FOR_UTILIZATION",
    /**
     * товары в возврате направлены на перепродажу.
     */
    Expropriated: "EXPROPRIATED",
    /**
     * возврат не забрали с почты.
     */
    NotInDemand: "NOT_IN_DEMAND",
  },
  /**
   * Тип остатка на складе:
   *
   * * `FIT` — годный.
   *
   * * `DEFECT` — бракованный.
   *
   * * `ANOMALY` — аномалия.
   *
   * * `SURPLUS` — лишний.
   *
   * * `EXPIRED` — просроченный.
   *
   * * `MISGRADING` — пересортица.
   *
   * * `UNDEFINED` — с неизвестным статусом.
   *
   * * `INCORRECT_IMEI` — товар с некорректным [IMEI](https://ru.wikipedia.org/wiki/IMEI).
   *
   * * `INCORRECT_SERIAL_NUMBER` — товар с некорректным серийным номером.
   *
   * * `INCORRECT_CIS` — товар с некорректным кодом идентификации единицы товара в системе [«Честный ЗНАК»](https://честныйзнак.рф/) или [«ASL BELGISI»](https://aslbelgisi.uz) (для продавцов :no-translate[Market Yandex Go]).
   *
   * * `PART_MISSING` — недостача.
   *
   * * `NON_COMPLIENT` — товар с множественными несоответствиями.
   *
   * * `NOT_ACCEPTABLE` — товар, который Маркет не принимает.
   *
   * * `SERVICE` — сервисный сток.
   *
   * * `MARKDOWN` — уценка.
   *
   * * `DEMO` — демо.
   *
   * * `REPAIR` — ремонт.
   *
   * * `FIRMWARE` — прошивка.
   *
   * * `UNKNOWN` — неизвестный тип товара.
   */
  ReturnsReturnInstanceStockType: {
    /**
     * годный.
     */
    Fit: "FIT",
    /**
     * бракованный.
     */
    Defect: "DEFECT",
    /**
     * аномалия.
     */
    Anomaly: "ANOMALY",
    /**
     * лишний.
     */
    Surplus: "SURPLUS",
    /**
     * просроченный.
     */
    Expired: "EXPIRED",
    /**
     * пересортица.
     */
    Misgrading: "MISGRADING",
    /**
     * с неизвестным статусом.
     */
    Undefined: "UNDEFINED",
    /**
     * товар с некорректным [IMEI](https://ru.wikipedia.org/wiki/IMEI).
     */
    IncorrectImei: "INCORRECT_IMEI",
    /**
     * товар с некорректным серийным номером.
     */
    IncorrectSerialNumber: "INCORRECT_SERIAL_NUMBER",
    /**
     * товар с некорректным кодом идентификации единицы товара в системе [«Честный ЗНАК»](https://честныйзнак.рф/) или [«ASL BELGISI»](https://aslbelgisi.uz) (для продавцов :no-translate[Market Yandex Go]).
     */
    IncorrectCis: "INCORRECT_CIS",
    /**
     * недостача.
     */
    PartMissing: "PART_MISSING",
    /**
     * товар с множественными несоответствиями.
     */
    NonComplient: "NON_COMPLIENT",
    /**
     * товар, который Маркет не принимает.
     */
    NotAcceptable: "NOT_ACCEPTABLE",
    /**
     * сервисный сток.
     */
    Service: "SERVICE",
    /**
     * уценка.
     */
    Markdown: "MARKDOWN",
    /**
     * демо.
     */
    Demo: "DEMO",
    /**
     * ремонт.
     */
    Repair: "REPAIR",
    /**
     * прошивка.
     */
    Firmware: "FIRMWARE",
    /**
     * неизвестный тип товара.
     */
    Unknown: "UNKNOWN",
  },
  /**
   * Причина отказа:
   *
   * * `ISSUE_WITH_THE_PRODUCT_WAS_NOT_CONFIRMED` — проблема с товаром не подтвердилась.
   * * `MECHANICAL_DAMAGE` — есть механические повреждения товара.
   * * `WARRANTY_PERIOD_HAS_EXPIRED` — истек гарантийный срок.
   * * `CONFIGURATION_OR_PACKAGING_COMPROMISED` — нарушена комплектация или упаковка.
   * * `PRODUCT_APPEARANCE_COMPROMISED` — нарушен товарный вид.
   * * `WARRANTY_TERMS_VIOLATED` — нарушены условия гарантии.
   * * `DEVICE_ACTIVATED` — устройство активировано.
   */
  ReturnsReturnRequestDecisionReasonType: {
    /**
     * проблема с товаром не подтвердилась
     */
    IssueWithTheProductWasNotConfirmed:
      "ISSUE_WITH_THE_PRODUCT_WAS_NOT_CONFIRMED",
    /**
     * есть механические повреждения товара
     */
    MechanicalDamage: "MECHANICAL_DAMAGE",
    /**
     * истек гарантийный срок
     */
    WarrantyPeriodHasExpired: "WARRANTY_PERIOD_HAS_EXPIRED",
    /**
     * нарушена комплектация или упаковка
     */
    ConfigurationOrPackagingCompromised:
      "CONFIGURATION_OR_PACKAGING_COMPROMISED",
    /**
     * нарушен товарный вид
     */
    ProductAppearanceCompromised: "PRODUCT_APPEARANCE_COMPROMISED",
    /**
     * нарушены условия гарантии
     */
    WarrantyTermsViolated: "WARRANTY_TERMS_VIOLATED",
    /**
     * устройство активировано.
     */
    DeviceActivated: "DEVICE_ACTIVATED",
  },
  /**
   * Решение по возврату:
   *
   * * `FAST_REFUND_MONEY` — вернуть покупателю деньги без возврата товара.
   *
   * * `REFUND_MONEY` — вернуть покупателю деньги за товар.
   *
   * * `REFUND_MONEY_INCLUDING_SHIPMENT` — вернуть покупателю деньги за товар и обратную пересылку.
   *
   * * `REPAIR` — отремонтировать товар.
   *
   * * `REPLACE` — заменить товар.
   *
   * * `SEND_TO_EXAMINATION` — взять товар на экспертизу.
   *
   * * `DECLINE_REFUND` — отказать в возврате.
   *
   * * `PARTIAL_MONEY_REFUND` — частичный возврат денег.
   *
   * * `OTHER_DECISION` — другое решение.
   */
  ReturnsReturnRequestDecisionType: {
    /**
     * вернуть покупателю деньги без возврата товара.
     */
    FastRefundMoney: "FAST_REFUND_MONEY",
    /**
     * вернуть покупателю деньги за товар.
     */
    RefundMoney: "REFUND_MONEY",
    /**
     * вернуть покупателю деньги за товар и обратную пересылку.
     */
    RefundMoneyIncludingShipment: "REFUND_MONEY_INCLUDING_SHIPMENT",
    /**
     * отремонтировать товар.
     */
    Repair: "REPAIR",
    /**
     * заменить товар.
     */
    Replace: "REPLACE",
    /**
     * взять товар на экспертизу.
     */
    SendToExamination: "SEND_TO_EXAMINATION",
    /**
     * отказать в возврате.
     */
    DeclineRefund: "DECLINE_REFUND",
    /**
     * частичный возврат денег.
     */
    PartialMoneyRefund: "PARTIAL_MONEY_REFUND",
    /**
     * другое решение.
     */
    OtherDecision: "OTHER_DECISION",
  },
  /**
   * Статус передачи возврата или невыкупа:
   *
   * * `CREATED` — возврат или невыкуп создан покупателем (оформлен).
   *
   * * `RECEIVED` — возврат подготовлен к отправке (принят у покупателя).
   *
   * * `IN_TRANSIT` — возврат или невыкуп в пути (отправлен).
   *
   * * `READY_FOR_PICKUP` — возврат или невыкуп готов к выдаче магазину.
   *
   * * `PICKED` — возврат или невыкуп выдан магазину.
   *
   * * `LOST` — возврат или невыкуп утерян (при транспортировке).
   *
   * * `EXPIRED` — покупатель не принес товар на возврат вовремя (возврат отменен).
   *
   * * `CANCELLED` — возврат или невыкуп отменен.
   *
   * * `FULFILMENT_RECEIVED` — возврат или невыкуп принят на складе Маркета.
   *
   * * `PREPARED_FOR_UTILIZATION` — возврат или невыкуп передан в очередь на утилизацию.
   *
   * * `NOT_IN_DEMAND` — возврат или невыкуп не забрали с почты.
   *
   * * `UTILIZED` — возврат или невыкуп утилизирован.
   *
   * * `READY_FOR_EXPROPRIATION` — товары в возврате или невыкупе направлены на перепродажу (проверка перед реализацией).
   *
   * * `RECEIVED_FOR_EXPROPRIATION` — товары в возврате или невыкупе приняты для перепродажи (реализация).
   *
   * * `UNKNOWN` — неизвестный статус, обратитесь в поддержку.
   */
  ReturnsReturnShipmentStatusType: {
    /**
     * возврат или невыкуп создан покупателем (оформлен).
     */
    Created: "CREATED",
    /**
     * возврат подготовлен к отправке (принят у покупателя).
     */
    Received: "RECEIVED",
    /**
     * возврат или невыкуп в пути (отправлен).
     */
    InTransit: "IN_TRANSIT",
    /**
     * возврат или невыкуп готов к выдаче магазину.
     */
    ReadyForPickup: "READY_FOR_PICKUP",
    /**
     * возврат или невыкуп выдан магазину.
     */
    Picked: "PICKED",
    /**
     * возврат или невыкуп утерян (при транспортировке).
     */
    Lost: "LOST",
    /**
     * покупатель не принес товар на возврат вовремя (возврат отменен).
     */
    Expired: "EXPIRED",
    /**
     * возврат или невыкуп отменен.
     */
    Cancelled: "CANCELLED",
    /**
     * возврат или невыкуп принят на складе Маркета.
     */
    FulfilmentReceived: "FULFILMENT_RECEIVED",
    /**
     * возврат или невыкуп передан в очередь на утилизацию.
     */
    PreparedForUtilization: "PREPARED_FOR_UTILIZATION",
    /**
     * возврат или невыкуп не забрали с почты.
     */
    NotInDemand: "NOT_IN_DEMAND",
    /**
     * возврат или невыкуп утилизирован.
     */
    Utilized: "UTILIZED",
    /**
     * товары в возврате или невыкупе направлены на перепродажу (проверка перед реализацией).
     */
    ReadyForExpropriation: "READY_FOR_EXPROPRIATION",
    /**
     * товары в возврате или невыкупе приняты для перепродажи (реализация).
     */
    ReceivedForExpropriation: "RECEIVED_FOR_EXPROPRIATION",
    /**
     * неизвестный статус, обратитесь в поддержку.
     */
    Unknown: "UNKNOWN",
  },
  /**
   * Тип фильтрации:
   *
   * * `UNREDEEMED` — невыкупы.
   *
   * * `RETURN` — возвраты.
   *
   * Если не указывать, в ответе будут и невыкупы, и возвраты.
   */
  ReturnsReturnType: {
    /**
     * невыкупы.
     */
    Unredeemed: "UNREDEEMED",
    /**
     * возвраты.
     */
    Return: "RETURN",
  },
  /**
   * Тип ответа.
   * Возможные значения:
   * * `OK` — ошибок нет.
   * * `ERROR` — при обработке запроса произошла ошибка.
   */
  ShipmentsApiResponseStatusType: {
    /**
     * ошибок нет
     */
    Ok: "OK",
    /**
     * при обработке запроса произошла ошибка.
     */
    Error: "ERROR",
  },
  /**
   * Действия с отгрузкой:
   *
   * * `CONFIRM` — подтвердить отгрузку.
   * * `DOWNLOAD_ACT` — скачать акт приема-передачи отгрузки.
   * * `DOWNLOAD_INBOUND_ACT` — скачать список принятых заказов.
   * * `DOWNLOAD_DISCREPANCY_ACT` — скачать акт расхождений.
   * * `DOWNLOAD_TRANSPORTATION_WAYBILL` — скачать транспортную накладную.
   * * `CHANGE_PALLETS_COUNT` — указать количество палет.
   */
  ShipmentsShipmentActionType: {
    /**
     * подтвердить отгрузку
     */
    Confirm: "CONFIRM",
    /**
     * скачать акт приема-передачи отгрузки
     */
    DownloadAct: "DOWNLOAD_ACT",
    /**
     * скачать список принятых заказов
     */
    DownloadInboundAct: "DOWNLOAD_INBOUND_ACT",
    /**
     * скачать акт расхождений
     */
    DownloadDiscrepancyAct: "DOWNLOAD_DISCREPANCY_ACT",
    /**
     * скачать транспортную накладную
     */
    DownloadTransportationWaybill: "DOWNLOAD_TRANSPORTATION_WAYBILL",
    /**
     * указать количество палет.
     */
    ChangePalletsCount: "CHANGE_PALLETS_COUNT",
  },
  /**
   * Формат страницы:
   * * `A4` — формат страницы :no-translate[A4].
   * * `A8` — формат страницы :no-translate[A8].
   */
  ShipmentsShipmentPalletLabelPageFormatType: {
    /**
     * формат страницы :no-translate[A4]
     */
    A4: "A4",
    /**
     * формат страницы :no-translate[A8].
     */
    A8: "A8",
  },
  /**
   * Статус отгрузки:
   *
   * * `OUTBOUND_CREATED` — формируется.
   * * `OUTBOUND_READY_FOR_CONFIRMATION` — можно обрабатывать.
   * * `OUTBOUND_CONFIRMED` — подтверждена и готова к отправке.
   * * `OUTBOUND_SIGNED` — по ней подписан электронный акт приема-передачи.
   * * `ACCEPTED` — принята в сортировочном центре или пункте приема.
   * * `ACCEPTED_WITH_DISCREPANCIES` — принята с расхождениями.
   * * `FINISHED` — завершена.
   * * `ERROR` — отменена из-за ошибки.
   */
  ShipmentsShipmentStatusType: {
    /**
     * формируется
     */
    OutboundCreated: "OUTBOUND_CREATED",
    /**
     * можно обрабатывать
     */
    OutboundReadyForConfirmation: "OUTBOUND_READY_FOR_CONFIRMATION",
    /**
     * подтверждена и готова к отправке
     */
    OutboundConfirmed: "OUTBOUND_CONFIRMED",
    /**
     * по ней подписан электронный акт приема-передачи
     */
    OutboundSigned: "OUTBOUND_SIGNED",
    /**
     * завершена
     */
    Finished: "FINISHED",
    /**
     * принята в сортировочном центре или пункте приема
     */
    Accepted: "ACCEPTED",
    /**
     * принята с расхождениями
     */
    AcceptedWithDiscrepancies: "ACCEPTED_WITH_DISCREPANCIES",
    /**
     * отменена из-за ошибки.
     */
    Error: "ERROR",
  },
  /**
   * Способ отгрузки заказов:
   *
   * * `IMPORT` — вы самостоятельно привозите заказы в выбранный сортировочный центр или пункт приема заказов.
   * * `WITHDRAW` — вы отгружаете заказы со своего склада курьерам Яндекс Маркета.
   */
  ShipmentsShipmentType: {
    /**
     * вы самостоятельно привозите заказы в выбранный сортировочный центр или пункт приема заказов
     */
    Import: "IMPORT",
    /**
     * вы отгружаете заказы со своего склада курьерам Яндекс Маркета.
     */
    Withdraw: "WITHDRAW",
  },
  /**
   * Тип кабинета:
   *
   * * `SELLER` — продавец.
   * * `ADVERTISER` — рекламодатель.
   */
  SkipGoodsFeedbacksReactionSourceType: {
    /**
     * продавец
     */
    Seller: "SELLER",
    /**
     * рекламодатель.
     */
    Advertiser: "ADVERTISER",
  },
  /**
   * Тип ответа.
   * Возможные значения:
   * * `OK` — ошибок нет.
   * * `ERROR` — при обработке запроса произошла ошибка.
   */
  StocksApiResponseStatusType: {
    /**
     * ошибок нет
     */
    Ok: "OK",
    /**
     * при обработке запроса произошла ошибка.
     */
    Error: "ERROR",
  },
  /**
   * Оценка оборачиваемости.
   *
   * |enum|Диапазон оборачиваемости|Комментарий|
   * |-|-|-|
   * |`LOW`|`turnoverDays` ≥ 120||
   * |`ALMOST_LOW`|100 ≤ `turnoverDays` < 120||
   * |`HIGH`|45 ≤ `turnoverDays` < 100||
   * |`VERY_HIGH`|0 ≤ `turnoverDays` < 45||
   * |`NO_SALES`|—|Продаж нет.|
   * |`FREE_STORE`|Любое значение.|Платить за хранение товаров этой категории не требуется.|
   */
  StocksTurnoverType: {
    /**
     * |`turnoverDays` ≥ 120|| |
     */
    Low: "LOW",
    /**
     * |100 ≤ `turnoverDays` < 120|| |
     */
    AlmostLow: "ALMOST_LOW",
    /**
     * |45 ≤ `turnoverDays` < 100|| |
     */
    High: "HIGH",
    /**
     * |0 ≤ `turnoverDays` < 45|| |
     */
    VeryHigh: "VERY_HIGH",
    /**
     * |—|Продаж нет.| |
     */
    NoSales: "NO_SALES",
    /**
     * |Любое значение.|Платить за хранение товаров этой категории не требуется.|
     */
    FreeStore: "FREE_STORE",
  },
  /**
   * Тип остатков товаров на складе:
   *
   * * `AVAILABLE` (соответствует типу «Доступный к заказу» в отчете «Остатки на складе» в кабинете продавца на Маркете) — товар, доступный для продажи.
   *
   * * `DEFECT` (соответствует типу «Брак») — товар с браком.
   *
   * * `EXPIRED` (соответствует типу «Просрочен») — товар с истекшим сроком годности.
   *
   * * `FIT` (соответствует типу «Годный») — товар, который доступен для продажи или уже зарезервирован.
   *
   * * `FREEZE` — товар, который зарезервирован для заказов.
   *
   * * `QUARANTINE` (соответствует типу «Карантин») — товар, временно недоступный для продажи (например, товар перемещают из одного помещения склада в другое).
   *
   * * `UTILIZATION` — товар, который будет утилизирован.
   */
  StocksWarehouseStockType: {
    /**
     * (соответствует типу «Годный») — товар, который доступен для продажи или уже зарезервирован.
     */
    Fit: "FIT",
    /**
     * товар, который зарезервирован для заказов.
     */
    Freeze: "FREEZE",
    /**
     * (соответствует типу «Доступный к заказу» в отчете «Остатки на складе» в кабинете продавца на Маркете) — товар, доступный для продажи.
     */
    Available: "AVAILABLE",
    /**
     * (соответствует типу «Карантин») — товар, временно недоступный для продажи (например, товар перемещают из одного помещения склада в другое).
     */
    Quarantine: "QUARANTINE",
    /**
     * товар, который будет утилизирован.
     */
    Utilization: "UTILIZATION",
    /**
     * (соответствует типу «Брак») — товар с браком.
     */
    Defect: "DEFECT",
    /**
     * (соответствует типу «Просрочен») — товар с истекшим сроком годности.
     */
    Expired: "EXPIRED",
  },
  /**
   * Тип ответа.
   * Возможные значения:
   * * `OK` — ошибок нет.
   * * `ERROR` — при обработке запроса произошла ошибка.
   */
  SupplyRequestsApiResponseStatusType: {
    /**
     * ошибок нет
     */
    Ok: "OK",
    /**
     * при обработке запроса произошла ошибка.
     */
    Error: "ERROR",
  },
  /**
   * Коды валют:
   *
   * * `RUR` — российский рубль.
   * * `UAH` — украинская гривна.
   * * `BYR` — белорусский рубль.
   * * `KZT` — казахстанский тенге.
   * * `UZS` — узбекский сум.
   */
  SupplyRequestsCurrencyType: {
    /**
     * российский рубль
     */
    Rur: "RUR",
    Usd: "USD",
    Eur: "EUR",
    /**
     * украинская гривна
     */
    Uah: "UAH",
    Aud: "AUD",
    Gbp: "GBP",
    /**
     * белорусский рубль
     */
    Byr: "BYR",
    Byn: "BYN",
    Dkk: "DKK",
    Isk: "ISK",
    /**
     * казахстанский тенге
     */
    Kzt: "KZT",
    Cad: "CAD",
    Cny: "CNY",
    Nok: "NOK",
    Xdr: "XDR",
    Sgd: "SGD",
    Try: "TRY",
    Sek: "SEK",
    Chf: "CHF",
    Jpy: "JPY",
    Azn: "AZN",
    All: "ALL",
    Dzd: "DZD",
    Aoa: "AOA",
    Ars: "ARS",
    Amd: "AMD",
    Afn: "AFN",
    Bhd: "BHD",
    Bgn: "BGN",
    Bob: "BOB",
    Bwp: "BWP",
    Bnd: "BND",
    Brl: "BRL",
    Bif: "BIF",
    Huf: "HUF",
    Vef: "VEF",
    Kpw: "KPW",
    Vnd: "VND",
    Gmd: "GMD",
    Ghs: "GHS",
    Gnf: "GNF",
    Hkd: "HKD",
    Gel: "GEL",
    Aed: "AED",
    Egp: "EGP",
    Zmk: "ZMK",
    Ils: "ILS",
    Inr: "INR",
    Idr: "IDR",
    Jod: "JOD",
    Iqd: "IQD",
    Irr: "IRR",
    Yer: "YER",
    Qar: "QAR",
    Kes: "KES",
    Kgs: "KGS",
    Cop: "COP",
    Cdf: "CDF",
    Crc: "CRC",
    Kwd: "KWD",
    Cup: "CUP",
    Lak: "LAK",
    Lvl: "LVL",
    Sll: "SLL",
    Lbp: "LBP",
    Lyd: "LYD",
    Szl: "SZL",
    Ltl: "LTL",
    Mur: "MUR",
    Mro: "MRO",
    Mkd: "MKD",
    Mwk: "MWK",
    Mga: "MGA",
    Myr: "MYR",
    Mad: "MAD",
    Mxn: "MXN",
    Mzn: "MZN",
    Mdl: "MDL",
    Mnt: "MNT",
    Npr: "NPR",
    Ngn: "NGN",
    Nio: "NIO",
    Nzd: "NZD",
    Omr: "OMR",
    Pkr: "PKR",
    Pyg: "PYG",
    Pen: "PEN",
    Pln: "PLN",
    Khr: "KHR",
    Sar: "SAR",
    Ron: "RON",
    Scr: "SCR",
    Syp: "SYP",
    Skk: "SKK",
    Sos: "SOS",
    Sdg: "SDG",
    Srd: "SRD",
    Tjs: "TJS",
    Thb: "THB",
    Twd: "TWD",
    Bdt: "BDT",
    Tzs: "TZS",
    Tnd: "TND",
    Tmm: "TMM",
    Ugx: "UGX",
    /**
     * узбекский сум.
     */
    Uzs: "UZS",
    Uyu: "UYU",
    Php: "PHP",
    Djf: "DJF",
    Xaf: "XAF",
    Xof: "XOF",
    Hrk: "HRK",
    Czk: "CZK",
    Clp: "CLP",
    Lkr: "LKR",
    Eek: "EEK",
    Etb: "ETB",
    Rsd: "RSD",
    Zar: "ZAR",
    Krw: "KRW",
    Nad: "NAD",
    Tl: "TL",
    Ue: "UE",
  },
  /**
   * Направление сортировки:
   *
   * - `ASC` — сортировка по возрастанию.
   * - `DESC` — сортировка по убыванию.
   */
  SupplyRequestsSortOrderType: {
    /**
     * сортировка по возрастанию
     */
    Asc: "ASC",
    /**
     * сортировка по убыванию.
     */
    Desc: "DESC",
  },
  /**
   * Тип документа:
   *
   * * **Документы, которые загружает магазин**
   * * `SUPPLY` — список товаров.
   * * `ADDITIONAL_SUPPLY` — список товаров в дополнительной поставке.
   * * `VIRTUAL_DISTRIBUTION_CENTER_SUPPLY` — список товаров в [мультипоставке](*multisupply).
   * * `TRANSFER` — список товаров для утилизации.
   * * `WITHDRAW` — список товаров для вывоза.
   *
   * * **Поставка товаров**
   * * `VALIDATION_ERRORS` — ошибки по товарам в поставке.
   * * `CARGO_UNITS` — ярлыки для грузомест.
   *
   * * **Дополнительная поставка и непринятые товары**
   * * `ADDITIONAL_SUPPLY_ACCEPTABLE_GOODS` — товары, которые подходят для дополнительной поставки.
   * * `ADDITIONAL_SUPPLY_UNACCEPTABLE_GOODS` — вывоз непринятых товаров.
   *
   * * **Маркировка товаров**
   * * `INBOUND_UTD` — входящий УПД.
   * * `OUTBOUND_UTD` — исходящий УПД.
   * * `IDENTIFIERS` — коды маркировки товаров.
   * * `CIS_FACT` — принятые товары с кодами маркировки.
   * * `ITEMS_WITH_CISES` — товары, для которых нужна маркировка.
   * * `REPORT_OF_WITHDRAW_WITH_CISES` — маркированные товары для вывоза со склада.
   * * `SECONDARY_ACCEPTANCE_CISES` — маркированные товары, которые приняты после вторичной приемки.
   * * `RNPT_FACT` — принятые товары с регистрационным номером партии товара (РНПТ).
   *
   * * **Акты**
   * * `ACT_OF_WITHDRAW` — акт возврата.
   * * `ANOMALY_CONTAINERS_WITHDRAW_ACT` — акт изъятия непринятого товара.
   * * `ACT_OF_WITHDRAW_FROM_STORAGE` — акт списания с ответственного хранения.
   * * `ACT_OF_RECEPTION_TRANSFER` — акт приема-передачи.
   * * `ACT_OF_DISCREPANCY` — акт о расхождениях.
   * * `SECONDARY_RECEPTION_ACT` — акт вторичной приемки.
   */
  SupplyRequestsSupplyRequestDocumentType: {
    /**
     * список товаров
     */
    Supply: "SUPPLY",
    /**
     * список товаров в дополнительной поставке
     */
    AdditionalSupply: "ADDITIONAL_SUPPLY",
    /**
     * список товаров в [мультипоставке](*multisupply)
     */
    VirtualDistributionCenterSupply: "VIRTUAL_DISTRIBUTION_CENTER_SUPPLY",
    /**
     * список товаров для утилизации
     */
    Transfer: "TRANSFER",
    /**
     * входящий УПД
     */
    InboundUtd: "INBOUND_UTD",
    /**
     * исходящий УПД
     */
    OutboundUtd: "OUTBOUND_UTD",
    /**
     * товары, которые подходят для дополнительной поставки
     */
    AdditionalSupplyAcceptableGoods: "ADDITIONAL_SUPPLY_ACCEPTABLE_GOODS",
    /**
     * вывоз непринятых товаров.
     */
    AdditionalSupplyUnacceptableGoods: "ADDITIONAL_SUPPLY_UNACCEPTABLE_GOODS",
    /**
     * ошибки по товарам в поставке
     */
    ValidationErrors: "VALIDATION_ERRORS",
    /**
     * список товаров для вывоза.
     */
    Withdraw: "WITHDRAW",
    /**
     * акт возврата
     */
    ActOfWithdraw: "ACT_OF_WITHDRAW",
    /**
     * акт изъятия непринятого товара
     */
    AnomalyContainersWithdrawAct: "ANOMALY_CONTAINERS_WITHDRAW_ACT",
    /**
     * акт списания с ответственного хранения
     */
    ActOfWithdrawFromStorage: "ACT_OF_WITHDRAW_FROM_STORAGE",
    /**
     * акт приема-передачи
     */
    ActOfReceptionTransfer: "ACT_OF_RECEPTION_TRANSFER",
    /**
     * акт о расхождениях
     */
    ActOfDiscrepancy: "ACT_OF_DISCREPANCY",
    /**
     * акт вторичной приемки.
     */
    SecondaryReceptionAct: "SECONDARY_RECEPTION_ACT",
    /**
     * ярлыки для грузомест.
     */
    CargoUnits: "CARGO_UNITS",
    /**
     * коды маркировки товаров
     */
    Identifiers: "IDENTIFIERS",
    /**
     * принятые товары с кодами маркировки
     */
    CisFact: "CIS_FACT",
    /**
     * товары, для которых нужна маркировка
     */
    ItemsWithCises: "ITEMS_WITH_CISES",
    /**
     * маркированные товары для вывоза со склада
     */
    ReportOfWithdrawWithCises: "REPORT_OF_WITHDRAW_WITH_CISES",
    /**
     * маркированные товары, которые приняты после вторичной приемки
     */
    SecondaryAcceptanceCises: "SECONDARY_ACCEPTANCE_CISES",
    /**
     * принятые товары с регистрационным номером партии товара (РНПТ).
     */
    RnptFact: "RNPT_FACT",
  },
  /**
   * Тип склада или ПВЗ:
   *
   * * `FULFILLMENT` — склад хранения.
   * * `XDOC` — транзитный склад.
   * * `PICKUP_POINT` — ПВЗ.
   */
  SupplyRequestsSupplyRequestLocationType: {
    /**
     * склад хранения
     */
    Fulfillment: "FULFILLMENT",
    /**
     * транзитный склад
     */
    Xdoc: "XDOC",
    /**
     * ПВЗ.
     */
    PickupPoint: "PICKUP_POINT",
  },
  /**
   * Тип связи между двумя заявками:
   *
   * * `VIRTUAL_DISTRIBUTION` — [мультипоставка](*multisupply).
   *
   * * `WITHDRAW` — вывоз непринятых товаров.
   *
   * Подтипы заявки: `DEFAULT`, `XDOC`, `VIRTUAL_DISTRIBUTION_CENTER_CHILD` и `ANOMALY_WITHDRAW`.
   *
   * * `UTILIZATION` — утилизация непринятых товаров.
   *
   * Подтипы заявки: `DEFAULT`, `XDOC`, `VIRTUAL_DISTRIBUTION_CENTER_CHILD` и `FORCE_PLAN_ANOMALY_PER_SUPPLY`.
   *
   * * `ADDITIONAL_SUPPLY` — дополнительная поставка.
   *
   * Подтипы заявки: `DEFAULT`, `XDOC`, `VIRTUAL_DISTRIBUTION_CENTER_CHILD` и `ADDITIONAL_SUPPLY`.
   */
  SupplyRequestsSupplyRequestReferenceType: {
    /**
     * [мультипоставка](*multisupply).
     */
    VirtualDistribution: "VIRTUAL_DISTRIBUTION",
    /**
     * вывоз непринятых товаров.
     */
    Withdraw: "WITHDRAW",
    /**
     * утилизация непринятых товаров.
     */
    Utilization: "UTILIZATION",
    /**
     * дополнительная поставка.
     */
    AdditionalSupply: "ADDITIONAL_SUPPLY",
  },
  /**
   * По какому параметру сортировать заявки:
   *
   * * `ID` — идентификатор заявки.
   * * `REQUESTED_DATE` — дата поставки на склад хранения.
   *
   * Если товары проходили через транзитный склад, сортирует по датам поставки на оба склада.
   * * `UPDATED_AT` — время обновления заявки.
   * * `STATUS` — статус заявки.
   */
  SupplyRequestsSupplyRequestSortAttributeType: {
    /**
     * идентификатор заявки
     */
    Id: "ID",
    /**
     * дата поставки на склад хранения.
     */
    RequestedDate: "REQUESTED_DATE",
    /**
     * время обновления заявки
     */
    UpdatedAt: "UPDATED_AT",
    /**
     * статус заявки.
     */
    Status: "STATUS",
  },
  /**
   * Статус заявки на поставку:
   *
   * * `CREATED` — заявка создана.
   * * `FINISHED` — заявка завершена, товары:
   * * приняты на складе;
   * * переданы на другой склад при перемещении;
   * * переданы продавцу при вывозе;
   * * утилизированы.
   * * `CANCELLED` — заявка отменена.
   * * `INVALID` — ошибка обработки.
   * * `VALIDATED` — заявка в обработке.
   * * `PUBLISHED` — заявка отправлена на утверждение.
   * * `ARRIVED_TO_SERVICE` — поставка отгружена.
   * * `ARRIVED_TO_XDOC_SERVICE` — поставка ждет отправки на конечный склад.
   * * `SHIPPED_TO_SERVICE` — поставка отправлена с транзитного склада на склад хранения.
   * * `CANCELLATION_REQUESTED` — запрошена отмена заявки.
   * * `CANCELLATION_REJECTED` — заявка не будет отменена.
   * * `REGISTERED_IN_ELECTRONIC_QUEUE` — поставка зарегистрирована в электронной очереди.
   * * `READY_FOR_UTILIZATION` — товары готовы к утилизации.
   * * `TRANSIT_MOVING` — перемещение товаров на склад вывоза.
   * * `WAREHOUSE_HANDLING` — вторичная приемка товаров или их сборка для вывоза или утилизации (потоварная приемка).
   * * `ACCEPTED_BY_WAREHOUSE_SYSTEM` — заявка утверждена.
   * * `READY_TO_WITHDRAW` — товары готовы к выдаче.
   * * `NEED_PREPARATION` — ожидается информация от продавца.
   * * `WAREHOUSE_SIGNED_ACT` — ЭАПП подписан складом.
   */
  SupplyRequestsSupplyRequestStatusType: {
    /**
     * заявка создана
     */
    Created: "CREATED",
    /**
     * заявка завершена, товары: * приняты на складе; * переданы на другой склад при перемещении; * переданы продавцу при вывозе; * утилизированы
     */
    Finished: "FINISHED",
    /**
     * заявка отменена
     */
    Cancelled: "CANCELLED",
    /**
     * ошибка обработки
     */
    Invalid: "INVALID",
    /**
     * заявка в обработке
     */
    Validated: "VALIDATED",
    /**
     * заявка отправлена на утверждение
     */
    Published: "PUBLISHED",
    /**
     * поставка отгружена
     */
    ArrivedToService: "ARRIVED_TO_SERVICE",
    /**
     * поставка ждет отправки на конечный склад
     */
    ArrivedToXdocService: "ARRIVED_TO_XDOC_SERVICE",
    /**
     * поставка отправлена с транзитного склада на склад хранения
     */
    ShippedToService: "SHIPPED_TO_SERVICE",
    /**
     * запрошена отмена заявки
     */
    CancellationRequested: "CANCELLATION_REQUESTED",
    /**
     * заявка не будет отменена
     */
    CancellationRejected: "CANCELLATION_REJECTED",
    /**
     * поставка зарегистрирована в электронной очереди
     */
    RegisteredInElectronicQueue: "REGISTERED_IN_ELECTRONIC_QUEUE",
    /**
     * товары готовы к утилизации
     */
    ReadyForUtilization: "READY_FOR_UTILIZATION",
    /**
     * перемещение товаров на склад вывоза
     */
    TransitMoving: "TRANSIT_MOVING",
    /**
     * вторичная приемка товаров или их сборка для вывоза или утилизации (потоварная приемка)
     */
    WarehouseHandling: "WAREHOUSE_HANDLING",
    /**
     * заявка утверждена
     */
    AcceptedByWarehouseSystem: "ACCEPTED_BY_WAREHOUSE_SYSTEM",
    /**
     * товары готовы к выдаче
     */
    ReadyToWithdraw: "READY_TO_WITHDRAW",
    /**
     * ожидается информация от продавца
     */
    NeedPreparation: "NEED_PREPARATION",
    /**
     * ЭАПП подписан складом.
     */
    WarehouseSignedAct: "WAREHOUSE_SIGNED_ACT",
  },
  /**
   * Подтип заявки:
   *
   * * `DEFAULT` — поставка товаров на склад хранения или вывоз с него.
   * * `XDOC` — поставка товаров через транзитный склад или вывоз с него.
   * * `INVENTORYING_SUPPLY` — инвентаризация на складе по запросу магазина.
   * * `INVENTORYING_SUPPLY_WAREHOUSE_BASED_PER_SUPPLIER` — инвентаризация на складе по запросу склада.
   * * `MOVEMENT_SUPPLY` — входящее перемещение между складами.
   *
   * При перемещении между складами создаются 2 заявки — `MOVEMENT_SUPPLY` и `MOVEMENT_WITHDRAW`.
   * * `ADDITIONAL_SUPPLY` — дополнительная поставка непринятых товаров.
   * * `VIRTUAL_DISTRIBUTION_CENTER` — родительская заявка при поставке товаров на склад хранения или [мультипоставке](*multisupply).
   * * `VIRTUAL_DISTRIBUTION_CENTER_CHILD` — дочерняя заявка при поставке товаров на склад хранения или [мультипоставке](*multisupply).
   *
   * Для нее не возвращается `transitLocation`.
   * * `FORCE_PLAN` — автоматическая утилизация по запросу склада.
   * * `FORCE_PLAN_ANOMALY_PER_SUPPLY` — утилизация непринятых товаров.
   * * `PLAN_BY_SUPPLIER` — утилизация по запросу магазина.
   * * `ANOMALY_WITHDRAW` — вывоз непринятых товаров.
   * * `FIX_LOST_INVENTORYING` — товары, которые не нашли после второй инвентаризации.
   * * `OPER_LOST_INVENTORYING` — товары, которые не нашли после первой инвентаризации.
   * * `MOVEMENT_WITHDRAW` — исходящее перемещение между складами.
   *
   * При перемещении между складами создаются 2 заявки — `MOVEMENT_SUPPLY` и `MOVEMENT_WITHDRAW`.
   * * `MISGRADING_SUPPLY` — пересортица в большую сторону.
   * * `MISGRADING_WITHDRAW` — пересортица в меньшую сторону.
   * * `MAN_UTIL` — ручная утилизация по запросу склада.
   * * `WITHDRAW_AUTO_UTILIZATION` — автоматическая утилизация товаров в заявке на вывоз, когда истек срок их хранения.
   * * `EXTERNAL_WITHDRAW_INT_OZON` — вывоз товаров на маркетплейс Ozon. Заявка на поставку оформлена в Личном кабинете Ozon.
   * * `EXTERNAL_WITHDRAW_INT_WB` — вывоз товаров на маркетплейс Wildberries. Заявка на поставку оформлена в Личном кабинете Wildberries.
   */
  SupplyRequestsSupplyRequestSubType: {
    /**
     * поставка товаров на склад хранения или вывоз с него
     */
    Default: "DEFAULT",
    /**
     * поставка товаров через транзитный склад или вывоз с него
     */
    Xdoc: "XDOC",
    /**
     * инвентаризация на складе по запросу магазина
     */
    InventoryingSupply: "INVENTORYING_SUPPLY",
    /**
     * инвентаризация на складе по запросу склада
     */
    InventoryingSupplyWarehouseBasedPerSupplier:
      "INVENTORYING_SUPPLY_WAREHOUSE_BASED_PER_SUPPLIER",
    /**
     * входящее перемещение между складами.
     */
    MovementSupply: "MOVEMENT_SUPPLY",
    /**
     * дополнительная поставка непринятых товаров
     */
    AdditionalSupply: "ADDITIONAL_SUPPLY",
    /**
     * родительская заявка при поставке товаров на склад хранения или [мультипоставке](*multisupply)
     */
    VirtualDistributionCenter: "VIRTUAL_DISTRIBUTION_CENTER",
    /**
     * дочерняя заявка при поставке товаров на склад хранения или [мультипоставке](*multisupply).
     */
    VirtualDistributionCenterChild: "VIRTUAL_DISTRIBUTION_CENTER_CHILD",
    /**
     * автоматическая утилизация по запросу склада
     */
    ForcePlan: "FORCE_PLAN",
    /**
     * утилизация непринятых товаров
     */
    ForcePlanAnomalyPerSupply: "FORCE_PLAN_ANOMALY_PER_SUPPLY",
    /**
     * утилизация по запросу магазина
     */
    PlanBySupplier: "PLAN_BY_SUPPLIER",
    /**
     * вывоз непринятых товаров
     */
    AnomalyWithdraw: "ANOMALY_WITHDRAW",
    /**
     * товары, которые не нашли после второй инвентаризации
     */
    FixLostInventorying: "FIX_LOST_INVENTORYING",
    /**
     * товары, которые не нашли после первой инвентаризации. * `MOVEMENT_WITHDRAW` — исходящее перемещение между складами.
     */
    OperLostInventorying: "OPER_LOST_INVENTORYING",
    MovementWithdraw: "MOVEMENT_WITHDRAW",
    /**
     * пересортица в большую сторону
     */
    MisgradingSupply: "MISGRADING_SUPPLY",
    /**
     * пересортица в меньшую сторону
     */
    MisgradingWithdraw: "MISGRADING_WITHDRAW",
    /**
     * ручная утилизация по запросу склада
     */
    ManUtil: "MAN_UTIL",
    /**
     * автоматическая утилизация товаров в заявке на вывоз, когда истек срок их хранения
     */
    WithdrawAutoUtilization: "WITHDRAW_AUTO_UTILIZATION",
    /**
     * вывоз товаров на маркетплейс Ozon. Заявка на поставку оформлена в Личном кабинете Ozon
     */
    ExternalWithdrawIntOzon: "EXTERNAL_WITHDRAW_INT_OZON",
    /**
     * вывоз товаров на маркетплейс Wildberries. Заявка на поставку оформлена в Личном кабинете Wildberries.
     */
    ExternalWithdrawIntWb: "EXTERNAL_WITHDRAW_INT_WB",
  },
  /**
   * Тип заявки:
   *
   * * `SUPPLY` — поставка товаров.
   * * `WITHDRAW` — вывоз товаров.
   * * `UTILIZATION` — утилизация товаров.
   */
  SupplyRequestsSupplyRequestType: {
    /**
     * поставка товаров
     */
    Supply: "SUPPLY",
    /**
     * вывоз товаров
     */
    Withdraw: "WITHDRAW",
    /**
     * утилизация товаров.
     */
    Utilization: "UTILIZATION",
  },
  /**
   * Тип ответа.
   * Возможные значения:
   * * `OK` — ошибок нет.
   * * `ERROR` — при обработке запроса произошла ошибка.
   */
  TariffsApiResponseStatusType: {
    /**
     * ошибок нет
     */
    Ok: "OK",
    /**
     * при обработке запроса произошла ошибка.
     */
    Error: "ERROR",
  },
  /**
   * Услуга Маркета:
   *
   * * `AGENCY_COMMISSION` — прием платежа покупателя.
   *
   * * `PAYMENT_TRANSFER` — перевод платежа покупателя.
   *
   * * `FEE` — размещение товара на Маркете.
   *
   * * `DELIVERY_TO_CUSTOMER` — доставка покупателю.
   *
   * * `CROSSREGIONAL_DELIVERY` — доставка в федеральный округ, город или населенный пункт.
   *
   * * `EXPRESS_DELIVERY` — экспресс-доставка покупателю.
   *
   * * `SORTING` — обработка заказа.
   *
   * * `MIDDLE_MILE` — средняя миля.
   *
   * * `ITEM_BOOKING` — бронирование товара.
   *
   * Подробнее об услугах Маркета читайте [в Справке Маркета для продавцов](https://yandex.ru/support/marketplace/introduction/rates/index.html).
   */
  TariffsCalculatedTariffType: {
    /**
     * прием платежа покупателя.
     */
    AgencyCommission: "AGENCY_COMMISSION",
    /**
     * перевод платежа покупателя.
     */
    PaymentTransfer: "PAYMENT_TRANSFER",
    /**
     * размещение товара на Маркете.
     */
    Fee: "FEE",
    /**
     * доставка покупателю.
     */
    DeliveryToCustomer: "DELIVERY_TO_CUSTOMER",
    /**
     * доставка в федеральный округ, город или населенный пункт.
     */
    CrossregionalDelivery: "CROSSREGIONAL_DELIVERY",
    /**
     * экспресс-доставка покупателю.
     */
    ExpressDelivery: "EXPRESS_DELIVERY",
    /**
     * обработка заказа.
     */
    Sorting: "SORTING",
    /**
     * средняя миля.
     */
    MiddleMile: "MIDDLE_MILE",
    /**
     * бронирование товара.
     */
    ItemBooking: "ITEM_BOOKING",
  },
  /**
   * Коды валют:
   *
   * * `RUR` — российский рубль.
   * * `UAH` — украинская гривна.
   * * `BYR` — белорусский рубль.
   * * `KZT` — казахстанский тенге.
   * * `UZS` — узбекский сум.
   */
  TariffsCurrencyType: {
    /**
     * российский рубль
     */
    Rur: "RUR",
    Usd: "USD",
    Eur: "EUR",
    /**
     * украинская гривна
     */
    Uah: "UAH",
    Aud: "AUD",
    Gbp: "GBP",
    /**
     * белорусский рубль
     */
    Byr: "BYR",
    Byn: "BYN",
    Dkk: "DKK",
    Isk: "ISK",
    /**
     * казахстанский тенге
     */
    Kzt: "KZT",
    Cad: "CAD",
    Cny: "CNY",
    Nok: "NOK",
    Xdr: "XDR",
    Sgd: "SGD",
    Try: "TRY",
    Sek: "SEK",
    Chf: "CHF",
    Jpy: "JPY",
    Azn: "AZN",
    All: "ALL",
    Dzd: "DZD",
    Aoa: "AOA",
    Ars: "ARS",
    Amd: "AMD",
    Afn: "AFN",
    Bhd: "BHD",
    Bgn: "BGN",
    Bob: "BOB",
    Bwp: "BWP",
    Bnd: "BND",
    Brl: "BRL",
    Bif: "BIF",
    Huf: "HUF",
    Vef: "VEF",
    Kpw: "KPW",
    Vnd: "VND",
    Gmd: "GMD",
    Ghs: "GHS",
    Gnf: "GNF",
    Hkd: "HKD",
    Gel: "GEL",
    Aed: "AED",
    Egp: "EGP",
    Zmk: "ZMK",
    Ils: "ILS",
    Inr: "INR",
    Idr: "IDR",
    Jod: "JOD",
    Iqd: "IQD",
    Irr: "IRR",
    Yer: "YER",
    Qar: "QAR",
    Kes: "KES",
    Kgs: "KGS",
    Cop: "COP",
    Cdf: "CDF",
    Crc: "CRC",
    Kwd: "KWD",
    Cup: "CUP",
    Lak: "LAK",
    Lvl: "LVL",
    Sll: "SLL",
    Lbp: "LBP",
    Lyd: "LYD",
    Szl: "SZL",
    Ltl: "LTL",
    Mur: "MUR",
    Mro: "MRO",
    Mkd: "MKD",
    Mwk: "MWK",
    Mga: "MGA",
    Myr: "MYR",
    Mad: "MAD",
    Mxn: "MXN",
    Mzn: "MZN",
    Mdl: "MDL",
    Mnt: "MNT",
    Npr: "NPR",
    Ngn: "NGN",
    Nio: "NIO",
    Nzd: "NZD",
    Omr: "OMR",
    Pkr: "PKR",
    Pyg: "PYG",
    Pen: "PEN",
    Pln: "PLN",
    Khr: "KHR",
    Sar: "SAR",
    Ron: "RON",
    Scr: "SCR",
    Syp: "SYP",
    Skk: "SKK",
    Sos: "SOS",
    Sdg: "SDG",
    Srd: "SRD",
    Tjs: "TJS",
    Thb: "THB",
    Twd: "TWD",
    Bdt: "BDT",
    Tzs: "TZS",
    Tnd: "TND",
    Tmm: "TMM",
    Ugx: "UGX",
    /**
     * узбекский сум.
     */
    Uzs: "UZS",
    Uyu: "UYU",
    Php: "PHP",
    Djf: "DJF",
    Xaf: "XAF",
    Xof: "XOF",
    Hrk: "HRK",
    Czk: "CZK",
    Clp: "CLP",
    Lkr: "LKR",
    Eek: "EEK",
    Etb: "ETB",
    Rsd: "RSD",
    Zar: "ZAR",
    Krw: "KRW",
    Nad: "NAD",
    Tl: "TL",
    Ue: "UE",
  },
  /**
   * Частота выплат:
   *
   * * `DAILY` — ежедневно.
   * * `WEEKLY` — раз в неделю.
   * * `BIWEEKLY` — раз в две недели.
   * * `MONTHLY` — раз в месяц.
   *
   * Подробнее о графике выплат читайте [в Справке Маркета для продавцов](https://yandex.ru/support/marketplace/introduction/rates/acquiring.html).
   */
  TariffsPaymentFrequencyType: {
    /**
     * ежедневно
     */
    Daily: "DAILY",
    /**
     * раз в неделю
     */
    Weekly: "WEEKLY",
    /**
     * раз в две недели
     */
    Biweekly: "BIWEEKLY",
    /**
     * раз в месяц.
     */
    Monthly: "MONTHLY",
  },
  /**
   * Модель работы:
   *
   * * `FBY` — FBY.
   * * `FBS` — FBS.
   * * `DBS` — DBS.
   * * `EXPRESS` — Экспресс.
   * * `LAAS` — LaaS.
   */
  TariffsSellingProgramType: {
    /**
     * FBY
     */
    Fby: "FBY",
    /**
     * FBS
     */
    Fbs: "FBS",
    /**
     * DBS
     */
    Dbs: "DBS",
    /**
     * Экспресс
     */
    Express: "EXPRESS",
    /**
     * LaaS.
     */
    Laas: "LAAS",
  },
  /**
   * Тип кабинета:
   *
   * * `SELLER` — продавец.
   * * `ADVERTISER` — рекламодатель.
   */
  UpdateGoodsFeedbackCommentSourceType: {
    /**
     * продавец
     */
    Seller: "SELLER",
    /**
     * рекламодатель.
     */
    Advertiser: "ADVERTISER",
  },
  /**
   * Язык:
   *
   * * `RU` — русский.
   * * `UZ` — узбекский.
   */
  UpdateOfferMappingsLanguage: {
    /**
     * русский
     */
    Ru: "RU",
    /**
     * узбекский.
     */
    Uz: "UZ",
  },
  /**
   * Возможность использовать API:
   *
   * * `AVAILABLE` — методы API доступны для выполнения запросов.
   * * `DISABLED_BY_INACTIVITY` — методы API недоступны, так как магазин не размещал товары на витрине больше 90 дней.
   * * `DISABLED_BY_NO_ACTIVE_CONTRACT` — методы API недоступны из-за отсутствия активного договора с Маркетом.
   * * `MANUALLY_DISABLED` — методы API недоступны, так как интеграция выключена вручную.
   * * `DISABLED_BY_NO_PLACEMENT_TYPE` — методы API недоступны, так как магазин не подключен к программе размещения.
   *
   * [Подробная инструкция по восстановлению доступа](../../concepts/api-access.md)
   */
  WarehousesApiAvailabilityStatusType: {
    /**
     * методы API доступны для выполнения запросов
     */
    Available: "AVAILABLE",
    /**
     * методы API недоступны, так как магазин не размещал товары на витрине больше 90 дней
     */
    DisabledByInactivity: "DISABLED_BY_INACTIVITY",
    /**
     * методы API недоступны из-за отсутствия активного договора с Маркетом
     */
    DisabledByNoActiveContract: "DISABLED_BY_NO_ACTIVE_CONTRACT",
    /**
     * методы API недоступны, так как интеграция выключена вручную
     */
    ManuallyDisabled: "MANUALLY_DISABLED",
    /**
     * методы API недоступны, так как магазин не подключен к программе размещения.
     */
    DisabledByNoPlacementType: "DISABLED_BY_NO_PLACEMENT_TYPE",
  },
  /**
   * Тип ответа.
   * Возможные значения:
   * * `OK` — ошибок нет.
   * * `ERROR` — при обработке запроса произошла ошибка.
   */
  WarehousesApiResponseStatusType: {
    /**
     * ошибок нет
     */
    Ok: "OK",
    /**
     * при обработке запроса произошла ошибка.
     */
    Error: "ERROR",
  },
  /**
   * Свойства складов, которые необходимо вернуть:
   *
   * * `ADDRESS` — адрес склада.
   */
  WarehousesPartnerWarehouseComponentType: {
    /**
     * адрес склада.
     */
    Address: "ADDRESS",
  },
  /**
   * Свойства складов, которые необходимо вернуть:
   *
   * * `ADDRESS` — адрес склада.
   * * `STATUS` — статус склада.
   */
  WarehousesWarehouseComponentType: {
    /**
     * адрес склада
     */
    Address: "ADDRESS",
    /**
     * статус склада.
     */
    Status: "STATUS",
  },
  /**
   * Статус модели склада:
   *
   * * `DISABLED_MANUALLY` – отключен вами.
   * * `OTHER` – другой статус. Например, модель склада включена или отключена Маркетом.
   */
  WarehousesWarehouseModelStatusType: {
    /**
     * отключен вами
     */
    DisabledManually: "DISABLED_MANUALLY",
    /**
     * другой статус. Например, модель склада включена или отключена Маркетом.
     */
    Other: "OTHER",
  },
  /**
   * Модель работы:
   *
   * * `FBS` — FBS.
   * * `DBS` — DBS.
   * * `EXPRESS` — Экспресс.
   */
  WarehousesWarehouseProgramType: {
    /**
     * FBS
     */
    Fbs: "FBS",
    /**
     * DBS
     */
    Dbs: "DBS",
    /**
     * Экспресс.
     */
    Express: "EXPRESS",
  },
  /**
   * Статус склада:
   *
   * * `DISABLED_MANUALLY` – отключен вами.
   * * `OTHER` – другой статус. Например, склад включен или отключен Маркетом.
   */
  WarehousesWarehouseStatusType: {
    /**
     * отключен вами
     */
    DisabledManually: "DISABLED_MANUALLY",
    /**
     * другой статус. Например, склад включен или отключен Маркетом.
     */
    Other: "OTHER",
  },
} as const;
