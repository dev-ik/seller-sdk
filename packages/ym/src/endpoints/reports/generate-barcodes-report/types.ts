// Generated public types for this Yandex Market endpoint.
type ReportsApiResponseStatusType = "OK" | "ERROR";
type ReportsBarcodeFormatType =
  | "F_30_20"
  | "F_43_25"
  | "F_58_40"
  | "F_43_25_SINGLE";
type ReportsBarcodeOfferInfoDTO = {
  readonly offerId: ReportsShopSku;
  readonly barcodeCount: number;
};
type ReportsCampaignId = number;
type ReportsGenerateBarcodesReportRequest = {
  readonly campaignId: ReportsCampaignId;
  readonly barcodeFormat: ReportsBarcodeFormatType;
  readonly barcodeOfferInfos?: readonly ReportsBarcodeOfferInfoDTO[] | null;
  readonly supplyRequestId?: ReportsSupplyRequestId;
};
type ReportsGenerateReportDTO = {
  readonly reportId: string;
  readonly estimatedGenerationTime: number;
};
type ReportsGenerateReportResponse = {
  readonly status: ReportsApiResponseStatusType;
  readonly result?: ReportsGenerateReportDTO;
};
type ReportsShopSku = string;
type ReportsSupplyRequestId = number;

/**
 * Параметры метода «Получение файла со штрихкодами».
 *
 * Запускает генерацию PDF-файла со штрихкодами переданных товаров или товаров в указанной заявке на поставку.
 *
 * Файл не получится сгенерировать, если в нем будет более 1 500 штрихкодов.
 *
 * Узнать статус генерации и получить ссылку на готовый файл можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
 *
 * POST /v1/reports/documents/barcodes/generate
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GenerateBarcodesReportInput = {
  /**
   * Тело запроса.
   */
  readonly body: ReportsGenerateBarcodesReportRequest;
};
/**
 * Успешный ответ метода «Получение файла со штрихкодами».
 *
 * 200: В ответ приходит идентификатор, который позволяет узнавать статус генерации и скачать готовый файл.
 */
export type GenerateBarcodesReportResponse = ReportsGenerateReportResponse;
