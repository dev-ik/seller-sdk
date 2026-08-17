// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Работа с вопросами».
 *
 * В зависимости от тела запроса, метод позволяет:
 *  - отметить [вопрос](/openapi/user-communication#tag/questions/operation/getV1Questions) как просмотренный
 *  - отклонить вопрос
 *  - ответить на вопрос или отредактировать ответ
 *
 *  Отредактировать ответ на вопрос можно 1 раз в течение 60 дней после отправки ответа
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
 * PATCH /api/v1/questions
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/communications
 */
export type PatchV1QuestionsInput = {
  /**
   * Тело запроса.
   */
  readonly body?:
    | {
        /**
         * Id вопроса
         *
         * Пример: `"n5um6IUBQOOSTxXoo0gV"`.
         */
        readonly id: string;

        /**
         * Просмотрен ли вопрос
         *
         * Пример: `true`.
         */
        readonly wasViewed: boolean;
      }
    | {
        /**
         * Id вопроса
         *
         * Пример: `"n5um6IUBQOOSTxXoo0gV"`.
         */
        readonly id: string;

        /** Описание отсутствует в OpenAPI WB. */
        readonly answer: {
          /**
           * Текст ответа
           *
           * Пример: `"текст ответа"`.
           */
          readonly text: string;
        };

        /**
         * Статус вопроса:
         *  - `none` - вопрос отклонён продавцом (такой вопрос не отображается на портале покупателей)
         *  - `wbRu` - ответ предоставлен, вопрос отображается на сайте покупателей.
         */
        readonly state: string;
      };
};
/**
 * Успешный ответ метода «Работа с вопросами».
 *
 * 200: Успешно.
 */
export type PatchV1QuestionsResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly data?: Readonly<Record<string, never>> | null;

  /**
   * Есть ли ошибка
   */
  readonly error?: boolean;

  /**
   * Описание ошибки
   */
  readonly errorText?: string;

  /**
   * Дополнительные ошибки
   */
  readonly additionalErrors?: readonly string[] | null;
};
