// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Отправить сообщение».
 *
 * Метод отправляет сообщения в [чат с покупателем](/openapi/user-communication#tag/buyersChat/operation/getV1SellerChats).
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 10 сек | 10 запросов | 1 сек | 10 запросов |
 * | Сервисный | 10 сек | 10 запросов | 1 сек | 10 запросов |
 * | Базовый с секретом | 10 сек | 10 запросов | 1 сек | 10 запросов |
 * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
 *
 * POST /api/v1/seller/message
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/communications
 */
export type PostV1SellerMessageInput = {
  /**
   * Тело запроса.
   */
  readonly body: FormData;
};
/**
 * Успешный ответ метода «Отправить сообщение».
 *
 * 200: Успешно.
 */
export type PostV1SellerMessageResponse = {
  /**
   * Ошибки загрузки файлов, если есть
   */
  readonly errors?: readonly string[];

  /** Описание отсутствует в OpenAPI WB. */
  readonly result?: {
    /**
     * Дата и время создания чата
     *
     * Формат: `Unix Timestamp в миллисекундах`.
     */
    readonly addTime?: number;

    /**
     * ID чата
     */
    readonly chatID?: string;

    /**
     * Подпись чата
     */
    readonly sign?: string;
  };
};
