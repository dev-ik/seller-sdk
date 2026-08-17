// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Ответ на заявку покупателя».
 *
 * Метод отправляет ответ на [заявку](/openapi/user-communication#tag/buyersReturns/operation/getV1Claims) покупателя на возврат товаров.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 мин | 20 запросов | 3 сек | 10 запросов |
 * | Сервисный | 1 мин | 20 запросов | 3 сек | 10 запросов |
 * | Базовый с секретом | 1 мин | 20 запросов | 3 сек | 10 запросов |
 * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
 *
 * PATCH /api/v1/claim
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/communications
 */
export type PatchV1ClaimInput = {
  /**
   * Ответ на заявку
   */
  readonly body: {
    /**
     * ID заявки
     *
     * Формат: `UUID`.
     *
     * Пример: `"fe3e9337-e9f9-423c-8930-946a8ebef80"`.
     */
    readonly id: string;

    /**
     * Действие с заявкой.
     * Используйте одно из значений массива `actions` — ответа [метода получения заявок](./user-communication#tag/buyersReturns/operation/getV1Claims)
     *
     * Пример: `"rejectcustom"`.
     */
    readonly action: string;

    /**
     * Комментарий.
     * Применимо только при `"action":"rejectcustom"` или `"action":"approvecc1"`. При `"action":"rejectcustom"` параметр обязателен
     *
     * Пример: `"Фото не имеет отношения к товару в заявке"`.
     *
     * Минимальная длина: 10.
     *
     * Максимальная длина: 1000.
     */
    readonly comment?: string;
  };
};
/**
 * Успешный ответ метода «Ответ на заявку покупателя».
 *
 * 200: Успешно.
 */
export type PatchV1ClaimResponse = undefined;
