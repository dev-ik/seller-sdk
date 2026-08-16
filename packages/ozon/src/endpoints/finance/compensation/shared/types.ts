import type {
  OzonCreateReportResponse,
  OzonReportLanguage,
} from "../../../report/shared/types.js";

export interface CreateFinanceCompensationReportRequest {
  /**
   * Отчётный период в формате `YYYY-MM`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly date: string;

  /**
   * Язык отчёта: - `RU` — русский, - `EN` — английский.
   *
   * Пример: `RU`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly language?: OzonReportLanguage;
}

export type CreateFinanceCompensationReportResponse = OzonCreateReportResponse;
