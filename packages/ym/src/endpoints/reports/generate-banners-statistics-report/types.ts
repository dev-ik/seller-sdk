// Generated public types for this Yandex Market endpoint.
type ReportsApiResponseStatusType = "OK" | "ERROR";
type ReportsBusinessId = number;
type ReportsGenerateBannersStatisticsRequest = {
  readonly businessId: ReportsBusinessId;
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
 * Параметры метода «Отчет по охватному продвижению».
 *
 * Запускает генерацию сводного отчета по охватному продвижению. Что это за отчет: [для баннеров](https://yandex.ru/support/marketplace/ru/marketing/advertising-tools/banner#statistics), [для пуш-уведомлений](https://yandex.ru/support/marketplace/ru/marketing/advertising-tools/push-notifications#statistics).
 *
 * Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
 *
 * POST /v2/reports/banners-statistics/generate
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GenerateBannersStatisticsReportInput = {
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
  readonly body: ReportsGenerateBannersStatisticsRequest;
};
/**
 * Успешный ответ метода «Отчет по охватному продвижению».
 *
 * 200: В ответ приходит идентификатор, который позволяет узнавать статус генерации и скачать готовый отчет.
 */
export type GenerateBannersStatisticsReportResponse =
  ReportsGenerateReportResponse;
