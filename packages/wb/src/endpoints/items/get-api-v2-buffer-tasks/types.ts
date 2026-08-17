// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Состояние необработанной загрузки».
 *
 * Метод возвращает информацию про загрузку скидок в обработке.
 *
 *  Необработанная загрузка — это загрузка скидок в календаре акций (/openapi/promotion#tag/promoCalendar). Такие скидки применятся к товарам только в момент старта акции.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Цены и скидки:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 6 сек | 10 запросов | 600 мс | 5 запросов |
 * | Сервисный | 6 сек | 10 запросов | 600 мс | 5 запросов |
 * | Базовый с секретом | 6 сек | 10 запросов | 600 мс | 5 запросов |
 * | Базовый | 1 ч | 4 запроса | 15 мин | 1 запрос |
 *
 * GET /api/v2/buffer/tasks
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type GetApiV2BufferTasksInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query: {
    /**
     * ID загрузки
     *
     * Пример: `146567`.
     */
    readonly uploadID: number;
  };
};
/**
 * Успешный ответ метода «Состояние необработанной загрузки».
 *
 * 200: Успешно.
 */
export type GetApiV2BufferTasksResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly data?: {
    /**
     * ID загрузки
     *
     * Пример: `395643565`.
     */
    readonly uploadID?: number;

    /** Описание отсутствует в OpenAPI WB. */
    readonly status?: number;

    /** Описание отсутствует в OpenAPI WB. */
    readonly uploadDate?: string;

    /** Описание отсутствует в OpenAPI WB. */
    readonly activationDate?: string;

    /**
     * Всего товаров
     *
     * Пример: `100`.
     */
    readonly overAllGoodsNumber?: number;

    /**
     * Товаров без ошибок (0, потому что загрузка в обработке)
     *
     * Пример: `0`.
     */
    readonly successGoodsNumber?: number;
  } | null;

  /**
   * Флаг ошибки
   *
   * Пример: `false`.
   */
  readonly error?: boolean;

  /**
   * Текст ошибки
   *
   * Пример: `""`.
   */
  readonly errorText?: string;
};
