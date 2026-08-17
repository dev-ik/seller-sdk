// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Лимиты закреплённых отзывов».
 *
 * Метод возвращает лимиты закреплённых отзывов по тарифу и подписке.
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
 * GET /api/feedbacks/v1/pins/limits
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/communications
 */
export type GetFeedbacksV1PinsLimitsInput = undefined;
/**
 * Успешный ответ метода «Лимиты закреплённых отзывов».
 *
 * 200: Успешно.
 */
export type GetFeedbacksV1PinsLimitsResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly data: {
    /** Описание отсутствует в OpenAPI WB. */
    readonly subscription?: {
      /**
       * Максимальное количество закреплённых отзывов в одной карточке товара или в группе [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек
       *
       * Пример: `2`.
       */
      readonly perUnitLimit: number;

      /**
       * Сколько ещё отзывов можно закрепить
       *
       * Пример: `5`.
       */
      readonly remaining: number;

      /**
       * Общий лимит закреплений
       *
       * Пример: `15`.
       */
      readonly totalLimit: number;

      /**
       * Количество закреплённых отзывов не ограничено:
       *  - `true` — да
       *  - `false` — нет
       *
       * Пример: `false`.
       */
      readonly unlimited: boolean;

      /**
       * Текущее количество закреплённых отзывов
       *
       * Пример: `10`.
       */
      readonly used: number;
    } | null;

    /** Описание отсутствует в OpenAPI WB. */
    readonly tariff?: {
      /**
       * Максимальное количество закреплённых отзывов в одной карточке товара или в группе [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек
       *
       * Пример: `2`.
       */
      readonly perUnitLimit: number;

      /**
       * Сколько ещё отзывов можно закрепить
       *
       * Пример: `5`.
       */
      readonly remaining: number;

      /**
       * Общий лимит закреплений
       *
       * Пример: `15`.
       */
      readonly totalLimit: number;

      /**
       * Количество закреплённых отзывов не ограничено:
       *  - `true` — да
       *  - `false` — нет
       *
       * Пример: `false`.
       */
      readonly unlimited: boolean;

      /**
       * Текущее количество закреплённых отзывов
       *
       * Пример: `10`.
       */
      readonly used: number;
    } | null;
  };
};
