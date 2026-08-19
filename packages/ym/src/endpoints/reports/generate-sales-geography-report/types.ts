// Generated public types for this Yandex Market endpoint.
type ReportsApiResponseStatusType = "OK" | "ERROR";
type ReportsBusinessId = number;
type ReportsGenerateReportDTO = {
  readonly reportId: string;
  readonly estimatedGenerationTime: number;
};
type ReportsGenerateReportResponse = {
  readonly status: ReportsApiResponseStatusType;
  readonly result?: ReportsGenerateReportDTO;
};
type ReportsGenerateSalesGeographyRequest = {
  readonly businessId: ReportsBusinessId;
  readonly dateFrom: ReportsPeriodDateFrom;
  readonly dateTo: ReportsPeriodDateTo;
  readonly categoryIds?: readonly number[] | null;
  readonly offerIds?: readonly ReportsShopSku[] | null;
};
type ReportsPeriodDateFrom = string;
type ReportsPeriodDateTo = string;
type ReportsShopSku = string;

/**
 * Параметры метода «Отчет по географии продаж».
 *
 * Запускает генерацию отчета по географии продаж. [Что это за отчет](https://yandex.ru/support/marketplace/ru/analytics/sales-geography)
 *
 * Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
 *
 * POST /v2/reports/sales-geography/generate
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GenerateSalesGeographyReportInput = {
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
  readonly body: ReportsGenerateSalesGeographyRequest;
};
/**
 * Успешный ответ метода «Отчет по географии продаж».
 *
 * 200: В ответ приходит идентификатор, который позволяет узнавать статус генерации и скачать готовый отчет.
 */
export type GenerateSalesGeographyReportResponse =
  ReportsGenerateReportResponse;
