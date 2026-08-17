// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Информация о покупателе B2B».
 *
 * Метод возвращает данные B2B-покупателей по ID сборочных заданий:
 *  - ИНН
 *  - КПП
 *  - Наименование организации
 *
 * Лимит запросов (/docs/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий DBS:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * POST /api/marketplace/v3/dbs/orders/b2b/info
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/dbs
 */
export type PostV3DbsOrdersB2bInfoInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * Список ID сборочных заданий
     *
     * Пример: `[123456,234567]`.
     *
     * Максимальное количество элементов: 1000.
     */
    readonly ordersIds: readonly number[];
  };
};
/**
 * Успешный ответ метода «Информация о покупателе B2B».
 *
 * 200: Успешно.
 */
export type PostV3DbsOrdersB2bInfoResponse = {
  /**
   * Уникальный ID запроса
   */
  readonly requestId: string;

  /** Описание отсутствует в OpenAPI WB. */
  readonly results?: readonly {
    /** Описание отсутствует в OpenAPI WB. */
    readonly data?: {
      /**
       * Индивидуальный номер налогоплательщика (ИНН)
       */
      readonly inn?: string;

      /**
       * Код причины постановки на учёт (КПП)
       */
      readonly kpp?: string;

      /**
       * Наименование организации
       */
      readonly orgName?: string;
    };

    /**
     * Детали ошибки
     */
    readonly errors?: readonly {
      /**
       * Код ошибки
       */
      readonly code?: number;

      /**
       * Описание ошибки
       */
      readonly detail?: string;
    }[];

    /**
     * Есть ли ошибки
     *
     * Пример: `true`.
     */
    readonly isError: boolean;

    /**
     * ID сборочного задания
     *
     * Пример: `123456`.
     */
    readonly orderId: number;
  }[];
};
