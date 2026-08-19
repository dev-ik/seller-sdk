// Generated public types for this Yandex Market endpoint.
type ReportsApiResponseStatusType = "OK" | "ERROR";
type ReportsCampaignId = number;
type ReportsGenerateReportDTO = {
  readonly reportId: string;
  readonly estimatedGenerationTime: number;
};
type ReportsGenerateReportResponse = {
  readonly status: ReportsApiResponseStatusType;
  readonly result?: ReportsGenerateReportDTO;
};
type ReportsGenerateShipmentListDocumentReportRequest = {
  readonly campaignId: ReportsCampaignId;
  readonly shipmentId?: number;
  readonly orderIds?: readonly number[] | null;
};

/**
 * Параметры метода «Получение листа сборки».
 *
 * Запускает генерацию **листа сборки** для отгрузки.
 *
 * Чтобы на в листе сборки отображался внешний идентификатор заказа, передайте его в методе [POST v2/campaigns/{campaignId}/orders/{orderId}/external-id](../../reference/orders/updateExternalOrderId.md).
 *
 * Узнать статус генерации и получить ссылку на готовый документ можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
 *
 * POST /v2/reports/documents/shipment-list/generate
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GenerateShipmentListDocumentReportInput = {
  /**
   * Тело запроса.
   */
  readonly body: ReportsGenerateShipmentListDocumentReportRequest;
};
/**
 * Успешный ответ метода «Получение листа сборки».
 *
 * 200: В ответ приходит идентификатор, который позволяет узнавать статус генерации и скачать готовый документ.
 */
export type GenerateShipmentListDocumentReportResponse =
  ReportsGenerateReportResponse;
