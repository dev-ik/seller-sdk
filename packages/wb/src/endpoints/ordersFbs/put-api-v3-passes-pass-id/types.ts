// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Обновить пропуск».
 *
 * Метод обновляет данные [пропуска продавца](/openapi/orders-fbs#tag/Propuska-FBS/paths/~1api~1v3~1passes/get). В том числе, можно обновить данные привязанного склада WB.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * PUT /api/v3/passes/{passId}
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-fbs
 */
export type PutApiV3PassesPassIdInput = {
  /**
   * Параметры пути.
   */
  readonly path: {
    /**
     * ID пропуска
     *
     * Формат: `int64`.
     *
     * Пример: `45`.
     */
    readonly passId: number;
  } /**
   * Общая длина ФИО ограничена от 6 до 100 символов. В номере машины могут быть только буквы и цифры.
   */;
  readonly body: {
    /**
     * Имя водителя
     *
     * Пример: `"Александр"`.
     *
     * Минимальная длина: 1.
     */
    readonly firstName: string;

    /**
     * Фамилия водителя
     *
     * Пример: `"Петров"`.
     *
     * Минимальная длина: 6.
     */
    readonly lastName: string;

    /**
     * Марка машины
     *
     * Пример: `"Lamborghini"`.
     *
     * Минимальная длина: 1.
     *
     * Максимальная длина: 100.
     */
    readonly carModel: string;

    /**
     * Номер машины
     *
     * Пример: `"A456BC123"`.
     *
     * Минимальная длина: 6.
     *
     * Максимальная длина: 9.
     */
    readonly carNumber: string;

    /**
     * ID склада
     *
     * Формат: `int64`.
     *
     * Пример: `15`.
     *
     * Минимальное значение: 1.
     */
    readonly officeId: number;
  };
};
/**
 * Успешный ответ метода «Обновить пропуск».
 *
 * 204: Обновлено.
 */
export type PutApiV3PassesPassIdResponse = undefined;
