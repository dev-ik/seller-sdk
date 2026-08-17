// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получение истории затрат».
 *
 * Метод формирует список фактических затрат на рекламные кампании за заданный период.
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
 * GET /adv/v1/upd
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/promotion
 */
export type GetV1UpdInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query: {
    /**
     * Начало интервала
     *
     * Формат: `date`.
     *
     * Пример: `"2023-07-31"`.
     */
    readonly from: string;

    /**
     * Конец интервала.
     *
     * (Минимальный интервал 1 день, максимальный 31)
     *
     * Формат: `date`.
     *
     * Пример: `"2023-08-02"`.
     */
    readonly to: string;
  };
};
/**
 * Успешный ответ метода «Получение истории затрат».
 *
 * 200: Успешно.
 */
export type GetV1UpdResponse = readonly {
  /**
   * Номер выставленного документа
   */
  readonly updNum?: number;

  /**
   * Время списания
   *
   * Формат: `time-date`.
   */
  readonly updTime?: string | null;

  /**
   * Выставленная сумма в базовых единицах валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
   */
  readonly updSum?: number;

  /**
   * ID кампании
   */
  readonly advertId?: number;

  /**
   * Название кампании
   */
  readonly campName?: string;

  /**
   * Тип кампании
   */
  readonly advertType?: number;

  /**
   * Источник списания:
   *  - `Баланс`
   *  - `Бонусы`
   *  - `Счёт`
   *  - `Кэшбэк`
   */
  readonly paymentType?: string;

  /**
   * Статус кампании:
   * - `-1` — удалена, процесс удаления будет завершён в течение 10 минут
   * - `4` — готова к запуску
   * - `7` — завершена
   * - `8` — отменена
   * - `9` — активна
   * - `11` — на паузе
   */
  readonly advertStatus?: number;
}[];
