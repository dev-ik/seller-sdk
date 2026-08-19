// Generated public types for this Yandex Market endpoint.
type ReportsApiResponseStatusType = "OK" | "ERROR";
type ReportsBusinessId = number;
type ReportsCampaignId = number;
type ReportsGenerateGoodsPricesReportRequest = {
  readonly businessId?: ReportsBusinessId;
  readonly categoryIds?: readonly number[] | null;
  readonly campaignId?: ReportsCampaignId;
};
type ReportsGenerateReportDTO = {
  readonly reportId: string;
  readonly estimatedGenerationTime: number;
};
type ReportsGenerateReportResponse = {
  readonly status: ReportsApiResponseStatusType;
  readonly result?: ReportsGenerateReportDTO;
};

/**
 * Параметры метода «Отчет «Цены»».
 *
 * Запускает генерацию отчета «Цены».
 *
 * **Какая информация вернется:**
 *
 * * если передать `businessId` — по единым ценам кабинета;
 * * если [включены магазинные цены](*onlyDefaultPrice-false) и указать `campaignId` — по ценам в соответствующем магазине.
 *
 * Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
 *
 * - Цены во всех магазинах кабинета
 *
 * - Магазинные цены
 *
 * POST /v2/reports/goods-prices/generate
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GenerateGoodsPricesReportInput = {
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
  readonly body: ReportsGenerateGoodsPricesReportRequest;
};
/**
 * Успешный ответ метода «Отчет «Цены»».
 *
 * 200: В ответ приходит идентификатор, который позволяет узнавать статус генерации и скачать готовый отчет.
 */
export type GenerateGoodsPricesReportResponse = ReportsGenerateReportResponse;
