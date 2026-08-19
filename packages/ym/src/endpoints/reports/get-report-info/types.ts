// Generated public types for this Yandex Market endpoint.
type ReportsApiResponseStatusType = "OK" | "ERROR";
type ReportsGetReportInfoResponse = {
  readonly status: ReportsApiResponseStatusType;
  readonly result?: ReportsReportInfoDTO;
};
type ReportsReportInfoDTO = {
  readonly status: ReportsReportStatusType;
  readonly subStatus?: ReportsReportSubStatusType;
  readonly generationRequestedAt: string;
  readonly generationFinishedAt?: string;
  readonly file?: string;
  readonly estimatedGenerationTime?: number;
};
type ReportsReportStatusType = "PENDING" | "PROCESSING" | "FAILED" | "DONE";
type ReportsReportSubStatusType =
  | "NO_DATA"
  | "TOO_LARGE"
  | "RESOURCE_NOT_FOUND";

/**
 * Параметры метода «Получение заданного отчета или документа».
 *
 * Возвращает статус генерации заданного отчета или документа и, если он готов, ссылку для скачивания.
 *
 * Чтобы воспользоваться этим запросом, вначале нужно запустить генерацию отчета или документа. [Инструкция](../../step-by-step/reports.md)
 *
 * GET /v2/reports/info/{reportId}
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetReportInfoInput = {
  /**
   * Параметры пути.
   */
  readonly path: {
    /**
     * Идентификатор отчета или документа, который вы получили после запуска генерации.
     *
     * Минимальная длина: 1.
     *
     * Максимальная длина: 255.
     */
    readonly reportId: string;
  } /**
   * Параметры строки запроса.
   */;
  readonly query?: {
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
  };
};
/**
 * Успешный ответ метода «Получение заданного отчета или документа».
 *
 * 200: Статус генерации отчета или документа и ссылка, если она уже есть.
 *
 * Статус генерации `FAILED` или `NO_DATA`
 *
 * Проверьте корректность запроса на генерацию. Например, верно ли указан идентификатор кампании, период или номер платежного поручения.
 */
export type GetReportInfoResponse = ReportsGetReportInfoResponse;
