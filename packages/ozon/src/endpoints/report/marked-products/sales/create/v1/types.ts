import type { OzonCreateReportResponse } from "../../../../shared/types.js";

export interface CreateMarkedProductsSalesReportV1Request {
  /**
   * Период формирования отчёта.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly date?: {
    /**
     * Дата начала отчётного периода в формате `YYYY-MM-DD`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly from: string;

    /**
     * Дата окончания отчётного периода в формате `YYYY-MM-DD`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly to: string;
  };
}

export type CreateMarkedProductsSalesReportV1Response =
  OzonCreateReportResponse;
