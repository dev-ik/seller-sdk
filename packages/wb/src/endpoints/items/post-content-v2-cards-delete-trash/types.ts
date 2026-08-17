// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Перенос карточек товаров в корзину».
 *
 * Метод переносит [карточки товаров в корзину](/openapi/work-with-products#tag/listings/paths/~1content~1v2~1get~1cards~1trash/post). При этом карточки товаров не удаляются, их можно [восстановить](/openapi/work-with-products#tag/listings/paths/~1content~1v2~1cards~1recover/post).
 *
 *  После переноса в корзину карточке товара присваивается новый imtID — ID для объединённых (/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек товаров
 *
 * Карточки товаров удаляются автоматически, если лежат в корзине больше 30 дней, и на них нет остатков. Очистка корзины происходит каждую ночь по московскому времени.
 *
 * Карточки товаров можно удалить в любое время в [личном кабинете](https://seller.wildberries.ru/new-goods/basket-cards).
 *
 * Карточка будет продаваться, пока по ней есть остатки на складе, даже если её переместили в корзину. Чтобы полностью снять карточку с продажи, обнулите остатки.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 мин | 100 запросов | 600 мс | 5 запросов |
 * | Сервисный | 1 мин | 100 запросов | 600 мс | 5 запросов |
 * | Базовый с секретом | 1 мин | 100 запросов | 600 мс | 5 запросов |
 * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
 *
 * POST /content/v2/cards/delete/trash
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type PostContentV2CardsDeleteTrashInput = {
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
 * Успешный ответ метода «Перенос карточек товаров в корзину».
 *
 * 200: Успешно.
 */
export type PostContentV2CardsDeleteTrashResponse = {
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
