// Generated public types for this Yandex Market endpoint.
type GoodsStatsApiResponseStatusType = "OK" | "ERROR";
type GoodsStatsCurrencyType =
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
type GoodsStatsGetGoodsStatsRequest = {
  readonly shopSkus: readonly GoodsStatsShopSku[];
};
type GoodsStatsGetGoodsStatsResponse = {
  readonly status: GoodsStatsApiResponseStatusType;
  readonly result?: GoodsStatsGoodsStatsDTO;
};
type GoodsStatsGoodsStatsDTO = {
  readonly shopSkus: readonly GoodsStatsGoodsStatsGoodsDTO[];
};
type GoodsStatsGoodsStatsGoodsDTO = {
  readonly shopSku?: GoodsStatsShopSku;
  readonly marketSku?: GoodsStatsMarketSku;
  readonly name?: string;
  readonly price?: number;
  readonly categoryId?: number;
  readonly categoryName?: string;
  readonly weightDimensions?: GoodsStatsGoodsStatsWeightDimensionsDTO;
  readonly warehouses?: readonly GoodsStatsGoodsStatsWarehouseDTO[] | null;
  readonly tariffs?: readonly GoodsStatsTariffDTO[] | null;
  readonly pictures?: readonly GoodsStatsUrl[] | null;
};
type GoodsStatsGoodsStatsWarehouseDTO = {
  readonly id?: number;
  readonly name?: string;
  readonly stocks: readonly GoodsStatsWarehouseStockDTO[];
};
type GoodsStatsGoodsStatsWeightDimensionsDTO = {
  readonly length?: number;
  readonly width?: number;
  readonly height?: number;
  readonly weight?: number;
};
type GoodsStatsMarketSku = number;
type GoodsStatsShopSku = string;
type GoodsStatsTariffDTO = {
  readonly type: GoodsStatsTariffType;
  readonly percent?: number;
  readonly amount: number;
  readonly currency: GoodsStatsCurrencyType;
  readonly parameters: readonly GoodsStatsTariffParameterDTO[];
};
type GoodsStatsTariffParameterDTO = {
  readonly name: string;
  readonly value: string;
};
type GoodsStatsTariffType =
  | "AGENCY_COMMISSION"
  | "PAYMENT_TRANSFER"
  | "STORAGE"
  | "WITHDRAW"
  | "SURPLUS"
  | "FEE"
  | "DELIVERY_TO_CUSTOMER"
  | "CROSSREGIONAL_DELIVERY"
  | "CROSSREGIONAL_DELIVERY_RETURN"
  | "DISPOSAL"
  | "SORTING_CENTER_STORAGE"
  | "EXPRESS_DELIVERY"
  | "FF_XDOC_SUPPLY_BOX"
  | "FF_XDOC_SUPPLY_PALLET"
  | "SORTING"
  | "MIDDLE_MILE"
  | "RETURN_PROCESSING"
  | "EXPRESS_CANCELLED_BY_PARTNER"
  | "CROSSBORDER_DELIVERY"
  | "INTAKE_SORTING_BULKY_CARGO"
  | "INTAKE_SORTING_SMALL_GOODS"
  | "INTAKE_SORTING_DAILY"
  | "FF_STORAGE_BILLING"
  | "CANCELLED_ORDER_FEE_QI"
  | "LATE_ORDER_EXECUTION_FEE_QI"
  | "VOLUME_STORAGE"
  | "GOODS_ACCEPTANCE"
  | "CARGO_ACCEPTANCE"
  | "ORDER_PROCESSING"
  | "WITHDRAW_EXTERNAL"
  | "ITEM_BOOKING";
type GoodsStatsUrl = string;
type GoodsStatsWarehouseStockDTO = {
  readonly type: GoodsStatsWarehouseStockType;
  readonly count: number;
};
type GoodsStatsWarehouseStockType =
  | "FIT"
  | "FREEZE"
  | "AVAILABLE"
  | "QUARANTINE"
  | "UTILIZATION"
  | "DEFECT"
  | "EXPIRED";

/**
 * Параметры метода «Отчет по товарам».
 *
 * Возвращает подробный отчет по товарам, которые вы разместили на Маркете. С помощью отчета вы можете узнать, например, об остатках на складе, об условиях хранения ваших товаров и т. д.
 *
 * POST /v2/campaigns/{campaignId}/stats/skus
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetGoodsStatsInput = {
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
  readonly body: GoodsStatsGetGoodsStatsRequest;
};
/**
 * Успешный ответ метода «Отчет по товарам».
 *
 * 200: Отчет по товарам.
 */
export type GetGoodsStatsResponse = GoodsStatsGetGoodsStatsResponse;
