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
type ReportsGenerateShowsSalesReportRequest = {
  readonly businessId?: ReportsBusinessId;
  readonly campaignId?: ReportsCampaignId;
  readonly dateFrom: ReportsPeriodDateFrom;
  readonly dateTo: ReportsPeriodDateTo;
  readonly grouping: ReportsShowsSalesGroupingType;
};
type ReportsPeriodDateFrom = string;
type ReportsPeriodDateTo = string;
type ReportsShowsSalesGroupingType = "CATEGORIES" | "OFFERS";

/**
 * Параметры метода «Отчет «Аналитика продаж»».
 *
 * Запускает генерацию отчета «Аналитика продаж» за заданный период. [Что это за отчет](https://yandex.ru/support/marketplace/analytics/shows-sales.html)
 *
 * Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
 *
 * POST /v2/reports/shows-sales/generate
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GenerateShowsSalesReportInput = {
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
  readonly body: ReportsGenerateShowsSalesReportRequest;
};
/**
 * Успешный ответ метода «Отчет «Аналитика продаж»».
 *
 * 200: В ответ приходит идентификатор, который позволяет узнавать статус генерации и скачать готовый отчет.
 */
export type GenerateShowsSalesReportResponse = ReportsGenerateReportResponse;
