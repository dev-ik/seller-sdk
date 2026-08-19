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
type ReportsGenerateUnitedNettingReportRequest = {
  readonly businessId: ReportsBusinessId;
  readonly dateTimeFrom?: string;
  readonly dateTimeTo?: string;
  readonly dateFrom?: ReportsPeriodDateFrom;
  readonly dateTo?: string;
  readonly bankOrderId?: number;
  readonly bankOrderDateTime?: string;
  readonly monthOfYear?: ReportsMonthOfYearDTO;
  readonly placementPrograms?: readonly ReportsPlacementType[] | null;
  readonly inns?: readonly string[] | null;
  readonly campaignIds?: readonly ReportsCampaignId[] | null;
};
type ReportsMonth = number;
type ReportsMonthOfYearDTO = {
  readonly year: ReportsYear;
  readonly month: ReportsMonth;
};
type ReportsPeriodDateFrom = string;
type ReportsPlacementType = "FBS" | "FBY" | "DBS" | "LAAS";
type ReportsYear = number;

/**
 * Параметры метода «Отчет по платежам».
 *
 * Запускает генерацию отчета по платежам за заданный период. [Что это за отчет](https://yandex.ru/support/marketplace/ru/accounting/transactions#all-pay)
 *
 * Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
 *
 * Тип отчета зависит от того, какие поля заполнены в запросе:
 *
 * #|
 * || **Тип отчета** | **Какие поля нужны** | **Комментарий** ||
 * || О платежах за период | `dateFrom` и `dateTo` |
 * В отчет попадают все платежи, которые были выплачены и начислены в выбранный период.
 *
 * Пример: если перевод выполнен 31 августа и зачислен 1 сентября, он попадет в отчет за оба месяца.
 * ||
 * || О платежном поручении | `bankOrderId` и `bankOrderDateTime` |—||
 * || [О баллах Маркета](*баллы_маркета) | `monthOfYear` |—||
 * |#
 *
 * Заказать отчеты нескольких типов одним запросом нельзя.
 *
 * POST /v2/reports/united-netting/generate
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GenerateUnitedNettingReportInput = {
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
  readonly body: ReportsGenerateUnitedNettingReportRequest;
};
/**
 * Успешный ответ метода «Отчет по платежам».
 *
 * 200: В ответ приходит идентификатор, который позволяет узнавать статус генерации и скачать готовый отчет.
 */
export type GenerateUnitedNettingReportResponse = ReportsGenerateReportResponse;
