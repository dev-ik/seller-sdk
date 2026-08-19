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
type ReportsGenerateUnitedReturnsRequest = {
  readonly businessId: ReportsBusinessId;
  readonly dateFrom: ReportsPeriodDateFrom;
  readonly dateTo: ReportsPeriodDateTo;
  readonly campaignIds?: readonly ReportsCampaignId[] | null;
  readonly returnType?: ReportsReturnType | null;
  readonly returnStatusTypes?:
    | readonly ReportsReturnShipmentStatusType[]
    | null;
};
type ReportsPeriodDateFrom = string;
type ReportsPeriodDateTo = string;
type ReportsReturnShipmentStatusType =
  | "CREATED"
  | "RECEIVED"
  | "IN_TRANSIT"
  | "READY_FOR_PICKUP"
  | "PICKED"
  | "LOST"
  | "EXPIRED"
  | "CANCELLED"
  | "FULFILMENT_RECEIVED"
  | "PREPARED_FOR_UTILIZATION"
  | "NOT_IN_DEMAND"
  | "UTILIZED"
  | "READY_FOR_EXPROPRIATION"
  | "RECEIVED_FOR_EXPROPRIATION"
  | "UNKNOWN";
type ReportsReturnType = "UNREDEEMED" | "RETURN";

/**
 * Параметры метода «Отчет по невыкупам и возвратам».
 *
 * Запускает генерацию сводного отчета по невыкупам и возвратам за заданный период. [Что это за отчет](https://yandex.ru/support/marketplace/ru/orders/returns/logistic#rejected-orders)
 *
 * Отчет содержит информацию о невыкупах и возвратах за указанный период, а также о тех, которые готовы к выдаче.
 *
 * Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
 *
 * POST /v2/reports/united-returns/generate
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GenerateUnitedReturnsReportInput = {
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
  readonly body: ReportsGenerateUnitedReturnsRequest;
};
/**
 * Успешный ответ метода «Отчет по невыкупам и возвратам».
 *
 * 200: В ответ приходит идентификатор, который позволяет узнавать статус генерации и скачать готовый отчет.
 */
export type GenerateUnitedReturnsReportResponse = ReportsGenerateReportResponse;
