import type { OzonReport } from "../../shared/types.js";
export interface GetReportInfoV1Request {
  /**
   * Уникальный идентификатор отчёта.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly code: string;
}
export interface GetReportInfoV1Response {
  readonly result?: OzonReport;
}
