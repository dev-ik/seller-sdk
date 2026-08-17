// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Удаление ярлыка».
 *
 * Метод удаляет ярлык из [списка ярлыков](/openapi/work-with-products#tag/labels/paths/~1content~1v2~1tags/get) продавца.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов Ярлыков:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 мин | 100 запросов | 600 мс | 5 запросов |
 * | Сервисный | 1 мин | 100 запросов | 600 мс | 5 запросов |
 * | Базовый с секретом | 1 мин | 100 запросов | 600 мс | 5 запросов |
 * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
 *
 * DELETE /content/v2/tag/{id}
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type DeleteContentV2TagIdInput = {
  /**
   * Параметры пути.
   */
  readonly path: {
    /**
     * Числовой ID ярлыка
     *
     * Пример: `1`.
     */
    readonly id: number;
  };
};
/**
 * Успешный ответ метода «Удаление ярлыка».
 *
 * 200: Успешно.
 */
export type DeleteContentV2TagIdResponse = {
  /**
   * Данные ошибки
   */
  readonly data?: Readonly<Record<string, never>> | null;

  /**
   * Флаг ошибки
   */
  readonly error?: boolean;

  /**
   * Текст ошибки
   */
  readonly errorText?: string;

  /**
   * Дополнительные ошибки
   */
  readonly additionalErrors?: string | null;
};
