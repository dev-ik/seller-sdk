// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Список закреплённых и откреплённых отзывов».
 *
 * Метод предоставляет список закреплённых и откреплённых отзывов.
 *
 * Откреплёнными считаются только отзывы, которые были откреплены автоматически по причинам, указанным в ответе в поле `unpinnedCause`.
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
 * GET /api/feedbacks/v1/pins
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/communications
 */
export type GetFeedbacksV1PinsInput = {
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
     * Пример: `256972151`.
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

    /**
     * ID последней операции закрепления (пагинатор)
     *
     * Пример: `741`.
     */
    readonly next?: number;

    /**
     * Количество отзывов на одной странице (пагинация)
     *
     * Пример: `100`.
     *
     * Значение по умолчанию: `500`.
     *
     * Максимальное значение: 500.
     */
    readonly limit?: number;
  };
};
/**
 * Успешный ответ метода «Список закреплённых и откреплённых отзывов».
 *
 * 200: Успешно.
 */
export type GetFeedbacksV1PinsResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly data: readonly {
    /**
     * Дата и время закрепления или открепления
     *
     * Формат: `date-time`.
     *
     * Пример: `"2020-01-01T15:04:05Z"`.
     */
    readonly changeStateAt: string;

    /**
     * ID для [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек товаров
     *
     * Пример: `256971531`.
     */
    readonly imtId: number;

    /**
     * Артикул WB
     *
     * Пример: `177974151`.
     */
    readonly nmId: number;

    /**
     * ID операции закрепления отзыва
     *
     * Пример: `1857762`.
     */
    readonly pinId: number;

    /** Описание отсутствует в OpenAPI WB. */
    readonly pinMethod: "subscription" | "tariff";

    /** Описание отсутствует в OpenAPI WB. */
    readonly pinOn: "imt" | "nm";

    /**
     * ID отзыва
     *
     * Пример: `"DibuRAImknLyiqgzvGcU"`.
     */
    readonly feedbackId: string;

    /** Описание отсутствует в OpenAPI WB. */
    readonly state: "pinned" | "unpinned";

    /**
     * Причина открепления отзыва:
     *  - `sysTariffUnpinned` — закончилась подписка или тарифная опция
     *  - `sysLimitReached` — закончился общий лимит по подписке
     *  - `sysNoratingUnpinned` — отзыв исключён из рейтинга. Например, удалён или забанен
     *  - `sysAdditionalSlot` — к карточке или к группе [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек прикреплено максимальное количество отзывов
     *
     * Пример: `"sysTariffUnpinned"`.
     */
    readonly unpinnedCause?:
      | "sysTariffUnpinned"
      | "sysLimitReached"
      | "sysNoratingUnpinned"
      | "sysAdditionalSlot";
  }[];

  /**
   * Параметр пагинации. Укажите это значение в запросе, чтобы получить следующий пакет данных. Если поле отсутствует, вы получили все данные
   *
   * Пример: `200`.
   */
  readonly next?: number;
};
