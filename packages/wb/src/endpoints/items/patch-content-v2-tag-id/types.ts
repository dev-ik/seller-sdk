// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Изменение ярлыка».
 *
 * Метод заменяет данные ярлыка: имя и цвет.
 *
 * Новые данные можно получить в общем [списке](/openapi/work-with-products#tag/labels/paths/~1content~1v2~1tags/get).
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
 * PATCH /content/v2/tag/{id}
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type PatchContentV2TagIdInput = {
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
  } /**
   * Тело запроса.
   */;
  readonly body: {
    /**
     * Цвет ярлыка
     *
     * Пример: `"D1CFD7"`.
     */
    readonly color?: string;

    /**
     * Имя ярлыка
     *
     * Пример: `"Sale"`.
     */
    readonly name?: string;
  };
};
/**
 * Успешный ответ метода «Изменение ярлыка».
 *
 * 200: Успешно.
 */
export type PatchContentV2TagIdResponse = {
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
