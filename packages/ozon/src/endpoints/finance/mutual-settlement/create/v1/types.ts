import type {
  OzonCreateReportResponse,
  OzonReportLanguage,
} from "../../../../report/shared/types.js";

export interface CreateMutualSettlementReportV1Request {
  /**
   * Отчётный период в формате `YYYY-MM`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly date: string;

  /**
   * Язык ответа: - `RU` — русский, - `EN` — английский.
   *
   * Пример: `DEFAULT`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly language?: OzonReportLanguage;
}

export type CreateMutualSettlementReportV1Response = OzonCreateReportResponse;
