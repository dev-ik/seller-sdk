// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получение истории пополнений счёта».
 *
 * Метод возвращает историю пополнений счёта **WB Продвижение** за заданный период.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 сек | 1 запрос | 1 сек | 5 запросов |
 * | Сервисный | 1 сек | 1 запрос | 1 сек | 5 запросов |
 * | Базовый с секретом | 1 сек | 1 запрос | 1 сек | 5 запросов |
 * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
 *
 * GET /adv/v1/payments
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/promotion
 */
export type GetV1PaymentsInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query?: {
    /**
     * Начало интервала
     *
     * Формат: `date`.
     *
     * Пример: `"2023-07-31"`.
     */
    readonly from?: string;

    /**
     * Конец интервала.
     *
     * (Минимальный интервал 1 день, максимальный 31)
     *
     * Формат: `date`.
     *
     * Пример: `"2023-08-02"`.
     */
    readonly to?: string;
  };
};
/**
 * Успешный ответ метода «Получение истории пополнений счёта».
 *
 * 200: Успешно.
 *
 * 204: История пополнений счета не найдена.
 */
export type GetV1PaymentsResponse =
  | readonly {
      /**
       * ID платежа
       */
      readonly id?: number;

      /**
       * Дата платежа
       *
       * Формат: `time-date`.
       */
      readonly date?: string;

      /**
       * Сумма платежа
       */
      readonly sum?: number;

      /**
       * Тип источника списания:
       * - `0` — Счёт
       * - `1` — Баланс
       * - `3` — Картой
       */
      readonly type?: number;

      /**
       * Статус:
       * - `0` — ошибка
       * - `1` — обработано
       */
      readonly statusId?: number;

      /**
       * Статус операции при оплате картой:
       * - `success` — успех
       * - `fail` — неуспех
       * - `pending` — в ожидании ответа
       * - `unknown` — неизвестно
       */
      readonly cardStatus?: string;

      /**
       * Валюта [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
       *
       * Формат: `ISO 4217`.
       */
      readonly currency?: string;
    }[]
  | undefined;
