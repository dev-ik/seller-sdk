// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Создание ярлыка».
 *
 * Метод добавляет один ярлык продавца. Можно создать максимум 15 ярлыков для одного продавца. Максимальная длина ярлыка — 15 символов.
 *
 * Созданный ярлык можно получить в общем [списке](/openapi/work-with-products#tag/labels/paths/~1content~1v2~1tags/get).
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
 * POST /content/v2/tag
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type PostContentV2TagInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * Цвет ярлыка.
     *
     * Доступные цвета:
     *  - `D1CFD7` — серый
     *  - `FEE0E0` — красный
     *  - `ECDAFF` — фиолетовый
     *  - `E4EAFF` — синий
     *  - `DEF1DD` — зеленый
     *  - `FFECC7` — желтый
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
 * Успешный ответ метода «Создание ярлыка».
 *
 * 200: Успешно.
 */
export type PostContentV2TagResponse = {
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
