// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Статистика поисковых кластеров».
 *
 * Метод формирует статистику по поисковым кластерам за указанный период.
 *
 * Можно использовать для кампаний с моделями оплаты `cpm` — за показы и `cpc` — за клики.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 мин | 10 запросов | 6 сек | 20 запросов |
 * | Сервисный | 1 мин | 10 запросов | 6 сек | 20 запросов |
 * | Базовый с секретом | 1 мин | 10 запросов | 6 сек | 20 запросов |
 * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
 *
 * POST /adv/v0/normquery/stats
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/promotion
 */
export type PostV0NormqueryStatsInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * Дата начала периода
     *
     * Формат: `date`.
     *
     * Пример: `"2025-10-07"`.
     */
    readonly from: string;

    /**
     * Дата окончания периода
     *
     * Формат: `date`.
     *
     * Пример: `"2025-10-08"`.
     */
    readonly to: string;

    /**
     * Максимальное количество элементов: 100.
     */
    readonly items: readonly {
      /**
       * ID кампании
       */
      readonly advert_id: number;

      /**
       * Артикул WB
       */
      readonly nm_id: number;
    }[];
  };
};
/**
 * Успешный ответ метода «Статистика поисковых кластеров».
 *
 * 200: Успешно.
 */
export type PostV0NormqueryStatsResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly stats: readonly {
    /**
     * ID кампании
     */
    readonly advert_id: number;

    /**
     * Артикул WB
     */
    readonly nm_id: number;

    /** Описание отсутствует в OpenAPI WB. */
    readonly stats?: readonly {
      /**
       * Поисковый кластер
       */
      readonly norm_query?: string;

      /**
       * Количество просмотров.
       *
       * Для кампаний с типом оплаты `cpc` — за клики — значение будет `null`
       */
      readonly views?: number | null;

      /**
       * Количество кликов
       */
      readonly clicks?: number;

      /**
       * Количество добавлений товаров в корзину
       */
      readonly atbs?: number;

      /**
       * Количество заказов
       */
      readonly orders?: number;

      /**
       * Кликабельность — отношение числа кликов к количеству показов, %.
       *
       * Для кампаний с типом оплаты `cpc` — за клики — значение будет `null`
       *
       * Формат: `double`.
       */
      readonly ctr?: number | null;

      /**
       * Стоимость одного клика в базовых единицах валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
       *
       * Формат: `double`.
       */
      readonly cpc?: number;

      /**
       * Средняя стоимость за тысячу показов в базовых единицах валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances).
       *
       * Для кампаний с типом оплаты `cpc` — за клики — значение будет `null`
       *
       * Формат: `double`.
       */
      readonly cpm?: number | null;

      /**
       * Средняя позиция товара на страницах поисковой выдачи
       *
       * Формат: `double`.
       */
      readonly avg_pos?: number;

      /**
       * Количество заказанных товаров, шт.
       */
      readonly shks?: number;

      /**
       * Затраты на продвижение товаров в конкретном поисковом кластере кампании
       *
       * Формат: `double`.
       */
      readonly spend?: number;

      /**
       * Валюта [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
       *
       * Формат: `ISO 4217`.
       */
      readonly currency?: string;
    }[];
  }[];
};
