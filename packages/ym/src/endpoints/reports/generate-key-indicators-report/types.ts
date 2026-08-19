// Generated public types for this Yandex Market endpoint.
type ReportsApiResponseStatusType = "OK" | "ERROR";
type ReportsBusinessId = number;
type ReportsCampaignId = number;
type ReportsGenerateKeyIndicatorsRequest = {
  readonly businessId?: ReportsBusinessId;
  readonly campaignId?: ReportsCampaignId;
  readonly detalizationLevel: ReportsKeyIndicatorsReportDetalizationLevelType;
};
type ReportsGenerateReportDTO = {
  readonly reportId: string;
  readonly estimatedGenerationTime: number;
};
type ReportsGenerateReportResponse = {
  readonly status: ReportsApiResponseStatusType;
  readonly result?: ReportsGenerateReportDTO;
};
type ReportsKeyIndicatorsReportDetalizationLevelType = "WEEK" | "MONTH";

/**
 * Параметры метода «Отчет по ключевым показателям».
 *
 * Запускает генерацию отчета по ключевым показателям. [Что это за отчет](https://yandex.ru/support/marketplace/ru/analytics/key-metrics)
 *
 * Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
 *
 * POST /v2/reports/key-indicators/generate
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GenerateKeyIndicatorsReportInput = {
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
  readonly body: ReportsGenerateKeyIndicatorsRequest;
};
/**
 * Успешный ответ метода «Отчет по ключевым показателям».
 *
 * 200: В ответ приходит идентификатор, который позволяет узнавать статус генерации и скачать готовый отчет.
 */
export type GenerateKeyIndicatorsReportResponse = ReportsGenerateReportResponse;
