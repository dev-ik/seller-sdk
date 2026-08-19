// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGenerateShipmentListDocumentReportResponse } from "./contract.js";
import type {
  GenerateShipmentListDocumentReportInput,
  GenerateShipmentListDocumentReportResponse,
} from "./types.js";

export const GENERATE_SHIPMENT_LIST_DOCUMENT_REPORT_OPERATION_ID =
  "generateShipmentListDocumentReport";

const definition: YmOperationDefinition<GenerateShipmentListDocumentReportResponse> =
  {
    operationId: GENERATE_SHIPMENT_LIST_DOCUMENT_REPORT_OPERATION_ID,
    method: "POST",
    path: "/v2/reports/documents/shipment-list/generate",
    productionOrigin: "https://api.partner.market.yandex.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseGenerateShipmentListDocumentReportResponse,
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  };

export function executeGenerateShipmentListDocumentReport(
  execute: YmOperationExecutor,
  input: GenerateShipmentListDocumentReportInput,
  options: YmRequestOptions = {},
): Promise<GenerateShipmentListDocumentReportResponse> {
  return execute(definition, input, options);
}
