// Generated public types for this Yandex Market endpoint.
type ReturnsApiResponseStatusType = "OK" | "ERROR";
type ReturnsCurrencyType =
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
type ReturnsCurrencyValueDTO = {
  readonly value: number;
  readonly currencyId: ReturnsCurrencyType;
};
type ReturnsGetReturnsResponse = {
  readonly status: ReturnsApiResponseStatusType;
  readonly result?: ReturnsPagedReturnsDTO;
};
type ReturnsLogisticPickupPointDTO = {
  readonly id?: number;
  readonly name?: string;
  readonly address?: ReturnsPickupAddressDTO;
  readonly instruction?: string;
  readonly type?: ReturnsLogisticPointType;
  readonly logisticPartnerId?: number;
};
type ReturnsLogisticPointType =
  | "WAREHOUSE"
  | "PICKUP_POINT"
  | "PICKUP_TERMINAL"
  | "PICKUP_POST_OFFICE"
  | "PICKUP_MIXED"
  | "PICKUP_RETAIL";
type ReturnsMarketSku = number;
type ReturnsPackagingForwardScrollingPagerDTO = {
  readonly nextPageToken?: string;
};
type ReturnsPagedReturnsDTO = {
  readonly paging?: ReturnsPackagingForwardScrollingPagerDTO;
  readonly returns: readonly ReturnsReturnDTO[];
};
type ReturnsPickupAddressDTO = {
  readonly country?: string;
  readonly city?: string;
  readonly street?: string;
  readonly house?: string;
  readonly postcode?: string;
};
type ReturnsRecipientType = "SHOP" | "DELIVERY_SERVICE" | "POST";
type ReturnsRefundStatusType =
  | "STARTED_BY_USER"
  | "REFUND_IN_PROGRESS"
  | "REFUNDED"
  | "FAILED"
  | "WAITING_FOR_DECISION"
  | "DECISION_MADE"
  | "REFUNDED_WITH_BONUSES"
  | "REFUNDED_BY_SHOP"
  | "CANCELLED"
  | "REJECTED"
  | "COMPLETE_WITHOUT_REFUND"
  | "PREMODERATION_DISPUTE"
  | "PREMODERATION_DECISION_WAITING"
  | "PREMODERATION_DECISION_MADE"
  | "PREMODERATION_SELECT_DELIVERY"
  | "UNKNOWN";
type ReturnsReturnDTO = {
  readonly id: number;
  readonly orderId: number;
  readonly creationDate?: string;
  readonly updateDate?: string;
  readonly refundStatus?: ReturnsRefundStatusType;
  readonly logisticPickupPoint?: ReturnsLogisticPickupPointDTO;
  readonly pickupTillDate?: string;
  readonly shipmentRecipientType?: ReturnsRecipientType;
  readonly shipmentStatus?: ReturnsReturnShipmentStatusType;
  readonly refundAmount?: number;
  readonly amount?: ReturnsCurrencyValueDTO;
  readonly items: readonly ReturnsReturnItemDTO[];
  readonly returnType: ReturnsReturnType;
  readonly fastReturn?: boolean;
};
type ReturnsReturnDecisionDTO = {
  readonly returnItemId?: number;
  readonly count?: number;
  readonly comment?: string;
  readonly reasonType?: ReturnsReturnDecisionReasonType;
  readonly subreasonType?: ReturnsReturnDecisionSubreasonType;
  readonly decisionType?: ReturnsReturnDecisionType;
  readonly refundAmount?: number;
  readonly amount?: ReturnsCurrencyValueDTO;
  readonly partnerCompensation?: number;
  readonly partnerCompensationAmount?: ReturnsCurrencyValueDTO;
  readonly images?: readonly string[] | null;
};
type ReturnsReturnDecisionReasonType =
  | "BAD_QUALITY"
  | "DOES_NOT_FIT"
  | "WRONG_ITEM"
  | "DAMAGE_DELIVERY"
  | "LOYALTY_FAIL"
  | "CONTENT_FAIL"
  | "DELIVERY_FAIL"
  | "UNKNOWN";
type ReturnsReturnDecisionSubreasonType =
  | "USER_DID_NOT_LIKE"
  | "USER_CHANGED_MIND"
  | "DELIVERED_TOO_LONG"
  | "BAD_PACKAGE"
  | "DAMAGED"
  | "NOT_WORKING"
  | "INCOMPLETENESS"
  | "WRONG_ITEM"
  | "WRONG_COLOR"
  | "DID_NOT_MATCH_DESCRIPTION"
  | "WRONG_ORDER"
  | "WRONG_AMOUNT_DELIVERED"
  | "WRAPPING_DAMAGED"
  | "ITEM_WAS_USED"
  | "BROKEN"
  | "BAD_FLOWERS"
  | "PARCEL_MISSING"
  | "INCOMPLETE"
  | "UNKNOWN";
type ReturnsReturnDecisionType =
  | "FAST_REFUND_MONEY"
  | "REFUND_MONEY"
  | "REFUND_MONEY_INCLUDING_SHIPMENT"
  | "REPAIR"
  | "REPLACE"
  | "SEND_TO_EXAMINATION"
  | "DECLINE_REFUND"
  | "PARTIAL_MONEY_REFUND"
  | "OTHER_DECISION"
  | "UNKNOWN";
type ReturnsReturnInstanceDTO = {
  readonly stockType?: ReturnsReturnInstanceStockType;
  readonly status?: ReturnsReturnInstanceStatusType;
  readonly cis?: string;
  readonly imei?: string;
};
type ReturnsReturnInstanceStatusType =
  | "CREATED"
  | "RECEIVED"
  | "IN_TRANSIT"
  | "READY_FOR_PICKUP"
  | "PICKED"
  | "RECEIVED_ON_FULFILLMENT"
  | "CANCELLED"
  | "LOST"
  | "UTILIZED"
  | "PREPARED_FOR_UTILIZATION"
  | "EXPROPRIATED"
  | "NOT_IN_DEMAND";
type ReturnsReturnInstanceStockType =
  | "FIT"
  | "DEFECT"
  | "ANOMALY"
  | "SURPLUS"
  | "EXPIRED"
  | "MISGRADING"
  | "UNDEFINED"
  | "INCORRECT_IMEI"
  | "INCORRECT_SERIAL_NUMBER"
  | "INCORRECT_CIS"
  | "PART_MISSING"
  | "NON_COMPLIENT"
  | "NOT_ACCEPTABLE"
  | "SERVICE"
  | "MARKDOWN"
  | "DEMO"
  | "REPAIR"
  | "FIRMWARE"
  | "UNKNOWN";
type ReturnsReturnItemDTO = {
  readonly marketSku?: ReturnsMarketSku;
  readonly shopSku: ReturnsShopSku;
  readonly count: number;
  readonly decisions?: readonly ReturnsReturnDecisionDTO[] | null;
  readonly instances?: readonly ReturnsReturnInstanceDTO[] | null;
  readonly tracks?: readonly ReturnsTrackDTO[] | null;
};
type ReturnsReturnShipmentStatusType =
  | "CREATED"
  | "RECEIVED"
  | "IN_TRANSIT"
  | "READY_FOR_PICKUP"
  | "PICKED"
  | "LOST"
  | "EXPIRED"
  | "CANCELLED"
  | "FULFILMENT_RECEIVED"
  | "PREPARED_FOR_UTILIZATION"
  | "NOT_IN_DEMAND"
  | "UTILIZED"
  | "READY_FOR_EXPROPRIATION"
  | "RECEIVED_FOR_EXPROPRIATION"
  | "UNKNOWN";
type ReturnsReturnType = "UNREDEEMED" | "RETURN";
type ReturnsShopSku = string;
type ReturnsTrackDTO = { readonly trackCode?: string };

/**
 * Параметры метода «Список невыкупов и возвратов».
 *
 * Получает список невыкупов и возвратов.
 *
 * Чтобы получить информацию по одному невыкупу или возврату, выполните запрос [GET v2/campaigns/{campaignId}/orders/{orderId}/returns/{returnId}](../../reference/returns/getReturn.md).
 *
 * Подключите API-уведомления
 *
 * Маркет отправит вам запрос [POST notification](../../push-notifications/reference/sendNotification.md), когда появится новый невыкуп или возврат.
 *
 * [{#T}](../../push-notifications/index.md)
 *
 * GET /v2/campaigns/{campaignId}/returns
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetReturnsInput = {
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
     * Значение по умолчанию: `50`.
     *
     * Минимальное значение: 1.
     *
     * Максимальное значение: 100.
     */
    readonly limit?: number;

    /**
     * Идентификаторы заказов — для фильтрации результатов.
     *
     * Несколько идентификаторов перечисляются через запятую без пробела.
     *
     * Максимальное количество элементов: 50.
     */
    readonly orderIds?: readonly number[];

    /**
     * Фильтр по статусам возврата денег за возвраты.
     *
     * Несколько статусов перечисляются через запятую.
     *
     * Пример: `["STARTED_BY_USER","WAITING_FOR_DECISION"]`.
     */
    readonly statuses?: readonly ReturnsRefundStatusType[];

    /**
     * Фильтр по логистическим статусам невыкупов и возвратов.
     *
     * Несколько статусов перечисляются через запятую.
     *
     * Пример: `["READY_FOR_PICKUP","IN_TRANSIT"]`.
     */
    readonly shipmentStatuses?: readonly ReturnsReturnShipmentStatusType[];

    /**
     * Тип заказа для фильтрации:
     *
     * * `UNREDEEMED` — невыкуп.
     *
     * * `RETURN` — возврат.
     *
     * Если не указать, в ответе будут и невыкупы, и возвраты.
     *
     * Тип фильтрации:
     *
     * * `UNREDEEMED` — невыкупы.
     *
     * * `RETURN` — возвраты.
     *
     * Если не указывать, в ответе будут и невыкупы, и возвраты.
     */
    readonly type?: "UNREDEEMED" | "RETURN";

    /**
     * Начальная дата для фильтрации невыкупов или возвратов по дате обновления.
     *
     * Формат: `ГГГГ-ММ-ДД`.
     *
     * Формат: `date`.
     *
     * Пример: `"2022-10-31"`.
     */
    readonly fromDate?: string;

    /**
     * Конечная дата для фильтрации невыкупов или возвратов по дате обновления.
     *
     * Формат: `ГГГГ-ММ-ДД`.
     *
     * Формат: `date`.
     *
     * Пример: `"2022-11-30"`.
     */
    readonly toDate?: string;

    /**
     * Параметр устарел и будет отключен 12.10.2026.
     *
     * Вместо него используйте `fromDate`.
     *
     * Начальная дата для фильтрации невыкупов или возвратов по дате обновления.
     *
     * Формат: `date`.
     *
     * Пример: `"2022-10-31"`.
     */
    readonly from_date?: string;

    /**
     * Параметр устарел и будет отключен 12.10.2026.
     *
     * Вместо него используйте `toDate`.
     *
     * Конечная дата для фильтрации невыкупов или возвратов по дате обновления.
     *
     * Формат: `date`.
     *
     * Пример: `"2022-11-30"`.
     */
    readonly to_date?: string;
  };
};
/**
 * Успешный ответ метода «Список невыкупов и возвратов».
 *
 * 200: Постраничные невыкупы или возвраты магазина.
 */
export type GetReturnsResponse = ReturnsGetReturnsResponse;
