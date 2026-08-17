// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Создать пропуск».
 *
 * Метод создаёт [пропуск продавца](/openapi/orders-fbs#tag/Propuska-FBS/paths/~1api~1v3~1passes/get) с привязкой к складу WB.
 *
 * Пропуск действует 48 часов со времени создания.
 *
 *  Максимум 1 запрос в 10 минут (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца.
 *
 *  Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * POST /api/v3/passes
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-fbs
 */
export type PostApiV3PassesInput = {
  /**
   * Общая длина ФИО ограничена от 6 до 100 символов. В номере машины могут быть только буквы и цифры
   */
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
     * Минимальная длина: 1.
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
 * Успешный ответ метода «Создать пропуск».
 *
 * 201: Создано.
 */
export type PostApiV3PassesResponse = {
  /**
   * ID пропуска продавца
   *
   * Пример: `2`.
   */
  readonly id?: number;
};
