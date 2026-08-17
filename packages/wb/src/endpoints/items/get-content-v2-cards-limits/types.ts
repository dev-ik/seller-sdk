// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Лимиты карточек товаров».
 *
 * Возвращает бесплатные и платные лимиты продавца на [создание карточек товаров](/openapi/work-with-products#tag/listingItems/paths/~1content~1v2~1cards~1upload/post).
 *
 * Формула для получения количества карточек, которые можно создать:
 *
 * > (`freeLimits` + `paidLimits`) - количество созданных карточек
 *
 * Созданными считаются карточки, которые можно получить через методы [список карточек товаров](/openapi/work-with-products#tag/listings/paths/~1content~1v2~1get~1cards~1list/post) и [список карточек товаров в корзине](/openapi/work-with-products#tag/listings/paths/~1content~1v2~1get~1cards~1trash/post).
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов:
 *
 *  получения лимитов карточек товаров (/openapi/work-with-products#tag/listingItems/paths/~1content~1v2~1cards~1limits/get)
 *  получения несозданных карточек товаров с ошибками (/openapi/work-with-products#tag/listings/paths/~1content~1v2~1cards~1error~1list/post)
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 мин | 100 запросов | 600 мс | 5 запросов |
 * | Сервисный | 1 мин | 100 запросов | 600 мс | 5 запросов |
 * | Базовый с секретом | 1 мин | 100 запросов | 600 мс | 5 запросов |
 * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
 *
 * GET /content/v2/cards/limits
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type GetContentV2CardsLimitsInput = undefined;
/**
 * Успешный ответ метода «Лимиты карточек товаров».
 *
 * 200: Успешно.
 */
export type GetContentV2CardsLimitsResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly data?: {
    /**
     * Количество бесплатных лимитов
     */
    readonly freeLimits?: number;

    /**
     * Количество оплаченных лимитов
     */
    readonly paidLimits?: number;
  };

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
  readonly additionalErrors?: string | null;
};
