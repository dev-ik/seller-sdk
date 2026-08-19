// Generated public types for this Yandex Market endpoint.
type ReportsApiResponseStatusType = "OK" | "ERROR";
type ReportsCampaignId = number;
type ReportsGenerateGoodsMovementReportRequest = {
  readonly campaignId: ReportsCampaignId;
  readonly dateFrom: ReportsPeriodDateFrom;
  readonly dateTo: ReportsPeriodDateTo;
  readonly shopSku?: ReportsShopSku;
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
type ReportsShopSku = string;

/**
 * Параметры метода «Отчет по движению товаров».
 *
 * Запускает генерацию отчета по движению товаров. [Что это за отчет](https://yandex.ru/support/marketplace/analytics/reports-fby-fbs.html#flow)
 *
 * Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
 *
 * POST /v2/reports/goods-movement/generate
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GenerateGoodsMovementReportInput = {
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
  readonly body: ReportsGenerateGoodsMovementReportRequest;
};
/**
 * Успешный ответ метода «Отчет по движению товаров».
 *
 * 200: В ответ приходит идентификатор, который позволяет узнавать статус генерации и скачать готовый отчет.
 */
export type GenerateGoodsMovementReportResponse = ReportsGenerateReportResponse;
