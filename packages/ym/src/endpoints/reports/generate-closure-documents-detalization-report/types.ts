// Generated public types for this Yandex Market endpoint.
type ReportsApiResponseStatusType = "OK" | "ERROR";
type ReportsCampaignId = number;
type ReportsClosureDocumentsContractType = "INCOME" | "OUTCOME" | "MARKETING";
type ReportsClosureDocumentsMonthOfYearDTO = {
  readonly year: number;
  readonly month: ReportsMonth;
};
type ReportsGenerateClosureDocumentsDetalizationRequest = {
  readonly campaignId: ReportsCampaignId;
  readonly monthOfYear: ReportsClosureDocumentsMonthOfYearDTO;
  readonly contractType: ReportsClosureDocumentsContractType;
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

/**
 * Параметры метода «Отчет по схождению с закрывающими документами».
 *
 * Запускает генерацию отчета по схождению с закрывающими документами в зависимости от типа договора.
 *
 * Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
 *
 * - Договор на размещение
 *
 * - Договор на продвижение
 *
 * POST /v2/reports/closure-documents/detalization/generate
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GenerateClosureDocumentsDetalizationReportInput = {
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
  readonly body: ReportsGenerateClosureDocumentsDetalizationRequest;
};
/**
 * Успешный ответ метода «Отчет по схождению с закрывающими документами».
 *
 * 200: В ответ приходит идентификатор, который позволяет узнавать статус генерации и скачать готовый отчет.
 */
export type GenerateClosureDocumentsDetalizationReportResponse =
  ReportsGenerateReportResponse;
