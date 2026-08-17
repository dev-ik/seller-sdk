// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Основная страница».
 *
 * Метод формирует набор данных для основной страницы отчёта по поисковым запросам с:
 *  - общей информацией
 *  - позициями товаров
 *  - данными по видимости и переходам в карточку
 *  - данными для таблицы по группам
 *
 * Для получения дополнительных данных в таблице используйте отдельный запрос для:
 *  - [пагинации по группам](/openapi/analytics#tag/searchQueriesForYourItems/operation/postV2SearchReportTableGroups)
 *  - [получения по товарам в группе](/openapi/analytics#tag/searchQueriesForYourItems/operation/postV2SearchReportTableDetails)
 *
 * Дополнительный параметр выбора списка товаров в таблице:
 *  - `positionCluster` — средняя позиция в поиске
 *
 * Параметры `includeSubstitutedSKUs` и `includeSearchTexts` не могут одновременно иметь значение `false`.
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
 * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
 *
 * POST /api/v2/search-report/report
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/analytics
 */
export type PostV2SearchReportReportInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /** Описание отсутствует в OpenAPI WB. */
    readonly currentPeriod: {
      /**
       * Дата начала периода. Не позднее `end`. Не ранее 365 суток от сегодня
       *
       * Формат: `date`.
       *
       * Пример: `"2024-02-10"`.
       */
      readonly start: string;

      /**
       * Дата окончания периода. Не ранее 365 суток от сегодня
       *
       * Формат: `date`.
       *
       * Пример: `"2024-02-10"`.
       */
      readonly end: string;
    };

    /** Описание отсутствует в OpenAPI WB. */
    readonly pastPeriod?: {
      /**
       * Дата начала периода. Не позднее `end`. Не ранее 365 суток от сегодня
       *
       * Формат: `date`.
       *
       * Пример: `"2024-02-08"`.
       */
      readonly start: string;

      /**
       * Дата окончания периода. Не позднее даты перед датой начала `currentPeriod`. Не ранее 365 суток от сегодня
       *
       * Формат: `date`.
       *
       * Пример: `"2024-02-08"`.
       */
      readonly end: string;
    };

    /**
     * Список артикулов WB для фильтрации
     *
     * Пример: `[162579635,166699779]`.
     */
    readonly nmIds?: readonly number[];

    /**
     * Список ID предметов для фильтрации
     *
     * Пример: `[32,64]`.
     */
    readonly subjectIds?: readonly number[];

    /**
     * Список брендов для фильтрации
     *
     * Пример: `["Adidas","Nike"]`.
     */
    readonly brandNames?: readonly string[];

    /**
     * Список ID ярлыков для фильтрации
     *
     * Пример: `[3,5,6]`.
     */
    readonly tagIds?: readonly number[];

    /** Описание отсутствует в OpenAPI WB. */
    readonly positionCluster:
      | "all"
      | "firstHundred"
      | "secondHundred"
      | "below";

    /** Описание отсутствует в OpenAPI WB. */
    readonly orderBy: {
      /**
       * Поле для сортировки:
       *  - `avgPosition` — по средней позиции
       *  - `addToCart` — по добавлениям в корзину
       *  - `openCard` — по открытию карточки (переход на страницу товара)
       *  - `orders` — по количеству заказов
       *  - `cartToOrder` — по конверсии в заказ из поиска
       *  - `openToCart` — по конверсии в корзину из поиска
       *  - `visibility` — по видимости товара
       *  - `minPrice` — по минимальной цене
       *  - `maxPrice` — по максимальной цене
       *
       * Пример: `"avgPosition"`.
       */
      readonly field:
        | "avgPosition"
        | "openCard"
        | "addToCart"
        | "openToCart"
        | "orders"
        | "cartToOrder"
        | "visibility"
        | "minPrice"
        | "maxPrice";

      /**
       * Порядок сортировки:
       *  - `asc` — по возрастанию
       *  - `desc` — по убыванию
       *
       * Пример: `"asc"`.
       */
      readonly mode: "asc" | "desc";
    };

    /**
     * Показать данные по прямым запросам с [подменным артикулом](https://seller.wildberries.ru/help-center/article/A-524)
     *
     * Пример: `true`.
     *
     * Значение по умолчанию: `true`.
     */
    readonly includeSubstitutedSKUs?: boolean;

    /**
     * Показать данные по поисковым запросам без учёта подменного артикула
     *
     * Пример: `false`.
     *
     * Значение по умолчанию: `true`.
     */
    readonly includeSearchTexts?: boolean;

    /**
     * Количество групп товаров в ответе
     *
     * Формат: `uint32`.
     *
     * Пример: `130`.
     *
     * Максимальное значение: 1000.
     */
    readonly limit: number;

    /**
     * После какого элемента выдавать данные
     *
     * Формат: `uint32`.
     *
     * Пример: `50`.
     */
    readonly offset: number;
  };
};
/**
 * Успешный ответ метода «Основная страница».
 *
 * 200: Успешно.
 */
export type PostV2SearchReportReportResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly data: {
    /** Описание отсутствует в OpenAPI WB. */
    readonly commonInfo: {
      /**
       * Рейтинг продавца
       */
      readonly supplierRating: {
        /**
         * Текущий рейтинг продавца
         *
         * Формат: `float64`.
         *
         * Пример: `5.3`.
         */
        readonly current: number;

        /**
         * Динамика по сравнению с предыдущим периодом, %
         *
         * Формат: `float64`.
         *
         * Пример: `5.4`.
         */
        readonly dynamics?: number;
      };

      /**
       * Количество товаров в рекламе
       */
      readonly advertisedProducts: {
        /**
         * Текущее количество товаров в рекламе
         *
         * Пример: `5`.
         */
        readonly current: number;

        /**
         * Динамика по сравнению с предыдущим периодом, %
         *
         * Пример: `50`.
         */
        readonly dynamics?: number;
      };

      /**
       * Общее количество товаров
       *
       * Формат: `uint64`.
       *
       * Пример: `150`.
       */
      readonly totalProducts: number;
    };

    /** Описание отсутствует в OpenAPI WB. */
    readonly positionInfo: {
      /**
       * Средняя позиция товара в результатах поиска
       */
      readonly average: {
        /**
         * Текущая средняя позиция товара
         *
         * Пример: `5`.
         */
        readonly current: number;

        /**
         * Динамика по сравнению с предыдущим периодом, %
         *
         * Пример: `50`.
         */
        readonly dynamics?: number;
      };

      /**
       * Медианная позиция товара в результатах поиска
       */
      readonly median: {
        /**
         * Текущая медианная позиция товара
         *
         * Пример: `5`.
         */
        readonly current: number;

        /**
         * Динамика по сравнению с предыдущим периодом, %
         *
         * Пример: `50`.
         */
        readonly dynamics?: number;
      };

      /**
       * Данные для чарта по средней и медианной позиции товара в результатах поиска
       */
      readonly chartItems: readonly {
        /**
         * Дата
         *
         * Пример: `"2024-10-19"`.
         */
        readonly dt: string;

        /**
         * Средняя позиция товара в результатах поиска
         *
         * Формат: `uint64`.
         *
         * Пример: `1`.
         */
        readonly average: number;

        /**
         * Медианная позиция товара в результатах поиска
         *
         * Формат: `uint64`.
         *
         * Пример: `1`.
         */
        readonly median: number;
      }[];

      /** Описание отсутствует в OpenAPI WB. */
      readonly clusters: {
        /**
         * от 1 до 100
         */
        readonly firstHundred: {
          /**
           * Текущее количество товаров
           *
           * Пример: `5`.
           */
          readonly current: number;

          /**
           * Динамика по сравнению с предыдущим периодом, %
           *
           * Пример: `50`.
           */
          readonly dynamics?: number;
        };

        /**
         * от 101 до 200
         */
        readonly secondHundred: {
          /**
           * Текущее количество товаров
           *
           * Пример: `5`.
           */
          readonly current: number;

          /**
           * Динамика по сравнению с предыдущим периодом, %
           *
           * Пример: `50`.
           */
          readonly dynamics?: number;
        };

        /**
         * от 201 и ниже
         */
        readonly below: {
          /**
           * Текущее количество товаров
           *
           * Пример: `5`.
           */
          readonly current: number;

          /**
           * Динамика по сравнению с предыдущим периодом, %
           *
           * Пример: `50`.
           */
          readonly dynamics?: number;
        };
      };
    };

    /** Описание отсутствует в OpenAPI WB. */
    readonly visibilityInfo: {
      /**
       * Видимость — процент вероятности, что пользователь увидит карточку товара. Зависит от средней позиции
       */
      readonly visibility: {
        /**
         * Видимость в текущий период
         *
         * Пример: `5`.
         */
        readonly current: number;

        /**
         * Динамика по сравнению с предыдущим периодом, %
         *
         * Пример: `50`.
         */
        readonly dynamics?: number;
      };

      /**
       * Количество переходов в карточку товара из поиска
       */
      readonly openCard: {
        /**
         * Текущее количество переходов
         *
         * Пример: `5`.
         */
        readonly current: number;

        /**
         * Динамика по сравнению с предыдущим периодом, %
         *
         * Пример: `50`.
         */
        readonly dynamics?: number;
      };

      /**
       * Данные для отрисовки графика в личном кабинете по видимости и переходам в карточки по дням
       */
      readonly byDay?: readonly {
        /** Описание отсутствует в OpenAPI WB. */ readonly dt: string;

        /**
         * Видимость карточки в результатах поиска, %
         *
         * Формат: `uint64`.
         *
         * Пример: `100`.
         */
        readonly visibility: number;

        /**
         * Количество переходов в карточку
         *
         * Формат: `uint64`.
         *
         * Пример: `124`.
         */
        readonly open: number;
      }[];

      /**
       * Данные для отрисовки графика в личном кабинете по видимости и переходам в карточки по неделям
       */
      readonly byWeek?: readonly {
        /** Описание отсутствует в OpenAPI WB. */ readonly dt: string;

        /**
         * Видимость карточки в результатах поиска, %
         *
         * Формат: `uint64`.
         *
         * Пример: `100`.
         */
        readonly visibility: number;

        /**
         * Количество переходов в карточку
         *
         * Формат: `uint64`.
         *
         * Пример: `124`.
         */
        readonly open: number;
      }[];

      /**
       * Данные для отрисовки графика в личном кабинете по видимости и переходам в карточки по месяцам
       */
      readonly byMonth?: readonly {
        /** Описание отсутствует в OpenAPI WB. */ readonly dt: string;

        /**
         * Видимость карточки в результатах поиска, %
         *
         * Формат: `uint64`.
         *
         * Пример: `100`.
         */
        readonly visibility: number;

        /**
         * Количество переходов в карточку
         *
         * Формат: `uint64`.
         *
         * Пример: `124`.
         */
        readonly open: number;
      }[];
    };

    /**
     * Список элементов таблицы
     */
    readonly groups?: readonly {
      /**
       * Название предмета
       *
       * Пример: `"Phones"`.
       */
      readonly subjectName?: string;

      /**
       * ID предмета
       *
       * Формат: `uint64`.
       *
       * Пример: `50`.
       */
      readonly subjectId?: number;

      /**
       * Бренд
       *
       * Пример: `"Apple"`.
       */
      readonly brandName?: string;

      /**
       * Название ярлыка
       *
       * Пример: `"phones"`.
       */
      readonly tagName?: string;

      /**
       * ID ярлыка
       *
       * Формат: `int64`.
       *
       * Пример: `65`.
       */
      readonly tagId?: number;

      /**
       * Метрики товара в таблице
       */
      readonly metrics: {
        /**
         * Средняя позиция товара в результатах поиска
         */
        readonly avgPosition: {
          /**
           * Текущая средняя позиция
           *
           * Пример: `5`.
           */
          readonly current: number;

          /**
           * Динамика по сравнению с предыдущим периодом, %
           *
           * Пример: `50`.
           */
          readonly dynamics?: number;
        };

        /**
         * Количество переходов в карточку товара из поиска
         */
        readonly openCard: {
          /**
           * Текущее количество переходов
           *
           * Пример: `5`.
           */
          readonly current: number;

          /**
           * Динамика по сравнению с предыдущим периодом, %
           *
           * Пример: `50`.
           */
          readonly dynamics?: number;
        };

        /**
         * Сколько раз товар из поиска добавили в корзину
         */
        readonly addToCart: {
          /**
           * Текущее количество
           *
           * Пример: `5`.
           */
          readonly current: number;

          /**
           * Динамика по сравнению с предыдущим периодом, %
           *
           * Пример: `50`.
           */
          readonly dynamics?: number;
        };

        /**
         * Конверсия в корзину из поиска — доля добавлений товара в корзину по отношению ко всем переходам в карточку товара из поиска
         */
        readonly openToCart: {
          /**
           * Текущая конверсия
           *
           * Пример: `5`.
           */
          readonly current: number;

          /**
           * Динамика по сравнению с предыдущим периодом, %
           *
           * Пример: `50`.
           */
          readonly dynamics?: number;
        };

        /**
         * Сколько раз товары из поиска заказали
         */
        readonly orders: {
          /**
           * Текущее количество
           *
           * Пример: `5`.
           */
          readonly current: number;

          /**
           * Динамика по сравнению с предыдущим периодом, %
           *
           * Пример: `50`.
           */
          readonly dynamics?: number;
        };

        /**
         * Конверсия в заказ из поиска — доля заказов товара по отношению ко всем добавлениям товара из поиска в корзину
         */
        readonly cartToOrder: {
          /**
           * Текущая конверсия
           *
           * Пример: `5`.
           */
          readonly current: number;

          /**
           * Динамика по сравнению с предыдущим периодом, %
           *
           * Пример: `50`.
           */
          readonly dynamics?: number;
        };

        /**
         * Процент видимости товара в результатах поиска
         */
        readonly visibility: {
          /**
           * Текущий процент видимости
           *
           * Пример: `5`.
           */
          readonly current: number;

          /**
           * Динамика по сравнению с предыдущим периодом, %
           *
           * Пример: `50`.
           */
          readonly dynamics?: number;
        };
      };

      /**
       * Массив товаров группы
       */
      readonly items: readonly {
        /**
         * Артикул WB
         *
         * Формат: `int64`.
         *
         * Пример: `268913787`.
         */
        readonly nmId?: number;

        /**
         * Название товара
         *
         * Пример: `"iPhone 13 256 ГБ Серебристый"`.
         */
        readonly name?: string;

        /**
         * Артикул продавца
         *
         * Пример: `"wb3ha2668w"`.
         */
        readonly vendorCode?: string;

        /**
         * Название предмета
         *
         * Пример: `"Смартфоны"`.
         */
        readonly subjectName?: string;

        /**
         * Бренд
         *
         * Пример: `"Apple"`.
         */
        readonly brandName?: string;

        /**
         * URL главного фото карточки товара
         *
         * Пример: `"https://basket-12.wbbasket.ru/vol1788/part178840/178840836/images/c246x328/1.webp"`.
         */
        readonly mainPhoto?: string;

        /**
         * Находится ли товар в продвижении в Поисковой выдаче
         *
         * Пример: `false`.
         */
        readonly isAdvertised?: boolean;

        /**
         * Искали ли товар по подменному артикулу.
         *
         * Поле будет в ответе при наличии в запросе `includeSubstitutedSKUs` и/или `includeSearchTexts`
         *
         * Пример: `true`.
         */
        readonly isSubstitutedSKU?: boolean;

        /**
         * Есть ли рейтинг у карточки товара
         *
         * Пример: `true`.
         */
        readonly isCardRated?: boolean;

        /**
         * Рейтинг карточки товара
         *
         * Формат: `float64`.
         *
         * Пример: `6`.
         */
        readonly rating?: number;

        /**
         * Рейтинг по отзывам
         *
         * Формат: `float64`.
         *
         * Пример: `1`.
         */
        readonly feedbackRating?: number;

        /**
         * Цена
         */
        readonly price?: {
          /**
           * Минимальная цена продавца со скидкой продавца (без учёта скидки WB Клуба)
           *
           * Формат: `uint64`.
           *
           * Пример: `150`.
           */
          readonly minPrice: number;

          /**
           * Максимальная цена продавца со скидкой продавца (без учёта скидки WB Клуба)
           *
           * Формат: `uint64`.
           *
           * Пример: `300`.
           */
          readonly maxPrice: number;
        };

        /**
         * Средняя позиция товара в результатах поиска
         */
        readonly avgPosition?: {
          /**
           * Текущая средняя позиция
           *
           * Пример: `5`.
           */
          readonly current: number;

          /**
           * Динамика по сравнению с предыдущим периодом, %
           *
           * Пример: `50`.
           */
          readonly dynamics?: number;
        };

        /**
         * Количество переходов в карточку товара из поиска
         */
        readonly openCard?: {
          /**
           * Текущее количество переходов
           *
           * Пример: `5`.
           */
          readonly current: number;

          /**
           * Динамика по сравнению с предыдущим периодом, %
           *
           * Пример: `50`.
           */
          readonly dynamics?: number;
        };

        /**
         * Сколько раз товар из поиска добавили в корзину
         */
        readonly addToCart?: {
          /**
           * Текущее количество
           *
           * Пример: `5`.
           */
          readonly current: number;

          /**
           * Динамика по сравнению с предыдущим периодом, %
           *
           * Пример: `50`.
           */
          readonly dynamics?: number;
        };

        /**
         * Конверсия в корзину из поиска — доля добавлений товара в корзину по отношению ко всем переходам в карточку товара из поиска
         */
        readonly openToCart?: {
          /**
           * Текущая конверсия
           *
           * Пример: `5`.
           */
          readonly current: number;

          /**
           * Динамика по сравнению с предыдущим периодом, %
           *
           * Пример: `50`.
           */
          readonly dynamics?: number;
        };

        /**
         * Сколько раз товары из поиска заказали
         */
        readonly orders?: {
          /**
           * Текущее количество
           *
           * Пример: `5`.
           */
          readonly current: number;

          /**
           * Динамика по сравнению с предыдущим периодом, %
           *
           * Пример: `50`.
           */
          readonly dynamics?: number;
        };

        /**
         * Конверсия в заказ из поиска — доля заказов товара по отношению ко всем добавлениям товара из поиска в корзину
         */
        readonly cartToOrder?: {
          /**
           * Текущая конверсия
           *
           * Пример: `5`.
           */
          readonly current: number;

          /**
           * Динамика по сравнению с предыдущим периодом, %
           *
           * Пример: `50`.
           */
          readonly dynamics?: number;
        };

        /**
         * Процент видимости товара в результатах поиска
         */
        readonly visibility?: {
          /**
           * Текущий процент видимости
           *
           * Пример: `5`.
           */
          readonly current: number;

          /**
           * Динамика по сравнению с предыдущим периодом, %
           *
           * Пример: `50`.
           */
          readonly dynamics?: number;
        };
      }[];
    }[];

    /** Описание отсутствует в OpenAPI WB. */
    readonly currency: string;
  };
};
