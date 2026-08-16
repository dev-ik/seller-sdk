import type { OzonCancellationReasonsResponse } from "../shared/types.js";

/** Параметры получения причин отмены отправления. */
export interface ListCancelReasonsByPostingRequest {
  /** Номер отправления. */
  readonly posting_number: string;
}

/** Причины отмены конкретного отправления. */
export type ListCancelReasonsByPostingResponse =
  OzonCancellationReasonsResponse;
