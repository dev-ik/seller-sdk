// Generated public types for this Yandex Market endpoint.
type OrdersApiResponseStatusType = "OK" | "ERROR";
type OrdersBasePriceDTO = {
  readonly value: number;
  readonly currencyId: OrdersCurrencyType;
};
type OrdersCourierDeliveryAddressDTO = {
  readonly fullAddress: string;
  readonly entrance?: string;
  readonly floor?: number;
  readonly apartment?: string;
};
type OrdersCreateOrderDTO = {
  readonly externalOrderId: string;
  readonly itemsDelivery: readonly OrdersCreateOrderWarehouseItemsDTO[];
  readonly destination: OrdersCreateOrderDeliveryOptionDTO;
  readonly customer: OrdersCustomerDTO;
  readonly packaging: OrdersCreateOrderPackagingDTO;
  readonly paymentType: OrdersDeliveryPaymentType;
  readonly draft?: boolean;
  readonly fake?: boolean;
};
type OrdersCreateOrderDeliveryOptionDTO = {
  readonly pickupDelivery?: OrdersOrderPickupDeliveryDTO;
  readonly courierDelivery?: OrdersOrderCourierDeliveryDTO;
};
type OrdersCreateOrderItemDTO = {
  readonly offerId: OrdersShopSku;
  readonly count: number;
  readonly price?: OrdersBasePriceDTO;
};
type OrdersCreateOrderPackageType = "WHITELABEL" | "BRAND";
type OrdersCreateOrderPackagingDTO = {
  readonly packageType?: OrdersCreateOrderPackageType;
};
type OrdersCreateOrderRequest = { readonly order: OrdersCreateOrderDTO };
type OrdersCreateOrderResponse = {
  readonly status: OrdersApiResponseStatusType;
  readonly result?: OrdersCreatedOrdersDTO;
};
type OrdersCreateOrderWarehouseItemsDTO = {
  readonly warehouseId: number;
  readonly items: readonly OrdersCreateOrderItemDTO[];
  readonly deliveryDateInterval: OrdersDeliveryDateIntervalDTO;
  readonly deliveryTimeInterval?: OrdersTimeIntervalDTO;
};
type OrdersCreatedOrderDTO = { readonly id: number };
type OrdersCreatedOrdersDTO = {
  readonly orders: readonly OrdersCreatedOrderDTO[];
};
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
type OrdersCustomerDTO = {
  readonly firstName: string;
  readonly lastName: string;
  readonly middleName?: string;
  readonly phone: string;
};
type OrdersDeliveryDateIntervalDTO = {
  readonly fromDate: string;
  readonly toDate: string;
};
type OrdersDeliveryPaymentType = "PREPAID";
type OrdersLogisticPointId = number;
type OrdersOrderCourierDeliveryDTO = {
  readonly address: OrdersCourierDeliveryAddressDTO;
  readonly notes?: string;
};
type OrdersOrderPickupDeliveryDTO = {
  readonly logisticPointId: OrdersLogisticPointId;
};
type OrdersShopSku = string;
type OrdersTimeIntervalDTO = {
  readonly fromTime: string;
  readonly toTime: string;
};

/**
 * Параметры метода «Создание заказа».
 *
 * Создает новый заказ, если на складе Маркета есть нужное количество товаров.
 *
 * Укажите `courierDelivery` для курьерской доставки или `pickupDelivery` для доставки в пункт выдачи. Не передавайте оба параметра одновременно.
 *
 * Значение параметра `draft`:
 *
 * * `true` — Маркет создаст заказ в статусе `RESERVED` и будет ждать подтверждения от магазина. Когда будете готовы, передайте статус `PROCESSING` с подстатусом `STARTED` в методе [PUT v2/campaigns/{campaignId}/orders/{orderId}/status](../../reference/orders/updateOrderStatus.md). Если не сделать это в течение часа после создания заказа, Маркет отменит его.
 * * `false` — Маркет создаст заказ в статусе `PROCESSING` с подстатусом `STARTED`, подтверждение не требуется.
 *
 * Значение параметра `fake`:
 *
 * * `true` — тестовый заказ. Позволяет проверить работу магазина и его API на [тестовых заказах](../../concepts/sandbox.md). Такой заказ не будет отгружен и не влияет на остатки.
 * * `false` — настоящий заказ.
 *
 * Перед вызовом метода
 *
 * Получите доступные варианты доставки — [POST v2/campaigns/{campaignId}/delivery-options](../../reference/delivery-options/getDeliveryOptions.md).
 *
 * POST /v1/campaigns/{campaignId}/orders/create
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type CreateOrderInput = {
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
   * Тело запроса.
   */;
  readonly body: OrdersCreateOrderRequest;
};
/**
 * Успешный ответ метода «Создание заказа».
 *
 * 200: Информация о созданных заказах.
 */
export type CreateOrderResponse = OrdersCreateOrderResponse;
