// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Пол».
 *
 * Метод возвращает возможные значения [характеристики](/openapi/work-with-products#tag/categoriesSubcategoriesAndCharacteristics/paths/~1content~1v2~1object~1charcs~1%7BsubjectId%7D/get) предмета `Пол`.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов Характеристик:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 мин | 100 запросов | 600 мс | 5 запросов |
 * | Сервисный | 1 мин | 100 запросов | 600 мс | 5 запросов |
 * | Базовый с секретом | 1 мин | 100 запросов | 600 мс | 5 запросов |
 * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
 *
 * GET /content/v2/directory/kinds
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type GetContentV2DirectoryKindsInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query?: {
    /**
     * Язык полей ответа `subjectName` и `name`:
     *  - `ru` — русский
     *  - `en` — английский
     *  - `zh` — китайский
     *
     * Не используется в песочнице. Данные песочницы возвращаются только на русском языке
     *
     * Пример: `"en"`.
     */
    readonly locale?: string;
  };
};
/**
 * Успешный ответ метода «Пол».
 *
 * 200: Успешно.
 */
export type GetContentV2DirectoryKindsResponse = {
  /**
   * Массив значений для хар-ки Пол
   */
  readonly data?: readonly string[];

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
