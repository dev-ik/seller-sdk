import type { OzonDiscountTasksChangeResponse } from "../../shared/v1/types.js";

export interface OzonDiscountTaskApproval {
  /**
   * Идентификатор заявки. Можно получить с помощью метода
   * [/v1/actions/discounts-task/list](#operation/promos_task_list).
   *
   * Формат: `uint64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly id: number;

  /**
   * Согласованная цена.
   *
   * Формат: `double`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly approved_price: number;

  /**
   * Комментарий продавца к заявке.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly seller_comment?: string;

  /**
   * Одобренное минимальное количество товаров.
   *
   * Формат: `uint64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly approved_quantity_min: number;

  /**
   * Одобренное максимальное количество товаров.
   *
   * Формат: `uint64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly approved_quantity_max: number;
}

export interface ApproveDiscountTasksRequest {
  /**
   * Список заявок.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly tasks: readonly OzonDiscountTaskApproval[];
}

export type ApproveDiscountTasksResponse = OzonDiscountTasksChangeResponse;
