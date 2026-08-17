// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить файл из сообщения».
 *
 * Метод возвращает файл или изображение из сообщения по его ID.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 10 сек | 10 запросов | 1 сек | 10 запросов |
 * | Сервисный | 10 сек | 10 запросов | 1 сек | 10 запросов |
 * | Базовый с секретом | 10 сек | 10 запросов | 1 сек | 10 запросов |
 * | Базовый | 1 ч | 10 запросов | 6 мин | 1 запрос |
 *
 * GET /api/v1/seller/download/{id}
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/communications
 */
export type GetV1SellerDownloadIdInput = {
  /**
   * Параметры пути.
   */
  readonly path: {
    /**
     * ID файла, см. значение поля `downloadID` в методе [События чатов](./user-communication#tag/buyersChat/operation/getV1SellerEvents)
     */
    readonly id: string;
  };
};
/**
 * Успешный ответ метода «Получить файл из сообщения».
 *
 * 200: Успешно.
 *
 * 202: Файл на модерации.
 */
export type GetV1SellerDownloadIdResponse =
  | ArrayBuffer
  | {
      /**
       * Статус модерации
       *
       * Пример: `"pending"`.
       */
      readonly moderationState: string;

      /**
       * Секунд до следующей попытки запроса файла
       *
       * Пример: `30`.
       */
      readonly retrySeconds: number;
    };
