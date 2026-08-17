// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Генерация баркодов».
 *
 * Метод генерирует массив уникальных баркодов для создания размера в [карточке товара](/openapi/work-with-products#tag/listingItems/paths/~1content~1v2~1cards~1upload/post). Можно использовать, если у вас нет собственных баркодов.
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
 * POST /content/v2/barcodes
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type PostContentV2BarcodesInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * Кол-во баркодов которые надо сгенерировать, максимальное доступное количество баркодов для генерации - `5 000`
     *
     * Пример: `100`.
     */
    readonly count?: number;
  };
};
/**
 * Успешный ответ метода «Генерация баркодов».
 *
 * 200: Успешно.
 */
export type PostContentV2BarcodesResponse = {
  /**
   * Массив сгенерированных баркодов
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
