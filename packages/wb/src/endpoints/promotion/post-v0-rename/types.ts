// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Переименование кампании».
 *
 * Метод меняет название [кампании](/openapi/promotion#tag/campaigns/operation/getV2Adverts). Это можно сделать в любой момент существования кампании.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 сек | 5 запросов | 200 мс | 5 запросов |
 * | Сервисный | 1 сек | 5 запросов | 200 мс | 5 запросов |
 * | Базовый с секретом | 1 сек | 5 запросов | 200 мс | 5 запросов |
 * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
 *
 * POST /adv/v0/rename
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/promotion
 */
export type PostV0RenameInput = {
  /**
   * Тело запроса.
   */
  readonly body?: {
    /**
     * ID кампании, в которой меняется название
     */
    readonly advertId: number;

    /**
     * Новое название (максимум 100 символов)
     */
    readonly name: string;
  };
};
/**
 * Успешный ответ метода «Переименование кампании».
 *
 * 200: Успешно.
 */
export type PostV0RenameResponse = undefined;
