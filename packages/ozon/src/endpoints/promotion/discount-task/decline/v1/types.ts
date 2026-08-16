import type { OzonDiscountTasksChangeResponse } from "../../shared/v1/types.js";

export interface OzonDiscountTaskDecline {
  /**
   * Идентификатор заявки.
   *
   * Формат: `uint64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly id: number;

  /**
   * Комментарий продавца к заявке.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly seller_comment?: string;
}

export interface DeclineDiscountTasksRequest {
  /**
   * Список заявок.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly tasks: readonly OzonDiscountTaskDecline[];
}

export type DeclineDiscountTasksResponse = OzonDiscountTasksChangeResponse;
