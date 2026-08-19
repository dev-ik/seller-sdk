// Generated public types for this Yandex Market endpoint.
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
type OrdersDateDdMmYyyy = string;
type OrdersDateDdMmYyyyHhMmSs = string;
type OrdersExternalOrderId = string;
type OrdersGetOrderResponse = { readonly order?: OrdersOrderDTO };
type OrdersGpsDTO = { readonly latitude: number; readonly longitude: number };
type OrdersOrderBuyerDTO = {
  readonly id?: string;
  readonly lastName?: string;
  readonly firstName?: string;
  readonly middleName?: string;
  readonly type: OrdersOrderBuyerType;
};
type OrdersOrderBuyerType = "PERSON" | "BUSINESS";
type OrdersOrderCourierDTO = {
  readonly fullName?: string;
  readonly phone?: string;
  readonly phoneExtension?: string;
  readonly vehicleNumber?: string;
  readonly vehicleDescription?: string;
};
type OrdersOrderDTO = {
  readonly id: number;
  readonly externalOrderId?: OrdersExternalOrderId;
  readonly status: OrdersOrderStatusType;
  readonly substatus: OrdersOrderSubstatusType;
  readonly creationDate: OrdersDateDdMmYyyyHhMmSs;
  readonly updatedAt?: OrdersDateDdMmYyyyHhMmSs;
  readonly currency: OrdersCurrencyType;
  readonly itemsTotal: number;
  readonly deliveryTotal: number;
  readonly buyerItemsTotal?: number;
  readonly buyerTotal?: number;
  readonly buyerItemsTotalBeforeDiscount: number;
  readonly buyerTotalBeforeDiscount?: number;
  readonly paymentType: OrdersOrderPaymentType;
  readonly paymentMethod: OrdersOrderPaymentMethodType;
  readonly fake: boolean;
  readonly items: readonly OrdersOrderItemDTO[];
  readonly subsidies?: readonly OrdersOrderSubsidyDTO[] | null;
  readonly delivery: OrdersOrderDeliveryDTO;
  readonly buyer: OrdersOrderBuyerDTO;
  readonly notes?: string;
  readonly taxSystem: OrdersOrderTaxSystemType;
  readonly cancelRequested?: boolean;
  readonly expiryDate?: OrdersDateDdMmYyyyHhMmSs;
};
type OrdersOrderDeliveryAddressDTO = {
  readonly country?: string;
  readonly postcode?: string;
  readonly city?: string;
  readonly district?: string;
  readonly subway?: string;
  readonly street?: string;
  readonly house?: string;
  readonly estate?: string;
  readonly block?: string;
  readonly building?: string;
  readonly entrance?: string;
  readonly entryphone?: string;
  readonly floor?: string;
  readonly apartment?: string;
  readonly phone?: string;
  readonly recipient?: string;
  readonly gps?: OrdersGpsDTO;
};
type OrdersOrderDeliveryDTO = {
  readonly id?: string;
  readonly type: OrdersOrderDeliveryType;
  readonly serviceName: string;
  readonly price?: number;
  readonly deliveryPartnerType: OrdersOrderDeliveryPartnerType;
  readonly courier?: OrdersOrderCourierDTO;
  readonly dates: OrdersOrderDeliveryDatesDTO;
  readonly region?: OrdersRegionDTO;
  readonly address?: OrdersOrderDeliveryAddressDTO;
  readonly vat?: OrdersOrderVatType;
  readonly deliveryServiceId: number;
  readonly liftType?: OrdersOrderLiftType;
  readonly liftPrice?: number;
  readonly outletCode?: string;
  readonly outletStorageLimitDate?: OrdersDateDdMmYyyy;
  readonly dispatchType?: OrdersOrderDeliveryDispatchType;
  readonly tracks?: readonly OrdersOrderTrackDTO[] | null;
  readonly shipments?: readonly OrdersOrderShipmentDTO[] | null;
  readonly estimated?: boolean;
  readonly eacType?: OrdersOrderDeliveryEacType;
  readonly eacCode?: string;
  readonly receiveCode?: string;
};
type OrdersOrderDeliveryDatesDTO = {
  readonly fromDate: OrdersDateDdMmYyyy;
  readonly toDate?: OrdersDateDdMmYyyy;
  readonly fromTime?: string;
  readonly toTime?: string;
  readonly realDeliveryDate?: OrdersDateDdMmYyyy;
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
type OrdersOrderItemDTO = {
  readonly id: number;
  readonly offerId: OrdersShopSku;
  readonly offerName: string;
  readonly price: number;
  readonly buyerPrice: number;
  readonly buyerPriceBeforeDiscount: number;
  readonly priceBeforeDiscount?: number;
  readonly count: number;
  readonly vat?: OrdersOrderVatType;
  readonly shopSku?: OrdersShopSku;
  readonly subsidy?: number;
  readonly partnerWarehouseId?: string;
  readonly promos?: readonly OrdersOrderItemPromoDTO[] | null;
  readonly instances?: readonly OrdersOrderItemInstanceDTO[] | null;
  readonly details?: readonly OrdersOrderItemDetailDTO[] | null;
  readonly subsidies?: readonly OrdersOrderItemSubsidyDTO[] | null;
  readonly requiredInstanceTypes?:
    | readonly OrdersOrderItemInstanceType[]
    | null;
  readonly tags?: readonly OrdersOrderItemTagType[] | null;
};
type OrdersOrderItemDetailDTO = {
  readonly itemCount: number;
  readonly itemStatus: OrdersOrderItemStatusType;
  readonly updateDate: OrdersDateDdMmYyyy;
};
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
type OrdersOrderItemPromoDTO = {
  readonly type: OrdersOrderPromoType;
  readonly discount?: number;
  readonly subsidy: number;
  readonly shopPromoId?: string;
  readonly marketPromoId?: string;
};
type OrdersOrderItemStatusType = "REJECTED" | "RETURNED";
type OrdersOrderItemSubsidyDTO = {
  readonly type: OrdersOrderItemSubsidyType;
  readonly amount: number;
};
type OrdersOrderItemSubsidyType = "YANDEX_CASHBACK" | "SUBSIDY";
type OrdersOrderItemTagType = "ULTIMA" | "SAFE_TAG";
type OrdersOrderLiftType =
  | "NOT_NEEDED"
  | "MANUAL"
  | "ELEVATOR"
  | "CARGO_ELEVATOR"
  | "FREE"
  | "UNKNOWN";
type OrdersOrderParcelBoxDTO = {
  readonly id: number;
  readonly fulfilmentId: string;
};
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
type OrdersOrderPromoType =
  | "DIRECT_DISCOUNT"
  | "BLUE_SET"
  | "BLUE_FLASH"
  | "GENERIC_BUNDLE"
  | "MARKET_COUPON"
  | "MARKET_PROMOCODE"
  | "MARKET_BLUE"
  | "MARKET_COIN"
  | "PRICE_DROP_AS_YOU_SHOP"
  | "SECRET_SALE"
  | "CHEAPEST_AS_GIFT"
  | "CASHBACK"
  | "SPREAD_DISCOUNT_COUNT"
  | "SPREAD_DISCOUNT_RECEIPT"
  | "DISCOUNT_BY_PAYMENT_TYPE"
  | "PERCENT_DISCOUNT"
  | "DCO_EXTRA_DISCOUNT"
  | "UNKNOWN";
type OrdersOrderShipmentDTO = {
  readonly id?: number;
  readonly shipmentDate?: OrdersDateDdMmYyyy;
  readonly shipmentTime?: string;
  readonly tracks?: readonly OrdersOrderTrackDTO[] | null;
  readonly boxes?: readonly OrdersOrderParcelBoxDTO[] | null;
};
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
type OrdersOrderSubsidyDTO = {
  readonly type: OrdersOrderSubsidyType;
  readonly amount: number;
};
type OrdersOrderSubsidyType = "YANDEX_CASHBACK" | "SUBSIDY" | "DELIVERY";
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
type OrdersOrderTaxSystemType =
  | "OSN"
  | "USN"
  | "USN_MINUS_COST"
  | "ENVD"
  | "ECHN"
  | "PSN"
  | "NPD"
  | "AUSN"
  | "AUSN_MINUS_COST"
  | "UNKNOWN_VALUE";
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
type OrdersShopSku = string;

/**
 * Параметры метода «Информация об одном заказе в магазине».
 *
 * Возвращает информацию о заказе в магазине.
 *
 * Вы также можете настроить API-уведомления
 *
 * Маркет отправит вам [запрос](../../push-notifications/reference/sendNotification.md), когда появится новый заказ или изменится его статус. А полную информацию можно получить с помощью метода [POST v1/businesses/{businessId}/orders](../../reference/orders/getBusinessOrders.md).
 *
 * [{#T}](../../push-notifications/index.md)
 *
 * Получить более подробную информацию о покупателе и его номере телефона можно с помощью запроса [GET v2/campaigns/{campaignId}/orders/{orderId}/buyer](../../reference/order-delivery/getOrderBuyerInfo.md).
 *
 * GET /v2/campaigns/{campaignId}/orders/{orderId}
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetOrderInput = {
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

    /**
     * Идентификатор заказа.
     *
     * Формат: `int64`.
     */
    readonly orderId: number;
  };
};
/**
 * Успешный ответ метода «Информация об одном заказе в магазине».
 *
 * 200: Информация о заказе.
 */
export type GetOrderResponse = OrdersGetOrderResponse;
