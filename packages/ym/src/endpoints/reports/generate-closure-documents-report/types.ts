// Generated public types for this Yandex Market endpoint.
type ReportsApiResponseStatusType = "OK" | "ERROR";
type ReportsCampaignId = number;
type ReportsClosureDocumentsContractType = "INCOME" | "OUTCOME" | "MARKETING";
type ReportsClosureDocumentsMonthOfYearDTO = {
  readonly year: number;
  readonly month: ReportsMonth;
};
type ReportsGenerateClosureDocumentsRequest = {
  readonly campaignId: ReportsCampaignId;
  readonly monthOfYear: ReportsClosureDocumentsMonthOfYearDTO;
  readonly contractTypes?:
    | readonly ReportsClosureDocumentsContractType[]
    | null;
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
 * Параметры метода «Закрывающие документы».
 *
 * Возвращает ZIP-архив с закрывающими документами в формате PDF за указанный месяц.
 *
 * Состав документов в зависимости от типа договора
 *
 * * **Договор на размещение**
 *
 * * [акт об оказанных услугах](*acts-main-act)
 * * [счет-фактура](*acts-main-invoice)
 * * [сводный отчет по данным статистики](*acts-main-report)
 * * [отчет об исполнении поручения и о зачете взаимных требований](*acts-main-agent) (отчет агента)
 *
 * * **Договор на продвижение** (в России не заключается после 30 сентября 2024 года)
 *
 * * [акт об оказании услуг](*acts-discounts-act)
 * * [счет-фактура](*acts-discounts-invoice), если этого требует схема налогообложения
 *
 * * **Договор на маркетинг**
 *
 * * [акт об оказанных услугах](*acts-marketing-act)
 * * [счет-фактура](*acts-main-invoice)
 * * [счет-фактура на аванс](*acts-marketing-invoice)
 * * [выписка по лицевому счету](*acts-marketing-account)
 * * [детализация к акту](*acts-marketing-details)
 *
 * Узнать статус генерации и получить ссылку на архив можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
 *
 * POST /v2/reports/closure-documents/generate
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GenerateClosureDocumentsReportInput = {
  /**
   * Тело запроса.
   */
  readonly body: ReportsGenerateClosureDocumentsRequest;
};
/**
 * Успешный ответ метода «Закрывающие документы».
 *
 * 200: ZIP-архив с закрывающими документами в формате :no-translate[PDF].
 */
export type GenerateClosureDocumentsReportResponse =
  ReportsGenerateReportResponse;
