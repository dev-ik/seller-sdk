// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Количество закреплённых и откреплённых отзывов».
 *
 * Метод возвращает количество закреплённых и откреплённых отзывов за заданный период.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Вопросы и отзывы:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 сек | 3 запроса | 333 мс | 6 запросов |
 * | Сервисный | 1 сек | 3 запроса | 333 мс | 6 запросов |
 * | Базовый с секретом | 1 сек | 3 запроса | 333 мс | 6 запросов |
 * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
 *
 * GET /api/feedbacks/v1/pins/count
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/communications
 */
export type GetFeedbacksV1PinsCountInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query?: {
    /**
     * Закреплён ли отзыв:
     *  - `pinned` — да
     *  - `unpinned` — нет
     *
     * Пример: `"pinned"`.
     */
    readonly state?: "pinned" | "unpinned";

    /**
     * Место закрепления отзыва:
     *  - `nm` — карточка товара
     *  - `imt` — группа [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек товаров
     *
     * Пример: `"nm"`.
     */
    readonly pinOn?: "nm" | "imt";

    /**
     * ID для [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек товаров.
     * Един для всех артикулов WB группы объединённых карточек.
     * У каждой карточки товара есть `imtId`, даже если она не объединена с другими карточками
     *
     * Пример: `256971531`.
     */
    readonly imtId?: number;

    /**
     * Артикул WB
     *
     * Пример: `177974151`.
     */
    readonly nmId?: number;

    /**
     * ID отзыва
     *
     * Пример: `789`.
     */
    readonly feedbackId?: number;

    /**
     * Дата закрепления первого отзыва в списке
     *
     * Формат: `date-time`.
     *
     * Пример: `"2020-01-01T15:04:05Z"`.
     */
    readonly dateFrom?: string;

    /**
     * Дата закрепления последнего отзыва в списке
     *
     * Формат: `date-time`.
     *
     * Пример: `"2020-02-01T15:04:05Z"`.
     */
    readonly dateTo?: string;
  };
};
/**
 * Успешный ответ метода «Количество закреплённых и откреплённых отзывов».
 *
 * 200: Успешно.
 */
export type GetFeedbacksV1PinsCountResponse = {
  /**
   * Количество отзывов
   */
  readonly data: number;
};
