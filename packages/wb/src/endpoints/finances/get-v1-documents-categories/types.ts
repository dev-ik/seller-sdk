// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Категории документов».
 *
 * Метод возвращает категории документов для получения [списка документов продавца](/openapi/financial-reports-and-accounting#tag/documents/operation/getV1DocumentsList).
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 10 сек | 1 запрос | 10 сек | 5 запросов |
 * | Сервисный | 10 сек | 1 запрос | 10 сек | 5 запросов |
 * | Базовый с секретом | 10 сек | 1 запрос | 10 сек | 5 запросов |
 * | Базовый | 24 ч | 1 запрос | 24 ч | 1 запрос |
 *
 * GET /api/v1/documents/categories
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/finances
 */
export type GetV1DocumentsCategoriesInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query?: {
    /**
     * Язык поля `title`:
     *  - `ru` — русский
     *  - `en` — английский
     *  - `zh` — китайский
     *
     * Пример: `"ru"`.
     *
     * Значение по умолчанию: `"en"`.
     */
    readonly locale?: string;
  };
};
/**
 * Успешный ответ метода «Категории документов».
 *
 * 200: Успешно.
 */
export type GetV1DocumentsCategoriesResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly data?: {
    /**
     * Категории документов
     */
    readonly categories?: readonly {
      /**
       * ID категории документа из параметра [запроса](./financial-reports-and-accounting#tag/documents/operation/getV1DocumentsList) `category`
       *
       * Пример: `"redeem-notification"`.
       */
      readonly name?: string;

      /**
       * Название категории документа из поля [ответа](./financial-reports-and-accounting#tag/documents/~1api~1v1~1documents~1list/get) `category`
       *
       * Пример: `"Уведомление о выкупе"`.
       */
      readonly title?: string;
    }[];
  };
};
