export interface ListFbsActsRequest {
  /**
   * Параметры фильтра.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly filter?: {
    /**
     * Начальная дата создания отгрузок.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly date_from: string;

    /**
     * Конечная дата создания отгрузок.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly date_to: string;

    /**
     * Тип интеграции со службой доставки: - `ozon` — доставка силами Ozon. - `aggregator` — доставка
     * внешней службой, Ozon регистрирует заказ. - `3pl_tracking` — доставка внешней службой, продавец
     * регистрирует заказ. - `non_integrated` — доставка силами продавца.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly integration_type?: string;

    /**
     * Статусы перевозок: - `new` — новая, - `awaiting_retry` — повторная попытка создания, -
     * `in_process` — собирается, - `success` — создана, - `error` — ошибка при создании, - `sended` —
     * отправлена, - `received` — получена, - `formed` — собрана, - `cancelled` — отменена, - `pending`
     * — в очереди на сборку, - `completion_enqueued` — в очереди на завершение, -
     * `completion_processing` — в процессе завершения, - `completion_failed` — ошибка при завершении,
     * - `cancelation_enqueued` — в очереди на отмену, - `cancelation_processing` — в процессе отмены,
     * - `cancelation_failed` — ошибка при отмене, - `completed` — завершена, - `closed` — закрыта.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly status?: readonly string[];
  };

  /**
   * Максимальное количество актов в ответе.
   *
   * Формат: `int64`. Максимум: `50`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit: number;
}
export interface OzonFbsActDocument {
  readonly created_at?: string;
  readonly document_status?: string;
}
export interface OzonFbsActRelatedDocuments {
  readonly act_of_acceptance?: OzonFbsActDocument;
  readonly act_of_mismatch?: OzonFbsActDocument;
  readonly act_of_excess?: OzonFbsActDocument;
}
export interface OzonFbsAct {
  readonly id?: number;
  readonly delivery_method_id?: number;
  readonly delivery_method_name?: string;
  readonly integration_type?: string;
  readonly containers_count?: number;
  readonly status?: string;
  readonly departure_date?: string;
  readonly created_at?: string;
  readonly updated_at?: string;
  readonly act_type?: string;
  readonly is_partial?: boolean;
  readonly has_postings_for_next_carriage?: boolean;
  readonly partial_num?: number;
  readonly related_docs?: OzonFbsActRelatedDocuments;
}
export interface ListFbsActsResponse {
  readonly result?: readonly OzonFbsAct[];
}
