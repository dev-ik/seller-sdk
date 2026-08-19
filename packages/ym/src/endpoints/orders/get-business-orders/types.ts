// Generated public types for this Yandex Market endpoint.
type OrdersBriefOrderItemInstanceDTO = {
  readonly cis?: OrdersCis;
  readonly uin?: string;
  readonly rnpt?: string;
  readonly gtd?: string;
  readonly countryCode?: OrdersCountryCode;
};
type OrdersBusinessOrderBoxLayoutDTO = {
  readonly items: readonly OrdersBusinessOrderBoxLayoutItemDTO[];
  readonly boxId: number;
  readonly barcode: string;
};
type OrdersBusinessOrderBoxLayoutItemDTO = {
  readonly id: number;
  readonly fullCount?: number;
  readonly partialCount?: OrdersBusinessOrderBoxLayoutPartialCountDTO;
  readonly instances?: readonly OrdersBriefOrderItemInstanceDTO[] | null;
};
type OrdersBusinessOrderBoxLayoutPartialCountDTO = {
  readonly current: number;
  readonly total: number;
};
type OrdersBusinessOrderCourierDeliveryDTO = {
  readonly address?: OrdersBusinessOrderDeliveryAddressDTO;
  readonly region?: OrdersRegionDTO;
};
type OrdersBusinessOrderDTO = {
  readonly orderId: number;
  readonly campaignId: OrdersCampaignId;
  readonly programType?: OrdersSellingProgramType;
  readonly externalOrderId?: OrdersExternalOrderId;
  readonly status: OrdersOrderStatusType;
  readonly substatus: OrdersOrderSubstatusType;
  readonly creationDate: string;
  readonly updateDate?: string;
  readonly paymentType: OrdersOrderPaymentType;
  readonly paymentMethod: OrdersOrderPaymentMethodType;
  readonly fake: boolean;
  readonly items: readonly OrdersBusinessOrderItemDTO[];
  readonly prices?: OrdersOrderPriceDTO;
  readonly delivery: OrdersBusinessOrderDeliveryDTO;
  readonly services?: OrdersBusinessOrderServicesDTO;
  readonly buyerType?: OrdersOrderBuyerType;
  readonly notes?: string;
  readonly cancelRequested?: boolean;
  readonly sourcePlatform?: OrdersOrderSourcePlatformType;
};
type OrdersBusinessOrderDeliveryAddressDTO = {
  readonly country?: string;
  readonly postcode?: string;
  readonly city?: string;
  readonly district?: string;
  readonly subway?: string;
  readonly street?: string;
  readonly house?: string;
  readonly block?: string;
  readonly entrance?: string;
  readonly entryphone?: string;
  readonly floor?: string;
  readonly apartment?: string;
  readonly gps?: OrdersGpsDTO;
};
type OrdersBusinessOrderDeliveryDTO = {
  readonly type: OrdersOrderDeliveryType;
  readonly serviceName: string;
  readonly deliveryServiceId: number;
  readonly warehouseId?: string;
  readonly deliveryPartnerType: OrdersOrderDeliveryPartnerType;
  readonly dispatchType?: OrdersOrderDeliveryDispatchType;
  readonly dates: OrdersBusinessOrderDeliveryDatesDTO;
  readonly shipment?: OrdersBusinessOrderShipmentDTO;
  readonly courier?: OrdersBusinessOrderCourierDeliveryDTO;
  readonly pickup?: OrdersBusinessOrderPickupDeliveryDTO;
  readonly transfer?: OrdersBusinessOrderTransferDTO;
  readonly boxesLayout?: readonly OrdersBusinessOrderBoxLayoutDTO[] | null;
  readonly tracks?: readonly OrdersOrderTrackDTO[] | null;
  readonly estimated?: boolean;
  readonly receiveBarcode?: string;
  readonly receiveCode?: string;
  readonly digitalGoods?: OrdersDigitalGoodsDeliveryDetailsDTO;
};
type OrdersBusinessOrderDeliveryDatesDTO = {
  readonly fromDate: string;
  readonly toDate?: string;
  readonly fromTime?: string;
  readonly toTime?: string;
  readonly realDeliveryDate?: string;
};
type OrdersBusinessOrderEacDTO = {
  readonly eacType: OrdersOrderDeliveryEacType;
  readonly eacCode?: string;
};
type OrdersBusinessOrderItemDTO = {
  readonly id: number;
  readonly offerId: OrdersShopSku;
  readonly offerName: string;
  readonly count: number;
  readonly prices?: OrdersItemPriceDTO;
  readonly instances?: readonly OrdersOrderItemInstanceDTO[] | null;
  readonly requiredInstanceTypes?:
    | readonly OrdersOrderItemInstanceType[]
    | null;
  readonly itemStatuses?: readonly OrdersOrderItemUnitStatusDTO[] | null;
  readonly tags?: readonly OrdersOrderItemTagType[] | null;
};
type OrdersBusinessOrderPickupDeliveryDTO = {
  readonly address?: OrdersBusinessOrderDeliveryAddressDTO;
  readonly region?: OrdersRegionDTO;
  readonly logisticPointId?: OrdersLogisticPointId;
  readonly outletCode?: string;
  readonly outletStorageLimitDate?: string;
};
type OrdersBusinessOrderServicesDTO = {
  readonly liftType?: OrdersOrderLiftType;
};
type OrdersBusinessOrderShipmentDTO = {
  readonly id?: number | null;
  readonly shipmentDate: string;
  readonly shipmentTime?: string | null;
};
type OrdersBusinessOrderTransferDTO = {
  readonly courier?: OrdersOrderCourierDTO;
  readonly eac?: OrdersBusinessOrderEacDTO;
};
type OrdersCampaignId = number;
type OrdersCis = string;
type OrdersCountryCode = string;
type OrdersCurrencyType =
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
type OrdersCurrencyValueDTO = {
  readonly value: number;
  readonly currencyId: OrdersCurrencyType;
};
type OrdersDeliveryPriceDTO = {
  readonly payment?: OrdersCurrencyValueDTO;
  readonly subsidy?: OrdersCurrencyValueDTO;
  readonly vat?: OrdersOrderVatType;
};
type OrdersDigitalGoodsDeliveryDetailsDTO = {
  readonly type: OrdersDigitalGoodsDeliveryType;
  readonly steamLink?: string;
};
type OrdersDigitalGoodsDeliveryType =
  | "EMAIL"
  | "ACTIVATION_CODE"
  | "STEAM_GIFT"
  | "CHAT";
type OrdersExternalOrderId = string;
type OrdersGetBusinessOrdersRequest = {
  readonly orderIds?: readonly number[] | null;
  readonly externalOrderIds?: readonly OrdersExternalOrderId[] | null;
  readonly programTypes?: readonly OrdersSellingProgramType[] | null;
  readonly campaignIds?: readonly OrdersCampaignId[] | null;
  readonly statuses?: readonly OrdersOrderStatusType[] | null;
  readonly substatuses?: readonly OrdersOrderSubstatusType[] | null;
  readonly dates?: OrdersOrderDatesFilterDTO;
  readonly fake?: boolean;
  readonly waitingForCancellationApprove?: boolean;
  readonly sourcePlatforms?: readonly OrdersOrderSourcePlatformType[] | null;
};
type OrdersGetBusinessOrdersResponse = {
  readonly orders: readonly OrdersBusinessOrderDTO[];
  readonly paging?: OrdersPackagingForwardScrollingPagerDTO;
};
type OrdersGpsDTO = { readonly latitude: number; readonly longitude: number };
type OrdersItemPriceDTO = {
  readonly payment?: OrdersCurrencyValueDTO;
  readonly subsidy?: OrdersCurrencyValueDTO;
  readonly cashback?: OrdersCurrencyValueDTO;
  readonly vat?: OrdersOrderVatType;
};
type OrdersLogisticPointId = number;
type OrdersOrderBuyerType = "PERSON" | "BUSINESS";
type OrdersOrderCourierDTO = {
  readonly fullName?: string;
  readonly phone?: string;
  readonly phoneExtension?: string;
  readonly vehicleNumber?: string;
  readonly vehicleDescription?: string;
};
type OrdersOrderDatesFilterDTO = {
  readonly creationDateFrom?: string;
  readonly creationDateTo?: string;
  readonly shipmentDateFrom?: string;
  readonly shipmentDateTo?: string;
  readonly updateDateFrom?: string;
  readonly updateDateTo?: string;
};
type OrdersOrderDeliveryDispatchType =
  | "UNKNOWN"
  | "BUYER"
  | "MARKET_BRANDED_OUTLET"
  | "SHOP_OUTLET";
type OrdersOrderDeliveryEacType =
  | "MERCHANT_TO_COURIER"
  | "COURIER_TO_MERCHANT"
  | "CHECKING_BY_MERCHANT";
type OrdersOrderDeliveryPartnerType = "SHOP" | "YANDEX_MARKET" | "UNKNOWN";
type OrdersOrderDeliveryType =
  | "DELIVERY"
  | "PICKUP"
  | "POST"
  | "DIGITAL"
  | "UNKNOWN";
type OrdersOrderItemInstanceDTO = {
  readonly cis?: string;
  readonly cisFull?: string;
  readonly uin?: string;
  readonly rnpt?: string;
  readonly gtd?: string;
  readonly countryCode?: OrdersCountryCode;
};
type OrdersOrderItemInstanceType =
  | "CIS"
  | "CIS_OPTIONAL"
  | "UIN"
  | "RNPT"
  | "GTD";
type OrdersOrderItemTagType = "ULTIMA" | "SAFE_TAG";
type OrdersOrderItemUnitStatusDTO = {
  readonly status: OrdersOrderItemUnitStatusType;
  readonly count: number;
};
type OrdersOrderItemUnitStatusType =
  | "CREATED"
  | "SHIPPED"
  | "CANCELLED"
  | "DELIVERED_TO_BUYER"
  | "LOST"
  | "REJECTED"
  | "RETURNED";
type OrdersOrderLiftType =
  | "NOT_NEEDED"
  | "MANUAL"
  | "ELEVATOR"
  | "CARGO_ELEVATOR"
  | "FREE"
  | "UNKNOWN";
type OrdersOrderPaymentMethodType =
  | "CASH_ON_DELIVERY"
  | "CARD_ON_DELIVERY"
  | "BOUND_CARD_ON_DELIVERY"
  | "BNPL_BANK_ON_DELIVERY"
  | "BNPL_ON_DELIVERY"
  | "YANDEX"
  | "APPLE_PAY"
  | "EXTERNAL_CERTIFICATE"
  | "CREDIT"
  | "GOOGLE_PAY"
  | "TINKOFF_CREDIT"
  | "SBP"
  | "TINKOFF_INSTALLMENTS"
  | "B2B_ACCOUNT_PREPAYMENT"
  | "B2B_ACCOUNT_POSTPAYMENT"
  | "MICROCREDIT"
  | "BNPL_TBYB"
  | "BNPL_TBC"
  | "DIGITAL_RUBLE"
  | "UNKNOWN";
type OrdersOrderPaymentType = "PREPAID" | "POSTPAID" | "UNKNOWN";
type OrdersOrderPriceDTO = {
  readonly payment?: OrdersCurrencyValueDTO;
  readonly subsidy?: OrdersCurrencyValueDTO;
  readonly cashback?: OrdersCurrencyValueDTO;
  readonly delivery?: OrdersDeliveryPriceDTO;
};
type OrdersOrderSourcePlatformType =
  | "MARKET"
  | "OZON"
  | "WILDBERRIES"
  | "OTHER";
type OrdersOrderStatusType =
  | "PLACING"
  | "RESERVED"
  | "UNPAID"
  | "PROCESSING"
  | "DELIVERY"
  | "PICKUP"
  | "DELIVERED"
  | "CANCELLED"
  | "PENDING"
  | "PARTIALLY_RETURNED"
  | "RETURNED"
  | "UNKNOWN";
type OrdersOrderSubstatusType =
  | "RESERVATION_EXPIRED"
  | "USER_NOT_PAID"
  | "USER_UNREACHABLE"
  | "USER_CHANGED_MIND"
  | "USER_REFUSED_DELIVERY"
  | "USER_REFUSED_PRODUCT"
  | "SHOP_FAILED"
  | "USER_REFUSED_QUALITY"
  | "REPLACING_ORDER"
  | "PROCESSING_EXPIRED"
  | "PENDING_EXPIRED"
  | "SHOP_PENDING_CANCELLED"
  | "PENDING_CANCELLED"
  | "USER_FRAUD"
  | "RESERVATION_FAILED"
  | "USER_PLACED_OTHER_ORDER"
  | "USER_BOUGHT_CHEAPER"
  | "MISSING_ITEM"
  | "BROKEN_ITEM"
  | "WRONG_ITEM"
  | "PICKUP_EXPIRED"
  | "DELIVERY_PROBLEMS"
  | "LATE_CONTACT"
  | "CUSTOM"
  | "DELIVERY_SERVICE_FAILED"
  | "WAREHOUSE_FAILED_TO_SHIP"
  | "DELIVERY_SERVICE_UNDELIVERED"
  | "PREORDER"
  | "AWAIT_CONFIRMATION"
  | "STARTED"
  | "PACKAGING"
  | "READY_TO_SHIP"
  | "SHIPPED"
  | "ASYNC_PROCESSING"
  | "WAITING_USER_INPUT"
  | "WAITING_BANK_DECISION"
  | "BANK_REJECT_CREDIT_OFFER"
  | "CUSTOMER_REJECT_CREDIT_OFFER"
  | "CREDIT_OFFER_FAILED"
  | "AWAIT_DELIVERY_DATES_CONFIRMATION"
  | "SERVICE_FAULT"
  | "DELIVERY_SERVICE_RECEIVED"
  | "USER_RECEIVED"
  | "WAITING_FOR_STOCKS"
  | "AS_PART_OF_MULTI_ORDER"
  | "READY_FOR_LAST_MILE"
  | "LAST_MILE_STARTED"
  | "ANTIFRAUD"
  | "DELIVERY_USER_NOT_RECEIVED"
  | "DELIVERY_SERVICE_DELIVERED"
  | "DELIVERED_USER_NOT_RECEIVED"
  | "USER_WANTED_ANOTHER_PAYMENT_METHOD"
  | "USER_RECEIVED_TECHNICAL_ERROR"
  | "USER_FORGOT_TO_USE_BONUS"
  | "DELIVERY_SERVICE_NOT_RECEIVED"
  | "DELIVERY_SERVICE_LOST"
  | "SHIPPED_TO_WRONG_DELIVERY_SERVICE"
  | "DELIVERED_USER_RECEIVED"
  | "WAITING_TINKOFF_DECISION"
  | "COURIER_SEARCH"
  | "COURIER_FOUND"
  | "COURIER_IN_TRANSIT_TO_SENDER"
  | "COURIER_ARRIVED_TO_SENDER"
  | "COURIER_RECEIVED"
  | "COURIER_NOT_FOUND"
  | "COURIER_NOT_DELIVER_ORDER"
  | "COURIER_RETURNS_ORDER"
  | "COURIER_RETURNED_ORDER"
  | "WAITING_USER_DELIVERY_INPUT"
  | "PICKUP_SERVICE_RECEIVED"
  | "PICKUP_USER_RECEIVED"
  | "CANCELLED_COURIER_NOT_FOUND"
  | "COURIER_NOT_COME_FOR_ORDER"
  | "DELIVERY_NOT_MANAGED_REGION"
  | "INCOMPLETE_CONTACT_INFORMATION"
  | "INCOMPLETE_MULTI_ORDER"
  | "INAPPROPRIATE_WEIGHT_SIZE"
  | "TECHNICAL_ERROR"
  | "SORTING_CENTER_LOST"
  | "COURIER_SEARCH_NOT_STARTED"
  | "LOST"
  | "AWAIT_PAYMENT"
  | "AWAIT_LAVKA_RESERVATION"
  | "USER_WANTS_TO_CHANGE_ADDRESS"
  | "FULL_NOT_RANSOM"
  | "PRESCRIPTION_MISMATCH"
  | "DROPOFF_LOST"
  | "DROPOFF_CLOSED"
  | "DELIVERY_TO_STORE_STARTED"
  | "USER_WANTS_TO_CHANGE_DELIVERY_DATE"
  | "WRONG_ITEM_DELIVERED"
  | "DAMAGED_BOX"
  | "AWAIT_DELIVERY_DATES"
  | "LAST_MILE_COURIER_SEARCH"
  | "PICKUP_POINT_CLOSED"
  | "LEGAL_INFO_CHANGED"
  | "USER_HAS_NO_TIME_TO_PICKUP_ORDER"
  | "DELIVERY_CUSTOMS_ARRIVED"
  | "DELIVERY_CUSTOMS_CLEARED"
  | "FIRST_MILE_DELIVERY_SERVICE_RECEIVED"
  | "AWAIT_AUTO_DELIVERY_DATES"
  | "AWAIT_USER_PERSONAL_DATA"
  | "NO_PERSONAL_DATA_EXPIRED"
  | "CUSTOMS_PROBLEMS"
  | "AWAIT_CASHIER"
  | "WAITING_POSTPAID_BUDGET_RESERVATION"
  | "AWAIT_SERVICEABLE_CONFIRMATION"
  | "POSTPAID_BUDGET_RESERVATION_FAILED"
  | "AWAIT_CUSTOM_PRICE_CONFIRMATION"
  | "READY_FOR_PICKUP"
  | "TOO_MANY_DELIVERY_DATE_CHANGES"
  | "TOO_LONG_DELIVERY"
  | "DEFERRED_PAYMENT"
  | "POSTPAID_FAILED"
  | "INCORRECT_PERSONAL_DATA"
  | "CUSTOMS_FAILED_MARKET"
  | "CUSTOMS_FAILED_USER_COMMERCIAL_ITEMS"
  | "CUSTOMS_FAILED_USER_DUTY_NOT_PAID"
  | "CUSTOMS_FAILED_USER_INVALID_PERSONAL_DATA"
  | "CUSTOMS_FAILED_USER_ADDITIONAL_DATA_NOT_PROVIDED"
  | "AWAIT_PAYMENT_AFTER_DELIVERY"
  | "AWAIT_USER_STEAM_FAST_URL"
  | "USER_IDENTIFICATION_MISMATCH"
  | "PURCHASE_GROUP_THRESHOLD_NOT_REACHED_CANCELLED"
  | "UNKNOWN";
type OrdersOrderTrackDTO = {
  readonly trackCode?: string;
  readonly deliveryServiceId: number;
};
type OrdersOrderVatType =
  | "NO_VAT"
  | "VAT_0"
  | "VAT_10"
  | "VAT_10_110"
  | "VAT_20"
  | "VAT_20_120"
  | "VAT_18"
  | "VAT_18_118"
  | "VAT_12"
  | "VAT_05"
  | "VAT_07"
  | "VAT_22"
  | "UNKNOWN_VALUE";
type OrdersPackagingForwardScrollingPagerDTO = {
  readonly nextPageToken?: string;
};
type OrdersRegionDTO = {
  readonly id: number;
  readonly name: string;
  readonly type: OrdersRegionType;
  readonly parent?: OrdersRegionDTO;
};
type OrdersRegionType =
  | "OTHER"
  | "CONTINENT"
  | "REGION"
  | "COUNTRY"
  | "COUNTRY_DISTRICT"
  | "REPUBLIC"
  | "CITY"
  | "VILLAGE"
  | "CITY_DISTRICT"
  | "SUBWAY_STATION"
  | "REPUBLIC_AREA";
type OrdersSellingProgramType = "FBY" | "FBS" | "DBS" | "EXPRESS" | "LAAS";
type OrdersShopSku = string;

/**
 * Параметры метода «Информация о заказах в кабинете».
 *
 * Возвращает информацию о заказах в кабинете. Запрос можно использовать для отслеживания заказов и их статусов.
 *
 * Вы также можете настроить API-уведомления
 *
 * Маркет отправит вам [запрос](../../push-notifications/reference/sendNotification.md), когда появится новый заказ или изменится его статус. А полную информацию можно получить с помощью этого метода.
 *
 * [{#T}](../../push-notifications/index.md)
 *
 * Доступна фильтрация по параметрам:
 *
 * * дата оформления заказа;
 *
 * * дата и время обновления заказа;
 *
 * * дата отгрузки;
 *
 * * статусы заказов (`statuses`);
 *
 * * этапы обработки или причины отмены (`substatuses`);
 *
 * * идентификаторы кампаний;
 *
 * * идентификаторы заказов;
 *
 * * внешние идентификаторы заказов;
 *
 * * тип заказа (настоящий или тестовый);
 *
 * * модели размещения;
 *
 * * наличие запросов от покупателей на отмену заказа.
 *
 * Максимальный диапазон дат за один запрос — 30 дней (передается в параметрах `fromDate` и `toDate`). Если их не передать, возвращается информация за последние 30 дней.
 *
 * Результаты возвращаются постранично. Для навигации используйте параметры `pageToken` и `limit`.
 *
 * Получить более подробную информацию о покупателе и его номере телефона можно с помощью запроса [GET v2/campaigns/{campaignId}/orders/{orderId}/buyer](../../reference/order-delivery/getOrderBuyerInfo.md).
 *
 * POST /v1/businesses/{businessId}/orders
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetBusinessOrdersInput = {
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
     * Максимальное значение: 50.
     */
    readonly limit?: number;
  } /**
   * Параметры фильтрации заказов.
   */;
  readonly body: OrdersGetBusinessOrdersRequest;
};
/**
 * Успешный ответ метода «Информация о заказах в кабинете».
 *
 * 200: Список заказов в кабинете.
 */
export type GetBusinessOrdersResponse = OrdersGetBusinessOrdersResponse;
