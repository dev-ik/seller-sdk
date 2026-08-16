/** Инициатор заявки на отмену rFBS-заказа. */
export type OzonConditionalCancellationInitiator =
  | "OZON"
  | "SELLER"
  | "CLIENT"
  | "SYSTEM"
  | "DELIVERY";

/** Статус заявки, возвращаемый Ozon. */
export type OzonConditionalCancellationState =
  | "ON_APPROVAL"
  | "APPROVED"
  | "REJECTED";

/** Параметры подтверждения или отклонения заявки на отмену. */
export interface ConditionalCancellationDecisionRequest {
  /** Идентификатор заявки на отмену. */
  readonly cancellation_id: number;
  /** Комментарий к решению. */
  readonly comment?: string;
}
