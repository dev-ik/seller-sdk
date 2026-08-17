// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Список предметов».
 *
 * Метод возвращает список названий [родительских категорий предметов](/openapi/work-with-products#tag/categoriesSubcategoriesAndCharacteristics/paths/~1content~1v2~1object~1parent~1all/get) и их предметов с ID. Например, у категории `Игрушки` будут предметы `Калейдоскопы`, `Куклы`, `Мячики`.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Контент:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 100 запросов | 600 мс | 5 запросов |
 *
 * Исключение — методы:
 *
 *  создания карточек товаров (/openapi/work-with-products#tag/listingItems/paths/~1content~1v2~1cards~1upload/post)
 *  создания карточек товаров с присоединением (/openapi/work-with-products#tag/listingItems/paths/~1content~1v2~1cards~1upload~1add/post)
 *  редактирования карточек товаров (/openapi/work-with-products#tag/listings/paths/~1content~1v2~1cards~1update/post)
 *  восстановления карточек товаров из корзины (/openapi/work-with-products#tag/listings/paths/~1content~1v2~1cards~1recover/post)
 *  получения списка рекомендаций в карточках товаров (/openapi/work-with-products#tag/recommendations/operation/postV1RecommendationsList)
 *  установки рекомендаций для товаров (/openapi/work-with-products#tag/recommendations/operation/postV1RecommendationsSet)
 *
 * GET /content/v2/object/all
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type GetContentV2ObjectAllInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query?: {
    /**
     * Язык полей ответа:
     *  - `ru` — русский
     *  - `en` — английский
     *  - `zh` — китайский
     *
     * Не используется в песочнице. Данные песочницы возвращаются только на русском языке
     *
     * Пример: `"en"`.
     */
    readonly locale?: string;

    /**
     * Поиск по названию предмета (Носки), поиск работает по подстроке, искать можно на любом из поддерживаемых языков
     *
     * Пример: `"Носки"`.
     */
    readonly name?: string;

    /**
     * Количество предметов, максимум 1000
     *
     * Пример: `1000`.
     *
     * Значение по умолчанию: `30`.
     */
    readonly limit?: number;

    /**
     * Сколько элементов пропустить. Например, для значения `10` ответ начнется с 11 элемента
     *
     * Пример: `5000`.
     *
     * Значение по умолчанию: `0`.
     */
    readonly offset?: number;

    /**
     * ID родительской категории предмета
     *
     * Пример: `1000`.
     */
    readonly parentID?: number;
  };
};
/**
 * Успешный ответ метода «Список предметов».
 *
 * 200: Успешно.
 */
export type GetContentV2ObjectAllResponse = {
  /**
   * Предметы
   */
  readonly data?: readonly {
    /**
     * ID предмета
     */
    readonly subjectID?: number;

    /**
     * ID родительской категории
     */
    readonly parentID?: number;

    /**
     * Название предмета
     */
    readonly subjectName?: string;

    /**
     * Название родительской категории
     */
    readonly parentName?: string;
  }[];

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
