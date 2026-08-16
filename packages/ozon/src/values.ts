/**
 * Сгенерировано из закрытых строковых union-типов контрактов Ozon.
 * После изменения контрактов выполните `pnpm update:values`.
 */
export const OzonValues = {
  /** Значения для `OzonAnalyticsDimension`. */
  AnalyticsDimension: {
    UnknownDimension: "unknownDimension",
    Sku: "sku",
    Spu: "spu",
    Day: "day",
    Week: "week",
    Month: "month",
    Year: "year",
    Category1: "category1",
    Category2: "category2",
    Brand: "brand",
    ModelID: "modelID",
    DescriptionType: "descriptionType",
  },
  /** Значения для `OzonAnalyticsItemTag`. */
  AnalyticsItemTag: {
    ItemAttributeNone: "ITEM_ATTRIBUTE_NONE",
    Econom: "ECONOM",
    Novel: "NOVEL",
    Discount: "DISCOUNT",
    FbsReturn: "FBS_RETURN",
    Super: "SUPER",
    Markable: "MARKABLE",
    Unspecified: "UNSPECIFIED",
  },
  /** Значения для `OzonAnalyticsItemTagFilter`. */
  AnalyticsItemTagFilter: {
    ItemAttributeNone: "ITEM_ATTRIBUTE_NONE",
    Econom: "ECONOM",
    Novel: "NOVEL",
    Discount: "DISCOUNT",
    FbsReturn: "FBS_RETURN",
    Super: "SUPER",
    Markable: "MARKABLE",
  },
  /** Значения для `AnalyticsManageStockType`. */
  AnalyticsManageStockType: {
    StockTypeValid: "STOCK_TYPE_VALID",
    StockTypeWaitingDocs: "STOCK_TYPE_WAITING_DOCS",
    StockTypeExpiring: "STOCK_TYPE_EXPIRING",
    StockTypeDefect: "STOCK_TYPE_DEFECT",
  },
  /** Значения для `OzonAnalyticsPlacementZone`. */
  AnalyticsPlacementZone: {
    Unspecified: "UNSPECIFIED",
    ClosedZone: "CLOSED_ZONE",
    DangerousGood: "DANGEROUS_GOOD",
    Sort: "SORT",
    Oversize: "OVERSIZE",
    Jewelry: "JEWELRY",
    Unresolved: "UNRESOLVED",
    Products: "PRODUCTS",
    NonSort: "NON_SORT",
  },
  /** Значения для `OzonAnalyticsPlacementZoneFilter`. */
  AnalyticsPlacementZoneFilter: {
    PlacementZoneNone: "PLACEMENT_ZONE_NONE",
    ClosedZone: "CLOSED_ZONE",
    DangerousGood: "DANGEROUS_GOOD",
    ProductsPlus17: "PRODUCTS_PLUS_17",
    Sort: "SORT",
    NonSortMez: "NON_SORT_MEZ",
    Oversize: "OVERSIZE",
    Jewelry: "JEWELRY",
    Unresolved: "UNRESOLVED",
  },
  /** Значения для `AnalyticsProductQueriesSortBy`. */
  AnalyticsProductQueriesSortBy: {
    /** По количеству запросов. */
    BySearches: "BY_SEARCHES",
    /** По количеству просмотров. */
    ByViews: "BY_VIEWS",
    /** По средней позиции товара. */
    ByPosition: "BY_POSITION",
    /** По значению конверсии. */
    ByConversion: "BY_CONVERSION",
    /** По объёму продаж по запросам. */
    ByGmv: "BY_GMV",
  },
  /** Значения для `AnalyticsProductQueriesSortDirection`. */
  AnalyticsProductQueriesSortDirection: {
    /** По убыванию. */
    Descending: "DESCENDING",
    /** По возрастанию. */
    Ascending: "ASCENDING",
  },
  /** Значения для `OzonAnalyticsStockGrade`. */
  AnalyticsStockGrade: {
    /** Ожидаются поставки. */
    GradesNone: "GRADES_NONE",
    /** Нет продаж. */
    GradesNosales: "GRADES_NOSALES",
    /** Зелёный, «хороший». */
    GradesGreen: "GRADES_GREEN",
    /** Жёлтый, «средний». */
    GradesYellow: "GRADES_YELLOW",
    /** Красный, «плохой». */
    GradesRed: "GRADES_RED",
    /** Критический. */
    GradesCritical: "GRADES_CRITICAL",
  },
  /** Значения для `OzonAnalyticsTurnoverGrade`. */
  AnalyticsTurnoverGrade: {
    /** Значение не определено. */
    Unspecified: "UNSPECIFIED",
    /** Нет статуса ликвидности. */
    TurnoverGradeNone: "TURNOVER_GRADE_NONE",
    /** Дефицитный. Остатков товара хватит до 28 дней. */
    Deficit: "DEFICIT",
    /** Очень популярный. Остатков товара хватит на 28–56 дней. */
    Popular: "POPULAR",
    /** Популярный. Остатков товара хватит на 56–120 дней. */
    Actual: "ACTUAL",
    /** Избыточный. Товар продаётся медленно, остатков хватит более чем на 120 дней. */
    Surplus: "SURPLUS",
    /** Без продаж. У товара нет продаж последние 28 дней. */
    NoSales: "NO_SALES",
    /** Был без продаж. У товара не было продаж и остатков последние 28 дней. */
    WasNoSales: "WAS_NO_SALES",
    /** Без продаж, ограничен. У товара не было продаж более 120 дней. Такой товар [нельзя добавить в поставку](https://seller-edu.ozon.ru/fbo/rabota-so-stokom/nehodovye-tovary) */
    RestrictedNoSales: "RESTRICTED_NO_SALES",
    /** Сбор данных. Для расчёта ликвидности нового товара собираем данные в течение 60 дней после поставки. */
    CollectingData: "COLLECTING_DATA",
    /** Ожидаем поставки. На складе нет остатков, доступных к продаже. Сделайте поставку для начала сбора данных. */
    WaitingForSupply: "WAITING_FOR_SUPPLY",
    /** Был дефицитным. Товар был дефицитным последние 56 дней. Сейчас у него нет остатков. */
    WasDeficit: "WAS_DEFICIT",
    /** Был очень популярным. Товар был очень популярным последние 56 дней. Сейчас у него нет остатков. */
    WasPopular: "WAS_POPULAR",
    /** Был популярным. Товар был популярным последние 56 дней. Сейчас у него нет остатков. */
    WasActual: "WAS_ACTUAL",
    /** Был избыточным. Товар был избыточным последние 56 дней. Сейчас у него нет остатков. */
    WasSurplus: "WAS_SURPLUS",
  },
  /** Значения для `OzonAnalyticsTurnoverGradeFilter`. */
  AnalyticsTurnoverGradeFilter: {
    TurnoverGradeNone: "TURNOVER_GRADE_NONE",
    Deficit: "DEFICIT",
    Popular: "POPULAR",
    Actual: "ACTUAL",
    Surplus: "SURPLUS",
    NoSales: "NO_SALES",
    WasNoSales: "WAS_NO_SALES",
    RestrictedNoSales: "RESTRICTED_NO_SALES",
    CollectingData: "COLLECTING_DATA",
    WaitingForSupply: "WAITING_FOR_SUPPLY",
    WasDeficit: "WAS_DEFICIT",
    WasPopular: "WAS_POPULAR",
    WasActual: "WAS_ACTUAL",
    WasSurplus: "WAS_SURPLUS",
  },
  /** Значения для `OzonAnalyticsWarehouseType`. */
  AnalyticsWarehouseType: {
    /** Все склады Ozon. */
    All: "ALL",
    /** Склады Ozon с доставкой Fresh. */
    ExpressDarkStore: "EXPRESS_DARK_STORE",
    /** Склады Ozon без доставки Fresh. */
    NotExpressDarkStore: "NOT_EXPRESS_DARK_STORE",
  },
  /** Значения для `OzonCargoContentType`. */
  CargoContentType: {
    /** Не определён. */
    Unspecified: "UNSPECIFIED",
    /** Палета-микс или коробка-микс. */
    Mix: "MIX",
    /** Палета-моно или коробка-моно. */
    Mono: "MONO",
    /** Отсутствует. */
    None: "NONE",
  },
  /** Значения для `OzonCargoCreateErrorReason`. */
  CargoCreateErrorReason: {
    InvalidState: "INVALID_STATE",
    ValidationFailed: "VALIDATION_FAILED",
    WarehouseLimitsExceed: "WAREHOUSE_LIMITS_EXCEED",
    SupplyNotBelongContractor: "SUPPLY_NOT_BELONG_CONTRACTOR",
    SupplyNotBelongCompany: "SUPPLY_NOT_BELONG_COMPANY",
    IsFinalized: "IS_FINALIZED",
    SkuDistributionDisabled: "SKU_DISTRIBUTION_DISABLED",
    SupplyIsNotEmpty: "SUPPLY_IS_NOT_EMPTY",
    OperationNotFound: "OPERATION_NOT_FOUND",
    OperationFailed: "OPERATION_FAILED",
  },
  /** Значения для `OzonCargoDeleteStatus`. */
  CargoDeleteStatus: {
    InProgress: "IN_PROGRESS",
    Success: "SUCCESS",
    Error: "ERROR",
  },
  /** Значения для `OzonCargoDeleteSupplyError`. */
  CargoDeleteSupplyError: {
    OperationNotFound: "OPERATION_NOT_FOUND",
    SupplyNotFound: "SUPPLY_NOT_FOUND",
    CantDeleteAllCargoes: "CANT_DELETE_ALL_CARGOES",
    SupplyDoesNotBelongToTheContractor:
      "SUPPLY_DOES_NOT_BELONG_TO_THE_CONTRACTOR",
    SupplyDoesNotBelongToTheCompany: "SUPPLY_DOES_NOT_BELONG_TO_THE_COMPANY",
    SupplyCargoesIsFinalized: "SUPPLY_CARGOES_IS_FINALIZED",
    SupplyCargoesLocked: "SUPPLY_CARGOES_LOCKED",
  },
  /** Значения для `OzonCargoItemValidationError`. */
  CargoItemValidationError: {
    /** Товар не найден. */
    SupplyItemNotFound: "SUPPLY_ITEM_NOT_FOUND",
    /** Найден дубликат товара. */
    DuplicatedSupplyItem: "DUPLICATED_SUPPLY_ITEM",
    /** Некорректный срок годности. */
    BeforeDeadline: "BEFORE_DEADLINE",
    /** У разных SKU одинаковые штрихкоды. */
    SameBarcodes: "SAME_BARCODES",
    /** У разных SKU одинаковые артикулы. */
    SameArticles: "SAME_ARTICLES",
    /** Одинаковый SKU в грузоместе используется для разных товаров. */
    NotUniqueSkuByProduct: "NOT_UNIQUE_SKU_BY_PRODUCT",
    /** Количество SKU в грузоместе не кратно кванту. */
    QuantityNotDivisibleByQuant: "QUANTITY_NOT_DIVISIBLE_BY_QUANT",
    /** В грузоместе отсутствует палетная SKU. */
    NotSinglePalletSkuInPalletCargo: "NOT_SINGLE_PALLET_SKU_IN_PALLET_CARGO",
    /** В квантовом палетном грузоместе должен быть только один квант. */
    NotOneQuantPalletSku: "NOT_ONE_QUANT_PALLET_SKU",
    /** В эконом-поставке указан не эконом-SKU. */
    NotEconomSku: "NOT_ECONOM_SKU",
    /** Количество SKU в эконом-поставке меньше 1. */
    QuantityLessOne: "QUANTITY_LESS_ONE",
    /** Товар не найден по артикулу, штрихкоду и размеру кванта. */
    SupplyItemWithQuantNotFound: "SUPPLY_ITEM_WITH_QUANT_NOT_FOUND",
  },
  /** Значения для `OzonCargoLabelError`. */
  CargoLabelError: {
    InvalidState: "INVALID_STATE",
    SupplyNotBelongContractor: "SUPPLY_NOT_BELONG_CONTRACTOR",
    SupplyNotBelongCompany: "SUPPLY_NOT_BELONG_COMPANY",
    OperationNotFound: "OPERATION_NOT_FOUND",
    OperationFailed: "OPERATION_FAILED",
    SupplyIsEmpty: "SUPPLY_IS_EMPTY",
    CargoesNotFound: "CARGOES_NOT_FOUND",
  },
  /** Значения для `OzonCargoLabelStatus`. */
  CargoLabelStatus: {
    InProgress: "IN_PROGRESS",
    Success: "SUCCESS",
    Failed: "FAILED",
  },
  /** Значения для `OzonCargoOperationStatus`. */
  CargoOperationStatus: {
    /** Формируются. */
    InProgress: "IN_PROGRESS",
    /** Успешно. */
    Success: "SUCCESS",
    /** При формировании грузомест произошла ошибка. */
    Failed: "FAILED",
    StatusUnspecified: "STATUS_UNSPECIFIED",
  },
  /** Значения для `OzonCargoPlacementZoneType`. */
  CargoPlacementZoneType: {
    /** Не требуется распределение по зонам размещения. */
    Unspecified: "UNSPECIFIED",
    /** Не определён. */
    Undefined: "UNDEFINED",
    /** Одинаковая зона размещения в составе грузоместа. */
    Single: "SINGLE",
    /** Разная зона размещения в составе грузоместа. */
    Multi: "MULTI",
  },
  /** Значения для `OzonCargoTrackingStatus`. */
  CargoTrackingStatus: {
    /** Не определён. */
    Unspecified: "UNSPECIFIED",
    /** Готово к отгрузке. */
    ReadyToSupply: "READY_TO_SUPPLY",
    /** Отказано. */
    Refused: "REFUSED",
    /** На складе размещения. */
    OnWarehouse: "ON_WAREHOUSE",
    /** Не сдано. */
    NotDelivered: "NOT_DELIVERED",
    /** Приёмка. */
    Accepting: "ACCEPTING",
    /** Обработано. */
    Processed: "PROCESSED",
    /** На точке отгрузки. */
    OnPointShipment: "ON_POINT_SHIPMENT",
    /** В пути. */
    OnTransitWarehouse: "ON_TRANSIT_WAREHOUSE",
    /** Потеряно. */
    Lost: "LOST",
    /** Создано. */
    Created: "CREATED",
    /** Удалено. */
    Deleted: "DELETED",
  },
  /** Значения для `OzonCargoTrackingType`. */
  CargoTrackingType: {
    /** Не определён. */
    Unspecified: "UNSPECIFIED",
    /** Плановая дата отгрузки. */
    ExpectedArrival: "EXPECTED_ARRIVAL",
    /** Фактическая дата отгрузки. */
    ActualArrival: "ACTUAL_ARRIVAL",
  },
  /** Значения для `OzonCargoTransportActivateError`. */
  CargoTransportActivateError: {
    Undefined: "UNDEFINED",
    OperationNotFound: "OPERATION_NOT_FOUND",
    SupplyIsFinalized: "SUPPLY_IS_FINALIZED",
    CanNotEditTag: "CAN_NOT_EDIT_TAG",
  },
  /** Значения для `OzonCargoTransportBindError`. */
  CargoTransportBindError: {
    InvalidSupplyState: "INVALID_SUPPLY_STATE",
    SupplyDoesNotBelongToCompany: "SUPPLY_DOES_NOT_BELONG_TO_COMPANY",
    OperationNotFound: "OPERATION_NOT_FOUND",
    OperationFailed: "OPERATION_FAILED",
    SupplyNotFound: "SUPPLY_NOT_FOUND",
    SupplyDoesNotBelongToContractor: "SUPPLY_DOES_NOT_BELONG_TO_CONTRACTOR",
    EttnIsUploaded: "ETTN_IS_UPLOADED",
    SupplyIsFinalized: "SUPPLY_IS_FINALIZED",
    TransportCargoesNotEnabledForSupply:
      "TRANSPORT_CARGOES_NOT_ENABLED_FOR_SUPPLY",
    CargoIdsNotFound: "CARGO_IDS_NOT_FOUND",
    TransportCargoIdsNotFound: "TRANSPORT_CARGO_IDS_NOT_FOUND",
  },
  /** Значения для `OzonCargoTransportCreateError`. */
  CargoTransportCreateError: {
    Undefined: "UNDEFINED",
    WarehouseLimitsExceed: "WAREHOUSE_LIMITS_EXCEED",
    OperationNotFound: "OPERATION_NOT_FOUND",
    SupplyNotFound: "SUPPLY_NOT_FOUND",
    SupplyDoesNotBelongToTheContractor:
      "SUPPLY_DOES_NOT_BELONG_TO_THE_CONTRACTOR",
    SupplyDoesNotBelongToTheCompany: "SUPPLY_DOES_NOT_BELONG_TO_THE_COMPANY",
    SupplyCargoesIsFinalized: "SUPPLY_CARGOES_IS_FINALIZED",
    SupplyCargoesLocked: "SUPPLY_CARGOES_LOCKED",
    EttnIsUploaded: "ETTN_IS_UPLOADED",
    PalletSupplyContainsBoxes: "PALLET_SUPPLY_CONTAINS_BOXES",
    BoxSupplyContainsPallets: "BOX_SUPPLY_CONTAINS_PALLETS",
  },
  /** Значения для `OzonCargoTransportOperationStatus`. */
  CargoTransportOperationStatus: {
    InProgress: "IN_PROGRESS",
    Success: "SUCCESS",
    Failed: "FAILED",
  },
  /** Значения для `OzonCargoType`. */
  CargoType: {
    /** Коробка. */
    Box: "BOX",
    /** Палета. */
    Pallet: "PALLET",
  },
  /** Значения для `OzonCarriageContainerSortDirection`. */
  CarriageContainerSortDirection: {
    /** По возрастанию. */
    Asc: "ASC",
    /** По убыванию. */
    Desc: "DESC",
  },
  /** Значения для `OzonCertificateAccordanceTypeV2`. */
  CertificateAccordanceType: {
    /** Неизвестный. */
    Unknown: "UNKNOWN",
    /** Стандарт сертификации ЕАЭС. */
    Eaeu: "EAEU",
    /** Национальный стандарт сертификации. */
    National: "NATIONAL",
    /** Технический регламент Российской Федерации. */
    TechnicalRegulationsRf: "TECHNICAL_REGULATIONS_RF",
    /** Технический регламент Таможенного союза. */
    TechnicalRegulationsCu: "TECHNICAL_REGULATIONS_CU",
    /** ГОСТ. */
    Gost: "GOST",
    /** Паспорт безопасности химической продукции. */
    ChemicalProducts: "CHEMICAL_PRODUCTS",
    /** Паспорт безопасности. */
    SafetyDataSheet: "SAFETY_DATA_SHEET",
    /** Отказное письмо. */
    RejectionLetter: "REJECTION_LETTER",
  },
  /** Значения для `OzonCertificateAccordanceTypeCode`. */
  CertificateAccordanceTypeCode: {
    TechnicalRegulationsRf: "technical_regulations_rf",
    TechnicalRegulationsCu: "technical_regulations_cu",
    Gost: "gost",
  },
  /** Значения для `OzonCertificateCreationStatusV2`. */
  CertificateCreationStatus: {
    /** Загружен. */
    Completed: "COMPLETED",
    /** Не загружен, некоторые параметры переданы некорректно. */
    Incomplete: "INCOMPLETE",
  },
  /** Значения для `OzonCertificateParameterStateV2`. */
  CertificateParameterState: {
    /** Заполнен некорректно. */
    Invalid: "INVALID",
    /** Заполнен корректно. */
    Valid: "VALID",
    /** Не заполнен. */
    Missing: "MISSING",
  },
  /** Значения для `OzonCertificateProductTypeV2`. */
  CertificateProductType: {
    /** Неизвестный. */
    Unknown: "UNKNOWN",
    /** Продукт, подлежащий государственной регистрации. */
    ProductsSubjectToRegistration: "PRODUCTS_SUBJECT_TO_REGISTRATION",
    /** Пестицид. */
    Pesticide: "PESTICIDE",
    /** Агрохимикат. */
    Agrochemical: "AGROCHEMICAL",
    /** Кормовая добавка. */
    FeedAdditive: "FEED_ADDITIVE",
    /** Медицинский продукт. */
    MedicalProduct: "MEDICAL_PRODUCT",
    /** Лекарственный препарат. */
    Medicine: "MEDICINE",
    /** Ветеринарный препарат. */
    VeterinaryDrug: "VETERINARY_DRUG",
    /** Фармацевтический ингредиент. */
    PharmaceuticalSubstance: "PHARMACEUTICAL_SUBSTANCE",
  },
  /** Значения для `OzonCertificateTypeV2`. */
  CertificateType: {
    /** Неизвестный. */
    Unknown: "UNKNOWN",
    /** Паспорт безопасности. */
    SafetyDataSheet: "SAFETY_DATA_SHEET",
    /** Сертификат соответствия. */
    CertificateOfConformity: "CERTIFICATE_OF_CONFORMITY",
    /** Декларация о соответствии. */
    Declaration: "DECLARATION",
    /** Свидетельство о государственной регистрации. */
    CertificateOfRegistration: "CERTIFICATE_OF_REGISTRATION",
    /** Регистрационное удостоверение. */
    RegistrationCertificate: "REGISTRATION_CERTIFICATE",
    /** Отказное письмо. */
    RefusedLetter: "REFUSED_LETTER",
    /** Ветеринарный сопроводительный документ. */
    VeterinaryCoverDocument: "VETERINARY_COVER_DOCUMENT",
  },
  /** Значения для `OzonCertificateTypeCode`. */
  CertificateTypeCode: {
    CertificateOfConformity: "certificate_of_conformity",
    Declaration: "declaration",
    CertificateOfRegistration: "certificate_of_registration",
    RegistrationCertificate: "registration_certificate",
    RefusedLetter: "refused_letter",
    VeterinaryCoverDocument: "veterinary_cover_document",
    SafetyDataSheet: "safety_data_sheet",
  },
  /** Значения для `OzonChatListStatus`. */
  ChatListStatus: {
    All: "ALL",
    Opened: "OPENED",
    Closed: "CLOSED",
  },
  /** Значения для `OzonConditionalCancellationFilterState`. */
  ConditionalCancellationFilterState: {
    /** Заявки в любом статусе. */
    All: "ALL",
    /** Заявки на рассмотрении. */
    OnApproval: "ON_APPROVAL",
    /** Подтверждённые заявки. */
    Approved: "APPROVED",
    /** Отклонённые заявки. */
    Rejected: "REJECTED",
  },
  /** Значения для `OzonConditionalCancellationInitiator`. */
  ConditionalCancellationInitiator: {
    /** Ozon. */
    Ozon: "OZON",
    /** Продавец. */
    Seller: "SELLER",
    /** Покупатель. */
    Client: "CLIENT",
    /** Система. */
    System: "SYSTEM",
    /** Служба доставки. */
    Delivery: "DELIVERY",
  },
  /** Значения для `OzonConditionalCancellationState`. */
  ConditionalCancellationState: {
    /** Заявка на рассмотрении. */
    OnApproval: "ON_APPROVAL",
    /** Подтверждённая заявка. */
    Approved: "APPROVED",
    /** Отклонённая заявка. */
    Rejected: "REJECTED",
  },
  /** Значения для `OzonDeliveryCheckoutRequestSchema`. */
  DeliveryCheckoutRequestSchema: {
    /** На выбор Ozon. */
    Mix: "MIX",
    /** FBO. */
    Fbo: "FBO",
    /** FBS. */
    Fbs: "FBS",
  },
  /** Значения для `OzonDeliveryCheckoutSchema`. */
  DeliveryCheckoutSchema: {
    /** Не определена. */
    Unspecified: "UNSPECIFIED",
    /** FBO. */
    Fbo: "FBO",
    /** FBS. */
    Fbs: "FBS",
  },
  /** Значения для `OzonDeliveryMethodSortDirection`. */
  DeliveryMethodSortDirection: {
    /** По возрастанию. */
    Asc: "ASC",
    /** По убыванию. */
    Desc: "DESC",
  },
  /** Значения для `OzonDeliveryMethodStatus`. */
  DeliveryMethodStatus: {
    Disabled: "DISABLED",
    New: "NEW",
    Edited: "EDITED",
    Active: "ACTIVE",
    Waiting: "WAITING",
    Broken: "BROKEN",
  },
  /** Значения для `OzonDeliveryMethodType`. */
  DeliveryMethodType: {
    /** Не определён. */
    Unspecified: "UNSPECIFIED",
    /** Курьером. */
    Courier: "COURIER",
    /** В пункт самовывоза. */
    Pvz: "PVZ",
    /** В постамат. */
    Postamat: "POSTAMAT",
  },
  /** Значения для `OzonDeliveryUnavailableReason`. */
  DeliveryUnavailableReason: {
    /** Доставка доступна. */
    Unspecified: "UNSPECIFIED",
    /** Неизвестная причина. */
    Unknown: "UNKNOWN",
    /** Товар заблокирован. */
    Banned: "BANNED",
    /** Маршрут не найден. */
    NoRoute: "NO_ROUTE",
    /** Товар закончился. */
    OutOfStock: "OUT_OF_STOCK",
    /** Товар заблокирован для этой области. */
    BannedForArea: "BANNED_FOR_AREA",
    /** Товар заблокирован для юридических лиц. */
    BannedForLegal: "BANNED_FOR_LEGAL",
    /** Товар заблокирован для покупателей без подписки Premium. */
    BannedForNotPremium: "BANNED_FOR_NOT_PREMIUM",
    /** Доставка недоступна, например, курьеры перегружены. */
    DeliveryUnavailable: "DELIVERY_UNAVAILABLE",
    /** Товар заблокирован для физических лиц. */
    BannedForIndividual: "BANNED_FOR_INDIVIDUAL",
    /** Вес товара не указан. */
    InvalidWeight: "INVALID_WEIGHT",
    /** Недопустимая кратность в штуках. */
    InvalidMultiplicity: "INVALID_MULTIPLICITY",
    /** Пункты в массиве дарксторов не найдены. */
    NotFoundPointsDarkStores: "NOT_FOUND_POINTS_DARK_STORES",
    /** Товары в заказе с разными схемами доставки неверно распределены. */
    InvalidMultiWarehouses: "INVALID_MULTI_WAREHOUSES",
    /** Сплит не прошёл минимальную цену. */
    MinPrice: "MIN_PRICE",
    /** Доставка Ozon недоступна. */
    OzoneDeliveryUnavailable: "OZONE_DELIVERY_UNAVAILABLE",
    /** Доставка по системе rFBS недоступна. */
    RfbsDeliveryUnavailable: "RFBS_DELIVERY_UNAVAILABLE",
    /** Способ доставки исключён по правилу приоритетного показа. */
    HackCourierTags: "HACK_COURIER_TAGS",
    /** Норматив комплектации отсутствует. */
    NoSla: "NO_SLA",
    /** Способ доставки в неподходящем статусе. */
    DeliveryVariantIsClosing: "DELIVERY_VARIANT_IS_CLOSING",
    /** Точки, по которым возврат невозможен. */
    TplNotIntegrated: "TPL_NOT_INTEGRATED",
    /** Доставка со склада отправления отсутствует. */
    NotAllWarehousesAreServed: "NOT_ALL_WAREHOUSES_ARE_SERVED",
    /** Таймслоты отсутствуют. */
    DeliverySlotsNotFound: "DELIVERY_SLOTS_NOT_FOUND",
    /** Таймслоты отсеяны из-за заполненности капаситета. */
    CapacityLimit: "CAPACITY_LIMIT",
    /** Ограничение на максимальный объёмный вес посылки. */
    PackageMaxVolumeWeightRestriction: "PACKAGE_MAX_VOLUME_WEIGHT_RESTRICTION",
    /** Ограничение на максимальный физический вес посылки, в килограммах до тысячных грамма. */
    PackageMaxWeightRestriction: "PACKAGE_MAX_WEIGHT_RESTRICTION",
    /** Ограничение на максимальную стоимость заказа, учитывается стоимость товаров, их доставки, но не учитывается страховой сбор в рублях. */
    MaxCostRestriction: "MAX_COST_RESTRICTION",
    /** Ограничение на минимальный физический вес посылки в килограммах до тысячных грамма. */
    MinPackageWeightRestriction: "MIN_PACKAGE_WEIGHT_RESTRICTION",
    /** Ограничение на минимальную стоимость товаров заказа в рублях. */
    MinCostRestriction: "MIN_COST_RESTRICTION",
    /** Ограничение на максимальные габариты посылки в сантиметрах. */
    MaxDimensionsRestriction: "MAX_DIMENSIONS_RESTRICTION",
    /** Ограничение на допустимые в заказе товарные категории. */
    ProductTypesRestriction: "PRODUCT_TYPES_RESTRICTION",
    /** Ограничение на допустимые в заказе теги товаров. */
    ProductTagsRestriction: "PRODUCT_TAGS_RESTRICTION",
    /** Выбранный способ доставки стал недоступным. */
    SelectedDeliveryMethodUnavailable: "SELECTED_DELIVERY_METHOD_UNAVAILABLE",
    /** Выбранный таймслот стал недоступным. */
    SelectedDeliveryTimeslotUnavailable:
      "SELECTED_DELIVERY_TIMESLOT_UNAVAILABLE",
    /** В заказе товары нескольких маркетплейсов, оформить заказ можно только с 1. */
    MarketplaceUnavailable: "MARKETPLACE_UNAVAILABLE",
    /** Выбранный ПВЗ не подходит для КГТ. */
    InvalidPvzForKgt: "INVALID_PVZ_FOR_KGT",
    /** Юридическим лицам запрещена покупка подписки Premium. */
    LegalUserPremiumSplit: "LEGAL_USER_PREMIUM_SPLIT",
    /** У пользователя уже есть подписка Premium и она не подарочная. */
    UserAlreadyHasPremium: "USER_ALREADY_HAS_PREMIUM",
    /** Пользователь купил премиум-подписку, но не оплатил заказ или подписка ещё не перешла в активный статус; - `ADDRESS_NOT_SET ` — адрес не установлен. */
    WaitForPaySubscription: "WAIT_FOR_PAY_SUBSCRIPTION",
    AddressNotSet: "ADDRESS_NOT_SET",
    /** ПВЗ недоступен. */
    PickupPointDisabled: "PICKUP_POINT_DISABLED",
    /** Предзаказ недоступен юридическим лицам. */
    LegalPreorder: "LEGAL_PREORDER",
    /** Тип доставки недоступен для предзаказа. */
    DeliveryTypeForPreorder: "DELIVERY_TYPE_FOR_PREORDER",
    /** CrossBorder-товары не доставляются в пункты выдачи. */
    CrossBorderPickup: "CROSS_BORDER_PICKUP",
    /** Ограничения на таможенные типы. */
    OrderCustomsTypes: "ORDER_CUSTOMS_TYPES",
    /** Ограничение на максимальную стоимость посылки,учитывается стоимость товаров и их доставки. */
    PackageMaxCost: "PACKAGE_MAX_COST",
    /** Недоступный «суперэконом». */
    SuperEconom: "SUPER_ECONOM",
    /** Неполный квант. */
    EconomNotFullQuant: "ECONOM_NOT_FULL_QUANT",
    /** Нет доступных способов доставки. */
    EmptyDeliveryMethods: "EMPTY_DELIVERY_METHODS",
  },
  /** Значения для `OzonDigitalPostingSortDirection`. */
  DigitalPostingSortDirection: {
    /** По возрастанию. */
    Asc: "ASC",
    /** По убыванию. */
    Desc: "DESC",
  },
  /** Значения для `OzonDigitalPostingV2SortDirection`. */
  DigitalPostingV2SortDirection: {
    /** По возрастанию. */
    Asc: "ASC",
    /** По убыванию. */
    Desc: "DESC",
  },
  /** Значения для `OzonDiscountTaskStatus`. */
  DiscountTaskStatus: {
    /** Одобренная. */
    Approved: "APPROVED",
    /** Новая. */
    New: "NEW",
    /** Просмотренная. */
    Seen: "SEEN",
    /** Одобренная частично. */
    PartlyApproved: "PARTLY_APPROVED",
    /** Отклонённая. */
    Declined: "DECLINED",
    /** Отклонена автоматически. */
    AutoDeclined: "AUTO_DECLINED",
    /** Отклонена покупателем. */
    DeclinedByUser: "DECLINED_BY_USER",
    /** Скидка по купону. */
    Coupon: "COUPON",
    /** Купленная. */
    Purchased: "PURCHASED",
  },
  /** Значения для `OzonDiscountTaskStatusV2`. */
  DiscountTaskStatusV2: {
    /** Все статусы. */
    All: "ALL",
    /** Одобренная. */
    Approved: "APPROVED",
    /** Новая. */
    New: "NEW",
    /** Отклонённая. */
    Declined: "DECLINED",
  },
  /** Значения для `OzonDraftSupplyCreateError`. */
  DraftSupplyCreateError: {
    Unspecified: "UNSPECIFIED",
    Undefined: "UNDEFINED",
    SkuDistributionRequiredButNotPossible:
      "SKU_DISTRIBUTION_REQUIRED_BUT_NOT_POSSIBLE",
    InvalidSellerWarehouse: "INVALID_SELLER_WAREHOUSE",
    MinimumVolumeInLitresInvalid: "MINIMUM_VOLUME_IN_LITRES_INVALID",
    InvalidClustersCount: "INVALID_CLUSTERS_COUNT",
    SomeServiceError: "SOME_SERVICE_ERROR",
    OrderSkuLimit: "ORDER_SKU_LIMIT",
    InactiveContract: "INACTIVE_CONTRACT",
    InvalidVolume: "INVALID_VOLUME",
    InvalidQuantityOrQuant: "INVALID_QUANTITY_OR_QUANT",
    OrderAlreadyCreated: "ORDER_ALREADY_CREATED",
    OrderCreationInProgress: "ORDER_CREATION_IN_PROGRESS",
    DraftDoesNotExist: "DRAFT_DOES_NOT_EXIST",
    ContractorCanNotCreateOrder: "CONTRACTOR_CAN_NOT_CREATE_ORDER",
    DraftIncorrectState: "DRAFT_INCORRECT_STATE",
    InvalidRoute: "INVALID_ROUTE",
    InvalidStorageWarehouse: "INVALID_STORAGE_WAREHOUSE",
    InvalidStorageRegion: "INVALID_STORAGE_REGION",
    InvalidSplitting: "INVALID_SPLITTING",
    InvalidSupplyContent: "INVALID_SUPPLY_CONTENT",
    TimeslotNotAvailable: "TIMESLOT_NOT_AVAILABLE",
    XdockInDeliveryPointDisabledForSeller:
      "XDOCK_IN_DELIVERY_POINT_DISABLED_FOR_SELLER",
    DraftIsLocked: "DRAFT_IS_LOCKED",
    InvalidPackageUnitsCounts: "INVALID_PACKAGE_UNITS_COUNTS",
    SellerConversationDoesNotExist: "SELLER_CONVERSATION_DOES_NOT_EXIST",
    UserCanNotCreateSellerConversation:
      "USER_CAN_NOT_CREATE_SELLER_CONVERSATION",
    SkuWithEttnRequiredTagNotAllowedForDropOffPoint:
      "SKU_WITH_ETTN_REQUIRED_TAG_NOT_ALLOWED_FOR_DROP_OFF_POINT",
    PickupOrderLimitExceeded: "PICKUP_ORDER_LIMIT_EXCEEDED",
    CanNotCreateOrder: "CAN_NOT_CREATE_ORDER",
  },
  /** Значения для `OzonDraftSupplyCreateStatus`. */
  DraftSupplyCreateStatus: {
    /** Не определён. */
    Unspecified: "UNSPECIFIED",
    InProgress: "IN_PROGRESS",
    Success: "SUCCESS",
    /** Не удалось создать. */
    Failed: "FAILED",
  },
  /** Значения для `OzonDraftSupplyType`. */
  DraftSupplyType: {
    /** Кросс-докинг. */
    Crossdock: "CROSSDOCK",
    /** Прямая. */
    Direct: "DIRECT",
    /** Для нескольких кластеров. */
    MultiCluster: "MULTI_CLUSTER",
  },
  /** Значения для `OzonDropOffPointType`. */
  DropOffPointType: {
    /** Пункт выдачи заказов. */
    Pvz: "PVZ",
    /** Пункт приёма заказов. */
    Ppz: "PPZ",
    /** Сортировочный центр. */
    Sc: "SC",
  },
  /** Значения для `OzonErfbsConfiguredReturnMethod`. */
  ErfbsConfiguredReturnMethod: {
    /** Курьером. */
    Courier: "COURIER",
    /** Транспортной компанией. */
    TransportCompany: "TRANSPORT_COMPANY",
  },
  /** Значения для `OzonErfbsConfiguredWorkingDay`. */
  ErfbsConfiguredWorkingDay: {
    /** Понедельник. */
    Monday: "MONDAY",
    /** Вторник. */
    Tuesday: "TUESDAY",
    /** Среда. */
    Wednesday: "WEDNESDAY",
    /** Четверг. */
    Thursday: "THURSDAY",
    /** Пятница. */
    Friday: "FRIDAY",
    /** Суббота. */
    Saturday: "SATURDAY",
    /** Воскресенье. */
    Sunday: "SUNDAY",
  },
  /** Значения для `OzonErfbsReturnMethod`. */
  ErfbsReturnMethod: {
    /** Не определён. */
    Unspecified: "UNSPECIFIED",
    /** Курьером. */
    Courier: "COURIER",
    /** Транспортной компанией. */
    TransportCompany: "TRANSPORT_COMPANY",
  },
  /** Значения для `OzonErfbsWorkingDay`. */
  ErfbsWorkingDay: {
    /** Не определён. */
    Unspecified: "UNSPECIFIED",
    /** Понедельник. */
    Monday: "MONDAY",
    /** Вторник. */
    Tuesday: "TUESDAY",
    /** Среда. */
    Wednesday: "WEDNESDAY",
    /** Четверг. */
    Thursday: "THURSDAY",
    /** Пятница. */
    Friday: "FRIDAY",
    /** Суббота. */
    Saturday: "SATURDAY",
    /** Воскресенье. */
    Sunday: "SUNDAY",
  },
  /** Значения для `OzonFboCargoDeleteStatus`. */
  FboCargoDeleteStatus: {
    /** Не определён. */
    Unspecified: "UNSPECIFIED",
    InProgress: "IN_PROGRESS",
    Success: "SUCCESS",
    /** Не удалось создать. */
    Failed: "FAILED",
  },
  /** Значения для `OzonFboCargoDeleteSupplyError`. */
  FboCargoDeleteSupplyError: {
    Unspecified: "UNSPECIFIED",
    Undefined: "UNDEFINED",
    OperationNotFound: "OPERATION_NOT_FOUND",
    SupplyNotFound: "SUPPLY_NOT_FOUND",
    CantDeleteAllCargoes: "CANT_DELETE_ALL_CARGOES",
    SupplyDoesNotBelongToTheContractor:
      "SUPPLY_DOES_NOT_BELONG_TO_THE_CONTRACTOR",
    SupplyDoesNotBelongToTheCompany: "SUPPLY_DOES_NOT_BELONG_TO_THE_COMPANY",
    SupplyCargoesIsFinalized: "SUPPLY_CARGOES_IS_FINALIZED",
    SupplyCargoesLocked: "SUPPLY_CARGOES_LOCKED",
    EttnIsUploaded: "ETTN_IS_UPLOADED",
    CantDeleteAllTransportCargoes: "CANT_DELETE_ALL_TRANSPORT_CARGOES",
  },
  /** Значения для `OzonFboCargoTrackingType`. */
  FboCargoTrackingType: {
    /** Не определён. */
    Unspecified: "UNSPECIFIED",
    /** Плановая дата отгрузки. */
    ExpectedArrival: "EXPECTED_ARRIVAL",
    /** Фактическая дата отгрузки. */
    ActualArrival: "ACTUAL_ARRIVAL",
  },
  /** Значения для `OzonFboPostingSortDirectionV2`, `OzonFboPostingSortDirectionV3`. */
  FboPostingSortDirection: {
    /** По возрастанию. */
    Asc: "ASC",
    /** По убыванию. */
    Desc: "DESC",
  },
  /** Значения для `OzonFboSellerWarehouseWorkingDay`. */
  FboSellerWarehouseWorkingDay: {
    /** Не определён. */
    Unspecified: "UNSPECIFIED",
    /** Понедельник. */
    Monday: "MONDAY",
    /** Вторник. */
    Tuesday: "TUESDAY",
    /** Среда. */
    Wednesday: "WEDNESDAY",
    /** Четверг. */
    Thursday: "THURSDAY",
    /** Пятница. */
    Friday: "FRIDAY",
    /** Суббота. */
    Saturday: "SATURDAY",
    /** Воскресенье. */
    Sunday: "SUNDAY",
  },
  /** Значения для `OzonFboSupplyType`. */
  FboSupplyType: {
    /** Кросс-докинг. */
    CreateTypeCrossdock: "CREATE_TYPE_CROSSDOCK",
    /** Прямая. */
    CreateTypeDirect: "CREATE_TYPE_DIRECT",
  },
  /** Значения для `OzonFboSupplyWarehouseType`. */
  FboSupplyWarehouseType: {
    /** Пункт выдачи заказов. */
    WarehouseTypeDeliveryPoint: "WAREHOUSE_TYPE_DELIVERY_POINT",
    /** Пункт приёма заказов. */
    WarehouseTypeOrdersReceivingPoint: "WAREHOUSE_TYPE_ORDERS_RECEIVING_POINT",
    /** Сортировочный центр. */
    WarehouseTypeSortingCenter: "WAREHOUSE_TYPE_SORTING_CENTER",
    /** Фулфилмент. */
    WarehouseTypeFullFillment: "WAREHOUSE_TYPE_FULL_FILLMENT",
    /** Кросс-докинг. */
    WarehouseTypeCrossDock: "WAREHOUSE_TYPE_CROSS_DOCK",
  },
  /** Значения для `OzonFbpAcceptanceActError`. */
  FbpAcceptanceActError: {
    /** Не определена. */
    ErrorReasonUnspecified: "ERROR_REASON_UNSPECIFIED",
    /** Неверная компания. */
    InvalidCompany: "INVALID_COMPANY",
    /** Файл не найден. */
    FileNotFound: "FILE_NOT_FOUND",
    /** Превышено время генерации. */
    GenerateTimeoutReached: "GENERATE_TIMEOUT_REACHED",
    /** Ошибка во время генерации. */
    GenerationError: "GENERATION_ERROR",
  },
  /** Значения для `OzonFbpAcceptanceActStatus`. */
  FbpAcceptanceActStatus: {
    /** Ошибка. */
    Error: "ERROR",
    /** Не определён. */
    StatusUnspecified: "STATUS_UNSPECIFIED",
    /** В процессе. */
    Processing: "PROCESSING",
    /** Не существует. */
    NotExist: "NOT_EXIST",
    /** Завершена. */
    Exist: "EXIST",
  },
  /** Значения для `OzonFbpArchiveDeclineCode`. */
  FbpArchiveDeclineCode: {
    /** Не определён. */
    DeclineReasonCodeUnspecified: "DECLINE_REASON_CODE_UNSPECIFIED",
    /** Не удалось создать поставку на стороне 3PF. */
    CannotCreateSupplyOnTpf: "CANNOT_CREATE_SUPPLY_ON_TPF",
    /** Дроп-офф точка закрыта. */
    DropOffPointClosed: "DROP_OFF_POINT_CLOSED",
    /** Поставка потеряна. */
    CodeSupplyLost: "CODE_SUPPLY_LOST",
    /** Продавец отказался от забора поставки курьером. */
    CourierPickUpRejectedBySeller: "COURIER_PICK_UP_REJECTED_BY_SELLER",
    /** Проблемы с бондовыми документами. */
    BondedDocumentsRejectedByWarehouse:
      "BONDED_DOCUMENTS_REJECTED_BY_WAREHOUSE",
  },
  /** Значения для `OzonFbpArchiveStatus`. */
  FbpArchiveStatus: {
    /** Завершена. */
    Completed: "COMPLETED",
    /** Отклонена складом. */
    RejectedAtSupplyWarehouse: "REJECTED_AT_SUPPLY_WAREHOUSE",
    /** Не определён. */
    ArchiveStatusUnspecified: "ARCHIVE_STATUS_UNSPECIFIED",
    /** Отменена продавцом. */
    CancelledBySeller: "CANCELLED_BY_SELLER",
  },
  /** Значения для `OzonFbpArchiveSupplyType`. */
  FbpArchiveSupplyType: {
    /** Доставка курьером от склада продавца. */
    PickUp: "PICK_UP",
    /** Доставка до drop-off пункта. */
    DropOff: "DROP_OFF",
    /** Не определён. */
    SupplyTypeUnspecified: "SUPPLY_TYPE_UNSPECIFIED",
    /** Доставка до склада силами продавца. */
    DirectBySeller: "DIRECT_BY_SELLER",
    /** Доставка до склада сторонней транспортной компанией. */
    DirectByTpl: "DIRECT_BY_TPL",
  },
  /** Значения для `OzonFbpBundleItemError`. */
  FbpBundleItemError: {
    Surplus: "SURPLUS",
    NoSales: "NO_SALES",
    Banned: "BANNED",
    OutOfAssortment: "OUT_OF_ASSORTMENT",
    Invalid: "INVALID",
    IncompatibleWarehouse: "INCOMPATIBLE_WAREHOUSE",
    Multiplicity: "MULTIPLICITY",
    NoPrice: "NO_PRICE",
    BundleItemErrorUnspecified: "BUNDLE_ITEM_ERROR_UNSPECIFIED",
    InvalidBarcode: "INVALID_BARCODE",
    DuplicateItems: "DUPLICATE_ITEMS",
    ZeroQuantity: "ZERO_QUANTITY",
    QuantityGreaterThenMax: "QUANTITY_GREATER_THEN_MAX",
    AvailabilityIsEmpty: "AVAILABILITY_IS_EMPTY",
  },
  /** Значения для `OzonFbpCancellationErrorCode`. */
  FbpCancellationErrorCode: {
    /** Не определён. */
    CodeUnspecified: "CODE_UNSPECIFIED",
    /** Отмена заявки не подтверждена, мы не получили ответа от склада партнёра. */
    NoResponseFrom3pf: "NO_RESPONSE_FROM_3PF",
    /** Отмена заявки не подтверждена, приёмка уже началась. */
    AcceptanceAlreadyStarted: "ACCEPTANCE_ALREADY_STARTED",
  },
  /** Значения для `OzonFbpCancellationStatus`. */
  FbpCancellationStatus: {
    /** Не определён. */
    StatusUnspecified: "STATUS_UNSPECIFIED",
    /** Ожидается подтверждение отмены заявки. */
    Confirmation: "CONFIRMATION",
    /** Подтверждение получено. */
    Canceled: "CANCELED",
    /** Подтверждение не получено. */
    NotCanceled: "NOT_CANCELED",
  },
  /** Значения для `OzonFbpConsignmentNoteState`. */
  FbpConsignmentNoteState: {
    /** В процессе. */
    InProgress: "IN_PROGRESS",
    /** Ошибка. */
    Failed: "FAILED",
    /** Не определён. */
    StateTypeUnspecified: "STATE_TYPE_UNSPECIFIED",
    /** Завершилась успешно. */
    Finished: "FINISHED",
  },
  /** Значения для `OzonFbpCreateAcceptanceActError`. */
  FbpCreateAcceptanceActError: {
    CreateActErrorReasonUnspecified: "CREATE_ACT_ERROR_REASON_UNSPECIFIED",
    InvalidOrderType: "INVALID_ORDER_TYPE",
  },
  /** Значения для `OzonFbpDayOfWeek`. */
  FbpDayOfWeek: {
    /** Понедельник. */
    Monday: "MONDAY",
    /** Вторник. */
    Tuesday: "TUESDAY",
    /** Среда. */
    Wednesday: "WEDNESDAY",
    /** Четверг. */
    Thursday: "THURSDAY",
    /** Пятница. */
    Friday: "FRIDAY",
    /** Суббота. */
    Saturday: "SATURDAY",
    /** Воскресенье. */
    Sunday: "SUNDAY",
    /** Не определён. */
    DayOfWeekUnspecified: "DAY_OF_WEEK_UNSPECIFIED",
  },
  /** Значения для `OzonFbpDraftStatus`. */
  FbpDraftStatus: {
    /** Новый. */
    New: "NEW",
    /** Не определён. */
    DraftStatusUnspecified: "DRAFT_STATUS_UNSPECIFIED",
    /** Ожидает подтверждения. */
    SupplyVariantConfirmation: "SUPPLY_VARIANT_CONFIRMATION",
    /** Отклонён складом. */
    SupplyNotConfirmed: "SUPPLY_NOT_CONFIRMED",
  },
  /** Значения для `OzonFbpDraftValidationError`. */
  FbpDraftValidationError: {
    InvalidState: "INVALID_STATE",
    ErrorTypeUnspecified: "ERROR_TYPE_UNSPECIFIED",
    OrderDraftLocked: "ORDER_DRAFT_LOCKED",
    DeliveryDriverNameLengthMaximumReached:
      "DELIVERY_DRIVER_NAME_LENGTH_MAXIMUM_REACHED",
    DeliveryVehicleGenreLengthMaximumReached:
      "DELIVERY_VEHICLE_GENRE_LENGTH_MAXIMUM_REACHED",
    DeliveryVehicleRegistrationPlateLengthMaximumReached:
      "DELIVERY_VEHICLE_REGISTRATION_PLATE_LENGTH_MAXIMUM_REACHED",
    DeliveryTplNameLengthMaximumReached:
      "DELIVERY_TPL_NAME_LENGTH_MAXIMUM_REACHED",
    DeliveryTrackingNumberLengthMaximumReached:
      "DELIVERY_TRACKING_NUMBER_LENGTH_MAXIMUM_REACHED",
    DeliveryDriverNameEmpty: "DELIVERY_DRIVER_NAME_EMPTY",
    DeliveryVehicleGenreEmpty: "DELIVERY_VEHICLE_GENRE_EMPTY",
    DeliveryVehicleRegistrationPlateEmpty:
      "DELIVERY_VEHICLE_REGISTRATION_PLATE_EMPTY",
    DeliveryTplNameEmpty: "DELIVERY_TPL_NAME_EMPTY",
    DeliveryTrackingNumberEmpty: "DELIVERY_TRACKING_NUMBER_EMPTY",
    InvalidBusinessFlow: "INVALID_BUSINESS_FLOW",
    SupplyTypeNotSupported: "SUPPLY_TYPE_NOT_SUPPORTED",
  },
  /** Значения для `OzonFbpEmptyTimeslotsReason`. */
  FbpEmptyTimeslotsReason: {
    EmptyTimeslotsReasonUnspecified: "EMPTY_TIMESLOTS_REASON_UNSPECIFIED",
    LogisticsUnknown: "LOGISTICS_UNKNOWN",
    NoRoute: "NO_ROUTE",
    NoRouteSchedules: "NO_ROUTE_SCHEDULES",
    NoLogisticsCapacity: "NO_LOGISTICS_CAPACITY",
    ScheduleUnknown: "SCHEDULE_UNKNOWN",
    NotEnoughCapacity: "NOT_ENOUGH_CAPACITY",
    NotEnoughTrucks: "NOT_ENOUGH_TRUCKS",
    LimitsNotAvailable: "LIMITS_NOT_AVAILABLE",
    CrossDockReserveMissing: "CROSS_DOCK_RESERVE_MISSING",
    ScheduleReserveMissing: "SCHEDULE_RESERVE_MISSING",
  },
  /** Значения для `OzonFbpLabelGenerationState`. */
  FbpLabelGenerationState: {
    /** Не определён. */
    Unspecified: "UNSPECIFIED",
    /** В процессе генерации. */
    InProgress: "IN_PROGRESS",
    /** Генерация завершилась с ошибкой. */
    Failed: "FAILED",
    /** Генерация завершилась успешно. */
    Finished: "FINISHED",
  },
  /** Значения для `OzonFbpOrderAttentionReason`. */
  FbpOrderAttentionReason: {
    OrderAttentionTypeUnspecified: "ORDER_ATTENTION_TYPE_UNSPECIFIED",
    Old: "OLD",
    TimeSlotExpired: "TIME_SLOT_EXPIRED",
  },
  /** Значения для `OzonFbpOrderError`. */
  FbpOrderError: {
    /** Не определена. */
    OrderErrorTypeUnspecified: "ORDER_ERROR_TYPE_UNSPECIFIED",
    /** Указано неверное количество грузомест в заявке. */
    InvalidNumberOfPackageUnits: "INVALID_NUMBER_OF_PACKAGE_UNITS",
    /** Превышено максимальное количество уникальных SKU в заявке. */
    MaximumNumberOfUniqueSkuReached: "MAXIMUM_NUMBER_OF_UNIQUE_SKU_REACHED",
    /** Достигнут максимальный объём поставки. */
    MaximumBundleVolumeReached: "MAXIMUM_BUNDLE_VOLUME_REACHED",
    /** Состав поставки пуст. */
    BundleIdEmpty: "BUNDLE_ID_EMPTY",
    /** Тип поставки не указан или указан неверный. */
    InvalidSupplyType: "INVALID_SUPPLY_TYPE",
    /** Таймслот не указан или указан неверный. */
    InvalidTimeslot: "INVALID_TIMESLOT",
    /** Неверный идентификатор поставки WHC. */
    InvalidWhcNumber: "INVALID_WHC_NUMBER",
    /** Заявка ожидает переноса в ордер. */
    DraftLocked: "DRAFT_LOCKED",
    /** Для поставки drop-off не указано место отгрузки. */
    DropOffPointsIsEmpty: "DROP_OFF_POINTS_IS_EMPTY",
    /** Не указаны данные склада. */
    WarehouseIsEmpty: "WAREHOUSE_IS_EMPTY",
    /** Не определён тип бизнес-процесса. */
    BusinessFlowTypeIsEmpty: "BUSINESS_FLOW_TYPE_IS_EMPTY",
    /** Поставка уже отменена. */
    WasCancelled: "WAS_CANCELLED",
    /** Для поставки pick-up не указаны данные по отгрузке курьеру со склада продавца. */
    PickUpDetailsIsEmpty: "PICK_UP_DETAILS_IS_EMPTY",
    /** Для поставки pick-up указаны неверные данные по отгрузке курьеру со склада продавца. */
    InvalidPickUpDetails: "INVALID_PICK_UP_DETAILS",
    /** Для поставки pick-up указана неверная дата отгрузки курьеру со склада продавца. */
    InvalidPickUpDate: "INVALID_PICK_UP_DATE",
    /** Ошибка при проверке параметров. */
    InternalError: "INTERNAL_ERROR",
  },
  /** Значения для `OzonFbpOrderStatus`. */
  FbpOrderStatus: {
    /** Готов к отгрузке. */
    ReadyToSupply: "READY_TO_SUPPLY",
    /** Приёмка на складе. */
    AcceptanceAtStorageWarehouse: "ACCEPTANCE_AT_STORAGE_WAREHOUSE",
    /** Заявка отменена. */
    Cancelled: "CANCELLED",
    /** Не определён. */
    OrderStatusUnspecified: "ORDER_STATUS_UNSPECIFIED",
    /** Заполнение данных поставки. */
    FillingDeliveryDetails: "FILLING_DELIVERY_DETAILS",
    /** Курьер назначен. */
    CourierAssigned: "COURIER_ASSIGNED",
    /** Курьер забрал поставку. */
    CourierPickedUp: "COURIER_PICKED_UP",
    /** Принято на drop-off пункте. */
    AcceptanceAtDropOffPoint: "ACCEPTANCE_AT_DROP_OFF_POINT",
    /** В пути на склад размещения. */
    InTransitToStorageWarehouse: "IN_TRANSIT_TO_STORAGE_WAREHOUSE",
  },
  /** Значения для `OzonFbpOrderTimeslotReserveFailure`. */
  FbpOrderTimeslotReserveFailure: {
    ReserveFailureTypeUnspecified: "RESERVE_FAILURE_TYPE_UNSPECIFIED",
    RequestValidation: "REQUEST_VALIDATION",
    InvalidReserve: "INVALID_RESERVE",
    LogisticsReason: "LOGISTICS_REASON",
    ScheduleReason: "SCHEDULE_REASON",
  },
  /** Значения для `OzonFbpOrderValidationErrorType`. */
  FbpOrderValidationErrorType: {
    InvalidState: "INVALID_STATE",
    OrderLocked: "ORDER_LOCKED",
    ErrorTypeUnspecified: "ERROR_TYPE_UNSPECIFIED",
    DeliveryDriverNameLengthMaximumReached:
      "DELIVERY_DRIVER_NAME_LENGTH_MAXIMUM_REACHED",
    DeliveryVehicleGenreLengthMaximumReached:
      "DELIVERY_VEHICLE_GENRE_LENGTH_MAXIMUM_REACHED",
    DeliveryVehicleRegistrationPlateLengthMaximumReached:
      "DELIVERY_VEHICLE_REGISTRATION_PLATE_LENGTH_MAXIMUM_REACHED",
    DeliveryTplNameLengthMaximumReached:
      "DELIVERY_TPL_NAME_LENGTH_MAXIMUM_REACHED",
    DeliveryTrackingNumberLengthMaximumReached:
      "DELIVERY_TRACKING_NUMBER_LENGTH_MAXIMUM_REACHED",
    DeliveryDriverNameEmpty: "DELIVERY_DRIVER_NAME_EMPTY",
    DeliveryVehicleGenreEmpty: "DELIVERY_VEHICLE_GENRE_EMPTY",
    DeliveryVehicleRegistrationPlateEmpty:
      "DELIVERY_VEHICLE_REGISTRATION_PLATE_EMPTY",
    DeliveryTplNameEmpty: "DELIVERY_TPL_NAME_EMPTY",
    DeliveryTrackingNumberEmpty: "DELIVERY_TRACKING_NUMBER_EMPTY",
    InvalidBusinessFlow: "INVALID_BUSINESS_FLOW",
    SupplyTypeNotSupported: "SUPPLY_TYPE_NOT_SUPPORTED",
    InvalidTimeslot: "INVALID_TIMESLOT",
    DeliveryBySellerEmpty: "DELIVERY_BY_SELLER_EMPTY",
    DeliveryByTplEmpty: "DELIVERY_BY_TPL_EMPTY",
    ReceiveDateNotSet: "RECEIVE_DATE_NOT_SET",
    DropOffDetailsEmpty: "DROP_OFF_DETAILS_EMPTY",
    PickUpAddressIsEmpty: "PICK_UP_ADDRESS_IS_EMPTY",
    PickUpSenderNameIsEmpty: "PICK_UP_SENDER_NAME_IS_EMPTY",
    PickUpSenderPhoneIsEmpty: "PICK_UP_SENDER_PHONE_IS_EMPTY",
    PickUpAddressIsTooLarge: "PICK_UP_ADDRESS_IS_TOO_LARGE",
    PickUpSenderNameIsTooLarge: "PICK_UP_SENDER_NAME_IS_TOO_LARGE",
    PickUpSenderPhoneIsTooLarge: "PICK_UP_SENDER_PHONE_IS_TOO_LARGE",
    PickUpCommentIsTooLarge: "PICK_UP_COMMENT_IS_TOO_LARGE",
    PickUpDetailsEmpty: "PICK_UP_DETAILS_EMPTY",
    DropOffAddressNotSet: "DROP_OFF_ADDRESS_NOT_SET",
  },
  /** Значения для `OzonFbpPostingSortDirection`. */
  FbpPostingSortDirection: {
    /** По возрастанию. */
    Asc: "ASC",
    /** По убыванию. */
    Desc: "DESC",
  },
  /** Значения для `OzonFbpTimeslotReserveFailure`. */
  FbpTimeslotReserveFailure: {
    ReserveFailureTypeUnspecified: "RESERVE_FAILURE_TYPE_UNSPECIFIED",
    RequestValidation: "REQUEST_VALIDATION",
    InvalidReserve: "INVALID_RESERVE",
    LogisticsReason: "LOGISTICS_REASON",
    ScheduleReason: "SCHEDULE_REASON",
    NoCapacity: "NO_CAPACITY",
  },
  /** Значения для `OzonFbsAssemblySortDirection`. */
  FbsAssemblySortDirection: {
    /** По возрастанию. */
    Asc: "ASC",
    /** По убыванию. */
    Desc: "DESC",
  },
  /** Значения для `OzonFbsCarriageEttnStatus`. */
  FbsCarriageEttnStatus: {
    /** Проверена. */
    Success: "SUCCESS",
    /** Ошибка. */
    Failed: "FAILED",
    /** Не загружена. */
    NotUploaded: "NOT_UPLOADED",
    /** В процессе проверки. */
    Processing: "PROCESSING",
  },
  /** Значения для `OzonFbsPostingErrorType`. */
  FbsPostingErrorType: {
    /** Не указан. */
    Unspecified: "UNSPECIFIED",
    /** Отмена по вине продавца. */
    SellerCancellation: "SELLER_CANCELLATION",
    /** Просрочка по вине продавца. */
    SellerDelay: "SELLER_DELAY",
  },
  /** Значения для `OzonFbsPostingSortDirectionV4`. */
  FbsPostingSortDirection: {
    /** По возрастанию. */
    Asc: "ASC",
    /** По убыванию. */
    Desc: "DESC",
  },
  /** Значения для `OzonFbsWarehouseFirstMileType`. */
  FbsWarehouseFirstMileType: {
    /** Отгрузка заказов курьеру. */
    PickUp: "PICK_UP",
    /** Отгрузка заказов в пункт приёма. */
    DropOff: "DROP_OFF",
  },
  /** Значения для `OzonFbsWarehouseWorkingDay`. */
  FbsWarehouseWorkingDay: {
    /** Понедельник. */
    Monday: "MONDAY",
    /** Вторник. */
    Tuesday: "TUESDAY",
    /** Среда. */
    Wednesday: "WEDNESDAY",
    /** Четверг. */
    Thursday: "THURSDAY",
    /** Пятница. */
    Friday: "FRIDAY",
    /** Суббота. */
    Saturday: "SATURDAY",
    /** Воскресенье. */
    Sunday: "SUNDAY",
  },
  /** Значения для `OzonFinanceAccrualCategory`. */
  FinanceAccrualCategory: {
    /** Не определён. */
    Unspecified: "UNSPECIFIED",
    /** Начисление по отправлению. */
    Posting: "POSTING",
    /** Начисление по товару. */
    Item: "ITEM",
    /** Начисление по продавцу без привязки к товару. */
    NonItem: "NON_ITEM",
    /** Начисление по контейнеру. */
    ContainerFees: "CONTAINER_FEES",
  },
  /** Значения для `OzonFinanceTransactionTypeV3`. */
  FinanceTransactionType: {
    All: "all",
    Orders: "orders",
    Returns: "returns",
    Services: "services",
    Compensation: "compensation",
    TransferDelivery: "transferDelivery",
    Other: "other",
  },
  /** Значения для `OzonFirstMileType`. */
  FirstMileType: {
    DropOff: "DropOff",
    Pickup: "Pickup",
  },
  /** Значения для `OzonLanguage`. */
  Language: {
    Default: "DEFAULT",
    /** Русский. */
    Ru: "RU",
    /** Английский. */
    En: "EN",
    /** Турецкий. */
    Tr: "TR",
    /** Китайский. */
    ZhHans: "ZH_HANS",
  },
  /** Значения для `OzonLogisticsSchema`. */
  LogisticsSchema: {
    Fbo: "FBO",
    Fbs: "FBS",
    Unknown: "UNKNOWN",
  },
  /** Значения для `OzonNotificationCheckErrorType`. */
  NotificationCheckErrorType: {
    /** Нет подключения по URL-адресу. */
    RequestError: "REQUEST_ERROR",
    /** Превышено время ожидания запроса. */
    RequestTimeout: "REQUEST_TIMEOUT",
    /** Сервис вернул внутреннюю ошибку. */
    ServerFault: "SERVER_FAULT",
    /** HTTP-статус ответа не `200`. */
    StatusCodeNotOk: "STATUS_CODE_NOT_OK",
    /** Тело ответа пустое или отсутствует. */
    EmptyBody: "EMPTY_BODY",
    /** Некорректный формат тела ответа. */
    InvalidBody: "INVALID_BODY",
    /** Ошибка при разборе или валидации JSON-данных. */
    InvalidJson: "INVALID_JSON",
    /** Сервис вернул тело ответа не по шаблону. */
    WrongResultField: "WRONG_RESULT_FIELD",
    /** Параметр `time` в теле ответа некорректный. */
    WrongResultTimeField: "WRONG_RESULT_TIME_FIELD",
  },
  /** Значения для `OzonNotificationType`. */
  NotificationType: {
    /** Новое сообщение в чате. */
    TypeNewMessage: "TYPE_NEW_MESSAGE",
    /** Изменение сообщения в чате. */
    TypeUpdateMessage: "TYPE_UPDATE_MESSAGE",
    /** Ваше сообщение прочитано покупателем или поддержкой. */
    TypeMessageRead: "TYPE_MESSAGE_READ",
    /** Чат закрыт. */
    TypeChatClosed: "TYPE_CHAT_CLOSED",
    /** Новое отправление. */
    TypeNewPosting: "TYPE_NEW_POSTING",
    /** Отмена отправления. */
    TypePostingCancelled: "TYPE_POSTING_CANCELLED",
    /** Изменение статуса отправления. */
    TypeStateChanged: "TYPE_STATE_CHANGED",
    /** Изменение даты доставки отправления. */
    TypeDeliveryDateChanged: "TYPE_DELIVERY_DATE_CHANGED",
    /** Изменение даты отгрузки отправления. */
    TypeCutoffDateChanged: "TYPE_CUTOFF_DATE_CHANGED",
    /** Создание товара или ошибка при его создании. */
    TypeCreateItem: "TYPE_CREATE_ITEM",
    /** Обновление товара или ошибка при обновлении. */
    TypeUpdateItem: "TYPE_UPDATE_ITEM",
    /** Создание и обновление товара или ошибка в процессе. */
    TypeCreateOrUpdateItem: "TYPE_CREATE_OR_UPDATE_ITEM",
    /** Изменение остатков на складах продавца. */
    TypeStocksChanged: "TYPE_STOCKS_CHANGED",
    /** Новое отправление FBO. */
    TypeFboPostingNew: "TYPE_FBO_POSTING_NEW",
    /** Отмена отправления FBO. */
    TypeFboPostingCancelled: "TYPE_FBO_POSTING_CANCELLED",
    /** Изменение статуса отправления FBO. */
    TypeFboPostingStateChanged: "TYPE_FBO_POSTING_STATE_CHANGED",
    /** Изменение даты доставки отправления FBO. */
    TypeFboPostingDeliveryDateChanged: "TYPE_FBO_POSTING_DELIVERY_DATE_CHANGED",
    /** Изменение остатков на складах Ozon. */
    TypeFboStocksChanged: "TYPE_FBO_STOCKS_CHANGED",
    /** Новый заказ. */
    TypeOrderNew: "TYPE_ORDER_NEW",
    /** Отмена заказа. */
    TypeOrderCancelled: "TYPE_ORDER_CANCELLED",
    /** Изменение статуса заказа. */
    TypeOrderStateChanged: "TYPE_ORDER_STATE_CHANGED",
  },
  /** Значения для `OzonOrderDeliverySchema`. */
  OrderDeliverySchema: {
    /** На выбор Ozon. */
    Mix: "MIX",
    /** FBO. */
    Fbo: "FBO",
    /** FBS. */
    Fbs: "FBS",
  },
  /** Значения для `OzonOrderDeliveryType`. */
  OrderDeliveryType: {
    /** Курьером. */
    Courier: "COURIER",
    /** В пункт выдачи заказов. */
    Pvz: "PVZ",
    /** В постамат. */
    Postamat: "POSTAMAT",
  },
  /** Значения для `OzonProductAttributesVisibility`. */
  ProductAttributesVisibility: {
    /** Все товары, кроме архивных. */
    All: "ALL",
    /** Товары, которые видны покупателям. */
    Visible: "VISIBLE",
    /** Товары, которые не видны покупателям. */
    Invisible: "INVISIBLE",
    /** Товары, у которых не указано наличие. */
    EmptyStock: "EMPTY_STOCK",
    /** Товары, которые не прошли модерацию. */
    NotModerated: "NOT_MODERATED",
    /** Товары, которые прошли модерацию. */
    Moderated: "MODERATED",
    /** Товары, которые видны покупателям, но недоступны к покупке. */
    Disabled: "DISABLED",
    /** Товары, создание которых завершилось ошибкой. */
    StateFailed: "STATE_FAILED",
    /** Товары, готовые к поставке. */
    ReadyToSupply: "READY_TO_SUPPLY",
    /** Товары, которые проходят проверку валидатором на премодерации. */
    ValidationStatePending: "VALIDATION_STATE_PENDING",
    /** Товары, которые не прошли проверку валидатором на премодерации. */
    ValidationStateFail: "VALIDATION_STATE_FAIL",
    /** Товары, которые прошли проверку валидатором на премодерации. */
    ValidationStateSuccess: "VALIDATION_STATE_SUCCESS",
    /** Товары, готовые к продаже. */
    ToSupply: "TO_SUPPLY",
    /** Товары в продаже. */
    InSale: "IN_SALE",
    /** Товары, скрытые от покупателей. */
    RemovedFromSale: "REMOVED_FROM_SALE",
    /** Товары с завышенной ценой. */
    Overpriced: "OVERPRICED",
    /** Товары со слишком завышенной ценой. */
    CriticallyOverpriced: "CRITICALLY_OVERPRICED",
    /** Товары без штрихкода. */
    EmptyBarcode: "EMPTY_BARCODE",
    /** Товары со штрихкодом. */
    BarcodeExists: "BARCODE_EXISTS",
    /** Товары на карантине после изменения цены более чем на 50%. */
    Quarantine: "QUARANTINE",
    /** Товары в архиве. */
    Archived: "ARCHIVED",
    /** Товары в продаже со стоимостью выше, чем у конкурентов. */
    OverpricedWithStock: "OVERPRICED_WITH_STOCK",
    /** Товары в продаже с пустым или неполным описанием. */
    PartialApproved: "PARTIAL_APPROVED",
    /** Товары, которые система перенесла в архив автоматически. */
    AutoArchived: "AUTO_ARCHIVED",
    /** Товары, которые продавец перенёс в архив вручную. */
    ManualArchived: "MANUAL_ARCHIVED",
    /** Сезонные товары, которые система перенесла в архив автоматически. */
    SeasonalAutoArchived: "SEASONAL_AUTO_ARCHIVED",
    /** Товары с остатками на FBO, которые видят покупатели. */
    VisibleWithFboStock: "VISIBLE_WITH_FBO_STOCK",
  },
  /** Значения для `OzonProductImportPromotionOperation`. */
  ProductImportPromotionOperation: {
    /** Ничего не менять, передаётся по умолчанию. */
    Unknown: "UNKNOWN",
    /** Включить. */
    Enable: "ENABLE",
    /** Выключить. */
    Disable: "DISABLE",
  },
  /** Значения для `OzonProductImportServiceType`. */
  ProductImportServiceType: {
    IsCodeService: "IS_CODE_SERVICE",
    IsNoCodeService: "IS_NO_CODE_SERVICE",
  },
  /** Значения для `OzonProductInfoErrorLevel`. */
  ProductInfoErrorLevel: {
    /** Не определён. */
    ErrorLevelUnspecified: "ERROR_LEVEL_UNSPECIFIED",
    /** Критичная ошибка, товар нельзя продавать. */
    ErrorLevelError: "ERROR_LEVEL_ERROR",
    /** Некритичная ошибка, товар можно продавать. */
    ErrorLevelWarning: "ERROR_LEVEL_WARNING",
    /** Критичная ошибка, товар нельзя продавать. */
    ErrorLevelInternal: "ERROR_LEVEL_INTERNAL",
  },
  /** Значения для `OzonProductInfoPriceIndexColor`. */
  ProductInfoPriceIndexColor: {
    /** Не определён. */
    ColorIndexUnspecified: "COLOR_INDEX_UNSPECIFIED",
    /** Отсутствует. */
    ColorIndexWithoutIndex: "COLOR_INDEX_WITHOUT_INDEX",
    /** Супервыгодный. */
    ColorIndexSuper: "COLOR_INDEX_SUPER",
    /** Выгодный. */
    ColorIndexGreen: "COLOR_INDEX_GREEN",
    /** Умеренный. */
    ColorIndexYellow: "COLOR_INDEX_YELLOW",
    /** Невыгодный. */
    ColorIndexRed: "COLOR_INDEX_RED",
  },
  /** Значения для `OzonProductInfoPromotionType`. */
  ProductInfoPromotionType: {
    /** Не определено. */
    Unspecified: "UNSPECIFIED",
    /** Акция «Ускоренный сбор отзывов». */
    ReviewsPromo: "REVIEWS_PROMO",
  },
  /** Значения для `OzonProductInfoShipmentType`. */
  ProductInfoShipmentType: {
    /** Не указано. */
    ShipmentTypeUnspecified: "SHIPMENT_TYPE_UNSPECIFIED",
    /** Обычный товар. */
    ShipmentTypeGeneral: "SHIPMENT_TYPE_GENERAL",
    /** Коробка. */
    ShipmentTypeBox: "SHIPMENT_TYPE_BOX",
    /** Палета. */
    ShipmentTypePallet: "SHIPMENT_TYPE_PALLET",
  },
  /** Значения для `OzonProductListVisibility`. */
  ProductListVisibility: {
    /** Все товары, кроме архивных. */
    All: "ALL",
    /** Товары, которые видны покупателям. */
    Visible: "VISIBLE",
    /** Товары, которые не видны покупателям. */
    Invisible: "INVISIBLE",
    /** Товары, у которых не указано наличие. */
    EmptyStock: "EMPTY_STOCK",
    /** Товары, которые не прошли модерацию. */
    NotModerated: "NOT_MODERATED",
    /** Товары, которые прошли модерацию. */
    Moderated: "MODERATED",
    /** Товары, которые видны покупателям, но недоступны к покупке. */
    Disabled: "DISABLED",
    /** Товары, создание которых завершилось ошибкой. */
    StateFailed: "STATE_FAILED",
    /** Товары, готовые к поставке. */
    ReadyToSupply: "READY_TO_SUPPLY",
    /** Товары, которые проходят проверку валидатором на премодерации. */
    ValidationStatePending: "VALIDATION_STATE_PENDING",
    /** Товары, которые не прошли проверку валидатором на премодерации. */
    ValidationStateFail: "VALIDATION_STATE_FAIL",
    /** Товары, которые прошли проверку валидатором на премодерации. */
    ValidationStateSuccess: "VALIDATION_STATE_SUCCESS",
    /** Товары, готовые к продаже. */
    ToSupply: "TO_SUPPLY",
    /** Товары в продаже. */
    InSale: "IN_SALE",
    /** Товары, скрытые от покупателей. */
    RemovedFromSale: "REMOVED_FROM_SALE",
    /** Товары с завышенной ценой. */
    Overpriced: "OVERPRICED",
    /** Товары со слишком завышенной ценой. */
    CriticallyOverpriced: "CRITICALLY_OVERPRICED",
    /** Товары без штрихкода. */
    EmptyBarcode: "EMPTY_BARCODE",
    /** Товары со штрихкодом. */
    BarcodeExists: "BARCODE_EXISTS",
    /** Товары на карантине после изменения цены более чем на 50%. */
    Quarantine: "QUARANTINE",
    /** Товары в архиве. */
    Archived: "ARCHIVED",
    /** Товары в продаже со стоимостью выше, чем у конкурентов. */
    OverpricedWithStock: "OVERPRICED_WITH_STOCK",
    /** Товары в продаже с пустым или неполным описанием. */
    PartialApproved: "PARTIAL_APPROVED",
    /** Товары, которые система перенесла в архив автоматически. */
    AutoArchived: "AUTO_ARCHIVED",
    /** Товары, которые продавец перенёс в архив вручную. */
    ManualArchived: "MANUAL_ARCHIVED",
    /** Сезонные товары, которые система перенесла в архив автоматически. */
    SeasonalAutoArchived: "SEASONAL_AUTO_ARCHIVED",
    /** Товары с остатками на FBO, которые видят покупатели. */
    VisibleWithFboStock: "VISIBLE_WITH_FBO_STOCK",
  },
  /** Значения для `OzonProductOperationLimitType`. */
  ProductOperationLimitType: {
    /** Не указан. */
    Unspecified: "UNSPECIFIED",
    /** Поминутный лимит. */
    RateLimitPerMinute: "RATE_LIMIT_PER_MINUTE",
  },
  /** Значения для `OzonProductPlacement`. */
  ProductPlacement: {
    /** Не определено. */
    Unspecified: "UNSPECIFIED",
    /** Только на Ozon. */
    Ozon: "OZON",
    /** Товар скрыт везде. */
    None: "NONE",
    /** Только на Селект. */
    Select: "SELECT",
    /** На Селект и Ozon. */
    OzonSelect: "OZON_SELECT",
  },
  /** Значения для `OzonProductPlacementZone`. */
  ProductPlacementZone: {
    /** Не указана. */
    Unspecified: "UNSPECIFIED",
    /** Закрытая зона. */
    ClosedZone: "CLOSED_ZONE",
    /** Сортируемый товар. */
    Sort: "SORT",
    /** Крупногабаритный товар. */
    Oversize: "OVERSIZE",
    /** Ювелирные изделия. */
    Jewelry: "JEWELRY",
    /** Неизвестная зона. */
    Unresolved: "UNRESOLVED",
    /** Продукты. */
    Products: "PRODUCTS",
    /** Несортируемый товар. */
    NonSort: "NON_SORT",
    /** Товар 2–4 класса опасности. */
    DangerousGoods: "DANGEROUS_GOODS",
  },
  /** Значения для `OzonProductPriceIndexColor`. */
  ProductPriceIndexColor: {
    /** Супервыгодный. */
    Super: "SUPER",
    /** Нет индекса. */
    WithoutIndex: "WITHOUT_INDEX",
    /** Выгодный. */
    Green: "GREEN",
    /** Умеренный. */
    Yellow: "YELLOW",
    /** Невыгодный. */
    Red: "RED",
  },
  /** Значения для `OzonProductPriceToggle`. */
  ProductPriceToggle: {
    /** Выключить. */
    Disabled: "DISABLED",
    /** Ничего не менять, передаётся по умолчанию. */
    Unknown: "UNKNOWN",
    /** Включить. */
    Enabled: "ENABLED",
  },
  /** Значения для `OzonProductPriceVisibility`. */
  ProductPriceVisibility: {
    /** Все товары, кроме архивных. */
    All: "ALL",
    /** Товары, которые видны покупателям. */
    Visible: "VISIBLE",
    /** Товары, которые не видны покупателям. */
    Invisible: "INVISIBLE",
    /** Товары, у которых не указано наличие. */
    EmptyStock: "EMPTY_STOCK",
    /** Товары, которые не прошли модерацию. */
    NotModerated: "NOT_MODERATED",
    /** Товары, которые прошли модерацию. */
    Moderated: "MODERATED",
    /** Товары, которые видны покупателям, но недоступны к покупке. */
    Disabled: "DISABLED",
    /** Товары, создание которых завершилось ошибкой. */
    StateFailed: "STATE_FAILED",
    /** Товары, готовые к поставке. */
    ReadyToSupply: "READY_TO_SUPPLY",
    /** Товары, которые проходят проверку валидатором на премодерации. */
    ValidationStatePending: "VALIDATION_STATE_PENDING",
    /** Товары, которые не прошли проверку валидатором на премодерации. */
    ValidationStateFail: "VALIDATION_STATE_FAIL",
    /** Товары, которые прошли проверку валидатором на премодерации. */
    ValidationStateSuccess: "VALIDATION_STATE_SUCCESS",
    /** Товары, готовые к продаже. */
    ToSupply: "TO_SUPPLY",
    /** Товары в продаже. */
    InSale: "IN_SALE",
    /** Товары, скрытые от покупателей. */
    RemovedFromSale: "REMOVED_FROM_SALE",
    /** Товары с завышенной ценой. */
    Overpriced: "OVERPRICED",
    /** Товары со слишком завышенной ценой. */
    CriticallyOverpriced: "CRITICALLY_OVERPRICED",
    /** Товары без штрихкода. */
    EmptyBarcode: "EMPTY_BARCODE",
    /** Товары со штрихкодом. */
    BarcodeExists: "BARCODE_EXISTS",
    /** Товары на карантине после изменения цены более чем на 50%. */
    Quarantine: "QUARANTINE",
    /** Товары в архиве. */
    Archived: "ARCHIVED",
    /** Товары в продаже со стоимостью выше, чем у конкурентов. */
    OverpricedWithStock: "OVERPRICED_WITH_STOCK",
    /** Товары в продаже с пустым или неполным описанием. */
    PartialApproved: "PARTIAL_APPROVED",
    /** Товары, которые система перенесла в архив автоматически. */
    AutoArchived: "AUTO_ARCHIVED",
    /** Товары, которые продавец перенёс в архив вручную. */
    ManualArchived: "MANUAL_ARCHIVED",
    /** Сезонные товары, которые система перенесла в архив автоматически. */
    SeasonalAutoArchived: "SEASONAL_AUTO_ARCHIVED",
    /** Товары с остатками на FBO, которые видят покупатели. */
    VisibleWithFboStock: "VISIBLE_WITH_FBO_STOCK",
  },
  /** Значения для `OzonProductReportVisibility`. */
  ProductReportVisibility: {
    /** Все товары, кроме архивных. */
    All: "ALL",
    /** Товары, которые не прошли проверку валидатором на премодерации. */
    ValidationStateFail: "VALIDATION_STATE_FAIL",
    /** Товары, готовые к продаже. */
    ToSupply: "TO_SUPPLY",
    /** Товары в продаже. */
    InSale: "IN_SALE",
    /** Товары, скрытые от покупателей. */
    RemovedFromSale: "REMOVED_FROM_SALE",
    /** Товары в архиве. */
    Archived: "ARCHIVED",
    /** Товары с предупреждениями, требуют доработки. */
    PartialApproved: "PARTIAL_APPROVED",
    /** Товары, архивированные автоматически. */
    AutoArchived: "AUTO_ARCHIVED",
    /** Товары, архивированные вручную. */
    ManualArchived: "MANUAL_ARCHIVED",
    /** Товары без фото. */
    ImageAbsent: "IMAGE_ABSENT",
  },
  /** Значения для `OzonProductShowcase`. */
  ProductShowcase: {
    Unspecified: "UNSPECIFIED",
    Ozon: "OZON",
    Select: "SELECT",
  },
  /** Значения для `OzonProductStockShipmentType`. */
  ProductStockShipmentType: {
    /** Обычный товар. */
    ShipmentTypeGeneral: "SHIPMENT_TYPE_GENERAL",
    /** Коробка. */
    ShipmentTypeBox: "SHIPMENT_TYPE_BOX",
    /** Палета. */
    ShipmentTypePallet: "SHIPMENT_TYPE_PALLET",
  },
  /** Значения для `OzonProductStockVisibility`. */
  ProductStockVisibility: {
    /** Все товары, кроме архивных. */
    All: "ALL",
    /** Товары, которые видны покупателям. */
    Visible: "VISIBLE",
    /** Товары, которые не видны покупателям. */
    Invisible: "INVISIBLE",
    /** Товары, у которых не указано наличие. */
    EmptyStock: "EMPTY_STOCK",
    /** Товары, которые не прошли модерацию. */
    NotModerated: "NOT_MODERATED",
    /** Товары, которые прошли модерацию. */
    Moderated: "MODERATED",
    /** Товары, которые видны покупателям, но недоступны к покупке. */
    Disabled: "DISABLED",
    /** Товары, создание которых завершилось ошибкой. */
    StateFailed: "STATE_FAILED",
    /** Товары, готовые к поставке. */
    ReadyToSupply: "READY_TO_SUPPLY",
    /** Товары, которые проходят проверку валидатором на премодерации. */
    ValidationStatePending: "VALIDATION_STATE_PENDING",
    /** Товары, которые не прошли проверку валидатором на премодерации. */
    ValidationStateFail: "VALIDATION_STATE_FAIL",
    /** Товары, которые прошли проверку валидатором на премодерации. */
    ValidationStateSuccess: "VALIDATION_STATE_SUCCESS",
    /** Товары, готовые к продаже. */
    ToSupply: "TO_SUPPLY",
    /** Товары в продаже. */
    InSale: "IN_SALE",
    /** Товары, скрытые от покупателей. */
    RemovedFromSale: "REMOVED_FROM_SALE",
    /** Товары с завышенной ценой. */
    Overpriced: "OVERPRICED",
    /** Товары со слишком завышенной ценой. */
    CriticallyOverpriced: "CRITICALLY_OVERPRICED",
    /** Товары без штрихкода. */
    EmptyBarcode: "EMPTY_BARCODE",
    /** Товары со штрихкодом. */
    BarcodeExists: "BARCODE_EXISTS",
    /** Товары на карантине после изменения цены более чем на 50%. */
    Quarantine: "QUARANTINE",
    /** Товары в архиве. */
    Archived: "ARCHIVED",
    /** Товары в продаже со стоимостью выше, чем у конкурентов. */
    OverpricedWithStock: "OVERPRICED_WITH_STOCK",
    /** Товары в продаже с пустым или неполным описанием. */
    PartialApproved: "PARTIAL_APPROVED",
    /** Товары, которые система перенесла в архив автоматически. */
    AutoArchived: "AUTO_ARCHIVED",
    /** Товары, которые продавец перенёс в архив вручную. */
    ManualArchived: "MANUAL_ARCHIVED",
    /** Сезонные товары, которые система перенесла в архив автоматически. */
    SeasonalAutoArchived: "SEASONAL_AUTO_ARCHIVED",
    /** Товары с остатками на FBO, которые видят покупатели. */
    VisibleWithFboStock: "VISIBLE_WITH_FBO_STOCK",
    /** Заблокированные товары. */
    Banned: "BANNED",
  },
  /** Значения для `OzonQuantProductVisibility`. */
  QuantProductVisibility: {
    /** Все товары, кроме архивных. */
    All: "ALL",
    /** Товары, которые видны покупателям. */
    Visible: "VISIBLE",
    /** Товары, которые не видны покупателям. */
    Invisible: "INVISIBLE",
    /** Товары, которых нет в наличии. */
    EmptyStock: "EMPTY_STOCK",
    /** Товары, которые не прошли модерацию. */
    NotModerated: "NOT_MODERATED",
    /** Товары, которые прошли модерацию. */
    Moderated: "MODERATED",
    /** Товары, которые видны покупателям, но недоступны к покупке. */
    Disabled: "DISABLED",
    /** Товары, создание которых завершилось ошибкой. */
    StateFailed: "STATE_FAILED",
    /** Товары, готовые к поставке. */
    ReadyToSupply: "READY_TO_SUPPLY",
    /** Товары, которые проходят проверку валидатором на премодерации. */
    ValidationStatePending: "VALIDATION_STATE_PENDING",
    /** Товары, которые не прошли проверку валидатором на премодерации. */
    ValidationStateFail: "VALIDATION_STATE_FAIL",
    /** Товары, которые прошли проверку валидатором на премодерации. */
    ValidationStateSuccess: "VALIDATION_STATE_SUCCESS",
    /** Товары, готовые к продаже. */
    ToSupply: "TO_SUPPLY",
    /** Товары в продаже. */
    InSale: "IN_SALE",
    /** Товары, скрытые от покупателей. */
    RemovedFromSale: "REMOVED_FROM_SALE",
    /** Превышение цены. */
    Overpriced: "OVERPRICED",
    /** Критическое превышение цены. */
    CriticallyOverpriced: "CRITICALLY_OVERPRICED",
    /** Пустой штрихкод. */
    EmptyBarcode: "EMPTY_BARCODE",
    /** Штрихкод указан. */
    BarcodeExists: "BARCODE_EXISTS",
    /** Товар в карантине после изменения цены на 50% и больше. */
    Quarantine: "QUARANTINE",
    /** Товары в архиве. */
    Archived: "ARCHIVED",
    /** Товары в продаже, цена которых выше, чем у конкурентов. */
    OverpricedWithStock: "OVERPRICED_WITH_STOCK",
    /** Товары в продаже, у которых пустое или неполное описание. */
    PartialApproved: "PARTIAL_APPROVED",
  },
  /** Значения для `OzonQuestionAnswerPublicationStatus`. */
  QuestionAnswerPublicationStatus: {
    /** Опубликован. */
    Published: "PUBLISHED",
    /** Ожидает модерации. */
    AwaitingModeration: "AWAITING_MODERATION",
    /** Модерация не пройдена. */
    ModerationFailed: "MODERATION_FAILED",
    /** Дубль. */
    Duplicate: "DUPLICATE",
  },
  /** Значения для `OzonQuestionStatus`. */
  QuestionStatus: {
    All: "ALL",
    New: "NEW",
    Processed: "PROCESSED",
    Viewed: "VIEWED",
    Unprocessed: "UNPROCESSED",
  },
  /** Значения для `OzonReceiptOperationTypeV1`. */
  ReceiptOperationType: {
    /** Не определён. */
    Unspecified: "UNSPECIFIED",
    /** Товарная операция. */
    Commodity: "COMMODITY",
  },
  /** Значения для `OzonReceiptTypeV1`. */
  ReceiptType: {
    /** Не определён. */
    Unspecified: "UNSPECIFIED",
    /** Чек реализации. */
    Incoming: "INCOMING",
    /** Чек возврата. */
    Refund: "REFUND",
  },
  /** Значения для `OzonReturnPointType`. */
  ReturnPointType: {
    /** Не определён. */
    Unspecified: "UNSPECIFIED",
    /** Пункт выдачи заказов. */
    Pvz: "PVZ",
    /** Пункт приёма заказов. */
    Ppz: "PPZ",
    /** Сортировочный центр. */
    Sc: "SC",
  },
  /** Значения для `OzonReturnPointWorkingDay`. */
  ReturnPointWorkingDay: {
    /** Не определён. */
    Unspecified: "UNSPECIFIED",
    /** Понедельник. */
    Monday: "MONDAY",
    /** Вторник. */
    Tuesday: "TUESDAY",
    /** Среда. */
    Wednesday: "WEDNESDAY",
    /** Четверг. */
    Thursday: "THURSDAY",
    /** Пятница. */
    Friday: "FRIDAY",
    /** Суббота. */
    Saturday: "SATURDAY",
    /** Воскресенье. */
    Sunday: "SUNDAY",
  },
  /** Значения для `OzonReturnReportStatus`. */
  ReturnReportStatus: {
    /** Открыт спор с покупателем. */
    DisputeOpened: "DisputeOpened",
    /** На согласовании у продавца. */
    OnSellerApproval: "OnSellerApproval",
    /** В пункте выдачи. */
    ArrivedAtReturnPlace: "ArrivedAtReturnPlace",
    /** На уточнении у продавца. */
    OnSellerClarification: "OnSellerClarification",
    /** На уточнении у продавца после частичной компенсации. */
    OnSellerClarificationAfterPartialCompensation:
      "OnSellerClarificationAfterPartialCompensation",
    /** Предложена частичная компенсация. */
    OfferedPartialCompensation: "OfferedPartialCompensation",
    /** Одобрен возврат денег. */
    ReturnMoneyApproved: "ReturnMoneyApproved",
    /** Вернули часть денег. */
    PartialCompensationReturned: "PartialCompensationReturned",
    /** Возврат отклонён, спор не открыт. */
    CancelledDisputeNotOpen: "CancelledDisputeNotOpen",
    /** Заявка отклонена. */
    Rejected: "Rejected",
    /** Заявка отклонена Ozon. */
    CrmRejected: "CrmRejected",
    /** Заявка отменена. */
    Cancelled: "Cancelled",
    /** Заявка одобрена продавцом. */
    Approved: "Approved",
    /** Заявка одобрена Ozon. */
    ApprovedByOzon: "ApprovedByOzon",
    /** Продавец получил возврат. */
    ReceivedBySeller: "ReceivedBySeller",
    /** Возврат на пути к продавцу. */
    MovingToSeller: "MovingToSeller",
    /** Продавец получил компенсацию. */
    ReturnCompensated: "ReturnCompensated",
    /** Курьер везёт возврат продавцу. */
    ReturningToSellerByCourier: "ReturningToSellerByCourier",
    /** На утилизации. */
    Utilizing: "Utilizing",
    /** Утилизирован. */
    Utilized: "Utilized",
    /** Покупателю вернули всю сумму. */
    MoneyReturned: "MoneyReturned",
    /** Одобрен частичный возврат денег. */
    PartialCompensationInProcess: "PartialCompensationInProcess",
    /** Продавец открыл спор. */
    DisputeYouOpened: "DisputeYouOpened",
    /** Отказано в компенсации. */
    CompensationRejected: "CompensationRejected",
    /** Обращение в поддержку отправлено. */
    DisputeOpening: "DisputeOpening",
    /** Ожидает вашего решения по компенсации. */
    CompensationOffered: "CompensationOffered",
    /** Ожидает компенсации. */
    WaitingCompensation: "WaitingCompensation",
    /** Ошибка при отправке обращения в поддержку. */
    SendingError: "SendingError",
    /** Истёк срок решения. */
    CompensationRejectedBySla: "CompensationRejectedBySla",
    /** Продавец отказался от компенсации. */
    CompensationRejectedBySeller: "CompensationRejectedBySeller",
    /** Едет на склад Ozon. */
    MovingToOzon: "MovingToOzon",
    /** На складе Ozon. */
    ReturnedToOzon: "ReturnedToOzon",
    /** Быстрый возврат. */
    MoneyReturnedBySystem: "MoneyReturnedBySystem",
    /** Ожидает отправки. */
    WaitingShipment: "WaitingShipment",
  },
  /** Значения для `SearchQueriesSortDirection`. */
  SearchQueriesSortDirection: {
    /** По возрастанию. */
    Asc: "ASC",
    /** По убыванию. */
    Desc: "DESC",
  },
  /** Значения для `SearchQueriesTextSortBy`. */
  SearchQueriesTextSortBy: {
    /** Популярность запроса. */
    ClientCount: "CLIENT_COUNT",
    /** Добавления в корзину. */
    AddToCart: "ADD_TO_CART",
    /** Конверсия в корзине. */
    ConversionToCart: "CONVERSION_TO_CART",
    /** Средняя цена. */
    AvgPrice: "AVG_PRICE",
  },
  /** Значения для `OzonSelectPermission`. */
  SelectPermission: {
    /** Не определено. */
    Unspecified: "UNSPECIFIED",
    /** Товар нельзя продавать. */
    Restricted: "RESTRICTED",
    /** Товар можно продавать. */
    Allowed: "ALLOWED",
  },
  /** Значения для `OzonSellerActionCurrency`. */
  SellerActionCurrency: {
    /** Российский рубль. */
    Rub: "RUB",
    /** Белорусский рубль. */
    Byn: "BYN",
    /** Тенге. */
    Kzt: "KZT",
    /** Евро. */
    Eur: "EUR",
    /** Доллар США. */
    Usd: "USD",
    /** Юань. */
    Cny: "CNY",
  },
  /** Значения для `OzonSellerActionDiscountType`. */
  SellerActionDiscountType: {
    /** Скидка в процентах. */
    Percent: "PERCENT",
    /** Скидка в валюте. */
    Currency: "CURRENCY",
  },
  /** Значения для `OzonSellerActionQuantType`. */
  SellerActionQuantType: {
    /** Не определён. */
    Unspecified: "UNSPECIFIED",
    /** Коробка. */
    Box: "BOX",
    /** Палета. */
    Pallet: "PALLET",
    /** Товар. */
    General: "GENERAL",
  },
  /** Значения для `OzonSellerActionStatus`. */
  SellerActionStatus: {
    /** Активна. */
    Active: "ACTIVE",
    /** Завершена. */
    Ended: "ENDED",
    /** Запланирована. */
    Planned: "PLANNED",
    /** Приостановлена. */
    Paused: "PAUSED",
  },
  /** Значения для `OzonSellerActionType`. */
  SellerActionType: {
    /** Скидка. */
    Discount: "DISCOUNT",
    /** Скидка по промокоду. */
    VoucherDiscount: "VOUCHER_DISCOUNT",
    /** Скидка от суммы заказа. */
    DiscountWithCondition: "DISCOUNT_WITH_CONDITION",
    /** Беспроцентная рассрочка. */
    Installment: "INSTALLMENT",
    /** Бонусы продавца. */
    IndividualDiscountByProducts: "INDIVIDUAL_DISCOUNT_BY_PRODUCTS",
    /** Повышенная скидка с картой Ozon Банка. */
    OzonAccountDiscount: "OZON_ACCOUNT_DISCOUNT",
    /** Многоуровневая скидка от суммы. */
    MultiLevelDiscountOnAmount: "MULTI_LEVEL_DISCOUNT_ON_AMOUNT",
  },
  /** Значения для `OzonSellerRatingStatus`. */
  SellerRatingStatus: {
    /** Не определён. */
    Unknown: "UNKNOWN",
    /** Хороший. */
    Ok: "OK",
    /** Показатели требуют внимания. */
    Warning: "WARNING",
    /** Критичный. */
    Critical: "CRITICAL",
  },
  /** Значения для `OzonSellerRatingType`. */
  SellerRatingType: {
    /** Не определён. */
    Unknown: "UNKNOWN",
    /** Индекс. */
    Index: "INDEX",
    /** Процент. */
    Percent: "PERCENT",
    /** Время. */
    Time: "TIME",
    /** Коэффициент. */
    Ratio: "RATIO",
    /** Оценка. */
    ReviewScore: "REVIEW_SCORE",
    /** Счёт. */
    Count: "COUNT",
  },
  /** Значения для `OzonStairwayDiscountStatus`. */
  StairwayDiscountStatus: {
    /** Изменение скидки применено к товару. */
    Success: "SUCCESS",
    /** Ошибка при изменении скидки. Вызовите метод [/v1/product/stairway-discount/by-quantity/set](#operation/ProductAPI_SetProductStairwayDiscountByQuantity) ещё раз. */
    Error: "ERROR",
    /** Изменение в процессе. */
    InProcess: "IN_PROCESS",
  },
  /** Значения для `OzonSubscriptionType`. */
  SubscriptionType: {
    /** Нет подписки. */
    Unspecified: "UNSPECIFIED",
    /** Неизвестный. */
    Unknown: "UNKNOWN",
    /** Premium. */
    Premium: "PREMIUM",
    /** Premium Lite. */
    PremiumLite: "PREMIUM_LITE",
    /** Premium Plus. */
    PremiumPlus: "PREMIUM_PLUS",
    /** Premium Pro. */
    PremiumPro: "PREMIUM_PRO",
  },
  /** Значения для `OzonSupplyCancelError`. */
  SupplyCancelError: {
    InvalidSupplyState: "INVALID_SUPPLY_STATE",
    SupplyDoesNotBelongToCompany: "SUPPLY_DOES_NOT_BELONG_TO_COMPANY",
    OtherAsynchronousOperationInProgress:
      "OTHER_ASYNCHRONOUS_OPERATION_IN_PROGRESS",
    SupplyDoesNotBelongToContractor: "SUPPLY_DOES_NOT_BELONG_TO_CONTRACTOR",
    SupplyDoesNotBelongToOrder: "SUPPLY_DOES_NOT_BELONG_TO_ORDER",
    SupplyBelongsToVirtualOrder: "SUPPLY_BELONGS_TO_VIRTUAL_ORDER",
  },
  /** Значения для `OzonSupplyCancellationForbiddenReason`. */
  SupplyCancellationForbiddenReason: {
    Unspecified: "UNSPECIFIED",
    Undefined: "UNDEFINED",
    InvalidSupplyState: "INVALID_SUPPLY_STATE",
    SupplyIsVirtual: "SUPPLY_IS_VIRTUAL",
    SupplyHasActiveUtd: "SUPPLY_HAS_ACTIVE_UTD",
    SupplyDoesNotBelongToCompany: "SUPPLY_DOES_NOT_BELONG_TO_COMPANY",
    PickupSupplyIsLockedDown: "PICKUP_SUPPLY_IS_LOCKED_DOWN",
  },
  /** Значения для `OzonSupplyClusterType`. */
  SupplyClusterType: {
    /** Кластер в России. */
    ClusterTypeOzon: "CLUSTER_TYPE_OZON",
    /** Кластер в СНГ. */
    ClusterTypeCis: "CLUSTER_TYPE_CIS",
  },
  /** Значения для `OzonSupplyClusterWarehouseType`. */
  SupplyClusterWarehouseType: {
    /** Даркстор. */
    ExpressDarkStore: "EXPRESS_DARK_STORE",
    /** Фулфилмент. */
    FullFillment: "FULL_FILLMENT",
    /** Кросс-докинг. */
    CrossDock: "CROSS_DOCK",
    /** Сортировочный центр. */
    SortingCenter: "SORTING_CENTER",
    /** Распределительный центр. */
    DistributionCenter: "DISTRIBUTION_CENTER",
    /** Пункт приёма заказов. */
    OrdersReceivingPoint: "ORDERS_RECEIVING_POINT",
  },
  /** Значения для `OzonSupplyContentEditForbiddenReason`. */
  SupplyContentEditForbiddenReason: {
    Unspecified: "UNSPECIFIED",
    Undefined: "UNDEFINED",
    SupplyIsVirtual: "SUPPLY_IS_VIRTUAL",
    SupplyDoesNotBelongToCompany: "SUPPLY_DOES_NOT_BELONG_TO_COMPANY",
    IncorrectSupplyState: "INCORRECT_SUPPLY_STATE",
    Deadline: "DEADLINE",
    UtdIsUploaded: "UTD_IS_UPLOADED",
    StorageWarehouseIsNotWms: "STORAGE_WAREHOUSE_IS_NOT_WMS",
    ContractIsNotValidForHandlingOrders:
      "CONTRACT_IS_NOT_VALID_FOR_HANDLING_ORDERS",
  },
  /** Значения для `OzonSupplyContentEditingError`. */
  SupplyContentEditingError: {
    Unspecified: "UNSPECIFIED",
    Unknown: "UNKNOWN",
    SupplyIsVirtual: "SUPPLY_IS_VIRTUAL",
    SupplyDoesNotBelongToCompany: "SUPPLY_DOES_NOT_BELONG_TO_COMPANY",
    IncorrectSupplyState: "INCORRECT_SUPPLY_STATE",
    Deadline: "DEADLINE",
    UtdIsUploaded: "UTD_IS_UPLOADED",
    StorageWarehouseIsNotWms: "STORAGE_WAREHOUSE_IS_NOT_WMS",
    ContractIsNotValidForHandlingOrders:
      "CONTRACT_IS_NOT_VALID_FOR_HANDLING_ORDERS",
    AssortmentRejectionReasonCorruptedAssortment:
      "ASSORTMENT_REJECTION_REASON_CORRUPTED_ASSORTMENT",
    AssortmentRejectionReasonStorageBelarusSkuHasNoAnyFeacn:
      "ASSORTMENT_REJECTION_REASON_STORAGE_BELARUS_SKU_HAS_NO_ANY_FEACN",
    AssortmentRejectionReasonStorageBelarusSkuHasNoSellerFeacn:
      "ASSORTMENT_REJECTION_REASON_STORAGE_BELARUS_SKU_HAS_NO_SELLER_FEACN",
    AssortmentRejectionReasonTraceableSkuHasNoGtinBarcode:
      "ASSORTMENT_REJECTION_REASON_TRACEABLE_SKU_HAS_NO_GTIN_BARCODE",
    AssortmentRejectionReasonTraceableSkuHasNoMeasurementUnitQuantity:
      "ASSORTMENT_REJECTION_REASON_TRACEABLE_SKU_HAS_NO_MEASUREMENT_UNIT_QUANTITY",
  },
  /** Значения для `OzonSupplyContentRejectionReason`. */
  SupplyContentRejectionReason: {
    Unspecified: "UNSPECIFIED",
    EmptyBarcode: "EMPTY_BARCODE",
    Unknown: "UNKNOWN",
    OutOfAssortment: "OUT_OF_ASSORTMENT",
    Invalid: "INVALID",
    IncompatibleWarehouse: "INCOMPATIBLE_WAREHOUSE",
    EmptyPsAttribute: "EMPTY_PS_ATTRIBUTE",
    Multiplicity: "MULTIPLICITY",
    NoPrice: "NO_PRICE",
    InvalidItemCountMax: "INVALID_ITEM_COUNT_MAX",
    InvalidItemCountZero: "INVALID_ITEM_COUNT_ZERO",
    SkuRejectedByAcceptanceRestrictions:
      "SKU_REJECTED_BY_ACCEPTANCE_RESTRICTIONS",
    SkuWithEttnRequiredTagNotAllowed: "SKU_WITH_ETTN_REQUIRED_TAG_NOT_ALLOWED",
    SkuWithoutEttnRequiredTagNotAllowed:
      "SKU_WITHOUT_ETTN_REQUIRED_TAG_NOT_ALLOWED",
    SkuWithTraceableTagNotAllowed: "SKU_WITH_TRACEABLE_TAG_NOT_ALLOWED",
    SkuIsRestricted: "SKU_IS_RESTRICTED",
    EmptyCluster: "EMPTY_CLUSTER",
    SkuWithUtdRequiredTagNotAllowed: "SKU_WITH_UTD_REQUIRED_TAG_NOT_ALLOWED",
    IncompatibleShipmentType: "INCOMPATIBLE_SHIPMENT_TYPE",
    EconomQuantIsNotFrozen: "ECONOM_QUANT_IS_NOT_FROZEN",
    QuantityNotMultipleByQuant: "QUANTITY_NOT_MULTIPLE_BY_QUANT",
    InvalidQuantValue: "INVALID_QUANT_VALUE",
    JewelryForbiddenForEconom: "JEWELRY_FORBIDDEN_FOR_ECONOM",
    NonUniqueEconomItemInRequest: "NON_UNIQUE_ECONOM_ITEM_IN_REQUEST",
    NonUniqueEconomItemInDestinationBundle:
      "NON_UNIQUE_ECONOM_ITEM_IN_DESTINATION_BUNDLE",
  },
  /** Значения для `OzonSupplyContentRestrictionReason`. */
  SupplyContentRestrictionReason: {
    Unknown: "UNKNOWN",
    SkuHasNoSales: "SKU_HAS_NO_SALES",
    SkuHasQuantityLimit: "SKU_HAS_QUANTITY_LIMIT",
  },
  /** Значения для `OzonSupplyContentUpdateError`. */
  SupplyContentUpdateError: {
    SupplyIsVirtual: "SUPPLY_IS_VIRTUAL",
    IncorrectSupplyState: "INCORRECT_SUPPLY_STATE",
    Deadline: "DEADLINE",
    UtdIsUploaded: "UTD_IS_UPLOADED",
    StorageWarehouseIsNotWms: "STORAGE_WAREHOUSE_IS_NOT_WMS",
    ContractIsNotValidForHandlingOrders:
      "CONTRACT_IS_NOT_VALID_FOR_HANDLING_ORDERS",
    MinimumVolumeInLitresInvalid: "MINIMUM_VOLUME_IN_LITRES_INVALID",
    OrderDoesNotBelongToContractor: "ORDER_DOES_NOT_BELONG_TO_CONTRACTOR",
    InvalidDraftBundleId: "INVALID_DRAFT_BUNDLE_ID",
    SomeServiceError: "SOME_SERVICE_ERROR",
    HasUtd: "HAS_UTD",
    OrderSkuLimit: "ORDER_SKU_LIMIT",
    SameSku: "SAME_SKU",
    SupplyLocked: "SUPPLY_LOCKED",
    InboundNoCapacity: "INBOUND_NO_CAPACITY",
    InboundLock: "INBOUND_LOCK",
    SupplyContentNotValid: "SUPPLY_CONTENT_NOT_VALID",
    SupplyBelongToAnotherContractor: "SUPPLY_BELONG_TO_ANOTHER_CONTRACTOR",
    SupplyBelongToAnotherCompany: "SUPPLY_BELONG_TO_ANOTHER_COMPANY",
    IncorrectSupplySource: "INCORRECT_SUPPLY_SOURCE",
    IncorrectStorageWarehouse: "INCORRECT_STORAGE_WAREHOUSE",
    InactiveContract: "INACTIVE_CONTRACT",
    QuantityOutOfRangeBottom: "QUANTITY_OUT_OF_RANGE_BOTTOM",
    QuantityOutOfRangeUpper: "QUANTITY_OUT_OF_RANGE_UPPER",
    EmptyContent: "EMPTY_CONTENT",
    NoSupplyProductBundleId: "NO_SUPPLY_PRODUCT_BUNDLE_ID",
    InvalidVolume: "INVALID_VOLUME",
    OrderLocked: "ORDER_LOCKED",
    ContractIsNotFound: "CONTRACT_IS_NOT_FOUND",
    CompanyDoesNotBelongsToContractor: "COMPANY_DOES_NOT_BELONGS_TO_CONTRACTOR",
    OrderIsNotFound: "ORDER_IS_NOT_FOUND",
    OrderDoesNotBelongsToCompany: "ORDER_DOES_NOT_BELONGS_TO_COMPANY",
    SupplyIsNotFound: "SUPPLY_IS_NOT_FOUND",
    SupplyDoesNotBelongsToOrder: "SUPPLY_DOES_NOT_BELONGS_TO_ORDER",
  },
  /** Значения для `OzonSupplyContentUpdateStatus`. */
  SupplyContentUpdateStatus: {
    InProgress: "IN_PROGRESS",
    Success: "SUCCESS",
    Error: "ERROR",
  },
  /** Значения для `OzonSupplyDraftDeletionSkuMode`. */
  SupplyDraftDeletionSkuMode: {
    /** Система удалит все единицы SKU, если хотя бы одна единица этого SKU не прошла проверку. */
    Full: "FULL",
    /** Система удалит только те единицы SKU, которые не прошли проверку. */
    Partial: "PARTIAL",
  },
  /** Значения для `OzonSupplyDraftDeliveryType`. */
  SupplyDraftDeliveryType: {
    Dropoff: "DROPOFF",
    Pickup: "PICKUP",
  },
  /** Значения для `OzonSupplyDraftDropOffWarehouseType`. */
  SupplyDraftDropOffWarehouseType: {
    /** Фулфилмент. */
    FullFillment: "FULL_FILLMENT",
    /** Кросс-докинг. */
    CrossDock: "CROSS_DOCK",
    /** Сортировочный центр. */
    SortingCenter: "SORTING_CENTER",
    OrdersReceivingPoint: "ORDERS_RECEIVING_POINT",
    /** Пункт выдачи заказов. */
    DeliveryPoint: "DELIVERY_POINT",
  },
  /** Значения для `OzonSupplyDraftErrorMessage`. */
  SupplyDraftErrorMessage: {
    /** Ошибка не определена. */
    Unspecified: "UNSPECIFIED",
    /** Неизвестная ошибка. */
    Undefined: "UNDEFINED",
    /** Передан пустой список `items`. */
    EmptyItemsList: "EMPTY_ITEMS_LIST",
    /** Превышено количество `sku`. */
    ItemsCountMoreThanMax: "ITEMS_COUNT_MORE_THAN_MAX",
    /** Кластер с таким `id` не существует. */
    UnknownClusterIds: "UNKNOWN_CLUSTER_IDS",
    /** Ошибки валидации товарного состава. */
    ItemsValidation: "ITEMS_VALIDATION",
    /** Точка отгрузки с таким `id` не существует. */
    DropOffPointDoesNotExist: "DROP_OFF_POINT_DOES_NOT_EXIST",
    /** Нет доступных таймслотов на точке отгрузки. */
    DropOffPointHasNoTimeslots: "DROP_OFF_POINT_HAS_NO_TIMESLOTS",
    /** Объём поставляемых товаров слишком большой для этой точки. */
    TotalVolumeInLitresInvalid: "TOTAL_VOLUME_IN_LITRES_INVALID",
    /** Требуется распределение SKU, но оно невозможно. */
    SkuDistributionRequiredButNotPossible:
      "SKU_DISTRIBUTION_REQUIRED_BUT_NOT_POSSIBLE",
    /** Поставка кросс-докингом через пункт выдачи заказов недоступна для продавца. */
    CrossDockInDeliveryPointDisabledForSeller:
      "CROSS_DOCK_IN_DELIVERY_POINT_DISABLED_FOR_SELLER",
    /** В запросе есть дубликаты SKU. */
    DuplicateSkusInRequest: "DUPLICATE_SKUS_IN_REQUEST",
    /** Не удалось создать черновик. */
    CanNotCreateDraft: "CAN_NOT_CREATE_DRAFT",
    /** Некорректные итоговые данные в черновике. */
    DraftTotalsInvalidError: "DRAFT_TOTALS_INVALID_ERROR",
    /** Не удалось начать расчёт. */
    CanNotStartCalculation: "CAN_NOT_START_CALCULATION",
    /** Самовывоз недоступен. */
    PickupIsNotAvailable: "PICKUP_IS_NOT_AVAILABLE",
    /** Точка отгрузки несовместима с самовывозом. */
    DropOffNotCompatibleWithPickup: "DROP_OFF_NOT_COMPATIBLE_WITH_PICKUP",
  },
  /** Значения для `OzonSupplyDraftErrorReason`. */
  SupplyDraftErrorReason: {
    Unspecified: "UNSPECIFIED",
    Undefined: "UNDEFINED",
    OrderCreationNotAvailableForSeller:
      "ORDER_CREATION_NOT_AVAILABLE_FOR_SELLER",
    AllItemsRejected: "ALL_ITEMS_REJECTED",
    NotAvailableClusters: "NOT_AVAILABLE_CLUSTERS",
    AllItemsCountInvalid: "ALL_ITEMS_COUNT_INVALID",
    AllItemsVolumeInvalid: "ALL_ITEMS_VOLUME_INVALID",
    AllBundlesEmpty: "ALL_BUNDLES_EMPTY",
    HasEmptyBundle: "HAS_EMPTY_BUNDLE",
    DisabledForSeller: "DISABLED_FOR_SELLER",
    NoActiveSellerWarehouse: "NO_ACTIVE_SELLER_WAREHOUSE",
    InvalidSellerWarehouse: "INVALID_SELLER_WAREHOUSE",
  },
  /** Значения для `OzonSupplyDraftInfoErrorReason`. */
  SupplyDraftInfoErrorReason: {
    Unspecified: "UNSPECIFIED",
    Undefined: "UNDEFINED",
    OrderCreationNotAvailableForSeller:
      "ORDER_CREATION_NOT_AVAILABLE_FOR_SELLER",
    AllItemsRejected: "ALL_ITEMS_REJECTED",
    NotAvailableClusters: "NOT_AVAILABLE_CLUSTERS",
    AllItemsCountInvalid: "ALL_ITEMS_COUNT_INVALID",
    AllItemsVolumeInvalid: "ALL_ITEMS_VOLUME_INVALID",
    AllBundlesEmpty: "ALL_BUNDLES_EMPTY",
    HasEmptyBundle: "HAS_EMPTY_BUNDLE",
    DisabledForSeller: "DISABLED_FOR_SELLER",
    NoActiveSellerWarehouse: "NO_ACTIVE_SELLER_WAREHOUSE",
    InvalidSellerWarehouse: "INVALID_SELLER_WAREHOUSE",
    MinimumVolumeInLitresInvalid: "MINIMUM_VOLUME_IN_LITRES_INVALID",
  },
  /** Значения для `OzonSupplyDraftInfoStatus`. */
  SupplyDraftInfoStatus: {
    /** Не определён. */
    Unspecified: "UNSPECIFIED",
    InProgress: "IN_PROGRESS",
    Success: "SUCCESS",
    /** Не удалось создать. */
    Failed: "FAILED",
  },
  /** Значения для `OzonSupplyDraftRejectedItemReason`. */
  SupplyDraftRejectedItemReason: {
    Unspecified: "UNSPECIFIED",
    EmptyBarcode: "EMPTY_BARCODE",
    Undefined: "UNDEFINED",
    OutOfAssortment: "OUT_OF_ASSORTMENT",
    Invalid: "INVALID",
    IncompatibleWarehouse: "INCOMPATIBLE_WAREHOUSE",
    EmptyPsAttribute: "EMPTY_PS_ATTRIBUTE",
    Multiplicity: "MULTIPLICITY",
    NoPrice: "NO_PRICE",
    InvalidItemCountMax: "INVALID_ITEM_COUNT_MAX",
    InvalidItemCountZero: "INVALID_ITEM_COUNT_ZERO",
    SkuRejectedByAcceptanceRestrictions:
      "SKU_REJECTED_BY_ACCEPTANCE_RESTRICTIONS",
    SkuWithEttnRequiredTagNotAllowed: "SKU_WITH_ETTN_REQUIRED_TAG_NOT_ALLOWED",
    SkuWithoutEttnRequiredTagNotAllowed:
      "SKU_WITHOUT_ETTN_REQUIRED_TAG_NOT_ALLOWED",
    SkuWithTraceableTagNotAllowed: "SKU_WITH_TRACEABLE_TAG_NOT_ALLOWED",
    SkuIsRestricted: "SKU_IS_RESTRICTED",
    EmptyCluster: "EMPTY_CLUSTER",
    SkuWithUtdRequiredTagNotAllowed: "SKU_WITH_UTD_REQUIRED_TAG_NOT_ALLOWED",
    CorruptedAssortment: "CORRUPTED_ASSORTMENT",
    StorageBelarusSkuHasNoAnyFeacn: "STORAGE_BELARUS_SKU_HAS_NO_ANY_FEACN",
    StorageBelarusSkuHasNoSellerFeacn:
      "STORAGE_BELARUS_SKU_HAS_NO_SELLER_FEACN",
    TraceableSkuHasNoGtinBarcode: "TRACEABLE_SKU_HAS_NO_GTIN_BARCODE",
    TraceableSkuHasNoMeasurementUnitQuantity:
      "TRACEABLE_SKU_HAS_NO_MEASUREMENT_UNIT_QUANTITY",
    SkuHasInvalidHsCode: "SKU_HAS_INVALID_HS_CODE",
    SkuHasStorageCountryRestrictions: "SKU_HAS_STORAGE_COUNTRY_RESTRICTIONS",
  },
  /** Значения для `OzonSupplyDraftTimeslotErrorReason`. */
  SupplyDraftTimeslotErrorReason: {
    /** Не определена. */
    Unspecified: "UNSPECIFIED",
    /** Неизвестная ошибка. */
    Undefined: "UNDEFINED",
    /** Переданы не все кластеры из расчёта. */
    InvalidClustersCount: "INVALID_CLUSTERS_COUNT",
    /** Превышен период; - `INVALID_REQUESTED_CLUSTER_IDS` — переданы кластеры, которых нет в расчёте. */
    RequestedPeriodMoreThanMax: "REQUESTED_PERIOD_MORE_THAN_MAX",
  },
  /** Значения для `OzonSupplyDraftType`. */
  SupplyDraftType: {
    /** Кросс-докинг. */
    Crossdock: "CROSSDOCK",
    /** Прямая. */
    Direct: "DIRECT",
    /** Для нескольких кластеров. */
    MultiCluster: "MULTI_CLUSTER",
  },
  /** Значения для `OzonSupplyDraftWarehouseAvailabilityState`. */
  SupplyDraftWarehouseAvailabilityState: {
    /** Не определён. */
    Unspecified: "UNSPECIFIED",
    /** Доступен. */
    FullAvailable: "FULL_AVAILABLE",
    /** Частично доступен. */
    PartialAvailable: "PARTIAL_AVAILABLE",
    /** Недоступен. */
    NotAvailable: "NOT_AVAILABLE",
  },
  /** Значения для `OzonSupplyDraftWarehouseInvalidReason`. */
  SupplyDraftWarehouseInvalidReason: {
    /** Не определена. */
    Unspecified: "UNSPECIFIED",
    /** Нет причины. */
    NoReason: "NO_REASON",
    /** Склад не может принять часть товаров. */
    PartialMatrixAvailable: "PARTIAL_MATRIX_AVAILABLE",
    /** Склад не может принять все товары. */
    NotAvailableMatrix: "NOT_AVAILABLE_MATRIX",
    /** Склад недоступен из-за рейтинга. */
    NotAvailableRank: "NOT_AVAILABLE_RANK",
    /** Нет доступного маршрута. */
    NotAvailableRoute: "NOT_AVAILABLE_ROUTE",
    /** Нет таймслотов на точке отгрузки. */
    NotAvailableTimeslotForDropOffPoint:
      "NOT_AVAILABLE_TIMESLOT_FOR_DROP_OFF_POINT",
    /** Нет таймслотов на складе поставки. */
    NotAvailableTimeslotForStorageWarehouse:
      "NOT_AVAILABLE_TIMESLOT_FOR_STORAGE_WAREHOUSE",
    /** Нет таймслотов на складах отгрузки и поставки. */
    NotAvailableTimeslotForBothWarehouses:
      "NOT_AVAILABLE_TIMESLOT_FOR_BOTH_WAREHOUSES",
    /** Нет таймслотов. */
    NotAvailableTimeslotNoReason: "NOT_AVAILABLE_TIMESLOT_NO_REASON",
  },
  /** Значения для `OzonSupplyDraftWarehouseTag`. */
  SupplyDraftWarehouseTag: {
    Unspecified: "UNSPECIFIED",
    Jewelry: "JEWELRY",
    EvsdRequired: "EVSD_REQUIRED",
    MarkingRequired: "MARKING_REQUIRED",
    MarkingPossible: "MARKING_POSSIBLE",
    Traceable: "TRACEABLE",
    EttnRequired: "ETTN_REQUIRED",
    Undefined: "UNDEFINED",
    FreezeStockForMarkingAfterAcceptance:
      "FREEZE_STOCK_FOR_MARKING_AFTER_ACCEPTANCE",
    UtdRequired: "UTD_REQUIRED",
  },
  /** Значения для `OzonSupplyOrderActAcceptanceStatus`. */
  SupplyOrderActAcceptanceStatus: {
    InProgress: "IN_PROGRESS",
    Success: "SUCCESS",
    Failed: "FAILED",
  },
  /** Значения для `OzonSupplyOrderActAcceptErrorReason`. */
  SupplyOrderActAcceptErrorReason: {
    Unspecified: "UNSPECIFIED",
    InvalidState: "INVALID_STATE",
    SupplyWithUtd: "SUPPLY_WITH_UTD",
  },
  /** Значения для `OzonSupplyOrderActState`. */
  SupplyOrderActState: {
    /** Не определён. */
    Unspecified: "UNSPECIFIED",
    /** Ожидает согласования продавца. */
    AwaitingApprovalBySeller: "AWAITING_APPROVAL_BY_SELLER",
    /** Отклонён продавцом. */
    RejectBySeller: "REJECT_BY_SELLER",
    /** Согласован продавцом. */
    AgreementWithSeller: "AGREEMENT_WITH_SELLER",
    /** Согласование завершено. */
    Accepted: "ACCEPTED",
  },
  /** Значения для `OzonSupplyOrderActType`. */
  SupplyOrderActType: {
    /** Не определён. */
    Unspecified: "UNSPECIFIED",
    /** Акт об излишках. */
    Surplus: "SURPLUS",
    /** Акт приёмки. */
    Acceptance: "ACCEPTANCE",
    /** Акт о браке. */
    Defect: "DEFECT",
    /** Акт о недостаче. */
    Shortcoming: "SHORTCOMING",
  },
  /** Значения для `OzonSupplyOrderBundleSfboAttribute`. */
  SupplyOrderBundleSfboAttribute: {
    /** Без метки. */
    ItemSfboAttributeNone: "ITEM_SFBO_ATTRIBUTE_NONE",
    /** Super-товар. */
    ItemSfboAttributeSuperFbo: "ITEM_SFBO_ATTRIBUTE_SUPER_FBO",
    /** Неходовой товар. */
    ItemSfboAttributeAntiFbo: "ITEM_SFBO_ATTRIBUTE_ANTI_FBO",
  },
  /** Значения для `OzonSupplyOrderBundleShipmentType`. */
  SupplyOrderBundleShipmentType: {
    /** Обычный товар. */
    BundleItemShipmentTypeGeneral: "BUNDLE_ITEM_SHIPMENT_TYPE_GENERAL",
    /** Коробка. */
    BundleItemShipmentTypeBox: "BUNDLE_ITEM_SHIPMENT_TYPE_BOX",
    /** Палета. */
    BundleItemShipmentTypePallet: "BUNDLE_ITEM_SHIPMENT_TYPE_PALLET",
  },
  /** Значения для `OzonSupplyOrderBundleSortField`. */
  SupplyOrderBundleSortField: {
    /** SKU. */
    Sku: "SKU",
    /** Названию товара. */
    Name: "NAME",
    /** Количеству. */
    Quantity: "QUANTITY",
    /** Объёму в литрах. */
    TotalVolumeInLitres: "TOTAL_VOLUME_IN_LITRES",
  },
  /** Значения для `OzonSupplyOrderBundleTag`. */
  SupplyOrderBundleTag: {
    Jewelry: "JEWELRY",
    EvsdRequired: "EVSD_REQUIRED",
    MarkingRequired: "MARKING_REQUIRED",
    MarkingPossible: "MARKING_POSSIBLE",
    Traceable: "TRACEABLE",
    EttnRequired: "ETTN_REQUIRED",
    Undefined: "UNDEFINED",
  },
  /** Значения для `OzonSupplyOrderCancelError`. */
  SupplyOrderCancelError: {
    InvalidOrderState: "INVALID_ORDER_STATE",
    OrderDoesNotBelongToCompany: "ORDER_DOES_NOT_BELONG_TO_COMPANY",
    OrderIsVirtual: "ORDER_IS_VIRTUAL",
    OrderDoesNotBelongToContractor: "ORDER_DOES_NOT_BELONG_TO_CONTRACTOR",
    OtherAsynchronousOperationInProgress:
      "OTHER_ASYNCHRONOUS_OPERATION_IN_PROGRESS",
  },
  /** Значения для `OzonSupplyOrderCancelStatus`. */
  SupplyOrderCancelStatus: {
    InProgress: "IN_PROGRESS",
    Success: "SUCCESS",
    Error: "ERROR",
  },
  /** Значения для `OzonSupplyOrderListSortBy`. */
  SupplyOrderListSortBy: {
    /** По дате создания заявки. */
    OrderCreation: "ORDER_CREATION",
    /** По обновлению статуса заявки. */
    OrderStateUpdatedAt: "ORDER_STATE_UPDATED_AT",
    /** По таймслоту в UTC. */
    TimeslotFromUtc: "TIMESLOT_FROM_UTC",
    /** По таймслоту в локальном времени. */
    TimeslotFromLocal: "TIMESLOT_FROM_LOCAL",
  },
  /** Значения для `OzonSupplyOrderListSortDirection`. */
  SupplyOrderListSortDirection: {
    /** По возрастанию. */
    Asc: "ASC",
    /** По убыванию. */
    Desc: "DESC",
  },
  /** Значения для `OzonSupplyOrderPassError`. */
  SupplyOrderPassError: {
    SetVehicleErrorUnspecified: "SET_VEHICLE_ERROR_UNSPECIFIED",
    SetVehicleErrorInvalidOrderState: "SET_VEHICLE_ERROR_INVALID_ORDER_STATE",
    SetVehicleErrorVehicleNotRequired: "SET_VEHICLE_ERROR_VEHICLE_NOT_REQUIRED",
    SetVehicleErrorOrderNotBelongContractor:
      "SET_VEHICLE_ERROR_ORDER_NOT_BELONG_CONTRACTOR",
    SetVehicleErrorOrderNotBelongCompany:
      "SET_VEHICLE_ERROR_ORDER_NOT_BELONG_COMPANY",
  },
  /** Значения для `OzonSupplyOrderPassOperationResult`. */
  SupplyOrderPassOperationResult: {
    /** Статус неизвестен. */
    Unknown: "Unknown",
    /** Данные указаны. */
    Success: "Success",
    /** Данные обрабатываются. */
    InProgress: "InProgress",
    /** Не удалось обработать данные. */
    Failed: "Failed",
  },
  /** Значения для `OzonSupplyOrderPlacementZone`. */
  SupplyOrderPlacementZone: {
    /** Не указана. */
    Unspecified: "UNSPECIFIED",
    /** Закрытая зона. */
    ClosedZone: "CLOSED_ZONE",
    /** Сортируемый товар. */
    Sort: "SORT",
    /** Крупногабаритный товар. */
    Oversize: "OVERSIZE",
    /** Ювелирные изделия. */
    Jewelry: "JEWELRY",
    /** Неизвестная зона. */
    Unresolved: "UNRESOLVED",
    /** Продукты. */
    Products: "PRODUCTS",
    /** Несортируемый товар. */
    NonSort: "NON_SORT",
    /** Товар 2–4 класса опасности. */
    DangerousGoods: "DANGEROUS_GOODS",
  },
  /** Значения для `OzonSupplyOrderState`. */
  SupplyOrderState: {
    /** Не определён. */
    Unspecified: "UNSPECIFIED",
    /** Готова к отгрузке. */
    ReadyToSupply: "READY_TO_SUPPLY",
    /** Заполнение данных. */
    DataFilling: "DATA_FILLING",
    /** Принята на точке отгрузки. */
    AcceptedAtSupplyWarehouse: "ACCEPTED_AT_SUPPLY_WAREHOUSE",
    /** В пути. */
    InTransit: "IN_TRANSIT",
    /** Приёмка на складе. */
    AcceptanceAtStorageWarehouse: "ACCEPTANCE_AT_STORAGE_WAREHOUSE",
    /** Согласование актов. */
    ReportsConfirmationAwaiting: "REPORTS_CONFIRMATION_AWAITING",
    /** Спор. */
    ReportRejected: "REPORT_REJECTED",
    /** Завершена. */
    Completed: "COMPLETED",
    RejectedAtSupplyWarehouse: "REJECTED_AT_SUPPLY_WAREHOUSE",
    /** Отменена. */
    Cancelled: "CANCELLED",
    /** Просрочена. */
    Overdue: "OVERDUE",
  },
  /** Значения для `OzonSupplyOrderStatusCounterState`. */
  SupplyOrderStatusCounterState: {
    OrderStateUnspecified: "ORDER_STATE_UNSPECIFIED",
    OrderStateDataFilling: "ORDER_STATE_DATA_FILLING",
    OrderStateReadyToSupply: "ORDER_STATE_READY_TO_SUPPLY",
    OrderStateAcceptedAtSupplyWarehouse:
      "ORDER_STATE_ACCEPTED_AT_SUPPLY_WAREHOUSE",
    OrderStateInTransit: "ORDER_STATE_IN_TRANSIT",
    OrderStateAcceptanceAtStorageWarehouse:
      "ORDER_STATE_ACCEPTANCE_AT_STORAGE_WAREHOUSE",
    OrderStateReportsConfirmationAwaiting:
      "ORDER_STATE_REPORTS_CONFIRMATION_AWAITING",
    OrderStateReportRejected: "ORDER_STATE_REPORT_REJECTED",
    OrderStateCompleted: "ORDER_STATE_COMPLETED",
    OrderStateRejectedAtSupplyWarehouse:
      "ORDER_STATE_REJECTED_AT_SUPPLY_WAREHOUSE",
    OrderStateCancelled: "ORDER_STATE_CANCELLED",
  },
  /** Значения для `OzonSupplyOrderTimeslotChangeForbiddenReason`. */
  SupplyOrderTimeslotChangeForbiddenReason: {
    InvalidOrderState: "INVALID_ORDER_STATE",
    IsVirtual: "IS_VIRTUAL",
    SetTimeslotDeadlineExceed: "SET_TIMESLOT_DEADLINE_EXCEED",
    OrderDoesNotBelongToCompany: "ORDER_DOES_NOT_BELONG_TO_COMPANY",
  },
  /** Значения для `OzonSupplyOrderTimeslotFilterType`. */
  SupplyOrderTimeslotFilterType: {
    /** По локальному времени пункта отгрузки. */
    ByLocalTime: "BY_LOCAL_TIME",
    /** По времени в UTC. */
    ByUtcTime: "BY_UTC_TIME",
  },
  /** Значения для `OzonSupplyOrderTimeslotOperationStatus`. */
  SupplyOrderTimeslotOperationStatus: {
    StatusUnspecified: "STATUS_UNSPECIFIED",
    StatusError: "STATUS_ERROR",
    StatusInProgress: "STATUS_IN_PROGRESS",
    StatusSuccess: "STATUS_SUCCESS",
  },
  /** Значения для `OzonSupplyOrderTimeslotUpdateError`. */
  SupplyOrderTimeslotUpdateError: {
    UpdateTimeslotErrorUnspecified: "UPDATE_TIMESLOT_ERROR_UNSPECIFIED",
    UpdateTimeslotErrorInvalidOrderState:
      "UPDATE_TIMESLOT_ERROR_INVALID_ORDER_STATE",
    UpdateTimeslotErrorIncompatibleOrderFlow:
      "UPDATE_TIMESLOT_ERROR_INCOMPATIBLE_ORDER_FLOW",
    UpdateTimeslotErrorSetTimeslotDeadlineExceed:
      "UPDATE_TIMESLOT_ERROR_SET_TIMESLOT_DEADLINE_EXCEED",
    UpdateTimeslotErrorOutOfAllowedRange:
      "UPDATE_TIMESLOT_ERROR_OUT_OF_ALLOWED_RANGE",
    UpdateTimeslotErrorOrderNotBelongContractor:
      "UPDATE_TIMESLOT_ERROR_ORDER_NOT_BELONG_CONTRACTOR",
    UpdateTimeslotErrorOrderNotBelongCompany:
      "UPDATE_TIMESLOT_ERROR_ORDER_NOT_BELONG_COMPANY",
    UpdateTimeslotErrorPickupOrderLimitExceeded:
      "UPDATE_TIMESLOT_ERROR_PICKUP_ORDER_LIMIT_EXCEEDED",
    UpdateTimeslotErrorLimitOfChangingTimeslotExceeded:
      "UPDATE_TIMESLOT_ERROR_LIMIT_OF_CHANGING_TIMESLOT_EXCEEDED",
  },
  /** Значения для `OzonSupplyOverdueReason`. */
  SupplyOverdueReason: {
    /** Не определена. */
    Unspecified: "UNSPECIFIED",
    /** Неизвестная. */
    Undefined: "UNDEFINED",
    /** Поставка не доставлена в указанный таймслот. */
    OrderTimeslotExpired: "ORDER_TIMESLOT_EXPIRED",
    /** Таймслот не указан вовремя. */
    OrderTimeslotNotSelected: "ORDER_TIMESLOT_NOT_SELECTED",
    /** Пикап-поставка не приведена в статус `ReadyToSupply` вовремя. */
    NotReadyForPickup: "NOT_READY_FOR_PICKUP",
    /** Курьер не смог забрать поставку. */
    PickupFailed: "PICKUP_FAILED",
  },
  /** Значения для `OzonSupplyState`. */
  SupplyState: {
    /** Не указан. */
    Unspecified: "UNSPECIFIED",
    /** Готова к отгрузке. */
    ReadyToSupply: "READY_TO_SUPPLY",
    /** Заполнение данных. */
    DataFilling: "DATA_FILLING",
    /** Принята на точке отгрузки. */
    AcceptedAtSupplyWarehouse: "ACCEPTED_AT_SUPPLY_WAREHOUSE",
    /** В пути. */
    InTransit: "IN_TRANSIT",
    /** Согласование актов. */
    ReportsConfirmationAwaiting: "REPORTS_CONFIRMATION_AWAITING",
    /** Спор. */
    ReportRejected: "REPORT_REJECTED",
    /** Завершена. */
    Completed: "COMPLETED",
    /** Отказано в приёмке. */
    RejectedAtSupplyWarehouse: "REJECTED_AT_SUPPLY_WAREHOUSE",
    /** Отменена. */
    Cancelled: "CANCELLED",
    /** Просрочена. */
    Overdue: "OVERDUE",
    /** Принята на складе хранения. */
    AcceptedAtStorageWarehouse: "ACCEPTED_AT_STORAGE_WAREHOUSE",
  },
  /** Значения для `OzonSupplyTimeslotForbiddenReason`. */
  SupplyTimeslotForbiddenReason: {
    Unspecified: "UNSPECIFIED",
    Undefined: "UNDEFINED",
    InvalidOrderState: "INVALID_ORDER_STATE",
    SetTimeslotDeadlineExceed: "SET_TIMESLOT_DEADLINE_EXCEED",
    OrderDoesNotBelongToCompany: "ORDER_DOES_NOT_BELONG_TO_COMPANY",
    OrderIsVirtual: "ORDER_IS_VIRTUAL",
  },
  /** Значения для `OzonSupplyVehicleForbiddenReason`. */
  SupplyVehicleForbiddenReason: {
    Unspecified: "UNSPECIFIED",
    Undefined: "UNDEFINED",
    InvalidOrderState: "INVALID_ORDER_STATE",
    OrderDoesNotBelongToCompany: "ORDER_DOES_NOT_BELONG_TO_COMPANY",
    VehicleNotRequired: "VEHICLE_NOT_REQUIRED",
  },
  /** Значения для `OzonTaxSystem`. */
  TaxSystem: {
    /** Не определена. */
    Unspecified: "UNSPECIFIED",
    /** Неизвестная. */
    Unknown: "UNKNOWN",
    /** ОСНО. */
    Osno: "OSNO",
    /** УСН. */
    Usn: "USN",
    /** НПД. */
    Npd: "NPD",
    /** АУСН. */
    Ausn: "AUSN",
    /** ПСН. */
    Psn: "PSN",
  },
  /** Значения для `OzonTransportLabelError`. */
  TransportLabelError: {
    InvalidState: "INVALID_STATE",
    SupplyNotBelongContractor: "SUPPLY_NOT_BELONG_CONTRACTOR",
    SupplyNotBelongCompany: "SUPPLY_NOT_BELONG_COMPANY",
    OperationNotFound: "OPERATION_NOT_FOUND",
    OperationFailed: "OPERATION_FAILED",
    SupplyIsEmpty: "SUPPLY_IS_EMPTY",
    CargoesNotFound: "CARGOES_NOT_FOUND",
  },
  /** Значения для `OzonTransportLabelStatus`. */
  TransportLabelStatus: {
    InProgress: "IN_PROGRESS",
    Success: "SUCCESS",
    Failed: "FAILED",
  },
  /** Значения для `OzonTransportOrderLabelError`. */
  TransportOrderLabelError: {
    Undefined: "UNDEFINED",
    OperationNotFound: "OPERATION_NOT_FOUND",
    OperationFailed: "OPERATION_FAILED",
    OrderNotFound: "ORDER_NOT_FOUND",
    AllSuppliesSkipped: "ALL_SUPPLIES_SKIPPED",
    LabelsCountExceed: "LABELS_COUNT_EXCEED",
  },
  /** Значения для `UpdateQuestionStatusV1Status`. */
  UpdateQuestionStatusV1Status: {
    /** Новый. */
    New: "NEW",
    /** Обработанный. */
    Processed: "PROCESSED",
    /** Просмотренный. */
    Viewed: "VIEWED",
  },
  /** Значения для `OzonWarehouseCarriageLabelType`. */
  WarehouseCarriageLabelType: {
    /** Неизвестный тип. */
    Unspecified: "UNSPECIFIED",
    /** Большая этикетка. */
    Big: "BIG",
    /** Маленькая этикетка. */
    Small: "SMALL",
  },
  /** Значения для `OzonWarehouseFirstMileType`. */
  WarehouseFirstMileType: {
    Unspecified: "UNSPECIFIED",
    PickUp: "PICK_UP",
    DropOff: "DROP_OFF",
  },
  /** Значения для `OzonWarehouseOperationStatus`. */
  WarehouseOperationStatus: {
    /** Не определено. */
    Unspecified: "UNSPECIFIED",
    /** В процессе. */
    InProgress: "IN_PROGRESS",
    /** Выполнена. */
    Success: "SUCCESS",
    /** Завершилась с ошибкой. */
    Error: "ERROR",
  },
  /** Значения для `OzonWarehouseOperationType`. */
  WarehouseOperationType: {
    /** Не определено. */
    Unspecified: "UNSPECIFIED",
    /** Создание FBS-склада. */
    CreateFbsWarehouse: "CREATE_FBS_WAREHOUSE",
    /** Обновление FBS-склада. */
    UpdateFbsWarehouse: "UPDATE_FBS_WAREHOUSE",
    /** Установка первой мили. */
    SetFirstMile: "SET_FIRST_MILE",
    /** Архивация или разархивация FBS-склада. */
    WarehouseEnableDisable: "WAREHOUSE_ENABLE_DISABLE",
    /** Включение или выключение паузы rFBS-склада. */
    WarehousePauseUnpause: "WAREHOUSE_PAUSE_UNPAUSE",
  },
  /** Значения для `OzonWarehouseProductRestrictionCharacteristic`. */
  WarehouseProductRestrictionCharacteristic: {
    /** Не определено. */
    Unspecified: "UNSPECIFIED",
    /** Длина. */
    Length: "LENGTH",
    /** Ширина. */
    Width: "WIDTH",
    /** Высота. */
    Height: "HEIGHT",
    /** Вес. */
    Weight: "WEIGHT",
    /** Сумма измерений. */
    SumOfDimensions: "SUM_OF_DIMENSIONS",
    /** Объёмный вес. */
    VolumeWeight: "VOLUME_WEIGHT",
    /** Объём. */
    Volume: "VOLUME",
    /** Цена. */
    Price: "PRICE",
    /** Самая длинная сторона. */
    LongestSide: "LONGEST_SIDE",
  },
  /** Значения для `OzonWarehouseProductValidationErrorType`. */
  WarehouseProductValidationErrorType: {
    /** Не определён. */
    Unspecified: "UNSPECIFIED",
    /** Меньше минимального значения. */
    LessThanMin: "LESS_THAN_MIN",
    /** Больше максимального значения. */
    GreaterThanMax: "GREATER_THAN_MAX",
  },
  /** Значения для `OzonWarehouseProductValidationState`. */
  WarehouseProductValidationState: {
    /** Не определён. */
    Unspecified: "UNSPECIFIED",
    /** Товар не прошёл проверку. */
    NotValid: "NOT_VALID",
  },
  /** Значения для `OzonWarehouseType`. */
  WarehouseType: {
    /** Фреш. */
    ExpressDarkStore: "EXPRESS_DARK_STORE",
    /** Не указан. */
    Unspecified: "UNSPECIFIED",
    /** Фулфилмент. */
    FullFillment: "FULL_FILLMENT",
    /** Склад возвратов. */
    FullFillmentReturns: "FULL_FILLMENT_RETURNS",
    /** Склад брака. */
    FullFillmentDefect: "FULL_FILLMENT_DEFECT",
    /** Кросс-док. */
    CrossDock: "CROSS_DOCK",
    /** Сортировочный центр. */
    SortingCenter: "SORTING_CENTER",
    /** Склад аптеки. */
    Pharmacy: "PHARMACY",
    /** Распределительный центр. */
    DistributionCenter: "DISTRIBUTION_CENTER",
    /** Пункты приёма заказов. */
    OrdersReceivingPoint: "ORDERS_RECEIVING_POINT",
    /** Аутсорс-склады. */
    OutsourceFf: "OUTSOURCE_FF",
    /** B2B-склад. */
    B2b: "B2B",
    /** Склады партнёров. */
    ExternalFf: "EXTERNAL_FF",
  },
  /** Значения для `OzonWarehouseTypeFilter`. */
  WarehouseTypeFilter: {
    ExpressDarkStore: "EXPRESS_DARK_STORE",
    FullFillment: "FULL_FILLMENT",
    FullFillmentReturns: "FULL_FILLMENT_RETURNS",
    FullFillmentDefect: "FULL_FILLMENT_DEFECT",
    CrossDock: "CROSS_DOCK",
    SortingCenter: "SORTING_CENTER",
    Pharmacy: "PHARMACY",
    DistributionCenter: "DISTRIBUTION_CENTER",
    OrdersReceivingPoint: "ORDERS_RECEIVING_POINT",
    OutsourceFf: "OUTSOURCE_FF",
    B2b: "B2B",
    ExternalFf: "EXTERNAL_FF",
  },
  /** Значения для `OzonWarehouseWorkingDay`. */
  WarehouseWorkingDay: {
    /** Не определён. */
    Unspecified: "UNSPECIFIED",
    /** Понедельник. */
    Monday: "MONDAY",
    /** Вторник. */
    Tuesday: "TUESDAY",
    /** Среда. */
    Wednesday: "WEDNESDAY",
    /** Четверг. */
    Thursday: "THURSDAY",
    /** Пятница. */
    Friday: "FRIDAY",
    /** Суббота. */
    Saturday: "SATURDAY",
    /** Воскресенье. */
    Sunday: "SUNDAY",
  },
} as const;
