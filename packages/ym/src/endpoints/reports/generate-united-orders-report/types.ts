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
type ReportsGenerateUnitedOrdersRequest = {
  readonly businessId: ReportsBusinessId;
  readonly dateFrom: ReportsPeriodDateFrom;
  readonly dateTo: string;
  readonly campaignIds?: readonly ReportsCampaignId[] | null;
  readonly promoId?: string;
};
type ReportsPeriodDateFrom = string;

/**
 * Параметры метода «Отчет по заказам».
 *
 * Запускает генерацию отчета по заказам за заданный период. [Что это за отчет](https://yandex.ru/support/marketplace/ru/accounting/transactions#get-report)
 *
 * Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
 *
 * POST /v2/reports/united-orders/generate
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GenerateUnitedOrdersReportInput = {
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
     * Язык отчета или документа.
     *
     * Язык отчета:
     *
     * * `RU` — русский язык.
     * * `EN` — английский язык.
     */
    readonly language?: "RU" | "EN";
  } /**
   * Тело запроса.
   */;
  readonly body: ReportsGenerateUnitedOrdersRequest;
};
/**
 * Успешный ответ метода «Отчет по заказам».
 *
 * 200: В ответ приходит идентификатор, который позволяет узнавать статус генерации и скачать готовый отчет.
 */
export type GenerateUnitedOrdersReportResponse = ReportsGenerateReportResponse;
