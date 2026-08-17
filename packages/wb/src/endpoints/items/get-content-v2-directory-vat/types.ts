// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Ставка НДС».
 *
 * Метод возвращает возможные значения [характеристики](/openapi/work-with-products#tag/categoriesSubcategoriesAndCharacteristics/paths/~1content~1v2~1object~1charcs~1%7BsubjectId%7D/get) предмета `Ставка НДС`.
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
 * GET /content/v2/directory/vat
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type GetContentV2DirectoryVatInput = {
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
     * Пример: `"ru"`.
     */
    readonly locale?: string;
  };
};
/**
 * Успешный ответ метода «Ставка НДС».
 *
 * 200: Успешно.
 */
export type GetContentV2DirectoryVatResponse = {
  /** Описание отсутствует в OpenAPI WB. */ readonly data?: readonly string[];

  /**
   * Флаг наличия ошибки
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
