// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Состояние обработанной загрузки».
 *
 * Метод возвращает информацию об обработанной загрузке цен и скидок.
 *
 *  Обработанная загрузка — это загрузка цен и скидок для товаров (/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1upload~1task/post), цен для размеров товаров (/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1upload~1task~1size/post), скидок WB Клуба (/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1upload~1task~1club-discount/post) и оптовых скидок для B2B-продаж (/openapi/work-with-products#tag/Ceny-i-skidki/operation/postV1UploadTaskB2bWholesale).
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
 * GET /api/v2/history/tasks
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type GetApiV2HistoryTasksInput = {
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
 * Успешный ответ метода «Состояние обработанной загрузки».
 *
 * 200: Успешно.
 */
export type GetApiV2HistoryTasksResponse = {
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
     */
    readonly overAllGoodsNumber?: number;

    /**
     * Товаров без ошибок
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
