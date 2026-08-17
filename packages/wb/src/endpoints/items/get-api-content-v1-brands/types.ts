// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Бренды».
 *
 * Метод возвращает список брендов по ID предмета.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 сек | 1 запрос | 1 сек | 5 запросов |
 * | Сервисный | 1 сек | 1 запрос | 1 сек | 5 запросов |
 * | Базовый с секретом | 1 сек | 1 запрос | 1 сек | 5 запросов |
 * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
 *
 * GET /api/content/v1/brands
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type GetApiContentV1BrandsInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query: {
    /**
     * ID предмета
     *
     * Пример: `1234`.
     */
    readonly subjectId: number;

    /**
     * Параметр пагинации. Используйте значение `next` из ответа, чтобы получить следующий пакет данных
     *
     * Пример: `1234`.
     */
    readonly next?: number;
  };
};
/**
 * Успешный ответ метода «Бренды».
 *
 * 200: Успешно.
 */
export type GetApiContentV1BrandsResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly brands: readonly {
    /**
     * ID бренда
     *
     * Пример: `9007199254`.
     */
    readonly id: number;

    /**
     * URL логотипа бренда
     */
    readonly logoUrl: string;

    /**
     * Название бренда
     *
     * Пример: `"Brand"`.
     */
    readonly name: string;
  }[];

  /**
   * Параметр пагинации. Укажите это значение в запросе, чтобы получить следующий пакет данных. Если поле отсутствует, вы получили все данные
   *
   * Пример: `1212`.
   */
  readonly next?: number;

  /**
   * Общее количество брендов предмета
   *
   * Пример: `344534`.
   */
  readonly total: number;
};
