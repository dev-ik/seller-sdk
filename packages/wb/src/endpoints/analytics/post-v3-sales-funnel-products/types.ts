// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Статистика карточек товаров за период».
 *
 * Метод формирует отчёт о товарах, сравнивая ключевые показатели за текущий период с аналогичным прошлым.
 *
 * Данные отчёта обновляются 1 раз в час.
 *
 * В течение часа после события появляется большая часть данных:
 *  - о заказах
 *  - о переходах в карточку товара
 *  - о добавлениях товаров в корзину
 *
 * Малая часть этих данных может появляться в течение нескольких дней.
 *
 * Выкупы, отмены и возвраты отображаются в отчёте за тот день, когда товар был заказан. Например, если заказ был сделан 1 января, а покупатель вернул товар 10 января, данные об этом возврате появятся в отчёте за 1 января.
 *
 * Окончательные итоги продаж вы можете отслеживать с помощью [детализаций к отчётам реализации](/openapi/financial-reports-and-accounting#tag/financialReports).
 *
 * Параметры `brandNames`,`subjectIds`, `tagIds`, `nmIds` могут быть пустыми `[]`, тогда в ответе возвращаются все карточки продавца.
 *
 * Если вы указали несколько параметров, в ответе будут карточки, в которых есть одновременно все эти параметры. Если карточки не подходят по параметрам запроса, вернётся пустой ответ `[]`.
 *
 * Можно получить отчёт максимум за последние 365 дней.
 *
 * В данных предыдущего периода:
 *  * Данные в `pastPeriod` указаны за такой же период, что и в `selectedPeriod`
 *  * Если дата начала `pastPeriod` раньше, чем год назад от текущей даты, она будет приведена к виду: `pastPeriod.start = текущая дата — 365 дней`
 *
 * Можно использовать пагинацию.
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
 * POST /api/analytics/v3/sales-funnel/products
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/analytics
 */
export type PostV3SalesFunnelProductsInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /** Описание отсутствует в OpenAPI WB. */
    readonly selectedPeriod: {
      /**
       * Начало периода
       *
       * Формат: `date`.
       *
       * Пример: `"2023-06-01"`.
       */
      readonly start: string;

      /**
       * Конец периода
       *
       * Формат: `date`.
       *
       * Пример: `"2024-03-01"`.
       */
      readonly end: string;
    };

    /** Описание отсутствует в OpenAPI WB. */
    readonly pastPeriod?: {
      /**
       * Начало периода
       *
       * Формат: `date`.
       *
       * Пример: `"2023-06-01"`.
       */
      readonly start: string;

      /**
       * Конец периода
       *
       * Формат: `date`.
       *
       * Пример: `"2024-03-01"`.
       */
      readonly end: string;
    };

    /**
     * Артикулы WB, по которым нужно составить отчёт. Оставьте пустым, чтобы получить отчёт обо всех товарах
     *
     * Пример: `[1234567]`.
     *
     * Минимальное количество элементов: 0.
     *
     * Максимальное количество элементов: 1000.
     */
    readonly nmIds?: readonly number[];

    /**
     * Список брендов для фильтрации
     *
     * Пример: `["nike","adidas"]`.
     */
    readonly brandNames?: readonly string[];

    /**
     * Список ID предметов для фильтрации
     *
     * Пример: `[64,334]`.
     */
    readonly subjectIds?: readonly number[];

    /**
     * Список ID ярлыков для фильтрации
     *
     * Пример: `[32,53]`.
     */
    readonly tagIds?: readonly number[];

    /**
     * Скрыть удалённые товары
     *
     * Пример: `false`.
     */
    readonly skipDeletedNm?: boolean;

    /** Описание отсутствует в OpenAPI WB. */
    readonly orderBy?: {
      /**
       * Поле для сортировки:
       *  - `openCard` — Перешли в карточку
       *  - `addToCart` — Положили в корзину
       *  - `orderCount` — Заказали товаров, шт
       *  - `orderSum` — Заказали на сумму
       *  - `buyoutCount` — Выкупили товаров, шт
       *  - `buyoutSum` — Выкупили на сумму
       *  - `cancelCount` — Отменили и вернули товаров, шт
       *  - `cancelSum` — Отменили и вернули на сумму
       *  - `avgPrice` — Средняя цена
       *  - `stockMpQty` — Остатки на складах продавца, шт
       *  - `stockWbQty` — Остатки на складах WB, шт
       *  - `shareOrderPercent` — Доля в выручке
       *  - `addToWishlist` — Добавили в **Отложенные**
       *  - `timeToReady` — Среднее время доставки
       *  - `localizationPercent` — Локальные заказы в рамках одного региона
       *  - `wbClub.orderCount` — Заказали товаров с WB Клубом, шт
       *  - `wbClub.orderSum` — Заказали с WB Клубом на сумму
       *  - `wbClub.buyoutSum` — Выкупили товаров с WB Клубом, шт
       *  - `wbClub.buyoutCount` — Процент выкупа с WB Клубом
       *  - `wbClub.cancelSum` — Отменили и вернули товаров с WB Клубом на сумму
       *  - `wbClub.avgPrice` — Средняя цена с WB Клубом
       *  - `wbClub.buyoutPercent` — Процент выкупа с WB Клубом
       *  - `wbClub.avgOrderCountPerDay` — Среднее количество заказов в день с WB Клубом, шт
       *  - `wbClub.cancelCount` — Отменили и вернули товаров с WB Клубом, шт
       *
       * Пример: `"openCard"`.
       *
       * Значение по умолчанию: `"openCard"`.
       */
      readonly field:
        | "openCard"
        | "addToCart"
        | "orderCount"
        | "orderSum"
        | "buyoutCount"
        | "buyoutSum"
        | "cancelCount"
        | "cancelSum"
        | "avgPrice"
        | "stockMpQty"
        | "stockWbQty"
        | "shareOrderPercent"
        | "addToWishlist"
        | "timeToReady"
        | "localizationPercent"
        | "wbClub.orderCount"
        | "wbClub.orderSum"
        | "wbClub.buyoutSum"
        | "wbClub.cancelSum"
        | "wbClub.buyoutCount"
        | "wbClub.avgPrice"
        | "wbClub.buyoutPercent"
        | "wbClub.avgOrderCountPerDay"
        | "wbClub.cancelCount";

      /**
       * Порядок сортировки:
       *  - `asc` — по возрастанию
       *  - `desc` — по убыванию
       *
       * Значение по умолчанию: `"desc"`.
       */
      readonly mode: "asc" | "desc";
    };

    /**
     * Количество карточек товара в ответе
     *
     * Формат: `uint32`.
     *
     * Пример: `231`.
     *
     * Значение по умолчанию: `50`.
     *
     * Максимальное значение: 1000.
     */
    readonly limit?: number;

    /**
     * Сколько элементов пропустить. Например, для значения `10` ответ начнётся с 11 элемента
     *
     * Формат: `uint32`.
     *
     * Пример: `10`.
     *
     * Значение по умолчанию: `0`.
     */
    readonly offset?: number;
  };
};
/**
 * Успешный ответ метода «Статистика карточек товаров за период».
 *
 * 200: Успешно.
 */
export type PostV3SalesFunnelProductsResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly data: {
    /**
     * Список карточек товаров
     */
    readonly products: readonly {
      /** Описание отсутствует в OpenAPI WB. */
      readonly product: {
        /**
         * Артикул WB
         *
         * Формат: `int64`.
         *
         * Пример: `268913787`.
         */
        readonly nmId: number;

        /**
         * Название карточки товара
         *
         * Формат: `int64`.
         *
         * Пример: `"Кроссовки для бега"`.
         */
        readonly title: string;

        /**
         * Артикул продавца
         *
         * Пример: `"12345456"`.
         */
        readonly vendorCode: string;

        /**
         * Бренд
         *
         * Пример: `"Demix"`.
         */
        readonly brandName: string;

        /**
         * ID предмета
         *
         * Формат: `uint64`.
         *
         * Пример: `105`.
         */
        readonly subjectId: number;

        /**
         * Название предмета
         *
         * Пример: `"Кроссовки"`.
         */
        readonly subjectName: string;

        /**
         * Ярлыки
         */
        readonly tags: readonly {
          /**
           * ID ярлыка
           *
           * Формат: `uint64`.
           *
           * Пример: `1`.
           */
          readonly id: number;

          /**
           * Название ярлыка
           *
           * Пример: `"Обувь"`.
           */
          readonly name: string;
        }[];

        /**
         * Оценка карточки
         *
         * Формат: `float32`.
         *
         * Пример: `4.5`.
         */
        readonly productRating: number;

        /**
         * Оценка пользователей
         *
         * Формат: `float32`.
         *
         * Пример: `4`.
         */
        readonly feedbackRating: number;

        /**
         * Остатки
         */
        readonly stocks: {
          /**
           * Общее количество остатков на складах WB на текущий день, шт.
           *
           * Формат: `uint32`.
           *
           * Пример: `0`.
           */
          readonly wb: number;

          /**
           * Общее количество остатков на складах продавца на текущий день, шт.
           *
           * Формат: `uint32`.
           *
           * Пример: `0`.
           */
          readonly mp: number;

          /**
           * Сумма остатков на складах на текущий день, шт.
           *
           * Формат: `uint32`.
           *
           * Пример: `0`.
           */
          readonly balanceSum: number;
        };
      };

      /** Описание отсутствует в OpenAPI WB. */
      readonly statistic: {
        /** Описание отсутствует в OpenAPI WB. */
        readonly selected: {
          /** Описание отсутствует в OpenAPI WB. */
          readonly period: {
            /**
             * Начало периода
             *
             * Формат: `date`.
             *
             * Пример: `"2023-06-01"`.
             */
            readonly start: string;

            /**
             * Конец периода
             *
             * Формат: `date`.
             *
             * Пример: `"2024-03-01"`.
             */
            readonly end: string;
          };

          /**
           * Количество переходов в карточку товара
           *
           * Формат: `uint32`.
           *
           * Пример: `45`.
           */
          readonly openCount: number;

          /**
           * Положили в корзину, шт.
           *
           * Формат: `int32`.
           *
           * Пример: `34`.
           */
          readonly cartCount: number;

          /**
           * Заказали товаров, шт.
           *
           * Формат: `uint32`.
           *
           * Пример: `19`.
           */
          readonly orderCount: number;

          /**
           * Заказали на сумму
           *
           * Формат: `uint32`.
           *
           * Пример: `1262`.
           */
          readonly orderSum: number;

          /**
           * Выкупили товаров, шт.
           *
           * Формат: `uint32`.
           *
           * Пример: `19`.
           */
          readonly buyoutCount: number;

          /**
           * Выкупили на сумму
           *
           * Формат: `uint32`.
           *
           * Пример: `1262`.
           */
          readonly buyoutSum: number;

          /**
           * Отменили и вернули товаров, шт.
           *
           * Формат: `uint32`.
           *
           * Пример: `0`.
           */
          readonly cancelCount: number;

          /**
           * Отменили и вернули на сумму
           *
           * Формат: `uint32`.
           *
           * Пример: `0`.
           */
          readonly cancelSum: number;

          /**
           * Средняя цена
           *
           * Формат: `uint32`.
           *
           * Пример: `1262`.
           */
          readonly avgPrice: number;

          /**
           * Среднее количество заказов в день, шт.
           *
           * Формат: `float64`.
           *
           * Пример: `0.04`.
           */
          readonly avgOrdersCountPerDay: number;

          /**
           * Доля в выручке
           *
           * Формат: `float64`.
           *
           * Пример: `3`.
           */
          readonly shareOrderPercent: number;

          /**
           * Добавили в **Отложенные**
           *
           * Пример: `455`.
           */
          readonly addToWishlist: number;

          /** Описание отсутствует в OpenAPI WB. */
          readonly timeToReady: {
            /**
             * Дни
             *
             * Пример: `1`.
             */
            readonly days: number;

            /**
             * Часы
             *
             * Пример: `8`.
             */
            readonly hours: number;

            /**
             * Минуты
             *
             * Пример: `34`.
             */
            readonly mins: number;
          };

          /**
           * Локальные заказы в рамках одного региона
           *
           * Пример: `46`.
           */
          readonly localizationPercent: number;

          /** Описание отсутствует в OpenAPI WB. */
          readonly wbClub: {
            /**
             * Заказали товаров с WB Клубом, шт.
             *
             * Формат: `uint32`.
             *
             * Пример: `19`.
             */
            readonly orderCount: number;

            /**
             * Заказали с WB Клубом на сумму
             *
             * Формат: `uint32`.
             *
             * Пример: `1262`.
             */
            readonly orderSum: number;

            /**
             * Выкупили с WB Клубом на сумму
             *
             * Формат: `uint32`.
             *
             * Пример: `1262`.
             */
            readonly buyoutSum: number;

            /**
             * Выкупили товаров с WB Клубом, шт.
             *
             * Формат: `uint32`.
             *
             * Пример: `19`.
             */
            readonly buyoutCount: number;

            /**
             * Отменили и вернули с WB Клубом на сумму
             *
             * Формат: `uint32`.
             *
             * Пример: `0`.
             */
            readonly cancelSum: number;

            /**
             * Отменили и вернули товаров с WB Клубом, шт.
             *
             * Формат: `uint32`.
             *
             * Пример: `0`.
             */
            readonly cancelCount: number;

            /**
             * Средняя цена с WB Клубом
             *
             * Формат: `uint32`.
             *
             * Пример: `1262`.
             */
            readonly avgPrice: number;

            /**
             * Процент выкупа с WB Клубом
             *
             * Формат: `uint32`.
             *
             * Пример: `43`.
             */
            readonly buyoutPercent: number;

            /**
             * Среднее количество заказов с WB Клубом в день, шт.
             *
             * Формат: `float64`.
             *
             * Пример: `0.04`.
             */
            readonly avgOrderCountPerDay: number;
          };

          /** Описание отсутствует в OpenAPI WB. */
          readonly conversions: {
            /**
             * Конверсия в корзину. Какой процент посетителей, открывших карточку товара, добавили товар в корзину, %
             *
             * Формат: `int`.
             *
             * Пример: `19`.
             */
            readonly addToCartPercent: number;

            /**
             * Конверсия в заказ. Какой процент посетителей, добавивших товар в корзину, сделали заказ, %
             *
             * Формат: `int`.
             *
             * Пример: `65`.
             */
            readonly cartToOrderPercent: number;

            /**
             * Процент выкупа. Какой процент посетителей, заказавших товар, его выкупили. Без учёта товаров, которые еще доставляются покупателю, %
             *
             * Формат: `int`.
             */
            readonly buyoutPercent: number;
          };
        };

        /** Описание отсутствует в OpenAPI WB. */
        readonly past?: {
          /** Описание отсутствует в OpenAPI WB. */
          readonly period: {
            /**
             * Начало периода
             *
             * Формат: `date`.
             *
             * Пример: `"2023-06-01"`.
             */
            readonly start: string;

            /**
             * Конец периода
             *
             * Формат: `date`.
             *
             * Пример: `"2024-03-01"`.
             */
            readonly end: string;
          };

          /**
           * Количество переходов в карточку товара
           *
           * Формат: `uint32`.
           *
           * Пример: `45`.
           */
          readonly openCount: number;

          /**
           * Положили в корзину, шт.
           *
           * Формат: `int32`.
           *
           * Пример: `34`.
           */
          readonly cartCount: number;

          /**
           * Заказали товаров, шт.
           *
           * Формат: `uint32`.
           *
           * Пример: `19`.
           */
          readonly orderCount: number;

          /**
           * Заказали на сумму
           *
           * Формат: `uint32`.
           *
           * Пример: `1262`.
           */
          readonly orderSum: number;

          /**
           * Выкупили товаров, шт.
           *
           * Формат: `uint32`.
           *
           * Пример: `19`.
           */
          readonly buyoutCount: number;

          /**
           * Выкупили на сумму
           *
           * Формат: `uint32`.
           *
           * Пример: `1262`.
           */
          readonly buyoutSum: number;

          /**
           * Отменили и вернули товаров, шт.
           *
           * Формат: `uint32`.
           *
           * Пример: `0`.
           */
          readonly cancelCount: number;

          /**
           * Отменили и вернули на сумму
           *
           * Формат: `uint32`.
           *
           * Пример: `0`.
           */
          readonly cancelSum: number;

          /**
           * Средняя цена
           *
           * Формат: `uint32`.
           *
           * Пример: `1262`.
           */
          readonly avgPrice: number;

          /**
           * Среднее количество заказов в день, шт.
           *
           * Формат: `float64`.
           *
           * Пример: `0.04`.
           */
          readonly avgOrdersCountPerDay: number;

          /**
           * Доля в выручке
           *
           * Формат: `float64`.
           *
           * Пример: `3`.
           */
          readonly shareOrderPercent: number;

          /**
           * Добавили в **Отложенные**
           *
           * Пример: `455`.
           */
          readonly addToWishlist: number;

          /** Описание отсутствует в OpenAPI WB. */
          readonly timeToReady: {
            /**
             * Дни
             *
             * Пример: `1`.
             */
            readonly days: number;

            /**
             * Часы
             *
             * Пример: `8`.
             */
            readonly hours: number;

            /**
             * Минуты
             *
             * Пример: `34`.
             */
            readonly mins: number;
          };

          /**
           * Локальные заказы в рамках одного региона
           *
           * Пример: `46`.
           */
          readonly localizationPercent: number;

          /** Описание отсутствует в OpenAPI WB. */
          readonly wbClub: {
            /**
             * Заказали товаров с WB Клубом, шт.
             *
             * Формат: `uint32`.
             *
             * Пример: `19`.
             */
            readonly orderCount: number;

            /**
             * Заказали с WB Клубом на сумму
             *
             * Формат: `uint32`.
             *
             * Пример: `1262`.
             */
            readonly orderSum: number;

            /**
             * Выкупили с WB Клубом на сумму
             *
             * Формат: `uint32`.
             *
             * Пример: `1262`.
             */
            readonly buyoutSum: number;

            /**
             * Выкупили товаров с WB Клубом, шт.
             *
             * Формат: `uint32`.
             *
             * Пример: `19`.
             */
            readonly buyoutCount: number;

            /**
             * Отменили и вернули с WB Клубом на сумму
             *
             * Формат: `uint32`.
             *
             * Пример: `0`.
             */
            readonly cancelSum: number;

            /**
             * Отменили и вернули товаров с WB Клубом, шт.
             *
             * Формат: `uint32`.
             *
             * Пример: `0`.
             */
            readonly cancelCount: number;

            /**
             * Средняя цена с WB Клубом
             *
             * Формат: `uint32`.
             *
             * Пример: `1262`.
             */
            readonly avgPrice: number;

            /**
             * Процент выкупа с WB Клубом
             *
             * Формат: `uint32`.
             *
             * Пример: `43`.
             */
            readonly buyoutPercent: number;

            /**
             * Среднее количество заказов с WB Клубом в день, шт.
             *
             * Формат: `float64`.
             *
             * Пример: `0.04`.
             */
            readonly avgOrderCountPerDay: number;
          };

          /** Описание отсутствует в OpenAPI WB. */
          readonly conversions: {
            /**
             * Конверсия в корзину. Какой процент посетителей, открывших карточку товара, добавили товар в корзину, %
             *
             * Формат: `int`.
             *
             * Пример: `19`.
             */
            readonly addToCartPercent: number;

            /**
             * Конверсия в заказ. Какой процент посетителей, добавивших товар в корзину, сделали заказ, %
             *
             * Формат: `int`.
             *
             * Пример: `65`.
             */
            readonly cartToOrderPercent: number;

            /**
             * Процент выкупа. Какой процент посетителей, заказавших товар, его выкупили. Без учёта товаров, которые еще доставляются покупателю, %
             *
             * Формат: `int`.
             */
            readonly buyoutPercent: number;
          };
        };

        /** Описание отсутствует в OpenAPI WB. */
        readonly comparison?: {
          /**
           * Динамика переходов в карточку товара
           *
           * Формат: `int`.
           *
           * Пример: `10`.
           */
          readonly openCountDynamic: number;

          /**
           * Динамика добавлений в корзину
           *
           * Формат: `int`.
           *
           * Пример: `30`.
           */
          readonly cartCountDynamic: number;

          /**
           * Динамика количества заказов
           *
           * Формат: `int`.
           *
           * Пример: `-100`.
           */
          readonly orderCountDynamic: number;

          /**
           * Динамика суммы заказов
           *
           * Формат: `int`.
           *
           * Пример: `-100`.
           */
          readonly orderSumDynamic: number;

          /**
           * Динамика выкупов
           *
           * Формат: `int`.
           *
           * Пример: `-100`.
           */
          readonly buyoutCountDynamic: number;

          /**
           * Динамика суммы выкупов
           *
           * Формат: `int`.
           *
           * Пример: `-100`.
           */
          readonly buyoutSumDynamic: number;

          /**
           * Динамика отмен и возвратов товаров
           *
           * Формат: `int`.
           *
           * Пример: `0`.
           */
          readonly cancelCountDynamic: number;

          /**
           * Динамика сумм отмен и возвратов товаров
           *
           * Формат: `int`.
           *
           * Пример: `0`.
           */
          readonly cancelSumDynamic: number;

          /**
           * Динамика среднего количества заказов в день
           *
           * Формат: `int`.
           *
           * Пример: `0`.
           */
          readonly avgOrdersCountPerDayDynamic: number;

          /**
           * Динамика средней цены на товары. Учитываются скидки для акций
           *
           * Формат: `int`.
           *
           * Пример: `-100`.
           */
          readonly avgPriceDynamic: number;

          /**
           * Динамика доли в выручке
           *
           * Формат: `int`.
           *
           * Пример: `-80`.
           */
          readonly shareOrderPercentDynamic: number;

          /**
           * Динамика добавлений товара в избранное
           *
           * Формат: `int`.
           *
           * Пример: `60`.
           */
          readonly addToWishlistDynamic: number;

          /** Описание отсутствует в OpenAPI WB. */
          readonly timeToReadyDynamic: {
            /**
             * Дни
             *
             * Пример: `1`.
             */
            readonly days: number;

            /**
             * Часы
             *
             * Пример: `8`.
             */
            readonly hours: number;

            /**
             * Минуты
             *
             * Пример: `34`.
             */
            readonly mins: number;
          };

          /**
           * Динамика локальных заказов в рамках одного региона
           *
           * Формат: `int`.
           *
           * Пример: `46`.
           */
          readonly localizationPercentDynamic: number;

          /** Описание отсутствует в OpenAPI WB. */
          readonly wbClubDynamic: {
            /**
             * Динамика количества заказов с WB Клубом
             *
             * Формат: `int`.
             *
             * Пример: `-100`.
             */
            readonly orderCount: number;

            /**
             * Динамика суммы заказов с WB Клубом
             *
             * Формат: `int`.
             *
             * Пример: `-100`.
             */
            readonly orderSum: number;

            /**
             * Динамика суммы выкупов с WB Клубом
             *
             * Формат: `int`.
             *
             * Пример: `-100`.
             */
            readonly buyoutSum: number;

            /**
             * Динамика выкупов с WB Клубом
             *
             * Формат: `int`.
             *
             * Пример: `-100`.
             */
            readonly buyoutCount: number;

            /**
             * Динамика сумм отмен и возвратов товаров с WB Клубом
             *
             * Формат: `int`.
             *
             * Пример: `0`.
             */
            readonly cancelSum: number;

            /**
             * Динамика отмен и возвратов товаров с WB Клубом
             *
             * Формат: `int`.
             *
             * Пример: `0`.
             */
            readonly cancelCount: number;

            /**
             * Динамика средней цены на товары с WB Клубом
             *
             * Формат: `int`.
             *
             * Пример: `-100`.
             */
            readonly avgPrice: number;

            /**
             * Динамика процента выкупа с WB Клубом
             *
             * Формат: `int`.
             *
             * Пример: `43`.
             */
            readonly buyoutPercent: number;

            /**
             * Динамика среднего количества заказов с WB Клубом в день
             *
             * Формат: `int`.
             *
             * Пример: `0.04`.
             */
            readonly avgOrderCountPerDay: number;
          };

          /** Описание отсутствует в OpenAPI WB. */
          readonly conversions: {
            /**
             * Конверсия в корзину. Какой процент посетителей, открывших карточку товара, добавили товар в корзину, %
             *
             * Формат: `int`.
             *
             * Пример: `19`.
             */
            readonly addToCartPercent: number;

            /**
             * Конверсия в заказ. Какой процент посетителей, добавивших товар в корзину, сделали заказ, %
             *
             * Формат: `int`.
             *
             * Пример: `65`.
             */
            readonly cartToOrderPercent: number;

            /**
             * Процент выкупа. Какой процент посетителей, заказавших товар, его выкупили. Без учёта товаров, которые еще доставляются покупателю, %
             *
             * Формат: `int`.
             */
            readonly buyoutPercent: number;
          };
        };
      };
    }[];

    /** Описание отсутствует в OpenAPI WB. */
    readonly currency: string;
  };
};
