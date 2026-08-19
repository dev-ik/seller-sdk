// Generated public types for this Yandex Market endpoint.
type OrdersStatsApiResponseStatusType = "OK" | "ERROR";
type OrdersStatsCurrencyType =
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
type OrdersStatsGetOrdersStatsRequest = {
  readonly dateFrom?: string;
  readonly dateTo?: string;
  readonly updateFrom?: string;
  readonly updateTo?: string;
  readonly orders?: readonly number[] | null;
  readonly statuses?: readonly OrdersStatsOrderStatsStatusType[] | null;
  readonly hasCis?: boolean;
};
type OrdersStatsGetOrdersStatsResponse = {
  readonly status: OrdersStatsApiResponseStatusType;
  readonly result?: OrdersStatsOrdersStatsDTO;
};
type OrdersStatsMarketSku = number;
type OrdersStatsOrderStatsStatusType =
  | "CANCELLED_BEFORE_PROCESSING"
  | "CANCELLED_IN_DELIVERY"
  | "CANCELLED_IN_PROCESSING"
  | "DELIVERY"
  | "DELIVERED"
  | "PARTIALLY_DELIVERED"
  | "PARTIALLY_RETURNED"
  | "PENDING"
  | "PICKUP"
  | "PROCESSING"
  | "RESERVED"
  | "RETURNED"
  | "UNKNOWN"
  | "UNPAID"
  | "LOST";
type OrdersStatsOrdersStatsCommissionDTO = {
  readonly type?: OrdersStatsOrdersStatsCommissionType;
  readonly actual?: number;
};
type OrdersStatsOrdersStatsCommissionType =
  | "FEE"
  | "FULFILLMENT"
  | "LOYALTY_PARTICIPATION_FEE"
  | "AUCTION_PROMOTION"
  | "INSTALLMENT"
  | "DELIVERY_TO_CUSTOMER"
  | "EXPRESS_DELIVERY_TO_CUSTOMER"
  | "AGENCY"
  | "PAYMENT_TRANSFER"
  | "RETURNED_ORDERS_STORAGE"
  | "SORTING"
  | "INTAKE_SORTING"
  | "RETURN_PROCESSING"
  | "ILLIQUID_GOODS_SALE"
  | "CROSSREGIONAL_DELIVERY"
  | "FULFILLMENT_WITHDRAW"
  | "ITEM_BOOKING";
type OrdersStatsOrdersStatsDTO = {
  readonly orders: readonly OrdersStatsOrdersStatsOrderDTO[];
  readonly paging?: OrdersStatsPackagingForwardScrollingPagerDTO;
};
type OrdersStatsOrdersStatsDeliveryRegionDTO = {
  readonly id?: number;
  readonly name?: string;
};
type OrdersStatsOrdersStatsDetailsDTO = {
  readonly itemStatus?: OrdersStatsOrdersStatsItemStatusType;
  readonly itemCount?: number;
  readonly updateDate?: string;
  readonly stockType?: OrdersStatsOrdersStatsStockType;
};
type OrdersStatsOrdersStatsItemDTO = {
  readonly offerName?: string;
  readonly marketSku?: OrdersStatsMarketSku;
  readonly shopSku?: OrdersStatsShopSku;
  readonly count?: number;
  readonly prices?: readonly OrdersStatsOrdersStatsPriceDTO[] | null;
  readonly warehouse?: OrdersStatsOrdersStatsWarehouseDTO;
  readonly details?: readonly OrdersStatsOrdersStatsDetailsDTO[] | null;
  readonly cisList?: readonly string[] | null;
  readonly initialCount?: number;
  readonly bidFee?: number;
  readonly cofinanceThreshold?: number;
  readonly cofinanceValue?: number;
};
type OrdersStatsOrdersStatsItemStatusType = "REJECTED" | "RETURNED";
type OrdersStatsOrdersStatsOrderDTO = {
  readonly id?: number;
  readonly creationDate?: string;
  readonly statusUpdateDate?: string;
  readonly status?: OrdersStatsOrderStatsStatusType;
  readonly partnerOrderId?: string;
  readonly paymentType?: OrdersStatsOrdersStatsOrderPaymentType;
  readonly fake?: boolean;
  readonly deliveryRegion?: OrdersStatsOrdersStatsDeliveryRegionDTO;
  readonly items: readonly OrdersStatsOrdersStatsItemDTO[];
  readonly initialItems?: readonly OrdersStatsOrdersStatsItemDTO[] | null;
  readonly payments: readonly OrdersStatsOrdersStatsPaymentDTO[];
  readonly commissions: readonly OrdersStatsOrdersStatsCommissionDTO[];
  readonly subsidies?: readonly OrdersStatsOrdersStatsSubsidyDTO[] | null;
  readonly currency: OrdersStatsCurrencyType;
};
type OrdersStatsOrdersStatsOrderPaymentType =
  | "POSTPAID"
  | "PREPAID"
  | "UNKNOWN";
type OrdersStatsOrdersStatsPaymentDTO = {
  readonly id?: string;
  readonly date?: string;
  readonly type?: OrdersStatsOrdersStatsPaymentType;
  readonly source?: OrdersStatsOrdersStatsPaymentSourceType;
  readonly total?: number;
  readonly paymentOrder?: OrdersStatsOrdersStatsPaymentOrderDTO;
};
type OrdersStatsOrdersStatsPaymentOrderDTO = {
  readonly id?: string;
  readonly date?: string;
};
type OrdersStatsOrdersStatsPaymentSourceType =
  | "BUYER"
  | "CASHBACK"
  | "MARKETPLACE"
  | "MARKET_CESSION"
  | "SPLIT";
type OrdersStatsOrdersStatsPaymentType = "PAYMENT" | "REFUND";
type OrdersStatsOrdersStatsPriceDTO = {
  readonly type?: OrdersStatsOrdersStatsPriceType;
  readonly costPerItem?: number;
  readonly total?: number;
};
type OrdersStatsOrdersStatsPriceType = "BUYER" | "CASHBACK" | "MARKETPLACE";
type OrdersStatsOrdersStatsStockType = "FIT" | "DEFECT" | "EXPIRED";
type OrdersStatsOrdersStatsSubsidyDTO = {
  readonly operationType: OrdersStatsOrdersStatsSubsidyOperationType;
  readonly type: OrdersStatsOrdersStatsSubsidyType;
  readonly amount: number;
};
type OrdersStatsOrdersStatsSubsidyOperationType = "ACCRUAL" | "DEDUCTION";
type OrdersStatsOrdersStatsSubsidyType =
  | "YANDEX_CASHBACK"
  | "SUBSIDY"
  | "DELIVERY";
type OrdersStatsOrdersStatsWarehouseDTO = {
  readonly id?: number;
  readonly name?: string;
};
type OrdersStatsPackagingForwardScrollingPagerDTO = {
  readonly nextPageToken?: string;
};
type OrdersStatsShopSku = string;

/**
 * Параметры метода «Детальная информация по заказам».
 *
 * Возвращает информацию по заказам на Маркете, в которых есть ваши товары.
 *
 * С помощью нее вы можете собрать статистику по вашим заказам и узнать, например, какие из товаров чаще всего возвращаются покупателями, какие, наоборот, пользуются большим спросом и т. п.
 *
 * Информация по созданным или обновленным заказам может появиться с задержкой до 40 минут
 *
 * Чтобы получить данные без задержки, используйте метод [POST v1/businesses/{businessId}/orders](../../reference/orders/getBusinessOrders.md).
 *
 * В одном запросе можно получить информацию не более чем по 200 заказам.
 *
 * POST /v2/campaigns/{campaignId}/stats/orders
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetOrdersStatsInput = {
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
  readonly body?: OrdersStatsGetOrdersStatsRequest;
};
/**
 * Успешный ответ метода «Детальная информация по заказам».
 *
 * 200: Информация по заказам.
 */
export type GetOrdersStatsResponse = OrdersStatsGetOrdersStatsResponse;
