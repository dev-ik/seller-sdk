import type { OzonChatV3 } from "../../shared/v3/types.js";
export type OzonChatListStatus = "ALL" | "OPENED" | "CLOSED";

export interface ListChatsV3Request {
  /**
   * Указатель для выборки следующих данных.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly cursor?: string;

  /**
   * Фильтр по чатам.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly filter?: {
    /**
     * Фильтр по статусу чата: - `All` — все чаты; - `Opened` — открытые чаты; - `Closed` — закрытые
     * чаты.
     *
     * Пример: `ALL`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly chat_status?: OzonChatListStatus;

    /**
     * Фильтр по чатам с непрочитанными сообщениями.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly unread_only?: boolean;
  };

  /**
   * Количество значений в ответе. Значение по умолчанию — 30. Максимальное значение — 100.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit: number;
}
export interface ListChatsV3Response {
  readonly chats?: readonly OzonChatV3[];
  readonly cursor?: string;
  readonly has_next?: boolean;
  readonly total_unread_count?: number;
}
