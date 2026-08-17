// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Список ярлыков».
 *
 * Метод возвращает список и характеристики всех ярлыков продавца для группировки и фильтрации товаров.
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
 * GET /content/v2/tags
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type GetContentV2TagsInput = undefined;
/**
 * Успешный ответ метода «Список ярлыков».
 *
 * 200: Успешно.
 */
export type GetContentV2TagsResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly data?: {
    /**
     * Числовой ID ярлыка
     */
    readonly id?: number;

    /**
     * Цвет ярлыка
     */
    readonly color?: string;

    /**
     * Имя ярлыка
     */
    readonly name?: string;
  };

  /**
   * Флаг ошибки
   *
   * Пример: `false`.
   */
  readonly error?: boolean;

  /**
   * Описание ошибки
   *
   * Пример: `""`.
   */
  readonly errorText?: string;

  /**
   * Дополнительные ошибки
   *
   * Пример: `""`.
   */
  readonly additionalErrors?: string | null;
};
