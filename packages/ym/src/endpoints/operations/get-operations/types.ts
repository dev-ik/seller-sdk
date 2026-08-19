// Generated public types for this Yandex Market endpoint.
type OperationsApiResponseStatusType = "OK" | "ERROR";
type OperationsGetOperationsRequest = {
  readonly operationType: OperationsOperationType;
  readonly operationIds: readonly OperationsOperationId[];
};
type OperationsGetOperationsResponse = {
  readonly status: OperationsApiResponseStatusType;
  readonly result?: OperationsGetOperationsResultDTO;
};
type OperationsGetOperationsResultDTO = {
  readonly operations: readonly OperationsOperationResultDTO[];
};
type OperationsOperationId = string;
type OperationsOperationResultDTO = {
  readonly id: OperationsOperationId;
  readonly type: OperationsOperationType;
  readonly status: OperationsOperationStatusType;
};
type OperationsOperationStatusType = "IN_PROGRESS" | "DONE" | "FAILED";
type OperationsOperationType =
  | "ORDER_RECIPIENT_UPDATE"
  | "ORDER_DELIVERY_INTERVAL_UPDATE"
  | "ORDER_STATUS_UPDATE"
  | "RETURN_CANCELLATION";

/**
 * Параметры метода «Получение статусов операций».
 *
 * Возвращает статусы запущенных операций по их идентификаторам.
 *
 * POST /v1/businesses/{businessId}/operations
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetOperationsInput = {
  /**
   * Параметры пути.
   */
  readonly path: {
    /**
     * Идентификатор кабинета.
     *
     * Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).
     *
     * ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)
     *
     * Формат: `int64`.
     *
     * Минимальное значение: 1.
     */
    readonly businessId: number;
  } /**
   * Тело запроса.
   */;
  readonly body: OperationsGetOperationsRequest;
};
/**
 * Успешный ответ метода «Получение статусов операций».
 *
 * 200: Информация об операциях.
 */
export type GetOperationsResponse = OperationsGetOperationsResponse;
