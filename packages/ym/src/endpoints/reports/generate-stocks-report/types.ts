// Generated public types for this Yandex Market endpoint.
type ReportsApiResponseStatusType = "OK" | "ERROR";
type ReportsGenerateReportDTO = {
  readonly reportId: string;
  readonly estimatedGenerationTime: number;
};
type ReportsGenerateReportResponse = {
  readonly status: ReportsApiResponseStatusType;
  readonly result?: ReportsGenerateReportDTO;
};
type ReportsGenerateStocksReportRequest = {
  readonly categoryIds?: readonly number[] | null;
  readonly hasStocks?: boolean;
  readonly partnerWarehouseIds?: readonly number[] | null;
};

/**
 * Параметры метода «Отчет по остаткам на складах партнера».
 *
 * Запускает генерацию отчета по остаткам на складах магазинов в кабинете. [Что это за отчет](https://yandex.ru/support/marketplace/ru/storage/logistics#remains-history)
 *
 * **Какая информация вернется:**
 *
 * * Об остатках на всех складах магазинов в кабинете (модели DBS, FBS и Экспресс).
 * * По каждому товару — ваш SKU, название, модель работы, склад, доступное для заказа количество, резерв, цену и статус.
 *
 * Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
 *
 * - Все склады магазинов в кабинете
 *
 * Метод подходит, только если в кабинете нет групп складов
 *
 * Если в кабинете есть группы складов, используйте метод [POST v2/reports/stocks-on-warehouses/generate](../../reference/reports/generateStocksOnWarehousesReport.md). [Что такое группы складов и зачем они нужны](https://yandex.ru/support/marketplace/assortment/operations/stocks.html#unified-stocks).
 *
 * POST /v3/businesses/{businessId}/reports/stocks/generate
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GenerateStocksReportInput = {
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
   * Параметры строки запроса.
   */;
  readonly query?: {
    /**
     * Формат отчета или документа.
     *
     * Формат отчета:
     *
     * * `FILE` — файл с электронной таблицей (:no-translate[XLSX]).
     * * `CSV` — ZIP-архив с CSV-файлами на каждый лист отчета.
     * * `JSON` — ZIP-архив с JSON-файлами на каждый лист отчета.
     *
     * Значение по умолчанию: `"FILE"`.
     */
    readonly format?: "FILE" | "CSV" | "JSON";
  } /**
   * Тело запроса.
   */;
  readonly body?: ReportsGenerateStocksReportRequest;
};
/**
 * Успешный ответ метода «Отчет по остаткам на складах партнера».
 *
 * 200: В ответ приходит идентификатор, который позволяет узнавать статус генерации и скачать готовый отчет.
 */
export type GenerateStocksReportResponse = ReportsGenerateReportResponse;
