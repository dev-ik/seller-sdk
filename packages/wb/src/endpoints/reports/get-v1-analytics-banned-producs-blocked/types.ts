// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить отчёт».
 *
 * Метод возвращает список [заблокированных карточек товаров продавца](https://seller.wildberries.ru/analytics-reports/banned-products) с причинами блокировки.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 10 сек | 1 запрос | 10 сек | 6 запросов |
 * | Сервисный | 10 сек | 1 запрос | 10 сек | 6 запросов |
 * | Базовый с секретом | 10 сек | 1 запрос | 10 сек | 6 запросов |
 * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
 *
 * GET /api/v1/analytics/banned-products/blocked
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/reports
 */
export type GetV1AnalyticsBannedProducsBlockedInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query: {
    /**
     * Сортировка
     * - `brand` — по бренду
     * - `nmId` — по артикулу WB
     * - `title` — по наименованию товара
     * - `vendorCode` — по артикулу продавца
     * - `reason` — по причине блокировки
     *
     * Пример: `"nmId"`.
     */
    readonly sort: "brand" | "nmId" | "title" | "vendorCode" | "reason";

    /**
     * Порядок выдачи
     * - `desc` — от наибольшего числового значения к наименьшему, от последнего по алфавиту значения к первому
     * - `asc` — от наименьшего числового значения к наибольшему, от первого по алфавиту значения к последнему
     *
     * Пример: `"asc"`.
     */
    readonly order: "desc" | "asc";
  };
};
/**
 * Успешный ответ метода «Получить отчёт».
 *
 * 200: Успешно.
 */
export type GetV1AnalyticsBannedProducsBlockedResponse = {
  /**
   * Отчёт
   */
  readonly report?: readonly {
    /**
     * Бренд
     *
     * Пример: `"Тест22"`.
     */
    readonly brand?: string;

    /**
     * Артикул WB
     *
     * Пример: `82722944`.
     */
    readonly nmId?: number;

    /**
     * Наименование товара
     *
     * Пример: `"Гуминовые кислоты - биоактивный противовирусный комплекс на"`.
     */
    readonly title?: string;

    /**
     * Артикул продавца
     *
     * Пример: `"пкdeир76"`.
     */
    readonly vendorCode?: string;

    /**
     * Причина блокировки
     *
     * Пример: `"Контактные данные Продавца и ссылки на иные сайты/группы/сообщества на фотографиях Товара"`.
     */
    readonly reason?: string;
  }[];
};
