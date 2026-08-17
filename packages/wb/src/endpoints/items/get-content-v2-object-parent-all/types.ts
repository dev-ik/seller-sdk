// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Родительские категории товаров».
 *
 * Метод возвращает названия и ID всех родительских категорий для [создания карточек товаров](/openapi/work-with-products#tag/listingItems): например, `Электроника`, `Бытовая химия`, `Рукоделие`.
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
 * GET /content/v2/object/parent/all
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type GetContentV2ObjectParentAllInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query?: {
    /**
     * Язык поля ответа `name`:
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
 * Успешный ответ метода «Родительские категории товаров».
 *
 * 200: Успешно.
 */
export type GetContentV2ObjectParentAllResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly data?: readonly {
    /**
     * Название категории
     *
     * Пример: `"Электроника"`.
     */
    readonly name?: string;

    /**
     * ID родительской категории
     *
     * Пример: `479`.
     */
    readonly id?: number;

    /**
     * Виден на сайте
     *
     * Пример: `true`.
     */
    readonly isVisible?: boolean;
  }[];

  /**
   * Флаг наличия ошибки
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
