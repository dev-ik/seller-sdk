// Generated public types for this Yandex Market endpoint.
type TariffsApiResponseStatusType = "OK" | "ERROR";
type TariffsCalculateTariffsOfferDTO = {
  readonly categoryId: number;
  readonly price: number;
  readonly length: number;
  readonly width: number;
  readonly height: number;
  readonly weight: number;
  readonly quantity?: number;
};
type TariffsCalculateTariffsOfferInfoDTO = {
  readonly offer: TariffsCalculateTariffsOfferDTO;
  readonly tariffs: readonly TariffsCalculatedTariffDTO[];
};
type TariffsCalculateTariffsParametersDTO = {
  readonly campaignId?: TariffsCampaignId;
  readonly sellingProgram?: TariffsSellingProgramType;
  readonly frequency?: TariffsPaymentFrequencyType;
  readonly paymentDelayWeeks?: number;
  readonly currency?: TariffsCurrencyType;
};
type TariffsCalculateTariffsRequest = {
  readonly parameters: TariffsCalculateTariffsParametersDTO;
  readonly offers: readonly TariffsCalculateTariffsOfferDTO[];
};
type TariffsCalculateTariffsResponse = {
  readonly status: TariffsApiResponseStatusType;
  readonly result?: TariffsCalculateTariffsResponseDTO;
};
type TariffsCalculateTariffsResponseDTO = {
  readonly offers: readonly TariffsCalculateTariffsOfferInfoDTO[];
};
type TariffsCalculatedTariffDTO = {
  readonly type: TariffsCalculatedTariffType;
  readonly amount?: number;
  readonly currency?: TariffsCurrencyType;
  readonly parameters: readonly TariffsTariffParameterDTO[];
};
type TariffsCalculatedTariffType =
  | "AGENCY_COMMISSION"
  | "PAYMENT_TRANSFER"
  | "FEE"
  | "DELIVERY_TO_CUSTOMER"
  | "CROSSREGIONAL_DELIVERY"
  | "EXPRESS_DELIVERY"
  | "SORTING"
  | "MIDDLE_MILE"
  | "ITEM_BOOKING";
type TariffsCampaignId = number;
type TariffsCurrencyType =
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
type TariffsPaymentFrequencyType = "DAILY" | "WEEKLY" | "BIWEEKLY" | "MONTHLY";
type TariffsSellingProgramType = "FBY" | "FBS" | "DBS" | "EXPRESS" | "LAAS";
type TariffsTariffParameterDTO = {
  readonly name: string;
  readonly value: string;
};

/**
 * Параметры метода «Калькулятор стоимости услуг».
 *
 * Рассчитывает стоимость услуг Маркета для товаров с заданными параметрами. Порядок товаров в запросе и ответе сохраняется, чтобы определить,
 * для какого товара рассчитана стоимость услуги.
 *
 * Обратите внимание: калькулятор осуществляет примерные расчеты. Финальная стоимость для каждого заказа зависит от предоставленных услуг.
 *
 * Если у вас оформлена подписка, сниженный тариф применится в расчетах. Подробнее о подписке для продавцов читайте [в Справке Маркета для продавцов](https://yandex.ru/support/marketplace/ru/marketing/subscription).
 *
 * В запросе можно указать либо параметр `campaignId`, либо `sellingProgram`. Совместное использование параметров приведет к ошибке.
 *
 * POST /v2/tariffs/calculate
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type CalculateTariffsInput = {
  /**
   * Тело запроса.
   */
  readonly body: TariffsCalculateTariffsRequest;
};
/**
 * Успешный ответ метода «Калькулятор стоимости услуг».
 *
 * 200: Стоимость услуг.
 */
export type CalculateTariffsResponse = TariffsCalculateTariffsResponse;
