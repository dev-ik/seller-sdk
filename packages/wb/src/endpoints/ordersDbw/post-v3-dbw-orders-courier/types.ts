// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Информация о курьере».
 *
 * Метод возвращает контактные данные и номер автомобиля курьера по ID сборочного задания.
 *  Для сборочных заданий в статусах `confirm`, `complete`.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для следующих методов DBW:
 *
 *  получение и обновление списка контактов
 *  получение и удаление идентификаторов маркировки
 *  методы сборочных заданий
 *
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * POST /api/v3/dbw/orders/courier
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-dbw
 */
export type PostV3DbwOrdersCourierInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * Список ID сборочных заданий
     *
     * Максимальное количество элементов: 1000.
     */
    readonly orders?: readonly number[];
  };
};
/**
 * Успешный ответ метода «Информация о курьере».
 *
 * 200: Успешно.
 */
export type PostV3DbwOrdersCourierResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly orders?: readonly {
    /** Описание отсутствует в OpenAPI WB. */
    readonly courierInfo?: {
      /** Описание отсутствует в OpenAPI WB. */
      readonly contacts?: {
        /**
         * Номер автомобиля
         *
         * Пример: `"х111хх11"`.
         */
        readonly carNumber?: string;

        /**
         * ФИО курьера
         *
         * Пример: `"Иванов Иван Иванович"`.
         */
        readonly fullName?: string;

        /**
         * Номер телефона
         *
         * Пример: `"71230971931"`.
         */
        readonly phone?: string;

        /**
         * Дата и время, с которого прибудет курьер
         *
         * Формат: `date-time`.
         *
         * Пример: `"2025-09-06T08:00:00Z"`.
         */
        readonly pTimeFrom?: string | null;

        /**
         * Дата и время, до которого прибудет курьер
         *
         * Формат: `date-time`.
         *
         * Пример: `"2025-09-06T11:00:00Z"`.
         */
        readonly pTimeTo?: string | null;
      } | null;

      /**
       * Должен ли быть назначен курьер к текущему моменту:
       *  - `false` — нет
       *  - `true` — да
       *
       *  Если `"mustBeAssigned":true`, а `"contacts":null`, необходимо запросить контакты в [поддержке](https://seller.wildberries.ru/service-desk-v2)
       */
      readonly mustBeAssigned?: boolean;

      /**
       * Дата и время обновления информации о курьере.
       *  Если `null`, информация не обновлялась
       *
       * Формат: `date-time`.
       *
       * Пример: `"2025-09-06T11:33:10+03:00"`.
       */
      readonly updatedAt?: string | null;
    };

    /**
     * ID сборочного задания
     *
     * Пример: `2876979713`.
     */
    readonly orderID?: number;
  }[];
};
