// Generated public types for this Yandex Market endpoint.
type ReturnsApiResponseStatusType = "OK" | "ERROR";
type ReturnsBasePriceDTO = {
  readonly value: number;
  readonly currencyId: ReturnsCurrencyType;
};
type ReturnsCampaignId = number;
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
type ReturnsGetReturnAvailableDecisionsRequest = {
  readonly campaignId: ReturnsCampaignId;
  readonly returnId: ReturnsReturnId;
};
type ReturnsGetReturnAvailableDecisionsResponse = {
  readonly status: ReturnsApiResponseStatusType;
  readonly result?: ReturnsReturnAvailableDecisionsResponse;
};
type ReturnsPartialCompensationBoundsDTO = {
  readonly minAmount: ReturnsBasePriceDTO;
  readonly maxAmount: ReturnsBasePriceDTO;
  readonly maxPercent: number;
};
type ReturnsReturnAvailableDecisionDTO = {
  readonly decisionType: ReturnsReturnDecisionType;
  readonly decisionReasonTypes?:
    | readonly ReturnsReturnRequestDecisionReasonType[]
    | null;
  readonly partialCompensationBounds?: ReturnsPartialCompensationBoundsDTO;
};
type ReturnsReturnAvailableDecisionsResponse = {
  readonly availableDecisions: readonly ReturnsReturnAvailableDecisionDTO[];
};
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
type ReturnsReturnId = number;
type ReturnsReturnRequestDecisionReasonType =
  | "ISSUE_WITH_THE_PRODUCT_WAS_NOT_CONFIRMED"
  | "MECHANICAL_DAMAGE"
  | "WARRANTY_PERIOD_HAS_EXPIRED"
  | "CONFIGURATION_OR_PACKAGING_COMPROMISED"
  | "PRODUCT_APPEARANCE_COMPROMISED"
  | "WARRANTY_TERMS_VIOLATED"
  | "DEVICE_ACTIVATED";

/**
 * Параметры метода «Получение возможных решений по возврату».
 *
 * Возвращает список доступных решений по возврату.
 *
 * POST /v1/businesses/{businessId}/returns/decisions
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetReturnAvailableDecisionsInput = {
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
   * Тело запроса.
   */;
  readonly body: ReturnsGetReturnAvailableDecisionsRequest;
};
/**
 * Успешный ответ метода «Получение возможных решений по возврату».
 *
 * 200: Возможные решения по возврату.
 */
export type GetReturnAvailableDecisionsResponse =
  ReturnsGetReturnAvailableDecisionsResponse;
