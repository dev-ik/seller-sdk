// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить отчёт».
 *
 * Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
 *  Персональному токену,
 *  Сервисному токену
 *
 * Метод формирует набор данных об оценках товаров.
 *
 * Данные отчёта обновляются 1 раз в час.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 3 запроса | 20 сек | 3 запроса |
 *
 * POST /api/analytics/v2/item-rating
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/analytics
 */
export type PostV2ItemRatingInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /** Описание отсутствует в OpenAPI WB. */
    readonly currentPeriod: {
      /**
       * Дата начала периода. Не ранее 364 суток от вчерашнего дня и не позднее `end`
       *
       * Формат: `date`.
       *
       * Пример: `"2026-02-10"`.
       */
      readonly start: string;

      /**
       * Дата окончания периода. Не ранее 364 суток от вчерашнего дня
       *
       * Формат: `date`.
       *
       * Пример: `"2026-02-10"`.
       */
      readonly end: string;
    };

    /** Описание отсутствует в OpenAPI WB. */
    readonly pastPeriod?: {
      /**
       * Дата начала периода. Не ранее 364 суток от вчерашнего дня и не позднее `end`
       *
       * Формат: `date`.
       *
       * Пример: `"2026-02-08"`.
       */
      readonly start: string;

      /**
       * Дата окончания периода. Не ранее 364 суток от вчерашнего дня и не позднее даты перед началом `currentPeriod`.
       *
       * Формат: `date`.
       *
       * Пример: `"2026-02-08"`.
       */
      readonly end: string;
    };

    /**
     * Список артикулов WB для фильтрации
     *
     * Пример: `[162579635,166699779]`.
     *
     * Максимальное количество элементов: 50.
     */
    readonly nmIds?: readonly number[];

    /**
     * Список ID предметов для фильтрации
     *
     * Пример: `[232,1364]`.
     *
     * Максимальное количество элементов: 50.
     */
    readonly subjectIds?: readonly number[];

    /**
     * Список брендов для фильтрации
     *
     * Пример: `["Abikas","Tike"]`.
     *
     * Максимальное количество элементов: 50.
     */
    readonly brandNames?: readonly string[];

    /**
     * Список ID ярлыков для фильтрации
     *
     * Пример: `[3,5,6]`.
     *
     * Максимальное количество элементов: 50.
     */
    readonly tagIds?: readonly number[];

    /**
     * Не возвращать товары без продаж:
     *  - `true` — да, возвращаются только товары с продажами за период, указанный в объекте `currentPeriod`
     *  - `false` — нет, возвращаются все товары, если не указаны другие параметры
     *
     * Пример: `true`.
     *
     * Значение по умолчанию: `false`.
     */
    readonly isNotIncludeNmsWithoutSales?: boolean;

    /**
     * Возвращаются ли в ответе только скрытые товары:
     *  - `true` — да, возвращаются только скрытые из каталога товары
     *  - `false` — нет, возвращаются все товары, если не указаны другие параметры
     *
     * Пример: `true`.
     *
     * Значение по умолчанию: `false`.
     */
    readonly onlyShadowedNms?: boolean;

    /** Описание отсутствует в OpenAPI WB. */
    readonly orderBy: {
      /**
       * Поле для сортировки:
       *  - `feedbackRating` — Рейтинг товара по отзывам
       *  - `feedbackCount` — Все отзывы за период
       *  - `fiveStar` — Отзывы 5 звёзд
       *  - `fourStar` — Отзывы 4 звезды
       *  - `threeStar` — Отзывы 3 звезды
       *  - `twoStar` — Отзывы 2 звезды
       *  - `oneStar` — Отзывы 1 звезда
       *  - `disqualified` — Отзывы, исключённые из рейтинга
       *
       * Пример: `"feedbackCount"`.
       */
      readonly field:
        | "feedbackRating"
        | "feedbackCount"
        | "fiveStar"
        | "fourStar"
        | "threeStar"
        | "twoStar"
        | "oneStar"
        | "disqualified";

      /**
       * Порядок сортировки:
       *  - `asc` — по возрастанию
       *  - `desc` — по убыванию
       *
       * Пример: `"desc"`.
       */
      readonly mode: "asc" | "desc";
    };

    /**
     * Количество товаров в ответе
     *
     * Формат: `uint32`.
     *
     * Пример: `130`.
     *
     * Значение по умолчанию: `100`.
     *
     * Максимальное значение: 1000.
     */
    readonly limit?: number;

    /**
     * Сколько элементов пропустить. Например, для значения `10` ответ начнётся с 11 элемента
     *
     * Формат: `uint32`.
     *
     * Пример: `50`.
     */
    readonly offset: number;
  };
};
/**
 * Успешный ответ метода «Получить отчёт».
 *
 * 200: Успешно.
 */
export type PostV2ItemRatingResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly data: {
    /** Описание отсутствует в OpenAPI WB. */
    readonly sellerRating: {
      /**
       * Текущий рейтинг
       *
       * Формат: `float64`.
       *
       * Пример: `3.56`.
       */
      readonly current: number;

      /**
       * Динамика по сравнению с предыдущим периодом, %
       *
       * Формат: `float64`.
       *
       * Пример: `0.03`.
       */
      readonly dynamics?: number;
    };

    /** Описание отсутствует в OpenAPI WB. */
    readonly feedbackIncrease: {
      /**
       * Прирост оценок за период
       *
       * Пример: `26`.
       */
      readonly current: number;

      /**
       * Всего оценок
       *
       * Пример: `116`.
       */
      readonly total: number;

      /**
       * Динамика по сравнению с предыдущим периодом, %
       *
       * Пример: `23`.
       */
      readonly dynamics: number;

      /**
       * Отзывы 5 звёзд
       */
      readonly fiveStar: {
        /**
         * Прирост оценок за период
         *
         * Пример: `19`.
         */
        readonly current: number;

        /**
         * Динамика по сравнению с предыдущим периодом, %
         *
         * Пример: `17`.
         */
        readonly dynamics?: number;

        /**
         * Всего оценок
         *
         * Пример: `51`.
         */
        readonly total: number;
      };

      /**
       * Отзывы 4 звезды
       */
      readonly fourStar: {
        /**
         * Прирост оценок за период
         *
         * Пример: `2`.
         */
        readonly current: number;

        /**
         * Динамика по сравнению с предыдущим периодом, %
         *
         * Пример: `1`.
         */
        readonly dynamics?: number;

        /**
         * Всего оценок
         *
         * Пример: `13`.
         */
        readonly total: number;
      };

      /**
       * Отзывы 3 звезды
       */
      readonly threeStar: {
        /**
         * Прирост оценок за период
         *
         * Пример: `1`.
         */
        readonly current: number;

        /**
         * Динамика по сравнению с предыдущим периодом, %
         *
         * Пример: `1`.
         */
        readonly dynamics?: number;

        /**
         * Всего оценок
         *
         * Пример: `11`.
         */
        readonly total: number;
      };

      /**
       * Отзывы 2 звезды
       */
      readonly twoStar: {
        /**
         * Прирост оценок за период
         *
         * Пример: `5`.
         */
        readonly current: number;

        /**
         * Динамика по сравнению с предыдущим периодом, %
         *
         * Пример: `5`.
         */
        readonly dynamics?: number;

        /**
         * Всего оценок
         *
         * Пример: `34`.
         */
        readonly total: number;
      };

      /**
       * Отзывы 1 звезда
       */
      readonly oneStar: {
        /**
         * Прирост оценок за период
         *
         * Пример: `-1`.
         */
        readonly current: number;

        /**
         * Динамика по сравнению с предыдущим периодом, %
         *
         * Пример: `-1`.
         */
        readonly dynamics?: number;

        /**
         * Всего оценок
         *
         * Пример: `7`.
         */
        readonly total: number;
      };
    };

    /**
     * Данные по товарам
     */
    readonly items: readonly {
      /**
       * Артикул WB
       *
       * Формат: `int64`.
       *
       * Пример: `123456789`.
       */
      readonly nmId: number;

      /**
       * Название товара
       *
       * Пример: `"iPh 17 512 ГБ Серебристый"`.
       */
      readonly title: string;

      /**
       * Артикул продавца
       *
       * Пример: `"wb3ha2668w"`.
       */
      readonly vendorCode: string;

      /**
       * ID предмета
       *
       * Формат: `uint64`.
       *
       * Пример: `50`.
       */
      readonly subjectId: number;

      /**
       * Название предмета
       *
       * Пример: `"Phones"`.
       */
      readonly subjectName: string;

      /**
       * Бренд
       *
       * Пример: `"Attlee"`.
       */
      readonly brandName: string;

      /**
       * Название ярлыка
       *
       * Пример: `"Phones"`.
       */
      readonly tagName: string;

      /**
       * ID ярлыка
       *
       * Формат: `int64`.
       *
       * Пример: `65`.
       */
      readonly tagId: number;

      /**
       * Отзыв закреплён
       *
       * Пример: `true`.
       */
      readonly pinnedFeedback: boolean;

      /**
       * Рейтинг карточки товара
       *
       * Формат: `float64`.
       *
       * Пример: `10`.
       */
      readonly rating: number;

      /**
       * Рейтинг товара по отзывам
       */
      readonly feedbackRating: {
        /**
         * Текущий рейтинг
         *
         * Формат: `float64`.
         *
         * Пример: `3.87`.
         */
        readonly current: number;

        /**
         * Динамика по сравнению с предыдущим периодом, %
         *
         * Формат: `float64`.
         *
         * Пример: `0.31`.
         */
        readonly dynamics?: number;

        /**
         * Сколько процентов товаров этого предмета у других продавцов имеют рейтинг ниже, чем у этого товара
         *
         * Формат: `float64`.
         *
         * Пример: `1.7`.
         */
        readonly percentile: number | null;
      };

      /**
       * Все отзывы за период
       */
      readonly feedbackCount: {
        /**
         * Прирост оценок за период
         *
         * Пример: `12`.
         */
        readonly current: number;

        /**
         * Динамика по сравнению с предыдущим периодом, %
         *
         * Пример: `9`.
         */
        readonly dynamics?: number;
      };

      /**
       * Отзывы 5 звёзд
       */
      readonly fiveStar: {
        /**
         * Прирост оценок за период
         *
         * Пример: `9`.
         */
        readonly current: number;

        /**
         * Динамика по сравнению с предыдущим периодом, %
         *
         * Пример: `7`.
         */
        readonly dynamics?: number;
      };

      /**
       * Отзывы 4 звезды
       */
      readonly fourStar: {
        /**
         * Прирост оценок за период
         *
         * Пример: `0`.
         */
        readonly current: number;

        /**
         * Динамика по сравнению с предыдущим периодом, %
         *
         * Пример: `-1`.
         */
        readonly dynamics?: number;
      };

      /**
       * Отзывы 3 звезды
       */
      readonly threeStar: {
        /**
         * Прирост оценок за период
         *
         * Пример: `1`.
         */
        readonly current: number;

        /**
         * Динамика по сравнению с предыдущим периодом, %
         *
         * Пример: `1`.
         */
        readonly dynamics?: number;
      };

      /**
       * Отзывы 2 звезды
       */
      readonly twoStar: {
        /**
         * Прирост оценок за период
         *
         * Пример: `2`.
         */
        readonly current: number;

        /**
         * Динамика по сравнению с предыдущим периодом, %
         *
         * Пример: `2`.
         */
        readonly dynamics?: number;
      };

      /**
       * Отзывы 1 звезда
       */
      readonly oneStar: {
        /**
         * Прирост оценок за период
         *
         * Пример: `0`.
         */
        readonly current: number;

        /**
         * Динамика по сравнению с предыдущим периодом, %
         *
         * Пример: `0`.
         */
        readonly dynamics?: number;
      };

      /**
       * Отзывы, исключённые из рейтинга
       *
       * Пример: `7`.
       */
      readonly disqualified: number;

      /**
       * Является ли товар скрытым из каталога:
       *  - `true` — товар скрыт из каталога
       *  - `false` — товар не скрыт из каталога
       *
       * Пример: `true`.
       */
      readonly isShadowed: boolean;
    }[];
  };
};
