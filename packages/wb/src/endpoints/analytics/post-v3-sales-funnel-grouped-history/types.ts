// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Статистика групп карточек товаров по дням».
 *
 * Метод возвращает статистику карточек товаров по дням или неделям.
 *
 * Карточки товаров сгруппированы по предметам, брендам и ярлыкам.
 *
 * Можно получить данные максимум за последнюю неделю.
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
 * Параметры `brandNames`, `subjectIds`, `tagIds` могут быть пустыми `[]`, тогда группировка происходит по всем карточкам продавца.
 *
 * Произведение количества предметов, брендов, ярлыков в запросе может быть не больше 16. Например, 4 бренда и 4 предмета или 2 предмета, 2 ярлыка и 4 бренда.
 *
 *  Чтобы получать отчёты за период до года, используйте методы Аналитика продавца CSV (/openapi/analytics#tag/sellerAnalyticsCsv) — тип GROUPED_HISTORY_REPORT. Отчёты этого типа доступны только с подпиской Джем (https://seller.wildberries.ru/monetization/jam)
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
 * POST /api/analytics/v3/sales-funnel/grouped/history
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/analytics
 */
export type PostV3SalesFunnelGroupedHistoryInput = {
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
    readonly aggregationLevel?: "day" | "week";
  };
};
/**
 * Успешный ответ метода «Статистика групп карточек товаров по дням».
 *
 * 200: Успешно.
 */
export type PostV3SalesFunnelGroupedHistoryResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly data: readonly {
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
    };

    /**
     * Статистика за период
     */
    readonly history: readonly {
      /**
       * Дата сбора статистики
       *
       * Формат: `date`.
       *
       * Пример: `"2024-10-23"`.
       */
      readonly date: string;

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
       * Формат: `uint32`.
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
       * Процент выкупа
       *
       * Формат: `uint32`.
       *
       * Пример: `35`.
       */
      readonly buyoutPercent: number;

      /**
       * Конверсия в корзину. Какой процент посетителей, открывших карточку товара, добавили товар в корзину, %
       *
       * Формат: `uint32`.
       *
       * Пример: `43`.
       */
      readonly addToCartConversion: number;

      /**
       * Конверсия в заказ. Какой процент посетителей, добавивших товар в корзину, сделали заказ
       *
       * Формат: `uint32`.
       */
      readonly cartToOrderConversion: number;

      /**
       * Количество добавлений товара в **Отложенные**
       *
       * Формат: `uint32`.
       */
      readonly addToWishlistCount: number;
    }[];

    /** Описание отсутствует в OpenAPI WB. */
    readonly currency: string;
  }[];
};
