// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «ТНВЭД-код».
 *
 * Метод возвращает список ТНВЭД-кодов по ID [предмета](/openapi/work-with-products#tag/categoriesSubcategoriesAndCharacteristics/paths/~1content~1v2~1object~1all/get) и фрагменту ТНВЭД-кода.
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
 * GET /content/v2/directory/tnved
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type GetContentV2DirectoryTnvedInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query: {
    /**
     * ID предмета
     *
     * Пример: `105`.
     */
    readonly subjectID: number;

    /**
     * Поиск по ТНВЭД-коду. Работает только в паре с `subjectID`
     *
     * Пример: `6106903000`.
     */
    readonly search?: number;

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
  };
};
/**
 * Успешный ответ метода «ТНВЭД-код».
 *
 * 200: Успешно.
 */
export type GetContentV2DirectoryTnvedResponse = {
  /**
   * Данные
   */
  readonly data?: readonly {
    /**
     * ТНВЭД-код
     */
    readonly tnved?: string;

    /**
     * - `true` — код маркировки [Честного знака](https://честныйзнак.рф/) требуется
     * - `false` — код маркировки [Честного знака](https://честныйзнак.рф/) не требуется
     */
    readonly isKiz?: boolean;
  }[];

  /**
   * Флаг наличия ошибки
   *
   * Пример: `false`.
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
