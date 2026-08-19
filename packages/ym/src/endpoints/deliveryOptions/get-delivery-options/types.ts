// Generated public types for this Yandex Market endpoint.
type DeliveryOptionsApiResponseStatusType = "OK" | "ERROR";
type DeliveryOptionsBasicOrderItemDTO = {
  readonly offerId: DeliveryOptionsShopSku;
  readonly count: number;
};
type DeliveryOptionsCourierDeliveryOptionDTO = {
  readonly deliveryDateInterval: DeliveryOptionsDeliveryDateIntervalDTO;
  readonly deliveryTimeInterval: DeliveryOptionsTimeIntervalDTO;
  readonly price: DeliveryOptionsDeliveryOptionPriceDTO;
};
type DeliveryOptionsCourierDeliveryOptionsDTO = {
  readonly courierDeliveryOptions: readonly DeliveryOptionsCourierDeliveryOptionDTO[];
};
type DeliveryOptionsCourierDeliveryParametersDTO = {
  readonly fullAddress: string;
};
type DeliveryOptionsCurrencyType =
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
type DeliveryOptionsDeliveryDateIntervalDTO = {
  readonly fromDate: string;
  readonly toDate: string;
};
type DeliveryOptionsDeliveryOptionPriceDTO = {
  readonly value: number;
  readonly currencyId: DeliveryOptionsCurrencyType;
};
type DeliveryOptionsGetDeliveryOptionsDTO = {
  readonly warehousesDeliveryOptions: readonly DeliveryOptionsWarehousesDeliveryOptionsDTO[];
};
type DeliveryOptionsGetDeliveryOptionsItemDTO = {
  readonly offerId: DeliveryOptionsShopSku;
  readonly count: number;
  readonly warehouseId?: number;
};
type DeliveryOptionsGetDeliveryOptionsRequest = {
  readonly items: readonly DeliveryOptionsGetDeliveryOptionsItemDTO[];
  readonly pickupDelivery?: DeliveryOptionsPickupDeliveryParametersDTO;
  readonly courierDelivery?: DeliveryOptionsCourierDeliveryParametersDTO;
};
type DeliveryOptionsGetDeliveryOptionsResponse = {
  readonly status: DeliveryOptionsApiResponseStatusType;
  readonly result?: DeliveryOptionsGetDeliveryOptionsDTO;
};
type DeliveryOptionsLogisticPointId = number;
type DeliveryOptionsPickupDeliveryOptionsDTO = {
  readonly pickupOptions: readonly DeliveryOptionsPickupOptionsDTO[];
};
type DeliveryOptionsPickupDeliveryParametersDTO = {
  readonly logisticPointsIds: readonly DeliveryOptionsLogisticPointId[];
};
type DeliveryOptionsPickupOptionDTO = {
  readonly deliveryDateInterval: DeliveryOptionsDeliveryDateIntervalDTO;
  readonly price: DeliveryOptionsDeliveryOptionPriceDTO;
};
type DeliveryOptionsPickupOptionsDTO = {
  readonly logisticPointId: DeliveryOptionsLogisticPointId;
  readonly options: readonly DeliveryOptionsPickupOptionDTO[];
};
type DeliveryOptionsShopSku = string;
type DeliveryOptionsTimeIntervalDTO = {
  readonly fromTime: string;
  readonly toTime: string;
};
type DeliveryOptionsWarehouseDeliveryOptionsDTO = {
  readonly pickupDelivery?: DeliveryOptionsPickupDeliveryOptionsDTO;
  readonly courierDelivery?: DeliveryOptionsCourierDeliveryOptionsDTO;
};
type DeliveryOptionsWarehouseId = number;
type DeliveryOptionsWarehousesDeliveryOptionsDTO = {
  readonly warehouseId: DeliveryOptionsWarehouseId;
  readonly deliveryOptions: DeliveryOptionsWarehouseDeliveryOptionsDTO;
  readonly items: readonly DeliveryOptionsBasicOrderItemDTO[];
};

/**
 * Параметры метода «Получение доступных вариантов доставки заказов».
 *
 * Возвращает список вариантов для доставки заказов. Выберите подходящий вариант доставки из ответа и передайте его при создании заказа.
 *
 * Укажите `courierDelivery` для курьерской доставки или `pickupDelivery` для доставки в пункт выдачи. Не передавайте оба параметра одновременно.
 *
 * POST /v1/campaigns/{campaignId}/delivery-options
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetDeliveryOptionsInput = {
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
  readonly body: DeliveryOptionsGetDeliveryOptionsRequest;
};
/**
 * Успешный ответ метода «Получение доступных вариантов доставки заказов».
 *
 * 200: Список доступных вариантов доставки с разных складов.
 */
export type GetDeliveryOptionsResponse =
  DeliveryOptionsGetDeliveryOptionsResponse;
