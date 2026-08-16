import type {
  OzonCreateReportResponse,
  OzonReportLanguage,
} from "../../../../../report/shared/types.js";

export interface CreateB2BSalesReportV1Request {
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

export type CreateB2BSalesReportV1Response = OzonCreateReportResponse;
