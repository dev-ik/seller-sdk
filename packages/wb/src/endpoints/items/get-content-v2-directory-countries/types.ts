// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Страна производства».
 *
 * Метод возвращает возможные значения [характеристики](/openapi/work-with-products#tag/categoriesSubcategoriesAndCharacteristics/paths/~1content~1v2~1object~1charcs~1%7BsubjectId%7D/get) предмета `Страна производства`.
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
 * GET /content/v2/directory/countries
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type GetContentV2DirectoryCountriesInput = {
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
 * Успешный ответ метода «Страна производства».
 *
 * 200: Успешно.
 */
export type GetContentV2DirectoryCountriesResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly data?: readonly {
    /**
     * ID страны
     *
     * Пример: `15000170`.
     */
    readonly id?: number;

    /**
     * Значение характеристики Страны
     *
     * Пример: `"Китай"`.
     */
    readonly name?: string;

    /**
     * Полное название страны
     *
     * Пример: `"Китайская Народная Республика"`.
     */
    readonly fullName?: string;
  }[];

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
