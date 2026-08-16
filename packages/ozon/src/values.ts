/**
 * Generated from closed string union types in Ozon endpoint contracts.
 * Run `pnpm update:values` after changing those contracts.
 */
export const OzonValues = {
  /** Values accepted by `OzonAnalyticsDimension`. */
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
  /** Values accepted by `OzonAnalyticsItemTag`. */
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
  /** Values accepted by `OzonAnalyticsItemTagFilter`. */
  AnalyticsItemTagFilter: {
    ItemAttributeNone: "ITEM_ATTRIBUTE_NONE",
    Econom: "ECONOM",
    Novel: "NOVEL",
    Discount: "DISCOUNT",
    FbsReturn: "FBS_RETURN",
    Super: "SUPER",
    Markable: "MARKABLE",
  },
  /** Values accepted by `AnalyticsManageStockType`. */
  AnalyticsManageStockType: {
    StockTypeValid: "STOCK_TYPE_VALID",
    StockTypeWaitingDocs: "STOCK_TYPE_WAITING_DOCS",
    StockTypeExpiring: "STOCK_TYPE_EXPIRING",
    StockTypeDefect: "STOCK_TYPE_DEFECT",
  },
  /** Values accepted by `OzonAnalyticsPlacementZone`. */
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
  /** Values accepted by `OzonAnalyticsPlacementZoneFilter`. */
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
  /** Values accepted by `AnalyticsProductQueriesSortBy`. */
  AnalyticsProductQueriesSortBy: {
    BySearches: "BY_SEARCHES",
    ByViews: "BY_VIEWS",
    ByPosition: "BY_POSITION",
    ByConversion: "BY_CONVERSION",
    ByGmv: "BY_GMV",
  },
  /** Values accepted by `AnalyticsProductQueriesSortDirection`. */
  AnalyticsProductQueriesSortDirection: {
    Descending: "DESCENDING",
    Ascending: "ASCENDING",
  },
  /** Values accepted by `OzonAnalyticsStockGrade`. */
  AnalyticsStockGrade: {
    GradesNone: "GRADES_NONE",
    GradesNosales: "GRADES_NOSALES",
    GradesGreen: "GRADES_GREEN",
    GradesYellow: "GRADES_YELLOW",
    GradesRed: "GRADES_RED",
    GradesCritical: "GRADES_CRITICAL",
  },
  /** Values accepted by `OzonAnalyticsTurnoverGrade`. */
  AnalyticsTurnoverGrade: {
    Unspecified: "UNSPECIFIED",
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
  /** Values accepted by `OzonAnalyticsTurnoverGradeFilter`. */
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
  /** Values accepted by `OzonAnalyticsWarehouseType`. */
  AnalyticsWarehouseType: {
    All: "ALL",
    ExpressDarkStore: "EXPRESS_DARK_STORE",
    NotExpressDarkStore: "NOT_EXPRESS_DARK_STORE",
  },
  /** Values accepted by `OzonCargoContentType`. */
  CargoContentType: {
    Unspecified: "UNSPECIFIED",
    Mix: "MIX",
    Mono: "MONO",
    None: "NONE",
  },
  /** Values accepted by `OzonCargoCreateErrorReason`. */
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
  /** Values accepted by `OzonCargoDeleteStatus`. */
  CargoDeleteStatus: {
    InProgress: "IN_PROGRESS",
    Success: "SUCCESS",
    Error: "ERROR",
  },
  /** Values accepted by `OzonCargoDeleteSupplyError`. */
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
  /** Values accepted by `OzonCargoItemValidationError`. */
  CargoItemValidationError: {
    SupplyItemNotFound: "SUPPLY_ITEM_NOT_FOUND",
    DuplicatedSupplyItem: "DUPLICATED_SUPPLY_ITEM",
    BeforeDeadline: "BEFORE_DEADLINE",
    SameBarcodes: "SAME_BARCODES",
    SameArticles: "SAME_ARTICLES",
    NotUniqueSkuByProduct: "NOT_UNIQUE_SKU_BY_PRODUCT",
    QuantityNotDivisibleByQuant: "QUANTITY_NOT_DIVISIBLE_BY_QUANT",
    NotSinglePalletSkuInPalletCargo: "NOT_SINGLE_PALLET_SKU_IN_PALLET_CARGO",
    NotOneQuantPalletSku: "NOT_ONE_QUANT_PALLET_SKU",
    NotEconomSku: "NOT_ECONOM_SKU",
    QuantityLessOne: "QUANTITY_LESS_ONE",
    SupplyItemWithQuantNotFound: "SUPPLY_ITEM_WITH_QUANT_NOT_FOUND",
  },
  /** Values accepted by `OzonCargoLabelError`. */
  CargoLabelError: {
    InvalidState: "INVALID_STATE",
    SupplyNotBelongContractor: "SUPPLY_NOT_BELONG_CONTRACTOR",
    SupplyNotBelongCompany: "SUPPLY_NOT_BELONG_COMPANY",
    OperationNotFound: "OPERATION_NOT_FOUND",
    OperationFailed: "OPERATION_FAILED",
    SupplyIsEmpty: "SUPPLY_IS_EMPTY",
    CargoesNotFound: "CARGOES_NOT_FOUND",
  },
  /** Values accepted by `OzonCargoLabelStatus`. */
  CargoLabelStatus: {
    InProgress: "IN_PROGRESS",
    Success: "SUCCESS",
    Failed: "FAILED",
  },
  /** Values accepted by `OzonCargoOperationStatus`. */
  CargoOperationStatus: {
    InProgress: "IN_PROGRESS",
    Success: "SUCCESS",
    Failed: "FAILED",
    StatusUnspecified: "STATUS_UNSPECIFIED",
  },
  /** Values accepted by `OzonCargoPlacementZoneType`. */
  CargoPlacementZoneType: {
    Unspecified: "UNSPECIFIED",
    Undefined: "UNDEFINED",
    Single: "SINGLE",
    Multi: "MULTI",
  },
  /** Values accepted by `OzonCargoTrackingStatus`. */
  CargoTrackingStatus: {
    Unspecified: "UNSPECIFIED",
    ReadyToSupply: "READY_TO_SUPPLY",
    Refused: "REFUSED",
    OnWarehouse: "ON_WAREHOUSE",
    NotDelivered: "NOT_DELIVERED",
    Accepting: "ACCEPTING",
    Processed: "PROCESSED",
    OnPointShipment: "ON_POINT_SHIPMENT",
    OnTransitWarehouse: "ON_TRANSIT_WAREHOUSE",
    Lost: "LOST",
    Created: "CREATED",
    Deleted: "DELETED",
  },
  /** Values accepted by `OzonCargoTrackingType`. */
  CargoTrackingType: {
    Unspecified: "UNSPECIFIED",
    ExpectedArrival: "EXPECTED_ARRIVAL",
    ActualArrival: "ACTUAL_ARRIVAL",
  },
  /** Values accepted by `OzonCargoTransportActivateError`. */
  CargoTransportActivateError: {
    Undefined: "UNDEFINED",
    OperationNotFound: "OPERATION_NOT_FOUND",
    SupplyIsFinalized: "SUPPLY_IS_FINALIZED",
    CanNotEditTag: "CAN_NOT_EDIT_TAG",
  },
  /** Values accepted by `OzonCargoTransportBindError`. */
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
  /** Values accepted by `OzonCargoTransportCreateError`. */
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
  /** Values accepted by `OzonCargoTransportOperationStatus`. */
  CargoTransportOperationStatus: {
    InProgress: "IN_PROGRESS",
    Success: "SUCCESS",
    Failed: "FAILED",
  },
  /** Values accepted by `OzonCargoType`. */
  CargoType: {
    Box: "BOX",
    Pallet: "PALLET",
  },
  /** Values accepted by `OzonCarriageContainerSortDirection`. */
  CarriageContainerSortDirection: {
    Asc: "ASC",
    Desc: "DESC",
  },
  /** Values accepted by `OzonCertificateAccordanceTypeV2`. */
  CertificateAccordanceType: {
    Unknown: "UNKNOWN",
    Eaeu: "EAEU",
    National: "NATIONAL",
    TechnicalRegulationsRf: "TECHNICAL_REGULATIONS_RF",
    TechnicalRegulationsCu: "TECHNICAL_REGULATIONS_CU",
    Gost: "GOST",
    ChemicalProducts: "CHEMICAL_PRODUCTS",
    SafetyDataSheet: "SAFETY_DATA_SHEET",
    RejectionLetter: "REJECTION_LETTER",
  },
  /** Values accepted by `OzonCertificateAccordanceTypeCode`. */
  CertificateAccordanceTypeCode: {
    TechnicalRegulationsRf: "technical_regulations_rf",
    TechnicalRegulationsCu: "technical_regulations_cu",
    Gost: "gost",
  },
  /** Values accepted by `OzonCertificateCreationStatusV2`. */
  CertificateCreationStatus: {
    Completed: "COMPLETED",
    Incomplete: "INCOMPLETE",
  },
  /** Values accepted by `OzonCertificateParameterStateV2`. */
  CertificateParameterState: {
    Invalid: "INVALID",
    Valid: "VALID",
    Missing: "MISSING",
  },
  /** Values accepted by `OzonCertificateProductTypeV2`. */
  CertificateProductType: {
    Unknown: "UNKNOWN",
    ProductsSubjectToRegistration: "PRODUCTS_SUBJECT_TO_REGISTRATION",
    Pesticide: "PESTICIDE",
    Agrochemical: "AGROCHEMICAL",
    FeedAdditive: "FEED_ADDITIVE",
    MedicalProduct: "MEDICAL_PRODUCT",
    Medicine: "MEDICINE",
    VeterinaryDrug: "VETERINARY_DRUG",
    PharmaceuticalSubstance: "PHARMACEUTICAL_SUBSTANCE",
  },
  /** Values accepted by `OzonCertificateTypeV2`. */
  CertificateType: {
    Unknown: "UNKNOWN",
    SafetyDataSheet: "SAFETY_DATA_SHEET",
    CertificateOfConformity: "CERTIFICATE_OF_CONFORMITY",
    Declaration: "DECLARATION",
    CertificateOfRegistration: "CERTIFICATE_OF_REGISTRATION",
    RegistrationCertificate: "REGISTRATION_CERTIFICATE",
    RefusedLetter: "REFUSED_LETTER",
    VeterinaryCoverDocument: "VETERINARY_COVER_DOCUMENT",
  },
  /** Values accepted by `OzonCertificateTypeCode`. */
  CertificateTypeCode: {
    CertificateOfConformity: "certificate_of_conformity",
    Declaration: "declaration",
    CertificateOfRegistration: "certificate_of_registration",
    RegistrationCertificate: "registration_certificate",
    RefusedLetter: "refused_letter",
    VeterinaryCoverDocument: "veterinary_cover_document",
    SafetyDataSheet: "safety_data_sheet",
  },
  /** Values accepted by `OzonChatListStatus`. */
  ChatListStatus: {
    All: "ALL",
    Opened: "OPENED",
    Closed: "CLOSED",
  },
  /** Values accepted by `OzonConditionalCancellationFilterState`. */
  ConditionalCancellationFilterState: {
    All: "ALL",
    OnApproval: "ON_APPROVAL",
    Approved: "APPROVED",
    Rejected: "REJECTED",
  },
  /** Values accepted by `OzonConditionalCancellationInitiator`. */
  ConditionalCancellationInitiator: {
    Ozon: "OZON",
    Seller: "SELLER",
    Client: "CLIENT",
    System: "SYSTEM",
    Delivery: "DELIVERY",
  },
  /** Values accepted by `OzonConditionalCancellationState`. */
  ConditionalCancellationState: {
    OnApproval: "ON_APPROVAL",
    Approved: "APPROVED",
    Rejected: "REJECTED",
  },
  /** Values accepted by `OzonDeliveryCheckoutRequestSchema`. */
  DeliveryCheckoutRequestSchema: {
    Mix: "MIX",
    Fbo: "FBO",
    Fbs: "FBS",
  },
  /** Values accepted by `OzonDeliveryCheckoutSchema`. */
  DeliveryCheckoutSchema: {
    Unspecified: "UNSPECIFIED",
    Fbo: "FBO",
    Fbs: "FBS",
  },
  /** Values accepted by `OzonDeliveryMethodSortDirection`. */
  DeliveryMethodSortDirection: {
    Asc: "ASC",
    Desc: "DESC",
  },
  /** Values accepted by `OzonDeliveryMethodStatus`. */
  DeliveryMethodStatus: {
    Disabled: "DISABLED",
    New: "NEW",
    Edited: "EDITED",
    Active: "ACTIVE",
    Waiting: "WAITING",
    Broken: "BROKEN",
  },
  /** Values accepted by `OzonDeliveryMethodType`. */
  DeliveryMethodType: {
    Unspecified: "UNSPECIFIED",
    Courier: "COURIER",
    Pvz: "PVZ",
    Postamat: "POSTAMAT",
  },
  /** Values accepted by `OzonDeliveryUnavailableReason`. */
  DeliveryUnavailableReason: {
    Unspecified: "UNSPECIFIED",
    Unknown: "UNKNOWN",
    Banned: "BANNED",
    NoRoute: "NO_ROUTE",
    OutOfStock: "OUT_OF_STOCK",
    BannedForArea: "BANNED_FOR_AREA",
    BannedForLegal: "BANNED_FOR_LEGAL",
    BannedForNotPremium: "BANNED_FOR_NOT_PREMIUM",
    DeliveryUnavailable: "DELIVERY_UNAVAILABLE",
    BannedForIndividual: "BANNED_FOR_INDIVIDUAL",
    InvalidWeight: "INVALID_WEIGHT",
    InvalidMultiplicity: "INVALID_MULTIPLICITY",
    NotFoundPointsDarkStores: "NOT_FOUND_POINTS_DARK_STORES",
    InvalidMultiWarehouses: "INVALID_MULTI_WAREHOUSES",
    MinPrice: "MIN_PRICE",
    OzoneDeliveryUnavailable: "OZONE_DELIVERY_UNAVAILABLE",
    RfbsDeliveryUnavailable: "RFBS_DELIVERY_UNAVAILABLE",
    HackCourierTags: "HACK_COURIER_TAGS",
    NoSla: "NO_SLA",
    DeliveryVariantIsClosing: "DELIVERY_VARIANT_IS_CLOSING",
    TplNotIntegrated: "TPL_NOT_INTEGRATED",
    NotAllWarehousesAreServed: "NOT_ALL_WAREHOUSES_ARE_SERVED",
    DeliverySlotsNotFound: "DELIVERY_SLOTS_NOT_FOUND",
    CapacityLimit: "CAPACITY_LIMIT",
    PackageMaxVolumeWeightRestriction: "PACKAGE_MAX_VOLUME_WEIGHT_RESTRICTION",
    PackageMaxWeightRestriction: "PACKAGE_MAX_WEIGHT_RESTRICTION",
    MaxCostRestriction: "MAX_COST_RESTRICTION",
    MinPackageWeightRestriction: "MIN_PACKAGE_WEIGHT_RESTRICTION",
    MinCostRestriction: "MIN_COST_RESTRICTION",
    MaxDimensionsRestriction: "MAX_DIMENSIONS_RESTRICTION",
    ProductTypesRestriction: "PRODUCT_TYPES_RESTRICTION",
    ProductTagsRestriction: "PRODUCT_TAGS_RESTRICTION",
    SelectedDeliveryMethodUnavailable: "SELECTED_DELIVERY_METHOD_UNAVAILABLE",
    SelectedDeliveryTimeslotUnavailable:
      "SELECTED_DELIVERY_TIMESLOT_UNAVAILABLE",
    MarketplaceUnavailable: "MARKETPLACE_UNAVAILABLE",
    InvalidPvzForKgt: "INVALID_PVZ_FOR_KGT",
    LegalUserPremiumSplit: "LEGAL_USER_PREMIUM_SPLIT",
    UserAlreadyHasPremium: "USER_ALREADY_HAS_PREMIUM",
    WaitForPaySubscription: "WAIT_FOR_PAY_SUBSCRIPTION",
    AddressNotSet: "ADDRESS_NOT_SET",
    PickupPointDisabled: "PICKUP_POINT_DISABLED",
    LegalPreorder: "LEGAL_PREORDER",
    DeliveryTypeForPreorder: "DELIVERY_TYPE_FOR_PREORDER",
    CrossBorderPickup: "CROSS_BORDER_PICKUP",
    OrderCustomsTypes: "ORDER_CUSTOMS_TYPES",
    PackageMaxCost: "PACKAGE_MAX_COST",
    SuperEconom: "SUPER_ECONOM",
    EconomNotFullQuant: "ECONOM_NOT_FULL_QUANT",
    EmptyDeliveryMethods: "EMPTY_DELIVERY_METHODS",
  },
  /** Values accepted by `OzonDigitalPostingSortDirection`. */
  DigitalPostingSortDirection: {
    Asc: "ASC",
    Desc: "DESC",
  },
  /** Values accepted by `OzonDigitalPostingV2SortDirection`. */
  DigitalPostingV2SortDirection: {
    Asc: "ASC",
    Desc: "DESC",
  },
  /** Values accepted by `OzonDiscountTaskStatus`. */
  DiscountTaskStatus: {
    Approved: "APPROVED",
    New: "NEW",
    Seen: "SEEN",
    PartlyApproved: "PARTLY_APPROVED",
    Declined: "DECLINED",
    AutoDeclined: "AUTO_DECLINED",
    DeclinedByUser: "DECLINED_BY_USER",
    Coupon: "COUPON",
    Purchased: "PURCHASED",
  },
  /** Values accepted by `OzonDiscountTaskStatusV2`. */
  DiscountTaskStatusV2: {
    All: "ALL",
    Approved: "APPROVED",
    New: "NEW",
    Declined: "DECLINED",
  },
  /** Values accepted by `OzonDraftSupplyCreateError`. */
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
  /** Values accepted by `OzonDraftSupplyCreateStatus`. */
  DraftSupplyCreateStatus: {
    Unspecified: "UNSPECIFIED",
    InProgress: "IN_PROGRESS",
    Success: "SUCCESS",
    Failed: "FAILED",
  },
  /** Values accepted by `OzonDraftSupplyType`. */
  DraftSupplyType: {
    Crossdock: "CROSSDOCK",
    Direct: "DIRECT",
    MultiCluster: "MULTI_CLUSTER",
  },
  /** Values accepted by `OzonDropOffPointType`. */
  DropOffPointType: {
    Pvz: "PVZ",
    Ppz: "PPZ",
    Sc: "SC",
  },
  /** Values accepted by `OzonErfbsConfiguredReturnMethod`. */
  ErfbsConfiguredReturnMethod: {
    Courier: "COURIER",
    TransportCompany: "TRANSPORT_COMPANY",
  },
  /** Values accepted by `OzonErfbsConfiguredWorkingDay`. */
  ErfbsConfiguredWorkingDay: {
    Monday: "MONDAY",
    Tuesday: "TUESDAY",
    Wednesday: "WEDNESDAY",
    Thursday: "THURSDAY",
    Friday: "FRIDAY",
    Saturday: "SATURDAY",
    Sunday: "SUNDAY",
  },
  /** Values accepted by `OzonErfbsReturnMethod`. */
  ErfbsReturnMethod: {
    Unspecified: "UNSPECIFIED",
    Courier: "COURIER",
    TransportCompany: "TRANSPORT_COMPANY",
  },
  /** Values accepted by `OzonErfbsWorkingDay`. */
  ErfbsWorkingDay: {
    Unspecified: "UNSPECIFIED",
    Monday: "MONDAY",
    Tuesday: "TUESDAY",
    Wednesday: "WEDNESDAY",
    Thursday: "THURSDAY",
    Friday: "FRIDAY",
    Saturday: "SATURDAY",
    Sunday: "SUNDAY",
  },
  /** Values accepted by `OzonFboCargoDeleteStatus`. */
  FboCargoDeleteStatus: {
    Unspecified: "UNSPECIFIED",
    InProgress: "IN_PROGRESS",
    Success: "SUCCESS",
    Failed: "FAILED",
  },
  /** Values accepted by `OzonFboCargoDeleteSupplyError`. */
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
  /** Values accepted by `OzonFboCargoTrackingType`. */
  FboCargoTrackingType: {
    Unspecified: "UNSPECIFIED",
    ExpectedArrival: "EXPECTED_ARRIVAL",
    ActualArrival: "ACTUAL_ARRIVAL",
  },
  /** Values accepted by `OzonFboPostingSortDirectionV2`, `OzonFboPostingSortDirectionV3`. */
  FboPostingSortDirection: {
    Asc: "ASC",
    Desc: "DESC",
  },
  /** Values accepted by `OzonFboSellerWarehouseWorkingDay`. */
  FboSellerWarehouseWorkingDay: {
    Unspecified: "UNSPECIFIED",
    Monday: "MONDAY",
    Tuesday: "TUESDAY",
    Wednesday: "WEDNESDAY",
    Thursday: "THURSDAY",
    Friday: "FRIDAY",
    Saturday: "SATURDAY",
    Sunday: "SUNDAY",
  },
  /** Values accepted by `OzonFboSupplyType`. */
  FboSupplyType: {
    CreateTypeCrossdock: "CREATE_TYPE_CROSSDOCK",
    CreateTypeDirect: "CREATE_TYPE_DIRECT",
  },
  /** Values accepted by `OzonFboSupplyWarehouseType`. */
  FboSupplyWarehouseType: {
    WarehouseTypeDeliveryPoint: "WAREHOUSE_TYPE_DELIVERY_POINT",
    WarehouseTypeOrdersReceivingPoint: "WAREHOUSE_TYPE_ORDERS_RECEIVING_POINT",
    WarehouseTypeSortingCenter: "WAREHOUSE_TYPE_SORTING_CENTER",
    WarehouseTypeFullFillment: "WAREHOUSE_TYPE_FULL_FILLMENT",
    WarehouseTypeCrossDock: "WAREHOUSE_TYPE_CROSS_DOCK",
  },
  /** Values accepted by `OzonFbpAcceptanceActError`. */
  FbpAcceptanceActError: {
    ErrorReasonUnspecified: "ERROR_REASON_UNSPECIFIED",
    InvalidCompany: "INVALID_COMPANY",
    FileNotFound: "FILE_NOT_FOUND",
    GenerateTimeoutReached: "GENERATE_TIMEOUT_REACHED",
    GenerationError: "GENERATION_ERROR",
  },
  /** Values accepted by `OzonFbpAcceptanceActStatus`. */
  FbpAcceptanceActStatus: {
    Error: "ERROR",
    StatusUnspecified: "STATUS_UNSPECIFIED",
    Processing: "PROCESSING",
    NotExist: "NOT_EXIST",
    Exist: "EXIST",
  },
  /** Values accepted by `OzonFbpArchiveDeclineCode`. */
  FbpArchiveDeclineCode: {
    DeclineReasonCodeUnspecified: "DECLINE_REASON_CODE_UNSPECIFIED",
    CannotCreateSupplyOnTpf: "CANNOT_CREATE_SUPPLY_ON_TPF",
    DropOffPointClosed: "DROP_OFF_POINT_CLOSED",
    CodeSupplyLost: "CODE_SUPPLY_LOST",
    CourierPickUpRejectedBySeller: "COURIER_PICK_UP_REJECTED_BY_SELLER",
    BondedDocumentsRejectedByWarehouse:
      "BONDED_DOCUMENTS_REJECTED_BY_WAREHOUSE",
  },
  /** Values accepted by `OzonFbpArchiveStatus`. */
  FbpArchiveStatus: {
    Completed: "COMPLETED",
    RejectedAtSupplyWarehouse: "REJECTED_AT_SUPPLY_WAREHOUSE",
    ArchiveStatusUnspecified: "ARCHIVE_STATUS_UNSPECIFIED",
    CancelledBySeller: "CANCELLED_BY_SELLER",
  },
  /** Values accepted by `OzonFbpArchiveSupplyType`. */
  FbpArchiveSupplyType: {
    PickUp: "PICK_UP",
    DropOff: "DROP_OFF",
    SupplyTypeUnspecified: "SUPPLY_TYPE_UNSPECIFIED",
    DirectBySeller: "DIRECT_BY_SELLER",
    DirectByTpl: "DIRECT_BY_TPL",
  },
  /** Values accepted by `OzonFbpBundleItemError`. */
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
  /** Values accepted by `OzonFbpCancellationErrorCode`. */
  FbpCancellationErrorCode: {
    CodeUnspecified: "CODE_UNSPECIFIED",
    NoResponseFrom3pf: "NO_RESPONSE_FROM_3PF",
    AcceptanceAlreadyStarted: "ACCEPTANCE_ALREADY_STARTED",
  },
  /** Values accepted by `OzonFbpCancellationStatus`. */
  FbpCancellationStatus: {
    StatusUnspecified: "STATUS_UNSPECIFIED",
    Confirmation: "CONFIRMATION",
    Canceled: "CANCELED",
    NotCanceled: "NOT_CANCELED",
  },
  /** Values accepted by `OzonFbpConsignmentNoteState`. */
  FbpConsignmentNoteState: {
    InProgress: "IN_PROGRESS",
    Failed: "FAILED",
    StateTypeUnspecified: "STATE_TYPE_UNSPECIFIED",
    Finished: "FINISHED",
  },
  /** Values accepted by `OzonFbpCreateAcceptanceActError`. */
  FbpCreateAcceptanceActError: {
    CreateActErrorReasonUnspecified: "CREATE_ACT_ERROR_REASON_UNSPECIFIED",
    InvalidOrderType: "INVALID_ORDER_TYPE",
  },
  /** Values accepted by `OzonFbpDayOfWeek`. */
  FbpDayOfWeek: {
    Monday: "MONDAY",
    Tuesday: "TUESDAY",
    Wednesday: "WEDNESDAY",
    Thursday: "THURSDAY",
    Friday: "FRIDAY",
    Saturday: "SATURDAY",
    Sunday: "SUNDAY",
    DayOfWeekUnspecified: "DAY_OF_WEEK_UNSPECIFIED",
  },
  /** Values accepted by `OzonFbpDraftStatus`. */
  FbpDraftStatus: {
    New: "NEW",
    DraftStatusUnspecified: "DRAFT_STATUS_UNSPECIFIED",
    SupplyVariantConfirmation: "SUPPLY_VARIANT_CONFIRMATION",
    SupplyNotConfirmed: "SUPPLY_NOT_CONFIRMED",
  },
  /** Values accepted by `OzonFbpDraftValidationError`. */
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
  /** Values accepted by `OzonFbpEmptyTimeslotsReason`. */
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
  /** Values accepted by `OzonFbpLabelGenerationState`. */
  FbpLabelGenerationState: {
    Unspecified: "UNSPECIFIED",
    InProgress: "IN_PROGRESS",
    Failed: "FAILED",
    Finished: "FINISHED",
  },
  /** Values accepted by `OzonFbpOrderAttentionReason`. */
  FbpOrderAttentionReason: {
    OrderAttentionTypeUnspecified: "ORDER_ATTENTION_TYPE_UNSPECIFIED",
    Old: "OLD",
    TimeSlotExpired: "TIME_SLOT_EXPIRED",
  },
  /** Values accepted by `OzonFbpOrderError`. */
  FbpOrderError: {
    OrderErrorTypeUnspecified: "ORDER_ERROR_TYPE_UNSPECIFIED",
    InvalidNumberOfPackageUnits: "INVALID_NUMBER_OF_PACKAGE_UNITS",
    MaximumNumberOfUniqueSkuReached: "MAXIMUM_NUMBER_OF_UNIQUE_SKU_REACHED",
    MaximumBundleVolumeReached: "MAXIMUM_BUNDLE_VOLUME_REACHED",
    BundleIdEmpty: "BUNDLE_ID_EMPTY",
    InvalidSupplyType: "INVALID_SUPPLY_TYPE",
    InvalidTimeslot: "INVALID_TIMESLOT",
    InvalidWhcNumber: "INVALID_WHC_NUMBER",
    DraftLocked: "DRAFT_LOCKED",
    DropOffPointsIsEmpty: "DROP_OFF_POINTS_IS_EMPTY",
    WarehouseIsEmpty: "WAREHOUSE_IS_EMPTY",
    BusinessFlowTypeIsEmpty: "BUSINESS_FLOW_TYPE_IS_EMPTY",
    WasCancelled: "WAS_CANCELLED",
    PickUpDetailsIsEmpty: "PICK_UP_DETAILS_IS_EMPTY",
    InvalidPickUpDetails: "INVALID_PICK_UP_DETAILS",
    InvalidPickUpDate: "INVALID_PICK_UP_DATE",
    InternalError: "INTERNAL_ERROR",
  },
  /** Values accepted by `OzonFbpOrderStatus`. */
  FbpOrderStatus: {
    ReadyToSupply: "READY_TO_SUPPLY",
    AcceptanceAtStorageWarehouse: "ACCEPTANCE_AT_STORAGE_WAREHOUSE",
    Cancelled: "CANCELLED",
    OrderStatusUnspecified: "ORDER_STATUS_UNSPECIFIED",
    FillingDeliveryDetails: "FILLING_DELIVERY_DETAILS",
    CourierAssigned: "COURIER_ASSIGNED",
    CourierPickedUp: "COURIER_PICKED_UP",
    AcceptanceAtDropOffPoint: "ACCEPTANCE_AT_DROP_OFF_POINT",
    InTransitToStorageWarehouse: "IN_TRANSIT_TO_STORAGE_WAREHOUSE",
  },
  /** Values accepted by `OzonFbpOrderTimeslotReserveFailure`. */
  FbpOrderTimeslotReserveFailure: {
    ReserveFailureTypeUnspecified: "RESERVE_FAILURE_TYPE_UNSPECIFIED",
    RequestValidation: "REQUEST_VALIDATION",
    InvalidReserve: "INVALID_RESERVE",
    LogisticsReason: "LOGISTICS_REASON",
    ScheduleReason: "SCHEDULE_REASON",
  },
  /** Values accepted by `OzonFbpOrderValidationErrorType`. */
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
  /** Values accepted by `OzonFbpPostingSortDirection`. */
  FbpPostingSortDirection: {
    Asc: "ASC",
    Desc: "DESC",
  },
  /** Values accepted by `OzonFbpTimeslotReserveFailure`. */
  FbpTimeslotReserveFailure: {
    ReserveFailureTypeUnspecified: "RESERVE_FAILURE_TYPE_UNSPECIFIED",
    RequestValidation: "REQUEST_VALIDATION",
    InvalidReserve: "INVALID_RESERVE",
    LogisticsReason: "LOGISTICS_REASON",
    ScheduleReason: "SCHEDULE_REASON",
    NoCapacity: "NO_CAPACITY",
  },
  /** Values accepted by `OzonFbsAssemblySortDirection`. */
  FbsAssemblySortDirection: {
    Asc: "ASC",
    Desc: "DESC",
  },
  /** Values accepted by `OzonFbsCarriageEttnStatus`. */
  FbsCarriageEttnStatus: {
    Success: "SUCCESS",
    Failed: "FAILED",
    NotUploaded: "NOT_UPLOADED",
    Processing: "PROCESSING",
  },
  /** Values accepted by `OzonFbsPostingErrorType`. */
  FbsPostingErrorType: {
    Unspecified: "UNSPECIFIED",
    SellerCancellation: "SELLER_CANCELLATION",
    SellerDelay: "SELLER_DELAY",
  },
  /** Values accepted by `OzonFbsPostingSortDirectionV4`. */
  FbsPostingSortDirection: {
    Asc: "ASC",
    Desc: "DESC",
  },
  /** Values accepted by `OzonFbsWarehouseFirstMileType`. */
  FbsWarehouseFirstMileType: {
    PickUp: "PICK_UP",
    DropOff: "DROP_OFF",
  },
  /** Values accepted by `OzonFbsWarehouseWorkingDay`. */
  FbsWarehouseWorkingDay: {
    Monday: "MONDAY",
    Tuesday: "TUESDAY",
    Wednesday: "WEDNESDAY",
    Thursday: "THURSDAY",
    Friday: "FRIDAY",
    Saturday: "SATURDAY",
    Sunday: "SUNDAY",
  },
  /** Values accepted by `OzonFinanceAccrualCategory`. */
  FinanceAccrualCategory: {
    Unspecified: "UNSPECIFIED",
    Posting: "POSTING",
    Item: "ITEM",
    NonItem: "NON_ITEM",
    ContainerFees: "CONTAINER_FEES",
  },
  /** Values accepted by `OzonFinanceTransactionTypeV3`. */
  FinanceTransactionType: {
    All: "all",
    Orders: "orders",
    Returns: "returns",
    Services: "services",
    Compensation: "compensation",
    TransferDelivery: "transferDelivery",
    Other: "other",
  },
  /** Values accepted by `OzonFirstMileType`. */
  FirstMileType: {
    DropOff: "DropOff",
    Pickup: "Pickup",
  },
  /** Values accepted by `OzonLanguage`. */
  Language: {
    Default: "DEFAULT",
    Ru: "RU",
    En: "EN",
    Tr: "TR",
    ZhHans: "ZH_HANS",
  },
  /** Values accepted by `OzonLogisticsSchema`. */
  LogisticsSchema: {
    Fbo: "FBO",
    Fbs: "FBS",
    Unknown: "UNKNOWN",
  },
  /** Values accepted by `OzonNotificationCheckErrorType`. */
  NotificationCheckErrorType: {
    RequestError: "REQUEST_ERROR",
    RequestTimeout: "REQUEST_TIMEOUT",
    ServerFault: "SERVER_FAULT",
    StatusCodeNotOk: "STATUS_CODE_NOT_OK",
    EmptyBody: "EMPTY_BODY",
    InvalidBody: "INVALID_BODY",
    InvalidJson: "INVALID_JSON",
    WrongResultField: "WRONG_RESULT_FIELD",
    WrongResultTimeField: "WRONG_RESULT_TIME_FIELD",
  },
  /** Values accepted by `OzonNotificationType`. */
  NotificationType: {
    TypeNewMessage: "TYPE_NEW_MESSAGE",
    TypeUpdateMessage: "TYPE_UPDATE_MESSAGE",
    TypeMessageRead: "TYPE_MESSAGE_READ",
    TypeChatClosed: "TYPE_CHAT_CLOSED",
    TypeNewPosting: "TYPE_NEW_POSTING",
    TypePostingCancelled: "TYPE_POSTING_CANCELLED",
    TypeStateChanged: "TYPE_STATE_CHANGED",
    TypeDeliveryDateChanged: "TYPE_DELIVERY_DATE_CHANGED",
    TypeCutoffDateChanged: "TYPE_CUTOFF_DATE_CHANGED",
    TypeCreateItem: "TYPE_CREATE_ITEM",
    TypeUpdateItem: "TYPE_UPDATE_ITEM",
    TypeCreateOrUpdateItem: "TYPE_CREATE_OR_UPDATE_ITEM",
    TypeStocksChanged: "TYPE_STOCKS_CHANGED",
    TypeFboPostingNew: "TYPE_FBO_POSTING_NEW",
    TypeFboPostingCancelled: "TYPE_FBO_POSTING_CANCELLED",
    TypeFboPostingStateChanged: "TYPE_FBO_POSTING_STATE_CHANGED",
    TypeFboPostingDeliveryDateChanged: "TYPE_FBO_POSTING_DELIVERY_DATE_CHANGED",
    TypeFboStocksChanged: "TYPE_FBO_STOCKS_CHANGED",
    TypeOrderNew: "TYPE_ORDER_NEW",
    TypeOrderCancelled: "TYPE_ORDER_CANCELLED",
    TypeOrderStateChanged: "TYPE_ORDER_STATE_CHANGED",
  },
  /** Values accepted by `OzonOrderDeliverySchema`. */
  OrderDeliverySchema: {
    Mix: "MIX",
    Fbo: "FBO",
    Fbs: "FBS",
  },
  /** Values accepted by `OzonOrderDeliveryType`. */
  OrderDeliveryType: {
    Courier: "COURIER",
    Pvz: "PVZ",
    Postamat: "POSTAMAT",
  },
  /** Values accepted by `OzonProductAttributesVisibility`. */
  ProductAttributesVisibility: {
    All: "ALL",
    Visible: "VISIBLE",
    Invisible: "INVISIBLE",
    EmptyStock: "EMPTY_STOCK",
    NotModerated: "NOT_MODERATED",
    Moderated: "MODERATED",
    Disabled: "DISABLED",
    StateFailed: "STATE_FAILED",
    ReadyToSupply: "READY_TO_SUPPLY",
    ValidationStatePending: "VALIDATION_STATE_PENDING",
    ValidationStateFail: "VALIDATION_STATE_FAIL",
    ValidationStateSuccess: "VALIDATION_STATE_SUCCESS",
    ToSupply: "TO_SUPPLY",
    InSale: "IN_SALE",
    RemovedFromSale: "REMOVED_FROM_SALE",
    Overpriced: "OVERPRICED",
    CriticallyOverpriced: "CRITICALLY_OVERPRICED",
    EmptyBarcode: "EMPTY_BARCODE",
    BarcodeExists: "BARCODE_EXISTS",
    Quarantine: "QUARANTINE",
    Archived: "ARCHIVED",
    OverpricedWithStock: "OVERPRICED_WITH_STOCK",
    PartialApproved: "PARTIAL_APPROVED",
    AutoArchived: "AUTO_ARCHIVED",
    ManualArchived: "MANUAL_ARCHIVED",
    SeasonalAutoArchived: "SEASONAL_AUTO_ARCHIVED",
    VisibleWithFboStock: "VISIBLE_WITH_FBO_STOCK",
  },
  /** Values accepted by `OzonProductImportPromotionOperation`. */
  ProductImportPromotionOperation: {
    Unknown: "UNKNOWN",
    Enable: "ENABLE",
    Disable: "DISABLE",
  },
  /** Values accepted by `OzonProductImportServiceType`. */
  ProductImportServiceType: {
    IsCodeService: "IS_CODE_SERVICE",
    IsNoCodeService: "IS_NO_CODE_SERVICE",
  },
  /** Values accepted by `OzonProductInfoErrorLevel`. */
  ProductInfoErrorLevel: {
    ErrorLevelUnspecified: "ERROR_LEVEL_UNSPECIFIED",
    ErrorLevelError: "ERROR_LEVEL_ERROR",
    ErrorLevelWarning: "ERROR_LEVEL_WARNING",
    ErrorLevelInternal: "ERROR_LEVEL_INTERNAL",
  },
  /** Values accepted by `OzonProductInfoPriceIndexColor`. */
  ProductInfoPriceIndexColor: {
    ColorIndexUnspecified: "COLOR_INDEX_UNSPECIFIED",
    ColorIndexWithoutIndex: "COLOR_INDEX_WITHOUT_INDEX",
    ColorIndexSuper: "COLOR_INDEX_SUPER",
    ColorIndexGreen: "COLOR_INDEX_GREEN",
    ColorIndexYellow: "COLOR_INDEX_YELLOW",
    ColorIndexRed: "COLOR_INDEX_RED",
  },
  /** Values accepted by `OzonProductInfoPromotionType`. */
  ProductInfoPromotionType: {
    Unspecified: "UNSPECIFIED",
    ReviewsPromo: "REVIEWS_PROMO",
  },
  /** Values accepted by `OzonProductInfoShipmentType`. */
  ProductInfoShipmentType: {
    ShipmentTypeUnspecified: "SHIPMENT_TYPE_UNSPECIFIED",
    ShipmentTypeGeneral: "SHIPMENT_TYPE_GENERAL",
    ShipmentTypeBox: "SHIPMENT_TYPE_BOX",
    ShipmentTypePallet: "SHIPMENT_TYPE_PALLET",
  },
  /** Values accepted by `OzonProductListVisibility`. */
  ProductListVisibility: {
    All: "ALL",
    Visible: "VISIBLE",
    Invisible: "INVISIBLE",
    EmptyStock: "EMPTY_STOCK",
    NotModerated: "NOT_MODERATED",
    Moderated: "MODERATED",
    Disabled: "DISABLED",
    StateFailed: "STATE_FAILED",
    ReadyToSupply: "READY_TO_SUPPLY",
    ValidationStatePending: "VALIDATION_STATE_PENDING",
    ValidationStateFail: "VALIDATION_STATE_FAIL",
    ValidationStateSuccess: "VALIDATION_STATE_SUCCESS",
    ToSupply: "TO_SUPPLY",
    InSale: "IN_SALE",
    RemovedFromSale: "REMOVED_FROM_SALE",
    Overpriced: "OVERPRICED",
    CriticallyOverpriced: "CRITICALLY_OVERPRICED",
    EmptyBarcode: "EMPTY_BARCODE",
    BarcodeExists: "BARCODE_EXISTS",
    Quarantine: "QUARANTINE",
    Archived: "ARCHIVED",
    OverpricedWithStock: "OVERPRICED_WITH_STOCK",
    PartialApproved: "PARTIAL_APPROVED",
    AutoArchived: "AUTO_ARCHIVED",
    ManualArchived: "MANUAL_ARCHIVED",
    SeasonalAutoArchived: "SEASONAL_AUTO_ARCHIVED",
    VisibleWithFboStock: "VISIBLE_WITH_FBO_STOCK",
  },
  /** Values accepted by `OzonProductOperationLimitType`. */
  ProductOperationLimitType: {
    Unspecified: "UNSPECIFIED",
    RateLimitPerMinute: "RATE_LIMIT_PER_MINUTE",
  },
  /** Values accepted by `OzonProductPlacement`. */
  ProductPlacement: {
    Unspecified: "UNSPECIFIED",
    Ozon: "OZON",
    None: "NONE",
    Select: "SELECT",
    OzonSelect: "OZON_SELECT",
  },
  /** Values accepted by `OzonProductPlacementZone`. */
  ProductPlacementZone: {
    Unspecified: "UNSPECIFIED",
    ClosedZone: "CLOSED_ZONE",
    Sort: "SORT",
    Oversize: "OVERSIZE",
    Jewelry: "JEWELRY",
    Unresolved: "UNRESOLVED",
    Products: "PRODUCTS",
    NonSort: "NON_SORT",
    DangerousGoods: "DANGEROUS_GOODS",
  },
  /** Values accepted by `OzonProductPriceIndexColor`. */
  ProductPriceIndexColor: {
    Super: "SUPER",
    WithoutIndex: "WITHOUT_INDEX",
    Green: "GREEN",
    Yellow: "YELLOW",
    Red: "RED",
  },
  /** Values accepted by `OzonProductPriceToggle`. */
  ProductPriceToggle: {
    Disabled: "DISABLED",
    Unknown: "UNKNOWN",
    Enabled: "ENABLED",
  },
  /** Values accepted by `OzonProductPriceVisibility`. */
  ProductPriceVisibility: {
    All: "ALL",
    Visible: "VISIBLE",
    Invisible: "INVISIBLE",
    EmptyStock: "EMPTY_STOCK",
    NotModerated: "NOT_MODERATED",
    Moderated: "MODERATED",
    Disabled: "DISABLED",
    StateFailed: "STATE_FAILED",
    ReadyToSupply: "READY_TO_SUPPLY",
    ValidationStatePending: "VALIDATION_STATE_PENDING",
    ValidationStateFail: "VALIDATION_STATE_FAIL",
    ValidationStateSuccess: "VALIDATION_STATE_SUCCESS",
    ToSupply: "TO_SUPPLY",
    InSale: "IN_SALE",
    RemovedFromSale: "REMOVED_FROM_SALE",
    Overpriced: "OVERPRICED",
    CriticallyOverpriced: "CRITICALLY_OVERPRICED",
    EmptyBarcode: "EMPTY_BARCODE",
    BarcodeExists: "BARCODE_EXISTS",
    Quarantine: "QUARANTINE",
    Archived: "ARCHIVED",
    OverpricedWithStock: "OVERPRICED_WITH_STOCK",
    PartialApproved: "PARTIAL_APPROVED",
    AutoArchived: "AUTO_ARCHIVED",
    ManualArchived: "MANUAL_ARCHIVED",
    SeasonalAutoArchived: "SEASONAL_AUTO_ARCHIVED",
    VisibleWithFboStock: "VISIBLE_WITH_FBO_STOCK",
  },
  /** Values accepted by `OzonProductReportVisibility`. */
  ProductReportVisibility: {
    All: "ALL",
    ValidationStateFail: "VALIDATION_STATE_FAIL",
    ToSupply: "TO_SUPPLY",
    InSale: "IN_SALE",
    RemovedFromSale: "REMOVED_FROM_SALE",
    Archived: "ARCHIVED",
    PartialApproved: "PARTIAL_APPROVED",
    AutoArchived: "AUTO_ARCHIVED",
    ManualArchived: "MANUAL_ARCHIVED",
    ImageAbsent: "IMAGE_ABSENT",
  },
  /** Values accepted by `OzonProductShowcase`. */
  ProductShowcase: {
    Unspecified: "UNSPECIFIED",
    Ozon: "OZON",
    Select: "SELECT",
  },
  /** Values accepted by `OzonProductStockShipmentType`. */
  ProductStockShipmentType: {
    ShipmentTypeGeneral: "SHIPMENT_TYPE_GENERAL",
    ShipmentTypeBox: "SHIPMENT_TYPE_BOX",
    ShipmentTypePallet: "SHIPMENT_TYPE_PALLET",
  },
  /** Values accepted by `OzonProductStockVisibility`. */
  ProductStockVisibility: {
    All: "ALL",
    Visible: "VISIBLE",
    Invisible: "INVISIBLE",
    EmptyStock: "EMPTY_STOCK",
    NotModerated: "NOT_MODERATED",
    Moderated: "MODERATED",
    Disabled: "DISABLED",
    StateFailed: "STATE_FAILED",
    ReadyToSupply: "READY_TO_SUPPLY",
    ValidationStatePending: "VALIDATION_STATE_PENDING",
    ValidationStateFail: "VALIDATION_STATE_FAIL",
    ValidationStateSuccess: "VALIDATION_STATE_SUCCESS",
    ToSupply: "TO_SUPPLY",
    InSale: "IN_SALE",
    RemovedFromSale: "REMOVED_FROM_SALE",
    Overpriced: "OVERPRICED",
    CriticallyOverpriced: "CRITICALLY_OVERPRICED",
    EmptyBarcode: "EMPTY_BARCODE",
    BarcodeExists: "BARCODE_EXISTS",
    Quarantine: "QUARANTINE",
    Archived: "ARCHIVED",
    OverpricedWithStock: "OVERPRICED_WITH_STOCK",
    PartialApproved: "PARTIAL_APPROVED",
    AutoArchived: "AUTO_ARCHIVED",
    ManualArchived: "MANUAL_ARCHIVED",
    SeasonalAutoArchived: "SEASONAL_AUTO_ARCHIVED",
    VisibleWithFboStock: "VISIBLE_WITH_FBO_STOCK",
    Banned: "BANNED",
  },
  /** Values accepted by `OzonQuantProductVisibility`. */
  QuantProductVisibility: {
    All: "ALL",
    Visible: "VISIBLE",
    Invisible: "INVISIBLE",
    EmptyStock: "EMPTY_STOCK",
    NotModerated: "NOT_MODERATED",
    Moderated: "MODERATED",
    Disabled: "DISABLED",
    StateFailed: "STATE_FAILED",
    ReadyToSupply: "READY_TO_SUPPLY",
    ValidationStatePending: "VALIDATION_STATE_PENDING",
    ValidationStateFail: "VALIDATION_STATE_FAIL",
    ValidationStateSuccess: "VALIDATION_STATE_SUCCESS",
    ToSupply: "TO_SUPPLY",
    InSale: "IN_SALE",
    RemovedFromSale: "REMOVED_FROM_SALE",
    Overpriced: "OVERPRICED",
    CriticallyOverpriced: "CRITICALLY_OVERPRICED",
    EmptyBarcode: "EMPTY_BARCODE",
    BarcodeExists: "BARCODE_EXISTS",
    Quarantine: "QUARANTINE",
    Archived: "ARCHIVED",
    OverpricedWithStock: "OVERPRICED_WITH_STOCK",
    PartialApproved: "PARTIAL_APPROVED",
  },
  /** Values accepted by `OzonQuestionAnswerPublicationStatus`. */
  QuestionAnswerPublicationStatus: {
    Published: "PUBLISHED",
    AwaitingModeration: "AWAITING_MODERATION",
    ModerationFailed: "MODERATION_FAILED",
    Duplicate: "DUPLICATE",
  },
  /** Values accepted by `OzonQuestionStatus`. */
  QuestionStatus: {
    All: "ALL",
    New: "NEW",
    Processed: "PROCESSED",
    Viewed: "VIEWED",
    Unprocessed: "UNPROCESSED",
  },
  /** Values accepted by `OzonReceiptOperationTypeV1`. */
  ReceiptOperationType: {
    Unspecified: "UNSPECIFIED",
    Commodity: "COMMODITY",
  },
  /** Values accepted by `OzonReceiptTypeV1`. */
  ReceiptType: {
    Unspecified: "UNSPECIFIED",
    Incoming: "INCOMING",
    Refund: "REFUND",
  },
  /** Values accepted by `OzonReturnPointType`. */
  ReturnPointType: {
    Unspecified: "UNSPECIFIED",
    Pvz: "PVZ",
    Ppz: "PPZ",
    Sc: "SC",
  },
  /** Values accepted by `OzonReturnPointWorkingDay`. */
  ReturnPointWorkingDay: {
    Unspecified: "UNSPECIFIED",
    Monday: "MONDAY",
    Tuesday: "TUESDAY",
    Wednesday: "WEDNESDAY",
    Thursday: "THURSDAY",
    Friday: "FRIDAY",
    Saturday: "SATURDAY",
    Sunday: "SUNDAY",
  },
  /** Values accepted by `OzonReturnReportStatus`. */
  ReturnReportStatus: {
    DisputeOpened: "DisputeOpened",
    OnSellerApproval: "OnSellerApproval",
    ArrivedAtReturnPlace: "ArrivedAtReturnPlace",
    OnSellerClarification: "OnSellerClarification",
    OnSellerClarificationAfterPartialCompensation:
      "OnSellerClarificationAfterPartialCompensation",
    OfferedPartialCompensation: "OfferedPartialCompensation",
    ReturnMoneyApproved: "ReturnMoneyApproved",
    PartialCompensationReturned: "PartialCompensationReturned",
    CancelledDisputeNotOpen: "CancelledDisputeNotOpen",
    Rejected: "Rejected",
    CrmRejected: "CrmRejected",
    Cancelled: "Cancelled",
    Approved: "Approved",
    ApprovedByOzon: "ApprovedByOzon",
    ReceivedBySeller: "ReceivedBySeller",
    MovingToSeller: "MovingToSeller",
    ReturnCompensated: "ReturnCompensated",
    ReturningToSellerByCourier: "ReturningToSellerByCourier",
    Utilizing: "Utilizing",
    Utilized: "Utilized",
    MoneyReturned: "MoneyReturned",
    PartialCompensationInProcess: "PartialCompensationInProcess",
    DisputeYouOpened: "DisputeYouOpened",
    CompensationRejected: "CompensationRejected",
    DisputeOpening: "DisputeOpening",
    CompensationOffered: "CompensationOffered",
    WaitingCompensation: "WaitingCompensation",
    SendingError: "SendingError",
    CompensationRejectedBySla: "CompensationRejectedBySla",
    CompensationRejectedBySeller: "CompensationRejectedBySeller",
    MovingToOzon: "MovingToOzon",
    ReturnedToOzon: "ReturnedToOzon",
    MoneyReturnedBySystem: "MoneyReturnedBySystem",
    WaitingShipment: "WaitingShipment",
  },
  /** Values accepted by `SearchQueriesSortDirection`. */
  SearchQueriesSortDirection: {
    Asc: "ASC",
    Desc: "DESC",
  },
  /** Values accepted by `SearchQueriesTextSortBy`. */
  SearchQueriesTextSortBy: {
    ClientCount: "CLIENT_COUNT",
    AddToCart: "ADD_TO_CART",
    ConversionToCart: "CONVERSION_TO_CART",
    AvgPrice: "AVG_PRICE",
  },
  /** Values accepted by `OzonSelectPermission`. */
  SelectPermission: {
    Unspecified: "UNSPECIFIED",
    Restricted: "RESTRICTED",
    Allowed: "ALLOWED",
  },
  /** Values accepted by `OzonSellerActionCurrency`. */
  SellerActionCurrency: {
    Rub: "RUB",
    Byn: "BYN",
    Kzt: "KZT",
    Eur: "EUR",
    Usd: "USD",
    Cny: "CNY",
  },
  /** Values accepted by `OzonSellerActionDiscountType`. */
  SellerActionDiscountType: {
    Percent: "PERCENT",
    Currency: "CURRENCY",
  },
  /** Values accepted by `OzonSellerActionQuantType`. */
  SellerActionQuantType: {
    Unspecified: "UNSPECIFIED",
    Box: "BOX",
    Pallet: "PALLET",
    General: "GENERAL",
  },
  /** Values accepted by `OzonSellerActionStatus`. */
  SellerActionStatus: {
    Active: "ACTIVE",
    Ended: "ENDED",
    Planned: "PLANNED",
    Paused: "PAUSED",
  },
  /** Values accepted by `OzonSellerActionType`. */
  SellerActionType: {
    Discount: "DISCOUNT",
    VoucherDiscount: "VOUCHER_DISCOUNT",
    DiscountWithCondition: "DISCOUNT_WITH_CONDITION",
    Installment: "INSTALLMENT",
    IndividualDiscountByProducts: "INDIVIDUAL_DISCOUNT_BY_PRODUCTS",
    OzonAccountDiscount: "OZON_ACCOUNT_DISCOUNT",
    MultiLevelDiscountOnAmount: "MULTI_LEVEL_DISCOUNT_ON_AMOUNT",
  },
  /** Values accepted by `OzonSellerRatingStatus`. */
  SellerRatingStatus: {
    Unknown: "UNKNOWN",
    Ok: "OK",
    Warning: "WARNING",
    Critical: "CRITICAL",
  },
  /** Values accepted by `OzonSellerRatingType`. */
  SellerRatingType: {
    Unknown: "UNKNOWN",
    Index: "INDEX",
    Percent: "PERCENT",
    Time: "TIME",
    Ratio: "RATIO",
    ReviewScore: "REVIEW_SCORE",
    Count: "COUNT",
  },
  /** Values accepted by `OzonStairwayDiscountStatus`. */
  StairwayDiscountStatus: {
    Success: "SUCCESS",
    Error: "ERROR",
    InProcess: "IN_PROCESS",
  },
  /** Values accepted by `OzonSubscriptionType`. */
  SubscriptionType: {
    Unspecified: "UNSPECIFIED",
    Unknown: "UNKNOWN",
    Premium: "PREMIUM",
    PremiumLite: "PREMIUM_LITE",
    PremiumPlus: "PREMIUM_PLUS",
    PremiumPro: "PREMIUM_PRO",
  },
  /** Values accepted by `OzonSupplyCancelError`. */
  SupplyCancelError: {
    InvalidSupplyState: "INVALID_SUPPLY_STATE",
    SupplyDoesNotBelongToCompany: "SUPPLY_DOES_NOT_BELONG_TO_COMPANY",
    OtherAsynchronousOperationInProgress:
      "OTHER_ASYNCHRONOUS_OPERATION_IN_PROGRESS",
    SupplyDoesNotBelongToContractor: "SUPPLY_DOES_NOT_BELONG_TO_CONTRACTOR",
    SupplyDoesNotBelongToOrder: "SUPPLY_DOES_NOT_BELONG_TO_ORDER",
    SupplyBelongsToVirtualOrder: "SUPPLY_BELONGS_TO_VIRTUAL_ORDER",
  },
  /** Values accepted by `OzonSupplyCancellationForbiddenReason`. */
  SupplyCancellationForbiddenReason: {
    Unspecified: "UNSPECIFIED",
    Undefined: "UNDEFINED",
    InvalidSupplyState: "INVALID_SUPPLY_STATE",
    SupplyIsVirtual: "SUPPLY_IS_VIRTUAL",
    SupplyHasActiveUtd: "SUPPLY_HAS_ACTIVE_UTD",
    SupplyDoesNotBelongToCompany: "SUPPLY_DOES_NOT_BELONG_TO_COMPANY",
    PickupSupplyIsLockedDown: "PICKUP_SUPPLY_IS_LOCKED_DOWN",
  },
  /** Values accepted by `OzonSupplyClusterType`. */
  SupplyClusterType: {
    ClusterTypeOzon: "CLUSTER_TYPE_OZON",
    ClusterTypeCis: "CLUSTER_TYPE_CIS",
  },
  /** Values accepted by `OzonSupplyClusterWarehouseType`. */
  SupplyClusterWarehouseType: {
    ExpressDarkStore: "EXPRESS_DARK_STORE",
    FullFillment: "FULL_FILLMENT",
    CrossDock: "CROSS_DOCK",
    SortingCenter: "SORTING_CENTER",
    DistributionCenter: "DISTRIBUTION_CENTER",
    OrdersReceivingPoint: "ORDERS_RECEIVING_POINT",
  },
  /** Values accepted by `OzonSupplyContentEditForbiddenReason`. */
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
  /** Values accepted by `OzonSupplyContentEditingError`. */
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
  /** Values accepted by `OzonSupplyContentRejectionReason`. */
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
  /** Values accepted by `OzonSupplyContentRestrictionReason`. */
  SupplyContentRestrictionReason: {
    Unknown: "UNKNOWN",
    SkuHasNoSales: "SKU_HAS_NO_SALES",
    SkuHasQuantityLimit: "SKU_HAS_QUANTITY_LIMIT",
  },
  /** Values accepted by `OzonSupplyContentUpdateError`. */
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
  /** Values accepted by `OzonSupplyContentUpdateStatus`. */
  SupplyContentUpdateStatus: {
    InProgress: "IN_PROGRESS",
    Success: "SUCCESS",
    Error: "ERROR",
  },
  /** Values accepted by `OzonSupplyDraftDeletionSkuMode`. */
  SupplyDraftDeletionSkuMode: {
    Full: "FULL",
    Partial: "PARTIAL",
  },
  /** Values accepted by `OzonSupplyDraftDeliveryType`. */
  SupplyDraftDeliveryType: {
    Dropoff: "DROPOFF",
    Pickup: "PICKUP",
  },
  /** Values accepted by `OzonSupplyDraftDropOffWarehouseType`. */
  SupplyDraftDropOffWarehouseType: {
    FullFillment: "FULL_FILLMENT",
    CrossDock: "CROSS_DOCK",
    SortingCenter: "SORTING_CENTER",
    OrdersReceivingPoint: "ORDERS_RECEIVING_POINT",
    DeliveryPoint: "DELIVERY_POINT",
  },
  /** Values accepted by `OzonSupplyDraftErrorMessage`. */
  SupplyDraftErrorMessage: {
    Unspecified: "UNSPECIFIED",
    Undefined: "UNDEFINED",
    EmptyItemsList: "EMPTY_ITEMS_LIST",
    ItemsCountMoreThanMax: "ITEMS_COUNT_MORE_THAN_MAX",
    UnknownClusterIds: "UNKNOWN_CLUSTER_IDS",
    ItemsValidation: "ITEMS_VALIDATION",
    DropOffPointDoesNotExist: "DROP_OFF_POINT_DOES_NOT_EXIST",
    DropOffPointHasNoTimeslots: "DROP_OFF_POINT_HAS_NO_TIMESLOTS",
    TotalVolumeInLitresInvalid: "TOTAL_VOLUME_IN_LITRES_INVALID",
    SkuDistributionRequiredButNotPossible:
      "SKU_DISTRIBUTION_REQUIRED_BUT_NOT_POSSIBLE",
    CrossDockInDeliveryPointDisabledForSeller:
      "CROSS_DOCK_IN_DELIVERY_POINT_DISABLED_FOR_SELLER",
    DuplicateSkusInRequest: "DUPLICATE_SKUS_IN_REQUEST",
    CanNotCreateDraft: "CAN_NOT_CREATE_DRAFT",
    DraftTotalsInvalidError: "DRAFT_TOTALS_INVALID_ERROR",
    CanNotStartCalculation: "CAN_NOT_START_CALCULATION",
    PickupIsNotAvailable: "PICKUP_IS_NOT_AVAILABLE",
    DropOffNotCompatibleWithPickup: "DROP_OFF_NOT_COMPATIBLE_WITH_PICKUP",
  },
  /** Values accepted by `OzonSupplyDraftErrorReason`. */
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
  /** Values accepted by `OzonSupplyDraftInfoErrorReason`. */
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
  /** Values accepted by `OzonSupplyDraftInfoStatus`. */
  SupplyDraftInfoStatus: {
    Unspecified: "UNSPECIFIED",
    InProgress: "IN_PROGRESS",
    Success: "SUCCESS",
    Failed: "FAILED",
  },
  /** Values accepted by `OzonSupplyDraftRejectedItemReason`. */
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
  /** Values accepted by `OzonSupplyDraftTimeslotErrorReason`. */
  SupplyDraftTimeslotErrorReason: {
    Unspecified: "UNSPECIFIED",
    Undefined: "UNDEFINED",
    InvalidClustersCount: "INVALID_CLUSTERS_COUNT",
    RequestedPeriodMoreThanMax: "REQUESTED_PERIOD_MORE_THAN_MAX",
  },
  /** Values accepted by `OzonSupplyDraftType`. */
  SupplyDraftType: {
    Crossdock: "CROSSDOCK",
    Direct: "DIRECT",
    MultiCluster: "MULTI_CLUSTER",
  },
  /** Values accepted by `OzonSupplyDraftWarehouseAvailabilityState`. */
  SupplyDraftWarehouseAvailabilityState: {
    Unspecified: "UNSPECIFIED",
    FullAvailable: "FULL_AVAILABLE",
    PartialAvailable: "PARTIAL_AVAILABLE",
    NotAvailable: "NOT_AVAILABLE",
  },
  /** Values accepted by `OzonSupplyDraftWarehouseInvalidReason`. */
  SupplyDraftWarehouseInvalidReason: {
    Unspecified: "UNSPECIFIED",
    NoReason: "NO_REASON",
    PartialMatrixAvailable: "PARTIAL_MATRIX_AVAILABLE",
    NotAvailableMatrix: "NOT_AVAILABLE_MATRIX",
    NotAvailableRank: "NOT_AVAILABLE_RANK",
    NotAvailableRoute: "NOT_AVAILABLE_ROUTE",
    NotAvailableTimeslotForDropOffPoint:
      "NOT_AVAILABLE_TIMESLOT_FOR_DROP_OFF_POINT",
    NotAvailableTimeslotForStorageWarehouse:
      "NOT_AVAILABLE_TIMESLOT_FOR_STORAGE_WAREHOUSE",
    NotAvailableTimeslotForBothWarehouses:
      "NOT_AVAILABLE_TIMESLOT_FOR_BOTH_WAREHOUSES",
    NotAvailableTimeslotNoReason: "NOT_AVAILABLE_TIMESLOT_NO_REASON",
  },
  /** Values accepted by `OzonSupplyDraftWarehouseTag`. */
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
  /** Values accepted by `OzonSupplyOrderActAcceptanceStatus`. */
  SupplyOrderActAcceptanceStatus: {
    InProgress: "IN_PROGRESS",
    Success: "SUCCESS",
    Failed: "FAILED",
  },
  /** Values accepted by `OzonSupplyOrderActAcceptErrorReason`. */
  SupplyOrderActAcceptErrorReason: {
    Unspecified: "UNSPECIFIED",
    InvalidState: "INVALID_STATE",
    SupplyWithUtd: "SUPPLY_WITH_UTD",
  },
  /** Values accepted by `OzonSupplyOrderActState`. */
  SupplyOrderActState: {
    Unspecified: "UNSPECIFIED",
    AwaitingApprovalBySeller: "AWAITING_APPROVAL_BY_SELLER",
    RejectBySeller: "REJECT_BY_SELLER",
    AgreementWithSeller: "AGREEMENT_WITH_SELLER",
    Accepted: "ACCEPTED",
  },
  /** Values accepted by `OzonSupplyOrderActType`. */
  SupplyOrderActType: {
    Unspecified: "UNSPECIFIED",
    Surplus: "SURPLUS",
    Acceptance: "ACCEPTANCE",
    Defect: "DEFECT",
    Shortcoming: "SHORTCOMING",
  },
  /** Values accepted by `OzonSupplyOrderBundleSfboAttribute`. */
  SupplyOrderBundleSfboAttribute: {
    ItemSfboAttributeNone: "ITEM_SFBO_ATTRIBUTE_NONE",
    ItemSfboAttributeSuperFbo: "ITEM_SFBO_ATTRIBUTE_SUPER_FBO",
    ItemSfboAttributeAntiFbo: "ITEM_SFBO_ATTRIBUTE_ANTI_FBO",
  },
  /** Values accepted by `OzonSupplyOrderBundleShipmentType`. */
  SupplyOrderBundleShipmentType: {
    BundleItemShipmentTypeGeneral: "BUNDLE_ITEM_SHIPMENT_TYPE_GENERAL",
    BundleItemShipmentTypeBox: "BUNDLE_ITEM_SHIPMENT_TYPE_BOX",
    BundleItemShipmentTypePallet: "BUNDLE_ITEM_SHIPMENT_TYPE_PALLET",
  },
  /** Values accepted by `OzonSupplyOrderBundleSortField`. */
  SupplyOrderBundleSortField: {
    Sku: "SKU",
    Name: "NAME",
    Quantity: "QUANTITY",
    TotalVolumeInLitres: "TOTAL_VOLUME_IN_LITRES",
  },
  /** Values accepted by `OzonSupplyOrderBundleTag`. */
  SupplyOrderBundleTag: {
    Jewelry: "JEWELRY",
    EvsdRequired: "EVSD_REQUIRED",
    MarkingRequired: "MARKING_REQUIRED",
    MarkingPossible: "MARKING_POSSIBLE",
    Traceable: "TRACEABLE",
    EttnRequired: "ETTN_REQUIRED",
    Undefined: "UNDEFINED",
  },
  /** Values accepted by `OzonSupplyOrderCancelError`. */
  SupplyOrderCancelError: {
    InvalidOrderState: "INVALID_ORDER_STATE",
    OrderDoesNotBelongToCompany: "ORDER_DOES_NOT_BELONG_TO_COMPANY",
    OrderIsVirtual: "ORDER_IS_VIRTUAL",
    OrderDoesNotBelongToContractor: "ORDER_DOES_NOT_BELONG_TO_CONTRACTOR",
    OtherAsynchronousOperationInProgress:
      "OTHER_ASYNCHRONOUS_OPERATION_IN_PROGRESS",
  },
  /** Values accepted by `OzonSupplyOrderCancelStatus`. */
  SupplyOrderCancelStatus: {
    InProgress: "IN_PROGRESS",
    Success: "SUCCESS",
    Error: "ERROR",
  },
  /** Values accepted by `OzonSupplyOrderListSortBy`. */
  SupplyOrderListSortBy: {
    OrderCreation: "ORDER_CREATION",
    OrderStateUpdatedAt: "ORDER_STATE_UPDATED_AT",
    TimeslotFromUtc: "TIMESLOT_FROM_UTC",
    TimeslotFromLocal: "TIMESLOT_FROM_LOCAL",
  },
  /** Values accepted by `OzonSupplyOrderListSortDirection`. */
  SupplyOrderListSortDirection: {
    Asc: "ASC",
    Desc: "DESC",
  },
  /** Values accepted by `OzonSupplyOrderPassError`. */
  SupplyOrderPassError: {
    SetVehicleErrorUnspecified: "SET_VEHICLE_ERROR_UNSPECIFIED",
    SetVehicleErrorInvalidOrderState: "SET_VEHICLE_ERROR_INVALID_ORDER_STATE",
    SetVehicleErrorVehicleNotRequired: "SET_VEHICLE_ERROR_VEHICLE_NOT_REQUIRED",
    SetVehicleErrorOrderNotBelongContractor:
      "SET_VEHICLE_ERROR_ORDER_NOT_BELONG_CONTRACTOR",
    SetVehicleErrorOrderNotBelongCompany:
      "SET_VEHICLE_ERROR_ORDER_NOT_BELONG_COMPANY",
  },
  /** Values accepted by `OzonSupplyOrderPassOperationResult`. */
  SupplyOrderPassOperationResult: {
    Unknown: "Unknown",
    Success: "Success",
    InProgress: "InProgress",
    Failed: "Failed",
  },
  /** Values accepted by `OzonSupplyOrderPlacementZone`. */
  SupplyOrderPlacementZone: {
    Unspecified: "UNSPECIFIED",
    ClosedZone: "CLOSED_ZONE",
    Sort: "SORT",
    Oversize: "OVERSIZE",
    Jewelry: "JEWELRY",
    Unresolved: "UNRESOLVED",
    Products: "PRODUCTS",
    NonSort: "NON_SORT",
    DangerousGoods: "DANGEROUS_GOODS",
  },
  /** Values accepted by `OzonSupplyOrderState`. */
  SupplyOrderState: {
    Unspecified: "UNSPECIFIED",
    ReadyToSupply: "READY_TO_SUPPLY",
    DataFilling: "DATA_FILLING",
    AcceptedAtSupplyWarehouse: "ACCEPTED_AT_SUPPLY_WAREHOUSE",
    InTransit: "IN_TRANSIT",
    AcceptanceAtStorageWarehouse: "ACCEPTANCE_AT_STORAGE_WAREHOUSE",
    ReportsConfirmationAwaiting: "REPORTS_CONFIRMATION_AWAITING",
    ReportRejected: "REPORT_REJECTED",
    Completed: "COMPLETED",
    RejectedAtSupplyWarehouse: "REJECTED_AT_SUPPLY_WAREHOUSE",
    Cancelled: "CANCELLED",
    Overdue: "OVERDUE",
  },
  /** Values accepted by `OzonSupplyOrderStatusCounterState`. */
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
  /** Values accepted by `OzonSupplyOrderTimeslotChangeForbiddenReason`. */
  SupplyOrderTimeslotChangeForbiddenReason: {
    InvalidOrderState: "INVALID_ORDER_STATE",
    IsVirtual: "IS_VIRTUAL",
    SetTimeslotDeadlineExceed: "SET_TIMESLOT_DEADLINE_EXCEED",
    OrderDoesNotBelongToCompany: "ORDER_DOES_NOT_BELONG_TO_COMPANY",
  },
  /** Values accepted by `OzonSupplyOrderTimeslotFilterType`. */
  SupplyOrderTimeslotFilterType: {
    ByLocalTime: "BY_LOCAL_TIME",
    ByUtcTime: "BY_UTC_TIME",
  },
  /** Values accepted by `OzonSupplyOrderTimeslotOperationStatus`. */
  SupplyOrderTimeslotOperationStatus: {
    StatusUnspecified: "STATUS_UNSPECIFIED",
    StatusError: "STATUS_ERROR",
    StatusInProgress: "STATUS_IN_PROGRESS",
    StatusSuccess: "STATUS_SUCCESS",
  },
  /** Values accepted by `OzonSupplyOrderTimeslotUpdateError`. */
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
  /** Values accepted by `OzonSupplyOverdueReason`. */
  SupplyOverdueReason: {
    Unspecified: "UNSPECIFIED",
    Undefined: "UNDEFINED",
    OrderTimeslotExpired: "ORDER_TIMESLOT_EXPIRED",
    OrderTimeslotNotSelected: "ORDER_TIMESLOT_NOT_SELECTED",
    NotReadyForPickup: "NOT_READY_FOR_PICKUP",
    PickupFailed: "PICKUP_FAILED",
  },
  /** Values accepted by `OzonSupplyState`. */
  SupplyState: {
    Unspecified: "UNSPECIFIED",
    ReadyToSupply: "READY_TO_SUPPLY",
    DataFilling: "DATA_FILLING",
    AcceptedAtSupplyWarehouse: "ACCEPTED_AT_SUPPLY_WAREHOUSE",
    InTransit: "IN_TRANSIT",
    ReportsConfirmationAwaiting: "REPORTS_CONFIRMATION_AWAITING",
    ReportRejected: "REPORT_REJECTED",
    Completed: "COMPLETED",
    RejectedAtSupplyWarehouse: "REJECTED_AT_SUPPLY_WAREHOUSE",
    Cancelled: "CANCELLED",
    Overdue: "OVERDUE",
    AcceptedAtStorageWarehouse: "ACCEPTED_AT_STORAGE_WAREHOUSE",
  },
  /** Values accepted by `OzonSupplyTimeslotForbiddenReason`. */
  SupplyTimeslotForbiddenReason: {
    Unspecified: "UNSPECIFIED",
    Undefined: "UNDEFINED",
    InvalidOrderState: "INVALID_ORDER_STATE",
    SetTimeslotDeadlineExceed: "SET_TIMESLOT_DEADLINE_EXCEED",
    OrderDoesNotBelongToCompany: "ORDER_DOES_NOT_BELONG_TO_COMPANY",
    OrderIsVirtual: "ORDER_IS_VIRTUAL",
  },
  /** Values accepted by `OzonSupplyVehicleForbiddenReason`. */
  SupplyVehicleForbiddenReason: {
    Unspecified: "UNSPECIFIED",
    Undefined: "UNDEFINED",
    InvalidOrderState: "INVALID_ORDER_STATE",
    OrderDoesNotBelongToCompany: "ORDER_DOES_NOT_BELONG_TO_COMPANY",
    VehicleNotRequired: "VEHICLE_NOT_REQUIRED",
  },
  /** Values accepted by `OzonTaxSystem`. */
  TaxSystem: {
    Unspecified: "UNSPECIFIED",
    Unknown: "UNKNOWN",
    Osno: "OSNO",
    Usn: "USN",
    Npd: "NPD",
    Ausn: "AUSN",
    Psn: "PSN",
  },
  /** Values accepted by `OzonTransportLabelError`. */
  TransportLabelError: {
    InvalidState: "INVALID_STATE",
    SupplyNotBelongContractor: "SUPPLY_NOT_BELONG_CONTRACTOR",
    SupplyNotBelongCompany: "SUPPLY_NOT_BELONG_COMPANY",
    OperationNotFound: "OPERATION_NOT_FOUND",
    OperationFailed: "OPERATION_FAILED",
    SupplyIsEmpty: "SUPPLY_IS_EMPTY",
    CargoesNotFound: "CARGOES_NOT_FOUND",
  },
  /** Values accepted by `OzonTransportLabelStatus`. */
  TransportLabelStatus: {
    InProgress: "IN_PROGRESS",
    Success: "SUCCESS",
    Failed: "FAILED",
  },
  /** Values accepted by `OzonTransportOrderLabelError`. */
  TransportOrderLabelError: {
    Undefined: "UNDEFINED",
    OperationNotFound: "OPERATION_NOT_FOUND",
    OperationFailed: "OPERATION_FAILED",
    OrderNotFound: "ORDER_NOT_FOUND",
    AllSuppliesSkipped: "ALL_SUPPLIES_SKIPPED",
    LabelsCountExceed: "LABELS_COUNT_EXCEED",
  },
  /** Values accepted by `UpdateQuestionStatusV1Status`. */
  UpdateQuestionStatusV1Status: {
    New: "NEW",
    Processed: "PROCESSED",
    Viewed: "VIEWED",
  },
  /** Values accepted by `OzonWarehouseCarriageLabelType`. */
  WarehouseCarriageLabelType: {
    Unspecified: "UNSPECIFIED",
    Big: "BIG",
    Small: "SMALL",
  },
  /** Values accepted by `OzonWarehouseFirstMileType`. */
  WarehouseFirstMileType: {
    Unspecified: "UNSPECIFIED",
    PickUp: "PICK_UP",
    DropOff: "DROP_OFF",
  },
  /** Values accepted by `OzonWarehouseOperationStatus`. */
  WarehouseOperationStatus: {
    Unspecified: "UNSPECIFIED",
    InProgress: "IN_PROGRESS",
    Success: "SUCCESS",
    Error: "ERROR",
  },
  /** Values accepted by `OzonWarehouseOperationType`. */
  WarehouseOperationType: {
    Unspecified: "UNSPECIFIED",
    CreateFbsWarehouse: "CREATE_FBS_WAREHOUSE",
    UpdateFbsWarehouse: "UPDATE_FBS_WAREHOUSE",
    SetFirstMile: "SET_FIRST_MILE",
    WarehouseEnableDisable: "WAREHOUSE_ENABLE_DISABLE",
    WarehousePauseUnpause: "WAREHOUSE_PAUSE_UNPAUSE",
  },
  /** Values accepted by `OzonWarehouseProductRestrictionCharacteristic`. */
  WarehouseProductRestrictionCharacteristic: {
    Unspecified: "UNSPECIFIED",
    Length: "LENGTH",
    Width: "WIDTH",
    Height: "HEIGHT",
    Weight: "WEIGHT",
    SumOfDimensions: "SUM_OF_DIMENSIONS",
    VolumeWeight: "VOLUME_WEIGHT",
    Volume: "VOLUME",
    Price: "PRICE",
    LongestSide: "LONGEST_SIDE",
  },
  /** Values accepted by `OzonWarehouseProductValidationErrorType`. */
  WarehouseProductValidationErrorType: {
    Unspecified: "UNSPECIFIED",
    LessThanMin: "LESS_THAN_MIN",
    GreaterThanMax: "GREATER_THAN_MAX",
  },
  /** Values accepted by `OzonWarehouseProductValidationState`. */
  WarehouseProductValidationState: {
    Unspecified: "UNSPECIFIED",
    NotValid: "NOT_VALID",
  },
  /** Values accepted by `OzonWarehouseType`. */
  WarehouseType: {
    ExpressDarkStore: "EXPRESS_DARK_STORE",
    Unspecified: "UNSPECIFIED",
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
  /** Values accepted by `OzonWarehouseTypeFilter`. */
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
  /** Values accepted by `OzonWarehouseWorkingDay`. */
  WarehouseWorkingDay: {
    Unspecified: "UNSPECIFIED",
    Monday: "MONDAY",
    Tuesday: "TUESDAY",
    Wednesday: "WEDNESDAY",
    Thursday: "THURSDAY",
    Friday: "FRIDAY",
    Saturday: "SATURDAY",
    Sunday: "SUNDAY",
  },
} as const;
