// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Данные по складам».
 *
 * Метод формирует набор данных об остатках по складам.
 *
 * Данные по складам продавца приходят в агрегированном виде — по всем сразу, без детализации по конкретным складам — эти записи будут с `"regionName":"Маркетплейс"` и `"offices":[]`.
 *
 * Данные отчёта обновляются 1 раз в час.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 мин | 3 запроса | 20 сек | 3 запроса |
 * | Сервисный | 1 мин | 3 запроса | 20 сек | 3 запроса |
 * | Базовый с секретом | 1 мин | 3 запроса | 20 сек | 3 запроса |
 * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
 *
 * POST /api/v2/stocks-report/offices
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/analytics
 */
export type PostV2StocksReportOfficesInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * Список артикулов WB для фильтрации
     *
     * Пример: `[111222333,444555666]`.
     */
    readonly nmIDs?: readonly number[];

    /**
     * Список ID предметов для фильтрации
     *
     * Пример: `[123,456]`.
     */
    readonly subjectIDs?: readonly number[];

    /**
     * Список брендов для фильтрации
     *
     * Пример: `["Эшк","ЗлатА","ОТК","арк"]`.
     */
    readonly brandNames?: readonly string[];

    /**
     * Список ID ярлыков для фильтрации
     *
     * Пример: `[123,456,789]`.
     */
    readonly tagIDs?: readonly number[];

    /** Описание отсутствует в OpenAPI WB. */
    readonly currentPeriod: {
      /**
       * Дата начала периода. Не позднее `end`. Не ранее 3 месяцев от текущей даты
       *
       * Формат: `date`.
       *
       * Пример: `"2024-02-10"`.
       */
      readonly start: string;

      /**
       * Дата окончания периода. Не ранее 3 месяцев от текущей даты
       *
       * Формат: `date`.
       *
       * Пример: `"2024-02-10"`.
       */
      readonly end: string;
    };

    /** Описание отсутствует в OpenAPI WB. */
    readonly stockType: "" | "wb" | "mp";

    /**
     * Скрыть удалённые товары
     *
     * Пример: `false`.
     */
    readonly skipDeletedNm: boolean;
  };
};
/**
 * Успешный ответ метода «Данные по складам».
 *
 * 200: Успешно.
 */
export type PostV2StocksReportOfficesResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly data: {
    /**
     * Множество данных по регионам отгрузки
     */
    readonly regions?: readonly {
      /**
       * Регион отгрузки
       *
       * Пример: `"Центральный"`.
       */
      readonly regionName: string;

      /**
       * Общие метрики по регионам/складам отгрузки
       */
      readonly metrics: {
        /**
         * Остатки на текущий день, шт.
         *
         * Формат: `uint64`.
         *
         * Пример: `20`.
         */
        readonly stockCount: number;

        /**
         * Остатки на текущий день, сумма
         *
         * Формат: `uint64`.
         *
         * Пример: `20000`.
         */
        readonly stockSum: number;

        /**
         * Оборачиваемость текущих остатков. Особые случаи:
         *  1. `"hours":-1` — бесконечная длительность
         *  2. `"hours":-2` — нулевая длительность
         *  3. `"hours":-3` — нерассчитанная длительность
         */
        readonly saleRate: {
          /**
           * Количество дней
           *
           * Формат: `int32`.
           *
           * Пример: `5`.
           */
          readonly days: number;

          /**
           * Количество часов
           *
           * Формат: `int32`.
           *
           * Пример: `15`.
           */
          readonly hours: number;
        };

        /**
         * В пути к клиенту, шт.
         *
         * Формат: `uint64`.
         *
         * Пример: `30`.
         */
        readonly toClientCount: number;

        /**
         * В пути от клиента, шт.
         *
         * Формат: `uint64`.
         *
         * Пример: `40`.
         */
        readonly fromClientCount: number;
      };

      /**
       * Данные по складам
       */
      readonly offices: readonly {
        /**
         * ID склада
         *
         * Формат: `int64`.
         *
         * Пример: `123456`.
         */
        readonly officeID: number;

        /**
         * Название склада
         *
         * Пример: `"Коледино"`.
         */
        readonly officeName: string;

        /**
         * Общие метрики по регионам/складам отгрузки
         */
        readonly metrics: {
          /**
           * Остатки на текущий день, шт.
           *
           * Формат: `uint64`.
           *
           * Пример: `20`.
           */
          readonly stockCount: number;

          /**
           * Остатки на текущий день, сумма
           *
           * Формат: `uint64`.
           *
           * Пример: `20000`.
           */
          readonly stockSum: number;

          /**
           * Оборачиваемость текущих остатков. Особые случаи:
           *  1. `"hours":-1` — бесконечная длительность
           *  2. `"hours":-2` — нулевая длительность
           *  3. `"hours":-3` — нерассчитанная длительность
           */
          readonly saleRate: {
            /**
             * Количество дней
             *
             * Формат: `int32`.
             *
             * Пример: `5`.
             */
            readonly days: number;

            /**
             * Количество часов
             *
             * Формат: `int32`.
             *
             * Пример: `15`.
             */
            readonly hours: number;
          };

          /**
           * В пути к клиенту, шт.
           *
           * Формат: `uint64`.
           *
           * Пример: `30`.
           */
          readonly toClientCount: number;

          /**
           * В пути от клиента, шт.
           *
           * Формат: `uint64`.
           *
           * Пример: `40`.
           */
          readonly fromClientCount: number;
        };
      }[];
    }[];

    /** Описание отсутствует в OpenAPI WB. */
    readonly currency: string;
  };
};
