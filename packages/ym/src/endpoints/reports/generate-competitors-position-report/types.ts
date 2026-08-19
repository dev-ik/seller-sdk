// Generated public types for this Yandex Market endpoint.
type ReportsApiResponseStatusType = "OK" | "ERROR";
type ReportsBusinessId = number;
type ReportsGenerateCompetitorsPositionReportRequest = {
  readonly businessId: ReportsBusinessId;
  readonly categoryId: number;
  readonly dateFrom: ReportsPeriodDateFrom;
  readonly dateTo: ReportsPeriodDateTo;
};
type ReportsGenerateReportDTO = {
  readonly reportId: string;
  readonly estimatedGenerationTime: number;
};
type ReportsGenerateReportResponse = {
  readonly status: ReportsApiResponseStatusType;
  readonly result?: ReportsGenerateReportDTO;
};
type ReportsPeriodDateFrom = string;
type ReportsPeriodDateTo = string;

/**
 * Параметры метода «Отчет «Конкурентная позиция»».
 *
 * Запускает генерацию отчета «Конкурентная позиция» за заданный период. [Что это за отчет](https://yandex.ru/support2/marketplace/ru/analytics/competitors.html)
 *
 * Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
 *
 * Значение -1 в отчете
 *
 * Если в CSV-файле в столбце :no-translate[**POSITION**] стоит -1, в этот день не было заказов с товарами в указанной категории.
 *
 * POST /v2/reports/competitors-position/generate
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GenerateCompetitorsPositionReportInput = {
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
  readonly body: ReportsGenerateCompetitorsPositionReportRequest;
};
/**
 * Успешный ответ метода «Отчет «Конкурентная позиция»».
 *
 * 200: В ответ приходит идентификатор, который позволяет узнавать статус генерации и скачать готовый отчет.
 */
export type GenerateCompetitorsPositionReportResponse =
  ReportsGenerateReportResponse;
