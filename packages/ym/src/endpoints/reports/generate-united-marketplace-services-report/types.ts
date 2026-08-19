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
type ReportsGenerateUnitedMarketplaceServicesReportRequest = {
  readonly businessId: ReportsBusinessId;
  readonly dateTimeFrom?: string;
  readonly dateTimeTo?: string;
  readonly dateFrom?: ReportsPeriodDateFrom;
  readonly dateTo?: string;
  readonly yearFrom?: ReportsYear;
  readonly monthFrom?: ReportsMonth;
  readonly yearTo?: ReportsYear;
  readonly monthTo?: ReportsMonth;
  readonly placementPrograms?: readonly ReportsPlacementType[] | null;
  readonly inns?: readonly string[] | null;
  readonly campaignIds?: readonly ReportsCampaignId[] | null;
};
type ReportsMonth = number;
type ReportsPeriodDateFrom = string;
type ReportsPlacementType = "FBS" | "FBY" | "DBS" | "LAAS";
type ReportsYear = number;

/**
 * Параметры метода «Отчет по стоимости услуг».
 *
 * Запускает генерацию отчета по стоимости услуг за заданный период. [Что это за отчет](https://yandex.ru/support/marketplace/ru/accounting/transactions#reports)
 *
 * Тип отчета зависит от того, какие поля заполнены в запросе:
 *
 * |**Тип отчета** |**Какие поля нужны** |
 * |-----------------------------|---------------------------------|
 * |По дате начисления услуги |`dateFrom` и `dateTo` |
 * |По дате формирования акта |`year` и `month` |
 *
 * Заказать отчеты обоих типов одним запросом нельзя.
 *
 * Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
 *
 * POST /v2/reports/united-marketplace-services/generate
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GenerateUnitedMarketplaceServicesReportInput = {
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
  readonly body: ReportsGenerateUnitedMarketplaceServicesReportRequest;
};
/**
 * Успешный ответ метода «Отчет по стоимости услуг».
 *
 * 200: В ответ приходит идентификатор, который позволяет узнавать статус генерации и скачать готовый отчет.
 */
export type GenerateUnitedMarketplaceServicesReportResponse =
  ReportsGenerateReportResponse;
