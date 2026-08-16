import type { OzonSellerActionCreatedResponse } from "../../../shared/v1/types.js";

export interface CreateSellerInstallmentActionV1Request {
  /**
   * Дата и время начала акции.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly date_start: string;

  /**
   * Название акции.
   *
   * Минимальная длина: `1`. Максимальная длина: `256`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly title: string;
}

export type CreateSellerInstallmentActionV1Response =
  OzonSellerActionCreatedResponse;
