// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Список документов».
 *
 * Метод возвращает список документов продавца. Вы можете получить [один](/openapi/financial-reports-and-accounting#tag/documents/operation/getV1DocumentsDownload) или [несколько](/openapi/financial-reports-and-accounting#tag/documents/operation/postV1DocumentsDownloadAll) документов из полученного списка.
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
 * GET /api/v1/documents/list
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/finances
 */
export type GetV1DocumentsListInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query?: {
    /**
     * Язык поля `category`:
     *  - `ru` — русский
     *  - `en` — английский
     *  - `zh` — китайский
     *
     * Пример: `"ru"`.
     *
     * Значение по умолчанию: `"en"`.
     */
    readonly locale?: string;

    /**
     * Начало периода. Только вместе с `endTime`
     *
     * Формат: `date`.
     *
     * Пример: `"2024-07-09"`.
     */
    readonly beginTime?: string;

    /**
     * Конец периода. Только вместе с `beginTime`
     *
     * Формат: `date`.
     *
     * Пример: `"2024-07-15"`.
     */
    readonly endTime?: string;

    /**
     * Сортировка:
     *  - `date` — по дате создания документа
     *  - `category` — по категории (только при `locale=ru`)
     *
     * Только вместе с `order`
     *
     * Пример: `"category"`.
     *
     * Значение по умолчанию: `"date"`.
     */
    readonly sort?: "date" | "category";

    /**
     * Сортировка:
     *  - `desc` — по убыванию
     *  - `asc` — по возрастанию
     *
     * Только вместе с `sort`
     *
     * Пример: `"asc"`.
     *
     * Значение по умолчанию: `"desc"`.
     */
    readonly order?: "desc" | "asc";

    /**
     * ID [категории документов](./financial-reports-and-accounting#tag/documents/operation/getV1DocumentsCategories) из поля `name`
     *
     * Пример: `"redeem-notification"`.
     */
    readonly category?: string;

    /**
     * Уникальный ID документа
     *
     * Пример: `"redeem-notification-44841941"`.
     */
    readonly serviceName?: string;

    /**
     * Максимальное количество строк ответа
     *
     * Пример: `10`.
     *
     * Значение по умолчанию: `50`.
     *
     * Максимальное значение: 50.
     */
    readonly limit?: number;

    /**
     * После какой строки выдавать данные
     *
     * Пример: `90`.
     *
     * Значение по умолчанию: `0`.
     */
    readonly offset?: number;
  };
};
/**
 * Успешный ответ метода «Список документов».
 *
 * 200: Успешно.
 */
export type GetV1DocumentsListResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly data?: {
    /**
     * Категории документов
     */
    readonly documents?: readonly {
      /**
       * Уникальный ID документа
       *
       * Пример: `"redeem-notification-44841941"`.
       */
      readonly serviceName?: string;

      /**
       * Название документа
       *
       * Пример: `"redeem-notification"`.
       */
      readonly name?: string;

      /**
       * Название [категории документов](./financial-reports-and-accounting#tag/documents/operation/getV1DocumentsCategories) из поля ответа `title`
       *
       * Пример: `"Уведомление о выкупе"`.
       */
      readonly category?: string;

      /**
       * Форматы документа
       */
      readonly extensions?: readonly string[];

      /**
       * Дата и время создания документа
       *
       * Пример: `"2023-10-03T00:18:06.879Z"`.
       */
      readonly creationTime?: string;

      /**
       * Выгружен ли документ в личном кабинете
       *
       * Пример: `false`.
       */
      readonly viewed?: boolean;
    }[];
  };
};
