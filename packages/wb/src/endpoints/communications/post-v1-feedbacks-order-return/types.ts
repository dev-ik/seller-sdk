// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Возврат товара по ID отзыва».
 *
 * Метод запрашивает возврат товара, по которому оставлен [отзыв](/openapi/user-communication#tag/feedbacks/operation/getV1Feedbacks).
 *
 * Возврат доступен для отзывов с полем `"isAbleReturnProductOrders": true`.
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
 * POST /api/v1/feedbacks/order/return
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/communications
 */
export type PostV1FeedbacksOrderReturnInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * ID отзыва
     */
    readonly feedbackId?: string;
  };
};
/**
 * Успешный ответ метода «Возврат товара по ID отзыва».
 *
 * 200: Успешно.
 */
export type PostV1FeedbacksOrderReturnResponse = {
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
