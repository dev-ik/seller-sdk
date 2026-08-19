// Generated public types for this Yandex Market endpoint.
type ReturnsApiResponseStatusType = "OK" | "ERROR";
type ReturnsBasePriceDTO = {
  readonly value: number;
  readonly currencyId: ReturnsCurrencyType;
};
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
type ReturnsEmptyApiResponse = {
  readonly status: ReturnsApiResponseStatusType;
};
type ReturnsReturnItemDecisionComment = string;
type ReturnsReturnItemDecisionDTO = {
  readonly returnItemId: ReturnsReturnItemId;
  readonly decisionType: ReturnsReturnRequestDecisionType;
  readonly decisionReasonType?: ReturnsReturnRequestDecisionReasonType;
  readonly comment?: ReturnsReturnItemDecisionComment;
  readonly compensation?: ReturnsBasePriceDTO;
};
type ReturnsReturnItemId = number;
type ReturnsReturnRequestDecisionReasonType =
  | "ISSUE_WITH_THE_PRODUCT_WAS_NOT_CONFIRMED"
  | "MECHANICAL_DAMAGE"
  | "WARRANTY_PERIOD_HAS_EXPIRED"
  | "CONFIGURATION_OR_PACKAGING_COMPROMISED"
  | "PRODUCT_APPEARANCE_COMPROMISED"
  | "WARRANTY_TERMS_VIOLATED"
  | "DEVICE_ACTIVATED";
type ReturnsReturnRequestDecisionType =
  | "FAST_REFUND_MONEY"
  | "REFUND_MONEY"
  | "REFUND_MONEY_INCLUDING_SHIPMENT"
  | "REPAIR"
  | "REPLACE"
  | "SEND_TO_EXAMINATION"
  | "DECLINE_REFUND"
  | "PARTIAL_MONEY_REFUND"
  | "OTHER_DECISION";
type ReturnsSubmitReturnDecisionRequest = {
  readonly returnItemDecisions: readonly ReturnsReturnItemDecisionDTO[];
};

/**
 * Параметры метода «Передача решения по возврату».
 *
 * Позволяет передать список решений по возврату.
 *
 * Перед вызовом метода
 *
 * Получите список доступных решений — [POST v1/businesses/{businessId}/returns/decisions](../../reference/returns/getReturnAvailableDecisions.md).
 *
 * POST /v2/campaigns/{campaignId}/orders/{orderId}/returns/{returnId}/decision/submit
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type SubmitReturnDecisionInput = {
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

    /**
     * Идентификатор невыкупа или возврата.
     *
     * Формат: `int64`.
     */
    readonly returnId: number;
  } /**
   * description
   */;
  readonly body?: ReturnsSubmitReturnDecisionRequest;
};
/**
 * Успешный ответ метода «Передача решения по возврату».
 *
 * 200: Статус выполнения операции.
 */
export type SubmitReturnDecisionResponse = ReturnsEmptyApiResponse;
