// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить дату и время доставки».
 *
 * Метод возвращает информацию о выбранных покупателем дате и времени доставки сборочных заданий.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для следующих методов DBW:
 *
 *  получение и обновление списка контактов
 *  получение и удаление идентификаторов маркировки
 *  методы сборочных заданий
 *
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * POST /api/v3/dbw/orders/delivery-date
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-dbw
 */
export type PostV3DbwOrdersDeliveryDateInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * Список ID сборочных заданий
     */
    readonly orders?: readonly number[];
  };
};
/**
 * Успешный ответ метода «Получить дату и время доставки».
 *
 * 200: Успешно.
 */
export type PostV3DbwOrdersDeliveryDateResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly orders?: readonly {
    /**
     * Актуальное время доставки "с"
     *
     * Пример: `"11:11"`.
     */
    readonly dTimeFrom?: string | null;

    /**
     * Актуальное время доставки "по"
     *
     * Пример: `"22:22"`.
     */
    readonly dTimeTo?: string | null;

    /**
     * Прежнее время доставки "с". Доступно первые сутки после изменения
     *
     * Пример: `"12:30"`.
     */
    readonly dTimeFromOld?: string | null;

    /**
     * Прежнее время доставки "по". Доступно первые сутки после изменения
     *
     * Пример: `"22:30"`.
     */
    readonly dTimeToOld?: string | null;

    /**
     * Прежняя дата доставки. Доступна первые сутки после изменения
     *
     * Пример: `"2025-01-28"`.
     */
    readonly dDateOld?: string | null;

    /**
     * Актуальная дата доставки
     *
     * Пример: `"2025-02-20"`.
     */
    readonly dDate?: string;

    /**
     * ID сборочного задания
     *
     * Пример: `1234567890`.
     */
    readonly id?: number;
  }[];
};
