import type { OzonRealizationReportRow } from "../../../shared/types.js";

export interface GetRealizationReportByDayV1Request {
  /**
   * День.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly day: number;

  /**
   * Месяц.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly month: number;

  /**
   * Год.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly year: number;
}

export interface OzonRealizationReportByDayRow
  extends OzonRealizationReportRow {
  readonly rowNumber?: number;
}

export interface GetRealizationReportByDayV1Response {
  readonly rows?: readonly OzonRealizationReportByDayRow[];
}
