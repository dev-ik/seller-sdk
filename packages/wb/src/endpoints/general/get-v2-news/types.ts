// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получение новостей портала продавцов».
 *
 * Метод позволяет получать новости портала продавцов.
 *  Для получения успешного ответа необходимо указать
 * один из параметров `from` или `fromID`.
 *  За один запрос можно получить не более 100 новостей.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 мин | 1 запрос | 1 мин | 10 запросов |
 * | Сервисный | 1 мин | 1 запрос | 1 мин | 10 запросов |
 * | Базовый с секретом | 1 мин | 1 запрос | 1 мин | 10 запросов |
 * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
 *
 * GET /api/communications/v2/news
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/api-information
 */
export type GetV2NewsInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query?: {
    /**
     * Дата, от которой необходимо выдать новости
     *
     * Формат: `date`.
     *
     * Пример: `"2025-02-06"`.
     */
    readonly from?: string;

    /**
     * ID новости, начиная с которой — включая её — нужно получить список новостей
     *
     * Формат: `uint64`.
     *
     * Пример: `7369`.
     */
    readonly fromID?: number;
  };
};
/**
 * Успешный ответ метода «Получение новостей портала продавцов».
 *
 * 200: Успешно.
 */
export type GetV2NewsResponse = {
  /**
   * Новости
   */
  readonly data?: readonly {
    /**
     * Текст новости
     *
     * Формат: `plaintext`.
     */
    readonly content?: string;

    /**
     * Дата и время публикации новости
     *
     * Формат: `date-time`.
     */
    readonly date?: string;

    /**
     * Заголовок новости
     */
    readonly header?: string;

    /**
     * ID новости
     */
    readonly id?: number;

    /**
     * Теги новости
     */
    readonly types?: readonly {
      /**
       * ID тега
       */
      readonly id?: number;

      /**
       * Название тега
       */
      readonly name?: string;
    }[];
  }[];
};
