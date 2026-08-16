import type { OzonChatMessageV3 } from "../../shared/v3/types.js";
export interface GetChatHistoryV3Request {
  /**
   * Идентификатор чата.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly chat_id: string;

  /**
   * Направление сортировки сообщений: - `Forward` — от старых к новым. - `Backward` — от новых к
   * старым. Значение по умолчанию — `Backward`. Количество сообщений можно установить в параметре
   * `limit`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly direction?: string;

  /**
   * Фильтр по сообщениям.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly filter?: {
    /**
     * Идентификаторы сообщений.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly message_ids?: readonly string[];
  };

  /**
   * Идентификатор сообщения, с которого нужно начать вывод истории чата. По умолчанию — последнее
   * видимое сообщение. Параметр `from_message_id` обязательный, если `direction = Forward`.
   *
   * Формат: `uint64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly from_message_id?: number;

  /**
   * Количество сообщений в ответе. По умолчанию — 50. Максимальное значение — 1000.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit?: number;
}
export interface GetChatHistoryV3Response {
  readonly has_next?: boolean;
  readonly messages?: readonly OzonChatMessageV3[];
}
