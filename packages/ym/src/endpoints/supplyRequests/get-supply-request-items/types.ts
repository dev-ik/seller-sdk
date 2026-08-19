// Generated public types for this Yandex Market endpoint.
type SupplyRequestsApiResponseStatusType = "OK" | "ERROR";
type SupplyRequestsCurrencyType =
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
type SupplyRequestsCurrencyValueDTO = {
  readonly value: number;
  readonly currencyId: SupplyRequestsCurrencyType;
};
type SupplyRequestsGetSupplyRequestItemsDTO = {
  readonly items: readonly SupplyRequestsSupplyRequestItemDTO[];
  readonly paging?: SupplyRequestsPackagingForwardScrollingPagerDTO;
};
type SupplyRequestsGetSupplyRequestItemsRequest = {
  readonly requestId: SupplyRequestsSupplyRequestId;
};
type SupplyRequestsGetSupplyRequestItemsResponse = {
  readonly status: SupplyRequestsApiResponseStatusType;
  readonly result?: SupplyRequestsGetSupplyRequestItemsDTO;
};
type SupplyRequestsPackagingForwardScrollingPagerDTO = {
  readonly nextPageToken?: string;
};
type SupplyRequestsShopSku = string;
type SupplyRequestsSupplyRequestId = number;
type SupplyRequestsSupplyRequestItemCountersDTO = {
  readonly planCount?: number;
  readonly factCount?: number;
  readonly surplusCount?: number;
  readonly shortageCount?: number;
  readonly defectCount?: number;
};
type SupplyRequestsSupplyRequestItemDTO = {
  readonly offerId: SupplyRequestsShopSku;
  readonly name: string;
  readonly price?: SupplyRequestsCurrencyValueDTO;
  readonly counters: SupplyRequestsSupplyRequestItemCountersDTO;
};

/**
 * Параметры метода «Получение товаров в заявке на поставку, вывоз или утилизацию».
 *
 * Возвращает список товаров в заявке и информацию по ним.
 *
 * POST /v2/campaigns/{campaignId}/supply-requests/items
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetSupplyRequestItemsInput = {
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
     * Значение по умолчанию: `250`.
     *
     * Минимальное значение: 1.
     *
     * Максимальное значение: 500.
     */
    readonly limit?: number;
  } /**
   * Тело запроса.
   */;
  readonly body: SupplyRequestsGetSupplyRequestItemsRequest;
};
/**
 * Успешный ответ метода «Получение товаров в заявке на поставку, вывоз или утилизацию».
 *
 * 200: Список товаров в заявке и информация по ним.
 */
export type GetSupplyRequestItemsResponse =
  SupplyRequestsGetSupplyRequestItemsResponse;
