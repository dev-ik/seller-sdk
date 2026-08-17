// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Данные по товарам».
 *
 * Метод формирует набор данных об остатках по товарам.
 *
 * Можно получить данные как по отдельным товарам, так и в рамках всего отчёта — если в запросе отсутствуют фильтры: `nmIDs`, `subjectID`, `brandName`, `tagID`.
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
 * POST /api/v2/stocks-report/products/products
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/analytics
 */
export type PostV2StocksReportProductsProductsInput = {
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
     * ID предмета
     *
     * Формат: `int32`.
     *
     * Пример: `123456`.
     */
    readonly subjectID?: number;

    /**
     * Бренд
     *
     * Пример: `"Спортик"`.
     */
    readonly brandName?: string;

    /**
     * ID ярлыка
     *
     * Формат: `int64`.
     *
     * Пример: `25345`.
     */
    readonly tagID?: number;

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
     * Пример: `true`.
     */
    readonly skipDeletedNm: boolean;

    /** Описание отсутствует в OpenAPI WB. */
    readonly orderBy: {
      /** Описание отсутствует в OpenAPI WB. */
      readonly field:
        | "ordersCount"
        | "ordersSum"
        | "avgOrders"
        | "buyoutCount"
        | "buyoutSum"
        | "buyoutPercent"
        | "stockCount"
        | "stockSum"
        | "saleRate"
        | "avgStockTurnover"
        | "toClientCount"
        | "fromClientCount"
        | "minPrice"
        | "maxPrice"
        | "officeMissingTime"
        | "lostOrdersCount"
        | "lostOrdersSum"
        | "lostBuyoutsCount"
        | "lostBuyoutsSum";

      /** Описание отсутствует в OpenAPI WB. */
      readonly mode: "asc" | "desc";
    };

    /** Описание отсутствует в OpenAPI WB. */
    readonly availabilityFilters: readonly (
      | "deficient"
      | "actual"
      | "balanced"
      | "nonActual"
      | "nonLiquid"
      | "invalidData"
    )[];

    /**
     * Количество товаров в ответе
     *
     * Формат: `uint32`.
     *
     * Пример: `150`.
     *
     * Значение по умолчанию: `100`.
     *
     * Максимальное значение: 1000.
     */
    readonly limit?: number;

    /**
     * После какого элемента выдавать данные
     *
     * Формат: `uint32`.
     *
     * Пример: `100`.
     */
    readonly offset: number;
  };
};
/**
 * Успешный ответ метода «Данные по товарам».
 *
 * 200: Успешно.
 */
export type PostV2StocksReportProductsProductsResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly data: {
    /**
     * Множество данных по товарам
     */
    readonly items: readonly {
      /**
       * Артикул WB
       *
       * Формат: `int64`.
       *
       * Пример: `123456789`.
       */
      readonly nmID: number;

      /**
       * Является ли товар удалённым
       *
       * Пример: `false`.
       */
      readonly isDeleted: boolean;

      /**
       * Название предмета
       *
       * Пример: `"Принтеры"`.
       */
      readonly subjectName: string;

      /**
       * Название товара
       *
       * Пример: `"Печатник 3000"`.
       */
      readonly name: string;

      /**
       * Артикул продавца
       *
       * Пример: `"pechatnik3000"`.
       */
      readonly vendorCode: string;

      /**
       * Бренд
       *
       * Пример: `"Компик"`.
       */
      readonly brandName: string;

      /**
       * Ссылка на главное фото
       *
       * Пример: `"https://basket-12.wbbasket.ru/vol1788/part178840/178840836/images/c246x328/1.webp"`.
       */
      readonly mainPhoto: string;

      /**
       * Является ли товар размерным. Неразмерный товар имеет единственный размер, с `"techSize":"0"`
       *
       * Пример: `true`.
       */
      readonly hasSizes: boolean;

      /** Описание отсутствует в OpenAPI WB. */
      readonly metrics: {
        /**
         * Заказы, шт.
         *
         * Формат: `uint64`.
         *
         * Пример: `100`.
         */
        readonly ordersCount: number;

        /**
         * Заказы, сумма
         *
         * Формат: `uint64`.
         *
         * Пример: `100000`.
         */
        readonly ordersSum: number;

        /**
         * Среднее количество заказов в день
         *
         * Формат: `float64`.
         *
         * Пример: `200`.
         */
        readonly avgOrders: number;

        /**
         * Среднее количество заказов по месяцам
         */
        readonly avgOrdersByMonth: readonly {
          /**
           * Начало месяца
           *
           * Формат: `date`.
           *
           * Пример: `"2025-01-01"`.
           */
          readonly start: string;

          /**
           * Конец месяца
           *
           * Формат: `date`.
           *
           * Пример: `"2025-01-31"`.
           */
          readonly end: string;

          /**
           * Среднее количество заказов
           *
           * Формат: `float64`.
           *
           * Пример: `25.55`.
           */
          readonly value: number;
        }[];

        /**
         * Выкупы, шт.
         *
         * Формат: `uint64`.
         *
         * Пример: `150`.
         */
        readonly buyoutCount: number;

        /**
         * Выкупы, сумма
         *
         * Формат: `uint64`.
         *
         * Пример: `150000`.
         */
        readonly buyoutSum: number;

        /**
         * Процент выкупа
         *
         * Формат: `uint32`.
         *
         * Пример: `5`.
         */
        readonly buyoutPercent: number;

        /**
         * Остатки на текущий день, шт.
         *
         * Формат: `uint64`.
         *
         * Пример: `50`.
         */
        readonly stockCount: number;

        /**
         * Стоимость остатков на текущий день
         *
         * Формат: `uint64`.
         *
         * Пример: `50000`.
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
         * Оборачиваемость средних остатков. Особые случаи:
         *  1. `"hours":-1` — бесконечная длительность
         *  2. `"hours":-2` — нулевая длительность
         *  3. `"hours":-3` — нерассчитанная длительность
         */
        readonly avgStockTurnover: {
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
         * Пример: `20`.
         */
        readonly toClientCount: number;

        /**
         * В пути от клиента, шт.
         *
         * Формат: `uint64`.
         *
         * Пример: `30`.
         */
        readonly fromClientCount: number;

        /**
         * Время отсутствия товара на складе. Особые случаи:
         *  1. `"hours":-1` — бесконечная длительность
         *  2. `"hours":-2` — нулевая длительность
         *  3. `"hours":-3` — нерассчитанная длительность
         *  4. `"hours":-4` — отсутствие в течение всего периода
         */
        readonly officeMissingTime: {
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
         * Упущенные заказы, шт. Особые случаи:
         *  1. Значение меньше `0` и не равно `-2` — значение не рассчитано
         *  2. Значение `-2` — нулевое значение
         *
         * Формат: `float64`.
         *
         * Пример: `1550.52`.
         */
        readonly lostOrdersCount: number;

        /**
         * Упущенные заказы, сумма. Особые случаи:
         *  1. Значение меньше `0` и не равно `-2` — значение не рассчитано
         *  2. Значение `-2` — нулевое значение
         *
         * Формат: `float64`.
         *
         * Пример: `155000.25`.
         */
        readonly lostOrdersSum: number;

        /**
         * Упущенные выкупы, шт. Особые случаи:
         *  1. Значение меньше `0` и не равно `-2` — значение не рассчитано
         *  2. Значение `-2` — нулевое значение
         *
         * Формат: `float64`.
         *
         * Пример: `123.55`.
         */
        readonly lostBuyoutsCount: number;

        /**
         * Упущенные выкупы, сумма. Особые случаи:
         *  1. Значение меньше `0` и не равно `-2` — значение не рассчитано
         *  2. Значение `-2` — нулевое значение
         *
         * Формат: `float64`.
         *
         * Пример: `225555.15`.
         */
        readonly lostBuyoutsSum: number;

        /**
         * Текущая цена
         */
        readonly currentPrice: {
          /**
           * Минимальная цена продавца со скидкой продавца (без учёта скидки WB Клуба)
           *
           * Формат: `uint64`.
           *
           * Пример: `50`.
           */
          readonly minPrice: number;

          /**
           * Максимальная цена продавца со скидкой продавца (без учёта скидки WB Клуба)
           *
           * Формат: `uint64`.
           *
           * Пример: `100`.
           */
          readonly maxPrice: number;
        };

        /**
         * Доступность товара:
         *  - `deficient` — Дефицит
         *  - `actual` — Актуальный
         *  - `balanced` — Баланс
         *  - `nonActual` — Неактуальный
         *  - `nonLiquid` — Неликвид
         *  - `invalidData` — Не рассчитано
         *
         * Пример: `"deficient"`.
         */
        readonly availability:
          | "deficient"
          | "actual"
          | "balanced"
          | "nonActual"
          | "nonLiquid"
          | "invalidData";
      };
    }[];

    /** Описание отсутствует в OpenAPI WB. */
    readonly currency: string;
  };
} | null;
