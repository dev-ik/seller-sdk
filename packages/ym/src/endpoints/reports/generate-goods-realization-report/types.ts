// Generated public types for this Yandex Market endpoint.
type ReportsApiResponseStatusType = "OK" | "ERROR";
type ReportsCampaignId = number;
type ReportsGenerateGoodsRealizationReportRequest = {
  readonly campaignId: ReportsCampaignId;
  readonly year: ReportsYear;
  readonly month: ReportsMonth;
};
type ReportsGenerateReportDTO = {
  readonly reportId: string;
  readonly estimatedGenerationTime: number;
};
type ReportsGenerateReportResponse = {
  readonly status: ReportsApiResponseStatusType;
  readonly result?: ReportsGenerateReportDTO;
};
type ReportsMonth = number;
type ReportsYear = number;

/**
 * Параметры метода «Отчет по реализации».
 *
 * Запускает генерацию отчета по реализации за заданный период. [Что это за отчет](https://yandex.ru/support/marketplace/ru/accounting/transactions#sales-report)
 *
 * Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
 *
 * - FBY, FBS, Экспресс
 *
 * - DBS
 *
 * POST /v2/reports/goods-realization/generate
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GenerateGoodsRealizationReportInput = {
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
  readonly body: ReportsGenerateGoodsRealizationReportRequest;
};
/**
 * Успешный ответ метода «Отчет по реализации».
 *
 * 200: В ответ приходит идентификатор, который позволяет узнавать статус генерации и скачать готовый отчет.
 */
export type GenerateGoodsRealizationReportResponse =
  ReportsGenerateReportResponse;
