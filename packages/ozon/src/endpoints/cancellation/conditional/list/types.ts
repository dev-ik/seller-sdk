import type {
  OzonConditionalCancellationInitiator,
  OzonConditionalCancellationState,
} from "../shared/types.js";

/** Статус для фильтрации заявок на отмену. */
export type OzonConditionalCancellationFilterState =
  | "ALL"
  | OzonConditionalCancellationState;

/** Фильтры списка заявок на отмену. */
export interface ListConditionalCancellationsFilters {
  /** Инициаторы отмены. */
  readonly cancellation_initiator?: readonly OzonConditionalCancellationInitiator[];
  /** Номера отправлений. */
  readonly posting_number?: readonly string[];
  /** Статус заявки. */
  readonly state?: OzonConditionalCancellationFilterState;
}

/** Дополнительные данные в ответе. */
export interface ListConditionalCancellationsWith {
  /** Вернуть счётчик заявок в статусе `ON_APPROVAL`. */
  readonly counter?: boolean;
}

/** Параметры получения заявок на отмену rFBS-заказов. */
export interface ListConditionalCancellationsRequest {
  /** Фильтры списка. */
  readonly filters?: ListConditionalCancellationsFilters;
  /** Идентификатор последнего элемента предыдущей страницы. */
  readonly last_id?: number;
  /** Количество заявок в ответе, не более 500. */
  readonly limit: number;
  /** Дополнительные данные в ответе. */
  readonly with?: ListConditionalCancellationsWith;
}

/** Причина отмены rFBS-заказа. */
export interface OzonConditionalCancellationReason {
  /** Идентификатор причины. */
  readonly id?: number;
  /** Название причины. */
  readonly name?: string;
}

/** Статус заявки на отмену. */
export interface OzonConditionalCancellationStatus {
  /** Идентификатор статуса. */
  readonly id?: number;
  /** Название статуса. */
  readonly name?: string;
  /** Машинное значение статуса. */
  readonly state?: OzonConditionalCancellationState;
}

/** Заявка на отмену rFBS-заказа. */
export interface OzonConditionalCancellation {
  /** Комментарий при подтверждении или отклонении заявки. */
  readonly approve_comment?: string;
  /** Дата подтверждения или отклонения заявки. */
  readonly approve_date?: string;
  /** Дата автоматического подтверждения заявки. */
  readonly auto_approve_date?: string;
  /** Идентификатор заявки. */
  readonly cancellation_id?: number;
  /** Инициатор отмены. */
  readonly cancellation_initiator?: OzonConditionalCancellationInitiator;
  /** Причина отмены. */
  readonly cancellation_reason?: OzonConditionalCancellationReason;
  /** Комментарий инициатора отмены. */
  readonly cancellation_reason_message?: string;
  /** Дата создания заявки на отмену. */
  readonly cancelled_at?: string;
  /** Дата создания заказа. */
  readonly order_date?: string;
  /** Номер отправления. */
  readonly posting_number?: string;
  /** Предыдущий идентификатор заявки для обратной совместимости. */
  readonly source_id?: number;
  /** Статус заявки. */
  readonly state?: OzonConditionalCancellationStatus;
  /** Тип интеграции со службой доставки. */
  readonly tpl_integration_type?: string;
}

/** Ответ со списком заявок на отмену rFBS-заказов. */
export interface ListConditionalCancellationsResponse {
  /** Количество заявок в статусе `ON_APPROVAL`. */
  readonly counter?: number;
  /** Идентификатор последнего элемента страницы. */
  readonly last_id?: number;
  /** Заявки на отмену. */
  readonly result?: readonly OzonConditionalCancellation[];
}
