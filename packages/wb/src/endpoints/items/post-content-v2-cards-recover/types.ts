// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Восстановление карточек товаров из корзины».
 *
 * Метод восстанавливает [карточки товаров из корзины](/openapi/work-with-products#tag/listings/paths/~1content~1v2~1get~1cards~1trash/post).
 *
 *  Карточка товара сохраняет тот же imtID — ID для объединённых (/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек товаров — что был присвоен ей при перемещении в корзину (/openapi/work-with-products#tag/listings/paths/~1content~1v2~1cards~1delete~1trash/post)
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 мин | 3 запроса | 20 сек | 5 запросов |
 * | Сервисный | 1 мин | 3 запроса | 20 сек | 5 запросов |
 * | Базовый с секретом | 1 мин | 3 запроса | 20 сек | 5 запросов |
 * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
 *
 * POST /content/v2/cards/recover
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type PostContentV2CardsRecoverInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * Артикулы WB
     */
    readonly nmIDs?: readonly number[];
  };
};
/**
 * Успешный ответ метода «Восстановление карточек товаров из корзины».
 *
 * 200: Успешно.
 */
export type PostContentV2CardsRecoverResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly data?: Readonly<Record<string, never>> | null;

  /**
   * Флаг ошибки
   */
  readonly error?: boolean;

  /**
   * Описание ошибки
   */
  readonly errorText?: string;

  /**
   * Дополнительные ошибки
   */
  readonly additionalErrors?: Readonly<Record<string, never>> | null;
};
