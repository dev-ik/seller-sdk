// Generated public types for this Yandex Market endpoint.
type ReportsApiResponseStatusType = "OK" | "ERROR";
type ReportsBusinessId = number;
type ReportsCampaignId = number;
type ReportsGenerateReportDTO = {
  readonly reportId: string;
  readonly estimatedGenerationTime: number;
};
type ReportsGenerateReportResponse = {
  readonly status: ReportsApiResponseStatusType;
  readonly result?: ReportsGenerateReportDTO;
};
type ReportsGenerateStocksOnWarehousesReportRequest = {
  readonly campaignId?: ReportsCampaignId;
  readonly businessId?: ReportsBusinessId;
  readonly warehouseIds?: readonly number[] | null;
  readonly reportDate?: string;
  readonly categoryIds?: readonly number[] | null;
  readonly hasStocks?: boolean;
  readonly campaignIds?: readonly ReportsCampaignId[] | null;
};

/**
 * Параметры метода «Отчет по остаткам на складах».
 *
 * Запускает генерацию отчета по остаткам на складах. [Что это за отчет](https://yandex.ru/support/marketplace/ru/storage/logistics#remains-history)
 *
 * Когда использовать этот метод
 *
 * Метод актуален:
 *
 * * для моделей FBY и LaaS;
 * * для моделей FBS, DBS и Экспресс, если в кабинете есть группы складов.
 *
 * Если в кабинете нет групп складов и вы работаете с моделями FBS, DBS или Экспресс, используйте метод [POST v3/businesses/{businessId}/reports/stocks/generate](../../reference/reports/generateStocksReport.md). [Что такое группы складов и зачем они нужны](https://yandex.ru/support/marketplace/assortment/operations/stocks.html#unified-stocks).
 *
 * **Какая информация вернется:**
 *
 * * Для моделей FBY и LaaS, если указать `campaignId`, — об остатках на складах Маркета.
 * * Для остальных моделей, если указать `campaignId`, — об остатках на соответствующем складе магазина.
 * * Для остальных моделей, если указать `businessId`, — об остатках на всех складах магазинов в кабинете, кроме FBY и LaaS. Используйте фильтр `campaignIds`, чтобы указать определенные магазины.
 *
 * ⚠️ Не передавайте одновременно `campaignId` и `businessId`.
 *
 * Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
 *
 * - Склад Маркета
 *
 * - Склад магазина
 *
 * - Все склады магазинов в кабинете, кроме FBY и LaaS
 *
 * POST /v2/reports/stocks-on-warehouses/generate
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GenerateStocksOnWarehousesReportInput = {
  /**
   * Параметры строки запроса.
   */
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
  readonly body: ReportsGenerateStocksOnWarehousesReportRequest;
};
/**
 * Успешный ответ метода «Отчет по остаткам на складах».
 *
 * 200: В ответ приходит идентификатор, который позволяет узнавать статус генерации и скачать готовый отчет.
 */
export type GenerateStocksOnWarehousesReportResponse =
  ReportsGenerateReportResponse;
