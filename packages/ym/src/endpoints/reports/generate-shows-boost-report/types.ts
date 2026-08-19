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
type ReportsGenerateShowsBoostRequest = {
  readonly businessId: ReportsBusinessId;
  readonly dateFrom: ReportsPeriodDateFrom;
  readonly dateTo: ReportsPeriodDateTo;
  readonly attributionType: ReportsStatisticsAttributionType;
};
type ReportsPeriodDateFrom = string;
type ReportsPeriodDateTo = string;
type ReportsStatisticsAttributionType = "CLICKS" | "SHOWS";

/**
 * Параметры метода «Отчет по бусту показов».
 *
 * Запускает генерацию сводного отчета по бусту показов за заданный период. [Что такое буст показов](https://yandex.ru/support/marketplace/ru/marketing/boost-shows)
 *
 * Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
 *
 * POST /v2/reports/shows-boost/generate
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GenerateShowsBoostReportInput = {
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

    /**
     * Признак типа кабинета, от имени которого вызывается метод:
     *
     * - `SELLER` — продавец.
     *
     * - `ADVERTISER` — рекламодатель.
     *
     * Обязательно указывайте sourceType=ADVERTISER в каждом запросе.
     *
     * Тип кабинета:
     *
     * * `SELLER` — продавец.
     * * `ADVERTISER` — рекламодатель.
     */
    readonly sourceType?: "SELLER" | "ADVERTISER";
  } /**
   * Тело запроса.
   */;
  readonly body: ReportsGenerateShowsBoostRequest;
};
/**
 * Успешный ответ метода «Отчет по бусту показов».
 *
 * 200: В ответ приходит идентификатор, который позволяет узнавать статус генерации и скачать готовый отчет.
 */
export type GenerateShowsBoostReportResponse = ReportsGenerateReportResponse;
