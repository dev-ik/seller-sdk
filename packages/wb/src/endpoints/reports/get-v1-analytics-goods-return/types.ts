// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить отчёт».
 *
 * Метод возвращает отчёт о [возвратах товаров продавцу](https://seller.wildberries.ru/analytics-reports/goods-return).
 *
 * Можно получить отчёт максимум за 31 день.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 мин | 1 запрос | 1 мин | 10 запросов |
 * | Сервисный | 1 мин | 1 запрос | 1 мин | 10 запросов |
 * | Базовый с секретом | 1 мин | 1 запрос | 1 мин | 10 запросов |
 * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
 *
 * GET /api/v1/analytics/goods-return
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/reports
 */
export type GetV1AnalyticsGoodsReturnInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query: {
    /**
     * Дата начала отчётного периода
     *
     * Формат: `date`.
     *
     * Пример: `"2024-08-13"`.
     */
    readonly dateFrom: string;

    /**
     * Дата окончания отчётного периода
     *
     * Формат: `date`.
     *
     * Пример: `"2024-08-27"`.
     */
    readonly dateTo: string;
  };
};
/**
 * Успешный ответ метода «Получить отчёт».
 *
 * 200: Успешно.
 */
export type GetV1AnalyticsGoodsReturnResponse = {
  /**
   * Отчёт
   */
  readonly report?: readonly {
    /**
     * Баркод
     *
     * Пример: `"1680063403480"`.
     */
    readonly barcode?: string;

    /**
     * Бренд
     *
     * Пример: `"dub"`.
     */
    readonly brand?: string;

    /**
     * Дата и время выдачи возврата продавцу
     *
     * Пример: `"2025-03-31T11:33:53"`.
     */
    readonly completedDt?: string | null;

    /**
     * Адрес ПВЗ выдачи возврата
     *
     * Пример: `"Жуковский Улица Маяковского 19"`.
     */
    readonly dstOfficeAddress?: string;

    /**
     * ID ПВЗ выдачи возврата
     *
     * Пример: `310105`.
     */
    readonly dstOfficeId?: number;

    /**
     * Дата и время истечения срока хранения возврата
     *
     * Пример: `"2025-03-31T11:33:53"`.
     */
    readonly expiredDt?: string | null;

    /**
     * Тип статуса возврата:
     *
     *  * `0` — архивный
     *  * `1` — активный
     *
     * Пример: `0`.
     */
    readonly isStatusActive?: 0 | 1;

    /**
     * Артикул WB
     *
     * Пример: `12862181`.
     */
    readonly nmId?: number;

    /**
     * Дата заказа на возврат
     *
     * Формат: `date`.
     *
     * Пример: `"2024-08-26"`.
     */
    readonly orderDt?: string;

    /**
     * Номер сборочного задания
     *
     * Пример: `2034240826`.
     */
    readonly orderId?: number;

    /**
     * Дата и время готовности возврата к выдаче
     *
     * Пример: `"2025-01-31T08:33:50"`.
     */
    readonly readyToReturnDt?: string | null;

    /**
     * Причина возврата
     *
     * Пример: `"Цвет"`.
     */
    readonly reason?: string;

    /**
     * Тип возврата
     *
     * Пример: `"Возврат заблокированного товара"`.
     */
    readonly returnType?: string;

    /**
     * Штрихкод
     *
     * Пример: `23411783472`.
     */
    readonly shkId?: number;

    /**
     * Уникальный ID заказа на возврат
     *
     * Пример: `"ad3817664d3046c5a8d55054d8be96d6"`.
     */
    readonly srid?: string;

    /**
     * Статус возврата
     *
     * Пример: `"В пути в пвз"`.
     */
    readonly status?: string;

    /**
     * Стикер заказа на возврат
     *
     * Пример: `"33811984302"`.
     */
    readonly stickerId?: string;

    /**
     * Предмет
     *
     * Пример: `"Багажные бирки"`.
     */
    readonly subjectName?: string;

    /**
     * Размер
     *
     * Пример: `"0"`.
     */
    readonly techSize?: string;
  }[];
};
