import type { OzonCancellationReasonsResponse } from "../shared/types.js";

/** Параметры получения причин отмены заказа. */
export interface ListCancelReasonsByOrderRequest {
  /** Номер заказа. */
  readonly order_number: string;
}

/** Причины отмены конкретного заказа. */
export type ListCancelReasonsByOrderResponse = OzonCancellationReasonsResponse;
